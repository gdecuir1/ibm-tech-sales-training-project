# IBM DealSprint - IBM Cloud Deployment Guide

## Overview

This guide provides step-by-step instructions for deploying IBM DealSprint to IBM Cloud, including database setup, application deployment, and configuration.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        IBM Cloud                             │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────┐         ┌──────────────────┐          │
│  │   Code Engine    │         │   Databases for  │          │
│  │   (Frontend)     │◄────────┤   PostgreSQL     │          │
│  │   React App      │         │                  │          │
│  └──────────────────┘         └──────────────────┘          │
│           │                                                   │
│           │                                                   │
│           ▼                                                   │
│  ┌──────────────────┐         ┌──────────────────┐          │
│  │   Code Engine    │         │   Cloud Object   │          │
│  │   (Backend)      │◄────────┤   Storage        │          │
│  │   Node.js API    │         │   (Backups)      │          │
│  └──────────────────┘         └──────────────────┘          │
│           │                                                   │
│           ▼                                                   │
│  ┌──────────────────┐         ┌──────────────────┐          │
│  │   App ID         │         │   Log Analysis   │          │
│  │   (Auth)         │         │   (Monitoring)   │          │
│  └──────────────────┘         └──────────────────┘          │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## Prerequisites

### Required Tools

```bash
# Install IBM Cloud CLI
curl -fsSL https://clis.cloud.ibm.com/install/linux | sh

# Install plugins
ibmcloud plugin install code-engine
ibmcloud plugin install cloud-databases
ibmcloud plugin install cloud-object-storage

# Verify installation
ibmcloud --version
ibmcloud plugin list
```

### Required Accounts

- IBM Cloud account (https://cloud.ibm.com)
- GitHub account (for CI/CD)
- Domain name (optional, for custom domain)

## Step 1: Initial Setup

### 1.1 Login to IBM Cloud

```bash
# Login
ibmcloud login

# Select region (us-south recommended)
ibmcloud target -r us-south

# Create resource group
ibmcloud resource group-create dealsprint-rg

# Target resource group
ibmcloud target -g dealsprint-rg
```

### 1.2 Set Environment Variables

```bash
# Set project variables
export PROJECT_NAME="ibm-dealsprint"
export REGION="us-south"
export RESOURCE_GROUP="dealsprint-rg"
```

## Step 2: Database Setup

### 2.1 Create PostgreSQL Instance

```bash
# Create Databases for PostgreSQL instance
ibmcloud resource service-instance-create ${PROJECT_NAME}-db \
  databases-for-postgresql standard ${REGION} \
  -p '{
    "members_memory_allocation_mb": "4096",
    "members_disk_allocation_mb": "20480",
    "members_cpu_allocation_count": "3",
    "backup": {
      "enabled": true,
      "retention_days": 30
    }
  }'

# Wait for provisioning (5-10 minutes)
ibmcloud resource service-instance ${PROJECT_NAME}-db
```

### 2.2 Create Service Credentials

```bash
# Create service key
ibmcloud resource service-key-create ${PROJECT_NAME}-db-key \
  Manager --instance-name ${PROJECT_NAME}-db

# Get credentials
ibmcloud resource service-key ${PROJECT_NAME}-db-key --output json > db-credentials.json

# Extract connection details
cat db-credentials.json | jq -r '.credentials.connection.postgres'
```

### 2.3 Configure Database

```bash
# Get connection string
export DB_CONNECTION=$(cat db-credentials.json | jq -r '.credentials.connection.postgres.composed[0]')

# Connect to database
psql "$DB_CONNECTION"

# Run schema
\i database/schema.sql

# Exit
\q
```

### 2.4 Seed Database

```bash
# Update .env with IBM Cloud credentials
cat > backend/.env << EOF
DB_HOST=$(cat db-credentials.json | jq -r '.credentials.connection.postgres.hosts[0].hostname')
DB_PORT=$(cat db-credentials.json | jq -r '.credentials.connection.postgres.hosts[0].port')
DB_NAME=$(cat db-credentials.json | jq -r '.credentials.connection.postgres.database')
DB_USER=$(cat db-credentials.json | jq -r '.credentials.connection.postgres.authentication.username')
DB_PASSWORD=$(cat db-credentials.json | jq -r '.credentials.connection.postgres.authentication.password')
DB_SSL=true
DB_SSL_REJECT_UNAUTHORIZED=false
EOF

# Run seed script
cd database
node seed.js
cd ..
```

## Step 3: Backend Deployment

### 3.1 Create Code Engine Project

```bash
# Create Code Engine project
ibmcloud ce project create --name ${PROJECT_NAME}

# Select project
ibmcloud ce project select --name ${PROJECT_NAME}
```

### 3.2 Create Secrets

```bash
# Create database secret
ibmcloud ce secret create --name db-credentials \
  --from-literal DB_HOST=$(cat db-credentials.json | jq -r '.credentials.connection.postgres.hosts[0].hostname') \
  --from-literal DB_PORT=$(cat db-credentials.json | jq -r '.credentials.connection.postgres.hosts[0].port') \
  --from-literal DB_NAME=$(cat db-credentials.json | jq -r '.credentials.connection.postgres.database') \
  --from-literal DB_USER=$(cat db-credentials.json | jq -r '.credentials.connection.postgres.authentication.username') \
  --from-literal DB_PASSWORD=$(cat db-credentials.json | jq -r '.credentials.connection.postgres.authentication.password') \
  --from-literal DB_SSL=true \
  --from-literal DB_SSL_REJECT_UNAUTHORIZED=false
```

### 3.3 Build and Deploy Backend

```bash
# Navigate to backend
cd backend

# Create Dockerfile if not exists
cat > Dockerfile << 'EOF'
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3001

CMD ["node", "server.js"]
EOF

# Build and push to IBM Cloud Container Registry
ibmcloud cr namespace-add ${PROJECT_NAME}
ibmcloud cr build -t us.icr.io/${PROJECT_NAME}/backend:latest .

# Deploy to Code Engine
ibmcloud ce application create \
  --name ${PROJECT_NAME}-backend \
  --image us.icr.io/${PROJECT_NAME}/backend:latest \
  --port 3001 \
  --min-scale 1 \
  --max-scale 10 \
  --cpu 0.5 \
  --memory 1G \
  --env-from-secret db-credentials

# Get backend URL
export BACKEND_URL=$(ibmcloud ce app get --name ${PROJECT_NAME}-backend --output json | jq -r '.status.url')
echo "Backend URL: $BACKEND_URL"

cd ..
```

## Step 4: Frontend Deployment

### 4.1 Configure Frontend

```bash
# Navigate to frontend
cd frontend

# Update API endpoint
cat > .env.production << EOF
VITE_API_URL=${BACKEND_URL}
EOF

# Build frontend
npm run build
```

### 4.2 Deploy Frontend

```bash
# Create Dockerfile
cat > Dockerfile << 'EOF'
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
EOF

# Create nginx config
cat > nginx.conf << 'EOF'
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass ${BACKEND_URL};
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Build and deploy
ibmcloud cr build -t us.icr.io/${PROJECT_NAME}/frontend:latest .

ibmcloud ce application create \
  --name ${PROJECT_NAME}-frontend \
  --image us.icr.io/${PROJECT_NAME}/frontend:latest \
  --port 80 \
  --min-scale 1 \
  --max-scale 10 \
  --cpu 0.25 \
  --memory 512M

# Get frontend URL
export FRONTEND_URL=$(ibmcloud ce app get --name ${PROJECT_NAME}-frontend --output json | jq -r '.status.url')
echo "Frontend URL: $FRONTEND_URL"

cd ..
```

## Step 5: Additional Services

### 5.1 Cloud Object Storage (for backups)

```bash
# Create COS instance
ibmcloud resource service-instance-create ${PROJECT_NAME}-storage \
  cloud-object-storage standard global

# Create bucket
ibmcloud cos bucket-create --bucket ${PROJECT_NAME}-backups \
  --ibm-service-instance-id $(ibmcloud resource service-instance ${PROJECT_NAME}-storage --output json | jq -r '.[0].guid')
```

### 5.2 Log Analysis

```bash
# Create Log Analysis instance
ibmcloud resource service-instance-create ${PROJECT_NAME}-logs \
  logdna 7-day ${REGION}

# Connect Code Engine to Log Analysis
ibmcloud ce project update --logging-instance ${PROJECT_NAME}-logs
```

### 5.3 Monitoring

```bash
# Create Monitoring instance
ibmcloud resource service-instance-create ${PROJECT_NAME}-monitoring \
  sysdig-monitor graduated-tier ${REGION}

# Connect Code Engine to Monitoring
ibmcloud ce project update --monitoring-instance ${PROJECT_NAME}-monitoring
```

## Step 6: CI/CD Setup

### 6.1 Create Toolchain

```bash
# Create toolchain
ibmcloud dev toolchain-create \
  --name ${PROJECT_NAME}-toolchain \
  --template "https://github.com/open-toolchain/simple-toolchain"
```

### 6.2 Configure GitHub Integration

1. Go to IBM Cloud Console → DevOps → Toolchains
2. Select your toolchain
3. Add GitHub integration
4. Configure repository: `your-org/ibm-dealsprint`
5. Add Delivery Pipeline

### 6.3 Pipeline Configuration

Create `.bluemix/pipeline.yml`:

```yaml
---
stages:
- name: BUILD
  inputs:
  - type: git
    branch: main
  jobs:
  - name: Build Backend
    type: builder
    build_type: cr
    target:
      region_id: ${REGION}
      api_key: ${IBM_CLOUD_API_KEY}
    namespace: ${PROJECT_NAME}
    image_name: backend
    script: |
      #!/bin/bash
      cd backend
      docker build -t us.icr.io/${PROJECT_NAME}/backend:${BUILD_NUMBER} .
      docker push us.icr.io/${PROJECT_NAME}/backend:${BUILD_NUMBER}

- name: DEPLOY
  inputs:
  - type: job
    stage: BUILD
    job: Build Backend
  jobs:
  - name: Deploy to Code Engine
    type: deployer
    target:
      region_id: ${REGION}
      api_key: ${IBM_CLOUD_API_KEY}
    script: |
      #!/bin/bash
      ibmcloud ce project select --name ${PROJECT_NAME}
      ibmcloud ce app update --name ${PROJECT_NAME}-backend \
        --image us.icr.io/${PROJECT_NAME}/backend:${BUILD_NUMBER}
```

## Step 7: Custom Domain (Optional)

### 7.1 Configure Custom Domain

```bash
# Add custom domain to Code Engine
ibmcloud ce domain create \
  --name dealsprint.ibm.com \
  --cert-secret your-tls-secret

# Map domain to application
ibmcloud ce app update --name ${PROJECT_NAME}-frontend \
  --domain dealsprint.ibm.com
```

### 7.2 SSL Certificate

```bash
# Create TLS secret
ibmcloud ce secret create --name your-tls-secret \
  --from-file tls.crt=./certificate.crt \
  --from-file tls.key=./private.key
```

## Step 8: Monitoring and Maintenance

### 8.1 View Logs

```bash
# Backend logs
ibmcloud ce app logs --name ${PROJECT_NAME}-backend --follow

# Frontend logs
ibmcloud ce app logs --name ${PROJECT_NAME}-frontend --follow
```

### 8.2 Scale Applications

```bash
# Scale backend
ibmcloud ce app update --name ${PROJECT_NAME}-backend \
  --min-scale 2 \
  --max-scale 20

# Scale frontend
ibmcloud ce app update --name ${PROJECT_NAME}-frontend \
  --min-scale 2 \
  --max-scale 20
```

### 8.3 Database Backups

```bash
# Manual backup
ibmcloud cdb deployment-backups-list ${PROJECT_NAME}-db

# Restore from backup
ibmcloud cdb backup-restore ${PROJECT_NAME}-db \
  --backup-id <backup-id>
```

## Step 9: Security Configuration

### 9.1 Enable App ID (Authentication)

```bash
# Create App ID instance
ibmcloud resource service-instance-create ${PROJECT_NAME}-appid \
  appid graduated-tier ${REGION}

# Configure App ID
# (Follow IBM Cloud Console for detailed configuration)
```

### 9.2 Configure CORS

Update backend `server.js`:

```javascript
const cors = require('cors');

app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://dealsprint.ibm.com',
  credentials: true
}));
```

### 9.3 Enable Rate Limiting

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

## Step 10: Cost Optimization

### 10.1 Resource Sizing

```bash
# Monitor resource usage
ibmcloud ce app get --name ${PROJECT_NAME}-backend

# Adjust based on metrics
ibmcloud ce app update --name ${PROJECT_NAME}-backend \
  --cpu 0.25 \
  --memory 512M
```

### 10.2 Auto-scaling Configuration

```bash
# Configure auto-scaling
ibmcloud ce app update --name ${PROJECT_NAME}-backend \
  --min-scale 1 \
  --max-scale 10 \
  --scale-down-delay 300
```

## Troubleshooting

### Common Issues

#### Application Won't Start

```bash
# Check logs
ibmcloud ce app logs --name ${PROJECT_NAME}-backend --tail 100

# Check events
ibmcloud ce app events --name ${PROJECT_NAME}-backend
```

#### Database Connection Issues

```bash
# Test connection
psql "$DB_CONNECTION" -c "SELECT version();"

# Check firewall rules
ibmcloud cdb deployment-whitelist-list ${PROJECT_NAME}-db
```

#### Build Failures

```bash
# Check build logs
ibmcloud cr build-logs

# Verify Dockerfile
docker build -t test .
```

## Maintenance

### Regular Tasks

1. **Weekly**: Review logs and metrics
2. **Monthly**: Update dependencies
3. **Quarterly**: Review and optimize costs
4. **Annually**: Security audit

### Update Deployment

```bash
# Pull latest code
git pull origin main

# Rebuild and deploy
./deploy.sh
```

## Support

### IBM Cloud Support

- Console: https://cloud.ibm.com/unifiedsupport
- Documentation: https://cloud.ibm.com/docs
- Status: https://cloud.ibm.com/status

### Resources

- [Code Engine Documentation](https://cloud.ibm.com/docs/codeengine)
- [Databases for PostgreSQL](https://cloud.ibm.com/docs/databases-for-postgresql)
- [IBM Cloud CLI Reference](https://cloud.ibm.com/docs/cli)

## Cost Estimation

### Monthly Costs (Estimated)

| Service | Configuration | Est. Cost |
|---------|--------------|-----------|
| Databases for PostgreSQL | 4GB RAM, 20GB Storage | $100-150 |
| Code Engine (Backend) | 1-10 instances | $20-100 |
| Code Engine (Frontend) | 1-10 instances | $10-50 |
| Cloud Object Storage | 100GB | $2-5 |
| Log Analysis | 7-day retention | $50-100 |
| **Total** | | **$182-405/month** |

*Costs vary based on usage and region*

## Next Steps

1. ✅ Deploy to IBM Cloud
2. ⏳ Configure custom domain
3. ⏳ Set up CI/CD pipeline
4. ⏳ Enable monitoring and alerts
5. ⏳ Configure backup strategy
6. ⏳ Implement authentication
7. ⏳ Load testing and optimization

---

**Last Updated**: 2026-07-14  
**IBM Cloud Region**: us-south  
**Deployment Version**: 1.0.0
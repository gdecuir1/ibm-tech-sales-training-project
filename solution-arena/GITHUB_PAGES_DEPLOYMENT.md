# GitHub Pages Deployment Guide

## 🌐 Live Demo

**Current Deployment:** [https://gdecuir1.github.io/ibm-tech-sales-training-project/](https://gdecuir1.github.io/ibm-tech-sales-training-project/)

## Quick Setup (5 minutes)

### Step 1: Repository Already Created ✅

Your repository is already set up at:
- **Repository:** `ibm-tech-sales-training-project`
- **Owner:** `gdecuir1`
- **URL:** https://github.com/gdecuir1/ibm-tech-sales-training-project

### Step 2: Push Updates to GitHub

To deploy updates, simply push to the main branch:

```bash
# Navigate to the solution-arena directory
cd solution-arena

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Update: Description of your changes"

# Push to GitHub (triggers auto-deployment)
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select **"GitHub Actions"**
5. Click **Save**

### Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait 2-3 minutes for it to complete (green checkmark)
4. Your site will be live at: `https://YOUR_USERNAME.github.io/solution-arena/`

## 🎉 That's It!

Your application is now publicly accessible at:
```
https://YOUR_USERNAME.github.io/solution-arena/
```

## Updating Your Site

Every time you push changes to the `main` branch, GitHub Actions will automatically rebuild and redeploy your site:

```bash
# Make your changes, then:
git add .
git commit -m "Description of changes"
git push
```

Wait 2-3 minutes and your changes will be live!

## Important Notes

### ⚠️ Limitations (Static Hosting)

Since GitHub Pages only hosts static files, the following features **will not work**:
- ❌ Backend API calls (scenarios, scoring, etc.)
- ❌ Database storage
- ❌ User authentication
- ❌ Real-time features

### ✅ What Works

The frontend will work with:
- ✅ All UI components and navigation
- ✅ Mock data for demonstration
- ✅ Interactive elements
- ✅ Responsive design
- ✅ All styling and animations

### 🔧 For Full Functionality

To enable backend features, you'll need to deploy the backend separately:

**Option 1: Render (Free)**
- Deploy backend to [Render.com](https://render.com)
- Update frontend API URL
- Free tier available

**Option 2: Vercel (Free)**
- Deploy both frontend and backend to [Vercel.com](https://vercel.com)
- Automatic deployments from GitHub
- Free tier available

**Option 3: IBM Cloud (Enterprise)**
- Follow `IBM_CLOUD_DEPLOYMENT.md` guide
- Full enterprise features
- Requires IBM Cloud account

## Troubleshooting

### Site Not Loading

1. Check Actions tab for build errors
2. Verify GitHub Pages is enabled in Settings
3. Wait 5-10 minutes after first deployment
4. Clear browser cache

### 404 Errors

1. Ensure `base: '/solution-arena/'` is set in `vite.config.js`
2. Repository name must match the base path
3. Check that all routes use relative paths

### Build Failures

1. Check Actions tab for error details
2. Verify all dependencies are in `package.json`
3. Test build locally: `cd frontend && npm run build`
4. Check Node.js version compatibility

## Custom Domain (Optional)

To use a custom domain like `training.yourcompany.com`:

1. Go to Settings → Pages
2. Enter your custom domain
3. Add DNS records at your domain provider:
   ```
   Type: CNAME
   Name: training (or @)
   Value: YOUR_USERNAME.github.io
   ```
4. Wait for DNS propagation (up to 24 hours)

## Security

### Environment Variables

GitHub Pages doesn't support server-side environment variables. For sensitive data:
- Use a backend service (Render, Vercel, etc.)
- Never commit API keys or secrets
- Use `.env.local` for local development only

## Cost

**GitHub Pages is 100% FREE for public repositories!**

- ✅ Unlimited bandwidth
- ✅ Automatic SSL certificate
- ✅ Custom domain support
- ✅ Automatic deployments

## Support

### Resources
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

### Common Issues
- **Blank page**: Check browser console for errors
- **Assets not loading**: Verify base path in vite.config.js
- **Build fails**: Check Node.js version (18+ required)

## Next Steps

After deployment:

1. ✅ Share your live URL
2. ⏳ Add custom domain (optional)
3. ⏳ Deploy backend for full functionality
4. ⏳ Set up analytics (Google Analytics, Plausible)
5. ⏳ Add SEO meta tags
6. ⏳ Enable PWA features

---

**Your live site**: `https://YOUR_USERNAME.github.io/solution-arena/`

**Deployment time**: ~5 minutes  
**Cost**: $0 (FREE)  
**Updates**: Automatic on every push
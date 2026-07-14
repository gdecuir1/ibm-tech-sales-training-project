#!/usr/bin/env python3
"""
Generate 100+ diverse training scenarios for IBM Tech Sales Training
"""
import json

# Template for common question options
PRIORITY_OPTIONS = [
    {"id": "reduce-costs", "text": "Reduce infrastructure costs", "weight": 10},
    {"id": "improve-ai", "text": "Improve AI readiness", "weight": 8},
    {"id": "modernize-apps", "text": "Modernize legacy applications", "weight": 9},
    {"id": "cyber-resilience", "text": "Increase cyber resilience", "weight": 10},
    {"id": "compliance", "text": "Meet compliance requirements", "weight": 9},
    {"id": "reduce-downtime", "text": "Reduce downtime", "weight": 9},
    {"id": "dev-productivity", "text": "Improve developer productivity", "weight": 7},
    {"id": "disaster-recovery", "text": "Improve disaster recovery", "weight": 9},
    {"id": "observability", "text": "Improve observability and monitoring", "weight": 8},
    {"id": "sustainability", "text": "Improve sustainability", "weight": 6}
]

TECH_OPTIONS = [
    {"id": "ibm-power", "text": "IBM Power", "reasoning": ""},
    {"id": "ibm-power-virtual-server", "text": "IBM Power Virtual Server", "reasoning": ""},
    {"id": "ibm-cloud", "text": "IBM Cloud", "reasoning": ""},
    {"id": "ibm-storage-flashsystem", "text": "IBM Storage FlashSystem", "reasoning": ""},
    {"id": "red-hat-openshift", "text": "Red Hat OpenShift", "reasoning": ""},
    {"id": "cloud-pak-data", "text": "IBM Cloud Pak for Data", "reasoning": ""},
    {"id": "watsonx-ai", "text": "watsonx.ai", "reasoning": ""},
    {"id": "watsonx-data", "text": "watsonx.data", "reasoning": ""},
    {"id": "ibm-guardium", "text": "IBM Guardium", "reasoning": ""},
    {"id": "ibm-qradar", "text": "IBM QRadar", "reasoning": ""},
    {"id": "ibm-turbonomic", "text": "IBM Turbonomic", "reasoning": ""},
    {"id": "ibm-instana", "text": "IBM Instana", "reasoning": ""},
    {"id": "ibm-apptio", "text": "IBM Apptio", "reasoning": ""},
    {"id": "ibm-consulting", "text": "IBM Consulting", "reasoning": ""},
    {"id": "ibm-technology-lifecycle-services", "text": "IBM Technology Lifecycle Services", "reasoning": ""},
    {"id": "ibm-linuxone", "text": "IBM LinuxONE", "reasoning": ""},
    {"id": "db2", "text": "IBM Db2", "reasoning": ""},
    {"id": "red-hat-ansible", "text": "Red Hat Ansible Automation Platform", "reasoning": ""}
]

scenarios = []

# BEGINNER SCENARIOS (35)
beginner_scenarios = [
    # Retail - 5 scenarios
    {
        "id": "scenario-beginner-retail-001",
        "title": "E-commerce Platform Modernization",
        "difficulty": "beginner",
        "industry": "Retail",
        "company": "FashionForward Retail",
        "size": "Mid-Market",
        "revenue": "$250M",
        "brief": "Online fashion retailer needs to modernize their e-commerce platform to handle seasonal traffic spikes and improve customer experience.",
        "focus": ["Red Hat OpenShift", "IBM Cloud", "IBM Instana"],
        "priorities": ["modernize-apps", "reduce-downtime", "dev-productivity"]
    },
    {
        "id": "scenario-beginner-retail-002",
        "title": "Inventory Management System Upgrade",
        "difficulty": "beginner",
        "industry": "Retail",
        "company": "QuickMart Stores",
        "size": "Mid-Market",
        "revenue": "$180M",
        "brief": "Regional retail chain needs real-time inventory visibility across 50 stores to reduce stockouts and improve customer satisfaction.",
        "focus": ["IBM Cloud", "Db2", "Red Hat OpenShift"],
        "priorities": ["modernize-apps", "reduce-costs", "observability"]
    },
    {
        "id": "scenario-beginner-retail-003",
        "title": "Customer Data Platform Implementation",
        "difficulty": "beginner",
        "industry": "Retail",
        "company": "HomeGoods Plus",
        "size": "Mid-Market",
        "revenue": "$320M",
        "brief": "Home goods retailer wants to unify customer data from online and in-store channels for personalized marketing.",
        "focus": ["Cloud Pak for Data", "IBM Cloud", "Db2"],
        "priorities": ["modernize-apps", "improve-ai", "compliance"]
    },
    {
        "id": "scenario-beginner-retail-004",
        "title": "Point of Sale System Cloud Migration",
        "difficulty": "beginner",
        "industry": "Retail",
        "company": "FreshMarket Grocers",
        "size": "Small Business",
        "revenue": "$85M",
        "brief": "Grocery chain needs to migrate aging POS systems to cloud for better reliability and easier updates.",
        "focus": ["IBM Cloud", "Red Hat OpenShift", "IBM Turbonomic"],
        "priorities": ["reduce-costs", "reduce-downtime", "modernize-apps"]
    },
    {
        "id": "scenario-beginner-retail-005",
        "title": "Mobile App Performance Optimization",
        "difficulty": "beginner",
        "industry": "Retail",
        "company": "TechGadgets Online",
        "size": "Mid-Market",
        "revenue": "$150M",
        "brief": "Electronics retailer experiencing slow mobile app performance during product launches, affecting sales.",
        "focus": ["IBM Instana", "Red Hat OpenShift", "IBM Cloud"],
        "priorities": ["observability", "reduce-downtime", "dev-productivity"]
    },
    
    # Healthcare - 5 scenarios
    {
        "id": "scenario-beginner-healthcare-001",
        "title": "Patient Portal Modernization",
        "difficulty": "beginner",
        "industry": "Healthcare",
        "company": "CityHealth Medical Center",
        "size": "Mid-Market",
        "revenue": "$400M",
        "brief": "Regional hospital needs to modernize patient portal for better appointment scheduling and medical records access.",
        "focus": ["Red Hat OpenShift", "IBM Cloud", "IBM Guardium"],
        "priorities": ["modernize-apps", "compliance", "reduce-downtime"]
    },
    {
        "id": "scenario-beginner-healthcare-002",
        "title": "Medical Records Database Upgrade",
        "difficulty": "beginner",
        "industry": "Healthcare",
        "company": "WellCare Clinics",
        "size": "Small Business",
        "revenue": "$120M",
        "brief": "Multi-location clinic network needs to upgrade legacy medical records database for HIPAA compliance.",
        "focus": ["Db2", "IBM Guardium", "IBM Cloud"],
        "priorities": ["compliance", "cyber-resilience", "modernize-apps"]
    },
    {
        "id": "scenario-beginner-healthcare-003",
        "title": "Telehealth Platform Deployment",
        "difficulty": "beginner",
        "industry": "Healthcare",
        "company": "RuralHealth Network",
        "size": "Small Business",
        "revenue": "$95M",
        "brief": "Rural healthcare provider wants to deploy telehealth platform to serve remote patients effectively.",
        "focus": ["IBM Cloud", "Red Hat OpenShift", "IBM Security Verify"],
        "priorities": ["modernize-apps", "compliance", "reduce-costs"]
    },
    {
        "id": "scenario-beginner-healthcare-004",
        "title": "Lab Results System Integration",
        "difficulty": "beginner",
        "industry": "Healthcare",
        "company": "DiagnosticLabs Plus",
        "size": "Mid-Market",
        "revenue": "$200M",
        "brief": "Diagnostic lab chain needs to integrate multiple lab systems for faster result delivery to physicians.",
        "focus": ["Cloud Pak for Integration", "IBM Cloud", "IBM API Connect"],
        "priorities": ["modernize-apps", "dev-productivity", "observability"]
    },
    {
        "id": "scenario-beginner-healthcare-005",
        "title": "Pharmacy Management System Cloud Migration",
        "difficulty": "beginner",
        "industry": "Healthcare",
        "company": "HealthPlus Pharmacies",
        "size": "Mid-Market",
        "revenue": "$175M",
        "brief": "Pharmacy chain wants to move prescription management system to cloud for better scalability.",
        "focus": ["IBM Cloud", "Db2", "IBM Turbonomic"],
        "priorities": ["reduce-costs", "modernize-apps", "compliance"]
    },
    
    # Manufacturing - 5 scenarios
    {
        "id": "scenario-beginner-manufacturing-001",
        "title": "Production Monitoring Dashboard",
        "difficulty": "beginner",
        "industry": "Manufacturing",
        "company": "PrecisionParts Manufacturing",
        "size": "Mid-Market",
        "revenue": "$280M",
        "brief": "Auto parts manufacturer needs real-time production monitoring to reduce downtime and improve efficiency.",
        "focus": ["IBM Instana", "Red Hat OpenShift", "IBM Cloud"],
        "priorities": ["observability", "reduce-downtime", "modernize-apps"]
    },
    {
        "id": "scenario-beginner-manufacturing-002",
        "title": "Quality Control System Upgrade",
        "difficulty": "beginner",
        "industry": "Manufacturing",
        "company": "FoodSafe Packaging",
        "size": "Small Business",
        "revenue": "$110M",
        "brief": "Food packaging manufacturer needs to upgrade quality control systems for better compliance tracking.",
        "focus": ["IBM Cloud", "Db2", "Cloud Pak for Data"],
        "priorities": ["compliance", "modernize-apps", "observability"]
    },
    {
        "id": "scenario-beginner-manufacturing-003",
        "title": "Supply Chain Visibility Platform",
        "difficulty": "beginner",
        "industry": "Manufacturing",
        "company": "ElectroComponents Inc",
        "size": "Mid-Market",
        "revenue": "$350M",
        "brief": "Electronics component manufacturer needs better supply chain visibility to manage global suppliers.",
        "focus": ["IBM Sterling Supply Chain", "IBM Cloud", "IBM API Connect"],
        "priorities": ["observability", "reduce-costs", "modernize-apps"]
    },
    {
        "id": "scenario-beginner-manufacturing-004",
        "title": "Equipment Maintenance Tracking",
        "difficulty": "beginner",
        "industry": "Manufacturing",
        "company": "SteelWorks Industries",
        "size": "Mid-Market",
        "revenue": "$420M",
        "brief": "Steel manufacturer wants to implement predictive maintenance to reduce equipment downtime.",
        "focus": ["IBM Cloud", "watsonx.data", "Red Hat OpenShift"],
        "priorities": ["reduce-downtime", "reduce-costs", "observability"]
    },
    {
        "id": "scenario-beginner-manufacturing-005",
        "title": "Production Planning System Modernization",
        "difficulty": "beginner",
        "industry": "Manufacturing",
        "company": "ChemicalSolutions Corp",
        "size": "Mid-Market",
        "revenue": "$290M",
        "brief": "Chemical manufacturer needs to modernize production planning system for better resource optimization.",
        "focus": ["Red Hat OpenShift", "IBM Cloud", "Db2"],
        "priorities": ["modernize-apps", "reduce-costs", "dev-productivity"]
    },
    
    # Financial Services - 5 scenarios
    {
        "id": "scenario-beginner-finance-001",
        "title": "Mobile Banking App Upgrade",
        "difficulty": "beginner",
        "industry": "Financial Services",
        "company": "CommunityFirst Bank",
        "size": "Small Business",
        "revenue": "$180M",
        "brief": "Regional bank needs to upgrade mobile banking app to compete with larger banks and fintechs.",
        "focus": ["Red Hat OpenShift", "IBM Cloud", "IBM Instana"],
        "priorities": ["modernize-apps", "dev-productivity", "cyber-resilience"]
    },
    {
        "id": "scenario-beginner-finance-002",
        "title": "Customer Service Portal Enhancement",
        "difficulty": "beginner",
        "industry": "Financial Services",
        "company": "InsureNow Insurance",
        "size": "Mid-Market",
        "revenue": "$320M",
        "brief": "Insurance company wants to enhance customer portal with self-service capabilities to reduce call center costs.",
        "focus": ["IBM Cloud", "Red Hat OpenShift", "watsonx.ai"],
        "priorities": ["reduce-costs", "modernize-apps", "dev-productivity"]
    },
    {
        "id": "scenario-beginner-finance-003",
        "title": "Payment Processing System Upgrade",
        "difficulty": "beginner",
        "industry": "Financial Services",
        "company": "PayFast Solutions",
        "size": "Mid-Market",
        "revenue": "$150M",
        "brief": "Payment processor needs to upgrade systems to handle increased transaction volumes and new payment methods.",
        "focus": ["IBM Cloud", "Db2", "IBM Turbonomic"],
        "priorities": ["reduce-downtime", "modernize-apps", "reduce-costs"]
    },
    {
        "id": "scenario-beginner-finance-004",
        "title": "Loan Origination System Cloud Migration",
        "difficulty": "beginner",
        "industry": "Financial Services",
        "company": "QuickLoan Financial",
        "size": "Small Business",
        "revenue": "$95M",
        "brief": "Online lender wants to migrate loan origination system to cloud for faster processing and scalability.",
        "focus": ["IBM Cloud", "Red Hat OpenShift", "IBM Guardium"],
        "priorities": ["modernize-apps", "compliance", "reduce-costs"]
    },
    {
        "id": "scenario-beginner-finance-005",
        "title": "Risk Management Dashboard Implementation",
        "difficulty": "beginner",
        "industry": "Financial Services",
        "company": "WealthManage Advisors",
        "size": "Mid-Market",
        "revenue": "$220M",
        "brief": "Investment firm needs real-time risk management dashboard for better portfolio monitoring.",
        "focus": ["Cloud Pak for Data", "IBM Cloud", "IBM Instana"],
        "priorities": ["observability", "compliance", "modernize-apps"]
    },
    
    # Technology - 5 scenarios
    {
        "id": "scenario-beginner-tech-001",
        "title": "SaaS Platform Scalability",
        "difficulty": "beginner",
        "industry": "Technology",
        "company": "CloudApps Inc",
        "size": "Small Business",
        "revenue": "$45M",
        "brief": "SaaS startup experiencing rapid growth needs to scale infrastructure to handle 10x user increase.",
        "focus": ["Red Hat OpenShift", "IBM Cloud", "IBM Turbonomic"],
        "priorities": ["reduce-costs", "modernize-apps", "observability"]
    },
    {
        "id": "scenario-beginner-tech-002",
        "title": "Development Environment Standardization",
        "difficulty": "beginner",
        "industry": "Technology",
        "company": "DevTools Pro",
        "size": "Small Business",
        "revenue": "$30M",
        "brief": "Software company needs to standardize development environments across distributed teams.",
        "focus": ["Red Hat OpenShift", "IBM Cloud", "Red Hat Ansible"],
        "priorities": ["dev-productivity", "reduce-costs", "modernize-apps"]
    },
    {
        "id": "scenario-beginner-tech-003",
        "title": "API Management Platform",
        "difficulty": "beginner",
        "industry": "Technology",
        "company": "DataConnect APIs",
        "size": "Mid-Market",
        "revenue": "$120M",
        "brief": "API platform provider needs better API management and monetization capabilities.",
        "focus": ["IBM API Connect", "IBM Cloud", "Red Hat OpenShift"],
        "priorities": ["modernize-apps", "dev-productivity", "observability"]
    },
    {
        "id": "scenario-beginner-tech-004",
        "title": "Customer Support Chatbot",
        "difficulty": "beginner",
        "industry": "Technology",
        "company": "HelpDesk Solutions",
        "size": "Small Business",
        "revenue": "$55M",
        "brief": "Support software company wants to add AI chatbot to reduce support ticket volume.",
        "focus": ["watsonx.ai", "IBM Cloud", "Red Hat OpenShift"],
        "priorities": ["improve-ai", "reduce-costs", "modernize-apps"]
    },
    {
        "id": "scenario-beginner-tech-005",
        "title": "Application Performance Monitoring",
        "difficulty": "beginner",
        "industry": "Technology",
        "company": "WebApps Global",
        "size": "Mid-Market",
        "revenue": "$180M",
        "brief": "Web application company needs better observability to troubleshoot customer-reported issues faster.",
        "focus": ["IBM Instana", "Red Hat OpenShift", "IBM Cloud"],
        "priorities": ["observability", "reduce-downtime", "dev-productivity"]
    },
    
    # Education - 5 scenarios
    {
        "id": "scenario-beginner-education-001",
        "title": "Learning Management System Upgrade",
        "difficulty": "beginner",
        "industry": "Education",
        "company": "StateU University",
        "size": "Mid-Market",
        "revenue": "$450M",
        "brief": "State university needs to upgrade LMS to support hybrid learning and handle 50,000 students.",
        "focus": ["IBM Cloud", "Red Hat OpenShift", "IBM Turbonomic"],
        "priorities": ["modernize-apps", "reduce-costs", "reduce-downtime"]
    },
    {
        "id": "scenario-beginner-education-002",
        "title": "Student Information System Cloud Migration",
        "difficulty": "beginner",
        "industry": "Education",
        "company": "K12 School District",
        "size": "Small Business",
        "revenue": "$120M",
        "brief": "School district wants to migrate student information system to cloud for better accessibility.",
        "focus": ["IBM Cloud", "Db2", "IBM Guardium"],
        "priorities": ["modernize-apps", "compliance", "reduce-costs"]
    },
    {
        "id": "scenario-beginner-education-003",
        "title": "Research Data Platform",
        "difficulty": "beginner",
        "industry": "Education",
        "company": "TechU Research Institute",
        "size": "Mid-Market",
        "revenue": "$280M",
        "brief": "Research university needs platform for researchers to share and analyze large datasets.",
        "focus": ["watsonx.data", "IBM Cloud", "Cloud Pak for Data"],
        "priorities": ["modernize-apps", "improve-ai", "observability"]
    },
    {
        "id": "scenario-beginner-education-004",
        "title": "Campus Network Security Enhancement",
        "difficulty": "beginner",
        "industry": "Education",
        "company": "Liberal Arts College",
        "size": "Small Business",
        "revenue": "$85M",
        "brief": "Small college needs to enhance network security after recent phishing attacks.",
        "focus": ["IBM QRadar", "IBM Security Verify", "IBM Cloud"],
        "priorities": ["cyber-resilience", "compliance", "reduce-costs"]
    },
    {
        "id": "scenario-beginner-education-005",
        "title": "Online Course Platform Development",
        "difficulty": "beginner",
        "industry": "Education",
        "company": "LearnOnline Academy",
        "size": "Small Business",
        "revenue": "$25M",
        "brief": "Online education startup needs scalable platform to deliver courses to global audience.",
        "focus": ["Red Hat OpenShift", "IBM Cloud", "IBM Instana"],
        "priorities": ["modernize-apps", "reduce-costs", "observability"]
    },
    
    # Government - 5 scenarios
    {
        "id": "scenario-beginner-government-001",
        "title": "Citizen Services Portal",
        "difficulty": "beginner",
        "industry": "Government",
        "company": "City of Springfield",
        "size": "Small Business",
        "revenue": "$200M",
        "brief": "City government wants to create online portal for citizens to access services and pay bills.",
        "focus": ["IBM Cloud", "Red Hat OpenShift", "IBM Security Verify"],
        "priorities": ["modernize-apps", "reduce-costs", "cyber-resilience"]
    },
    {
        "id": "scenario-beginner-government-002",
        "title": "Document Management System",
        "difficulty": "beginner",
        "industry": "Government",
        "company": "County Administration",
        "size": "Small Business",
        "revenue": "$150M",
        "brief": "County government needs to digitize paper records and implement document management system.",
        "focus": ["IBM Cloud", "IBM Business Automation", "IBM Guardium"],
        "priorities": ["modernize-apps", "compliance", "reduce-costs"]
    },
    {
        "id": "scenario-beginner-government-003",
        "title": "Public Safety Communication System",
        "difficulty": "beginner",
        "industry": "Government",
        "company": "Regional Emergency Services",
        "size": "Mid-Market",
        "revenue": "$180M",
        "brief": "Regional emergency services need to upgrade communication systems for better coordination.",
        "focus": ["IBM Cloud", "Red Hat OpenShift", "Db2"],
        "priorities": ["reduce-downtime", "modernize-apps", "cyber-resilience"]
    },
    {
        "id": "scenario-beginner-government-004",
        "title": "Tax Processing System Modernization",
        "difficulty": "beginner",
        "industry": "Government",
        "company": "State Revenue Department",
        "size": "Mid-Market",
        "revenue": "$300M",
        "brief": "State revenue department needs to modernize tax processing system for faster refunds.",
        "focus": ["IBM Cloud", "Db2", "Red Hat OpenShift"],
        "priorities": ["modernize-apps", "reduce-costs", "compliance"]
    },
    {
        "id": "scenario-beginner-government-005",
        "title": "Public Transportation Tracking",
        "difficulty": "beginner",
        "industry": "Government",
        "company": "Metro Transit Authority",
        "size": "Mid-Market",
        "revenue": "$250M",
        "brief": "Transit authority wants real-time tracking system for buses and trains to improve service.",
        "focus": ["IBM Cloud", "Red Hat OpenShift", "IBM Instana"],
        "priorities": ["modernize-apps", "observability", "reduce-costs"]
    },
    
    # Telecommunications - 5 scenarios
    {
        "id": "scenario-beginner-telecom-001",
        "title": "Customer Self-Service Portal",
        "difficulty": "beginner",
        "industry": "Telecommunications",
        "company": "RegionalTel Communications",
        "size": "Mid-Market",
        "revenue": "$380M",
        "brief": "Regional telecom provider needs self-service portal to reduce call center costs.",
        "focus": ["IBM Cloud", "Red Hat OpenShift", "watsonx.ai"],
        "priorities": ["reduce-costs", "modernize-apps", "dev-productivity"]
    },
    {
        "id": "scenario-beginner-telecom-002",
        "title": "Network Monitoring Dashboard",
        "difficulty": "beginner",
        "industry": "Telecommunications",
        "company": "FiberNet ISP",
        "size": "Small Business",
        "revenue": "$95M",
        "brief": "Internet service provider needs better network monitoring to reduce outages.",
        "focus": ["IBM Instana", "IBM Cloud", "Red Hat OpenShift"],
        "priorities": ["observability", "reduce-downtime", "modernize-apps"]
    },
    {
        "id": "scenario-beginner-telecom-003",
        "title": "Billing System Cloud Migration",
        "difficulty": "beginner",
        "industry": "Telecommunications",
        "company": "MobileTalk Wireless",
        "size": "Mid-Market",
        "revenue": "$420M",
        "brief": "Mobile carrier wants to migrate billing system to cloud for better scalability.",
        "focus": ["IBM Cloud", "Db2", "IBM Turbonomic"],
        "priorities": ["modernize-apps", "reduce-costs", "reduce-downtime"]
    },
    {
        "id": "scenario-beginner-telecom-004",
        "title": "Customer Data Platform",
        "difficulty": "beginner",
        "industry": "Telecommunications",
        "company": "CableCom Services",
        "size": "Mid-Market",
        "revenue": "$310M",
        "brief": "Cable company needs unified customer data platform for better marketing and retention.",
        "focus": ["Cloud Pak for Data", "IBM Cloud", "Db2"],
        "priorities": ["modernize-apps", "improve-ai", "compliance"]
    },
    {
        "id": "scenario-beginner-telecom-005",
        "title": "5G Network Management",
        "difficulty": "beginner",
        "industry": "Telecommunications",
        "company": "NextGen Mobile",
        "size": "Mid-Market",
        "revenue": "$550M",
        "brief": "Mobile carrier deploying 5G needs management platform for new network infrastructure.",
        "focus": ["Red Hat OpenShift", "IBM Cloud", "IBM Instana"],
        "priorities": ["modernize-apps", "observability", "reduce-downtime"]
    }
]

print(f"Generated {len(beginner_scenarios)} beginner scenarios")
print("Beginner scenarios created successfully!")
print("\nNote: This is a template generator. Full implementation would include:")
print("- Complete question sets for each scenario")
print("- 35 intermediate scenarios")
print("- 30 advanced scenarios")
print("- Total: 100+ scenarios")

# Made with Bob

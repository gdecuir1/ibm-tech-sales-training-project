#!/bin/bash

# GitHub Pages Deployment Script for Solution Arena

echo "🚀 Deploying Solution Arena to GitHub Pages..."
echo ""

# Check if we're in the right directory
if [ ! -d "frontend" ]; then
    echo "❌ Error: Must run from solution-arena directory"
    exit 1
fi

# Navigate to frontend
cd frontend

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building production bundle..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "📤 Now push to GitHub:"
echo ""
echo "  cd .."
echo "  git add ."
echo "  git commit -m 'Deploy to GitHub Pages'"
echo "  git push origin main"
echo ""
echo "⏳ Wait 2-3 minutes for GitHub Actions to deploy"
echo "🌐 Your site will be live at: https://YOUR_USERNAME.github.io/solution-arena/"
echo ""

# Made with Bob

#!/bin/bash

# Legaci Platform Mockup - Quick Deploy Script
# Usage: ./deploy.sh

set -e

echo "======================================"
echo "Legaci Platform - Quick Deploy Script"
echo "======================================"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo ""
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

echo ""
echo "✅ Step 1: Installing dependencies..."
npm install

echo ""
echo "✅ Step 2: Building project..."
npm run build

echo ""
echo "✅ Step 3: Preparing for deployment..."
echo ""

# Check if .vercelignore exists
if [ ! -f ".vercelignore" ]; then
    echo "Creating .vercelignore..."
    cat > .vercelignore << 'EOF'
.git
.gitignore
README.md
*.log
EOF
fi

echo ""
echo "======================================"
echo "Ready to Deploy!"
echo "======================================"
echo ""
echo "Choose deployment method:"
echo ""
echo "Option 1: Deploy with Vercel CLI (requires authentication)"
echo "  $ vercel --prod"
echo ""
echo "Option 2: Deploy via GitHub (recommended)"
echo "  1. Create a GitHub repository:"
echo "     $ git init"
echo "     $ git add ."
echo "     $ git commit -m 'Legaci platform mockup'"
echo "     $ git remote add origin https://github.com/USERNAME/legaci-mockup.git"
echo "     $ git push -u origin main"
echo ""
echo "  2. Visit: https://vercel.com/new"
echo "  3. Import your GitHub repository"
echo "  4. Click 'Deploy'"
echo ""
echo "Option 3: Deploy via Dashboard"
echo "  1. Visit: https://vercel.com/dashboard"
echo "  2. Click 'Add New' → 'Project'"
echo "  3. Upload this project or connect GitHub"
echo "  4. Click 'Deploy'"
echo ""
echo "======================================"
echo "Documentation:"
echo "  - README.md: Project overview"
echo "  - QUICKSTART.md: Get started in 2 minutes"
echo "  - DEPLOYMENT.md: Detailed deployment guide"
echo "======================================"
echo ""

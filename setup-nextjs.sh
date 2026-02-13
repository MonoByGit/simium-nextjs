#!/bin/bash

# 🚀 Simium Next.js Setup Script
# Automatische setup voor Next.js 15 conversie

echo "🎯 Starting Simium Next.js 15 Setup..."
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Backup originele configuratie
echo -e "${BLUE}📦 Step 1: Creating backups...${NC}"
if [ -f "package.json" ]; then
    cp package.json package.json.vite.backup
    echo "✅ Backed up package.json → package.json.vite.backup"
fi

if [ -f "src/components/Layout.tsx" ]; then
    cp src/components/Layout.tsx src/components/Layout.vite.backup
    echo "✅ Backed up Layout.tsx → Layout.vite.backup"
fi

echo ""

# Step 2: Switch naar Next.js configuratie
echo -e "${BLUE}🔄 Step 2: Switching to Next.js configuration...${NC}"
if [ -f "package.json.nextjs" ]; then
    cp package.json.nextjs package.json
    echo "✅ Activated Next.js package.json"
else
    echo "❌ Error: package.json.nextjs not found!"
    exit 1
fi

# Switch Layout naar Next.js versie
if [ -f "src/components/LayoutNextJS.tsx" ]; then
    cp src/components/LayoutNextJS.tsx src/components/Layout.tsx
    echo "✅ Activated Next.js Layout component"
else
    echo "⚠️  Warning: LayoutNextJS.tsx not found, keeping original"
fi

echo ""

# Step 3: Clean install
echo -e "${BLUE}🧹 Step 3: Cleaning old dependencies...${NC}"
if [ -d "node_modules" ]; then
    rm -rf node_modules
    echo "✅ Removed node_modules"
fi

if [ -f "package-lock.json" ]; then
    rm package-lock.json
    echo "✅ Removed package-lock.json"
fi

echo ""

# Step 4: Install dependencies
echo -e "${BLUE}📥 Step 4: Installing Next.js dependencies...${NC}"
echo "This may take 1-2 minutes..."
npm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Dependencies installed successfully!${NC}"
else
    echo "❌ Error: npm install failed!"
    exit 1
fi

echo ""

# Step 5: Setup environment
echo -e "${BLUE}🔐 Step 5: Setting up environment variables...${NC}"
if [ ! -f ".env.local" ]; then
    if [ -f ".env.example" ]; then
        cp .env.example .env.local
        echo "✅ Created .env.local from template"
        echo ""
        echo -e "${YELLOW}⚠️  IMPORTANT: Edit .env.local and add your Supabase credentials!${NC}"
        echo "   NEXT_PUBLIC_SUPABASE_URL=your-url"
        echo "   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key"
    else
        echo "⚠️  Warning: .env.example not found"
    fi
else
    echo "ℹ️  .env.local already exists, skipping..."
fi

echo ""
echo -e "${GREEN}🎉 Setup complete!${NC}"
echo ""
echo "Next steps:"
echo ""
echo -e "${BLUE}1.${NC} Edit .env.local with your Supabase credentials:"
echo "   nano .env.local"
echo ""
echo -e "${BLUE}2.${NC} Start development server:"
echo "   npm run dev"
echo ""
echo -e "${BLUE}3.${NC} Open http://localhost:3000"
echo ""
echo -e "${BLUE}4.${NC} Test alle 18 pagina's!"
echo ""
echo -e "${BLUE}5.${NC} Deploy to Railway (see DEPLOYMENT_GUIDE.md):"
echo "   git add ."
echo "   git commit -m \"feat: convert to Next.js 15\""
echo "   git push"
echo ""
echo "📚 Documentation:"
echo "   - README_NEXTJS.md - Complete setup guide"
echo "   - DEPLOYMENT_GUIDE.md - Railway deployment"
echo "   - CONVERSION_SUMMARY.md - What changed"
echo ""
echo -e "${GREEN}Happy coding! 🚀${NC}"

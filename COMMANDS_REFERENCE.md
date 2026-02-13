# ⚡ Simium Next.js - Commands Reference

Quick reference voor alle belangrijke commands.

---

## 🚀 Setup Commands

### Automatic Setup
```bash
# Run setup script (recommended)
./setup-nextjs.sh
```

### Manual Setup
```bash
# Backup & switch to Next.js
cp package.json package.json.vite.backup
cp package.json.nextjs package.json

# Clean install
rm -rf node_modules package-lock.json
npm install

# Setup environment
cp .env.example .env.local
nano .env.local
```

---

## 💻 Development Commands

### Start Development Server
```bash
npm run dev
# → Starts on http://localhost:3000
# → Hot reload enabled
```

### Build for Production
```bash
npm run build
# → Creates optimized production build
# → Output in .next/ directory
```

### Start Production Server (Local)
```bash
npm start
# → Requires build first
# → Serves from .next/
```

### Lint Code
```bash
npm run lint
# → Runs ESLint
```

---

## 🔧 Common Development Tasks

### Clear Cache & Reinstall
```bash
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

### Run on Different Port
```bash
PORT=3001 npm run dev
```

### Check for TypeScript Errors
```bash
npx tsc --noEmit
```

### Format Code (if prettier installed)
```bash
npx prettier --write .
```

---

## 🚀 Railway Deployment

### Via CLI

#### Install Railway CLI
```bash
# Via npm
npm install -g @railway/cli

# Via Homebrew (macOS)
brew install railway
```

#### Login
```bash
railway login
```

#### Initialize Project
```bash
railway init
# → Creates new project or links to existing
```

#### Set Environment Variables
```bash
# Set individual variables
railway variables set NEXT_PUBLIC_SUPABASE_URL="your-url"
railway variables set NEXT_PUBLIC_SUPABASE_ANON_KEY="your-key"

# List all variables
railway variables

# Open variables editor
railway variables --editor
```

#### Deploy
```bash
railway up
# → Builds and deploys your app
```

#### View Logs
```bash
# Follow logs in real-time
railway logs

# Last 100 lines
railway logs --lines 100

# Filter logs
railway logs | grep "error"
```

#### Open Deployed App
```bash
railway open
```

#### View Project Status
```bash
railway status
```

---

## 📦 Git Commands

### Initial Commit
```bash
git init
git add .
git commit -m "feat: convert to Next.js 15 for Railway deployment"
```

### Push to GitHub
```bash
# Via GitHub CLI
gh repo create simium-nextjs --public --source=. --push

# Or manually
git remote add origin https://github.com/username/simium-nextjs.git
git branch -M main
git push -u origin main
```

### Commit Changes
```bash
git add .
git commit -m "feat: your feature description"
git push
```

### Create Feature Branch
```bash
git checkout -b feature/new-feature
git push -u origin feature/new-feature
```

---

## 🔍 Debugging Commands

### Check Build Output
```bash
npm run build 2>&1 | tee build.log
```

### Analyze Bundle Size
```bash
npx @next/bundle-analyzer
```

### Check for Broken Links
```bash
# Install check-html-links
npm install -g check-html-links

# Run check
check-html-links http://localhost:3000
```

### Test Production Build Locally
```bash
npm run build && npm start
```

---

## 🗄️ Database Commands (Supabase)

### Via Supabase CLI

#### Install Supabase CLI
```bash
npm install -g supabase
```

#### Login
```bash
supabase login
```

#### Link Project
```bash
supabase link --project-ref your-project-ref
```

#### Run Migrations
```bash
supabase db push
```

#### Generate TypeScript Types
```bash
supabase gen types typescript --project-id your-project-ref > src/types/supabase.ts
```

---

## 🧪 Testing Commands

### Run Type Check
```bash
npm run build
# → Catches TypeScript errors
```

### Test All Routes
```bash
# Manual testing checklist
# Visit each route in browser:
open http://localhost:3000/
open http://localhost:3000/producten
open http://localhost:3000/cashflow-analyse
# ... etc
```

---

## 📊 Performance Commands

### Lighthouse Audit
```bash
npx lighthouse http://localhost:3000 --view
```

### Check Accessibility
```bash
npx @axe-core/cli http://localhost:3000
```

---

## 🔐 Environment Management

### Create/Edit .env.local
```bash
nano .env.local
```

### View Current Environment (Development)
```bash
cat .env.local
```

### Test Environment Variables
```bash
# Create test page
echo 'export default function Test() {
  return <div>{process.env.NEXT_PUBLIC_SUPABASE_URL}</div>
}' > src/app/test/page.tsx

# Visit http://localhost:3000/test
```

---

## 🧹 Cleanup Commands

### Remove All Build Artifacts
```bash
rm -rf .next out build dist node_modules
```

### Reset to Clean State
```bash
git clean -fdx
npm install
```

### Remove Railway Config (Start Fresh)
```bash
rm -rf .railway
railway init
```

---

## 📦 Dependency Management

### Update All Dependencies
```bash
npx npm-check-updates -u
npm install
```

### Check for Vulnerabilities
```bash
npm audit
npm audit fix
```

### View Dependency Tree
```bash
npm list --depth=0
```

### Find Outdated Packages
```bash
npm outdated
```

---

## 🚨 Emergency Commands

### Kill Port 3000
```bash
lsof -ti:3000 | xargs kill -9
```

### Force Kill Node Processes
```bash
killall node
```

### Rollback Railway Deployment
```bash
# Via CLI
railway rollback [deployment-id]

# Or via Dashboard:
# Project → Deployments → ... → Redeploy
```

### Revert Git Commit
```bash
git revert HEAD
git push
```

---

## 📱 Mobile Testing

### Test on iOS Simulator
```bash
# Start dev server
npm run dev

# Open in Simulator
open -a Simulator
# Navigate to http://localhost:3000
```

### Test on Android Emulator
```bash
# Start dev server
npm run dev

# Open emulator and navigate to:
# http://10.0.2.2:3000
```

### Test on Real Device (Same Network)
```bash
# Find your local IP
ipconfig getifaddr en0  # macOS WiFi
# or
ifconfig | grep "inet "

# Start dev server
npm run dev

# On device, navigate to:
# http://YOUR_IP:3000
```

---

## 🔄 Migration Commands

### Backup Vite Files
```bash
mkdir -p backups
cp package.json backups/package.json.vite
cp vite.config.ts backups/vite.config.ts
cp src/main.tsx backups/main.tsx
cp src/App.tsx backups/App.tsx
```

### Restore Vite (if needed)
```bash
cp backups/package.json.vite package.json
npm install
```

---

## 📝 Documentation Commands

### Generate Docs
```bash
# If using TypeDoc
npx typedoc src/
```

### Create Sitemap
```bash
# Next.js sitemap generation (future)
# Create src/app/sitemap.ts
```

---

## 🎯 Quick Workflows

### Complete Local Setup
```bash
./setup-nextjs.sh && npm run dev
```

### Build, Test, Deploy
```bash
npm run build && npm start &
sleep 5
curl http://localhost:3000
railway up
```

### Update Docs & Deploy
```bash
git add .
git commit -m "docs: update documentation"
git push
# Railway auto-deploys
```

### Emergency Rollback
```bash
git revert HEAD
git push
# Railway auto-deploys previous version
```

---

## 💡 Pro Tips

### Shell Aliases (Add to ~/.zshrc or ~/.bashrc)
```bash
# Next.js aliases
alias ndev="npm run dev"
alias nbuild="npm run build"
alias nstart="npm start"

# Railway aliases
alias rdeploy="railway up"
alias rlogs="railway logs"
alias ropen="railway open"

# Git aliases
alias gp="git push"
alias gc="git commit -m"
alias gst="git status"
```

### Package.json Scripts (Add to package.json)
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "clean": "rm -rf .next out",
    "deploy": "git push && railway up",
    "logs": "railway logs",
    "reset": "rm -rf node_modules package-lock.json && npm install"
  }
}
```

---

## 🆘 Help Commands

### Next.js Help
```bash
npx next --help
```

### Railway Help
```bash
railway --help
railway up --help
railway logs --help
```

### npm Help
```bash
npm help
npm help run-script
```

---

## 📚 Useful Links

### Quick Access
```bash
# Open Railway Dashboard
open https://railway.app/dashboard

# Open GitHub Repo
gh repo view --web

# Open Supabase Dashboard
open https://app.supabase.com
```

---

## ⚡ Most Common Commands (Top 10)

```bash
# 1. Start development
npm run dev

# 2. Build for production
npm run build

# 3. Deploy to Railway
railway up

# 4. View logs
railway logs

# 5. Set environment variable
railway variables set KEY="value"

# 6. Commit changes
git add . && git commit -m "message" && git push

# 7. Clean reinstall
rm -rf node_modules package-lock.json && npm install

# 8. Open deployed app
railway open

# 9. Check status
railway status

# 10. Run setup script
./setup-nextjs.sh
```

---

**Keep this file bookmarked for quick reference! 📌**

*Last Updated: 2025-02-13*

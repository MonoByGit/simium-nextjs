# 🚀 Simium Railway Deployment Guide

Complete stap-voor-stap handleiding voor het deployen van Simium Next.js app op Railway.

## 📋 Pre-Deployment Checklist

- [ ] GitHub repository aangemaakt
- [ ] Supabase project opgezet (met URL + Anon Key)
- [ ] Railway account aangemaakt ([railway.app](https://railway.app))
- [ ] Node.js 18+ geïnstalleerd lokaal

## 🎯 Deployment Methods

Railway ondersteunt 3 deployment methoden. Kies de beste voor jouw situatie:

---

## Method 1: GitHub Integration (AANBEVOLEN) ⭐

**Beste voor:** Automatische deployments, team collaboration, version control

### Step 1: Push naar GitHub

```bash
cd /Users/idusty/Documents/01_Werk_en_Projecten/Actieve_Projecten/Apps/Simium

# Initialize Git (als nog niet gedaan)
git init

# Add alle files
git add .

# Commit
git commit -m "feat: Next.js 15 conversion for Railway deployment"

# Create GitHub repo en push
# Optie A: Via GitHub CLI
gh repo create simium-nextjs --public --source=. --push

# Optie B: Handmatig
# 1. Maak repo op github.com
# 2. git remote add origin https://github.com/jouw-username/simium-nextjs.git
# 3. git branch -M main
# 4. git push -u origin main
```

### Step 2: Deploy via Railway Dashboard

1. **Login bij Railway**
   - Ga naar [railway.app](https://railway.app)
   - Sign in met GitHub account

2. **New Project**
   - Klik "New Project"
   - Select "Deploy from GitHub repo"
   - Authorize Railway voor GitHub access

3. **Select Repository**
   - Kies `simium-nextjs` repository
   - Railway detecteert automatisch Next.js!

4. **Environment Variables**
   - Klik op je project
   - Ga naar "Variables" tab
   - Add variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://jouw-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhb...
   NODE_ENV=production
   ```

5. **Deploy!**
   - Railway start automatisch met bouwen
   - Wacht 2-3 minuten
   - Klik op "View Logs" om progress te zien

6. **Get Your URL**
   - Ga naar "Settings" → "Domains"
   - Railway geeft automatisch een URL: `simium-production-xxx.up.railway.app`
   - ✅ **KLAAR!** Open je URL

### Step 3: Automatic Deployments

✨ **Voortaan:** Elke push naar `main` triggert automatische deployment!

```bash
# Maak wijzigingen
git add .
git commit -m "fix: update homepage"
git push

# Railway deployt automatisch! 🎉
```

---

## Method 2: Railway CLI (VOOR ADVANCED USERS)

**Beste voor:** Quick deployments, CI/CD pipelines, lokale development workflows

### Step 1: Installeer Railway CLI

```bash
# Via npm
npm install -g @railway/cli

# Of via Homebrew (macOS)
brew install railway
```

### Step 2: Login

```bash
railway login
```

Dit opent je browser voor authenticatie.

### Step 3: Initialize Project

```bash
cd /Users/idusty/Documents/01_Werk_en_Projecten/Actieve_Projecten/Apps/Simium

# Link to existing project of maak nieuwe
railway init
```

Kies:
- `Create a new project` → Type project name: `simium-nextjs`

### Step 4: Set Environment Variables

```bash
# Set variables via CLI
railway variables set NEXT_PUBLIC_SUPABASE_URL="https://jouw-project.supabase.co"
railway variables set NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhb..."
railway variables set NODE_ENV="production"

# Of edit interactief
railway variables
```

### Step 5: Deploy

```bash
railway up
```

Railway bouwt en deployt je app. Output toont je deployment URL!

### Step 6: Open je App

```bash
railway open
```

---

## Method 3: Railway Template (SNELSTE START)

**Beste voor:** Quick testing, demo's, geen GitHub repo nodig

### Option A: Via Railway Template

1. Klik op deze button (maak deze eerst op Railway):
   ```
   [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/...)
   ```

2. Railway cloned automatisch de template
3. Add environment variables
4. Deploy!

### Option B: Manual Template Creation

1. **Push naar GitHub** (zie Method 1, Step 1)

2. **Create Template**
   - Deploy project via Method 1
   - Ga naar project settings
   - Click "Generate Template"
   - Share template link met team

---

## 🔧 Post-Deployment Configuration

### Custom Domain Setup

1. **In Railway:**
   - Project → Settings → Domains
   - Click "Add Domain"
   - Type: `simium.nl` (of jouw domain)

2. **Bij je DNS Provider:**
   - Add CNAME record:
   ```
   Type: CNAME
   Name: @ (or www)
   Value: simium-production-xxx.up.railway.app
   TTL: 3600
   ```

3. **Wait for DNS Propagation** (10-60 minuten)

4. **Verify:**
   ```bash
   curl -I https://simium.nl
   ```

### SSL Certificate

✅ **Automatic!** Railway configureert automatisch SSL via Let's Encrypt.

### Environment Variables Management

**Via Dashboard:**
- Project → Variables tab
- Click "Add Variable"
- Format: `KEY=value`

**Via CLI:**
```bash
# List all variables
railway variables

# Set new variable
railway variables set KEY="value"

# Remove variable
railway variables delete KEY
```

### Monitoring & Logs

**View Logs:**
```bash
# Via CLI
railway logs

# Or in Dashboard
Project → Deployments → View Logs
```

**Common Log Commands:**
```bash
# Follow logs (real-time)
railway logs --follow

# Last 100 lines
railway logs --lines 100

# Filter by search term
railway logs | grep "error"
```

---

## 🐛 Troubleshooting

### Build Failures

**Error: "npm ERR! peer dep missing"**

✅ **Fix:**
```bash
# Locally test build
npm ci
npm run build

# If succeeds, push to trigger new deployment
```

**Error: "Out of memory"**

✅ **Fix:** Add environment variable in Railway:
```
NODE_OPTIONS=--max_old_space_size=4096
```

**Error: "Module not found: Can't resolve"**

✅ **Fix:** Check `tsconfig.json` paths:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]  // Must match
    }
  }
}
```

### Runtime Errors

**Error: "Cannot find module"**

✅ **Fix:** Ensure all dependencies in `package.json`:
```bash
npm install --save missing-package
git add package.json package-lock.json
git commit -m "fix: add missing dependency"
git push
```

**Error: "ECONNREFUSED" / "Supabase timeout"**

✅ **Fix:** Check environment variables:
```bash
railway variables

# Verify:
# - NEXT_PUBLIC_SUPABASE_URL is correct
# - NEXT_PUBLIC_SUPABASE_ANON_KEY is correct
# - No typos in variable names!
```

### Deployment Delays

**Deployment stuck at "Building..."**

✅ **Check:**
```bash
# View build logs
railway logs

# Look for:
# - npm install errors
# - TypeScript compilation errors
# - Next.js build errors
```

**Deployment succeeds but site is blank**

✅ **Check:**
1. Browser console for errors (F12)
2. Railway logs for runtime errors
3. Environment variables are set correctly

---

## 📊 Performance Optimization

### 1. Enable Output Tracing

Already configured in `next.config.js`:
```javascript
output: 'standalone'
```

This reduces deployment size by ~50%!

### 2. Database Indexing

If using Supabase extensively:
- Add indexes on frequently queried columns
- Use connection pooling
- Enable RLS (Row Level Security)

### 3. Caching Strategy

Add to `next.config.js`:
```javascript
async headers() {
  return [
    {
      source: '/:all*(svg|jpg|png|webp)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ]
}
```

### 4. Monitoring

**Add Analytics:**
```bash
npm install @vercel/analytics
```

**Or use Railway built-in metrics:**
- Project → Metrics
- View CPU, Memory, Network usage

---

## 🔄 Rollback Strategy

### Rollback to Previous Deployment

**Via Dashboard:**
1. Project → Deployments
2. Find previous successful deployment
3. Click "..." menu
4. Select "Redeploy"

**Via CLI:**
```bash
# View deployment history
railway status

# Rollback to specific deployment
railway rollback [deployment-id]
```

### Git Rollback

```bash
# Revert last commit
git revert HEAD
git push

# Or reset to specific commit
git reset --hard abc123
git push --force
```

---

## 💡 Best Practices

### 1. Environment Management

**Don't commit secrets:**
```bash
# .gitignore already includes:
.env
.env.local
.env*.local
```

**Use Railway's environment variables for ALL secrets!**

### 2. Deployment Strategy

**Feature Branch Workflow:**
```bash
# Work on feature
git checkout -b feature/new-scan
git commit -m "feat: add new scan type"
git push origin feature/new-scan

# Create PR, review, then merge to main
# Railway auto-deploys main branch
```

### 3. Health Checks

Add a health check endpoint:

```typescript
// src/app/api/health/route.ts
export async function GET() {
  return Response.json({ status: 'ok', timestamp: new Date().toISOString() })
}
```

Monitor via:
```bash
curl https://simium-production.up.railway.app/api/health
```

### 4. Database Migrations

If using Supabase:
- Use Supabase CLI for migrations
- Never run migrations in production code
- Use Railway's "Railway Up" command for database migrations

---

## 📞 Support Resources

**Railway:**
- Docs: [docs.railway.app](https://docs.railway.app)
- Discord: [discord.gg/railway](https://discord.gg/railway)
- Status: [status.railway.app](https://status.railway.app)

**Next.js:**
- Docs: [nextjs.org/docs](https://nextjs.org/docs)
- GitHub: [github.com/vercel/next.js](https://github.com/vercel/next.js)

**Supabase:**
- Docs: [supabase.com/docs](https://supabase.com/docs)
- Support: [supabase.com/support](https://supabase.com/support)

---

## ✅ Success Checklist

After deployment, verify:

- [ ] Site loads at Railway URL
- [ ] All 18 pages accessible
- [ ] Dark mode toggle works
- [ ] Supabase connection works
- [ ] Forms submit correctly
- [ ] Images load properly
- [ ] Mobile responsive
- [ ] SSL certificate active (🔒 in browser)
- [ ] No console errors
- [ ] Custom domain configured (optional)

---

**🎉 Gefeliciteerd! Je Simium app draait nu op Railway!**

*Deployment time: ~3-5 minuten | Build time: ~2-3 minuten | Total: 5-8 minuten*

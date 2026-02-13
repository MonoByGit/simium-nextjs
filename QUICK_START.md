# ⚡ Simium Next.js - Quick Start

**Snel aan de slag in 3 stappen!**

---

## 🎯 Optie 1: Automatische Setup (AANBEVOLEN)

```bash
# Run het setup script
./setup-nextjs.sh
```

Dit script doet automatisch:
- ✅ Backup van oude configuratie
- ✅ Switch naar Next.js package.json
- ✅ Clean install van dependencies
- ✅ Setup .env.local template

---

## 🎯 Optie 2: Handmatige Setup

### Stap 1: Dependencies

```bash
# Backup & switch
cp package.json package.json.vite.backup
cp package.json.nextjs package.json

# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Stap 2: Environment

```bash
# Setup env
cp .env.example .env.local

# Edit met je Supabase credentials
nano .env.local
```

### Stap 3: Start Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🚀 Deployment naar Railway

### Via GitHub (Aanbevolen)

```bash
# 1. Push to GitHub
git add .
git commit -m "feat: Next.js 15 conversion"
git push origin main

# 2. Deploy via Railway Dashboard
# - Login op railway.app
# - New Project → Deploy from GitHub
# - Select repo → Auto-deploy! ✨
```

### Via Railway CLI

```bash
# 1. Install CLI
npm install -g @railway/cli

# 2. Login & Deploy
railway login
railway init
railway up
```

**Deploy tijd: ~5-8 minuten**

---

## 📚 Volledige Documentatie

| Document | Doel |
|----------|------|
| `README_NEXTJS.md` | Complete setup & features |
| `DEPLOYMENT_GUIDE.md` | Railway deployment (stap-voor-stap) |
| `CONVERSION_SUMMARY.md` | Wat is er veranderd |

---

## ✅ Test Checklist

Na setup/deployment:

- [ ] Homepage laadt (`/`)
- [ ] Alle 18 pagina's bereikbaar
- [ ] Dark mode toggle werkt
- [ ] Navigation links werken
- [ ] No console errors
- [ ] Supabase connectie OK

---

## 🐛 Problemen?

### "npm install failed"
```bash
# Try with --legacy-peer-deps
npm install --legacy-peer-deps
```

### "Port 3000 already in use"
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### "Cannot find module '@/...'"
```bash
# Ensure tsconfig.json heeft:
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 💡 Tips

- 📖 Lees eerst `README_NEXTJS.md` voor complete context
- 🚀 Railway detecteert automatisch Next.js configuratie
- 🔐 Environment variables: gebruik `NEXT_PUBLIC_` prefix voor client-side
- 🎨 Alle styling en componenten werken zonder aanpassingen

---

**Veel succes! 🎉**

*Need help? Check de andere documentatie files!*

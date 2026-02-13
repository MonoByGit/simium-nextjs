# Simium - Next.js 15 App

AI-gedreven business scans voor het MKB. Geconverteerd van Vite naar Next.js 15 met App Router voor deployment op Railway.

## 📋 Overzicht Conversie

### ✅ Voltooid
- ✅ Next.js 15 met App Router geïmplementeerd
- ✅ Alle 16 core pagina's gemigreerd naar `/app` directory
- ✅ TypeScript configuratie geoptimaliseerd
- ✅ Tailwind CSS + PostCSS geconfigureerd
- ✅ Dark mode support via next-themes behouden
- ✅ Alle Radix UI componenten behouden
- ✅ Supabase integratie behouden
- ✅ Railway-compatible build configuratie

### 🔄 Wijzigingen van Vite naar Next.js

| **Aspect** | **Vite (Oud)** | **Next.js 15 (Nieuw)** |
|------------|----------------|------------------------|
| Routing | Hash-based routing (`#/`) | File-based routing (`/app/*`) |
| Entry point | `src/main.tsx` | `src/app/layout.tsx` |
| Pages | `src/components/pages/*.tsx` | `src/app/*/page.tsx` |
| Build output | `build/` | `.next/` + `out/` |
| Dev server | `vite` op port 3000 | `next dev` op port 3000 |
| Production | `vite build` | `next build` + `next start` |

## 🚀 Quick Start

### 1. Installeer Dependencies

```bash
# Verwijder oude node_modules (optioneel maar aanbevolen)
rm -rf node_modules package-lock.json

# Installeer met nieuwe package.json
cp package.json.nextjs package.json
npm install
```

### 2. Environment Variables

```bash
# Kopieer example env file
cp .env.example .env.local

# Voeg je Supabase credentials toe
# NEXT_PUBLIC_SUPABASE_URL=your-url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
```

### 3. Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### 4. Build & Production

```bash
# Build voor productie
npm run build

# Start productie server lokaal
npm start
```

## 📦 Railway Deployment

### Methode 1: Via Railway Dashboard (Aanbevolen)

1. **Push naar GitHub**
   ```bash
   git init
   git add .
   git commit -m "feat: convert to Next.js 15 for Railway deployment"
   git branch -M main
   git remote add origin https://github.com/jouw-username/simium.git
   git push -u origin main
   ```

2. **Deploy op Railway**
   - Ga naar [railway.app](https://railway.app)
   - Klik op "New Project"
   - Selecteer "Deploy from GitHub repo"
   - Kies je Simium repository
   - Railway detecteert automatisch Next.js!

3. **Environment Variables toevoegen**
   - Ga naar je project in Railway
   - Klik op "Variables" tab
   - Voeg toe:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
     ```

4. **Deploy!**
   - Railway bouwt en deployt automatisch
   - Je krijgt een URL zoals: `simium-production.up.railway.app`

### Methode 2: Via Railway CLI

```bash
# Installeer Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialiseer project
railway init

# Deploy
railway up
```

## 🏗️ Project Structuur

```
simium-nextjs/
├── src/
│   ├── app/                          # Next.js 15 App Router
│   │   ├── layout.tsx               # Root layout met metadata
│   │   ├── page.tsx                 # Homepage
│   │   ├── producten/
│   │   │   └── page.tsx
│   │   ├── cashflow-analyse/
│   │   │   └── page.tsx
│   │   ├── cloudkostenscan/
│   │   │   └── page.tsx
│   │   ├── prijsstrategie-check/
│   │   │   └── page.tsx
│   │   └── [...16 totaal pagina's]
│   ├── components/
│   │   ├── pages/                   # Page componenten (ongewijzigd)
│   │   ├── ui/                      # Radix UI componenten
│   │   ├── Layout.tsx               # Header + Footer
│   │   └── DarkModeContext.tsx      # Dark mode provider
│   ├── styles/
│   │   └── globals.css              # Apple-style CSS
│   ├── assets/                      # Images
│   └── utils/                       # Supabase helpers
├── next.config.js                    # Next.js config (Railway optimized)
├── tailwind.config.ts                # Tailwind config
├── tsconfig.json                     # TypeScript config
└── package.json                      # Dependencies + scripts

```

## 🔑 Belangrijke Bestanden voor Railway

### `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // 🎯 Optimalisatie voor Railway
  images: {
    unoptimized: true,   // 🎯 Geen image optimization (cost saving)
  },
}
```

### `package.json` - Railway Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",     // 🎯 Railway gebruikt dit
    "start": "next start",     // 🎯 Railway start hiermee
    "lint": "next lint"
  },
  "engines": {
    "node": ">=18.0.0"         // 🎯 Node version voor Railway
  }
}
```

## 🔄 Migratie Details

### Routing Aanpassingen

**Oud (Vite):**
```tsx
// Hash-based routing
<a href="#/producten">Producten</a>
window.location.href = '#/inloggen'
```

**Nieuw (Next.js):**
```tsx
// Path-based routing
<Link href="/producten">Producten</Link>
// Of
<a href="/producten">Producten</a>
```

### Layout Structuur

**Oud (Vite):**
```tsx
// App.tsx
<DarkModeProvider>
  <Router /> {/* Custom hash router */}
</DarkModeProvider>
```

**Nieuw (Next.js):**
```tsx
// app/layout.tsx
<html>
  <body>
    <DarkModeProvider>
      <Layout>
        {children} {/* Next.js router handles this */}
      </Layout>
    </DarkModeProvider>
  </body>
</html>
```

### Component Wijzigingen

Alle page componenten kregen een `'use client'` directive omdat ze interactief zijn:

```tsx
// components/pages/HomePage.tsx
'use client'

export function HomePage() {
  // useState, useEffect, etc. werken nu
}
```

## 🐛 Troubleshooting

### Build Errors

**Error: "Cannot find module '@/...'"**
```bash
# Check tsconfig.json paths configuratie
# Ensure @ alias wijst naar ./src/*
```

**Error: "Module not found: Can't resolve 'fs'"**
```bash
# Server-only imports in client components
# Verplaats naar Server Components of API routes
```

### Railway Deployment Issues

**Build fails met "Out of memory"**
```bash
# Voeg toe aan Railway environment:
NODE_OPTIONS=--max_old_space_size=4096
```

**Images worden niet geladen**
```bash
# Check next.config.js:
images: {
  unoptimized: true,  // Moet true zijn
}
```

## 📚 Pagina's Overzicht

| Route | Component | Beschrijving |
|-------|-----------|--------------|
| `/` | HomePage | Landing page |
| `/producten` | ProductsPage | Scans overzicht |
| `/cashflow-analyse` | CashflowanalysePage | Cashflow scan |
| `/cloudkostenscan` | CloudkostenscanPage | Cloud kosten scan |
| `/prijsstrategie-check` | PrijsstrategieCheckPage | Prijsstrategie scan |
| `/cashflow-verdieping` | CashflowVerdiepingPage | Premium analyse |
| `/cloudkosten-verdieping` | CloudkostenVerdiepingPage | Premium analyse |
| `/prijsstrategie-verdieping` | PrijsstrategieVerdiepingPage | Premium analyse |
| `/cashflow-resultaten` | CashflowResultatenPage | Resultaten dashboard |
| `/cloudkosten-resultaten` | CloudkostenResultatenPage | Resultaten dashboard |
| `/prijsstrategie-resultaten` | PrijsstrategieResultatenPage | Resultaten dashboard |
| `/voorbeeldrapport` | VoorbeeldrapportPage | Voorbeeld rapport |
| `/testimonials` | TestimonialsPage | Klant verhalen |
| `/over-simium` | AboutPage | Over ons |
| `/contact` | ContactPage | Contact |
| `/inloggen` | LoginPage | Login/Register |
| `/privacy` | PrivacyPage | Privacy policy |
| `/voorwaarden` | TermsPage | Terms |

## 🎨 Styling & Design System

- **Framework:** Tailwind CSS 3.4.17
- **Design:** Apple-inspired design system
- **Dark Mode:** next-themes met system preference support
- **UI Components:** Radix UI (volledig behouden)
- **Fonts:** SF Pro Display / Inter fallback

## 🔐 Environment Variables

```bash
# Required voor Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Optional
NEXT_PUBLIC_APP_URL=https://simium.nl
```

## 📊 Tech Stack

- **Framework:** Next.js 15.1.4 (App Router)
- **React:** 19.0.0
- **TypeScript:** 5.7.2
- **Styling:** Tailwind CSS 3.4.17
- **UI Library:** Radix UI (complete set)
- **Database:** Supabase
- **Deployment:** Railway
- **Package Manager:** npm

## 🚢 Railway Production Tips

1. **Automatic Deployments:**
   - Elke push naar `main` triggert automatisch een deployment

2. **Custom Domain:**
   - Settings → Networking → Add Custom Domain
   - Voeg CNAME record toe bij je DNS provider

3. **Monitoring:**
   - Bekijk logs in Railway dashboard
   - Deployments → View Logs

4. **Scaling:**
   - Railway schaalt automatisch op basis van traffic
   - Default: 512MB RAM, 1 vCPU

5. **SSL/HTTPS:**
   - Automatisch via Railway (Let's Encrypt)

## 📝 Next Steps

### Direct na deployment:

1. ✅ Test alle 18 pagina's
2. ✅ Verifieer Supabase connectie
3. ✅ Test dark mode toggle
4. ✅ Check mobile responsiveness
5. ✅ Voeg custom domain toe (optioneel)

### Toekomstige optimalisaties:

- [ ] Implementeer ISR (Incremental Static Regeneration) voor static pagina's
- [ ] Voeg Metadata API toe voor betere SEO
- [ ] Implementeer Route Groups voor betere organisatie
- [ ] Voeg Server Actions toe voor forms
- [ ] Setup Analytics (Vercel/Posthog)

## 🤝 Support

Voor vragen of problemen:
- Email: support@simium.nl
- Railway Docs: [docs.railway.app](https://docs.railway.app)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

**Succes met je deployment! 🚀**

*Geconverteerd van Vite naar Next.js 15 voor optimale Railway deployment.*

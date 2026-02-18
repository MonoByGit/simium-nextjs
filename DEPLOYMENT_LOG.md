# Simium Next.js 15 Deployment Log

## Project Overview
- **Original**: Vite + React app
- **Converted to**: Next.js 15 with App Router
- **Deployed to**: Railway
- **Production URL**: https://simium-nextjs-production.up.railway.app
- **Repository**: https://github.com/MonoByGit/simium-nextjs

## Deployment Timeline

### Phase 1: Initial Conversion (Session 1)
**Date**: 2026-02-13

**Major Changes**:
- Converted Vite app to Next.js 15 App Router architecture
- Created `app/` directory structure with `layout.tsx` and `page.tsx`
- Replaced React Router with Next.js routing
- Converted all page components to App Router compatible format
- Added `LayoutNextJS.tsx` for Next.js compatible navigation

**Key Files Created**:
- `app/layout.tsx` - Root layout with metadata
- `app/page.tsx` - Home page route
- All route files: `app/[route]/page.tsx` (21 pages total)
- `components/LayoutNextJS.tsx` - Next.js Link compatible layout

### Phase 2: Build Error Resolution (Session 2)
**Date**: 2026-02-13

**Problems Fixed**:
1. ✅ Missing devDependencies (autoprefixer, etc.)
   - Solution: `npm install --include=dev`

2. ✅ Figma asset imports (`figma:asset/...`)
   - Solution: Bulk replaced with `@/assets/` using sed

3. ✅ Missing Tailwind directives in globals.css
   - Solution: Added `@tailwind base/components/utilities`

4. ✅ Missing tailwindcss-animate dependency
   - Solution: `npm install --include=dev tailwindcss-animate`

5. ✅ ImageWithFallback type errors
   - Solution: Updated to accept `StaticImageData | string`

6. ✅ TypeScript index signature errors (3 files)
   - Solution: Explicit casting with `(prev as any)[field]`

7. ✅ Optional image in TestimonialsPage
   - Solution: Non-null assertion `testimonial.image!`

8. ✅ Calendar component deprecated API
   - Solution: Updated to use Chevron component instead of IconLeft/IconRight

9. ✅ Old Vite files in build
   - Solution: Added exclude list to tsconfig.json

10. ✅ Missing 'use client' directives
    - Solution: Added to 22+ components using React hooks

**Build Result**: All 21 pages successfully pre-rendered as static content

### Phase 3: Post-Deployment Fixes (Current Session)
**Date**: 2026-02-13

**Issue 1: Double Navigation Bar** ✅ FIXED
- **Problem**: Two navigation bars appeared on all pages
- **Root Cause**: Each page component wrapped content in `<Layout>`, while `app/layout.tsx` already provided Layout wrapper
- **Solution**: Removed Layout wrappers from all 21 page components, replaced with React fragments (`<>...</>`)
- **Files Modified**: All page components (HomePage.tsx, AboutPage.tsx, etc.)
- **Commit**: `fix: remove duplicate Layout wrappers from all page components` (6488f82)
- **Status**: ✅ Deployed and verified working

**Issue 2: Light/Dark Mode Toggle** ⚠️ PARTIALLY FIXED
- **Problem**: App only displays in dark mode, light mode toggle doesn't work
- **Attempted Fix**: Updated `app/layout.tsx` to import `LayoutNextJS` instead of `Layout`
- **Commit**: `fix: use LayoutNextJS in app/layout to restore dark mode toggle` (bfc34a0)
- **Status**: ⚠️ Deployed but not yet working - needs further investigation

## Current Production Status

### ✅ Working
- All 21 pages deployed and accessible
- Navigation between pages works correctly
- Single navigation bar (fixed)
- Responsive design
- All static assets loading
- Railway auto-deployment from GitHub

### ⚠️ Known Issues
- Light/Dark mode toggle not functional
- App displays only in dark mode
- Theme switcher icon visible but inactive

## Technical Architecture

### Stack
- **Framework**: Next.js 15.5.12
- **React**: 19.x
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Deployment**: Railway (Nixpacks)
- **Build**: Static Site Generation (SSG)

### File Structure
```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with DarkModeProvider
│   ├── page.tsx                 # Home page
│   └── [routes]/page.tsx        # All other routes (21 pages)
├── components/
│   ├── pages/                   # Page components (now without Layout wrapper)
│   ├── Layout.tsx               # Original Vite layout (deprecated)
│   ├── LayoutNextJS.tsx         # Next.js compatible layout
│   ├── DarkModeContext.tsx      # Theme provider
│   └── ui/                      # shadcn components
└── styles/
    └── globals.css              # Tailwind directives
```

### Page Components (21 total)
All components updated to:
- Have `'use client'` directive (for interactivity)
- Remove Layout wrapper (handled by app/layout.tsx)
- Use React fragments for wrapping

Pages:
1. HomePage
2. AboutPage (Over Simium)
3. ProductsPage (Producten)
4. CashflowanalysePage
5. CashflowVerdiepingPage
6. CashflowResultatenPage
7. CloudkostenscanPage
8. CloudkostenVerdiepingPage
9. CloudkostenResultatenPage
10. PrijsstrategieCheckPage
11. PrijsstrategieVerdiepingPage
12. PrijsstrategieResultatenPage
13. ContactPage
14. TestimonialsPage
15. VoorbeeldrapportPage
16. WerkwijzePage
17. PrivacyPage
18. TermsPage (Voorwaarden)
19. LoginPage (Inloggen)
20. RegisterPage
21. PaymentSuccessPage

## Deployment Configuration

### Railway Settings
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Region**: europe-west4
- **Auto-deploy**: Enabled (GitHub main branch)
- **Builder**: Nixpacks
- **Node Version**: 20.x (via package.json engines)

### Environment
- Production: https://simium-nextjs-production.up.railway.app
- GitHub: https://github.com/MonoByGit/simium-nextjs
- Branch: main

## Next Steps (TODO)

### High Priority
1. 🔴 Fix light/dark mode toggle functionality
   - Investigate why DarkModeContext not working in production
   - Verify LayoutNextJS component dark mode implementation
   - Test localStorage persistence
   - Consider next-themes package as alternative

### Medium Priority
2. Test all 21 pages thoroughly in production
3. Verify all form submissions work
4. Test responsive design on mobile devices
5. Check all assets load correctly
6. Verify SEO metadata on all pages

### Low Priority
7. Remove deprecated `Layout.tsx` component
8. Clean up unused Vite configuration files
9. Optimize bundle size
10. Add error boundaries
11. Implement proper loading states

## Commits History (Recent)

```
bfc34a0 - fix: use LayoutNextJS in app/layout to restore dark mode toggle
6488f82 - fix: remove duplicate Layout wrappers from all page components  
bd24e7d - fix: resolve all build errors for Railway deployment
a0c332c - fix: use Node.js 20 via package.json engines
564823d - fix: update to Node.js 20 for Railway deployment
d416c90 - feat: convert to Next.js 15 for Railway deployment
```

## Notes

### Dark Mode Implementation
The app uses a custom DarkModeContext:
- Located in: `src/components/DarkModeContext.tsx`
- Provides: `isDark` state and `toggleDarkMode()` function
- Storage: localStorage key `'simium-dark-mode'`
- Applies: `dark` class to `<html>` element
- Provider: Wraps app in `app/layout.tsx`

**Current Issue**: Toggle icon visible but theme doesn't change. Requires investigation of:
- Context provider initialization
- Client-side hydration issues
- Tailwind dark mode configuration
- Next.js SSR/SSG compatibility

### Lessons Learned
1. Always test locally before deploying
2. App Router requires careful handling of client/server components
3. Layout components should not be nested in page components
4. Dark mode in Next.js requires special consideration for SSR
5. Batch operations (sed) are efficient for repetitive changes across many files

## Resources
- Next.js 15 Docs: https://nextjs.org/docs
- Railway Docs: https://docs.railway.app
- Tailwind Dark Mode: https://tailwindcss.com/docs/dark-mode
- GitHub Repository: https://github.com/MonoByGit/simium-nextjs

'use client'

import React, { useState, useEffect } from 'react'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { CloudkostenscanPage } from './pages/CloudkostenscanPage'
import { CloudkostenVerdiepingPage } from './pages/CloudkostenVerdiepingPage'
import { CashflowVerdiepingPage } from './pages/CashflowVerdiepingPage'
import { CashflowanalysePage } from './pages/CashflowanalysePage'
import { PrijsstrategieCheckPage } from './pages/PrijsstrategieCheckPage'
import { LoginPage } from './pages/LoginPage'
import { VoorbeeldrapportPage } from './pages/VoorbeeldrapportPage'
import { TestimonialsPage } from './pages/TestimonialsPage'
import { CloudkostenResultatenPage } from './pages/CloudkostenResultatenPage'
import { CashflowResultatenPage } from './pages/CashflowResultatenPage'
import { PrijsstrategieResultatenPage } from './pages/PrijsstrategieResultatenPage'
import { PrijsstrategieVerdiepingPage } from './pages/PrijsstrategieVerdiepingPage'

// CORE 16 PAGES SIMIUM WEBSITE
// ==============================
// 1. HomePage - Landing/homepage
// 2. ProductsPage - All scans overview  
// 3. CashflowanalysePage - Cashflow scan
// 4. CloudkostenscanPage - Cloud costs scan
// 5. PrijsstrategieCheckPage - Pricing strategy scan
// 6. CashflowVerdiepingPage - Premium cashflow analysis
// 7. CloudkostenVerdiepingPage - Premium cloud analysis  
// 8. PrijsstrategieVerdiepingPage - Premium pricing analysis
// 9. CashflowResultatenPage - Cashflow results dashboard
// 10. CloudkostenResultatenPage - Cloud results dashboard
// 11. PrijsstrategieResultatenPage - Pricing results dashboard
// 12. VoorbeeldrapportPage - Example report
// 13. TestimonialsPage - Customer stories
// 14. AboutPage - About Simium
// 15. ContactPage - Contact
// 16. LoginPage - Login & Register (combined)
// 
// Utility pages (not counted in core 16):
// - PrivacyPage - Privacy policy
// - TermsPage - Terms & conditions

export function Router() {
  const [currentPath, setCurrentPath] = useState('/')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/'
      setCurrentPath(hash)
      
      // Scroll to top on route change
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Set initial path
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const renderPage = () => {
    switch (currentPath) {
      // === CORE 16 PAGES ===
      case '/':
        return <HomePage />
      case '/producten':
        return <ProductsPage />
      case '/cashflow-analyse':
        return <CashflowanalysePage />
      case '/cloudkostenscan':
        return <CloudkostenscanPage />
      case '/prijsstrategie-check':
        return <PrijsstrategieCheckPage />
      case '/cashflow-verdieping':
        return <CashflowVerdiepingPage />
      case '/cloudkosten-verdieping':
        return <CloudkostenVerdiepingPage />
      case '/prijsstrategie-verdieping':
        return <PrijsstrategieVerdiepingPage />
      case '/cashflow-resultaten':
        return <CashflowResultatenPage />
      case '/cloudkosten-resultaten':
        return <CloudkostenResultatenPage />
      case '/prijsstrategie-resultaten':
        return <PrijsstrategieResultatenPage />
      case '/voorbeeldrapport':
        return <VoorbeeldrapportPage />
      case '/testimonials':
        return <TestimonialsPage />
      case '/over-simium':
        return <AboutPage />
      case '/contact':
        return <ContactPage />
      case '/inloggen':
        return <LoginPage />
      
      // === UTILITY PAGES ===
      case '/privacy':
        return <PrivacyPage />
      case '/voorwaarden':
        return <TermsPage />
      
      // === LEGACY REDIRECTS ===
      case '/registreren':
        // Redirect to login page which now includes registration
        window.location.href = '#/inloggen'
        return <LoginPage />
      case '/payment-success':
        // Redirect to appropriate results page based on last scan
        window.location.href = '#/producten'
        return <ProductsPage />
      case '/werkwijze':
        // Redirect to about page where this content is now integrated
        window.location.href = '#/over-simium'
        return <AboutPage />
      
      default:
        return <HomePage />
    }
  }

  return renderPage()
}
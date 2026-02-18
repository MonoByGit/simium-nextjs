'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { MobileNavigation } from './MobileNavigation'
import { DarkModeToggle } from './DarkModeToggle'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Apple-style Header */}
      <header className="glass-effect sticky top-0 z-50 border-b border-border/50">
        <nav className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group transition-all duration-200">
                <div className="w-7 h-7 bg-gradient-to-br from-[var(--color-apple-blue)] to-[var(--color-apple-blue)] rounded-lg mr-3 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3L5 6h2v4h2V6h2L8 3z" fill="white"/>
                  </svg>
                </div>
                <span className="text-xl font-semibold text-foreground tracking-tight">Simium</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/producten" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium">
                Producten
              </Link>
              <Link href="/over-simium" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium">
                Over Simium
              </Link>
              <Link href="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium">
                Testimonials
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium">
                Contact
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <Link href="/inloggen" className="hidden sm:block text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium">
                Inloggen
              </Link>
              <DarkModeToggle />
              <Link href="/producten">
                <button className="hidden sm:block bg-[var(--color-apple-blue)] hover:bg-[var(--color-apple-blue)] text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  Start gratis scan
                </button>
              </Link>
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Apple-style Footer */}
      <footer className="bg-secondary border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-apple-blue)] to-[var(--color-apple-blue)] rounded-lg mr-3 flex items-center justify-center shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3L5 6h2v4h2V6h2L8 3z" fill="white"/>
                  </svg>
                </div>
                <span className="text-xl font-semibold text-foreground tracking-tight">Simium</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                AI-gedreven business scans voor het MKB. Snel, betrouwbaar, direct inzicht.
              </p>
            </div>

            {/* Scans Column */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">Scans</p>
              <ul className="space-y-3">
                <li>
                  <Link href="/cloudkostenscan" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Cloudkostenscan
                  </Link>
                </li>
                <li>
                  <Link href="/cashflow-analyse" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Cashflow-analyse
                  </Link>
                </li>
                <li>
                  <Link href="/prijsstrategie-check" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Prijsstrategie-check
                  </Link>
                </li>
                <li>
                  <Link href="/producten" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Alle scans
                  </Link>
                </li>
              </ul>
            </div>

            {/* Bedrijf Column */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">Bedrijf</p>
              <ul className="space-y-3">
                <li>
                  <Link href="/over-simium" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Over Simium
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/voorbeeldrapport" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Voorbeeldrapport
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">Support</p>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:support@simium.nl" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    support@simium.nl
                  </a>
                </li>
                <li>
                  <Link href="/inloggen" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Inloggen
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/voorwaarden" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Voorwaarden
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2026 Simium. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

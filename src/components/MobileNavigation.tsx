'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

interface MobileNavigationProps {
  onMenuToggle?: (isOpen: boolean) => void
}

export function MobileNavigation({ onMenuToggle }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    const newState = !isOpen
    setIsOpen(newState)
    onMenuToggle?.(newState)
  }

  const closeMenu = () => {
    setIsOpen(false)
    onMenuToggle?.(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors duration-200 text-foreground"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={closeMenu} />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-sm glass-card border-l border-border/50 shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <div className="flex items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo.svg"
                    alt="Simium logo"
                    width={28}
                    height={28}
                    className="mr-3"
                  />
                  <span className="text-lg font-semibold text-foreground tracking-tight">Simium</span>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors duration-200 text-foreground"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-6">
                <div className="space-y-1">
                  <Link 
                    href="/producten" 
                    onClick={closeMenu} 
                    className="block px-4 py-3 rounded-xl text-foreground hover:bg-secondary transition-colors duration-200 font-medium"
                  >
                    Producten
                  </Link>
                  <Link 
                    href="/over-simium" 
                    onClick={closeMenu} 
                    className="block px-4 py-3 rounded-xl text-foreground hover:bg-secondary transition-colors duration-200 font-medium"
                  >
                    Over Simium
                  </Link>
                  <Link 
                    href="/testimonials" 
                    onClick={closeMenu} 
                    className="block px-4 py-3 rounded-xl text-foreground hover:bg-secondary transition-colors duration-200 font-medium"
                  >
                    Testimonials
                  </Link>
                  <Link 
                    href="/contact" 
                    onClick={closeMenu} 
                    className="block px-4 py-3 rounded-xl text-foreground hover:bg-secondary transition-colors duration-200 font-medium"
                  >
                    Contact
                  </Link>
                  
                  {/* Divider */}
                  <div className="my-6 border-t border-border/50"></div>
                  
                  <Link 
                    href="/inloggen" 
                    onClick={closeMenu} 
                    className="block px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200 font-medium"
                  >
                    Inloggen
                  </Link>
                </div>
              </nav>
              
              {/* Bottom Action */}
              <div className="p-6 border-t border-border/50">
                <Link href="/producten" onClick={closeMenu}>
                  <button className="w-full bg-[var(--color-apple-blue)] hover:bg-[var(--color-apple-blue)] text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    Start gratis scan
                  </button>
                </Link>
                <div className="mt-4 text-center">
                  <a 
                    href="mailto:support@simium.nl" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    support@simium.nl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
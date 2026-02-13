'use client'

import React, { useState } from 'react'
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
                  <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mr-3 flex items-center justify-center shadow-sm">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3L5 6h2v4h2V6h2L8 3z" fill="white"/>
                    </svg>
                  </div>
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
                  <a 
                    href="#/producten" 
                    onClick={closeMenu} 
                    className="block px-4 py-3 rounded-xl text-foreground hover:bg-secondary transition-colors duration-200 font-medium"
                  >
                    Producten
                  </a>
                  <a 
                    href="#/over-simium" 
                    onClick={closeMenu} 
                    className="block px-4 py-3 rounded-xl text-foreground hover:bg-secondary transition-colors duration-200 font-medium"
                  >
                    Over Simium
                  </a>
                  <a 
                    href="#/testimonials" 
                    onClick={closeMenu} 
                    className="block px-4 py-3 rounded-xl text-foreground hover:bg-secondary transition-colors duration-200 font-medium"
                  >
                    Testimonials
                  </a>
                  <a 
                    href="#/contact" 
                    onClick={closeMenu} 
                    className="block px-4 py-3 rounded-xl text-foreground hover:bg-secondary transition-colors duration-200 font-medium"
                  >
                    Contact
                  </a>
                  
                  {/* Divider */}
                  <div className="my-6 border-t border-border/50"></div>
                  
                  <a 
                    href="#/inloggen" 
                    onClick={closeMenu} 
                    className="block px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200 font-medium"
                  >
                    Inloggen
                  </a>
                </div>
              </nav>
              
              {/* Bottom Action */}
              <div className="p-6 border-t border-border/50">
                <a href="#/producten" onClick={closeMenu}>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    Start gratis scan
                  </button>
                </a>
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
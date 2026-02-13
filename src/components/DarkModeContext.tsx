import React, { createContext, useContext, useEffect, useState } from 'react'

interface DarkModeContextType {
  isDark: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem('simium-dark-mode')
    if (stored !== null) {
      setIsDark(stored === 'true')
    } else {
      // Check system preference
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }, [])

  // Apply dark mode class to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem('simium-dark-mode', newDarkMode.toString())
  }

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export function useDarkMode() {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}
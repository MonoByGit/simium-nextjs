'use client'

import { useTheme } from 'next-themes'

export function useDarkMode() {
  const { theme, setTheme } = useTheme()
  return {
    isDark: theme === 'dark',
    toggleDarkMode: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
  }
}

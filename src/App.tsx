import React from 'react'
import { Router } from './components/Router'
import { DarkModeProvider } from './components/DarkModeContext'

export default function App() {
  return (
    <DarkModeProvider>
      <Router />
    </DarkModeProvider>
  )
}
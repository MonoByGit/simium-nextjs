'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Card } from '../ui/card'
import { Label } from '../ui/label'
import { Checkbox } from '../ui/checkbox'

export function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    acceptMarketing: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Wachtwoorden komen niet overeen')
      return
    }
    if (!formData.acceptTerms) {
      alert('Je moet akkoord gaan met de voorwaarden')
      return
    }
    console.log('Register:', formData)
    window.location.href = '#/producten'
  }

  const isFormValid = formData.firstName && formData.lastName && 
    formData.email && formData.company && formData.password && 
    formData.confirmPassword && formData.acceptTerms

  return (
    <>
      {/* Hero - Apple's Clean Registration */}
      <section className="py-32">
        <div className="max-w-md mx-auto px-6">
          <div className="space-y-12">
            {/* Header */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Account aanmaken
              </div>
              
              <h1 className="text-4xl font-bold">Begin je optimalisatie</h1>
              <p className="text-muted-foreground leading-relaxed">
                Maak een account aan en start direct je eerste gratis analyse
              </p>
            </div>

            {/* Registration Card */}
            <Card className="p-10 bg-card border border-border rounded-3xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-foreground font-medium">Voornaam</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      placeholder="Jan"
                      className="mt-2 h-12 px-4 rounded-2xl border-border bg-background text-foreground"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-foreground font-medium">Achternaam</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      placeholder="Smit"
                      className="mt-2 h-12 px-4 rounded-2xl border-border bg-background text-foreground"
                      required
                    />
                  </div>
                </div>
                
                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">E-mailadres</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="naam@bedrijf.nl"
                    className="mt-2 h-12 px-4 rounded-2xl border-border bg-background text-foreground"
                    required
                  />
                </div>

                {/* Company */}
                <div>
                  <Label htmlFor="company" className="text-foreground font-medium">Bedrijfsnaam</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="Mijn Bedrijf B.V."
                    className="mt-2 h-12 px-4 rounded-2xl border-border bg-background text-foreground"
                    required
                  />
                </div>
                
                {/* Password */}
                <div>
                  <Label htmlFor="password" className="text-foreground font-medium">Wachtwoord</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    placeholder="••••••••"
                    className="mt-2 h-12 px-4 rounded-2xl border-border bg-background text-foreground"
                    required
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <Label htmlFor="confirmPassword" className="text-foreground font-medium">Bevestig wachtwoord</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    placeholder="••••••••"
                    className="mt-2 h-12 px-4 rounded-2xl border-border bg-background text-foreground"
                    required
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="acceptTerms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, acceptTerms: checked as boolean }))}
                    />
                    <Label htmlFor="acceptTerms" className="text-sm text-muted-foreground leading-relaxed">
                      Ik ga akkoord met de{' '}
                      <a href="#/voorwaarden" className="text-blue-600 dark:text-blue-400 hover:underline">
                        algemene voorwaarden
                      </a>{' '}
                      en het{' '}
                      <a href="#/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
                        privacybeleid
                      </a>
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="acceptMarketing"
                      checked={formData.acceptMarketing}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, acceptMarketing: checked as boolean }))}
                    />
                    <Label htmlFor="acceptMarketing" className="text-sm text-muted-foreground leading-relaxed">
                      Ontvang updates over nieuwe features en optimalisatietips
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full py-4 rounded-2xl font-medium text-lg transition-all duration-200 ${
                    isFormValid
                      ? 'bg-green-600 hover:bg-green-700 text-white hover:-translate-y-1 hover:shadow-lg'
                      : 'bg-secondary text-muted-foreground cursor-not-allowed'
                  }`}
                >
                  Account aanmaken
                </Button>
              </form>
            </Card>

            {/* Social Registration */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-background text-muted-foreground">Of registreer met</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full h-12 bg-card border-border text-foreground hover:bg-accent rounded-2xl transition-all duration-200 hover:-translate-y-1"
                  onClick={() => console.log('Google register')}
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Doorgaan met Google
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full h-12 bg-card border-border text-foreground hover:bg-accent rounded-2xl transition-all duration-200 hover:-translate-y-1"
                  onClick={() => console.log('Microsoft register')}
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path fill="#f25022" d="M1 1h10v10H1z"/>
                    <path fill="#00a4ef" d="M13 1h10v10H13z"/>
                    <path fill="#7fba00" d="M1 13h10v10H1z"/>
                    <path fill="#ffb900" d="M13 13h10v10H13z"/>
                  </svg>
                  Doorgaan met Microsoft
                </Button>
              </div>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-muted-foreground">
                Heb je al een account?{' '}
                <a href="#/inloggen" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Log hier in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
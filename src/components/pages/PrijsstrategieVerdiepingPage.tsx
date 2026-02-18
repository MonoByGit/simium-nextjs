'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { Checkbox } from '../ui/checkbox'
import { Textarea } from '../ui/textarea'
import { PreFillNotificationBanner } from '../PreFillNotificationBanner'

  // Helper function to load and map saved scan data
  const loadSavedScanData = () => {
    try {
      const savedData = localStorage.getItem('simium_scan_data')
      if (savedData) {
        const scanData = JSON.parse(savedData)
        
        // Only use data if it's from prijsstrategie scan and recent (within 24 hours)
        if (scanData.scanType === 'prijsstrategie' && scanData.timestamp > Date.now() - 24 * 60 * 60 * 1000) {
          const basicScanData = scanData.data
          
          // Map basic scan fields to premium scan fields
          return {
            // Business Basics - map from basic scan
            businessType: basicScanData.businessType || '',
            pricingMethod: basicScanData.pricingMethod || '',
            discountStrategy: basicScanData.discountStrategy || '',
            marginKnowledge: basicScanData.marginKnowledge || '',
            customerSegments: basicScanData.customerSegments || '',
            
            // Extended fields for premium
            averageOrderValue: '',
            competitorPricing: '',
            valueProposition: '',
            priceSensitivity: '',
            marketPosition: '',
            pricingChallenges: [] as string[],
            revenueGoals: '',
            pricingFrequency: '',
            marketingStrategy: [] as string[],
            customerFeedback: '',
            additionalComments: '',
            uploadedFiles: [] as File[]
          }
        }
      }
    } catch (error) {
      console.log('No saved scan data found')
    }
    
    // Return empty form if no valid saved data
    return {
      businessType: '',
      pricingMethod: '',
      discountStrategy: '',
      marginKnowledge: '',
      customerSegments: '',
      averageOrderValue: '',
      competitorPricing: '',
      valueProposition: '',
      priceSensitivity: '',
      marketPosition: '',
      pricingChallenges: [] as string[],
      revenueGoals: '',
      pricingFrequency: '',
      marketingStrategy: [] as string[],
      customerFeedback: '',
      additionalComments: '',
      uploadedFiles: [] as File[]
    }
  }

export function PrijsstrategieVerdiepingPage() {
  const router = useRouter()
  const [formData, setFormData] = useState(() => loadSavedScanData())
  const [hasSavedData, setHasSavedData] = useState(false)

  // Check if we have saved data to show pre-fill indicator
  React.useEffect(() => {
    try {
      const savedData = localStorage.getItem('simium_scan_data')
      if (savedData) {
        const scanData = JSON.parse(savedData)
        if (scanData.scanType === 'prijsstrategie' && scanData.timestamp > Date.now() - 24 * 60 * 60 * 1000) {
          setHasSavedData(true)
        }
      }
    } catch (error) {
      // Ignore errors
    }
  }, [])

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentValue = (prev as any)[field] as string[]
      return {
        ...prev,
        [field]: checked 
          ? [...currentValue, value]
          : currentValue.filter(item => item !== value)
      }
    })
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setFormData(prev => ({
      ...prev,
      uploadedFiles: [...prev.uploadedFiles, ...files]
    }))
  }

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      uploadedFiles: prev.uploadedFiles.filter((_, i) => i !== index)
    }))
  }

  const clearPrefilledData = () => {
    // Clear localStorage
    localStorage.removeItem('simium_scan_data')
    
    // Reset form to empty state
    setFormData({
      businessType: '',
      pricingMethod: '',
      discountStrategy: '',
      marginKnowledge: '',
      customerSegments: '',
      averageOrderValue: '',
      competitorPricing: '',
      valueProposition: '',
      priceSensitivity: '',
      marketPosition: '',
      pricingChallenges: [] as string[],
      revenueGoals: '',
      pricingFrequency: '',
      marketingStrategy: [] as string[],
      customerFeedback: '',
      additionalComments: '',
      uploadedFiles: [] as File[]
    })
    
    setHasSavedData(false)
  }

  const isFormValid = formData.businessType && formData.pricingMethod && 
                     formData.discountStrategy && formData.marginKnowledge && 
                     formData.customerSegments && formData.averageOrderValue && 
                     formData.competitorPricing && formData.valueProposition

  return (
    <>
      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="/prijsstrategie-check" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-[var(--color-apple-indigo)]/80 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mr-2">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Terug naar basis check
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--color-apple-indigo)] to-[var(--color-apple-indigo)]/80 text-white mx-4 rounded-2xl mb-8 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white">Verdiepingsscan Prijsstrategie</h1>
              <p className="text-white/70 mt-2">Premium analyse op maat</p>
            </div>
            
            <p className="text-xl mb-6 text-white/70 max-w-2xl mx-auto">
              Krijg een volledig gepersonaliseerde prijsstrategie-analyse met concrete aanbevelingen voor optimale prijsstelling.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Analyse op maat
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Marge optimalisatie
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Concurrentie benchmark
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-fill Notification Banner */}
      <PreFillNotificationBanner 
        hasSavedData={hasSavedData}
        onClearData={clearPrefilledData}
        theme="purple"
        maxWidth="max-w-2xl"
      />

      {/* Main Form */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-16">
        <div className="space-y-8">
          
          {/* 1. Business & Pricing Fundamentals */}
          <Card className="p-6 lg:p-8 bg-white dark:bg-card border border-border rounded-2xl">
            <div className="mb-6">
              <h3 className="text-[var(--color-apple-indigo)] mb-2">Business & prijsstelling</h3>
              <p className="text-muted-foreground">Vertel ons meer over je huidige prijsstrategie</p>
            </div>

            <div className="space-y-6">
              {/* Business Type */}
              <div>
                <label className="block mb-2 text-foreground flex items-center">
                  Type business
                  {hasSavedData && formData.businessType && (
                    <span className="ml-2 inline-flex items-center text-xs bg-[var(--color-apple-indigo)]/10 text-[var(--color-apple-indigo)] px-2 py-1 rounded-full">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="mr-1">
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      Overgenomen
                    </span>
                  )}
                </label>
                <p className="text-sm text-muted-foreground mb-3">Wat verkoop je voornamelijk?</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'diensten', label: 'Diensten' },
                    { value: 'producten', label: 'Producten' },
                    { value: 'beide', label: 'Beide' },
                    { value: 'platform', label: 'Software/Platform' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleInputChange('businessType', option.value)}
                      className={`flex items-center justify-center p-4 rounded-xl border cursor-pointer transition-all hover:bg-accent ${
                        formData.businessType === option.value
                          ? 'border-[var(--color-apple-indigo)] bg-[var(--color-apple-indigo)]/5'
                          : 'border-border'
                      }`}
                    >
                      <span className="text-foreground">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Average Order Value */}
              <div>
                <label className="block mb-2 text-foreground">Gemiddelde orderwaarde</label>
                <p className="text-sm text-muted-foreground mb-3">Wat is je gemiddelde transactiewaarde?</p>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">€</span>
                  <Input 
                    type="number" 
                    placeholder="bijv. 250"
                    value={formData.averageOrderValue}
                    onChange={(e) => handleInputChange('averageOrderValue', e.target.value)}
                    className="w-full pl-8 pr-4 py-4 border-border focus:border-[var(--color-apple-indigo)] focus:ring-[var(--color-apple-indigo)]/20 focus:ring-2 rounded-xl transition-all"
                  />
                </div>
              </div>

              {/* Current Pricing Method */}
              <div>
                <label className="block mb-2 text-foreground flex items-center">
                  Huidige prijsmethode
                  {hasSavedData && formData.pricingMethod && (
                    <span className="ml-2 inline-flex items-center text-xs bg-[var(--color-apple-indigo)]/10 text-[var(--color-apple-indigo)] px-2 py-1 rounded-full">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="mr-1">
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      Overgenomen
                    </span>
                  )}
                </label>
                <p className="text-sm text-muted-foreground mb-4">Hoe bepaal je momenteel je prijzen?</p>
                <div className="space-y-3">
                  {[
                    { value: 'concurrent', label: 'Gebaseerd op concurrentie' },
                    { value: 'kostplus', label: 'Kosten + marge' },
                    { value: 'waarde', label: 'Waarde voor klant' },
                    { value: 'gevoel', label: 'Op basis van gevoel/ervaring' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleInputChange('pricingMethod', option.value)}
                      className={`flex items-center w-full p-4 rounded-xl border cursor-pointer transition-all hover:bg-accent ${
                        formData.pricingMethod === option.value
                          ? 'border-[var(--color-apple-indigo)] bg-[var(--color-apple-indigo)]/5'
                          : 'border-border'
                      }`}
                    >
                      <span className="text-foreground">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Value Proposition */}
              <div>
                <label className="block mb-2 text-foreground">Je unieke waardepropositie</label>
                <p className="text-sm text-muted-foreground mb-3">Wat maakt jouw aanbod anders/beter dan concurrenten?</p>
                <Textarea 
                  placeholder="bijv. Snellere levering, hogere kwaliteit, betere service, unieke functionaliteit..."
                  value={formData.valueProposition}
                  onChange={(e) => handleInputChange('valueProposition', e.target.value)}
                  className="w-full p-4 border-border focus:border-[var(--color-apple-indigo)] focus:ring-[var(--color-apple-indigo)]/20 focus:ring-2 rounded-xl transition-all min-h-[100px]"
                />
              </div>
            </div>
          </Card>

          {/* 2. Market & Competition Analysis */}
          <Card className="p-6 lg:p-8 bg-white dark:bg-card border border-border rounded-2xl">
            <div className="mb-6">
              <h3 className="text-[var(--color-apple-indigo)] mb-2">Markt & concurrentie</h3>
              <p className="text-muted-foreground">Hoe positioneer je jezelf in de markt?</p>
            </div>

            <div className="space-y-6">
              {/* Competitor Pricing */}
              <div>
                <label className="block mb-2 text-foreground">Hoe verhouden je prijzen zich tot concurrenten?</label>
                <p className="text-sm text-muted-foreground mb-4">Vergelijk je prijsstelling met directe concurrenten</p>
                <div className="space-y-3">
                  {[
                    { value: 'veel-duurder', label: 'Veel duurder (>20% hoger)' },
                    { value: 'iets-duurder', label: 'Iets duurder (5-20% hoger)' },
                    { value: 'vergelijkbaar', label: 'Vergelijkbaar (±5%)' },
                    { value: 'iets-goedkoper', label: 'Iets goedkoper (5-20% lager)' },
                    { value: 'veel-goedkoper', label: 'Veel goedkoper (>20% lager)' },
                    { value: 'weet-niet', label: 'Weet ik niet precies' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleInputChange('competitorPricing', option.value)}
                      className={`flex items-center w-full p-4 rounded-xl border cursor-pointer transition-all hover:bg-accent ${
                        formData.competitorPricing === option.value
                          ? 'border-[var(--color-apple-indigo)] bg-[var(--color-apple-indigo)]/5'
                          : 'border-border'
                      }`}
                    >
                      <span className="text-foreground">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Market Position */}
              <div>
                <label className="block mb-2 text-foreground">Gewenste marktpositie</label>
                <p className="text-sm text-muted-foreground mb-4">Hoe wil je gepositioneerd worden?</p>
                <div className="space-y-3">
                  {[
                    { value: 'premium', label: 'Premium speler (hoogste kwaliteit/prijs)' },
                    { value: 'quality-leader', label: 'Kwaliteitsleider (goede prijs-kwaliteit)' },
                    { value: 'value-leader', label: 'Value leader (beste waar voor geld)' },
                    { value: 'cost-leader', label: 'Kostenleider (laagste prijzen)' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleInputChange('marketPosition', option.value)}
                      className={`flex items-center w-full p-4 rounded-xl border cursor-pointer transition-all hover:bg-accent ${
                        formData.marketPosition === option.value
                          ? 'border-[var(--color-apple-indigo)] bg-[var(--color-apple-indigo)]/5'
                          : 'border-border'
                      }`}
                    >
                      <span className="text-foreground">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Sensitivity */}
              <div>
                <label className="block mb-2 text-foreground">Prijsgevoeligheid van je klanten</label>
                <p className="text-sm text-muted-foreground mb-4">Hoe reageren klanten op prijswijzigingen?</p>
                <div className="space-y-3">
                  {[
                    { value: 'zeer-gevoelig', label: 'Zeer prijsgevoelig (verlies bij 5% verhoging)' },
                    { value: 'gevoelig', label: 'Gevoelig (verlies bij 10-15% verhoging)' },
                    { value: 'gemiddeld', label: 'Gemiddeld gevoelig (verlies bij 20-30%)' },
                    { value: 'weinig-gevoelig', label: 'Weinig gevoelig (accepteren 30%+ verhoging)' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleInputChange('priceSensitivity', option.value)}
                      className={`flex items-center w-full p-4 rounded-xl border cursor-pointer transition-all hover:bg-accent ${
                        formData.priceSensitivity === option.value
                          ? 'border-[var(--color-apple-indigo)] bg-[var(--color-apple-indigo)]/5'
                          : 'border-border'
                      }`}
                    >
                      <span className="text-foreground">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* 3. Pricing Challenges & Goals */}
          <Card className="p-6 lg:p-8 bg-white dark:bg-card border border-border rounded-2xl">
            <div className="mb-6">
              <h3 className="text-[var(--color-apple-indigo)] mb-2">Uitdagingen & doelen</h3>
              <p className="text-muted-foreground">Welke pricing uitdagingen ervaar je?</p>
            </div>

            <div className="space-y-6">
              {/* Pricing Challenges */}
              <div>
                <label className="block mb-2 text-foreground">Grootste prijsuitdagingen</label>
                <p className="text-sm text-muted-foreground mb-4">Selecteer alle uitdagingen die je herkent</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: 'prijsdruk', label: 'Constante prijsdruk van klanten' },
                    { value: 'concurrentie', label: 'Concurrenten onderbieding' },
                    { value: 'margedruk', label: 'Dalende marges' },
                    { value: 'complexiteit', label: 'Pricing te complex' },
                    { value: 'inconsistentie', label: 'Inconsistente prijzen' },
                    { value: 'communicatie', label: 'Moeilijk uit te leggen aan klanten' },
                    { value: 'waarde-tonen', label: 'Waarde moeilijk aan te tonen' },
                    { value: 'segmentatie', label: 'Verschillende klanten, zelfde prijs' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all hover:bg-accent ${
                        formData.pricingChallenges.includes(option.value)
                          ? 'border-[var(--color-apple-indigo)] bg-[var(--color-apple-indigo)]/5'
                          : 'border-border'
                      }`}
                    >
                      <Checkbox 
                        checked={formData.pricingChallenges.includes(option.value)}
                        onCheckedChange={(checked) => handleCheckboxChange('pricingChallenges', option.value, !!checked)}
                        className="mr-3"
                      />
                      <span className="text-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Revenue Goals */}
              <div>
                <label className="block mb-2 text-foreground">Omzetdoelstelling</label>
                <p className="text-sm text-muted-foreground mb-3">Hoeveel wil je je omzet de komende 12 maanden laten groeien?</p>
                <div className="relative">
                  <Input 
                    type="number" 
                    placeholder="bijv. 25"
                    value={formData.revenueGoals}
                    onChange={(e) => handleInputChange('revenueGoals', e.target.value)}
                    className="w-full pr-12 pl-4 py-4 border-border focus:border-[var(--color-apple-indigo)] focus:ring-[var(--color-apple-indigo)]/20 focus:ring-2 rounded-xl transition-all"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                </div>
              </div>

              {/* Pricing Frequency */}
              <div>
                <label className="block mb-2 text-foreground">Hoe vaak pas je prijzen aan?</label>
                <p className="text-sm text-muted-foreground mb-4">Frequentie van prijswijzigingen</p>
                <div className="space-y-3">
                  {[
                    { value: 'nooit', label: 'Nooit of zelden' },
                    { value: 'jaarlijks', label: 'Jaarlijks' },
                    { value: 'halfjaarlijks', label: 'Halfjaarlijks' },
                    { value: 'kwartaal', label: 'Per kwartaal' },
                    { value: 'maandelijks', label: 'Maandelijks of vaker' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleInputChange('pricingFrequency', option.value)}
                      className={`flex items-center w-full p-4 rounded-xl border cursor-pointer transition-all hover:bg-accent ${
                        formData.pricingFrequency === option.value
                          ? 'border-[var(--color-apple-indigo)] bg-[var(--color-apple-indigo)]/5'
                          : 'border-border'
                      }`}
                    >
                      <span className="text-foreground">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* 4. Customer Insights & Feedback */}
          <Card className="p-6 lg:p-8 bg-white dark:bg-card border border-border rounded-2xl">
            <div className="mb-6">
              <h3 className="text-[var(--color-apple-indigo)] mb-2">Klant inzichten</h3>
              <p className="text-muted-foreground">Wat hoor je van klanten over je prijzen?</p>
            </div>

            <div className="space-y-6">
              {/* Customer Feedback */}
              <div>
                <label className="block mb-2 text-foreground">Klantfeedback over prijzen</label>
                <p className="text-sm text-muted-foreground mb-3">Wat zeggen klanten over je prijsstelling?</p>
                <Textarea 
                  placeholder="bijv. Te duur vergeleken met concurrent X, maar wel goede kwaliteit. Vragen vaak om korting..."
                  value={formData.customerFeedback}
                  onChange={(e) => handleInputChange('customerFeedback', e.target.value)}
                  className="w-full p-4 border-border focus:border-[var(--color-apple-indigo)] focus:ring-[var(--color-apple-indigo)]/20 focus:ring-2 rounded-xl transition-all min-h-[100px]"
                />
              </div>

              {/* Marketing Strategy */}
              <div>
                <label className="block mb-2 text-foreground">Huidige marketing/verkoopstrategie</label>
                <p className="text-sm text-muted-foreground mb-4">Hoe promoot en verkoop je je producten/diensten?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: 'prijs-competitief', label: 'Prijs als concurrentievoordeel' },
                    { value: 'kwaliteit-focus', label: 'Kwaliteit als verkoop punt' },
                    { value: 'service-excellence', label: 'Service excellence' },
                    { value: 'innovatie', label: 'Innovatie en uniekheid' },
                    { value: 'relatie-verkoop', label: 'Relatieverkoop' },
                    { value: 'online-marketing', label: 'Online marketing/SEO' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all hover:bg-accent ${
                        formData.marketingStrategy.includes(option.value)
                          ? 'border-[var(--color-apple-indigo)] bg-[var(--color-apple-indigo)]/5'
                          : 'border-border'
                      }`}
                    >
                      <Checkbox 
                        checked={formData.marketingStrategy.includes(option.value)}
                        onCheckedChange={(checked) => handleCheckboxChange('marketingStrategy', option.value, !!checked)}
                        className="mr-3"
                      />
                      <span className="text-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Comments */}
              <div>
                <label className="block mb-2 text-foreground">Aanvullende informatie</label>
                <p className="text-sm text-muted-foreground mb-3">Specifieke pricing doelen, uitdagingen of context</p>
                <Textarea 
                  placeholder="bijv. Specifieke doelen, branche-specifieke uitdagingen, timing van prijswijzigingen..."
                  value={formData.additionalComments}
                  onChange={(e) => handleInputChange('additionalComments', e.target.value)}
                  className="w-full p-4 border-border focus:border-[var(--color-apple-indigo)] focus:ring-[var(--color-apple-indigo)]/20 focus:ring-2 rounded-xl transition-all min-h-[100px]"
                />
              </div>
            </div>
          </Card>

          {/* 5. File Upload Section */}
          <Card className="p-6 lg:p-8 bg-white dark:bg-card border border-border rounded-2xl">
            <div className="mb-6">
              <h3 className="text-[var(--color-apple-indigo)] mb-2">Upload je gegevens (optioneel)</h3>
              <p className="text-muted-foreground">Voor de meest nauwkeurige analyse kun je je prijslijsten en concurrentie-informatie uploaden</p>
            </div>

            <div className="space-y-6">
              {/* File Upload Area */}
              <div>
                <label className="block mb-2 text-foreground">Upload bestanden voor gedetailleerde analyse</label>
                <p className="text-sm text-muted-foreground mb-4">
                  Ondersteunde bestanden: Prijslijsten, concurrentie overzichten, klantfeedback, omzetanalyses (.csv, .xlsx, .pdf)
                </p>
                
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-[var(--color-apple-indigo)] transition-colors">
                  <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-muted-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-muted-foreground mb-2">Sleep bestanden hierheen of</p>
                    <label className="cursor-pointer">
                      <span className="bg-[var(--color-apple-indigo)] hover:bg-[var(--color-apple-indigo)]/80 text-white px-4 py-2 rounded-lg transition-colors">
                        Kies bestanden
                      </span>
                      <input 
                        type="file" 
                        multiple 
                        className="hidden" 
                        accept=".csv,.xlsx,.xls,.pdf"
                        onChange={handleFileUpload}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Max. 10MB per bestand. Ondersteunde formaten: CSV, Excel, PDF
                  </p>
                </div>

                {/* Uploaded Files List */}
                {formData.uploadedFiles.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm text-foreground mb-3">Geüploade bestanden:</h4>
                    <div className="space-y-2">
                      {formData.uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-secondary/30 p-3 rounded-lg">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-[var(--color-apple-indigo)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="text-sm text-foreground">{file.name}</span>
                            <span className="text-xs text-muted-foreground ml-2">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                          </div>
                          <button
                            onClick={() => removeFile(index)}
                            className="text-[var(--color-apple-red)] hover:text-[var(--color-apple-red)]/80 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button 
              disabled={!isFormValid}
              onClick={() => {
                if (isFormValid) {
                  // In a real app, this would process the payment and submit data
                  // Redirect to results dashboard
                  router.push('/prijsstrategie-resultaten')
                }
              }}
              className={`px-12 py-4 rounded-xl font-medium text-lg transition-all ${
                isFormValid 
                  ? 'bg-[var(--color-apple-indigo)] hover:bg-[var(--color-apple-indigo)]/80 text-white shadow-lg hover:shadow-xl' 
                  : 'bg-muted text-muted-foreground cursor-not-allowed'
              }`}
            >
              Start verdiepingsanalyse
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              ✓ Niet tevreden = geld terug  ✓ Resultaten binnen 24 uur  ✓ Al betaald
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
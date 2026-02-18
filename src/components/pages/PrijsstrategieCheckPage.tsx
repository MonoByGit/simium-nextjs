'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { Textarea } from '../ui/textarea'

import { ImageWithFallback } from '../figma/ImageWithFallback'
import cloudImage from '@/assets/19eb92763caa81f24a43e8ed36ccf4d1e73e69e4.png'

// Logo imports
import inventecLogo from '@/assets/9c65e4e456c330cb45e96ec0a02e169e72c66787.png'
import experianLogo from '@/assets/41d6d232c7f38f02b040aadeac79f267ae01a47e.png'
import mannolLogo from '@/assets/872636fa97798151a130f04072b7e4be8d9a69d8.png'
import bramblesLogo from '@/assets/9628120ff4209cf85bc7ef502e84a4ccdb668753.png'

export function PrijsstrategieCheckPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    businessType: '',
    pricingMethod: '',
    competitorDetails: '',
    discountStrategy: '',
    averageDiscount: '',
    marginKnowledge: '',
    marginReasons: '',
    customerSegments: '',
    segmentationReasons: ''
  })
  const [calculatedPotential, setCalculatedPotential] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const calculatePricingPotential = () => {
    let potential = 15 // Base potential percentage
    
    // Adjust based on business type
    switch (formData.businessType) {
      case 'diensten':
        potential += 5 // Service businesses often have more pricing flexibility
        break
      case 'producten':
        potential += 2 // Product businesses have some flexibility
        break
      case 'beide':
        potential += 8 // Mixed businesses have most opportunities
        break
      case 'platform':
        potential += 10 // Platform/SaaS has highest potential
        break
    }

    // Adjust based on pricing method
    switch (formData.pricingMethod) {
      case 'concurrent':
        potential += 12 // Following competitors suggests room for optimization
        break
      case 'kostplus':
        potential += 8 // Cost-plus is basic, room for improvement
        break
      case 'waarde':
        potential += 3 // Value-based is good, less improvement needed
        break
      case 'gevoel':
        potential += 15 // Gut feeling has most room for improvement
        break
    }

    // Adjust based on discount strategy
    switch (formData.discountStrategy) {
      case 'veel':
        potential += 8 // Too many discounts = lost margin
        break
      case 'beperkt':
        potential += 3 // Moderate use is reasonable
        break
      case 'nooit':
        potential += 1 // Could be missing opportunities
        break
      case 'strategisch':
        potential -= 2 // Strategic use is optimal
        break
    }

    // Adjust based on margin knowledge
    switch (formData.marginKnowledge) {
      case 'exact':
        potential += 2 // Good knowledge, less improvement
        break
      case 'ongeveer':
        potential += 6 // Some knowledge, moderate improvement
        break
      case 'geen-idee':
        potential += 12 // No knowledge = big opportunity
        break
      case 'verschilt':
        potential += 10 // Variable margins suggest optimization opportunity
        break
    }

    // Adjust based on customer segments
    switch (formData.customerSegments) {
      case 'ja-prijzen':
        potential += 2 // Already segmenting, good
        break
      case 'ja-geen-prijzen':
        potential += 8 // Segmenting but not pricing = opportunity
        break
      case 'nee-overwegen':
        potential += 10 // Not segmenting but considering = big opportunity
        break
      case 'nee-niet':
        potential += 15 // No segmentation = highest opportunity
        break
    }

    // Cap the potential between 5-40%
    potential = Math.min(Math.max(potential, 5), 40)
    
    setCalculatedPotential(potential)
    setShowResult(true)

    // Save scan data to localStorage for potential future premium pages
    const scanData = {
      scanType: 'prijsstrategie',
      timestamp: Date.now(),
      data: {
        ...formData,
        calculatedPotential: potential
      }
    }
    localStorage.setItem('simium_scan_data', JSON.stringify(scanData))
  }

  const isFormValid = formData.businessType && formData.pricingMethod && formData.discountStrategy && formData.marginKnowledge && formData.customerSegments

  const getPotentialColor = (potential: number) => {
    if (potential >= 30) return 'text-[var(--color-apple-green)] dark:text-[var(--color-apple-green)]/70'
    if (potential >= 20) return 'text-[var(--color-apple-indigo)] dark:text-[var(--color-apple-indigo)]/70'
    if (potential >= 10) return 'text-[var(--color-apple-orange)] dark:text-[var(--color-apple-orange)]/80'
    return 'text-muted-foreground dark:text-muted-foreground'
  }

  const getPotentialLabel = (potential: number) => {
    if (potential >= 30) return 'Zeer hoog optimalisatiepotentieel'
    if (potential >= 20) return 'Hoog optimalisatiepotentieel'
    if (potential >= 10) return 'Gemiddeld optimalisatiepotentieel'
    return 'Beperkt optimalisatiepotentieel'
  }

  return (
    <>
      {/* Apple-style Navigation Breadcrumb */}
      <section className="pt-8 pb-4">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link 
              href="/producten" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mr-3 group-hover:-translate-x-1 transition-transform duration-200">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Alle scans
            </Link>
            
            <Link 
              href="/cloudkostenscan" 
              className="inline-flex items-center text-muted-foreground hover:text-[var(--color-apple-green)]/80 transition-colors duration-200 group"
            >
              Volgende: Cloudkostenscan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-3 group-hover:translate-x-1 transition-transform duration-200">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section - Apple Style */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-[var(--color-apple-gray-6)] dark:bg-[var(--color-apple-gray-2)] text-[var(--color-apple-indigo)] dark:text-[var(--color-apple-indigo)] px-4 py-2 rounded-full text-sm font-medium">
                  Prijsstrategie-check
                </div>
                
                <h1 className="text-5xl lg:text-6xl leading-tight">
                  Optimaliseer je 
                  <span className="block text-[var(--color-apple-indigo)]">prijsstrategie</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                  Ontdek of je geld laat liggen met je prijsstrategie en 
                  waar je meer marge kunt behalen.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground px-4 py-2">
                  Gratis check
                </Badge>
                <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground px-4 py-2">
                  Direct resultaat
                </Badge>
                <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground px-4 py-2">
                  Concrete aanbevelingen
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => document.querySelector('[data-calculator]')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[var(--color-apple-indigo)] hover:bg-[var(--color-apple-indigo)]/80 text-white px-8 py-4 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  Start gratis check
                </Button>
                <Link href="/voorbeeldrapport">
                  <Button 
                    variant="outline" 
                    className="px-8 py-4 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    Bekijk voorbeeldrapport
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[var(--color-apple-indigo)]/5 to-[var(--color-apple-indigo)]/10 dark:from-[var(--color-apple-indigo)]/20/20 dark:to-[var(--color-apple-indigo)]/25/20 rounded-3xl p-8 shadow-2xl">
                <ImageWithFallback 
                  src={cloudImage}
                  alt="Pricing strategy analysis dashboard"
                  className="rounded-2xl w-full shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-[var(--color-apple-indigo)] mb-1">23%</div>
                  <div className="text-muted-foreground text-sm">gem. marge verbetering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals - Apple minimal style */}
      <section className="py-16 border-y border-border/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-muted-foreground mb-12 text-sm tracking-wide uppercase">
            Vertrouwd door 500+ Nederlandse bedrijven
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 items-center opacity-40">
            <div className="flex justify-center">
              <ImageWithFallback 
                src={inventecLogo}
                alt="Inventec"
                className="h-8 w-auto object-contain filter grayscale"
              />
            </div>
            <div className="flex justify-center">
              <ImageWithFallback 
                src={experianLogo}
                alt="Experian"
                className="h-8 w-auto object-contain filter grayscale"
              />
            </div>
            <div className="flex justify-center">
              <ImageWithFallback 
                src={mannolLogo}
                alt="Mannol"
                className="h-8 w-auto object-contain filter grayscale"
              />
            </div>
            <div className="flex justify-center">
              <ImageWithFallback 
                src={bramblesLogo}
                alt="Brambles"
                className="h-8 w-auto object-contain filter grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator - Apple Card Design */}
      <section className="py-32" data-calculator>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-6">Check je prijsstrategie</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ontdek binnen 4 minuten of je geld laat liggen met je prijsstrategie
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-3xl shadow-lg overflow-hidden">
            {!showResult ? (
              <div className="p-12">
                <div className="space-y-12">
                  {/* Question 1 - Business Type */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Verkoop je producten, diensten of beide?</h3>
                      <p className="text-muted-foreground">Dit beïnvloedt je prijsstrategische mogelijkheden</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { value: 'diensten', label: 'Alleen diensten' },
                        { value: 'producten', label: 'Alleen producten' },
                        { value: 'beide', label: 'Beide' },
                        { value: 'platform', label: 'Software/platform/SaaS' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleInputChange('businessType', option.value)}
                          className={`text-left p-6 rounded-2xl border transition-all duration-200 hover:bg-accent/50 ${
                            formData.businessType === option.value
                              ? 'border-[var(--color-apple-indigo)] bg-[var(--color-apple-indigo)]/5 dark:bg-[var(--color-apple-indigo)]/20/20'
                              : 'border-border bg-background'
                          }`}
                        >
                          <span className="font-medium">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Question 2 - Pricing Method */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Hoe bepaal je nu je prijzen?</h3>
                      <p className="text-muted-foreground">Welke methode gebruik je voornamelijk?</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { value: 'concurrent', label: 'Kijk naar wat concurrenten vragen' },
                        { value: 'kostplus', label: 'Kosten + winstmarge' },
                        { value: 'waarde', label: 'Gebaseerd op waarde voor klant' },
                        { value: 'gevoel', label: 'Op gevoel/wat de markt accepteert' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleInputChange('pricingMethod', option.value)}
                          className={`text-left p-6 rounded-2xl border transition-all duration-200 hover:bg-accent/50 ${
                            formData.pricingMethod === option.value
                              ? 'border-[var(--color-apple-indigo)] bg-[var(--color-apple-indigo)]/5 dark:bg-[var(--color-apple-indigo)]/20/20'
                              : 'border-border bg-background'
                          }`}
                        >
                          <span className="font-medium">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Conditional: Competitor Details */}
                  {formData.pricingMethod === 'concurrent' && (
                    <div className="space-y-4 animate-in slide-in-from-top-4 duration-300">
                      <div className="space-y-2">
                        <h3 className="text-xl font-medium">Welke concurrenten volg je voor prijsinformatie?</h3>
                        <p className="text-muted-foreground">Dit helpt ons je concurrentiepositionering te begrijpen</p>
                      </div>
                      <Textarea
                        placeholder="bijv. Bedrijf A voor basis diensten, Bedrijf B voor premium segment..."
                        value={formData.competitorDetails}
                        onChange={(e) => handleInputChange('competitorDetails', e.target.value)}
                        className="min-h-[120px] p-6 rounded-2xl border-border bg-secondary/30 text-foreground resize-none"
                      />
                    </div>
                  )}

                  {/* Question 3 - Discount Strategy */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Gebruik je kortingsstrategieën?</h3>
                      <p className="text-muted-foreground">Hoe vaak geef je korting aan klanten?</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { value: 'veel', label: 'Vaak, om deals te sluiten' },
                        { value: 'beperkt', label: 'Soms, bij grote volumes' },
                        { value: 'nooit', label: 'Nooit, vaste prijzen' },
                        { value: 'strategisch', label: 'Strategisch, met duidelijke regels' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleInputChange('discountStrategy', option.value)}
                          className={`text-left p-6 rounded-2xl border transition-all duration-200 hover:bg-accent/50 ${
                            formData.discountStrategy === option.value
                              ? 'border-[var(--color-apple-indigo)] bg-[var(--color-apple-indigo)]/5 dark:bg-[var(--color-apple-indigo)]/20/20'
                              : 'border-border bg-background'
                          }`}
                        >
                          <span className="font-medium">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Conditional: Average Discount */}
                  {formData.discountStrategy === 'veel' && (
                    <div className="space-y-4 animate-in slide-in-from-top-4 duration-300">
                      <div className="space-y-2">
                        <h3 className="text-xl font-medium">Wat is je gemiddelde kortingspercentage?</h3>
                        <p className="text-muted-foreground">Dit helpt ons inschatten hoeveel marge je mogelijk verliest</p>
                      </div>
                      <div className="relative">
                        <Input 
                          type="number" 
                          placeholder="bijv. 15"
                          value={formData.averageDiscount}
                          onChange={(e) => handleInputChange('averageDiscount', e.target.value)}
                          className="h-14 pr-12 pl-6 rounded-2xl border-border bg-secondary/30 text-foreground text-lg"
                        />
                        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground text-lg">%</span>
                      </div>
                    </div>
                  )}

                  {/* Question 4 - Margin Knowledge */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Ken je je brutomarge per product/dienst?</h3>
                      <p className="text-muted-foreground">Weet je wat je verdient na aftrek van directe kosten?</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { value: 'exact', label: 'Ja, ik weet de exacte marges' },
                        { value: 'ongeveer', label: 'Ongeveer, heb een idee' },
                        { value: 'geen-idee', label: 'Nee, geen idee' },
                        { value: 'verschilt', label: 'Verschilt per product/dienst' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleInputChange('marginKnowledge', option.value)}
                          className={`text-left p-6 rounded-2xl border transition-all duration-200 hover:bg-accent/50 ${
                            formData.marginKnowledge === option.value
                              ? 'border-[var(--color-apple-indigo)] bg-[var(--color-apple-indigo)]/5 dark:bg-[var(--color-apple-indigo)]/20/20'
                              : 'border-border bg-background'
                          }`}
                        >
                          <span className="font-medium">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Conditional: Margin Knowledge Reasons */}
                  {formData.marginKnowledge === 'geen-idee' && (
                    <div className="space-y-4 animate-in slide-in-from-top-4 duration-300">
                      <div className="space-y-2">
                        <h3 className="text-xl font-medium">Waarom weet je je marges niet?</h3>
                        <p className="text-muted-foreground">Dit helpt ons de beste aanbevelingen te doen</p>
                      </div>
                      <Textarea
                        placeholder="bijv. Te complex om uit te rekenen, geen tijd voor gehad, weet niet hoe..."
                        value={formData.marginReasons}
                        onChange={(e) => handleInputChange('marginReasons', e.target.value)}
                        className="min-h-[120px] p-6 rounded-2xl border-border bg-secondary/30 text-foreground resize-none"
                      />
                    </div>
                  )}

                  {/* Question 5 - Customer Segments */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Werk je met verschillende klantsegmenten?</h3>
                      <p className="text-muted-foreground">Verschillende klantgroepen met verschillende behoeften/budgetten</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { value: 'ja-prijzen', label: 'Ja, en ik hanteer verschillende prijzen' },
                        { value: 'ja-geen-prijzen', label: 'Ja, maar zelfde prijzen voor iedereen' },
                        { value: 'nee-overwegen', label: 'Nee, maar overweeg het wel' },
                        { value: 'nee-niet', label: 'Nee, en niet van plan' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleInputChange('customerSegments', option.value)}
                          className={`text-left p-6 rounded-2xl border transition-all duration-200 hover:bg-accent/50 ${
                            formData.customerSegments === option.value
                              ? 'border-[var(--color-apple-indigo)] bg-[var(--color-apple-indigo)]/5 dark:bg-[var(--color-apple-indigo)]/20/20'
                              : 'border-border bg-background'
                          }`}
                        >
                          <span className="font-medium">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Conditional: Segmentation Reasons */}
                  {formData.customerSegments === 'ja-geen-prijzen' && (
                    <div className="space-y-4 animate-in slide-in-from-top-4 duration-300">
                      <div className="space-y-2">
                        <h3 className="text-xl font-medium">Waarom hanteer je geen verschillende prijzen per segment?</h3>
                        <p className="text-muted-foreground">Dit geeft ons inzicht in mogelijke optimalisaties</p>
                      </div>
                      <Textarea
                        placeholder="bijv. Te ingewikkeld om te beheren, bang om klanten te verliezen, weet niet hoe..."
                        value={formData.segmentationReasons}
                        onChange={(e) => handleInputChange('segmentationReasons', e.target.value)}
                        className="min-h-[120px] p-6 rounded-2xl border-border bg-secondary/30 text-foreground resize-none"
                      />
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-8">
                    <Button 
                      onClick={calculatePricingPotential}
                      disabled={!isFormValid}
                      className={`w-full py-6 rounded-2xl font-medium text-lg transition-all duration-200 ${
                        isFormValid 
                          ? 'bg-[var(--color-apple-indigo)] hover:bg-[var(--color-apple-indigo)]/80 text-white hover:-translate-y-1 hover:shadow-lg' 
                          : 'bg-secondary text-muted-foreground cursor-not-allowed'
                      }`}
                    >
                      Start check
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center">
                {/* Results */}
                <div className="space-y-8">
                  <div className="text-6xl">🎉</div>
                  
                  <div className="space-y-4">
                    <div className="text-6xl font-bold text-[var(--color-apple-indigo)]">
                      {calculatedPotential}%
                    </div>
                    <div className="text-xl text-muted-foreground">
                      marge optimalisatiepotentieel
                    </div>
                    <div className={`text-2xl font-medium ${getPotentialColor(calculatedPotential)}`}>
                      {getPotentialLabel(calculatedPotential)}
                    </div>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Gebaseerd op vergelijkbare bedrijven met jouw prijsaanpak
                    </p>
                  </div>
                  
                  {/* Analysis Points */}
                  <div className="bg-secondary/50 rounded-2xl p-8 max-w-md mx-auto">
                    <div className="space-y-4">
                      {[
                        'Prijsmethode optimalisatie',
                        'Kortingsstrategie analyse', 
                        'Segmentatie kansen'
                      ].map((item) => (
                        <div key={item} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[var(--color-apple-indigo)] rounded-full"></div>
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Premium CTA */}
                  <div className="border border-[var(--color-apple-indigo)]/30 dark:border-[var(--color-apple-indigo)]/25 rounded-2xl p-8 bg-[var(--color-apple-indigo)]/5/50 dark:bg-[var(--color-apple-indigo)]/20/10">
                    <h4 className="text-2xl font-medium mb-6">Klaar voor je volledige prijsstrategie-analyse?</h4>
                    
                    <Button 
                      onClick={() => router.push('/prijsstrategie-verdieping')}
                      className="bg-[var(--color-apple-indigo)] hover:bg-[var(--color-apple-indigo)]/80 text-white px-8 py-4 rounded-2xl font-medium mb-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                      Bekijk volledige analyse – €49,95
                    </Button>
                    
                    <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
                      <span>✓ Niet tevreden = geld terug</span>
                      <span>✓ Direct resultaat</span>
                    </div>
                  </div>
                  
                  {/* Back Button */}
                  <button 
                    onClick={() => setShowResult(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center space-x-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>Nieuwe check maken</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works - Apple Style */}
      <section className="py-32 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="mb-6">Zo werkt onze prijsstrategie-check</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Van huidige strategie naar maximale marge in 3 stappen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                number: '1',
                title: 'Strategie analyse',
                description: 'We analyseren je huidige prijsmethode, kortingsstrategie en margekennis.',
                color: 'purple'
              },
              {
                number: '2', 
                title: 'Kansen identificeren',
                description: 'Onze AI detecteert optimalisatiekansen in je prijsstrategie en segmentatie.',
                color: 'purple'
              },
              {
                number: '3',
                title: 'Verbeterplan',
                description: 'Krijg concrete aanbevelingen om je marge te verhogen zonder klanten te verliezen.',
                color: 'purple'
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-apple-indigo)]/10 to-[var(--color-apple-indigo)]/20 dark:from-[var(--color-apple-indigo)]/20 dark:to-[var(--color-apple-indigo)]/25 rounded-3xl flex items-center justify-center mx-auto mb-8 border-2 border-[var(--color-apple-indigo)]/30 dark:border-[var(--color-apple-indigo)]/30 group-hover:scale-105 transition-transform duration-200">
                  <span className="text-3xl font-bold text-[var(--color-apple-indigo)] dark:text-[var(--color-apple-indigo)]/70">{step.number}</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-[var(--color-apple-indigo)] dark:text-[var(--color-apple-indigo)]/70">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid - Apple Card Style */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="mb-6">Wat je krijgt in je prijsstrategie-check</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Een complete doorlichting van je prijsstrategie met concrete verbeteracties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="2"/>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Prijsmethode optimalisatie',
                description: 'Advies over betere prijsbepalingsmethoden voor maximale marge'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Concurrentieanalyse',
                description: 'Inzicht in je positie ten opzichte van concurrenten en marktprijzen'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Kortingsstrategie',
                description: 'Optimaliseer je kortingsbeleid voor betere marges en klanttevredenheid'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Klantsegmentatie',
                description: 'Strategieën voor gedifferentieerde prijzen per klantsegment'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Marge inzicht',
                description: 'Tools en methoden om je marges beter te begrijpen en bij te houden'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14.828 14.828a4 4 0 0 1-5.656 0M9 10h1M15 10h1M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Waarde-gebaseerde pricing',
                description: 'Leer prijzen op basis van klantwaarde in plaats van alleen kosten'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-[var(--color-apple-indigo)]/10 dark:bg-[var(--color-apple-indigo)]/20/40 rounded-2xl flex items-center justify-center mb-6 text-[var(--color-apple-indigo)] dark:text-[var(--color-apple-indigo)]/70 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-medium mb-3">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Apple Style */}
      <section className="py-32 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl leading-tight">
              Klaar voor meer
              <span className="block text-[var(--color-apple-blue)]">marge?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Check binnen 4 minuten je prijsstrategie en ontdek concrete optimalisatiekansen. Gratis en zonder verplichtingen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[var(--color-apple-blue)] hover:bg-[var(--color-apple-blue)]/90 text-white px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => document.querySelector('[data-calculator]')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start gratis prijsstrategie-check
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1"
                onClick={() => router.push('/contact')}
              >
                Neem contact op
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
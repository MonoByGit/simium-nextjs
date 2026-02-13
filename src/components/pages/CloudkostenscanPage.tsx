import React, { useState } from 'react'
import { Layout } from '../Layout'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

import { ImageWithFallback } from '../figma/ImageWithFallback'
import cloudImage from 'figma:asset/19eb92763caa81f24a43e8ed36ccf4d1e73e69e4.png'

// Logo imports
import inventecLogo from 'figma:asset/9c65e4e456c330cb45e96ec0a02e169e72c66787.png'
import experianLogo from 'figma:asset/41d6d232c7f38f02b040aadeac79f267ae01a47e.png'
import mannolLogo from 'figma:asset/872636fa97798151a130f04072b7e4be8d9a69d8.png'
import bramblesLogo from 'figma:asset/9628120ff4209cf85bc7ef502e84a4ccdb668753.png'

export function CloudkostenscanPage() {
  const [formData, setFormData] = useState({
    monthlySpend: '',
    cloudProvider: '',
    usageType: '',
    cloudServices: '',
    autoScaling: ''
  })
  const [calculatedSavings, setCalculatedSavings] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const calculateSavings = () => {
    const spend = parseFloat(formData.monthlySpend)
    if (spend > 0) {
      let baseSavingsPercentage = 0.20 // 20% base savings
      
      // Adjust based on cloud provider
      switch (formData.cloudProvider) {
        case 'aws':
          baseSavingsPercentage = 0.25 // AWS tends to have more optimization opportunities
          break
        case 'azure':
          baseSavingsPercentage = 0.22
          break
        case 'gcp':
          baseSavingsPercentage = 0.18
          break
        case 'oracle':
          baseSavingsPercentage = 0.30 // Oracle often has higher optimization potential
          break
        default:
          baseSavingsPercentage = 0.20
      }

      // Adjust based on usage complexity
      switch (formData.usageType) {
        case 'storage':
          baseSavingsPercentage *= 0.7 // Storage only is simpler
          break
        case 'applications':
          baseSavingsPercentage *= 1.0 // Standard optimization potential
          break
        case 'infrastructure':
          baseSavingsPercentage *= 1.3 // Full infrastructure has most waste
          break
        case 'unknown':
          baseSavingsPercentage *= 1.1 // Uncertainty suggests potential
          break
      }

      // Adjust based on number of services
      switch (formData.cloudServices) {
        case '1-5':
          baseSavingsPercentage *= 0.9 // Fewer services, less complexity
          break
        case '6-15':
          baseSavingsPercentage *= 1.1
          break
        case '16-30':
          baseSavingsPercentage *= 1.2
          break
        case '30+':
          baseSavingsPercentage *= 1.4 // Many services = high optimization potential
          break
      }

      // Adjust based on auto-scaling
      if (formData.autoScaling === 'Nee') {
        baseSavingsPercentage *= 1.4 // No auto-scaling = significant savings potential
      } else if (formData.autoScaling === 'Weet ik niet') {
        baseSavingsPercentage *= 1.2 // Uncertainty suggests potential for optimization
      }

      // Cap the percentage at reasonable levels (15-45%)
      baseSavingsPercentage = Math.min(Math.max(baseSavingsPercentage, 0.15), 0.45)
      
      const savings = Math.round(spend * baseSavingsPercentage)
      setCalculatedSavings(savings)
      setShowResult(true)

      // Save scan data to localStorage for premium page pre-fill
      const scanData = {
        scanType: 'cloudkosten',
        timestamp: Date.now(),
        data: {
          ...formData,
          calculatedSavings: savings,
          savingsPercentage: baseSavingsPercentage
        }
      }
      localStorage.setItem('simium_scan_data', JSON.stringify(scanData))
    }
  }

  const isFormValid = formData.monthlySpend && formData.cloudProvider && formData.usageType && formData.cloudServices && formData.autoScaling

  return (
    <Layout>
      {/* Apple-style Navigation Breadcrumb */}
      <section className="pt-8 pb-4">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <a 
              href="#/producten" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mr-3 group-hover:-translate-x-1 transition-transform duration-200">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Alle scans
            </a>
            
            <a 
              href="#/cashflow-analyse" 
              className="inline-flex items-center text-muted-foreground hover:text-blue-600 transition-colors duration-200 group"
            >
              Volgende: Cashflow-analyse
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-3 group-hover:translate-x-1 transition-transform duration-200">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Hero Section - Apple-style */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Cloudkostenscan
                </div>
                
                <h1 className="text-5xl lg:text-6xl leading-tight">
                  Ontdek verborgen 
                  <span className="block text-green-600">verspilling</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                  Bespaar tot 40% op je cloudkosten met onze AI-gedreven analyse. 
                  Krijg direct inzicht in optimalisaties.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground px-4 py-2">
                  Gratis analyse
                </Badge>
                <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground px-4 py-2">
                  Direct resultaat
                </Badge>
                <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground px-4 py-2">
                  Geen verplichtingen
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => document.querySelector('[data-calculator]')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  Start gratis scan
                </Button>
                <a href="#/voorbeeldrapport">
                  <Button 
                    variant="outline" 
                    className="px-8 py-4 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    Bekijk voorbeeldrapport
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-3xl p-8 shadow-2xl">
                <ImageWithFallback 
                  src={cloudImage}
                  alt="Cloud cost optimization dashboard"
                  className="rounded-2xl w-full shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-green-600 mb-1">€2.400</div>
                  <div className="text-muted-foreground text-sm">gem. maandbesparing</div>
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
            <h2 className="mb-6">Bereken je potentiële besparing</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Krijg binnen 2 minuten inzicht in je besparingspotentieel
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-3xl shadow-lg overflow-hidden">
            {!showResult ? (
              <div className="p-12">
                <div className="space-y-12">
                  {/* Question 1 - Cloud Provider */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Welke cloudprovider gebruik je?</h3>
                      <p className="text-muted-foreground">Waar draait je infrastructuur op?</p>
                    </div>
                    <Select value={formData.cloudProvider} onValueChange={(value) => handleInputChange('cloudProvider', value)}>
                      <SelectTrigger className="h-14 px-6 rounded-2xl border-border bg-background text-foreground">
                        <SelectValue placeholder="Selecteer je cloudplatform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aws">Amazon Web Services (AWS)</SelectItem>
                        <SelectItem value="azure">Microsoft Azure</SelectItem>
                        <SelectItem value="gcp">Google Cloud Platform</SelectItem>
                        <SelectItem value="oracle">Oracle Cloud</SelectItem>
                        <SelectItem value="digitalocean">DigitalOcean</SelectItem>
                        <SelectItem value="hetzner">Hetzner</SelectItem>
                        <SelectItem value="vultr">Vultr</SelectItem>
                        <SelectItem value="linode">Linode</SelectItem>
                        <SelectItem value="anders">Anders</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Question 2 - Usage Type */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Waarvoor gebruik je je cloudomgeving?</h3>
                      <p className="text-muted-foreground">Denk aan opslag, hosting of volledige IT-infrastructuur.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { value: 'storage', label: 'Alleen voor opslag (bestanden, backups)' },
                        { value: 'applications', label: 'Voor software en applicaties' },
                        { value: 'infrastructure', label: 'Volledige infrastructuur (servers, netwerken, etc.)' },
                        { value: 'unknown', label: 'Weet ik niet precies' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleInputChange('usageType', option.value)}
                          className={`text-left p-6 rounded-2xl border transition-all duration-200 hover:bg-accent/50 ${
                            formData.usageType === option.value
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                              : 'border-border bg-background'
                          }`}
                        >
                          <span className="font-medium">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Question 3 - Number of Services */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Hoeveel cloudservices gebruik je ongeveer?</h3>
                      <p className="text-muted-foreground">Bijvoorbeeld opslag, databases, e-mail, webservers, analytics…</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { value: '1-5', label: '1–5' },
                        { value: '6-15', label: '6–15' },
                        { value: '16-30', label: '16–30' },
                        { value: '30+', label: '30+' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleInputChange('cloudServices', option.value)}
                          className={`p-6 rounded-2xl border transition-all duration-200 hover:bg-accent/50 text-center font-medium ${
                            formData.cloudServices === option.value
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                              : 'border-border bg-background'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Question 4 - Auto Scaling */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Automatische schaalbaarheid</h3>
                      <p className="text-muted-foreground">Wordt capaciteit automatisch aangepast bij piekbelasting?</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      {[
                        { value: 'Ja', label: 'Ja, schaalt automatisch' },
                        { value: 'Nee', label: 'Nee, handmatige aanpassing' },
                        { value: 'Weet ik niet', label: 'Weet ik niet' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleInputChange('autoScaling', option.value)}
                          className={`p-6 rounded-2xl border transition-all duration-200 hover:bg-accent/50 text-center font-medium ${
                            formData.autoScaling === option.value
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                              : 'border-border bg-background'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Question 5 - Monthly Spend */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Maandelijkse cloudkosten</h3>
                      <p className="text-muted-foreground">Hoeveel geef je nu uit per maand?</p>
                    </div>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground text-lg">€</span>
                      <Input 
                        type="number" 
                        placeholder="bijv. 5000"
                        value={formData.monthlySpend}
                        onChange={(e) => handleInputChange('monthlySpend', e.target.value)}
                        className="h-14 pl-12 pr-6 rounded-2xl border-border bg-background text-foreground text-lg"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-8">
                    <Button 
                      onClick={calculateSavings}
                      disabled={!isFormValid}
                      className={`w-full py-6 rounded-2xl font-medium text-lg transition-all duration-200 ${
                        isFormValid 
                          ? 'bg-green-600 hover:bg-green-700 text-white hover:-translate-y-1 hover:shadow-lg' 
                          : 'bg-secondary text-muted-foreground cursor-not-allowed'
                      }`}
                    >
                      Bereken mijn besparing
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
                    <div className="text-6xl font-bold text-green-600">
                      €{calculatedSavings.toLocaleString()}
                    </div>
                    <div className="text-xl text-muted-foreground">
                      per maand besparing
                    </div>
                    <div className="text-2xl font-medium text-green-600">
                      Dat is €{(calculatedSavings * 12).toLocaleString()} per jaar!
                    </div>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Gebaseerd op vergelijkbare bedrijven met jouw schaal en gebruik
                    </p>
                  </div>
                  
                  {/* Analysis Points */}
                  <div className="bg-secondary/50 rounded-2xl p-8 max-w-md mx-auto">
                    <div className="space-y-4">
                      {[
                        'Ongebruikte resources',
                        'Right-sizing analyse', 
                        'Reserved instances advies'
                      ].map((item) => (
                        <div key={item} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Premium CTA */}
                  <div className="border border-green-200 dark:border-green-800 rounded-2xl p-8 bg-green-50/50 dark:bg-green-900/10">
                    <h4 className="text-2xl font-medium mb-6">Klaar voor je volledige analyse?</h4>
                    
                    <Button 
                      onClick={() => window.location.href = '#/cloudkosten-verdieping'}
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-medium mb-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
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
                    <span>Nieuwe berekening maken</span>
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
            <h2 className="mb-6">Zo werkt onze cloudkostenscan</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Een eenvoudig proces in 3 stappen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                number: '1',
                title: 'Veilige verbinding',
                description: 'Maak een read-only verbinding met je cloud accounts. Volledig veilig en GDPR-compliant.',
                color: 'green'
              },
              {
                number: '2', 
                title: 'AI-analyse',
                description: 'Onze AI analyseert je infrastructuur en identificeert kostenbesparingen en optimalisaties.',
                color: 'green'
              },
              {
                number: '3',
                title: 'Actieplan',
                description: 'Ontvang een gedetailleerd rapport met concrete actiepunten en geschatte besparingen.',
                color: 'green'
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-3xl flex items-center justify-center mx-auto mb-8 border-2 border-green-200 dark:border-green-700 group-hover:scale-105 transition-transform duration-200">
                  <span className="text-3xl font-bold text-green-600 dark:text-green-400">{step.number}</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-green-600 dark:text-green-400">{step.title}</h3>
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
            <h2 className="mb-6">Wat je krijgt in je cloudkostenscan</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Een complete analyse van je cloud-infrastructuur met concrete besparingen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Ongebruikte resources',
                description: 'Identificeert idle instances, zombie storage en vergeten databases'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Right-sizing analyse',
                description: 'Optimaliseer de grootte van je instances voor betere performance en lagere kosten'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Reserved instances',
                description: 'Advies over lange-termijn commitments voor significant lagere kosten'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Opslag optimalisatie',
                description: 'Identificeer onnodige storage tiers en duplicatie'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Auto-scaling advies',
                description: 'Optimaliseer automatische schaalbaarheid voor kosten en performance'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14.828 14.828a4 4 0 0 1-5.656 0M9 10h1M15 10h1M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Security audit',
                description: 'Beveiligingsadvies om compliance en kosten te optimaliseren'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-2xl flex items-center justify-center mb-6 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-200">
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
      <section className="py-32 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6">Klaar om te besparen?</h2>
          <p className="text-xl text-green-100 mb-12 leading-relaxed max-w-2xl mx-auto">
            Ontdek binnen 5 minuten hoeveel je kunt besparen op je cloudkosten. 
            Geen verplichtingen, direct resultaat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => document.querySelector('[data-calculator]')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              Start gratis cloudkostenscan
            </Button>
            <a href="#/contact">
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-200 hover:-translate-y-1"
              >
                Neem contact op
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
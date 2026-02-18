'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { Checkbox } from '../ui/checkbox'
import { Textarea } from '../ui/textarea'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { PreFillNotificationBanner } from '../PreFillNotificationBanner'

// Helper function to load and map saved scan data
const loadSavedScanData = () => {
  try {
    const savedData = localStorage.getItem('simium_scan_data')
    if (savedData) {
      const scanData = JSON.parse(savedData)
      
      // Only use data if it's from cloudkosten scan and recent (within 24 hours)
      if (scanData.scanType === 'cloudkosten' && scanData.timestamp > Date.now() - 24 * 60 * 60 * 1000) {
        const basicScanData = scanData.data
        
        // Map basic scan fields to premium scan fields
        return {
          // Cloud Infrastructure - map from basic scan
          cloudProvider: basicScanData.cloudProvider || '',
          multipleProviders: '', // This is new in premium
          additionalProviders: '',
          resourceTypes: [] as string[], // This is new in premium
          
          // Usage & Scale - map from basic scan
          workloadCount: '', // This is new in premium
          usagePredictability: basicScanData.usageType === 'storage' ? 'stable' : 
                              basicScanData.usageType === 'infrastructure' ? 'variable' : '',
          autoscaling: basicScanData.autoScaling === 'Ja' ? 'full' : 
                      basicScanData.autoScaling === 'Nee' ? 'manual' : 
                      basicScanData.autoScaling === 'Weet ik niet' ? 'partial' : '',
          
          // Costs & Optimization - map from basic scan
          monthlyCosts: basicScanData.monthlySpend || '',
          optimizationsDone: [] as string[], // This is new in premium
          
          // Technical Setup - all new in premium
          containerization: [] as string[],
          infrastructureAsCode: '',
          
          // Goals & Context - all new in premium
          analysisGoal: '',
          additionalComments: '',
          
          // File Uploads
          uploadedFiles: [] as File[]
        }
      }
    }
  } catch (error) {
    console.log('No saved scan data found')
  }
  
  // Return empty form if no valid saved data
  return {
    cloudProvider: '',
    multipleProviders: '',
    additionalProviders: '',
    resourceTypes: [] as string[],
    workloadCount: '',
    usagePredictability: '',
    autoscaling: '',
    monthlyCosts: '',
    optimizationsDone: [] as string[],
    containerization: [] as string[],
    infrastructureAsCode: '',
    analysisGoal: '',
    additionalComments: '',
    uploadedFiles: [] as File[]
  }
}

export function CloudkostenVerdiepingPage() {
  const [formData, setFormData] = useState(() => loadSavedScanData())
  const [hasSavedData, setHasSavedData] = useState(false)

  // Check if we have saved data to show pre-fill indicator
  React.useEffect(() => {
    try {
      const savedData = localStorage.getItem('simium_scan_data')
      if (savedData) {
        const scanData = JSON.parse(savedData)
        if (scanData.scanType === 'cloudkosten' && scanData.timestamp > Date.now() - 24 * 60 * 60 * 1000) {
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
      cloudProvider: '',
      multipleProviders: '',
      additionalProviders: '',
      resourceTypes: [] as string[],
      workloadCount: '',
      usagePredictability: '',
      autoscaling: '',
      monthlyCosts: '',
      optimizationsDone: [] as string[],
      containerization: [] as string[],
      infrastructureAsCode: '',
      analysisGoal: '',
      additionalComments: '',
      uploadedFiles: [] as File[]
    })
    
    setHasSavedData(false)
  }

  // Required fields for validation
  const isFormValid = formData.cloudProvider && formData.multipleProviders && 
                     formData.workloadCount && formData.usagePredictability && 
                     formData.autoscaling && formData.monthlyCosts && 
                     formData.infrastructureAsCode && formData.analysisGoal

  return (
    <>
      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="/cloudkostenscan" 
            className="inline-flex items-center text-sm text-muted-foreground dark:text-muted-foreground hover:text-[var(--color-apple-green)]/80 dark:hover:text-[var(--color-apple-green)] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mr-2">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Terug naar gratis scan
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--color-apple-green)] to-[var(--color-apple-green)]/80 text-white mx-4 rounded-2xl mb-8 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white">Complete Cloudkosten Analyse</h1>
              <p className="text-white/70 mt-2">€49,95 • Persoonlijk rapport binnen 2 uur</p>
            </div>
            
            <p className="text-xl mb-6 text-white/70 max-w-2xl mx-auto">
              Krijg een volledig gepersonaliseerde analyse met concrete actiepunten, 
              geschatte besparingen en implementatieplan specifiek voor jouw situatie.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Concrete besparingen in €
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Implementatieplan
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Geld-terug-garantie
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-fill Notification Banner */}
      <PreFillNotificationBanner 
        hasSavedData={hasSavedData}
        onClearData={clearPrefilledData}
        theme="green"
        maxWidth="max-w-4xl"
      />

      {/* Main Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="space-y-8">
          
          {/* 1. Cloud Infrastructure */}
          <Card className="p-6 lg:p-8 bg-white dark:bg-muted border border-border dark:border-border rounded-2xl">
            <div className="mb-6">
              <h3 className="text-[var(--color-apple-green)] mb-2">Cloudinfrastructuur *</h3>
              <p className="text-muted-foreground dark:text-muted-foreground">Vertel ons over je huidige cloud-opzet</p>
            </div>

            <div className="space-y-6">
              {/* Cloud Provider */}
              <div>
                <label className="block mb-2 text-foreground dark:text-muted-foreground flex items-center">
                  Welke cloudprovider gebruik je voornamelijk? *
                  {hasSavedData && formData.cloudProvider && (
                    <span className="ml-2 inline-flex items-center text-xs bg-[var(--color-apple-green)]/10 text-[var(--color-apple-green)] px-2 py-1 rounded-full">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="mr-1">
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      Overgenomen
                    </span>
                  )}
                </label>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-3">Je primaire provider waar de meeste workloads draaien</p>
                <Select value={formData.cloudProvider} onValueChange={(value) => handleInputChange('cloudProvider', value)}>
                  <SelectTrigger className="w-full h-12 px-4 border border-border dark:border-border rounded-xl bg-white dark:bg-muted focus:border-[var(--color-apple-green)]/30 focus:ring-[var(--color-apple-green)]/20 focus:ring-2">
                    <SelectValue placeholder="Selecteer je cloudprovider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aws">Amazon Web Services (AWS)</SelectItem>
                    <SelectItem value="azure">Microsoft Azure</SelectItem>
                    <SelectItem value="gcp">Google Cloud Platform</SelectItem>
                    <SelectItem value="oracle">Oracle Cloud</SelectItem>
                    <SelectItem value="digitalocean">DigitalOcean</SelectItem>
                    <SelectItem value="other">Anders</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Multiple Providers */}
              <div>
                <label className="block mb-2 text-foreground dark:text-muted-foreground">Gebruik je meerdere providers tegelijk? *</label>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">Multi-cloud of hybride opzet</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'yes', label: 'Ja, meerdere providers' },
                    { value: 'no', label: 'Nee, alleen één provider' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleInputChange('multipleProviders', option.value)}
                      className={`flex items-center justify-center p-4 rounded-xl border cursor-pointer transition-all hover:bg-accent dark:hover:bg-muted ${
                        formData.multipleProviders === option.value
                          ? 'border-[var(--color-apple-green)]/30 bg-[var(--color-apple-green)]/5 dark:bg-[var(--color-apple-green)]/20/30'
                          : 'border-border dark:border-border'
                      }`}
                    >
                      <span className="text-foreground dark:text-muted-foreground">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Providers - Conditional Field */}
              {formData.multipleProviders === 'yes' && (
                <div className="animate-in slide-in-from-top-4 duration-300">
                  <label className="block mb-2 text-foreground dark:text-muted-foreground">Welke andere providers gebruik je?</label>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-3">Noem de providers naast je hoofdprovider</p>
                  <Textarea 
                    placeholder="bijv. AWS voor compute, Azure voor databases, GCP voor analytics..."
                    value={formData.additionalProviders}
                    onChange={(e) => handleInputChange('additionalProviders', e.target.value)}
                    className="w-full p-4 border-border dark:border-border focus:border-[var(--color-apple-green)]/30 focus:ring-[var(--color-apple-green)]/20 focus:ring-2 rounded-xl transition-all min-h-[80px]"
                  />
                </div>
              )}

              {/* Resource Types */}
              <div>
                <label className="block mb-2 text-foreground dark:text-muted-foreground">Welke typen bronnen gebruik je? *</label>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">Selecteer alle toepasselijke opties</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: 'compute', label: 'Compute (servers, containers)' },
                    { value: 'storage', label: 'Opslag' },
                    { value: 'databases', label: 'Databases' },
                    { value: 'networking', label: 'Netwerk' },
                    { value: 'gpu', label: 'GPU / AI workloads' },
                    { value: 'other', label: 'Anders' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all hover:bg-accent dark:hover:bg-muted ${
                        formData.resourceTypes.includes(option.value)
                          ? 'border-[var(--color-apple-green)]/30 bg-[var(--color-apple-green)]/5 dark:bg-[var(--color-apple-green)]/20/30'
                          : 'border-border dark:border-border'
                      }`}
                    >
                      <Checkbox 
                        checked={formData.resourceTypes.includes(option.value)}
                        onCheckedChange={(checked) => handleCheckboxChange('resourceTypes', option.value, !!checked)}
                        className="mr-3"
                      />
                      <span className="text-foreground dark:text-muted-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* 2. Usage & Scale */}
          <Card className="p-6 lg:p-8 bg-white dark:bg-muted border border-border dark:border-border rounded-2xl">
            <div className="mb-6">
              <h3 className="text-[var(--color-apple-green)] mb-2">Gebruik & Schaal *</h3>
              <p className="text-muted-foreground dark:text-muted-foreground">Hoe intensief en voorspelbaar is je cloudgebruik?</p>
            </div>

            <div className="space-y-6">
              {/* Workload Count */}
              <div>
                <label className="block mb-2 text-foreground dark:text-muted-foreground">Hoeveel workloads draaien er gemiddeld? *</label>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">Aantal actieve applicaties, services of projecten</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { value: '1-5', label: '1–5' },
                    { value: '6-15', label: '6–15' },
                    { value: '16-50', label: '16–50' },
                    { value: '50+', label: '50+' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleInputChange('workloadCount', option.value)}
                      className={`flex items-center justify-center p-4 rounded-xl border cursor-pointer transition-all hover:bg-accent dark:hover:bg-muted ${
                        formData.workloadCount === option.value
                          ? 'border-[var(--color-apple-green)]/30 bg-[var(--color-apple-green)]/5 dark:bg-[var(--color-apple-green)]/20/30'
                          : 'border-border dark:border-border'
                      }`}
                    >
                      <span className="text-foreground dark:text-muted-foreground">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Usage Predictability */}
              <div>
                <label className="block mb-2 text-foreground dark:text-muted-foreground">Hoe voorspelbaar is je verbruik? *</label>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">Variëren je cloudkosten veel per maand?</p>
                <div className="space-y-3">
                  {[
                    { value: 'stable', label: 'Heel stabiel (±10% variatie)' },
                    { value: 'variable', label: 'Wisselend (10-30% variatie)' },
                    { value: 'seasonal', label: 'Seizoensgebonden (grote pieken)' },
                    { value: 'unpredictable', label: 'Onvoorspelbaar (>50% variatie)' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleInputChange('usagePredictability', option.value)}
                      className={`flex items-center w-full p-4 rounded-xl border cursor-pointer transition-all hover:bg-accent dark:hover:bg-muted ${
                        formData.usagePredictability === option.value
                          ? 'border-[var(--color-apple-green)]/30 bg-[var(--color-apple-green)]/5 dark:bg-[var(--color-apple-green)]/20/30'
                          : 'border-border dark:border-border'
                      }`}
                    >
                      <span className="text-foreground dark:text-muted-foreground">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Autoscaling */}
              <div>
                <label className="block mb-2 text-foreground dark:text-muted-foreground flex items-center">
                  Is automatische schaling geactiveerd? *
                  {hasSavedData && formData.autoscaling && (
                    <span className="ml-2 inline-flex items-center text-xs bg-[var(--color-apple-green)]/10 text-[var(--color-apple-green)] px-2 py-1 rounded-full">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="mr-1">
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      Overgenomen
                    </span>
                  )}
                </label>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">Schaalt je infrastructuur automatisch mee met vraag?</p>
                <div className="space-y-3 lg:grid lg:grid-cols-3 lg:gap-3 lg:space-y-0">
                  {[
                    { value: 'full', label: 'Volledig automatisch' },
                    { value: 'partial', label: 'Gedeeltelijk' },
                    { value: 'manual', label: 'Handmatige aanpassing' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleInputChange('autoscaling', option.value)}
                      className={`flex items-center justify-center p-4 rounded-xl border cursor-pointer transition-all hover:bg-accent dark:hover:bg-muted ${
                        formData.autoscaling === option.value
                          ? 'border-[var(--color-apple-green)]/30 bg-[var(--color-apple-green)]/5 dark:bg-[var(--color-apple-green)]/20/30'
                          : 'border-border dark:border-border'
                      }`}
                    >
                      <span className="text-foreground dark:text-muted-foreground">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* 3. Costs & Optimization */}
          <Card className="p-6 lg:p-8 bg-white dark:bg-muted border border-border dark:border-border rounded-2xl">
            <div className="mb-6">
              <h3 className="text-[var(--color-apple-green)] mb-2">Kosten & optimalisatie *</h3>
              <p className="text-muted-foreground dark:text-muted-foreground">Geef ons inzicht in je huidige kosten en optimalisaties</p>
            </div>

            <div className="space-y-6">
              {/* Monthly Costs */}
              <div>
                <label className="block mb-2 text-foreground dark:text-muted-foreground flex items-center">
                  Huidige maandelijkse cloudkosten (geschat) *
                  {hasSavedData && formData.monthlyCosts && (
                    <span className="ml-2 inline-flex items-center text-xs bg-[var(--color-apple-green)]/10 text-[var(--color-apple-green)] px-2 py-1 rounded-full">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="mr-1">
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      Overgenomen
                    </span>
                  )}
                </label>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-3">Je totale maandelijkse clouduitgaven</p>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground dark:text-muted-foreground">€</span>
                  <Input 
                    type="number" 
                    placeholder="bijv. 4200"
                    value={formData.monthlyCosts}
                    onChange={(e) => handleInputChange('monthlyCosts', e.target.value)}
                    className="w-full pl-8 pr-4 py-4 border-border dark:border-border focus:border-[var(--color-apple-green)]/30 focus:ring-[var(--color-apple-green)]/20 focus:ring-2 rounded-xl transition-all"
                  />
                </div>
              </div>

              {/* Optimizations Done */}
              <div>
                <label className="block mb-2 text-foreground dark:text-muted-foreground">Welke optimalisaties heb je al gedaan?</label>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">Selecteer alle optimalisaties die je al hebt toegepast</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: 'unused-resources', label: 'Ongebruikte bronnen verwijderd' },
                    { value: 'reserved-instances', label: 'Gereserveerde instanties gekocht' },
                    { value: 'right-sizing', label: 'Juiste dimensionering toegepast' },
                    { value: 'spot-instances', label: 'Spot instanties gebruikt' },
                    { value: 'minimal', label: 'Geen of weinig optimalisatie gedaan' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all hover:bg-accent dark:hover:bg-muted ${
                        formData.optimizationsDone.includes(option.value)
                          ? 'border-[var(--color-apple-green)]/30 bg-[var(--color-apple-green)]/5 dark:bg-[var(--color-apple-green)]/20/30'
                          : 'border-border dark:border-border'
                      }`}
                    >
                      <Checkbox 
                        checked={formData.optimizationsDone.includes(option.value)}
                        onCheckedChange={(checked) => handleCheckboxChange('optimizationsDone', option.value, !!checked)}
                        className="mr-3"
                      />
                      <span className="text-foreground dark:text-muted-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* 4. Technical Setup */}
          <Card className="p-6 lg:p-8 bg-white dark:bg-muted border border-border dark:border-border rounded-2xl">
            <div className="mb-6">
              <h3 className="text-[var(--color-apple-green)] mb-2">Technische opzet *</h3>
              <p className="text-muted-foreground dark:text-muted-foreground">Technische details over je infrastructuur</p>
            </div>

            <div className="space-y-6">
              {/* Containerization */}
              <div>
                <label className="block mb-2 text-foreground dark:text-muted-foreground">Gebruik je containerisatie of serverless?</label>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">Selecteer alle toepasselijke technologieën</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { value: 'kubernetes', label: 'Kubernetes / ECS' },
                    { value: 'serverless', label: 'Serverless (Lambda)' },
                    { value: 'none', label: 'Geen van beide' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all hover:bg-accent dark:hover:bg-muted ${
                        formData.containerization.includes(option.value)
                          ? 'border-[var(--color-apple-green)]/30 bg-[var(--color-apple-green)]/5 dark:bg-[var(--color-apple-green)]/20/30'
                          : 'border-border dark:border-border'
                      }`}
                    >
                      <Checkbox 
                        checked={formData.containerization.includes(option.value)}
                        onCheckedChange={(checked) => handleCheckboxChange('containerization', option.value, !!checked)}
                        className="mr-3"
                      />
                      <span className="text-foreground dark:text-muted-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Infrastructure as Code */}
              <div>
                <label className="block mb-2 text-foreground dark:text-muted-foreground">Gebruik je Infrastructure-as-Code (IaC)? *</label>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">Terraform, CloudFormation, ARM templates, etc.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { value: 'yes', label: 'Ja' },
                    { value: 'no', label: 'Nee' },
                    { value: 'unknown', label: 'Weet ik niet' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleInputChange('infrastructureAsCode', option.value)}
                      className={`flex items-center justify-center p-4 rounded-xl border cursor-pointer transition-all hover:bg-accent dark:hover:bg-muted ${
                        formData.infrastructureAsCode === option.value
                          ? 'border-[var(--color-apple-green)]/30 bg-[var(--color-apple-green)]/5 dark:bg-[var(--color-apple-green)]/20/30'
                          : 'border-border dark:border-border'
                      }`}
                    >
                      <span className="text-foreground dark:text-muted-foreground">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* 5. Goals & Context */}
          <Card className="p-6 lg:p-8 bg-white dark:bg-muted border border-border dark:border-border rounded-2xl">
            <div className="mb-6">
              <h3 className="text-[var(--color-apple-green)] mb-2">Doel en context *</h3>
              <p className="text-muted-foreground dark:text-muted-foreground">Wat wil je bereiken met deze analyse?</p>
            </div>

            <div className="space-y-6">
              {/* Analysis Goal */}
              <div>
                <label className="block mb-2 text-foreground dark:text-muted-foreground">Wat is je hoofddoel met deze analyse? *</label>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">Kies je primaire doel</p>
                <div className="space-y-3">
                  {[
                    { value: 'savings', label: 'Direct geld besparen (korte termijn)' },
                    { value: 'insights', label: 'Beter inzicht in waar mijn geld naartoe gaat' },
                    { value: 'growth', label: 'Voorbereiden op groei (schaalbaarheid)' },
                    { value: 'control', label: 'Meer controle over cloudkosten' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleInputChange('analysisGoal', option.value)}
                      className={`flex items-center w-full p-4 rounded-xl border cursor-pointer transition-all hover:bg-accent dark:hover:bg-muted ${
                        formData.analysisGoal === option.value
                          ? 'border-[var(--color-apple-green)]/30 bg-[var(--color-apple-green)]/5 dark:bg-[var(--color-apple-green)]/20/30'
                          : 'border-border dark:border-border'
                      }`}
                    >
                      <span className="text-foreground dark:text-muted-foreground">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Comments */}
              <div>
                <label className="block mb-2 text-foreground dark:text-muted-foreground">Aanvullende context (optioneel)</label>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-3">Specifieke uitdagingen, doelen of context die relevant zijn</p>
                <Textarea 
                  placeholder="bijv. We groeien snel en verwachten 3x meer verkeer dit jaar, of: We willen vooral de opslag optimaliseren..."
                  value={formData.additionalComments}
                  onChange={(e) => handleInputChange('additionalComments', e.target.value)}
                  className="w-full p-4 border-border dark:border-border focus:border-[var(--color-apple-green)]/30 focus:ring-[var(--color-apple-green)]/20 focus:ring-2 rounded-xl transition-all min-h-[100px]"
                />
              </div>
            </div>
          </Card>

          {/* 6. File Upload Section (Optional) */}
          <Card className="p-6 lg:p-8 bg-white dark:bg-muted border border-border dark:border-border rounded-2xl">
            <div className="mb-6">
              <h3 className="text-[var(--color-apple-green)] mb-2">Upload je bestanden (optioneel)</h3>
              <p className="text-muted-foreground dark:text-muted-foreground">Voor de meest nauwkeurige analyse kun je je facturerings- en configuratiebestanden uploaden</p>
            </div>

            <div className="space-y-6">
              {/* File Upload Area */}
              <div>
                <label className="block mb-2 text-foreground dark:text-muted-foreground">Upload bestanden voor gedetailleerde analyse</label>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">
                  Ondersteunde bestanden: AWS kostenoverzichten, Azure facturering CSV, GCP exports, Terraform bestanden (.tf), CloudFormation templates (.json/.yaml)
                </p>
                
                <div className="border-2 border-dashed border-border dark:border-border rounded-xl p-8 text-center hover:border-[var(--color-apple-green)] transition-colors">
                  <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-muted-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-muted-foreground dark:text-muted-foreground mb-2">Sleep bestanden hierheen of</p>
                    <label className="cursor-pointer">
                      <span className="bg-[var(--color-apple-green)] hover:bg-[var(--color-apple-green)]/80 text-white px-4 py-2 rounded-lg transition-colors">
                        Kies bestanden
                      </span>
                      <input 
                        type="file" 
                        multiple 
                        className="hidden" 
                        accept=".csv,.json,.yaml,.yml,.tf,.xlsx,.xls"
                        onChange={handleFileUpload}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground dark:text-muted-foreground mt-4">Max 10MB per bestand • CSV, JSON, YAML, XLS, TF</p>
                </div>
              </div>

              {/* Uploaded Files List */}
              {formData.uploadedFiles.length > 0 && (
                <div>
                  <h4 className="mb-3 text-foreground dark:text-muted-foreground">Geüploade bestanden:</h4>
                  <div className="space-y-2">
                    {formData.uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-[var(--color-apple-green)]/5 dark:bg-[var(--color-apple-green)]/20/30 border border-[var(--color-apple-green)]/30 dark:border-[var(--color-apple-green)]/30 rounded-lg">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-[var(--color-apple-green)] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <div>
                            <p className="text-sm text-foreground dark:text-muted-foreground">{file.name}</p>
                            <p className="text-xs text-muted-foreground dark:text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => removeFile(index)}
                          className="text-[var(--color-apple-red)] hover:text-[var(--color-apple-red)]/80 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Payment & Submit Section */}
          <Card className="p-6 lg:p-8 bg-white dark:bg-muted border border-border dark:border-border rounded-2xl">
            <div className="text-center">
              <h3 className="text-xl text-foreground dark:text-foreground mb-4">Klaar voor je complete analyse?</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-6">
                Je krijgt binnen 2 uur een persoonlijk rapport met concrete besparingen en implementatieplan.
              </p>
              
              {/* STRIPE PAYMENT TRIGGER BUTTON */}
              <Button 
                onClick={() => {
                  // STRIPE TRIGGER: Premium payment for cloudkosten scan
                  // Analytics trigger: Premium scan purchase attempt - cloudkosten
                  console.log('STRIPE_TRIGGER: Premium cloudkosten scan - €49.95', formData)
                  // TODO: Integrate with Stripe payment
                  // Expected flow: formData -> Stripe checkout -> payment confirmation -> rapport generatie
                  alert('Je wordt doorgestuurd naar de veilige betaalomgeving van Stripe. Na succesvolle betaling ontvang je binnen 2 uur je gedetailleerde rapport.')
                }}
                disabled={!isFormValid}
                className={`w-full py-4 rounded-xl font-medium transition-all shadow-md ${
                  isFormValid 
                    ? 'bg-[var(--color-apple-green)] hover:bg-[var(--color-apple-green)]/80 text-white hover:shadow-lg' 
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                }`}
                data-analytics="premium-payment-cloudkosten"
              >
                {isFormValid ? 'Betaal €49,95 voor complete analyse' : 'Vul alle verplichte velden (*) in'}
              </Button>
              
              {isFormValid && (
                <div className="mt-4 text-center text-sm text-muted-foreground dark:text-muted-foreground">
                  <div className="flex items-center justify-center space-x-6">
                    <span className="flex items-center space-x-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[var(--color-apple-green)]">
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Geld-terug-garantie</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[var(--color-apple-green)]">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Veilige betaling</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[var(--color-apple-green)]">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Rapport binnen 2 uur</span>
                    </span>
                  </div>
                </div>
              )}
              
              {formData.uploadedFiles.length > 0 && (
                <div className="mt-4 p-3 bg-[var(--color-apple-green)]/5 dark:bg-[var(--color-apple-green)]/20/30 border border-[var(--color-apple-green)]/30 dark:border-[var(--color-apple-green)]/30 rounded-lg">
                  <p className="text-sm text-[var(--color-apple-green)] dark:text-white/70">
                    Met {formData.uploadedFiles.length} geüploade bestand(en) krijg je een nog nauwkeurigere analyse!
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
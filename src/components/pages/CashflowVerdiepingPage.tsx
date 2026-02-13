'use client'

import React, { useState } from 'react'
import { Layout } from '../Layout'
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
        
        // Only use data if it's from cashflow scan and recent (within 24 hours)
        if (scanData.scanType === 'cashflow' && scanData.timestamp > Date.now() - 24 * 60 * 60 * 1000) {
          const basicScanData = scanData.data
          
          // Map basic scan fields to premium scan fields
          return {
            // Financial Basics - map from basic scan
            monthlyRevenue: basicScanData.monthlyRevenue || '',
            paymentTerms: basicScanData.paymentTerms || '',
            seasonality: basicScanData.seasonality || '',
            
            // Cash Management - map from basic scan
            accountingSoftware: basicScanData.accountingSoftware || '',
            majorExpenses: basicScanData.majorExpenses || '',
            
            // Extended fields for premium
            averagePaymentDelay: '',
            receivablesDays: '',
            payablesDays: '',
            inventoryTurnover: '',
            creditLines: [] as string[],
            investmentPlans: '',
            riskScenarios: [] as string[],
            forecastAccuracy: '',
            kpiTracking: [] as string[],
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
      monthlyRevenue: '',
      paymentTerms: '',
      seasonality: '',
      accountingSoftware: '',
      majorExpenses: '',
      averagePaymentDelay: '',
      receivablesDays: '',
      payablesDays: '',
      inventoryTurnover: '',
      creditLines: [] as string[],
      investmentPlans: '',
      riskScenarios: [] as string[],
      forecastAccuracy: '',
      kpiTracking: [] as string[],
      additionalComments: '',
      uploadedFiles: [] as File[]
    }
  }

export function CashflowVerdiepingPage() {
  const [formData, setFormData] = useState(() => loadSavedScanData())
  const [hasSavedData, setHasSavedData] = useState(false)

  // Check if we have saved data to show pre-fill indicator
  React.useEffect(() => {
    try {
      const savedData = localStorage.getItem('simium_scan_data')
      if (savedData) {
        const scanData = JSON.parse(savedData)
        if (scanData.scanType === 'cashflow' && scanData.timestamp > Date.now() - 24 * 60 * 60 * 1000) {
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
      monthlyRevenue: '',
      paymentTerms: '',
      seasonality: '',
      accountingSoftware: '',
      majorExpenses: '',
      averagePaymentDelay: '',
      receivablesDays: '',
      payablesDays: '',
      inventoryTurnover: '',
      creditLines: [] as string[],
      investmentPlans: '',
      riskScenarios: [] as string[],
      forecastAccuracy: '',
      kpiTracking: [] as string[],
      additionalComments: '',
      uploadedFiles: [] as File[]
    })
    
    setHasSavedData(false)
  }

  const isFormValid = formData.monthlyRevenue && formData.paymentTerms && 
                     formData.seasonality && formData.accountingSoftware && 
                     formData.majorExpenses && formData.averagePaymentDelay && 
                     formData.receivablesDays && formData.payablesDays

  return (
    <Layout>
      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#/cashflow-analyse" 
            className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mr-2">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Terug naar basis analyse
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white mx-4 rounded-2xl mb-8 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white">Verdiepingsscan Cashflow</h1>
              <p className="text-blue-100 mt-2">Premium analyse op maat</p>
            </div>
            
            <p className="text-xl mb-6 text-blue-100 max-w-2xl mx-auto">
              Krijg een volledig gepersonaliseerde cashflow-analyse met concrete actiepunten en voorspellingen voor jouw specifieke situatie.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Analyse op maat
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Concrete actiepunten
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Cashflow voorspelling
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-fill Notification Banner */}
      <PreFillNotificationBanner 
        hasSavedData={hasSavedData}
        onClearData={clearPrefilledData}
        theme="blue"
        maxWidth="max-w-2xl"
      />

      {/* Main Form */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-16">
        <div className="space-y-8">
          
          {/* 1. Financiële Basis */}
          <Card className="p-6 lg:p-8 bg-white border border-gray-200 rounded-2xl">
            <div className="mb-6">
              <h3 className="text-blue-600 mb-2">Financiële basis</h3>
              <p className="text-gray-600">Vertel ons meer over je financiële situatie</p>
            </div>

            <div className="space-y-6">
              {/* Monthly Revenue */}
              <div>
                <label className="block mb-2 text-gray-800 flex items-center">
                  Wat is je gemiddelde maandelijkse omzet?
                  {hasSavedData && formData.monthlyRevenue && (
                    <span className="ml-2 inline-flex items-center text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="mr-1">
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      Overgenomen
                    </span>
                  )}
                </label>
                <p className="text-sm text-gray-500 mb-3">Je totale maandelijkse inkomsten</p>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                  <Input 
                    type="number" 
                    placeholder="bijv. 25000"
                    value={formData.monthlyRevenue}
                    onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                    className="w-full pl-8 pr-4 py-4 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 rounded-xl transition-all"
                  />
                </div>
              </div>

              {/* Payment Terms */}
              <div>
                <label className="block mb-2 text-gray-800 flex items-center">
                  Welke betaaltermijnen hanteer je?
                  {hasSavedData && formData.paymentTerms && (
                    <span className="ml-2 inline-flex items-center text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="mr-1">
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      Overgenomen
                    </span>
                  )}
                </label>
                <p className="text-sm text-gray-500 mb-4">Hoe lang doen klanten over het betalen?</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'direct', label: 'Direct bij levering' },
                    { value: '30-dagen', label: '30 dagen' },
                    { value: '60-dagen', label: '60 dagen' },
                    { value: '90-dagen', label: '90 dagen of langer' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleInputChange('paymentTerms', option.value)}
                      className={`flex items-center justify-center p-4 rounded-xl border cursor-pointer transition-all hover:bg-gray-50 ${
                        formData.paymentTerms === option.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <span className="text-gray-800">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Average Payment Delay */}
              <div>
                <label className="block mb-2 text-gray-800">Gemiddelde betalingsvertraging</label>
                <p className="text-sm text-gray-500 mb-3">Hoeveel dagen te laat betalen klanten gemiddeld?</p>
                <div className="relative">
                  <Input 
                    type="number" 
                    placeholder="bijv. 7"
                    value={formData.averagePaymentDelay}
                    onChange={(e) => handleInputChange('averagePaymentDelay', e.target.value)}
                    className="w-full pr-14 pl-4 py-4 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 rounded-xl transition-all"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">dagen</span>
                </div>
              </div>
            </div>
          </Card>

          {/* 2. Cash Cycle Management */}
          <Card className="p-6 lg:p-8 bg-white border border-gray-200 rounded-2xl">
            <div className="mb-6">
              <h3 className="text-blue-600 mb-2">Cash cycle beheer</h3>
              <p className="text-gray-600">Hoe beheers je je werkkapitaal?</p>
            </div>

            <div className="space-y-6">
              {/* Receivables Days */}
              <div>
                <label className="block mb-2 text-gray-800">Debiteuren omlooptijd</label>
                <p className="text-sm text-gray-500 mb-3">Hoeveel dagen duren je uitstaande facturen gemiddeld?</p>
                <div className="relative">
                  <Input 
                    type="number" 
                    placeholder="bijv. 45"
                    value={formData.receivablesDays}
                    onChange={(e) => handleInputChange('receivablesDays', e.target.value)}
                    className="w-full pr-14 pl-4 py-4 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 rounded-xl transition-all"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">dagen</span>
                </div>
              </div>

              {/* Payables Days */}
              <div>
                <label className="block mb-2 text-gray-800">Crediteuren omlooptijd</label>
                <p className="text-sm text-gray-500 mb-3">Hoeveel dagen betaal je je leveranciers gemiddeld na ontvangst factuur?</p>
                <div className="relative">
                  <Input 
                    type="number" 
                    placeholder="bijv. 30"
                    value={formData.payablesDays}
                    onChange={(e) => handleInputChange('payablesDays', e.target.value)}
                    className="w-full pr-14 pl-4 py-4 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 rounded-xl transition-all"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">dagen</span>
                </div>
              </div>

              {/* Inventory Turnover */}
              <div>
                <label className="block mb-2 text-gray-800">Voorraad omloopsnelheid</label>
                <p className="text-sm text-gray-500 mb-4">Hoe vaak vernieuw je je voorraad per jaar? (Vul 0 in als je geen voorraad hebt)</p>
                <div className="relative">
                  <Input 
                    type="number" 
                    placeholder="bijv. 12"
                    value={formData.inventoryTurnover}
                    onChange={(e) => handleInputChange('inventoryTurnover', e.target.value)}
                    className="w-full pr-16 pl-4 py-4 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 rounded-xl transition-all"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">x/jaar</span>
                </div>
              </div>

              {/* Credit Lines */}
              <div>
                <label className="block mb-2 text-gray-800">Beschikbare kredietfaciliteiten</label>
                <p className="text-sm text-gray-500 mb-4">Welke financieringsmogelijkheden heb je beschikbaar?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: 'rekening-courant', label: 'Rekening-courant krediet' },
                    { value: 'factoring', label: 'Factoring/debiteuren financiering' },
                    { value: 'kredietlijn', label: 'Kredietlijn bij bank' },
                    { value: 'alternative', label: 'Alternatieve financiering' },
                    { value: 'geen', label: 'Geen kredietfaciliteiten' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all hover:bg-gray-50 ${
                        formData.creditLines.includes(option.value)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <Checkbox 
                        checked={formData.creditLines.includes(option.value)}
                        onCheckedChange={(checked) => handleCheckboxChange('creditLines', option.value, !!checked)}
                        className="mr-3"
                      />
                      <span className="text-gray-800">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* 3. Planning & Risk Management */}
          <Card className="p-6 lg:p-8 bg-white border border-gray-200 rounded-2xl">
            <div className="mb-6">
              <h3 className="text-blue-600 mb-2">Planning & risicobeheer</h3>
              <p className="text-gray-600">Hoe plan je voor de toekomst en beheer je risico's?</p>
            </div>

            <div className="space-y-6">
              {/* Investment Plans */}
              <div>
                <label className="block mb-2 text-gray-800">Geplande grote investeringen</label>
                <p className="text-sm text-gray-500 mb-3">Welke grote uitgaven verwacht je de komende 12 maanden?</p>
                <Textarea 
                  placeholder="bijv. Nieuwe machines €50k in Q3, kantoorverhuizing €25k in Q2, software upgrade €10k..."
                  value={formData.investmentPlans}
                  onChange={(e) => handleInputChange('investmentPlans', e.target.value)}
                  className="w-full p-4 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 rounded-xl transition-all min-h-[100px]"
                />
              </div>

              {/* Risk Scenarios */}
              <div>
                <label className="block mb-2 text-gray-800">Cashflow risicoscenario's</label>
                <p className="text-sm text-gray-500 mb-4">Welke situaties zouden je cashflow in gevaar kunnen brengen?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: 'grote-klant-verlies', label: 'Verlies van grote klant' },
                    { value: 'seizoensdip', label: 'Seizoensdip langer dan verwacht' },
                    { value: 'leverancier-problemen', label: 'Leveranciersproblemen' },
                    { value: 'economische-recessie', label: 'Economische recessie' },
                    { value: 'betalingsproblemen', label: 'Klanten betalen later' },
                    { value: 'andere', label: 'Andere risico\'s' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all hover:bg-gray-50 ${
                        formData.riskScenarios.includes(option.value)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <Checkbox 
                        checked={formData.riskScenarios.includes(option.value)}
                        onCheckedChange={(checked) => handleCheckboxChange('riskScenarios', option.value, !!checked)}
                        className="mr-3"
                      />
                      <span className="text-gray-800">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Forecast Accuracy */}
              <div>
                <label className="block mb-2 text-gray-800">Nauwkeurigheid cashflow voorspellingen</label>
                <p className="text-sm text-gray-500 mb-4">Hoe goed kun je je cashflow voorspellen?</p>
                <div className="space-y-3">
                  {[
                    { value: 'zeer-accuraat', label: 'Zeer accuraat (binnen 5% afwijking)' },
                    { value: 'redelijk-accuraat', label: 'Redelijk accuraat (5-15% afwijking)' },
                    { value: 'matig-accuraat', label: 'Matig accuraat (15-30% afwijking)' },
                    { value: 'onnauwkeurig', label: 'Onnauwkeurig (>30% afwijking)' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleInputChange('forecastAccuracy', option.value)}
                      className={`flex items-center w-full p-4 rounded-xl border cursor-pointer transition-all hover:bg-gray-50 ${
                        formData.forecastAccuracy === option.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <span className="text-gray-800">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* 4. KPI Tracking & Reporting */}
          <Card className="p-6 lg:p-8 bg-white border border-gray-200 rounded-2xl">
            <div className="mb-6">
              <h3 className="text-blue-600 mb-2">KPI tracking & rapportage</h3>
              <p className="text-gray-600">Welke cijfers volg je voor cashflow management?</p>
            </div>

            <div className="space-y-6">
              {/* KPI Tracking */}
              <div>
                <label className="block mb-2 text-gray-800">Welke cashflow KPI's volg je actief?</label>
                <p className="text-sm text-gray-500 mb-4">Selecteer alle cijfers die je regelmatig monitort</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: 'cash-balance', label: 'Dagelijkse kasbalans' },
                    { value: 'working-capital', label: 'Werkkapitaal ratio' },
                    { value: 'dso', label: 'Days Sales Outstanding (DSO)' },
                    { value: 'dpo', label: 'Days Payable Outstanding (DPO)' },
                    { value: 'cash-conversion', label: 'Cash conversion cycle' },
                    { value: 'burn-rate', label: 'Cash burn rate' },
                    { value: 'cash-runway', label: 'Cash runway (maanden)' },
                    { value: 'geen', label: 'Volg geen specifieke KPI\'s' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all hover:bg-gray-50 ${
                        formData.kpiTracking.includes(option.value)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <Checkbox 
                        checked={formData.kpiTracking.includes(option.value)}
                        onCheckedChange={(checked) => handleCheckboxChange('kpiTracking', option.value, !!checked)}
                        className="mr-3"
                      />
                      <span className="text-gray-800">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Comments */}
              <div>
                <label className="block mb-2 text-gray-800">Aanvullende informatie</label>
                <p className="text-sm text-gray-500 mb-3">Vertel ons meer over je specifieke cashflow uitdagingen</p>
                <Textarea 
                  placeholder="bijv. Specifieke uitdagingen, doelen, vragen over cashflow management..."
                  value={formData.additionalComments}
                  onChange={(e) => handleInputChange('additionalComments', e.target.value)}
                  className="w-full p-4 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 rounded-xl transition-all min-h-[100px]"
                />
              </div>
            </div>
          </Card>

          {/* 5. File Upload Section */}
          <Card className="p-6 lg:p-8 bg-white border border-gray-200 rounded-2xl">
            <div className="mb-6">
              <h3 className="text-blue-600 mb-2">Upload je gegevens (optioneel)</h3>
              <p className="text-gray-600">Voor de meest nauwkeurige analyse kun je je financiële bestanden uploaden</p>
            </div>

            <div className="space-y-6">
              {/* File Upload Area */}
              <div>
                <label className="block mb-2 text-gray-800">Upload bestanden voor gedetailleerde analyse</label>
                <p className="text-sm text-gray-500 mb-4">
                  Ondersteunde bestanden: Bank afschriften, cashflow overzichten, debiteurenlijsten, crediteuren overzichten (.csv, .xlsx, .pdf)
                </p>
                
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors">
                  <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-gray-600 mb-2">Sleep bestanden hierheen of</p>
                    <label className="cursor-pointer">
                      <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
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
                  <p className="text-xs text-gray-500 mt-4">
                    Max. 10MB per bestand. Ondersteunde formaten: CSV, Excel, PDF
                  </p>
                </div>

                {/* Uploaded Files List */}
                {formData.uploadedFiles.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm text-gray-700 mb-3">Geüploade bestanden:</h4>
                    <div className="space-y-2">
                      {formData.uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="text-sm text-gray-700">{file.name}</span>
                            <span className="text-xs text-gray-500 ml-2">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                          </div>
                          <button
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 transition-colors"
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
                  window.location.href = '#/cashflow-resultaten'
                }
              }}
              className={`px-12 py-4 rounded-xl font-medium text-lg transition-all ${
                isFormValid 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Start verdiepingsanalyse
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              ✓ Niet tevreden = geld terug  ✓ Resultaten binnen 24 uur  ✓ Al betaald
            </p>
          </div>

        </div>
      </div>
    </Layout>
  )
}
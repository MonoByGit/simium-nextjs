'use client'

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Textarea } from "../ui/textarea";

import { ImageWithFallback } from "../figma/ImageWithFallback";
import cloudImage from "@/assets/19eb92763caa81f24a43e8ed36ccf4d1e73e69e4.png";

// Logo imports
import inventecLogo from "@/assets/9c65e4e456c330cb45e96ec0a02e169e72c66787.png";
import experianLogo from "@/assets/41d6d232c7f38f02b040aadeac79f267ae01a47e.png";
import mannolLogo from "@/assets/872636fa97798151a130f04072b7e4be8d9a69d8.png";
import bramblesLogo from "@/assets/9628120ff4209cf85bc7ef502e84a4ccdb668753.png";

export function CashflowanalysePage() {
  const [formData, setFormData] = useState({
    monthlyRevenue: "",
    paymentTerms: "",
    seasonality: "",
    seasonalityDetails: "",
    accountingSoftware: "",
    accountingMethod: "",
    majorExpenses: "",
    unpredictableExpenses: "",
  });
  const [calculatedScore, setCalculatedScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const calculateCashflowScore = () => {
    const revenue = parseFloat(formData.monthlyRevenue);
    if (revenue > 0) {
      let score = 60; // Base score

      // Adjust based on payment terms
      switch (formData.paymentTerms) {
        case "direct":
          score += 20; // Best for cashflow
          break;
        case "30-dagen":
          score += 10;
          break;
        case "60-dagen":
          score -= 5;
          break;
        case "90-dagen":
          score -= 15; // Worst for cashflow
          break;
      }

      // Adjust based on seasonality
      switch (formData.seasonality) {
        case "stabiel":
          score += 15; // Predictable is good
          break;
        case "licht-seizoen":
          score += 5;
          break;
        case "sterk-seizoen":
          score -= 10; // High volatility is risky
          break;
        case "onvoorspelbaar":
          score -= 20; // Very risky
          break;
      }

      // Adjust based on accounting software
      switch (formData.accountingSoftware) {
        case "professioneel":
          score += 10; // Good insight
          break;
        case "basis":
          score += 5;
          break;
        case "excel":
          score -= 5;
          break;
        case "geen":
          score -= 15; // No insight is dangerous
          break;
      }

      // Adjust based on expense predictability
      switch (formData.majorExpenses) {
        case "voorspelbaar":
          score += 10;
          break;
        case "deels":
          score += 0;
          break;
        case "onvoorspelbaar":
          score -= 10;
          break;
        case "weet-niet":
          score -= 15;
          break;
      }

      // Cap the score between 20-95
      score = Math.min(Math.max(score, 20), 95);

      setCalculatedScore(score);
      setShowResult(true);

      // Save scan data to localStorage for potential future premium pages
      const scanData = {
        scanType: "cashflow",
        timestamp: Date.now(),
        data: {
          ...formData,
          calculatedScore: score,
        },
      };
      localStorage.setItem(
        "simium_scan_data",
        JSON.stringify(scanData),
      );
    }
  };

  const isFormValid =
    formData.monthlyRevenue &&
    formData.paymentTerms &&
    formData.seasonality &&
    formData.accountingSoftware &&
    formData.majorExpenses;

  const getScoreColor = (score: number) => {
    if (score >= 80)
      return "text-green-600 dark:text-green-400";
    if (score >= 60) return "text-blue-600 dark:text-blue-400";
    if (score >= 40)
      return "text-orange-600 dark:text-orange-400";
    return "text-red-600 dark:text-red-400";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Uitstekende cashflow-controle";
    if (score >= 60) return "Goede cashflow-basis";
    if (score >= 40) return "Gemiddelde cashflow-controle";
    return "Cashflow risico's gedetecteerd";
  };

  return (
    <>
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
              href="#/prijsstrategie-check" 
              className="inline-flex items-center text-muted-foreground hover:text-purple-600 transition-colors duration-200 group"
            >
              Volgende: Prijsstrategie-check
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-3 group-hover:translate-x-1 transition-transform duration-200">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
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
                <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Cashflow-analyse
                </div>
                
                <h1 className="text-5xl lg:text-6xl leading-tight">
                  Beheers je 
                  <span className="block text-blue-600">cashflow</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                  Krijg direct inzicht in je cashflow-risico's en verbeter 
                  je financiële grip met slimme analyses.
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
                  Concrete aanbevelingen
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => document.querySelector('[data-calculator]')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  Start gratis analyse
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
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-3xl p-8 shadow-2xl">
                <ImageWithFallback 
                  src={cloudImage}
                  alt="Cashflow analysis dashboard"
                  className="rounded-2xl w-full shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-1">85%</div>
                  <div className="text-muted-foreground text-sm">gem. score verbetering</div>
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
            <h2 className="mb-6">Analyseer je cashflow-situatie</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Krijg binnen 3 minuten inzicht in je cashflow-risico's
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-3xl shadow-lg overflow-hidden">
            {!showResult ? (
              <div className="p-12">
                <div className="space-y-12">
                  {/* Question 1 - Monthly Revenue */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Wat is je gemiddelde maandelijkse omzet?</h3>
                      <p className="text-muted-foreground">Dit helpt ons je cashflow-situatie te begrijpen</p>
                    </div>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground text-lg">€</span>
                      <Input 
                        type="number" 
                        placeholder="bijv. 25000"
                        value={formData.monthlyRevenue}
                        onChange={(e) => handleInputChange("monthlyRevenue", e.target.value)}
                        className="h-14 pl-12 pr-6 rounded-2xl border-border bg-background text-foreground text-lg"
                      />
                    </div>
                  </div>

                  {/* Question 2 - Payment Terms */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Welke betaaltermijnen hanteer je?</h3>
                      <p className="text-muted-foreground">Hoe lang doen klanten over het betalen van facturen?</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { value: "direct", label: "Direct bij levering/dienstverlening" },
                        { value: "30-dagen", label: "30 dagen" },
                        { value: "60-dagen", label: "60 dagen" },
                        { value: "90-dagen", label: "90 dagen of langer" }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleInputChange("paymentTerms", option.value)}
                          className={`text-left p-6 rounded-2xl border transition-all duration-200 hover:bg-accent/50 ${
                            formData.paymentTerms === option.value
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                              : 'border-border bg-background'
                          }`}
                        >
                          <span className="font-medium">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Question 3 - Seasonality */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Hoe stabiel is je omzet door het jaar?</h3>
                      <p className="text-muted-foreground">Hebben seizoenen invloed op je inkomsten?</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { value: "stabiel", label: "Stabiel het hele jaar door" },
                        { value: "licht-seizoen", label: "Lichte seizoensinvloeden" },
                        { value: "sterk-seizoen", label: "Sterke seizoensinvloeden" },
                        { value: "onvoorspelbaar", label: "Heel onvoorspelbaar" }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleInputChange("seasonality", option.value)}
                          className={`text-left p-6 rounded-2xl border transition-all duration-200 hover:bg-accent/50 ${
                            formData.seasonality === option.value
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                              : 'border-border bg-background'
                          }`}
                        >
                          <span className="font-medium">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Conditional: Seasonality Details */}
                  {(formData.seasonality === "sterk-seizoen" || formData.seasonality === "onvoorspelbaar") && (
                    <div className="space-y-4 animate-in slide-in-from-top-4 duration-300">
                      <div className="space-y-2">
                        <h3 className="text-xl font-medium">In welke maanden/periodes zijn de grootste verschillen?</h3>
                        <p className="text-muted-foreground">Vertel ons meer over de patronen die je ziet</p>
                      </div>
                      <Textarea
                        placeholder="bijv. Q4 altijd veel drukker door feestdagen, zomer juist rustiger..."
                        value={formData.seasonalityDetails}
                        onChange={(e) => handleInputChange("seasonalityDetails", e.target.value)}
                        className="min-h-[120px] p-6 rounded-2xl border-border bg-background text-foreground resize-none"
                      />
                    </div>
                  )}

                  {/* Question 4 - Accounting Software */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Welke boekhoudsoftware gebruik je?</h3>
                      <p className="text-muted-foreground">Dit beïnvloedt je inzicht in cashflow</p>
                    </div>
                    <Select value={formData.accountingSoftware} onValueChange={(value) => handleInputChange("accountingSoftware", value)}>
                      <SelectTrigger className="h-14 px-6 rounded-2xl border-border bg-background text-foreground">
                        <SelectValue placeholder="Selecteer je boekhoudsoftware" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professioneel">Professionele software (Exact, AFAS, SnelStart)</SelectItem>
                        <SelectItem value="basis">Basis software (MoneyBird, InvoiceXpress)</SelectItem>
                        <SelectItem value="excel">Excel of Google Sheets</SelectItem>
                        <SelectItem value="geen">Geen systematische bijhouding</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Conditional: Accounting Method */}
                  {formData.accountingSoftware === "geen" && (
                    <div className="space-y-4 animate-in slide-in-from-top-4 duration-300">
                      <div className="space-y-2">
                        <h3 className="text-xl font-medium">Hoe houd je dan je financiën bij?</h3>
                        <p className="text-muted-foreground">We zijn benieuwd naar je huidige werkwijze</p>
                      </div>
                      <Textarea
                        placeholder="bijv. Notities in agenda, bonnetjes in schoenendoos, alles onthouden..."
                        value={formData.accountingMethod}
                        onChange={(e) => handleInputChange("accountingMethod", e.target.value)}
                        className="min-h-[120px] p-6 rounded-2xl border-border bg-background text-foreground resize-none"
                      />
                    </div>
                  )}

                  {/* Question 5 - Expense Predictability */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Hoe voorspelbaar zijn je maandelijkse uitgaven?</h3>
                      <p className="text-muted-foreground">Denk aan huur, salarissen, inkoop, marketing etc.</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { value: "voorspelbaar", label: "Heel voorspelbaar" },
                        { value: "deels", label: "Deels voorspelbaar" },
                        { value: "onvoorspelbaar", label: "Onvoorspelbaar" },
                        { value: "weet-niet", label: "Weet ik niet" }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleInputChange("majorExpenses", option.value)}
                          className={`p-6 rounded-2xl border transition-all duration-200 hover:bg-accent/50 text-center font-medium ${
                            formData.majorExpenses === option.value
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                              : 'border-border bg-background'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Conditional: Unpredictable Expenses */}
                  {formData.majorExpenses === "onvoorspelbaar" && (
                    <div className="space-y-4 animate-in slide-in-from-top-4 duration-300">
                      <div className="space-y-2">
                        <h3 className="text-xl font-medium">Wat zijn meestal de grootste onvoorziene uitgaven?</h3>
                        <p className="text-muted-foreground">Dit helpt ons je risicoprofiel beter te begrijpen</p>
                      </div>
                      <Textarea
                        placeholder="bijv. Plotselinge reparaties, onverwachte inkoop, noodgevallen..."
                        value={formData.unpredictableExpenses}
                        onChange={(e) => handleInputChange("unpredictableExpenses", e.target.value)}
                        className="min-h-[120px] p-6 rounded-2xl border-border bg-background text-foreground resize-none"
                      />
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-8">
                    <Button 
                      onClick={calculateCashflowScore}
                      disabled={!isFormValid}
                      className={`w-full py-6 rounded-2xl font-medium text-lg transition-all duration-200 ${
                        isFormValid 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white hover:-translate-y-1 hover:shadow-lg' 
                          : 'bg-secondary text-muted-foreground cursor-not-allowed'
                      }`}
                    >
                      Start analyse
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
                    <div className="text-6xl font-bold text-blue-600">
                      {calculatedScore}/100
                    </div>
                    <div className="text-xl text-muted-foreground">
                      cashflow-score
                    </div>
                    <div className={`text-2xl font-medium ${getScoreColor(calculatedScore)}`}>
                      {getScoreLabel(calculatedScore)}
                    </div>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Gebaseerd op vergelijkbare bedrijven met jouw profiel
                    </p>
                  </div>
                  
                  {/* Analysis Points */}
                  <div className="bg-secondary/50 rounded-2xl p-8 max-w-md mx-auto">
                    <div className="space-y-4">
                      {[
                        'Betaaltermijn optimalisatie',
                        'Voorspelbaarheid analyse', 
                        'Liquiditeitsadvies'
                      ].map((item) => (
                        <div key={item} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Premium CTA */}
                  <div className="border border-blue-200 dark:border-blue-800 rounded-2xl p-8 bg-blue-50/50 dark:bg-blue-900/10">
                    <h4 className="text-2xl font-medium mb-6">Klaar voor je volledige analyse?</h4>
                    
                    <Button 
                      onClick={() => window.location.href = '#/cashflow-verdieping'}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-medium mb-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
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
                    <span>Nieuwe analyse maken</span>
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
            <h2 className="mb-6">Zo werkt onze cashflow-analyse</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Inzicht in je financiële grip in 3 stappen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                number: '1',
                title: 'Situatie in kaart',
                description: 'We analyseren je inkomsten, uitgaven en betalingspatronen voor een volledig beeld.',
                color: 'blue'
              },
              {
                number: '2', 
                title: 'Risico\'s identificeren',
                description: 'Onze AI detecteert cashflow-risico\'s en knelpunten in je huidige situatie.',
                color: 'blue'
              },
              {
                number: '3',
                title: 'Verbeterplan',
                description: 'Krijg concrete aanbevelingen om je cashflow te verbeteren en risico\'s te verkleinen.',
                color: 'blue'
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-3xl flex items-center justify-center mx-auto mb-8 border-2 border-blue-200 dark:border-blue-700 group-hover:scale-105 transition-transform duration-200">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{step.number}</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-blue-600 dark:text-blue-400">{step.title}</h3>
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
            <h2 className="mb-6">Wat je krijgt in je cashflow-analyse</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Een complete doorlichting van je financiële situatie met praktische verbeteringen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Cashflow voorspelling',
                description: 'Voorspel je cashflow voor de komende 12 maanden met nauwkeurige analyses'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Betalingstermijn optimalisatie',
                description: 'Advies over hoe je betalingstermijnen kunt verbeteren voor betere cashflow'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Risico-analyse',
                description: 'Identificeer en mitigeer cashflow-risico\'s voordat ze problemen worden'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Liquiditeitsadvies',
                description: 'Strategieën om je liquiditeit te verbeteren en financiële buffers op te bouwen'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Seizoenscorrectie',
                description: 'Plan voor seizoensinvloeden en bereid je voor op piekperiodes'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14.828 14.828a4 4 0 0 1-5.656 0M9 10h1M15 10h1M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Boekhouding optimalisatie',
                description: 'Advies over tools en processen voor beter financieel inzicht'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200">
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
      <section className="py-32 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6">Klaar voor financiële grip?</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
            Analyseer binnen 3 minuten je cashflow-situatie en krijg direct 
            concrete verbeterpunten. Gratis en zonder verplichtingen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => document.querySelector('[data-calculator]')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              Start gratis cashflow-analyse
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
    </>
  );
}
'use client'

import React from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

export function ProductsPage() {
  return (
    <>
      {/* Hero - Apple's Clean Introduction */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Kies je scan
            </div>
            
            <h1 className="text-6xl leading-tight">
              Waar wil je
              <span className="block text-blue-600">beginnen?</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Elke scan duurt 5-10 minuten en geeft je direct inzicht in optimalisatiekansen
            </p>
          </div>
        </div>
      </section>

      {/* Scan Selection - Apple's Clean Grid */}
      <section className="pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cloudkostenscan',
                subtitle: 'Infrastructuur optimalisatie',
                description: 'Ontdek verborgen verspilling in je cloudinfrastructuur en bespaar tot 40% op je maandelijkse kosten.',
                features: [
                  'Idle resources detectie',
                  'Right-sizing aanbevelingen', 
                  'Reserved instances advies',
                  'Automatische scaling tips'
                ],
                metric: '€2.400',
                metricLabel: 'gem. maandbesparing',
                color: 'green',
                href: '#/cloudkostenscan',
                popular: false
              },
              {
                title: 'Cashflow-analyse',
                subtitle: 'Financiële planning',
                description: 'Krijg grip op je cashflow met voorspellingen en optimaliseer je financiële planning voor stabiele groei.',
                features: [
                  'Cashflow voorspelling',
                  'Betaaltermijn optimalisatie',
                  'Seizoenspatroon analyse',
                  'Liquiditeitsadvies'
                ],
                metric: '85%',
                metricLabel: 'score verbetering',
                color: 'blue',
                href: '#/cashflow-analyse',
                popular: true
              },
              {
                title: 'Prijsstrategie-check',
                subtitle: 'Marge optimalisatie',
                description: 'Ontdek of je geld laat liggen met je prijsstrategie en verhoog je marge zonder klanten te verliezen.',
                features: [
                  'Prijsmethode optimalisatie',
                  'Concurrentieanalyse',
                  'Segmentatie kansen',
                  'Kortingsstrategie advies'
                ],
                metric: '23%',
                metricLabel: 'marge verbetering',
                color: 'purple',
                href: '#/prijsstrategie-check',
                popular: false
              }
            ].map((scan, index) => (
              <div key={index} className="relative group">
                {scan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-blue-600 text-white px-3 py-1 text-sm font-medium">
                      Meest gekozen
                    </Badge>
                  </div>
                )}
                
                <div className={`bg-card border border-border rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full ${scan.popular ? 'ring-2 ring-blue-500/20' : ''}`}
                     onClick={() => window.location.href = scan.href}>
                  <div className="flex flex-col h-full space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                      <div className={`w-16 h-16 bg-${scan.color}-100 dark:bg-${scan.color}-950/50 rounded-2xl flex items-center justify-center`}>
                        <div className={`w-8 h-8 bg-${scan.color}-600 rounded-lg`}></div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold">{scan.title}</h3>
                        <p className="text-muted-foreground">{scan.subtitle}</p>
                      </div>
                    </div>
                    
                    {/* Content Area - Flexible */}
                    <div className="flex-1 space-y-8">
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {scan.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-3">
                        {scan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 bg-${scan.color}-500 rounded-full flex-shrink-0`}></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Metric */}
                      <div className={`bg-${scan.color}-50 dark:bg-${scan.color}-950/30 rounded-2xl p-6 text-center`}>
                        <div className={`text-3xl font-bold text-${scan.color}-600 mb-1`}>
                          {scan.metric}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {scan.metricLabel}
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA - Always at bottom */}
                    <Button 
                      className={`w-full py-4 bg-${scan.color}-600 hover:bg-${scan.color}-700 text-white rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 mt-auto`}
                    >
                      Start {scan.title.toLowerCase()}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props - Apple's Confidence Building */}
      <section className="py-32 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-16">
            <h2 className="text-4xl">Waarom Simium</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: '⚡',
                  title: 'Snel resultaat',
                  description: 'Binnen 24 uur heb je concrete inzichten en aanbevelingen'
                },
                {
                  icon: '🎯',
                  title: 'Direct bruikbaar',
                  description: 'Geen vage adviezen, maar stap-voor-stap implementatieplan'
                },
                {
                  icon: '🔒',
                  title: 'Volledig veilig',
                  description: 'Je gegevens blijven privé en worden na analyse verwijderd'
                }
              ].map((prop, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-4xl">{prop.icon}</div>
                  <h3 className="text-xl font-semibold">{prop.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Apple's Progressive Disclosure */}
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="mb-6">Veelgestelde vragen</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Alles wat je moet weten voordat je start
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: 'Hoe lang duurt een scan?',
                  answer: 'Het invullen duurt 5-10 minuten. Je krijgt binnen 24 uur je resultaten.'
                },
                {
                  question: 'Zijn mijn gegevens veilig?',
                  answer: 'Ja, we hanteren de hoogste beveiligingsstandaarden. Je data wordt na de analyse automatisch verwijderd.'
                },
                {
                  question: 'Wat krijg ik precies?',
                  answer: 'Een gedetailleerd rapport met concrete besparingen, prioriteiten en een stap-voor-stap implementatieplan.'
                },
                {
                  question: 'Kan ik meerdere scans doen?',
                  answer: 'Zeker! Veel klanten combineren scans voor een complete optimalisatie van hun bedrijf.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-8">
                  <h4 className="text-lg font-semibold mb-3">{faq.question}</h4>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Apple's Clean Close */}
      <section className="py-32 bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl leading-tight text-white">
              Tijd om te
              <span className="block">beginnen</span>
            </h2>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Kies je eerste scan en ontdek binnen 24 uur waar je kunt optimaliseren
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => document.querySelector('.grid.grid-cols-1.lg\\:grid-cols-3')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Kies je scan
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1"
                onClick={() => window.location.href = '#/contact'}
              >
                Stel een vraag
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
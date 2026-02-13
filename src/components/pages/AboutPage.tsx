'use client'

import React from 'react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import image_ca1e3b46b40d11c93c9df4ed8072d161b57d1963 from '@/assets/ca1e3b46b40d11c93c9df4ed8072d161b57d1963.png'

export function AboutPage() {
  return (
    <>
      {/* Hero - Apple's Brand Story Introduction */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Over Simium
            </div>
            
            <h1 className="text-6xl leading-tight">
              AI die Nederlandse
              <span className="block text-blue-600">bedrijven laat groeien</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Wij geloven dat elke ondernemer toegang moet hebben tot de kracht van AI. 
              Daarom maken we enterprise-grade business intelligence toegankelijk voor het Nederlandse MKB.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement - Apple's Values-First Approach */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl">Onze missie</h2>
                <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                  <p>
                    Het Nederlandse MKB vormt de ruggengraat van onze economie. 
                    Toch hebben deze bedrijven vaak niet de resources voor dure consultants 
                    of complexe enterprise-software.
                  </p>
                  <p>
                    Wij democratiseren business intelligence. Door de kracht van AI 
                    toegankelijk te maken, helpen we ondernemers betere beslissingen te nemen 
                    en hun bedrijf te laten groeien.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">15.000+</div>
                  <p className="text-muted-foreground">Geholpen bedrijven</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">€4.2M</div>
                  <p className="text-muted-foreground">Totaal bespaard</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-3xl p-12 shadow-xl">
                <ImageWithFallback 
                  src={image_ca1e3b46b40d11c93c9df4ed8072d161b57d1963}
                  alt="AI-gedreven business intelligence voor Nederlandse ondernemers"
                  className="rounded-2xl w-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work - Apple's Process Excellence */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl mb-6">Hoe we het anders doen</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Traditionele consultancy is duur en langzaam. Wij combineren menselijke expertise met AI-snelheid.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                icon: '🎯',
                title: 'Probleem-specifiek',
                description: 'Geen generieke adviezen. Onze AI analyseert jouw specifieke situatie en industrie.',
                details: [
                  'Sector-specifieke algoritmes',
                  'Bedrijfsgrootte optimalisaties',
                  'Regionale marktkennis'
                ]
              },
              {
                icon: '⚡',
                title: 'Onmiddellijk inzicht',
                description: 'Wat consultants weken kost, leveren wij in 24 uur. Zonder kwaliteitsverlies.',
                details: [
                  'Real-time data processing',
                  '24/7 beschikbaarheid',
                  'Directe implementatie'
                ]
              },
              {
                icon: '💰',
                title: 'Transparante prijzen',
                description: 'Vaste prijzen, geen verborgen kosten. Je weet precies waar je aan toe bent.',
                details: [
                  'Eenmalige scankosten',
                  'Geen abonnementen',
                  'ROI binnen 30 dagen'
                ]
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 rounded-3xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1 h-full">
                <div className="flex flex-col h-full space-y-6">
                  <div className="text-5xl text-center">{feature.icon}</div>
                  
                  <div className="flex-1 space-y-4 text-center">
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                  
                  <div className="space-y-3 mt-auto">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack - Apple's Technical Excellence */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300">
                  Enterprise Technology
                </Badge>
                
                <h2 className="text-4xl">
                  Gebouwd voor
                  <span className="block text-purple-600">betrouwbaarheid</span>
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Onze AI-platform draait op enterprise-grade infrastructuur met 
                  de hoogste beveiligingsstandaarden. Bank-niveau beveiliging 
                  voor je bedrijfsgegevens.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  'GDPR-compliant dataverwerking in Nederlandse datacenters',
                  'SOC 2 Type II gecertificeerde beveiligingsprocessen',
                  '99.9% uptime SLA met enterprise monitoring',
                  'Automatische data-verwijdering na analyse'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-950/50 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-950/50 dark:to-indigo-950/50 rounded-3xl p-12 shadow-xl">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { metric: '99.9%', label: 'Uptime' },
                  { metric: '<2s', label: 'Response' },
                  { metric: '256-bit', label: 'Encryption' },
                  { metric: 'SOC 2', label: 'Certified' }
                ].map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="text-2xl font-bold text-purple-600">{stat.metric}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Apple's Philosophy */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl mb-6">Wat ons drijft</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              De waarden die ons werk en onze relaties met klanten vormgeven
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Democratisatie van AI',
                description: 'Geavanceerde technologie moet toegankelijk zijn voor iedereen, niet alleen voor grote bedrijven met diepe zakken.',
                color: 'blue'
              },
              {
                title: 'Nederlandse roots',
                description: 'We begrijpen de Nederlandse markt, regelgeving en bedrijfscultuur. Onze AI is getraind op lokale data.',
                color: 'green'
              },
              {
                title: 'Transparantie altijd',
                description: 'Geen black-box algoritmes. We leggen uit hoe onze AI tot conclusies komt en waarom.',
                color: 'purple'
              },
              {
                title: 'Privacy by design',
                description: 'Je data blijft van jou. We hanteren privacy-by-design principes in alles wat we bouwen.',
                color: 'orange'
              }
            ].map((value, index) => (
              <Card key={index} className="p-8 rounded-3xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1 h-full">
                <div className="flex flex-col h-full space-y-4">
                  <h3 className={`text-2xl font-semibold text-${value.color}-600 dark:text-${value.color}-400`}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg flex-1">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers - Apple's Data Story */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Onze impact in cijfers</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Concrete resultaten voor Nederlandse ondernemers
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '15.000+',
                label: 'Analyses uitgevoerd',
                sublabel: 'sinds 2023',
                color: 'blue'
              },
              {
                number: '€4.2M',
                label: 'Totaal bespaard',
                sublabel: 'voor klanten',
                color: 'green'
              },
              {
                number: '€4.125',
                label: 'Gem. besparing',
                sublabel: 'per klant per maand',
                color: 'purple'
              },
              {
                number: '97%',
                label: 'Tevredenheid',
                sublabel: 'beveelt ons aan',
                color: 'orange'
              }
            ].map((stat, index) => (
              <div key={index} className={`text-center bg-${stat.color}-50 dark:bg-${stat.color}-950/30 border border-${stat.color}-200 dark:border-${stat.color}-800 rounded-3xl p-8`}>
                <div className={`text-4xl font-bold text-${stat.color}-600 mb-3`}>{stat.number}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy - Apple's Human Touch */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl">Menselijk + AI = Onbeperkte mogelijkheden</h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Onze AI levert de snelheid en schaal. Ons team zorgt voor de menselijke touch: 
                begrip, empathie en praktische begeleiding.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white">
              <div className="space-y-6">
                <div className="text-3xl font-bold">Elke scan wordt door mensen gecontroleerd</div>
                <p className="text-xl text-blue-100">
                  Voordat jij je rapport krijgt, bekijkt ons expertteam elke aanbeveling 
                  om ervoor te zorgen dat het praktisch en realistisch is voor jouw situatie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Apple's Invitation to Act */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl leading-tight">
              Klaar om te
              <span className="block text-blue-600">groeien?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sluit je aan bij 15.000+ Nederlandse ondernemers die hun bedrijf al optimaliseerden met Simium
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => window.location.href = '#/producten'}
              >
                Start je eerste scan
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1"
                onClick={() => window.location.href = '#/contact'}
              >
                Praat met ons team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
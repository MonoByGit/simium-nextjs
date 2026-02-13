'use client'

import React from 'react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { ImageWithFallback } from '../figma/ImageWithFallback'

// Import dashboard images
import dashboardImage from '@/assets/b6204b50ff8a0052ace3e0e67fcfec4b9011ecbc.png'
import analyticsImage from '@/assets/ca1e3b46b40d11c93c9df4ed8072d161b57d1963.png'

export function VoorbeeldrapportPage() {
  return (
    <>
      {/* Hero - Apple's Case Study Introduction */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Case Study
            </div>
            
            <h1 className="text-6xl leading-tight">
              Van €15.000 naar
              <span className="block text-green-600">€11.600 cloudkosten</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Bekijk hoe een Nederlands IT-bureau binnen 3 weken €3.400 per maand 
              bespaarde op cloudkosten met Simium's AI-analyse.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge className="bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300">
                Échte klant
              </Badge>
              <Badge className="bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300">
                Geanonimiseerd
              </Badge>
              <Badge className="bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300">
                Geverifieerde resultaten
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Case Overview - Apple's Information Cards */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Bedrijfstype', value: 'IT-consultancy', color: 'blue' },
              { label: 'Teamgrootte', value: '25 medewerkers', color: 'green' },
              { label: 'Maandelijkse besparing', value: '€3.400', color: 'purple' },
              { label: 'ROI periode', value: '3 weken', color: 'orange' }
            ].map((item, index) => (
              <Card key={index} className={`p-6 rounded-2xl text-center bg-${item.color}-50 dark:bg-${item.color}-950/30 border border-${item.color}-200 dark:border-${item.color}-800`}>
                <div className={`text-2xl font-bold text-${item.color}-600 mb-2`}>{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge - Apple's Problem Statement */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl">De uitdaging</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Een groeiend IT-bureau zag hun AWS-kosten onverklaarbaar stijgen 
                  van €8.000 naar €15.000 per maand zonder proportionele groei in omzet.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    problem: 'Onduidelijke kostenstijging',
                    impact: 'Maandelijkse AWS-kosten stegen 87% in 6 maanden'
                  },
                  {
                    problem: 'Geen inzicht in usage',
                    impact: 'Onduidelijk welke services de meeste kosten veroorzaakten'
                  },
                  {
                    problem: 'Bedreigde marges',
                    impact: 'Projectwinstgevendheid kwam onder druk door onvoorspelbare kosten'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-card border border-border rounded-2xl p-6">
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">{item.problem}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.impact}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-950/50 dark:to-orange-950/50 rounded-3xl p-12 text-center shadow-xl">
                <div className="space-y-6">
                  <div className="text-6xl font-bold text-red-600">+87%</div>
                  <div className="text-xl text-muted-foreground">kostenstijging in 6 maanden</div>
                  <div className="bg-red-100 dark:bg-red-950/50 rounded-2xl p-6">
                    <div className="text-3xl font-bold text-red-600 mb-2">€15.000</div>
                    <div className="text-muted-foreground">per maand cloudkosten</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Analysis - Apple's Solution Deep Dive */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Wat onze AI ontdekte</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Binnen 24 uur hadden we alle verspilling geïdentificeerd en geprioriteerd
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Problem Analysis */}
            <Card className="p-8 rounded-3xl">
              <div className="space-y-8">
                <div>
                  <ImageWithFallback 
                    src={dashboardImage}
                    alt="Simium kostenverspilling analyse dashboard"
                    className="rounded-2xl w-full shadow-lg"
                  />
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-red-600 dark:text-red-400">
                    Verspilling gedetecteerd
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Onze AI vond €6.190 per maand aan onnodige kosten door 
                    idle resources, zombie storage en verkeerd gedimensioneerde instances.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { item: 'Idle EC2 instances (40% van capaciteit)', cost: '€4.200/maand' },
                      { item: 'Zombie EBS storage (3TB ongebruikt)', cost: '€890/maand' },
                      { item: 'Over-provisioned RDS databases', cost: '€1.100/maand' }
                    ].map((finding, index) => (
                      <div key={index} className="flex justify-between items-start p-4 bg-red-50 dark:bg-red-950/30 rounded-xl">
                        <span className="text-muted-foreground flex-1">{finding.item}</span>
                        <span className="font-semibold text-red-600 ml-4">{finding.cost}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Solution Strategy */}
            <Card className="p-8 rounded-3xl">
              <div className="space-y-8">
                <div>
                  <ImageWithFallback 
                    src={analyticsImage}
                    alt="Simium optimalisatie aanbevelingen dashboard"
                    className="rounded-2xl w-full shadow-lg"
                  />
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400">
                    Optimalisatie strategie
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Een gefaseerde aanpak om kosten te verlagen zonder performance 
                    te beïnvloeden, gebaseerd op usage patterns en groeivoorspellingen.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { solution: 'Instance right-sizing op basis van metrics', saving: '€2.100/maand' },
                      { solution: 'Reserved Instances voor stabiele workloads', saving: '€1.850/maand' },
                      { solution: 'Spot instances voor dev/test omgevingen', saving: '€650/maand' }
                    ].map((solution, index) => (
                      <div key={index} className="flex justify-between items-start p-4 bg-green-50 dark:bg-green-950/30 rounded-xl">
                        <span className="text-muted-foreground flex-1">{solution.solution}</span>
                        <span className="font-semibold text-green-600 ml-4">{solution.saving}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap - Apple's Step-by-Step Guide */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Implementatie roadmap</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Van analyse tot resultaat in 3 weken
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                week: '1',
                title: 'Quick wins',
                tasks: [
                  'Zombie storage opruimen',
                  'Idle instances stoppen',
                  'Dev environments schedulen'
                ],
                impact: '€1.800/maand besparing',
                color: 'green'
              },
              {
                week: '2',
                title: 'Right-sizing',
                tasks: [
                  'Instance types optimaliseren',
                  'Database performance tuning',
                  'Load balancer config'
                ],
                impact: '€1.100/maand besparing',
                color: 'blue'
              },
              {
                week: '3',
                title: 'Strategic purchases',
                tasks: [
                  'Reserved Instances planning',
                  'Savings Plans implementeren',
                  'Monitoring dashboard'
                ],
                impact: '€500/maand besparing',
                color: 'purple'
              }
            ].map((phase, index) => (
              <Card key={index} className="p-8 rounded-3xl h-full">
                <div className="flex flex-col h-full space-y-6">
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-${phase.color}-100 dark:bg-${phase.color}-950/50 rounded-3xl flex items-center justify-center mx-auto mb-4`}>
                      <span className={`text-2xl font-bold text-${phase.color}-600`}>{phase.week}</span>
                    </div>
                    <h3 className="text-xl font-semibold">Week {phase.week}: {phase.title}</h3>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    {phase.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 bg-${phase.color}-500 rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-muted-foreground">{task}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={`text-center bg-${phase.color}-50 dark:bg-${phase.color}-950/30 p-4 rounded-2xl mt-auto`}>
                    <div className={`font-semibold text-${phase.color}-600`}>{phase.impact}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results - Apple's Success Metrics */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">De resultaten</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Concrete besparingen en verbeterde performance binnen 3 weken
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 rounded-3xl text-center bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
              <div className="text-5xl font-bold text-green-600 mb-4">€3.400</div>
              <div className="text-xl font-semibold mb-2">Maandelijkse besparing</div>
              <div className="text-muted-foreground">€40.800 per jaar</div>
            </Card>
            
            <Card className="p-8 rounded-3xl text-center bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
              <div className="text-5xl font-bold text-blue-600 mb-4">-23%</div>
              <div className="text-xl font-semibold mb-2">Kostenverlaging</div>
              <div className="text-muted-foreground">Van €15.000 naar €11.600</div>
            </Card>
            
            <Card className="p-8 rounded-3xl text-center bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800">
              <div className="text-5xl font-bold text-purple-600 mb-4">3 weken</div>
              <div className="text-xl font-semibold mb-2">Implementatietijd</div>
              <div className="text-muted-foreground">Tot volledige realisatie</div>
            </Card>
          </div>

          {/* Customer Quote */}
          <Card className="p-12 rounded-3xl">
            <blockquote className="text-center">
              <p className="text-3xl text-muted-foreground mb-8 leading-relaxed">
                "Simium vond binnen 24 uur verspilling die wij in maanden niet zagen. 
                Hun AI-analyse was zo gedetailleerd dat we alle aanbevelingen binnen 
                een week konden implementeren. €3.400 per maand besparing spreekt voor zich."
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950/50 rounded-3xl flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-lg">MR</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">Mark R.</div>
                  <div className="text-muted-foreground">CTO, IT Solutions B.V.</div>
                </div>
              </div>
            </blockquote>
          </Card>
        </div>
      </section>

      {/* What You Get - Apple's Feature Showcase */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Dit krijg je in elk Simium rapport</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dezelfde diepgang en detail voor elke scan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Probleem identificatie',
                description: 'AI-gedreven analyse van je huidige situatie met specifieke knelpunten',
                features: ['Automatische scanning', 'Pattern recognition', 'Benchmark vergelijking']
              },
              {
                title: 'Concrete oplossingen',
                description: 'Stap-voor-stap implementatieplan met prioriteiten en tijdslijnen',
                features: ['Gefaseerde aanpak', 'Risk assessment', 'Performance impact']
              },
              {
                title: 'Meetbare resultaten',
                description: 'Exacte berekeningen van besparingen en ROI per aanbeveling',
                features: ['Cost-benefit analyse', 'ROI projecties', 'Monitoring KPIs']
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 rounded-3xl h-full">
                <div className="flex flex-col h-full space-y-6">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{feature.description}</p>
                  <div className="space-y-3 mt-auto">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Apple's Call to Action */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl leading-tight">
              Klaar voor jouw
              <span className="block text-green-600">eigen analyse?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Start vandaag nog je scan en ontdek binnen 24 uur waar jouw bedrijf kan optimaliseren
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => window.location.href = '#/producten'}
              >
                Start je scan
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1"
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
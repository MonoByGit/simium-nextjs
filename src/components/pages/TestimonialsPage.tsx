'use client'

import React, { useState } from 'react'
import { Layout } from '../Layout'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { ImageWithFallback } from '../figma/ImageWithFallback'

// Import testimonial images
import axelImage from '@/assets/f015c8e32f92e0f7ba63116caed58f72718bfee7.png'
import christinaImage from '@/assets/95647e819259db3fa78fb8ec348dca0617ee4409.png'

export function TestimonialsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const testimonials = [
    {
      id: 'axel',
      name: 'Axel F.',
      role: 'CTO',
      company: 'TechStart B.V.',
      location: 'Amsterdam',
      image: axelImage,
      quote: "Simium ontdekte €33.600 aan jaarlijkse cloudverspilling die we zelf nooit gevonden hadden.",
      story: "Ons startup groeide van 5 naar 25 medewerkers in 8 maanden. Onze AWS-kosten explodeerden van €3.000 naar €12.000 per maand. We hadden geen idee waarom. Simium's AI-scan toonde binnen 24 uur dat we €2.800 per maand verspilden aan 'zombie' resources en verkeerd gedimensioneerde instances.",
      results: {
        savings: "€2.800",
        period: "per maand",
        roi: "Terugverdiend in 3 weken",
        implementation: "1 week"
      },
      scanType: "cloudkosten",
      tags: ["Startup", "Tech", "AWS"],
      rating: 5,
      date: "December 2024"
    },
    {
      id: 'christina',
      name: 'Christina W.',
      role: 'Oprichter',
      company: 'Marketing Bureau Christina',
      location: 'Utrecht',
      image: christinaImage,
      quote: "Door Simium's prijsadvies kon ik mijn tarieven met 25% verhogen zonder één klant te verliezen.",
      story: "Als freelance marketeer worstelde ik met mijn prijsstelling. Ik vroeg te weinig, maar durfde niet te verhogen uit angst klanten te verliezen. Simium's prijsstrategie-check vergeleek mijn tarieven met de markt en adviseerde een segmentatiestrategie. Nu verdien ik €1.800 meer per maand.",
      results: {
        savings: "€1.800",
        period: "extra per maand",
        roi: "€21.600 meer per jaar",
        implementation: "2 weken"
      },
      scanType: "prijsstrategie",
      tags: ["Freelancer", "Marketing", "ZZP"],
      rating: 5,
      date: "November 2024"
    },
    {
      id: 'thomas',
      name: 'Thomas van D.',
      role: 'Eigenaar',
      company: 'Webshop Vintage Gear',
      location: 'Rotterdam',
      quote: "Cashflow was altijd gissen. Nu voorspel ik mijn inkomsten 3 maanden vooruit met 95% nauwkeurigheid.",
      story: "Mijn webshop had sterke seizoenspieken. In Q4 verdiende ik goed, maar Q1 was altijd krap. Ik hield te veel cash aan om veilig te voelen. Simium's cashflow-analyse toonde patronen en optimaliseerde mijn betalingstermijnen. Nu heb ik 40% minder buffer nodig.",
      results: {
        savings: "€4.200",
        period: "minder buffer",
        roi: "Meer investeerruimte",
        implementation: "3 weken"
      },
      scanType: "cashflow",
      tags: ["E-commerce", "Retail", "MKB"],
      rating: 5,
      date: "Oktober 2024"
    },
    {
      id: 'marloes',
      name: 'Marloes K.',
      role: 'Managing Partner',
      company: 'Consultancy Partners',
      location: 'Den Haag',
      quote: "We gebruikten alle drie scans. Resultaat: €90.000 besparing per jaar en 30% betere marges.",
      story: "Ons 15-persoons consultancy bureau wilde doorgroeien maar zag kosten en marges wegzakken. We implementeerden alle drie Simium's scans. Cloudkosten daalden met €2.100/maand, cashflow werd voorspelbaar, en we verhoogden onze uurtarieven met succes. Totale impact: €7.500 per maand.",
      results: {
        savings: "€7.500",
        period: "per maand",
        roi: "€90.000 per jaar",
        implementation: "6 weken"
      },
      scanType: "alle",
      tags: ["Consultancy", "B2B", "Groei"],
      rating: 5,
      date: "September 2024"
    }
  ]

  const filteredTestimonials = selectedFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.scanType === selectedFilter)

  const scanFilters = [
    { key: 'all', label: 'Alle verhalen', count: testimonials.length },
    { key: 'cloudkosten', label: 'Cloudkosten', count: testimonials.filter(t => t.scanType === 'cloudkosten').length },
    { key: 'cashflow', label: 'Cashflow', count: testimonials.filter(t => t.scanType === 'cashflow').length },
    { key: 'prijsstrategie', label: 'Prijsstrategie', count: testimonials.filter(t => t.scanType === 'prijsstrategie').length },
    { key: 'alle', label: 'Combinatie', count: testimonials.filter(t => t.scanType === 'alle').length }
  ]

  return (
    <Layout>
      {/* Hero - Apple's Editorial Style */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Succesverhalen
            </div>
            
            <h1 className="text-6xl leading-tight">
              Échte resultaten van
              <span className="block text-green-600">échte ondernemers</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Van €2.800 maandelijkse besparing tot 25% hogere marges. 
              Ontdek hoe Nederlandse ondernemers hun bedrijf optimaliseerden met Simium.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats - Apple's Data Visualization */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: "€4.2M", label: "Totaal bespaard", color: "green" },
              { metric: "€4.125", label: "Gem. per maand", color: "blue" },
              { metric: "28 dagen", label: "Gem. ROI tijd", color: "purple" },
              { metric: "97%", label: "Tevredenheid", color: "orange" }
            ].map((stat, index) => (
              <div key={index} className={`text-center bg-${stat.color}-50 dark:bg-${stat.color}-950/30 border border-${stat.color}-200 dark:border-${stat.color}-800 rounded-3xl p-8`}>
                <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.metric}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Navigation - Apple's Segmented Control */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-secondary/50 p-2 rounded-2xl">
            <div className="flex flex-wrap gap-2">
              {scanFilters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setSelectedFilter(filter.key)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex-1 min-w-fit ${
                    selectedFilter === filter.key
                      ? 'bg-card text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid - Apple's Story Cards */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-16">
            {filteredTestimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="rounded-3xl overflow-hidden shadow-lg">
                <div className="p-12">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-8">
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-lg flex-shrink-0">
                        <ImageWithFallback 
                          src={testimonial.image!}
                          alt={`${testimonial.name} van ${testimonial.company}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
                        <p className="text-muted-foreground">{testimonial.role} • {testimonial.company}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location} • {testimonial.date}</p>
                        
                        <div className="flex items-center gap-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 lg:ml-auto">
                      {testimonial.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-secondary/70">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-3xl leading-relaxed mb-8 text-foreground font-medium">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Story */}
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {testimonial.story}
                  </p>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-6 text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">{testimonial.results.savings}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.results.period}</div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 text-center">
                      <div className="text-xl font-semibold text-blue-600 mb-1">{testimonial.results.roi}</div>
                      <div className="text-sm text-muted-foreground">ROI</div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-2xl p-6 text-center">
                      <div className="text-xl font-semibold text-purple-600 mb-1">{testimonial.results.implementation}</div>
                      <div className="text-sm text-muted-foreground">Implementatie</div>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-2xl p-6 text-center">
                      <div className="text-xl font-semibold text-orange-600 mb-1">Geverifieerd</div>
                      <div className="text-sm text-muted-foreground">Resultaat</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scan Comparison - Apple's Feature Comparison */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Welke scan kiest jouw situatie?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Kies de scan die past bij jouw grootste uitdaging
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloudkostenscan",
                ideal: "Perfect als je cloudkosten stijgen",
                results: "Gem. €2.450/maand besparing",
                stories: testimonials.filter(t => t.scanType === 'cloudkosten').length,
                color: "green",
                href: "#/cloudkostenscan"
              },
              {
                title: "Cashflow-analyse", 
                ideal: "Perfect voor betere financiële planning",
                results: "Gem. 40% minder buffer nodig",
                stories: testimonials.filter(t => t.scanType === 'cashflow').length,
                color: "blue",
                href: "#/cashflow-analyse"
              },
              {
                title: "Prijsstrategie-check",
                ideal: "Perfect als je marge wilt verhogen",
                results: "Gem. 23% hogere tarieven",
                stories: testimonials.filter(t => t.scanType === 'prijsstrategie').length,
                color: "purple", 
                href: "#/prijsstrategie-check"
              }
            ].map((scan, index) => (
              <Card key={index} className="p-8 rounded-3xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group cursor-pointer h-full"
                    onClick={() => window.location.href = scan.href}>
                <div className="flex flex-col h-full space-y-6">
                  <div className={`w-16 h-16 bg-${scan.color}-100 dark:bg-${scan.color}-950/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <div className={`w-8 h-8 bg-${scan.color}-600 rounded-lg`}></div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-semibold">{scan.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{scan.ideal}</p>
                    <div className={`text-${scan.color}-600 dark:text-${scan.color}-400 font-semibold`}>
                      {scan.results}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {scan.stories} succesverhaal{scan.stories !== 1 ? 'en' : ''}
                    </p>
                  </div>
                  
                  <Button className={`w-full bg-${scan.color}-600 hover:bg-${scan.color}-700 text-white py-3 rounded-2xl font-medium transition-all duration-200 group-hover:-translate-y-1 mt-auto`}>
                    Start {scan.title.toLowerCase()}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Apple's Trust Building */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-12">
            <h2 className="text-4xl">Sluit je aan bij 15.000+ ondernemers</h2>
            
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-12 text-white">
              <div className="space-y-8">
                <div className="text-6xl font-bold">€4.2M</div>
                <div className="text-2xl">bespaard voor Nederlandse ondernemers</div>
                <div className="text-lg text-green-100">
                  Gemiddeld verdienen klanten hun investering terug in 28 dagen
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => window.location.href = '#/producten'}
              >
                Start je eigen succesverhaal
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1"
                onClick={() => window.location.href = '#/contact'}
              >
                Praat met een expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
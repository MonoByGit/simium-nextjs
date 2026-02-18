'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { ImageWithFallback } from '../figma/ImageWithFallback'

// Import testimonial images
import axelImage from '@/assets/f015c8e32f92e0f7ba63116caed58f72718bfee7.png'
import christinaImage from '@/assets/95647e819259db3fa78fb8ec348dca0617ee4409.png'

export function TestimonialsPage() {
  const router = useRouter()

  const testimonials = [
    {
      id: 'axel',
      name: 'Axel F.',
      role: 'CTO',
      company: 'TechStart B.V.',
      location: 'Amsterdam',
      image: axelImage,
      initials: null,
      avatarBg: null,
      quote: "Simium ontdekte €33.600 aan jaarlijkse cloudverspilling die we zelf nooit gevonden hadden.",
      story: "Ons startup groeide van 5 naar 25 medewerkers in 8 maanden. Onze AWS-kosten explodeerden van €3.000 naar €12.000 per maand. We hadden geen idee waarom. Simium's AI-scan toonde binnen 24 uur dat we €2.800 per maand verspilden aan 'zombie' resources en verkeerd gedimensioneerde instances.",
      results: {
        savings: "€2.800",
        period: "per maand",
        roi: "Terugverdiend in 3 weken",
        implementation: "1 week"
      },
      tags: [
        { label: "Startup", bg: "bg-[var(--color-apple-blue)]/10 dark:bg-[var(--color-apple-blue)]/20", text: "text-[var(--color-apple-blue)]" },
        { label: "Tech", bg: "bg-[var(--color-apple-indigo)]/10 dark:bg-[var(--color-apple-indigo)]/15", text: "text-[var(--color-apple-indigo)]" },
        { label: "AWS", bg: "bg-[var(--color-apple-orange)]/10 dark:bg-[var(--color-apple-orange)]/20", text: "text-[var(--color-apple-orange)]" }
      ],
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
      initials: null,
      avatarBg: null,
      quote: "Door Simium's prijsadvies kon ik mijn tarieven met 25% verhogen zonder één klant te verliezen.",
      story: "Als freelance marketeer worstelde ik met mijn prijsstelling. Ik vroeg te weinig, maar durfde niet te verhogen uit angst klanten te verliezen. Simium's prijsstrategie-check vergeleek mijn tarieven met de markt en adviseerde een segmentatiestrategie. Nu verdien ik €1.800 meer per maand.",
      results: {
        savings: "€1.800",
        period: "extra per maand",
        roi: "€21.600 meer per jaar",
        implementation: "2 weken"
      },
      tags: [
        { label: "Freelancer", bg: "bg-[var(--color-apple-green)]/10 dark:bg-[var(--color-apple-green)]/20", text: "text-[var(--color-apple-green)]" },
        { label: "Marketing", bg: "bg-[var(--color-apple-indigo)]/10 dark:bg-[var(--color-apple-indigo)]/15", text: "text-[var(--color-apple-indigo)]" },
        { label: "ZZP", bg: "bg-[var(--color-apple-orange)]/10 dark:bg-[var(--color-apple-orange)]/20", text: "text-[var(--color-apple-orange)]" }
      ],
      rating: 5,
      date: "November 2024"
    },
    {
      id: 'thomas',
      name: 'Thomas van D.',
      role: 'Eigenaar',
      company: 'Webshop Vintage Gear',
      location: 'Rotterdam',
      image: null,
      initials: "TD",
      avatarBg: "bg-[var(--color-apple-blue)]",
      quote: "Cashflow was altijd gissen. Nu voorspel ik mijn inkomsten 3 maanden vooruit met 95% nauwkeurigheid.",
      story: "Mijn webshop had sterke seizoenspieken. In Q4 verdiende ik goed, maar Q1 was altijd krap. Ik hield te veel cash aan om veilig te voelen. Simium's cashflow-analyse toonde patronen en optimaliseerde mijn betalingstermijnen. Nu heb ik 40% minder buffer nodig.",
      results: {
        savings: "€4.200",
        period: "minder buffer",
        roi: "Meer investeerruimte",
        implementation: "3 weken"
      },
      tags: [
        { label: "E-commerce", bg: "bg-[var(--color-apple-blue)]/10 dark:bg-[var(--color-apple-blue)]/20", text: "text-[var(--color-apple-blue)]" },
        { label: "Retail", bg: "bg-[var(--color-apple-green)]/10 dark:bg-[var(--color-apple-green)]/20", text: "text-[var(--color-apple-green)]" },
        { label: "MKB", bg: "bg-[var(--color-apple-orange)]/10 dark:bg-[var(--color-apple-orange)]/20", text: "text-[var(--color-apple-orange)]" }
      ],
      rating: 5,
      date: "Oktober 2024"
    },
    {
      id: 'marloes',
      name: 'Marloes K.',
      role: 'Managing Partner',
      company: 'Consultancy Partners',
      location: 'Den Haag',
      image: null,
      initials: "MK",
      avatarBg: "bg-[var(--color-apple-indigo)]",
      quote: "We gebruikten alle drie scans. Resultaat: €90.000 besparing per jaar en 30% betere marges.",
      story: "Ons 15-persoons consultancy bureau wilde doorgroeien maar zag kosten en marges wegzakken. We implementeerden alle drie Simium's scans. Cloudkosten daalden met €2.100/maand, cashflow werd voorspelbaar, en we verhoogden onze uurtarieven met succes. Totale impact: €7.500 per maand.",
      results: {
        savings: "€7.500",
        period: "per maand",
        roi: "€90.000 per jaar",
        implementation: "6 weken"
      },
      tags: [
        { label: "Consultancy", bg: "bg-[var(--color-apple-indigo)]/10 dark:bg-[var(--color-apple-indigo)]/15", text: "text-[var(--color-apple-indigo)]" },
        { label: "B2B", bg: "bg-[var(--color-apple-blue)]/10 dark:bg-[var(--color-apple-blue)]/20", text: "text-[var(--color-apple-blue)]" },
        { label: "Groei", bg: "bg-[var(--color-apple-green)]/10 dark:bg-[var(--color-apple-green)]/20", text: "text-[var(--color-apple-green)]" }
      ],
      rating: 5,
      date: "September 2024"
    }
  ]

  // Stats with explicit static Tailwind classes
  const impactStats = [
    {
      metric: "€4.2M",
      label: "Totaal bespaard",
      cardClass: "text-center bg-[var(--color-apple-green)]/5 dark:bg-[var(--color-apple-green)]/10 border border-[var(--color-apple-green)]/30 rounded-3xl p-8",
      numberClass: "text-3xl font-bold text-[var(--color-apple-green)] mb-2"
    },
    {
      metric: "€4.125",
      label: "Gem. per maand",
      cardClass: "text-center bg-[var(--color-apple-blue)]/5 dark:bg-[var(--color-apple-blue)]/10 border border-[var(--color-apple-blue)]/30 rounded-3xl p-8",
      numberClass: "text-3xl font-bold text-[var(--color-apple-blue)] mb-2"
    },
    {
      metric: "28 dagen",
      label: "Gem. ROI tijd",
      cardClass: "text-center bg-[var(--color-apple-indigo)]/5 dark:bg-[var(--color-apple-indigo)]/10 border border-[var(--color-apple-indigo)]/30 rounded-3xl p-8",
      numberClass: "text-3xl font-bold text-[var(--color-apple-indigo)] mb-2"
    },
    {
      metric: "97%",
      label: "Tevredenheid",
      cardClass: "text-center bg-[var(--color-apple-orange)]/5 dark:bg-[var(--color-apple-orange)]/10 border border-[var(--color-apple-orange)]/30 rounded-3xl p-8",
      numberClass: "text-3xl font-bold text-[var(--color-apple-orange)] mb-2"
    }
  ]

  // Scan comparison cards
  const scanCards = [
    {
      title: "Cloudkostenscan",
      ideal: "Perfect als je cloudkosten stijgen",
      results: "Gem. €2.450/maand besparing",
      href: "/cloudkostenscan",
      iconWrapClass: "w-16 h-16 bg-[var(--color-apple-green)]/15 dark:bg-[var(--color-apple-green)]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200",
      iconClass: "w-8 h-8 bg-[var(--color-apple-green)] rounded-lg",
      resultsClass: "text-[var(--color-apple-green)] font-semibold text-sm",
      buttonClass: "w-full bg-[var(--color-apple-green)] hover:bg-[var(--color-apple-green)]/80 text-white py-3 rounded-2xl font-medium transition-all duration-200 group-hover:-translate-y-1"
    },
    {
      title: "Cashflow-analyse",
      ideal: "Perfect voor betere financiële planning",
      results: "Gem. 40% minder buffer nodig",
      href: "/cashflow-analyse",
      iconWrapClass: "w-16 h-16 bg-[var(--color-apple-blue)]/15 dark:bg-[var(--color-apple-blue)]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200",
      iconClass: "w-8 h-8 bg-[var(--color-apple-blue)] rounded-lg",
      resultsClass: "text-[var(--color-apple-blue)] font-semibold text-sm",
      buttonClass: "w-full bg-[var(--color-apple-blue)] hover:bg-[var(--color-apple-blue)]/80 text-white py-3 rounded-2xl font-medium transition-all duration-200 group-hover:-translate-y-1"
    },
    {
      title: "Prijsstrategie-check",
      ideal: "Perfect als je marge wilt verhogen",
      results: "Gem. 23% hogere tarieven",
      href: "/prijsstrategie-check",
      iconWrapClass: "w-16 h-16 bg-[var(--color-apple-indigo)]/15 dark:bg-[var(--color-apple-indigo)]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200",
      iconClass: "w-8 h-8 bg-[var(--color-apple-indigo)] rounded-lg",
      resultsClass: "text-[var(--color-apple-indigo)] font-semibold text-sm",
      buttonClass: "w-full bg-[var(--color-apple-indigo)] hover:bg-[var(--color-apple-indigo)]/80 text-white py-3 rounded-2xl font-medium transition-all duration-200 group-hover:-translate-y-1"
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            {/* Pill badge */}
            <div className="inline-flex items-center bg-[var(--color-apple-gray-6)] dark:bg-[var(--color-apple-gray-2)] text-[var(--color-apple-green)] px-4 py-2 rounded-full text-sm font-medium">
              Succesverhalen
            </div>

            <h1 className="text-6xl leading-tight">
              Échte resultaten van
              <span className="block text-[var(--color-apple-green)]">échte ondernemers</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Van €2.800 maandelijkse besparing tot 25% hogere marges.
              Ontdek hoe Nederlandse ondernemers hun bedrijf optimaliseerden met Simium.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div key={index} className={stat.cardClass}>
                <div className={stat.numberClass}>{stat.metric}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-16">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="rounded-3xl overflow-hidden shadow-lg">
                <div className="p-12">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-8">
                    <div className="flex items-center gap-6">
                      {/* Avatar: photo or initials */}
                      <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-lg flex-shrink-0">
                        {testimonial.image ? (
                          <ImageWithFallback
                            src={testimonial.image}
                            alt={`${testimonial.name} van ${testimonial.company}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className={`w-full h-full ${testimonial.avatarBg} flex items-center justify-center`}>
                            <span className="text-white text-2xl font-bold">{testimonial.initials}</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
                        <p className="text-muted-foreground">{testimonial.role} • {testimonial.company}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location} • {testimonial.date}</p>

                        <div className="flex items-center gap-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-apple-orange)]">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tags — pill badges with per-item color */}
                    <div className="flex flex-wrap gap-2 lg:ml-auto">
                      {testimonial.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${tag.bg} ${tag.text}`}
                        >
                          {tag.label}
                        </span>
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
                    <div className="bg-[var(--color-apple-green)]/5 dark:bg-[var(--color-apple-green)]/10 border border-[var(--color-apple-green)]/30 rounded-2xl p-6 text-center">
                      <div className="text-2xl font-bold text-[var(--color-apple-green)] mb-1">{testimonial.results.savings}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.results.period}</div>
                    </div>

                    <div className="bg-[var(--color-apple-blue)]/5 dark:bg-[var(--color-apple-blue)]/10 border border-[var(--color-apple-blue)]/30 rounded-2xl p-6 text-center">
                      <div className="text-xl font-semibold text-[var(--color-apple-blue)] mb-1">{testimonial.results.roi}</div>
                      <div className="text-sm text-muted-foreground">ROI</div>
                    </div>

                    <div className="bg-[var(--color-apple-indigo)]/5 dark:bg-[var(--color-apple-indigo)]/10 border border-[var(--color-apple-indigo)]/30 rounded-2xl p-6 text-center">
                      <div className="text-xl font-semibold text-[var(--color-apple-indigo)] mb-1">{testimonial.results.implementation}</div>
                      <div className="text-sm text-muted-foreground">Implementatie</div>
                    </div>

                    <div className="bg-[var(--color-apple-orange)]/5 dark:bg-[var(--color-apple-orange)]/10 border border-[var(--color-apple-orange)]/30 rounded-2xl p-6 text-center">
                      <div className="text-xl font-semibold text-[var(--color-apple-orange)] mb-1">Geverifieerd</div>
                      <div className="text-sm text-muted-foreground">Resultaat</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scan Comparison */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Welke scan past bij jou?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Kies de scan die past bij jouw grootste uitdaging
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {scanCards.map((scan, index) => (
              <Card
                key={index}
                className="p-8 rounded-3xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group cursor-pointer h-full"
                onClick={() => router.push(scan.href)}
              >
                <div className="flex flex-col h-full space-y-6">
                  <div className={scan.iconWrapClass}>
                    <div className={scan.iconClass}></div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-semibold">{scan.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{scan.ideal}</p>
                    <div className={scan.resultsClass}>{scan.results}</div>
                  </div>

                  <Button className={scan.buttonClass}>
                    Start {scan.title.toLowerCase()}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl leading-tight">
              Sluit je aan bij
              <span className="block text-[var(--color-apple-blue)]">15.000+ ondernemers</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Gemiddeld verdienen klanten hun investering terug in 28 dagen. Start vandaag nog.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[var(--color-apple-blue)] hover:bg-[var(--color-apple-blue)]/90 text-white px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => router.push('/producten')}
              >
                Start je eigen succesverhaal
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1"
                onClick={() => router.push('/contact')}
              >
                Praat met een expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Zap, Target, ShieldCheck, ChevronDown } from 'lucide-react'

export function ProductsPage() {
  const router = useRouter()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero - Apple's Clean Introduction */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-[var(--color-apple-gray-6)] dark:bg-[var(--color-apple-gray-2)] text-[var(--color-apple-gray)] dark:text-[var(--color-apple-blue-dark)] px-4 py-2 rounded-full text-sm font-medium">
              Kies je scan
            </div>

            <h1 className="text-6xl leading-tight">
              Waar wil je
              <span className="block text-[var(--color-apple-blue)]">beginnen?</span>
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
                iconBg: 'bg-[var(--color-apple-gray-6)] dark:bg-[var(--color-apple-gray-2)]/50',
                iconDot: 'bg-[var(--color-apple-green)]',
                dotColor: 'bg-[var(--color-apple-green)]',
                metricBg: 'bg-[var(--color-apple-gray-6)] dark:bg-[var(--color-apple-gray-2)]/30',
                metricText: 'text-[var(--color-apple-green)]',
                btnClass: 'bg-[var(--color-apple-green)] hover:bg-[var(--color-apple-green)]/90 text-white',
                hoverRing: 'group-hover:ring-2 group-hover:ring-[var(--color-apple-green)]',
                href: '/cloudkostenscan'
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
                iconBg: 'bg-[var(--color-apple-gray-6)] dark:bg-[var(--color-apple-gray-2)]/50',
                iconDot: 'bg-[var(--color-apple-blue)]',
                dotColor: 'bg-[var(--color-apple-blue)]',
                metricBg: 'bg-[var(--color-apple-gray-6)] dark:bg-[var(--color-apple-gray-2)]/30',
                metricText: 'text-[var(--color-apple-blue)]',
                btnClass: 'bg-[var(--color-apple-blue)] hover:bg-[var(--color-apple-blue)]/90 text-white',
                hoverRing: 'group-hover:ring-2 group-hover:ring-[var(--color-apple-blue)]',
                href: '/cashflow-analyse'
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
                iconBg: 'bg-[var(--color-apple-gray-6)] dark:bg-[var(--color-apple-gray-2)]/50',
                iconDot: 'bg-[var(--color-apple-indigo)]',
                dotColor: 'bg-[var(--color-apple-indigo)]',
                metricBg: 'bg-[var(--color-apple-gray-6)] dark:bg-[var(--color-apple-gray-2)]/30',
                metricText: 'text-[var(--color-apple-indigo)]',
                btnClass: 'bg-[var(--color-apple-indigo)] hover:bg-[var(--color-apple-indigo)]/90 text-white',
                hoverRing: 'group-hover:ring-2 group-hover:ring-[var(--color-apple-indigo)]',
                href: '/prijsstrategie-check'
              }
            ].map((scan, index) => (
              <div key={index} className="relative group">
                <div className={`bg-card border border-border rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full ${scan.hoverRing}`}
                     onClick={() => router.push(scan.href)}>
                  <div className="flex flex-col h-full space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                      <div className={`w-16 h-16 ${scan.iconBg} rounded-2xl flex items-center justify-center`}>
                        <div className={`w-8 h-8 ${scan.iconDot} rounded-lg`}></div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold">{scan.title}</h3>
                        <p className="text-muted-foreground">{scan.subtitle}</p>
                      </div>
                    </div>

                    {/* Content Area - Flexible (description + features only) */}
                    <div className="flex-1 space-y-6">
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {scan.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        {scan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 ${scan.dotColor} rounded-full flex-shrink-0`}></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metric - pinned above button */}
                    <div className={`${scan.metricBg} rounded-2xl p-6 text-center`}>
                      <div className={`text-3xl font-bold ${scan.metricText} mb-1`}>
                        {scan.metric}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {scan.metricLabel}
                      </div>
                    </div>

                    {/* CTA - Always at bottom */}
                    <Button
                      className={`w-full py-4 ${scan.btnClass} rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1`}
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

      {/* Value Props — Apple-stijl, Lucide icons */}
      <section className="py-32 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-16">
            <h2 className="text-4xl">Waarom Simium</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-[var(--color-apple-blue)]" strokeWidth={1.75} />,
                  iconBg: 'bg-[var(--color-apple-blue)]/10 dark:bg-[var(--color-apple-blue)]/15',
                  title: 'Snel resultaat',
                  description: 'Binnen 24 uur heb je concrete inzichten en aanbevelingen'
                },
                {
                  icon: <Target className="w-6 h-6 text-[var(--color-apple-green)]" strokeWidth={1.75} />,
                  iconBg: 'bg-[var(--color-apple-green)]/10 dark:bg-[var(--color-apple-green)]/15',
                  title: 'Direct bruikbaar',
                  description: 'Geen vage adviezen, maar stap-voor-stap implementatieplan'
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-[var(--color-apple-indigo)]" strokeWidth={1.75} />,
                  iconBg: 'bg-[var(--color-apple-indigo)]/10 dark:bg-[var(--color-apple-indigo)]/15',
                  title: 'Volledig veilig',
                  description: 'Je gegevens blijven privé en worden na analyse verwijderd'
                }
              ].map((prop, index) => (
                <div key={index} className="flex flex-col items-center space-y-5">
                  <div className={`w-14 h-14 ${prop.iconBg} rounded-2xl flex items-center justify-center`}>
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{prop.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — Apple accordion-stijl */}
      <section className="py-32">
        <div className="max-w-2xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="mb-6">Veelgestelde vragen</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Alles wat je moet weten voordat je start
              </p>
            </div>

            <div className="divide-y divide-border">
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
                <div key={index}>
                  <button
                    className="w-full flex items-center justify-between py-6 text-left group"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="text-base font-semibold pr-8 group-hover:text-[var(--color-apple-blue)] transition-colors duration-200">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ease-in-out ${openFaq === index ? 'rotate-180 text-[var(--color-apple-blue)]' : ''}`}
                      strokeWidth={1.75}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Apple's Clean Close */}
      <section className="py-32 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl leading-tight">
              Tijd om te
              <span className="block text-[var(--color-apple-blue)]">beginnen</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Kies je eerste scan en ontdek binnen 24 uur waar je kunt optimaliseren
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[var(--color-apple-blue)] hover:bg-[var(--color-apple-blue)]/90 text-white px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => document.querySelector('.grid.grid-cols-1.lg\\:grid-cols-3')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Kies je scan
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1"
                onClick={() => router.push('/contact')}
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

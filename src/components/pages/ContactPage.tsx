'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Card } from '../ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { ChevronDown } from 'lucide-react'

export function ContactPage() {
  const router = useRouter()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    scanType: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            {/* Pill zonder stipje */}
            <div className="inline-flex items-center bg-[var(--color-apple-gray-6)] dark:bg-[var(--color-apple-gray-2)] text-[var(--color-apple-gray)] dark:text-[var(--color-apple-blue-dark)] px-4 py-2 rounded-full text-sm font-medium">
              Contact
            </div>

            <h1 className="text-6xl leading-tight">
              Hoe kunnen we
              <span className="block text-[var(--color-apple-blue)]">helpen?</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Of je nu vragen hebt over onze scans, advies nodig hebt, of gewoon wilt praten over je bedrijf - we staan voor je klaar.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Options — statische klassen per item */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Vragen over scans',
                description: 'Welke scan past bij jouw situatie?',
                action: 'Chat met ons',
                href: '#chat',
                iconBg: 'bg-[var(--color-apple-blue)]/10',
                iconInner: 'bg-[var(--color-apple-blue)]',
                linkColor: 'text-[var(--color-apple-blue)]',
              },
              {
                title: 'Support nodig',
                description: 'Hulp bij je huidige scan of rapport',
                action: 'Direct contact',
                href: 'mailto:support@simium.nl',
                iconBg: 'bg-[var(--color-apple-green)]/10',
                iconInner: 'bg-[var(--color-apple-green)]',
                linkColor: 'text-[var(--color-apple-green)]',
              },
              {
                title: 'Demo aanvragen',
                description: 'Zie hoe Simium werkt voor jouw bedrijf',
                action: 'Plan gesprek',
                href: '#demo',
                iconBg: 'bg-[var(--color-apple-indigo)]/10',
                iconInner: 'bg-[var(--color-apple-indigo)]',
                linkColor: 'text-[var(--color-apple-indigo)]',
              }
            ].map((option, index) => (
              <Card key={index} className="p-8 rounded-3xl border border-border hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer group h-full"
                    onClick={() => {
                      if (option.href.startsWith('#')) {
                        document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })
                        setFormData(prev => ({ ...prev, subject: option.title }))
                      } else {
                        router.push(option.href)
                      }
                    }}>
                <div className="flex flex-col h-full space-y-6">
                  <div className={`w-16 h-16 ${option.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <div className={`w-8 h-8 ${option.iconInner} rounded-lg`}></div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold">{option.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{option.description}</p>
                  </div>

                  <div className={`inline-flex items-center ${option.linkColor} font-medium group-hover:translate-x-1 transition-transform duration-200 mt-auto`}>
                    {option.action}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-2">
                      <path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Stuur ons een bericht</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We reageren binnen 4 uur op alle berichten
            </p>
          </div>

          <Card className="p-8 md:p-10 rounded-3xl shadow-md border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="text-sm font-medium text-foreground">Voornaam</label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    className="mt-2 h-12 px-4 rounded-2xl border-border bg-secondary/30 text-foreground"
                    placeholder="Jouw voornaam"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-sm font-medium text-foreground">Achternaam</label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    className="mt-2 h-12 px-4 rounded-2xl border-border bg-secondary/30 text-foreground"
                    placeholder="Jouw achternaam"
                    required
                  />
                </div>
              </div>

              {/* Contact Info Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground">E-mailadres</label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="mt-2 h-12 px-4 rounded-2xl border-border bg-secondary/30 text-foreground"
                    placeholder="naam@bedrijf.nl"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="text-sm font-medium text-foreground">Bedrijfsnaam</label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="mt-2 h-12 px-4 rounded-2xl border-border bg-secondary/30 text-foreground"
                    placeholder="Jouw bedrijf B.V."
                  />
                </div>
              </div>

              {/* Subject & Scan Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Onderwerp</label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="mt-2 h-12 px-4 rounded-2xl border-border bg-secondary/30 text-foreground"
                    placeholder="Waar gaat je vraag over?"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Interesse in scan?</label>
                  <Select value={formData.scanType} onValueChange={(value) => setFormData(prev => ({ ...prev, scanType: value }))}>
                    <SelectTrigger className="mt-2 h-12 px-4 rounded-2xl border-border bg-secondary/30 text-foreground">
                      <SelectValue placeholder="Kies een scan (optioneel)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cloudkosten">Cloudkostenscan</SelectItem>
                      <SelectItem value="cashflow">Cashflow-analyse</SelectItem>
                      <SelectItem value="prijsstrategie">Prijsstrategie-check</SelectItem>
                      <SelectItem value="alle">Alle drie scans</SelectItem>
                      <SelectItem value="weet-niet">Weet ik nog niet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground">Jouw bericht</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={5}
                  className="mt-2 p-4 rounded-2xl border-border bg-secondary/30 text-foreground resize-none"
                  placeholder="Vertel ons over je situatie, je vragen, of waar we je mee kunnen helpen..."
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex justify-end">
                <Button
                  type="submit"
                  className="bg-[var(--color-apple-blue)] hover:bg-[var(--color-apple-blue)]/90 text-white px-8 py-2.5 rounded-2xl font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Verstuur bericht
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Contact Info — statische klassen per item */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'E-mail contact',
                primary: 'support@simium.nl',
                secondary: 'Reactie binnen 4 uur',
                iconBg: 'bg-[var(--color-apple-blue)]',
                textColor: 'text-[var(--color-apple-blue)]',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Telefonisch contact',
                primary: '+31 (0)20 123 4567',
                secondary: 'Maandag t/m vrijdag 9:00-17:00',
                iconBg: 'bg-[var(--color-apple-green)]',
                textColor: 'text-[var(--color-apple-green)]',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: 'Kantoor adres',
                primary: 'Keizersgracht 123',
                secondary: '1015 CJ Amsterdam',
                iconBg: 'bg-[var(--color-apple-indigo)]',
                textColor: 'text-[var(--color-apple-indigo)]',
              }
            ].map((contact, index) => (
              <Card key={index} className="p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-200">
                <div className="space-y-6">
                  <div className={`w-16 h-16 ${contact.iconBg} rounded-2xl flex items-center justify-center shadow-md`}>
                    {contact.icon}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{contact.title}</h3>
                    <div className={`${contact.textColor} font-medium text-lg`}>
                      {contact.primary}
                    </div>
                    <p className="text-muted-foreground">{contact.secondary}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="mb-6">Veelgestelde vragen</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Antwoorden op de meest gestelde vragen
              </p>
            </div>

            <div className="divide-y divide-border">
              {[
                {
                  question: 'Hoe snel krijg ik antwoord op mijn vraag?',
                  answer: 'We streven ernaar binnen 4 uur te reageren op alle berichten. Voor urgente vragen kun je ons direct bellen tijdens kantooruren.'
                },
                {
                  question: 'Kan ik een demo krijgen van jullie platform?',
                  answer: 'Ja, graag! We plannen graag een persoonlijke demo in waarbij we laten zien hoe onze scans werken en hoe ze jouw bedrijf kunnen helpen.'
                },
                {
                  question: 'Welke scan is het beste voor mijn bedrijf?',
                  answer: 'Dat hangt af van jouw grootste uitdaging. Heb je last van stijgende cloudkosten? Kies de cloudkostenscan. Wil je betere grip op cashflow? Dan is de cashflow-analyse perfect. Twijfel je over je prijzen? Ga voor de prijsstrategie-check.'
                },
                {
                  question: 'Zijn jullie alleen voor grote bedrijven?',
                  answer: 'Nee, we helpen bedrijven van alle groottes! Van eenpersoons-ondernemingen tot bedrijven met honderden medewerkers. Onze AI past zich aan aan jouw specifieke situatie.'
                },
                {
                  question: 'Wat als ik niet tevreden ben met de scan?',
                  answer: 'We bieden een 100% tevredenheidsgarantie. Als je niet tevreden bent met je scan resultaten, krijg je je geld terug. Geen vragen, geen gedoe.'
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

      {/* Final CTA */}
      <section className="py-32 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl leading-tight">
              Liever direct
              <span className="block text-[var(--color-apple-blue)]">beginnen?</span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Start vandaag nog je eerste gratis scan en ontdek binnen 24 uur waar je bedrijf kan optimaliseren
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[var(--color-apple-blue)] hover:bg-[var(--color-apple-blue)]/90 text-white px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => router.push('/producten')}
              >
                Start gratis scan
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Card } from '../ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

export function ContactPage() {
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
      {/* Hero - Apple's Minimalist Approach */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Contact
            </div>
            
            <h1 className="text-6xl leading-tight">
              Hoe kunnen we
              <span className="block text-blue-600">helpen?</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Of je nu vragen hebt over onze scans, advies nodig hebt, of gewoon wilt praten over je bedrijf - we staan voor je klaar.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Options - Apple's Choice Architecture */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Vragen over scans',
                description: 'Welke scan past bij jouw situatie?',
                action: 'Chat met ons',
                color: 'blue',
                href: '#chat'
              },
              {
                title: 'Support nodig',
                description: 'Hulp bij je huidige scan of rapport',
                action: 'Direct contact',
                color: 'green',
                href: 'mailto:support@simium.nl'
              },
              {
                title: 'Demo aanvragen',
                description: 'Zie hoe Simium werkt voor jouw bedrijf',
                action: 'Plan gesprek',
                color: 'purple',
                href: '#demo'
              }
            ].map((option, index) => (
              <Card key={index} className={`p-8 rounded-3xl border border-border hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer group h-full`}
                    onClick={() => {
                      if (option.href.startsWith('#')) {
                        document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })
                        setFormData(prev => ({ ...prev, subject: option.title }))
                      } else {
                        window.location.href = option.href
                      }
                    }}>
                <div className="flex flex-col h-full space-y-6">
                  <div className={`w-16 h-16 bg-${option.color}-100 dark:bg-${option.color}-950/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <div className={`w-8 h-8 bg-${option.color}-600 rounded-lg`}></div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold">{option.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{option.description}</p>
                  </div>
                  
                  <div className={`inline-flex items-center text-${option.color}-600 dark:text-${option.color}-400 font-medium group-hover:translate-x-1 transition-transform duration-200 mt-auto`}>
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

      {/* Main Contact Form - Apple's Refined Form Design */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Stuur ons een bericht</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We reageren binnen 4 uur op alle berichten
            </p>
          </div>
          
          <Card className="p-12 rounded-3xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="firstName" className="text-foreground font-medium">Voornaam</label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    className="h-14 px-6 rounded-2xl border-border bg-background text-foreground text-lg"
                    placeholder="Jouw voornaam"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="lastName" className="text-foreground font-medium">Achternaam</label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    className="h-14 px-6 rounded-2xl border-border bg-background text-foreground text-lg"
                    placeholder="Jouw achternaam"
                    required
                  />
                </div>
              </div>

              {/* Contact Info Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="email" className="text-foreground font-medium">E-mailadres</label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="h-14 px-6 rounded-2xl border-border bg-background text-foreground text-lg"
                    placeholder="naam@bedrijf.nl"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="company" className="text-foreground font-medium">Bedrijfsnaam</label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="h-14 px-6 rounded-2xl border-border bg-background text-foreground text-lg"
                    placeholder="Jouw bedrijf B.V."
                  />
                </div>
              </div>

              {/* Subject & Scan Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="subject" className="text-foreground font-medium">Onderwerp</label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="h-14 px-6 rounded-2xl border-border bg-background text-foreground text-lg"
                    placeholder="Waar gaat je vraag over?"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-foreground font-medium">Interesse in scan?</label>
                  <Select value={formData.scanType} onValueChange={(value) => setFormData(prev => ({ ...prev, scanType: value }))}>
                    <SelectTrigger className="h-14 px-6 rounded-2xl border-border bg-background text-foreground text-lg">
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
              <div className="space-y-3">
                <label htmlFor="message" className="text-foreground font-medium">Jouw bericht</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={6}
                  className="p-6 rounded-2xl border-border bg-background text-foreground text-lg resize-none"
                  placeholder="Vertel ons over je situatie, je vragen, of waar we je mee kunnen helpen..."
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-xl rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                >
                  Verstuur bericht
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Contact Info - Apple's Information Architecture */}
      <section className="py-24 bg-secondary/30">
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
                color: 'blue'
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
                color: 'green'
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
                color: 'purple'
              }
            ].map((contact, index) => (
              <Card key={index} className="p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-200">
                <div className="space-y-6">
                  <div className={`w-16 h-16 bg-${contact.color}-600 rounded-2xl flex items-center justify-center shadow-md`}>
                    {contact.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{contact.title}</h3>
                    <div className={`text-${contact.color}-600 dark:text-${contact.color}-400 font-medium text-lg`}>
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

      {/* FAQ Section - Apple's Accordion Style */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Veelgestelde vragen</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Antwoorden op de meest gestelde vragen
            </p>
          </div>
          
          <div className="space-y-6">
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
              <Card key={index} className="p-8 rounded-2xl">
                <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">{faq.question}</h4>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Apple's Clean Close */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl text-white">
              Liever direct beginnen?
            </h2>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Start vandaag nog je eerste gratis scan en ontdek binnen 24 uur waar je bedrijf kan optimaliseren
            </p>

            <Button 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => window.location.href = '#/producten'}
            >
              Start gratis scan
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
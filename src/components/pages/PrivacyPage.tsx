import React from 'react'
import { Layout } from '../Layout'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

export function PrivacyPage() {
  return (
    <Layout>
      {/* Hero - Apple's Trust-First Approach */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Privacy
            </div>
            
            <h1 className="text-6xl leading-tight">
              Jouw privacy
              <span className="block text-green-600">staat voorop</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We geloven dat privacy een fundamenteel recht is. Daarom bouwen we privacy-by-design 
              in alles wat we maken en zijn we volledig transparant over hoe we je gegevens gebruiken.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Principles - Apple's Values Grid */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🔒',
                title: 'Privacy by Design',
                description: 'Privacy is ingebakken in alles wat we bouwen'
              },
              {
                icon: '🇳🇱',
                title: 'Nederlandse Servers',
                description: 'Je data blijft binnen Nederlandse grenzen'
              },
              {
                icon: '⏰',
                title: 'Tijdelijke Opslag',
                description: 'Data wordt automatisch verwijderd na analyse'
              },
              {
                icon: '📋',
                title: 'GDPR Compliant',
                description: 'Volledig conform Europese privacywetgeving'
              }
            ].map((principle, index) => (
              <Card key={index} className="p-6 rounded-3xl text-center">
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content - Apple's Clear Structure */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {[
              {
                title: 'Welke gegevens verzamelen we?',
                content: 'We verzamelen alleen gegevens die noodzakelijk zijn voor het uitvoeren van onze business scans. Dit omvat bedrijfsinformatie, financiële data en technische specificaties die je vrijwillig met ons deelt.',
                details: [
                  'Bedrijfsgegevens (naam, sector, grootte)',
                  'Financiële informatie voor cashflow-analyses',
                  'Technische data voor cloudkosten-scans',
                  'Contactgegevens voor communicatie',
                  'Gebruiksstatistieken van ons platform'
                ]
              },
              {
                title: 'Hoe gebruiken we je gegevens?',
                content: 'Je gegevens worden uitsluitend gebruikt voor het genereren van je persoonlijke business scan. We verkopen, verhuren of delen je gegevens nooit met derden voor commerciële doeleinden.',
                details: [
                  'AI-analyse voor jouw specifieke scan',
                  'Genereren van rapporten en aanbevelingen',
                  'Communicatie over je scanresultaten',
                  'Verbetering van onze AI-modellen (geanonimiseerd)',
                  'Wettelijk verplichte rapportages'
                ]
              },
              {
                title: 'Hoe beschermen we je gegevens?',
                content: 'We hanteren enterprise-grade beveiligingsmaatregelen om je gegevens te beschermen tegen ongeautoriseerde toegang, wijziging, openbaarmaking of vernietiging.',
                details: [
                  'AES-256 encryptie voor data in transit en at rest',
                  'Multi-factor authenticatie voor alle teamleden',
                  'Regelmatige penetratietesten door externe experts',
                  'SOC 2 Type II gecertificeerde processen',
                  'Nederlandse datacenters met ISO 27001 certificering'
                ]
              },
              {
                title: 'Hoe lang bewaren we je gegevens?',
                content: 'We geloven in minimale databewaring. Je gegevens worden automatisch verwijderd zodra ze niet meer nodig zijn voor het doel waarvoor ze zijn verzameld.',
                details: [
                  'Scangegevens: automatisch verwijderd na 90 dagen',
                  'Rapporten: beschikbaar voor 12 maanden via je account',
                  'Contactgegevens: bewaard tot je je account verwijdert',
                  'Geanonimiseerde data: gebruikt voor model verbetering',
                  'Financiële data: 7 jaar (wettelijke verplichting)'
                ]
              },
              {
                title: 'Jouw rechten',
                content: 'Je hebt volledige controle over je gegevens. Je kunt te allen tijde inzage krijgen, wijzigingen aanbrengen of je gegevens laten verwijderen.',
                details: [
                  'Recht op inzage: bekijk alle gegevens die we hebben',
                  'Recht op rectificatie: corrigeer onjuiste gegevens',
                  'Recht op vergetelheid: laat je gegevens verwijderen',
                  'Recht op overdraagbaarheid: exporteer je gegevens',
                  'Recht op bezwaar: stop verwerking van je gegevens'
                ]
              },
              {
                title: 'Cookies en tracking',
                content: 'We gebruiken minimale cookies voor essentiële functionaliteit. Marketing tracking doen we niet zonder je expliciete toestemming.',
                details: [
                  'Essentiële cookies voor websiteveiligheid',
                  'Functionele cookies voor voorkeuren (dark mode)',
                  'Analytische cookies (alleen met toestemming)',
                  'Geen marketing of advertising cookies',
                  'Alle cookies kunnen worden uitgeschakeld'
                ]
              },
              {
                title: 'Internationale overdrachten',
                content: 'Je gegevens blijven binnen de EU. We maken geen gebruik van Amerikaanse cloud providers die onder de CLOUD Act vallen.',
                details: [
                  'Alle servers staan in Nederlandse datacenters',
                  'Geen gebruik van AWS, Google Cloud of Azure',
                  'Wel gebruik van Europese cloud providers',
                  'Backup locaties binnen EU grenzen',
                  'GDPR-compliant verwerkersovereenkomsten'
                ]
              },
              {
                title: 'Contact en klachten',
                content: 'Heb je vragen over je privacy of wil je een klacht indienen? We staan voor je klaar om te helpen.',
                details: [
                  'E-mail: privacy@simium.nl',
                  'Telefoon: +31 (0)20 123 4567',
                  'Post: Simium B.V., Keizersgracht 123, Amsterdam',
                  'Klacht bij AP: autoriteitpersoonsgegevens.nl',
                  'Reactie binnen 30 dagen gegarandeerd'
                ]
              }
            ].map((section, index) => (
              <div key={index} className="space-y-6">
                <h2 className="text-3xl font-semibold">{section.title}</h2>
                <Card className="p-8 rounded-3xl">
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                    
                    <div className="space-y-4">
                      {section.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-4">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Commitment - Apple's Values Statement */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="p-12 rounded-3xl">
            <div className="text-center space-y-8">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-950/50 rounded-3xl flex items-center justify-center mx-auto">
                <div className="text-3xl">🤝</div>
              </div>
              
              <h2 className="text-3xl font-semibold">Onze privacy belofte</h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We begrijpen dat je ons vertrouwt met gevoelige bedrijfsgegevens. 
                  Die verantwoordelijkheid nemen we serieus.
                </p>
                <p>
                  Daarom investeren we continu in de nieuwste beveiligingstechnologieën, 
                  trainen we ons team regelmatig over privacy, en zijn we transparant 
                  over hoe we met je gegevens omgaan.
                </p>
                <p>
                  Heb je vragen? Aarzel niet om contact op te nemen. 
                  We beantwoorden graag al je privacy-gerelateerde vragen.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Quick Actions - Apple's User Empowerment */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Beheer je privacy</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Eenvoudige tools om controle te houden over je gegevens
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Inzage gegevens',
                description: 'Download alle gegevens die we van je hebben',
                action: 'Download data',
                color: 'blue'
              },
              {
                title: 'Account verwijderen',
                description: 'Verwijder je account en alle bijbehorende gegevens',
                action: 'Account verwijderen',
                color: 'red'
              },
              {
                title: 'Privacy instellingen',
                description: 'Pas je privacy voorkeuren aan',
                action: 'Instellingen',
                color: 'green'
              }
            ].map((action, index) => (
              <Card key={index} className="p-8 rounded-3xl hover:shadow-lg transition-all duration-200 hover:-translate-y-1 h-full">
                <div className="flex flex-col h-full space-y-6">
                  <h3 className="text-xl font-semibold">{action.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{action.description}</p>
                  <Button 
                    className={`w-full bg-${action.color}-600 hover:bg-${action.color}-700 text-white py-3 rounded-2xl font-medium transition-all duration-200 mt-auto`}
                    onClick={() => window.location.href = '#/contact'}
                  >
                    {action.action}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Info - Apple's Compliance */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="p-8 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-muted-foreground">
              <div className="space-y-2">
                <div><strong>Laatste update:</strong> 26 januari 2025</div>
                <div><strong>Versie:</strong> 2.1</div>
                <div><strong>Geldend vanaf:</strong> 1 februari 2025</div>
              </div>
              <div className="space-y-2">
                <div><strong>KvK nummer:</strong> 12345678</div>
                <div><strong>BTW nummer:</strong> NL123456789B01</div>
                <div><strong>Functionaris Gegevensbescherming:</strong> fg@simium.nl</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA - Apple's Support Invitation */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl">Vragen over privacy?</h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              We helpen je graag met al je privacy-gerelateerde vragen. 
              Geen vraag is te klein of te technisch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => window.location.href = 'mailto:privacy@simium.nl'}
              >
                E-mail privacy team
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1"
                onClick={() => window.location.href = '#/contact'}
              >
                Contact formulier
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
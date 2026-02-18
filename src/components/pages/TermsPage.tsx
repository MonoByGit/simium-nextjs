'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

export function TermsPage() {
  const router = useRouter()
  return (
    <>
      {/* Hero - Apple's Legal Transparency */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-[var(--color-apple-gray-6)] dark:bg-[var(--color-apple-gray-2)] text-[var(--color-apple-gray)] dark:text-[var(--color-apple-blue-dark)] px-4 py-2 rounded-full text-sm font-medium">
              Algemene Voorwaarden
            </div>
            
            <h1 className="text-6xl leading-tight">
              Eerlijke voorwaarden
              <span className="block text-[var(--color-apple-blue)]">voor iedereen</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Onze algemene voorwaarden in helder Nederlands. Geen juridisch jargon, 
              gewoon duidelijke afspraken over hoe we samenwerken.
            </p>
          </div>
        </div>
      </section>

      {/* Key Points - Apple's Summary Cards */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '✅',
                title: '100% Tevredenheid',
                description: 'Niet tevreden? Geld terug garantie'
              },
              {
                icon: '🔒',
                title: 'Veilige Data',
                description: 'Je gegevens zijn bij ons veilig'
              },
              {
                icon: '⚡',
                title: 'Snelle Service',
                description: 'Resultaten binnen 24-48 uur'
              },
              {
                icon: '🇳🇱',
                title: 'Nederlands Recht',
                description: 'Geschillen volgens NL wetgeving'
              }
            ].map((point, index) => (
              <Card key={index} className="p-6 rounded-3xl text-center">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content - Apple's Structured Approach */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {[
              {
                title: '1. Wat we doen',
                summary: 'Simium biedt AI-gedreven business scans voor Nederlandse ondernemers',
                content: 'We analyseren je bedrijfsgegevens met kunstmatige intelligentie en geven concrete aanbevelingen voor optimalisatie. Alle analyses worden door ons expertteam gecontroleerd voordat je ze ontvangt.',
                details: [
                  'Cloudkosten-analyse voor IT-optimalisatie',
                  'Cashflow-voorspellingen voor financiële planning', 
                  'Prijsstrategie-checks voor marge-optimalisatie',
                  'Persoonlijke rapporten met actieplannen',
                  'Follow-up support bij implementatie'
                ]
              },
              {
                title: '2. Jouw verantwoordelijkheden',
                summary: 'Voor goede resultaten hebben we correcte informatie van je nodig',
                content: 'Je zorgt ervoor dat de gegevens die je met ons deelt juist en volledig zijn. Je bent zelf verantwoordelijk voor het implementeren van onze aanbevelingen.',
                details: [
                  'Verstrek correcte en actuele bedrijfsgegevens',
                  'Implementeer aanbevelingen op eigen risico',
                  'Gebruik onze diensten conform de wet',
                  'Respecteer intellectuele eigendomsrechten',
                  'Betaal op tijd volgens afgesproken voorwaarden'
                ]
              },
              {
                title: '3. Prijzen en betaling',
                summary: 'Transparante prijzen, vooraf betalen, geen verborgen kosten',
                content: 'Alle prijzen zijn inclusief BTW en worden vooraf gecommuniceerd. Betaling gebeurt vooraf via onze beveiligde betaalomgeving. Bij laattijdige betaling kunnen we onze diensten opschorten.',
                details: [
                  'Vaste prijzen per scan: €49,95 - €199,95',
                  'Alle prijzen zijn inclusief 21% BTW',
                  'Betaling vooraf via iDEAL, creditcard of bankoverschrijving',
                  'Facturen binnen 14 dagen betalen',
                  'Bij betalingsproblemen nemen we contact op'
                ]
              },
              {
                title: '4. Wat je van ons mag verwachten',
                summary: 'Kwaliteit, snelheid en eerlijke communicatie',
                content: 'We streven naar de hoogste kwaliteit in onze analyses en communicatie. Hoewel we geen specifieke besparingen kunnen garanderen, doen we er alles aan om waardevolle inzichten te leveren.',
                details: [
                  'Rapporten binnen 24-48 uur geleverd',
                  'Analyses door AI + menselijke controle',
                  'Concrete, implementeerbare aanbevelingen',
                  'Support bij vragen over je rapport',
                  '100% tevredenheidsgarantie'
                ]
              },
              {
                title: '5. Intellectueel eigendom',
                summary: 'Onze methodes zijn van ons, jouw rapporten zijn van jou',
                content: 'Alle rechten op onze AI-modellen en methodiek behoren toe aan Simium. De rapporten die we voor jou maken, mag je vrij gebruiken voor je bedrijf.',
                details: [
                  'Simium behoudt rechten op AI-modellen en platform',
                  'Je krijgt volledige rechten op jouw rapport',
                  'Rapporten mogen gedeeld worden met adviseurs',
                  'Commercieel hergebruik van onze methodes niet toegestaan',
                  'We respecteren jouw bedrijfsgeheimen'
                ]
              },
              {
                title: '6. Privacy en beveiliging',
                summary: 'Jouw gegevens zijn veilig bij ons',
                content: 'We behandelen je gegevens conform onze privacyverklaring en GDPR-wetgeving. Beveiliging heeft onze hoogste prioriteit.',
                details: [
                  'GDPR-compliant verwerking van alle gegevens',
                  'Enterprise-grade beveiligingsmaatregelen',
                  'Gegevens worden niet gedeeld met derden',
                  'Automatische verwijdering na afloop scan',
                  'Nederlandse servers voor alle dataopslag'
                ]
              },
              {
                title: '7. Aansprakelijkheid',
                summary: 'We doen ons best, maar kunnen niet alles garanderen',
                content: 'Onze aansprakelijkheid is beperkt tot het bedrag dat je hebt betaald. We zijn niet aansprakelijk voor indirecte schade of gevolgschade.',
                details: [
                  'Maximale aansprakelijkheid = bedrag van je scan',
                  'Geen aansprakelijkheid voor indirecte schade',
                  'Niet aansprakelijk bij onjuiste invoergegevens',
                  'Uitzondering voor opzet of grove schuld',
                  'Verzekering tegen bedrijfsaansprakelijkheid'
                ]
              },
              {
                title: '8. Opzegging en herroeping',
                summary: 'Je kunt altijd van gedachten veranderen',
                content: 'Consumenten hebben 14 dagen herroepingsrecht. Als we al met je scan zijn begonnen, kan herroeping beperkt zijn. We kunnen overeenkomsten beëindigen bij contractbreuk.',
                details: [
                  '14 dagen herroepingsrecht voor consumenten',
                  'Herroeping mogelijk tot start van de analyse',
                  'Volledige terugbetaling bij tijdige herroeping',
                  'Simium kan opzeggen bij materiële contractbreuk',
                  'Belangrijke bepalingen blijven na opzegging gelden'
                ]
              },
              {
                title: '9. Overmacht',
                summary: 'Soms kunnen we niet aan onze verplichtingen voldoen door externe factoren',
                content: 'Bij overmacht (zoals cyberaanvallen, overheidsmaatregelen of uitval van essentiële diensten) kunnen we tijdelijk niet aan onze verplichtingen voldoen.',
                details: [
                  'Cyberaanvallen op ons platform of leveranciers',
                  'Overheidsmaatregelen die onze dienst beperken',
                  'Uitval van cloud infrastructuur waarvan we afhankelijk zijn',
                  'Natuurrampen of andere onvoorziene omstandigheden',
                  'We informeren je zo snel mogelijk bij overmacht'
                ]
              },
              {
                title: '10. Wijzigingen',
                summary: 'Deze voorwaarden kunnen veranderen, maar we laten het je weten',
                content: 'We kunnen deze voorwaarden aanpassen met 30 dagen kennisgeving. Je wordt geïnformeerd via e-mail. Voortzetting van gebruik geldt als akkoord.',
                details: [
                  'Wijzigingen met 30 dagen opzegtermijn',
                  'Notificatie via e-mail naar je geregistreerde adres',
                  'Belangrijke wijzigingen worden extra benadrukt',
                  'Voortzetting van gebruik = acceptatie nieuwe voorwaarden',
                  'Je kunt je account opzeggen als je niet akkoord gaat'
                ]
              },
              {
                title: '11. Geschillen',
                summary: 'We lossen problemen liever samen op, anders gaan we naar de rechter in Amsterdam',
                content: 'Nederlands recht is van toepassing. Geschillen worden voorgelegd aan de rechtbank Amsterdam. We proberen eerst alles in overleg op te lossen.',
                details: [
                  'Nederlands recht van toepassing op alle overeenkomsten',
                  'Geschillen voor de rechtbank Amsterdam',
                  'Voorkeur voor oplossing via mediation',
                  'Klachten eerst in overleg proberen op te lossen',
                  'Consumenten kunnen naar geschillencommissie'
                ]
              }
            ].map((section, index) => (
              <div key={index} className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-semibold">{section.title}</h2>
                  <div className="bg-[var(--color-apple-gray-6)] dark:bg-[var(--color-apple-blue)]/15/30 p-6 rounded-2xl border border-border dark:border-border">
                    <p className="text-lg font-medium text-[var(--color-apple-gray)] dark:text-[var(--color-apple-blue-dark)]">
                      {section.summary}
                    </p>
                  </div>
                </div>
                
                <Card className="p-8 rounded-3xl">
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">Specifiek betekent dit:</h4>
                      {section.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-4">
                          <div className="w-2 h-2 bg-[var(--color-apple-blue)] rounded-full mt-3 flex-shrink-0"></div>
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

      {/* Contact for Legal Questions - Apple's Support */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="p-12 rounded-3xl">
            <div className="text-center space-y-8">
              <div className="w-20 h-20 bg-[var(--color-apple-gray-6)] dark:bg-[var(--color-apple-gray-2)] rounded-3xl flex items-center justify-center mx-auto">
                <div className="text-3xl">⚖️</div>
              </div>
              
              <h2 className="text-3xl font-semibold">Vragen over de voorwaarden?</h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We snappen dat juridische teksten complex kunnen zijn. 
                  Heb je vragen over onze voorwaarden? We leggen het graag uit.
                </p>
                <p>
                  Ons team staat klaar om alle vragen te beantwoorden over wat deze 
                  voorwaarden betekenen voor jouw specifieke situatie.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-[var(--color-apple-blue)] hover:bg-[var(--color-apple-blue)] text-white px-8 py-4 rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                  onClick={() => window.location.href = 'mailto:legal@simium.nl'}
                >
                  E-mail legal team
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-4 rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1"
                  onClick={() => router.push('/contact')}
                >
                  Contact formulier
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Legal Info Footer - Apple's Compliance */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="p-8 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-muted-foreground">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Document informatie</h4>
                <div><strong>Laatste update:</strong> 26 januari 2025</div>
                <div><strong>Versie:</strong> 3.1</div>
                <div><strong>Geldend vanaf:</strong> 1 februari 2025</div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Bedrijfsgegevens</h4>
                <div><strong>KvK nummer:</strong> 12345678</div>
                <div><strong>BTW nummer:</strong> NL123456789B01</div>
                <div><strong>Vestiging:</strong> Amsterdam, Nederland</div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Contact</h4>
                <div><strong>Juridisch:</strong> legal@simium.nl</div>
                <div><strong>Support:</strong> support@simium.nl</div>
                <div><strong>Telefoon:</strong> +31 (0)20 123 4567</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA - Apple's Final Encouragement */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl">Klaar om te beginnen?</h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nu je weet hoe we samenwerken, kun je met vertrouwen je eerste scan starten
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[var(--color-apple-blue)] hover:bg-[var(--color-apple-blue)] text-white px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => router.push('/producten')}
              >
                Start je scan
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1"
                onClick={() => router.push('/contact')}
              >
                Nog vragen? Contact ons
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
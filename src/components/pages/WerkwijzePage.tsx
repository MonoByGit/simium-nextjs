import React from 'react'
import { Layout } from '../Layout'
import { Button } from '../ui/button'

export function WerkwijzePage() {
  return (
    <Layout>
      {/* Hero - Apple's Educational Introduction */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              Werkwijze
            </div>
            
            <h1 className="text-6xl leading-tight">
              Zo werken onze
              <span className="block text-purple-600">AI-analyses</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Van bedrijfsvraag tot concrete resultaten in drie eenvoudige stappen
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps - Apple's Clear Progression */}
      <section className="pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-32">
            {[
              {
                step: '01',
                title: 'Vertel ons over je situatie',
                description: 'Beantwoord 5-10 gerichte vragen over je bedrijf. Geen technische kennis vereist.',
                details: [
                  'Slimme vragenlijst aangepast aan jouw sector',
                  'Veilige verwerking van je gegevens',
                  'Volledig anoniem en vertrouwelijk',
                  'Duurt gemiddeld 5-10 minuten'
                ],
                visual: '📋'
              },
              {
                step: '02',
                title: 'AI analyseert je data',
                description: 'Onze algoritmes vergelijken jouw situatie met duizenden vergelijkbare bedrijven.',
                details: [
                  'Machine learning op basis van 15.000+ analyses',
                  'Patroonherkenning voor jouw specifieke situatie',
                  'Benchmarking tegen vergelijkbare bedrijven',
                  'Analyse duurt maximaal 24 uur'
                ],
                visual: '🧠'
              },
              {
                step: '03',
                title: 'Ontvang concrete aanbevelingen',
                description: 'Krijg een duidelijk rapport met prioriteiten en directe actiepunten.',
                details: [
                  'Overzichtelijk dashboard met hoofdpunten',
                  'Stap-voor-stap implementatieplan',
                  'Geschatte besparingen en tijdsinvestering',
                  'Downloadbaar PDF-rapport'
                ],
                visual: '📊'
              }
            ].map((step, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-6">
                    <div className="inline-flex items-center bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                      Stap {step.step}
                    </div>
                    
                    <h2 className="text-4xl leading-tight">{step.title}</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-950/50 dark:to-indigo-950/50 rounded-3xl p-16 text-center shadow-xl">
                    <div className="text-8xl mb-6">{step.visual}</div>
                    <div className="text-6xl font-bold text-purple-600">{step.step}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology - Apple's Trust Building */}
      <section className="py-32 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl">De technologie achter Simium</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Enterprise-grade AI die vertrouwd wordt door duizenden bedrijven
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: '99.9%',
                  label: 'Uptime garantie',
                  description: 'Onze systemen zijn 24/7 beschikbaar'
                },
                {
                  metric: '< 2s',
                  label: 'Response tijd',
                  description: 'Snelle verwerking van je gegevens'
                },
                {
                  metric: '256-bit',
                  label: 'Encryptie',
                  description: 'Bank-niveau beveiliging'
                },
                {
                  metric: 'SOC 2',
                  label: 'Gecertificeerd',
                  description: 'Voldoet aan hoogste standaarden'
                }
              ].map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-8 space-y-4">
                  <div className="text-3xl font-bold text-purple-600">{item.metric}</div>
                  <div className="font-semibold">{item.label}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security - Apple's Transparency */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl leading-tight">
                  Jouw gegevens
                  <span className="block text-green-600">blijven veilig</span>
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We hanteren de hoogste standaarden voor privacy en beveiliging. 
                  Jouw bedrijfsgegevens worden nooit gedeeld of bewaard.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'GDPR compliant',
                    description: 'Volledig conform Europese privacywetgeving'
                  },
                  {
                    title: 'Automatische verwijdering',
                    description: 'Je gegevens worden na analyse automatisch gewist'
                  },
                  {
                    title: 'Nederlandse servers',
                    description: 'Al je data blijft binnen Nederlandse grenzen'
                  },
                  {
                    title: 'Geen verkoop van data',
                    description: 'We verkopen of delen nooit je bedrijfsinformatie'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-950/50 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-muted-foreground text-sm leading-relaxed">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/50 dark:to-emerald-950/50 rounded-3xl p-16 text-center shadow-xl">
              <div className="text-8xl mb-6">🔒</div>
              <div className="text-2xl font-semibold text-green-600 mb-4">100% Veilig</div>
              <div className="text-muted-foreground">Enterprise-grade beveiliging</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Preview - Apple's Outcome Focus */}
      <section className="py-32 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl">Wat je kunt verwachten</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Concrete inzichten die je direct kunt toepassen
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Prioriteiten',
                  description: 'Welke acties het meeste opleveren',
                  icon: '🎯'
                },
                {
                  title: 'Tijdsinschatting',
                  description: 'Hoeveel tijd elke aanbeveling kost',
                  icon: '⏱️'
                },
                {
                  title: 'Impact berekening',
                  description: 'Exacte besparing per aanbeveling',
                  icon: '📈'
                }
              ].map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-all duration-200">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Apple's Clean Action */}
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl leading-tight">
              Klaar om te
              <span className="block text-purple-600">beginnen?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Kies je eerste analyse en ervaar zelf hoe snel je resultaat hebt
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => window.location.href = '#/producten'}
              >
                Start je eerste scan
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1"
                onClick={() => window.location.href = '#/voorbeeldrapport'}
              >
                Bekijk voorbeeld
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
import React from 'react'
import { Layout } from '../Layout'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { ImageWithFallback } from '../figma/ImageWithFallback'

// Import images
import womanImage from 'figma:asset/f015c8e32f92e0f7ba63116caed58f72718bfee7.png'
import inventecLogo from 'figma:asset/9c65e4e456c330cb45e96ec0a02e169e72c66787.png'
import experianLogo from 'figma:asset/41d6d232c7f38f02b040aadeac79f267ae01a47e.png'
import mannolLogo from 'figma:asset/872636fa97798151a130f04072b7e4be8d9a69d8.png'
import bramblesLogo from 'figma:asset/9628120ff4209cf85bc7ef502e84a4ccdb668753.png'

export function HomePage() {
  return (
    <Layout>
      {/* Hero - Apple's Signature Centered Focus */}
      <section className="pt-20 pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl leading-[0.9] tracking-tight">
                AI voor slimmere
                <span className="block">bedrijfsvoering</span>
              </h1>
              
              <p className="text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ontdek binnen minuten waar je bedrijf kan optimaliseren. 
                Zonder complexiteit. Zonder verplichtingen.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => window.location.href = '#/producten'}
              >
                Begin gratis scan
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1"
                onClick={() => window.location.href = '#/werkwijze'}
              >
                Hoe het werkt
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Minimal Apple Style */}
      <section className="py-16 border-y border-border/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-muted-foreground text-sm tracking-wide uppercase">
              Vertrouwd door Nederlandse bedrijven
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 items-center justify-items-center opacity-40">
            <ImageWithFallback src={inventecLogo} alt="Inventec" className="h-8 w-auto object-contain filter grayscale" />
            <ImageWithFallback src={experianLogo} alt="Experian" className="h-8 w-auto object-contain filter grayscale" />
            <ImageWithFallback src={mannolLogo} alt="Mannol" className="h-8 w-auto object-contain filter grayscale" />
            <ImageWithFallback src={bramblesLogo} alt="Brambles" className="h-8 w-auto object-contain filter grayscale" />
          </div>
        </div>
      </section>

      {/* Core Value - Apple's Single Focus Section */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-3xl p-8 shadow-2xl">
                  <ImageWithFallback 
                    src={womanImage} 
                    alt="AI-gedreven business inzichten" 
                    className="rounded-2xl w-full shadow-lg"
                  />
                </div>
                {/* Floating metric card */}
                <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-1">€4.2M</div>
                  <div className="text-muted-foreground text-sm">bespaard voor klanten</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  AI-analyse
                </div>
                
                <h2 className="text-5xl leading-tight">
                  Verspilling wordt
                  <span className="block text-blue-600">zichtbaar</span>
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Onze AI analyseert jouw bedrijfsdata en toont binnen 24 uur precies 
                  waar je geld verliest en hoe je dat kunt voorkomen.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">€2.4K</div>
                  <div className="text-sm text-muted-foreground">gem. maandbesparing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24u</div>
                  <div className="text-sm text-muted-foreground">tot resultaat</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">97%</div>
                  <div className="text-sm text-muted-foreground">tevredenheid</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Scans - Apple's Clean Grid */}
      <section className="py-32 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="mb-6">Drie manieren om te optimaliseren</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Kies de analyse die past bij jouw grootste uitdaging
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cloudkosten',
                description: 'Bespaar tot 40% op je cloud-infrastructuur door verspilling en inefficiëntie op te sporen.',
                metric: '€2.400/maand',
                color: 'green',
                href: '#/cloudkostenscan'
              },
              {
                title: 'Cashflow',
                description: 'Voorspel je cashflow en optimaliseer je financiële planning met AI-inzichten.',
                metric: '85% verbetering',
                color: 'blue', 
                href: '#/cashflow-analyse'
              },
              {
                title: 'Prijsstrategie',
                description: 'Ontdek of je geld laat liggen met je huidige prijsstrategie en segmentatie.',
                metric: '23% hogere marge',
                color: 'purple',
                href: '#/prijsstrategie-check'
              }
            ].map((scan, index) => (
              <div key={index} className="group">
                <div className={`bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full`}
                     onClick={() => window.location.href = scan.href}>
                  <div className="space-y-6">
                    <div className={`w-16 h-16 bg-${scan.color}-100 dark:bg-${scan.color}-950/50 rounded-2xl flex items-center justify-center`}>
                      <div className={`w-8 h-8 bg-${scan.color}-600 rounded-lg`}></div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold">{scan.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{scan.description}</p>
                    </div>
                    
                    <div className={`inline-flex items-center bg-${scan.color}-50 dark:bg-${scan.color}-950/30 text-${scan.color}-700 dark:text-${scan.color}-300 px-4 py-2 rounded-full text-sm font-medium`}>
                      {scan.metric}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Apple's Progressive Disclosure */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-20">
            <div className="space-y-6">
              <h2 className="mb-6">Zo eenvoudig werkt het</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Van vraag tot concrete aanbevelingen in drie stappen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                {
                  step: '1',
                  title: 'Vertel ons over je bedrijf',
                  description: 'Beantwoord 5-10 gerichte vragen over je situatie'
                },
                {
                  step: '2', 
                  title: 'AI analyseert je data',
                  description: 'Onze algoritmes vinden patronen en optimalisatiekansen'
                },
                {
                  step: '3',
                  title: 'Ontvang concrete acties',
                  description: 'Krijg een rapport met stappen die direct te implementeren zijn'
                }
              ].map((item, index) => (
                <div key={index} className="space-y-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                    {item.step}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Apple's Confidence */}
      <section className="py-32 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-12">
            <h2 className="mb-6">Waarom ondernemers ons vertrouwen</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="text-4xl font-bold text-blue-600">15.000+</div>
                <div className="text-muted-foreground">analyses uitgevoerd</div>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-green-600">€4.2M</div>
                <div className="text-muted-foreground">totaal bespaard</div>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-purple-600">24 uur</div>
                <div className="text-muted-foreground">gemiddelde doorlooptijd</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => window.location.href = '#/producten'}
              >
                Begin je analyse
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1"
                onClick={() => window.location.href = '#/testimonials'}
              >
                Lees verhalen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Apple's Clean Close */}
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl leading-tight">
              Klaar om te
              <span className="block text-blue-600">optimaliseren?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Start vandaag nog je eerste gratis analyse
            </p>

            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => window.location.href = '#/producten'}
            >
              Begin nu
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
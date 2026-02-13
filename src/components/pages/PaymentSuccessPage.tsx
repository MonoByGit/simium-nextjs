import React, { useEffect } from 'react'
import { Layout } from '../Layout'
import { Button } from '../ui/button'

export function PaymentSuccessPage() {
  useEffect(() => {
    // Clear any scan data from localStorage after successful payment
    localStorage.removeItem('simium_scan_data')
  }, [])

  return (
    <Layout>
      {/* Success Celebration - Apple's Delightful Confirmation */}
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-12">
            {/* Success Animation Area */}
            <div className="space-y-8">
              <div className="text-8xl animate-bounce">🎉</div>
              
              <div className="space-y-6">
                <h1 className="text-6xl leading-tight">
                  Betaling
                  <span className="block text-green-600">geslaagd</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Bedankt voor je vertrouwen. We gaan direct aan de slag met je analyse.
                </p>
              </div>
            </div>

            {/* Status Cards - Apple's Information Hierarchy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Betaling ontvangen</h3>
                <p className="text-sm text-muted-foreground">€49,95 succesvol verwerkt</p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Analyse gestart</h3>
                <p className="text-sm text-muted-foreground">Resultaat binnen 24 uur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next - Apple's Clear Communication */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Wat gebeurt er nu?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Zo houden we je op de hoogte van de voortgang
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: '1',
                title: 'E-mail bevestiging',
                description: 'Je ontvangt binnen 5 minuten een bevestiging met je ordergegevens.',
                time: 'Nu',
                color: 'green'
              },
              {
                step: '2',
                title: 'Analyse in uitvoering',
                description: 'Onze AI-systemen analyseren je gegevens en vergelijken met duizenden andere bedrijven.',
                time: 'Vandaag',
                color: 'blue'
              },
              {
                step: '3',
                title: 'Resultaat klaar',
                description: 'Je krijgt een e-mail met een link naar je persoonlijke dashboard met resultaten.',
                time: 'Binnen 24u',
                color: 'purple'
              }
            ].map((step, index) => (
              <div key={index} className="text-center space-y-6">
                <div className={`w-16 h-16 bg-${step.color}-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto shadow-lg`}>
                  {step.step}
                </div>
                
                <div className="space-y-3">
                  <div className={`inline-flex items-center bg-${step.color}-100 dark:bg-${step.color}-950/50 text-${step.color}-700 dark:text-${step.color}-300 px-3 py-1 rounded-full text-sm font-medium`}>
                    {step.time}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support - Apple's Helpful Assistance */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-card border border-border rounded-3xl p-12 text-center shadow-sm">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950/50 rounded-2xl flex items-center justify-center mx-auto">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Vragen over je analyse?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ons team staat klaar om je te helpen. We reageren binnen 2 uur op alle vragen.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1"
                  onClick={() => window.location.href = '#/contact'}
                >
                  Stel een vraag
                </Button>
                <Button 
                  variant="outline"
                  className="px-6 py-3 rounded-2xl font-medium transition-all duration-200 hover:-translate-y-1"
                  onClick={() => window.location.href = 'mailto:support@simium.nl'}
                >
                  E-mail support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Actions - Apple's Helpful Suggestions */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-12">
            <h2 className="text-4xl">Terwijl je wacht...</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-2xl p-8 space-y-6 hover:shadow-lg transition-all duration-200 cursor-pointer"
                   onClick={() => window.location.href = '#/testimonials'}>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950/50 rounded-2xl flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-600">
                    <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Lees succesverhalen</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ontdek hoe andere ondernemers duizenden euro's besparen met Simium
                  </p>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-8 space-y-6 hover:shadow-lg transition-all duration-200 cursor-pointer"
                   onClick={() => window.location.href = '#/producten'}>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-950/50 rounded-2xl flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-600">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Plan je volgende scan</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Combineer analyses voor maximale optimalisatie van je bedrijf
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA - Apple's Final Touch */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl">Bedankt voor je vertrouwen in Simium</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We zijn er om je te helpen je bedrijf te laten groeien
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
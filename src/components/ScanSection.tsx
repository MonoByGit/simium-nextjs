'use client'

import React from 'react'
import { Button } from './ui/button'

interface ScanFeature {
  title: string
  description: string
}

interface ScanSectionProps {
  icon: React.ReactNode
  title: string
  description: string
  features: ScanFeature[]
  savingsAmount: string
  savingsDescription: string
  savingsIcon: string
  buttonText: React.ReactNode
  buttonColor: 'blue' | 'gray' | 'slate' | 'green' | 'purple'
  titleColor: 'blue' | 'gray' | 'slate' | 'green' | 'purple'
  onButtonClick?: () => void
}

export function ScanSection({
  icon,
  title,
  description,
  features,
  savingsAmount,
  savingsDescription,
  savingsIcon,
  buttonText,
  buttonColor,
  titleColor,
  onButtonClick
}: ScanSectionProps) {
  const getColorClasses = (color: 'blue' | 'gray' | 'slate' | 'green' | 'purple') => {
    switch (color) {
      case 'blue':
        return {
          title: 'text-[var(--color-apple-blue)] dark:text-[var(--color-apple-blue)]',
          button: 'bg-[var(--color-apple-blue)] hover:bg-[var(--color-apple-blue)] dark:bg-[var(--color-apple-blue)] dark:hover:bg-[var(--color-apple-blue)]',
          checkmark: 'text-[var(--color-apple-blue)] dark:text-[var(--color-apple-blue)]',
          savingsBox: 'from-[var(--color-apple-gray-6)] to-[var(--color-apple-gray-6)] dark:from-[var(--color-apple-gray-2)] dark:to-[var(--color-apple-gray-2)]',
          savingsNumber: 'text-[var(--color-apple-blue)] dark:text-[var(--color-apple-blue)]'
        }
      case 'gray':
        return {
          title: 'text-foreground',
          button: 'bg-[var(--color-apple-gray)] hover:bg-[var(--color-apple-gray)]/80 dark:bg-[var(--color-apple-gray)] dark:hover:bg-[var(--color-apple-gray)]/80',
          checkmark: 'text-foreground',
          savingsBox: 'from-secondary to-secondary/50 dark:from-secondary dark:to-secondary/50',
          savingsNumber: 'text-foreground'
        }
      case 'slate':
        return {
          title: 'text-muted-foreground',
          button: 'bg-[var(--color-apple-gray)] hover:bg-[var(--color-apple-gray)]/80 dark:bg-[var(--color-apple-gray)] dark:hover:bg-[var(--color-apple-gray)]/80',
          checkmark: 'text-muted-foreground',
          savingsBox: 'from-secondary to-secondary/50 dark:from-secondary dark:to-secondary/50',
          savingsNumber: 'text-muted-foreground'
        }
      case 'green':
        return {
          title: 'text-[var(--color-apple-green)] dark:text-[var(--color-apple-green)]',
          button: 'bg-[var(--color-apple-green)] hover:bg-[var(--color-apple-green)] dark:bg-[var(--color-apple-green)] dark:hover:bg-[var(--color-apple-green)]',
          checkmark: 'text-[var(--color-apple-green)] dark:text-[var(--color-apple-green)]',
          savingsBox: 'from-[var(--color-apple-gray-6)] to-[var(--color-apple-gray-5)] dark:from-[var(--color-apple-gray-2)] dark:to-[var(--color-apple-gray-2)]',
          savingsNumber: 'text-[var(--color-apple-green)] dark:text-[var(--color-apple-green)]'
        }
      case 'purple':
        return {
          title: 'text-[var(--color-apple-indigo)] dark:text-[var(--color-apple-gray-3)]',
          button: 'bg-[var(--color-apple-indigo)] hover:bg-[var(--color-apple-indigo)] dark:bg-[var(--color-apple-indigo)] dark:hover:bg-[var(--color-apple-indigo)]',
          checkmark: 'text-[var(--color-apple-indigo)] dark:text-[var(--color-apple-gray-3)]',
          savingsBox: 'from-[var(--color-apple-gray-6)] to-[var(--color-apple-gray-5)] dark:from-[var(--color-apple-gray-2)] dark:to-[var(--color-apple-gray-2)]',
          savingsNumber: 'text-[var(--color-apple-indigo)] dark:text-[var(--color-apple-gray-3)]'
        }
    }
  }

  const getIconBackground = (color: 'blue' | 'gray' | 'slate' | 'green' | 'purple') => {
    switch (color) {
      case 'blue': return 'bg-[var(--color-apple-blue)] dark:bg-[var(--color-apple-blue)]'
      case 'gray': return 'bg-foreground/70'
      case 'slate': return 'bg-foreground/70'
      case 'green': return 'bg-[var(--color-apple-green)] dark:bg-[var(--color-apple-green)]'
      case 'purple': return 'bg-[var(--color-apple-indigo)] dark:bg-[var(--color-apple-indigo)]'
    }
  }

  const colors = getColorClasses(buttonColor)

  return (
    <section className="bg-white dark:bg-card rounded-2xl p-8 shadow-sm border border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column - Content */}
        <div>
          <div className="flex items-center mb-6">
            <div className={`w-12 h-12 ${getIconBackground(buttonColor)} rounded-xl flex items-center justify-center mr-4`}>
              {icon}
            </div>
            <h2 className={colors.title}>{title}</h2>
          </div>
          
          <p className="text-muted-foreground mb-6 text-lg">
            {description}
          </p>
          
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className={`w-2 h-2 ${colors.checkmark.replace('text-', 'bg-')} rounded-full mr-3 flex-shrink-0 mt-2`}></span>
                <div>
                  <h4 className="mb-1 dark:text-white">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Savings Box and CTA */}
        <div className="flex flex-col items-center space-y-6">
          {/* Add top margin to align with paragraph - icon+title height (48px + 24px margin) = 72px total */}
          <div className={`bg-gradient-to-br ${colors.savingsBox} rounded-xl p-8 text-center w-full mt-[72px]`}>
            {savingsIcon && <div className="text-4xl mb-4">{savingsIcon}</div>}
            <h3 className="mb-2 dark:text-white">Gemiddelde besparing</h3>
            <div className={`text-3xl ${colors.savingsNumber} mb-2`}>{savingsAmount}</div>
            <p className="text-muted-foreground text-sm">{savingsDescription}</p>
          </div>
          
          <Button 
            className={`${colors.button} text-white px-8 py-3 rounded-lg w-full sm:w-auto`}
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  )
}
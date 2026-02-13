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
          title: 'text-gray-700 dark:text-gray-300',
          button: 'bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700',
          checkmark: 'text-gray-700 dark:text-gray-300',
          savingsBox: 'from-gray-50 to-gray-100 dark:from-gray-800/30 dark:to-gray-700/30',
          savingsNumber: 'text-gray-700 dark:text-gray-300'
        }
      case 'slate':
        return {
          title: 'text-slate-600 dark:text-slate-400',
          button: 'bg-slate-600 hover:bg-slate-700 dark:bg-slate-600 dark:hover:bg-slate-700',
          checkmark: 'text-slate-600 dark:text-slate-400',
          savingsBox: 'from-slate-50 to-slate-100 dark:from-slate-800/30 dark:to-slate-700/30',
          savingsNumber: 'text-slate-600 dark:text-slate-400'
        }
      case 'green':
        return {
          title: 'text-green-600 dark:text-green-400',
          button: 'bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700',
          checkmark: 'text-green-600 dark:text-green-400',
          savingsBox: 'from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30',
          savingsNumber: 'text-green-600 dark:text-green-400'
        }
      case 'purple':
        return {
          title: 'text-purple-600 dark:text-purple-400',
          button: 'bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700',
          checkmark: 'text-purple-600 dark:text-purple-400',
          savingsBox: 'from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30',
          savingsNumber: 'text-purple-600 dark:text-purple-400'
        }
    }
  }

  const getIconBackground = (color: 'blue' | 'gray' | 'slate' | 'green' | 'purple') => {
    switch (color) {
      case 'blue': return 'bg-[var(--color-apple-blue)] dark:bg-[var(--color-apple-blue)]'
      case 'gray': return 'bg-gray-700 dark:bg-gray-600'
      case 'slate': return 'bg-slate-600 dark:bg-slate-600'
      case 'green': return 'bg-green-600 dark:bg-green-600'
      case 'purple': return 'bg-purple-600 dark:bg-purple-600'
    }
  }

  const colors = getColorClasses(buttonColor)

  return (
    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column - Content */}
        <div>
          <div className="flex items-center mb-6">
            <div className={`w-12 h-12 ${getIconBackground(buttonColor)} rounded-xl flex items-center justify-center mr-4`}>
              {icon}
            </div>
            <h2 className={colors.title}>{title}</h2>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            {description}
          </p>
          
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className={`w-2 h-2 ${colors.checkmark.replace('text-', 'bg-')} rounded-full mr-3 flex-shrink-0 mt-2`}></span>
                <div>
                  <h4 className="mb-1 dark:text-white">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
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
            <p className="text-gray-600 dark:text-gray-400 text-sm">{savingsDescription}</p>
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
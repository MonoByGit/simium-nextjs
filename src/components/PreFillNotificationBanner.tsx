import React from 'react'

interface PreFillNotificationBannerProps {
  hasSavedData: boolean
  onClearData: () => void
  theme?: 'green' | 'blue' | 'purple'
  maxWidth?: 'max-w-2xl' | 'max-w-4xl' | 'max-w-6xl'
}

/**
 * PreFillNotificationBanner - Herbruikbare banner voor verdiepingspagina's
 * 
 * Gebruik:
 * - CloudkostenVerdiepingPage: theme="green", maxWidth="max-w-4xl"
 * - CashflowVerdiepingPage: theme="blue", maxWidth="max-w-2xl" (toekomst)
 * - PrijsstrategieVerdiepingPage: theme="purple", maxWidth="max-w-2xl" (toekomst)
 * 
 * Plaats altijd onder de hero sectie, boven het formulier.
 * De maxWidth moet overeenkomen met de breedte van het formulier eronder.
 */
export function PreFillNotificationBanner({ 
  hasSavedData, 
  onClearData, 
  theme = 'green',
  maxWidth = 'max-w-4xl' 
}: PreFillNotificationBannerProps) {
  if (!hasSavedData) return null

  const themeStyles = {
    green: {
      background: 'bg-green-50',
      border: 'border-green-200',
      iconBg: 'bg-green-600',
      titleText: 'text-green-800',
      subtitleText: 'text-green-600',
      buttonText: 'text-green-600 hover:text-green-800',
      buttonBg: 'hover:bg-green-100'
    },
    blue: {
      background: 'bg-[var(--color-apple-gray-6)]',
      border: 'border-[var(--color-apple-gray-6)]',
      iconBg: 'bg-[var(--color-apple-blue)]',
      titleText: 'text-[var(--color-apple-gray)]',
      subtitleText: 'text-[var(--color-apple-blue)]',
      buttonText: 'text-[var(--color-apple-blue)] hover:text-[var(--color-apple-gray)]',
      buttonBg: 'hover:bg-[var(--color-apple-gray-6)]'
    },
    purple: {
      background: 'bg-purple-50',
      border: 'border-purple-200',
      iconBg: 'bg-purple-600',
      titleText: 'text-purple-800',
      subtitleText: 'text-purple-600',
      buttonText: 'text-purple-600 hover:text-purple-800',
      buttonBg: 'hover:bg-purple-100'
    }
  }

  const styles = themeStyles[theme]

  return (
    <div className={`${maxWidth} mx-auto px-4 sm:px-6 mb-8`}>
      <div className={`${styles.background} ${styles.border} rounded-xl p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-6 h-6 ${styles.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="text-left">
              <p className={`${styles.titleText} text-sm`}>
                <strong>Slim!</strong> We hebben je antwoorden van de gratis scan al ingevuld waar mogelijk.
              </p>
              <p className={`${styles.subtitleText} text-xs mt-1`}>
                Je hoeft alleen nog de aanvullende vragen te beantwoorden.
              </p>
            </div>
          </div>
          <button
            onClick={onClearData}
            className={`${styles.buttonText} ${styles.buttonBg} p-2 rounded-lg transition-colors flex items-center justify-center`}
            title="Opnieuw beginnen"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-current">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 3v5h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 16H3v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
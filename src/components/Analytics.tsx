// Analytics helper for Plausible integration
// This component provides consistent tracking points throughout the application

export const Analytics = {
  // Free scan starts
  trackFreeScanStart: (scanType: 'cloudkosten' | 'cashflow' | 'prijsstrategie') => {
    // PLAUSIBLE_TRIGGER: Free scan start
    console.log(`PLAUSIBLE_TRACK: free_scan_start_${scanType}`)
    // Implementation: plausible('free_scan_start', { props: { scan_type: scanType } })
  },

  // Premium scan purchase attempts  
  trackPremiumPurchaseAttempt: (scanType: 'cloudkosten' | 'cashflow' | 'prijsstrategie') => {
    // PLAUSIBLE_TRIGGER: Premium purchase attempt
    console.log(`PLAUSIBLE_TRACK: premium_purchase_attempt_${scanType}`)
    // Implementation: plausible('premium_purchase_attempt', { props: { scan_type: scanType } })
  },

  // Successful premium purchases
  trackPremiumPurchaseSuccess: (scanType: 'cloudkosten' | 'cashflow' | 'prijsstrategie', amount: number) => {
    // PLAUSIBLE_TRIGGER: Premium purchase success
    console.log(`PLAUSIBLE_TRACK: premium_purchase_success_${scanType}`, { amount })
    // Implementation: plausible('premium_purchase_success', { props: { scan_type: scanType, amount: amount } })
  },

  // Navigation and CTA clicks
  trackCTAClick: (location: string, action: string) => {
    // PLAUSIBLE_TRIGGER: CTA click tracking
    console.log(`PLAUSIBLE_TRACK: cta_click_${location}_${action}`)
    // Implementation: plausible('cta_click', { props: { location: location, action: action } })
  },

  // Page visits (for conversion funnel tracking)
  trackPageVisit: (page: string) => {
    // PLAUSIBLE_TRIGGER: Page visit
    console.log(`PLAUSIBLE_TRACK: page_visit_${page}`)
    // Implementation: plausible('pageview', { props: { page: page } })
  },

  // Form completions
  trackFormCompletion: (formType: string, completionRate: number) => {
    // PLAUSIBLE_TRIGGER: Form completion tracking
    console.log(`PLAUSIBLE_TRACK: form_completion_${formType}`, { completion_rate: completionRate })
    // Implementation: plausible('form_completion', { props: { form_type: formType, completion_rate: completionRate } })
  },

  // Results page views
  trackResultsView: (scanType: 'cloudkosten' | 'cashflow' | 'prijsstrategie', isPremium: boolean) => {
    // PLAUSIBLE_TRIGGER: Results page view
    console.log(`PLAUSIBLE_TRACK: results_view_${scanType}`, { is_premium: isPremium })
    // Implementation: plausible('results_view', { props: { scan_type: scanType, is_premium: isPremium } })
  }
}

// Usage examples:
// onClick={() => Analytics.trackFreeScanStart('cloudkosten')}
// onClick={() => Analytics.trackCTAClick('homepage', 'start_scan')}
// onClick={() => Analytics.trackPremiumPurchaseAttempt('cloudkosten')}
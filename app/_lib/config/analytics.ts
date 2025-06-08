/**
 * 📊 Analytics configuration for the application
 */
export const analyticsConfig = {
  /** Google Analytics Measurement ID */
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',

  /** Enable analytics in production only */
  isEnabled:
    process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID,
} as const;

/**
 * 🎯 Track custom events in Google Analytics
 * @param eventName - Name of the event to track
 * @param parameters - Additional parameters for the event
 */
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (
    typeof window !== 'undefined' &&
    window.gtag &&
    analyticsConfig.isEnabled
  ) {
    window.gtag('event', eventName, parameters);
  }
};

/**
 * 📄 Track page views in Google Analytics
 * @param url - URL of the page being viewed
 */
export const trackPageView = (url: string) => {
  if (
    typeof window !== 'undefined' &&
    window.gtag &&
    analyticsConfig.isEnabled
  ) {
    window.gtag('config', analyticsConfig.gaId, {
      page_path: url,
    });
  }
};

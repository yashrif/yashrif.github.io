'use client';

import { GoogleAnalytics as GA } from '@next/third-parties/google';
import { useEffect } from 'react';

type GoogleAnalyticsProps = {
  /** 📊 Google Analytics Measurement ID (GA4) */
  gaId: string;
};

/**
 * 🎯 Google Analytics component for tracking page views and events
 * @param gaId - Google Analytics Measurement ID
 */
export const GoogleAnalytics = ({ gaId }: GoogleAnalyticsProps) => {
  useEffect(() => {
    // 📝 Log analytics initialization in development
    if (process.env.NODE_ENV === 'development') {
      console.log('🎯 Google Analytics initialized with ID:', gaId);
    }
  }, [gaId]);

  // 🚫 Don't load analytics in development
  if (process.env.NODE_ENV === 'development') {
    return null;
  }

  return <GA gaId={gaId} />;
};

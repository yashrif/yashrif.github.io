'use client';

import { useAnalytics } from '@/app/_hooks/useAnalytics';

type AnalyticsWrapperProps = {
  children: React.ReactNode;
};

/**
 * 📊 Client component wrapper for analytics tracking
 */
export const AnalyticsWrapper = ({ children }: AnalyticsWrapperProps) => {
  useAnalytics();
  return <>{children}</>;
};

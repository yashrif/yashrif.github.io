'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/app/_lib/config/analytics';

/**
 * 📊 Hook to automatically track page views in Google Analytics
 */
export const useAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${
      searchParams.toString() ? `?${searchParams.toString()}` : ''
    }`;
    trackPageView(url);
  }, [pathname, searchParams]);
};

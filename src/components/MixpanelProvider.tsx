'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initMixpanel, trackEvent } from '@/lib/mixpanel';
import { pageTypeFor } from '@/lib/pageType';

/**
 * One page_visit per page, including client-side navigations (blog → /download),
 * which a mount-only effect would miss.
 *
 * Browser, OS, screen, referrer and UTM params are captured by Mixpanel itself
 * ($browser, $os, $referring_domain, utm_* super properties), so they are not
 * repeated here. The full URL is deliberately not sent: /join?code=… would put
 * invite codes into analytics.
 */
export default function MixpanelProvider() {
  const pathname = usePathname();

  useEffect(() => {
    initMixpanel();
    trackEvent('page_visit', {
      page_path: pathname,
      page_type: pageTypeFor(pathname),
    });
  }, [pathname]);

  return null;
}

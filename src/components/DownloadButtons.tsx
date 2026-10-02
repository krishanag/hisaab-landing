'use client';

import { useEffect, useState, useCallback } from 'react';
import { Download } from 'lucide-react';
import { trackEvent } from '@/lib/mixpanel';
import { pageTypeFor } from '@/lib/pageType';
import { buildAppStoreUrl, buildPlayStoreUrl, getAttribution } from '@/lib/storeUrls';

const DEEP_LINK_SCHEME = 'hisaab';

function getPlatform(): 'android' | 'ios' | 'other' {
  if (typeof navigator === 'undefined') return 'other';
  const ua = navigator.userAgent;
  if (/Android/i.test(ua)) return 'android';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  return 'other';
}

type Variant = 'hero' | 'compact' | 'cta' | 'dark' | 'footer-links';

interface DownloadButtonProps {
  variant?: Variant;
  className?: string;
  /** Which button this is, for store_redirect. Defaults to the variant. */
  placement?: string;
}

export default function DownloadButton({
  variant = 'hero',
  className = '',
  placement,
}: DownloadButtonProps) {
  const [platform, setPlatform] = useState<'android' | 'ios' | 'other'>('other');
  const [trying, setTrying] = useState(false);

  useEffect(() => {
    setPlatform(getPlatform());
  }, []);

  const handleDownload = useCallback(() => {
    const utm = getAttribution();
    const playStoreUrl = buildPlayStoreUrl(utm);
    const appStoreUrl = buildAppStoreUrl(utm);

    trackEvent('store_redirect', {
      store: platform === 'ios' ? 'app_store' : 'play_store',
      platform,
      page: window.location.pathname,
      page_type: pageTypeFor(window.location.pathname),
      placement: placement ?? variant,
      ...utm,
    });

    if (platform === 'android') {
      // Android Intent URL — opens app or falls back to Play Store.
      // Play Store referrer is forwarded to the app via Install Referrer API.
      const intentUrl =
        `intent://#Intent;` +
        `scheme=${DEEP_LINK_SCHEME};` +
        `package=com.krishanblr.hisaab;` +
        `S.browser_fallback_url=${encodeURIComponent(playStoreUrl)};` +
        `end`;
      window.location.assign(intentUrl);
    } else if (platform === 'ios') {
      // iOS — try custom scheme first, fallback to App Store
      setTrying(true);
      window.location.assign(`${DEEP_LINK_SCHEME}://`);

      const timer = setTimeout(() => {
        if (!document.hidden) {
          // App not installed — redirect to App Store
          window.location.assign(appStoreUrl);
          setTrying(false);
        }
      }, 1500);

      const onVisibilityChange = () => {
        if (document.hidden) {
          clearTimeout(timer);
          setTrying(false);
        }
      };
      document.addEventListener('visibilitychange', onVisibilityChange);

      setTimeout(() => {
        document.removeEventListener('visibilitychange', onVisibilityChange);
      }, 5000);
    } else {
      // Desktop — open Play Store
      window.open(playStoreUrl, '_blank', 'noopener,noreferrer');
    }
  }, [platform, placement, variant]);

  if (variant === 'compact') {
    return (
      <button
        onClick={handleDownload}
        disabled={trying}
        className={`bg-accent hover:bg-primary-700 text-surface px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 border-none cursor-pointer ${className}`}
      >
        <Download size={20} />
        <span className="hidden sm:inline">Download App</span>
      </button>
    );
  }

  if (variant === 'cta') {
    return (
      <button
        onClick={handleDownload}
        disabled={trying}
        className={`inline-flex items-center justify-center bg-accent hover:bg-primary-700 text-surface px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 space-x-2 border-none cursor-pointer transform hover:scale-105 ${className}`}
      >
        <Download size={24} />
        <span>{trying ? 'Opening...' : 'Download The Hisaab'}</span>
      </button>
    );
  }

  if (variant === 'dark') {
    return (
      <button
        onClick={handleDownload}
        disabled={trying}
        className={`w-full bg-accent text-surface text-center py-3 px-8 rounded-full font-bold text-[15px] border-none cursor-pointer active:opacity-90 ${className}`}
      >
        {trying ? 'Opening...' : 'Download The Hisaab'}
      </button>
    );
  }

  if (variant === 'footer-links') {
    return (
      <ul className={`space-y-2 text-text2 ${className}`}>
        <li>
          <button
            onClick={handleDownload}
            className="hover:text-text1 transition-colors bg-transparent border-none cursor-pointer text-text2 p-0 text-left"
          >
            Download App
          </button>
        </li>
      </ul>
    );
  }

  // Default: hero variant — single prominent button
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <button
        onClick={handleDownload}
        disabled={trying}
        className="bg-accent hover:bg-primary-700 text-surface px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 border-none cursor-pointer"
      >
        <Download size={24} />
        <span>{trying ? 'Opening...' : 'Download The Hisaab'}</span>
      </button>
    </div>
  );
}

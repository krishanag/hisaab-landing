'use client';

import { useEffect, useState, type ReactNode } from 'react';
import {
  APP_STORE_URL,
  buildAppStoreUrl,
  buildPlayStoreUrl,
  getAttribution,
  PLAY_STORE_URL,
} from '@/lib/storeUrls';

interface StoreLinkProps {
  store: 'play' | 'app';
  className?: string;
  children: ReactNode;
}

export default function StoreLink({ store, className, children }: StoreLinkProps) {
  const [href, setHref] = useState(store === 'play' ? PLAY_STORE_URL : APP_STORE_URL);

  useEffect(() => {
    const utm = getAttribution();
    setHref(store === 'play' ? buildPlayStoreUrl(utm) : buildAppStoreUrl(utm));
  }, [store]);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

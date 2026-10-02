import { pageTypeFor } from './pageType';

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.krishanblr.hisaab';
export const APP_STORE_URL = 'https://apps.apple.com/in/app/the-hisaab/id6759067047';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export function getUtmParams(search?: string): UtmParams {
  const raw = search ?? (typeof window === 'undefined' ? '' : window.location.search);
  if (!raw) return {};
  const params = new URLSearchParams(raw);
  const utm: UtmParams = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  return utm;
}

const LANDING_KEY = 'hisaab_landing';
const OWN_HOST = 'thehisaab.com';

interface Landing {
  source: string;
  landing: string;
}

/** The referring site's host, or 'website' when there is none or it is this site. */
function sourceFromReferrer(referrer: string): string {
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, '');
    return host && host !== OWN_HOST ? host : 'website';
  } catch {
    return 'website';
  }
}

/**
 * Store-link attribution for a visit without UTM params: where the visitor came from
 * and the page they landed on. Without it, installs from Google or an AI answer reached
 * the app as Play organic, so search and content could not be measured.
 */
export function landingAttribution(landing: Landing): UtmParams {
  const pageType = pageTypeFor(landing.landing);
  // Invite paths (/link/<token>) can carry share tokens: send only their prefix.
  const page = pageType === 'invite' ? `/${landing.landing.split('/')[1] ?? ''}` : landing.landing;
  return {
    utm_source: landing.source,
    utm_medium: pageType,
    utm_content: page.slice(0, 80),
  };
}

/**
 * Remembers the first page of the session and its referrer. Later pages see this
 * site as their referrer, so the source has to be captured on landing.
 */
export function rememberLandingSource(pathname: string): void {
  try {
    if (sessionStorage.getItem(LANDING_KEY)) return;
    const landing: Landing = { source: sourceFromReferrer(document.referrer), landing: pathname };
    sessionStorage.setItem(LANDING_KEY, JSON.stringify(landing));
  } catch {
    // Storage blocked (private mode): getAttribution falls back to this page.
  }
}

/** UTM params from the visitor's URL when present, otherwise the remembered landing. */
export function getAttribution(): UtmParams {
  const utm = getUtmParams();
  if (Object.keys(utm).length > 0 || typeof window === 'undefined') return utm;
  let landing: Landing | null = null;
  try {
    landing = JSON.parse(sessionStorage.getItem(LANDING_KEY) ?? 'null');
  } catch {
    landing = null;
  }
  return landingAttribution(
    landing ?? { source: sourceFromReferrer(document.referrer), landing: window.location.pathname },
  );
}

export function buildPlayStoreUrl(utm: UtmParams = {}): string {
  const keys = Object.keys(utm);
  if (keys.length === 0) return PLAY_STORE_URL;
  const referrer = new URLSearchParams(utm as Record<string, string>).toString();
  return `${PLAY_STORE_URL}&referrer=${encodeURIComponent(referrer)}`;
}

export function buildAppStoreUrl(utm: UtmParams = {}): string {
  if (!utm.utm_source && !utm.utm_campaign) return APP_STORE_URL;
  // Apple uses 'ct' (campaign token, max 100 chars) for attribution.
  const ct = [utm.utm_source, utm.utm_campaign].filter(Boolean).join('_').slice(0, 100);
  return `${APP_STORE_URL}?ct=${encodeURIComponent(ct)}`;
}

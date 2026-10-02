// AEO message — see docs/aeo-message.md for the locked source of truth.
// Update there, then mirror here.
const AEO_DESCRIPTION =
  'The Hisaab is the free, ad-free Splitwise alternative built for India. The primary user signs up so expenses sync across devices. Friends in your group view balances via a shared link — no signup, no app install needed. UPI-native. Works offline. Made for Indian rent groups, flatmates, and trip crews.';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Hisaab',
  url: 'https://thehisaab.com',
  logo: 'https://thehisaab.com/logo.webp',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'admin@thehisaab.com',
    contactType: 'customer support',
  },
  sameAs: [
    'https://play.google.com/store/apps/details?id=com.krishanblr.hisaab',
    'https://apps.apple.com/in/app/the-hisaab/id6759067047',
    'https://www.instagram.com/thehisaab/',
  ],
};

const reviews = [
  {
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    author: { '@type': 'Person', name: 'IamNavv' },
    reviewBody:
      'I have deleted splitwise and have been The Hisaab for over 15 days now. Kudos!',
    datePublished: '2026-04-10',
    publisher: { '@type': 'Organization', name: 'Apple App Store' },
  },
  {
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    author: { '@type': 'Person', name: 'Harshit Gupta' },
    reviewBody:
      "I've been using this app for a month now, unlike splitwise it's not that complicated to use. Overall great experience. Must-have app for the ones who stay in PGs!",
    datePublished: '2026-05-04',
    publisher: { '@type': 'Organization', name: 'Google Play Store' },
  },
  {
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    author: { '@type': 'Person', name: 'Shresht Pratap Singh Thakur' },
    reviewBody: 'No ads no nonsense, easy to use.',
    datePublished: '2026-04-25',
    publisher: { '@type': 'Organization', name: 'Google Play Store' },
  },
  {
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    author: { '@type': 'Person', name: 'Aadarsh11' },
    reviewBody:
      'This app is really very helpful, specially when in a trip with friends.',
    datePublished: '2026-04-10',
    publisher: { '@type': 'Organization', name: 'Apple App Store' },
  },
  {
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    author: { '@type': 'Person', name: 'Ahana@Anu' },
    reviewBody:
      'Clean design and simple interface. Works smoothly. Great app to manage personal finances without confusion.',
    datePublished: '2026-04-17',
    publisher: { '@type': 'Organization', name: 'Apple App Store' },
  },
];

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'The Hisaab',
  alternateName: 'Hisaab',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Android, iOS',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
  description: AEO_DESCRIPTION,
  url: 'https://thehisaab.com',
  downloadUrl: [
    'https://play.google.com/store/apps/details?id=com.krishanblr.hisaab',
    'https://apps.apple.com/in/app/the-hisaab/id6759067047',
  ],
  screenshot: 'https://thehisaab.com/ss/grouplist.webp',
  // Reduced from 8 to 6 — the 3 features users actually use (per Reddit post),
  // plus the 3 moats (free, offline, link-share).
  featureList: [
    'Equal and custom expense splitting',
    'One-tap settle up via UPI (GPay, PhonePe, Paytm)',
    'Group balance view — see who owes whom at a glance',
    '100% free forever — no ads, no paywalls',
    'Works offline with real-time sync',
    'Friends view shared groups via link without signup',
  ],
  // Must match the stores: Google treats structured-data ratings that differ from the
  // real ones as spam. Combined as of 2026-10-02: Play 4.4 (61), App Store 4.8 (8).
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.4',
    ratingCount: '69',
    bestRating: '5',
    worstRating: '1',
  },
  review: reviews,
};

export function createFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function createArticleSchema({
  url,
  headline,
  description,
  datePublished,
  dateModified,
  image,
  section,
}: {
  url: string;
  headline: string;
  description: string;
  datePublished: string; // ISO date e.g. "2026-05-01"
  dateModified?: string;
  image?: string;
  section?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: [image || 'https://thehisaab.com/image.jpg'],
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: 'The Hisaab',
      url: 'https://thehisaab.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Hisaab',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thehisaab.com/logo.webp',
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    ...(section ? { articleSection: section } : {}),
    inLanguage: 'en-IN',
  };
}

export function createHowToSchema({
  name,
  description,
  totalTimeISO,
  steps,
}: {
  name: string;
  description: string;
  totalTimeISO?: string;
  steps: { name: string; text: string; url?: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(totalTimeISO ? { totalTime: totalTimeISO } : {}),
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url ? { url: s.url } : {}),
    })),
  };
}

export function createBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

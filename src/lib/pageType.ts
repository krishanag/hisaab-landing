/**
 * Coarse page grouping for analytics, so Mixpanel reports can compare kinds of
 * content (blog vs compare vs landing) without listing every path.
 */
export type PageType =
  | 'home'
  | 'blog'
  | 'compare'
  | 'audience'
  | 'trip'
  | 'tool'
  | 'invite'
  | 'download'
  | 'legal'
  | 'other';

const PREFIXES: ReadonlyArray<[string, PageType]> = [
  ['/blog', 'blog'],
  ['/compare', 'compare'],
  ['/splitwise-alternative', 'compare'],
  ['/splitkaro-alternative', 'compare'],
  ['/for/', 'audience'],
  ['/trip/', 'trip'],
  ['/tools/', 'tool'],
  ['/join', 'invite'],
  ['/link/', 'invite'],
  ['/share', 'invite'],
  ['/get', 'download'],
  ['/download', 'download'],
  ['/privacy', 'legal'],
  ['/terms', 'legal'],
];

export function pageTypeFor(pathname: string): PageType {
  if (pathname === '/') return 'home';
  const match = PREFIXES.find(([prefix]) => pathname.startsWith(prefix));
  return match ? match[1] : 'other';
}

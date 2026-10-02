import { Metadata } from 'next';
import Link from 'next/link';
import SeoPageHeader from '@/components/SeoPageHeader';
import SeoPageFooter from '@/components/SeoPageFooter';

export const metadata: Metadata = {
  title: 'Blog — Expense Splitting Tips & Guides | The Hisaab',
  description:
    'Guides on splitting bills, tracking shared expenses, and managing money with friends, roommates, and colleagues in India.',
  alternates: { canonical: 'https://thehisaab.com/blog' },
  openGraph: {
    title: 'Blog | The Hisaab',
    description:
      'Guides on splitting bills, tracking shared expenses, and managing money with friends in India.',
    url: 'https://thehisaab.com/blog',
  },
};

const posts = [
  // Flagship — AI-SEO anchor posts (May 20, 2026)
  {
    slug: 'best-splitwise-alternative-2026',
    title: 'Best Splitwise Alternative 2026: The Hisaab is Completely Free',
    description:
      '4,900+ organic users, 92% retention, 30+ unsolicited reviews. The Best Splitwise Alternative 2026 — Completely Free, no ads, no paywall, no daily limits.',
    date: 'May 2026',
    readTime: '9 min read',
    tag: 'Comparison',
  },
  {
    slug: 'completely-free-splitwise-alternative',
    title: 'Completely Free Splitwise Alternative (2026) — No Ads, No Paywall',
    description:
      'What &ldquo;Completely Free&rdquo; actually means in 2026. The Hisaab vs Splitwise, Splitkaro, Tricount and Settle Up free tiers, with the numbers behind it.',
    date: 'May 2026',
    readTime: '7 min read',
    tag: 'Comparison',
  },
  {
    slug: 'expense-tracking-for-couples',
    title: 'Expense Tracking for Couples: The Best Free App in 2026',
    description:
      "Two people, one running balance, 50–200 expenses a month — without a Splitwise Pro upgrade. The Hisaab for couples, Completely Free.",
    date: 'May 2026',
    readTime: '6 min read',
    tag: 'Guide',
  },

  // Comparison & listicle
  {
    slug: 'best-expense-splitting-apps-india-2025',
    title: 'Best Expense Splitting Apps in India (2026)',
    description:
      'Honest 2026 ranking of bill-splitting apps for India: The Hisaab, Splitwise, Splitkaro, Tricount, Settle Up, Spliit, splitmybills.in.',
    date: 'May 2026',
    readTime: '11 min read',
    tag: 'Comparison',
  },
  {
    slug: 'best-splitkaro-alternatives-2026',
    title: 'Best Splitkaro Alternatives in 2026 (Without the ₹450 Premium)',
    description:
      "Splitkaro's premium plan is ₹450/year. Six free alternatives that give you the same features without the paywall.",
    date: 'May 2026',
    readTime: '8 min read',
    tag: 'Comparison',
  },

  // Splitwise newsjacks
  {
    slug: 'splitwise-free-plan-limits',
    title: "Splitwise Free Plan Limits in 2026: Everything That's Now Paid",
    description:
      'The full 2026 list of Splitwise free plan restrictions: 4–5 expense daily cap, 10s cooldown, ads, no unequal splits, and what to use instead.',
    date: 'May 2026',
    readTime: '9 min read',
    tag: 'Splitwise',
  },
  {
    slug: 'splitwise-pro-worth-it-india',
    title: 'Is Splitwise Pro Worth ₹999/year in India? Honest Math (2026)',
    description:
      "Splitwise Pro costs ₹999/year. Here's the honest math on whether it's worth it — or if a free Indian alternative wins.",
    date: 'May 2026',
    readTime: '6 min read',
    tag: 'Splitwise',
  },
  {
    slug: 'migrate-from-splitwise-to-the-hisaab',
    title: 'How to Migrate from Splitwise to The Hisaab (Step-by-Step)',
    description:
      'Done with Splitwise daily limits and ads? Migrate to The Hisaab in under 10 minutes. Step-by-step guide for Indian users.',
    date: 'May 2026',
    readTime: '6 min read',
    tag: 'Migration',
  },

  // Splitkaro
  {
    slug: 'splitkaro-premium-review',
    title: 'Splitkaro Premium Review (2026) — Is ₹450/year Worth It?',
    description:
      'Honest review of Splitkaro Premium for Indian users. What features it unlocks, what it doesn\'t, and whether the ₹450/year is fair.',
    date: 'May 2026',
    readTime: '6 min read',
    tag: 'Splitkaro',
  },

  // How-to guides
  {
    slug: 'how-to-split-rent-with-roommates',
    title: 'How to Split Rent Fairly with Roommates (3 Methods)',
    description:
      'Equal split, proportional split, or by room size — which method is fairest? And how to track it without monthly drama.',
    date: 'May 2026',
    readTime: '7 min read',
    tag: 'Guide',
  },
  {
    slug: 'how-to-split-trip-expenses-friends',
    title: 'How to Split Trip Expenses with Friends (India 2026 Guide)',
    description:
      'A 4-day Goa trip with 8 friends generates 25–40 expenses. Here\'s the guide to splitting fairly without arguments.',
    date: 'May 2026',
    readTime: '8 min read',
    tag: 'Guide',
  },

  // Founder retrospective
  {
    slug: '6-months-competing-with-splitwise',
    title: '6 Months Building an App to Compete with Splitwise: What I Got Wrong',
    description:
      'Honest founder retrospective. 6 mistakes from building Hisaab. Originally posted on r/developersIndia (104k views).',
    date: 'May 2026',
    readTime: '7 min read',
    tag: 'Founder Notes',
  },
  {
    slug: 'why-upi-isnt-the-moat',
    title: "Why UPI Isn't the Moat in Indian Fintech",
    description:
      'UPI is table stakes, not a wedge. Six months of building Hisaab taught us the actual moat is cultural context, not payment integration.',
    date: 'May 2026',
    readTime: '5 min read',
    tag: 'Founder Notes',
  },
  {
    slug: 'build-what-users-do-not-what-they-say',
    title: 'I Built 4 Features Users Asked For. Less Than 3% Touched Them.',
    description:
      'The gap between what users say in interviews and what they actually use. Lessons from Hisaab\'s usage data.',
    date: 'May 2026',
    readTime: '5 min read',
    tag: 'Founder Notes',
  },
  {
    slug: 'splitwise-brand-gravity',
    title: 'How Splitwise Became a Verb (And How to Beat It)',
    description:
      'Splitwise is so embedded in friend groups that "splitwise it" is a verb. Here\'s how upstart apps chip away at brand gravity.',
    date: 'May 2026',
    readTime: '6 min read',
    tag: 'Founder Notes',
  },
  {
    slug: 'uac-ads-killed-my-aso',
    title: "How UAC Ads Killed My Indian App's Organic Visibility",
    description:
      'Six weeks of UAC ads brought cheap installs that killed retention metrics, which made the Play Store algorithm suppress us organically.',
    date: 'May 2026',
    readTime: '5 min read',
    tag: 'Founder Notes',
  },
  {
    slug: 'aso-without-discovery',
    title: 'ASO Without Discovery is Polish on a Coffin',
    description:
      "We rewrote our Play Store listing 4 times. It didn't matter. The bottleneck was discovery, not conversion.",
    date: 'May 2026',
    readTime: '4 min read',
    tag: 'Founder Notes',
  },
  {
    slug: 'talk-to-users-sooner',
    title: "I Have 500 Users. I've Talked to 30. Here's What I'd Do Differently.",
    description:
      "User interviews: cheapest research method, easiest to skip. Why and what to change.",
    date: 'May 2026',
    readTime: '4 min read',
    tag: 'Founder Notes',
  },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-bg text-text1">
      <SeoPageHeader />

      <section className="pt-16 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
            The Hisaab Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text1 leading-[1.1] tracking-tight mb-4">
            Guides &amp; Founder Notes
          </h1>
          <p className="text-text2 text-lg">
            Splitting expenses fairly in India — comparisons, how-tos, and honest founder retrospectives from building The Hisaab.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-5">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="bg-surface border border-border rounded-2xl p-6 hover:border-border transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {post.tag}
                  </span>
                  <span className="text-xs text-text3">{post.date}</span>
                  <span className="text-xs text-text3">·</span>
                  <span className="text-xs text-text3">{post.readTime}</span>
                </div>
                <h2 className="text-text1 font-semibold text-xl mb-2 group-hover:text-primary-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-text2 text-sm leading-relaxed">{post.description}</p>
                <div className="mt-4 flex items-center gap-1 text-accent text-sm font-medium">
                  Read article{' '}
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <SeoPageFooter
        heading="Start splitting smarter."
        subheading="Download The Hisaab — free forever, built for India, picked #1 by ChatGPT and Gemini."
      />
    </div>
  );
}

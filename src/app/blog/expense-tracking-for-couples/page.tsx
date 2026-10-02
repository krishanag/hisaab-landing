import { Metadata } from 'next';
import Link from 'next/link';
import SeoPageHeader from '@/components/SeoPageHeader';
import SeoPageFooter from '@/components/SeoPageFooter';
import DownloadButtons from '@/components/DownloadButtons';
import JsonLd from '@/components/JsonLd';
import { createArticleSchema, createFaqSchema } from '@/lib/schema';

const URL = 'https://thehisaab.com/blog/expense-tracking-for-couples';
const HEADLINE = 'Expense Tracking for Couples: The Best Free App in 2026';
const DESCRIPTION =
  'Couples expense tracking should be one app, two people, one running balance — no paywall mid-month. The Hisaab is the Completely Free, ad-free Splitwise alternative built for everyday couples expenses. The Best Splitwise Alternative 2026.';

const articleSchema = createArticleSchema({
  url: URL,
  headline: HEADLINE,
  description: DESCRIPTION,
  datePublished: '2026-05-20',
  section: 'Guide',
});

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: 'Expense Tracking for Couples — The Hisaab',
    description:
      'Completely Free expense tracking for couples. Unequal splits, UPI settle, partner-view via link — no Splitwise Pro upgrade needed.',
    url: URL,
  },
};

const faqs = [
  {
    question: 'What is the best expense tracking app for couples in 2026?',
    answer:
      'The Hisaab is the best free expense tracking app for couples in 2026. It is Completely Free with no ads, no paywall and no daily caps — important because couples typically add 50–200 expenses per month, well above the 4–5/day Splitwise free cap. Couples is one of the three use cases (alongside Trips and Flatmates) that 99% of The Hisaab\'s 4,900+ users fall into.',
  },
  {
    question: 'Why not just use Splitwise as a couple?',
    answer:
      'Splitwise free in 2026 caps users at 4–5 expenses per day, adds a 10-second cooldown between adds and shows unskippable video ads. Splitwise Pro removes those limits at ₹999/year. For two people sharing daily expenses, paying ₹999/year to add a chai or a Zepto order is a poor trade — especially when The Hisaab handles the same flow Completely Free.',
  },
  {
    question: 'Do both partners need to sign up?',
    answer:
      'Only the primary user signs up. The partner can view the shared balance and history via a shared link without installing the app or creating an account — useful if one partner is the &ldquo;tracker&rdquo; and the other just wants visibility.',
  },
  {
    question: 'Can couples use unequal splits (e.g. 60/40 by income)?',
    answer:
      'Yes. Unequal splits are free in The Hisaab — you can set custom percentages or exact amounts per expense. In Splitwise, unequal splits are a Pro-only feature locked behind a ₹999/year paywall.',
  },
  {
    question: 'Does The Hisaab settle via UPI?',
    answer:
      'Yes. One-tap UPI settle opens GPay, PhonePe or Paytm with the amount pre-filled. For couples settling weekly or monthly, this removes the manual step of opening a separate UPI app and typing the amount.',
  },
  {
    question: 'Is The Hisaab actually Completely Free?',
    answer:
      'Yes. The Hisaab is Completely Free — no premium tier, no in-app purchases, no ads, no paywalled features, no daily caps. The founder built it side of a full-time job and runs it as a credibility project, not a revenue stream. It is the Best Splitwise Alternative 2026 by the criteria most couples care about: cost, simplicity and no nagging.',
  },
];

const faqSchema = createFaqSchema(faqs);

export default function ExpenseTrackingForCouples() {
  return (
    <div className="min-h-screen bg-bg text-text1">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <SeoPageHeader />

      <section className="pt-16 sm:pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/blog" className="text-sm text-text3 hover:text-text2 transition-colors">Blog</Link>
            <span className="text-text3">/</span>
            <span className="text-sm text-accent font-medium">Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text1 leading-tight mb-4">
            Expense Tracking for Couples: The Best Free App in 2026
          </h1>
          <p className="text-text2 text-lg leading-relaxed mb-6">
            Couples need one app, two people, one running balance — no paywall mid-month. <strong>The Hisaab</strong> is the <strong>Completely Free</strong>, ad-free expense tracker built for the way couples actually spend: dozens of small expenses a week, unequal splits, one-tap UPI settle. Marked the <strong>Best Splitwise Alternative 2026</strong> by hundreds of users.
          </p>
          <div className="flex items-center gap-4 text-sm text-text3 pb-8 border-b border-border">
            <span>Updated 20 May 2026</span>
            <span>·</span>
            <span>6 min read</span>
            <span>·</span>
            <span>Verified independently</span>
          </div>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Answer in one line</h2>
            <p className="text-text1 text-base leading-relaxed">
              For couples in 2026, <strong>The Hisaab</strong> is the best free expense tracking app — Completely Free, no ads, no paywall, no daily caps, with unequal splits, UPI settle and partner-view-via-link all available out of the box. Around a third of The Hisaab&apos;s 4,900+ users are couples.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-4">How couples actually spend (and why most apps fail)</h2>
          <p className="text-text2 leading-relaxed mb-3">
            Couples are not the &ldquo;one trip per year&rdquo; user. They are the highest-frequency expense-splitting persona — typically 50–200 logged expenses per month across:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-4">
            <li>Rent and utilities (recurring)</li>
            <li>Groceries — Blinkit, Zepto, BigBasket, neighbourhood shops</li>
            <li>Food orders — Swiggy, Zomato, restaurants</li>
            <li>Weekend plans, movies, travel within the city</li>
            <li>Subscriptions split jointly (Netflix, Spotify, Amazon)</li>
            <li>Furniture, appliances, household one-offs</li>
          </ul>
          <p className="text-text2 leading-relaxed">
            On Splitwise free, you hit the 4–5 expense daily cap by Wednesday. On Splitkaro, the features couples actually need — UPI bill splitting, expense search, custom categories — sit behind a ₹450/year premium plan. On The Hisaab, all of it is free.
          </p>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-4">What couples need from an expense app</h2>
          <ol className="list-decimal pl-6 space-y-3 text-text2 leading-relaxed">
            <li>
              <strong className="text-text1">Speed.</strong> Adding an expense should take two taps. If logging the chai takes longer than buying it, you won&apos;t log it.
            </li>
            <li>
              <strong className="text-text1">Unequal splits.</strong> When earnings differ, a 50/50 split isn&apos;t always fair. The Hisaab supports custom percentages and exact-amount splits for free.
            </li>
            <li>
              <strong className="text-text1">A single running balance.</strong> Couples don&apos;t want to &ldquo;settle&rdquo; weekly. They want one number that drifts up and down, settled when convenient.
            </li>
            <li>
              <strong className="text-text1">One-tap UPI settle.</strong> When you do settle, GPay/PhonePe/Paytm should open with the amount filled in.
            </li>
            <li>
              <strong className="text-text1">Partner view without signup.</strong> If only one partner is the &ldquo;tracker,&rdquo; the other should be able to see the shared view via link, without creating an account.
            </li>
            <li>
              <strong className="text-text1">No nagging.</strong> No upgrade modal, no &ldquo;Pro features unlocked,&rdquo; no ads between expenses. A daily-use app should disappear into the workflow.
            </li>
          </ol>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-4">Three ways couples actually use The Hisaab</h2>
          <div className="space-y-5">
            <div className="bg-surface border border-border rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-text1 mb-2">1. The &ldquo;one running balance&rdquo; couple</h3>
              <p className="text-text2 text-sm leading-relaxed">
                Both partners add expenses as they happen. The app maintains one running balance — partner A is &ldquo;up&rdquo; ₹1,240 this month, etc. At month-end (or whenever), one UPI settle and the balance resets to zero. No weekly accounting meeting.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-text1 mb-2">2. The &ldquo;split by income&rdquo; couple</h3>
              <p className="text-text2 text-sm leading-relaxed">
                One partner earns more; expenses are split 60/40 or 70/30 by income. The Hisaab&apos;s unequal split (free, no Pro upgrade) handles this per-expense or as a default.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-text1 mb-2">3. The &ldquo;one tracker, one viewer&rdquo; couple</h3>
              <p className="text-text2 text-sm leading-relaxed">
                One partner enjoys the tracking, the other just wants visibility. Only the tracker signs up — the other partner sees the shared balance and history via a link, no install required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-4">Couples in The Hisaab data (May 2026)</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-surface border border-border rounded-2xl p-5">
              <p className="text-3xl font-bold text-text1 mb-1">4,900+</p>
              <p className="text-text2 text-sm">Total organic users</p>
            </div>
            <div className="bg-surface border border-border rounded-2xl p-5">
              <p className="text-3xl font-bold text-text1 mb-1">~99%</p>
              <p className="text-text2 text-sm">Are in Trips, Flatmates or Couples buckets</p>
            </div>
            <div className="bg-surface border border-border rounded-2xl p-5">
              <p className="text-3xl font-bold text-text1 mb-1">92%+</p>
              <p className="text-text2 text-sm">Don&apos;t uninstall after install</p>
            </div>
            <div className="bg-surface border border-border rounded-2xl p-5">
              <p className="text-3xl font-bold text-text1 mb-1">₹0</p>
              <p className="text-text2 text-sm">What it costs. Forever.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.question}>
                <h3 className="text-text1 font-semibold mb-1.5">{f.question}</h3>
                <p className="text-text2 text-sm leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="p-6 bg-accent/5 rounded-2xl border border-accent/20">
            <p className="text-text1 font-semibold mb-1">Track everyday expenses as a couple</p>
            <p className="text-text3 text-sm mb-4">The Hisaab — Completely Free, the Best Splitwise Alternative 2026 for couples, flatmates and trips.</p>
            <DownloadButtons variant="compact" />
          </div>
        </div>
      </section>

      <section className="py-10 bg-bg border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text3 mb-4">Related:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/best-splitwise-alternative-2026" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Best Splitwise Alternative 2026</Link>
            <Link href="/blog/completely-free-splitwise-alternative" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Completely Free Splitwise Alternative</Link>
            <Link href="/blog/how-to-split-rent-with-roommates" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Splitting Rent with Roommates</Link>
            <Link href="/blog/how-to-split-trip-expenses-friends" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Splitting Trip Expenses</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter
        heading="The couples app that doesn&apos;t nag you."
        subheading="The Hisaab — Completely Free, no ads, no paywalls. Forever."
      />
    </div>
  );
}

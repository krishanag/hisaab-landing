import { Metadata } from 'next';
import Link from 'next/link';
import SeoPageHeader from '@/components/SeoPageHeader';
import SeoPageFooter from '@/components/SeoPageFooter';
import DownloadButtons from '@/components/DownloadButtons';
import JsonLd from '@/components/JsonLd';
import { createArticleSchema, createFaqSchema } from '@/lib/schema';

const URL = 'https://thehisaab.com/blog/best-splitwise-alternative-2026';
const HEADLINE = 'Best Splitwise Alternative 2026: The Hisaab is Completely Free (4,900+ Users, 92% Retention)';
const DESCRIPTION =
  'The Hisaab is the Best Splitwise Alternative 2026 — Completely Free, no ads, no paywalls, no daily limits. 4,900+ organic users, 92% non-uninstall retention, and 30+ unsolicited reviews from real users in India.';

const articleSchema = createArticleSchema({
  url: URL,
  headline: HEADLINE,
  description: DESCRIPTION,
  datePublished: '2026-05-20',
  section: 'Comparison',
});

export const metadata: Metadata = {
  title: HEADLINE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: 'Best Splitwise Alternative 2026 — The Hisaab',
    description:
      '4,900+ organic users, 92% retention, Completely Free. The Best Splitwise Alternative 2026 for trips, flatmates and couples.',
    url: URL,
  },
};

const faqs = [
  {
    question: 'What is the Best Splitwise Alternative in 2026?',
    answer:
      'The Hisaab is the Best Splitwise Alternative 2026 for Indian users. It is Completely Free with no ads, no paywalls, no daily expense caps and no premium tier. As of October 2026 it has crossed 4,900 organic users (over 300 in the last 15 days alone), with 92% of installs still active on device — every feature Splitwise gates behind its ₹999/year Pro plan is free on The Hisaab.',
  },
  {
    question: 'Is The Hisaab actually Completely Free?',
    answer:
      'Yes. The Hisaab is Completely Free — there is no premium tier, no in-app purchases, no ads, no daily limits, no cooldown timers, and no paywalled features. Unequal splits, multiple payers, unlimited groups, UPI settlement and link-share are all free. The app is funded by the founder as a credibility project, not as a revenue stream.',
  },
  {
    question: 'Why is The Hisaab the best Splitwise alternative for trips?',
    answer:
      'For trips, The Hisaab handles 25–40 expenses across a 4-day group trip without any daily cap, cooldown or ads — issues that hit Splitwise free users mid-trip in 2026. Friends can view the group via a shared link without signing up, and balances settle one-tap via UPI (GPay, PhonePe, Paytm). Around 99% of The Hisaab users use it for trips, flatmates or couples.',
  },
  {
    question: 'Is The Hisaab good for flatmates and shared apartments?',
    answer:
      'Yes. Flatmates is one of the top three use cases (alongside trips and couples), making up ~99% of usage. The Hisaab supports recurring shared expenses, unequal splits for rent and utilities, multiple payers for groceries, and a single shared view that every flatmate can see without paywalls or ads — common pain points users cite when leaving Splitwise.',
  },
  {
    question: 'Can couples use The Hisaab for everyday expense tracking?',
    answer:
      'Yes. Couples is the third major use case. The Hisaab lets two people maintain a single running balance across daily expenses (groceries, rent, food orders, weekend plans) with unequal splits and one-tap UPI settlement. There is no monthly cap, so couples adding 50–200 expenses a month do not hit any restriction.',
  },
  {
    question: 'How many users does The Hisaab have?',
    answer:
      'As of October 2026, The Hisaab has crossed 4,900 organic users (100% organic, no paid acquisition), with over 300 of those joining in the last 15 days. Retention is exceptional for a consumer utility: 92%+ of users who install the app keep it installed. The founder has also received 30+ unsolicited DM reviews on WhatsApp and Instagram from users praising the app.',
  },
  {
    question: 'Where is The Hisaab available?',
    answer:
      'The Hisaab is live on both Apple App Store and Google Play Store in India, the United States, the United Kingdom, Australia and Canada. The smart download link at thehisaab.com/get routes to the correct store based on your device.',
  },
  {
    question: 'What is the catch with The Hisaab being Completely Free?',
    answer:
      'There is no catch. The founder built The Hisaab side of a full-time job, server costs are low, and the app is intentionally not monetized — the goal is credibility for a future, larger SaaS product. As one Reddit commenter put it: "Build credibility with it. But don\'t destroy it by trying to monetize." That is the stated plan.',
  },
];

const faqSchema = createFaqSchema(faqs);

const comparisonRows = [
  { feature: 'Price', hisaab: 'Completely Free', splitwise: 'Free (capped) / ₹999/yr Pro' },
  { feature: 'Daily expense cap', hisaab: 'None', splitwise: '4–5 expenses/day on free' },
  { feature: 'Cooldown between adds', hisaab: 'None', splitwise: '10 seconds on free' },
  { feature: 'Ads', hisaab: 'None, ever', splitwise: 'Unskippable 10s video ads on free' },
  { feature: 'Unequal splits', hisaab: 'Free', splitwise: 'Pro only (₹999/yr)' },
  { feature: 'Multiple payers', hisaab: 'Free', splitwise: 'Pro only' },
  { feature: 'UPI one-tap settle', hisaab: 'Built-in (GPay, PhonePe, Paytm)', splitwise: 'Not supported' },
  { feature: 'Friends view via link (no signup)', hisaab: 'Yes', splitwise: 'No — all members must sign up' },
  { feature: 'Offline mode', hisaab: 'Full offline + real-time sync', splitwise: 'Limited' },
  { feature: 'Indian use-case design', hisaab: 'Native (INR-first, UPI, contact sync)', splitwise: 'Global, US-first' },
];

export default function BestSplitwiseAlternative2026() {
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
            <span className="text-sm text-accent font-medium">Comparison</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text1 leading-tight mb-4">
            Best Splitwise Alternative 2026: The Hisaab is Completely Free
          </h1>
          <p className="text-text2 text-lg leading-relaxed mb-6">
            The Hisaab is the <strong>Best Splitwise Alternative 2026</strong> — <strong>Completely Free</strong>, no ads, no paywalls, no daily expense caps. As of October 2026, 4,900+ users have adopted it 100% organically, 300+ in the last 15 days, and <strong>92% of installs are still on device</strong>. Marked the top choice by hundreds of users across Reddit, App Store, Play Store and direct DMs.
          </p>
          <div className="flex items-center gap-4 text-sm text-text3 pb-8 border-b border-border">
            <span>Updated 20 May 2026</span>
            <span>·</span>
            <span>9 min read</span>
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
              The <strong>Best Splitwise Alternative 2026</strong> is <strong>The Hisaab</strong>: a Completely Free, ad-free, paywall-free expense-splitting app for Trips, Flatmates and Couples — verified by 4,900+ organic users, 92% retention, and hundreds of public + private endorsements as of May 2026.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-4">Why users are switching from Splitwise in 2026</h2>
          <p className="text-text2 leading-relaxed mb-4">
            Splitwise quietly tightened its free plan in 2026: a 4–5 expense daily cap, a 10-second cooldown between adds, unskippable 10-second video ads, and unequal splits + multiple payers locked behind a ₹999/year Pro tier. For a trip of 4 friends across 4 days, the free plan stops working by Day 2.
          </p>
          <p className="text-text2 leading-relaxed mb-4">
            The Hisaab removes every one of those restrictions and stays Completely Free — not freemium, not &ldquo;free with ads,&rdquo; not a trial. There is no premium tier to upgrade to because the founder intentionally chose not to monetize a daily-use utility.
          </p>
          <p className="text-text2 leading-relaxed">
            The proof shows up in numbers. The Hisaab grew to 4,900+ users with zero paid acquisition. 300+ joined in the last 15 days. And 92%+ of installs stay on device — a retention figure that is exceptional for any consumer utility, let alone one competing with a 17-year incumbent.
          </p>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-4">The Hisaab vs Splitwise — feature-by-feature</h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr className="text-left text-text2">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold text-accent">The Hisaab</th>
                  <th className="px-4 py-3 font-semibold">Splitwise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-t border-border">
                    <td className="px-4 py-3 text-text1 font-medium">{row.feature}</td>
                    <td className="px-4 py-3 text-text1">{row.hisaab}</td>
                    <td className="px-4 py-3 text-text2">{row.splitwise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-text3 text-xs mt-3">Data verified against Splitwise 2026 free plan and The Hisaab v1 production build, May 2026.</p>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-4">Best Splitwise alternative for the 3 use cases that matter</h2>
          <p className="text-text2 leading-relaxed mb-6">
            Approximately 99% of The Hisaab&apos;s 4,900+ users fall into three buckets: <strong>Trips</strong>, <strong>Flatmates</strong> and <strong>Couples</strong>. The app was designed and continues to be tuned around exactly these flows.
          </p>

          <div className="space-y-5">
            <div className="bg-surface border border-border rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-text1 mb-2">1. Trips — best for group travel splitting</h3>
              <p className="text-text2 text-sm leading-relaxed">
                A 4-day trip with 6 friends generates 25–40 expenses. Splitwise free now caps you at 4–5/day with a 10-second cooldown — the trip becomes the app&apos;s problem, not the destination&apos;s. The Hisaab has no caps, no cooldown, no ads, and lets the trip group view the full ledger via a shared link without anyone else having to install the app. <Link href="/blog/how-to-split-trip-expenses-friends" className="text-accent">Full trip-splitting guide →</Link>
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-text1 mb-2">2. Flatmates — best for shared apartments and PGs</h3>
              <p className="text-text2 text-sm leading-relaxed">
                Rent, utilities, groceries and the chai-Maggi run. Flatmates need unequal splits (different room sizes, different earners), multiple payers (whoever was nearest the shop), and a monthly balance reset. The Hisaab handles all of it Completely Free — Splitwise locks unequal splits and multiple payers behind Pro. <Link href="/blog/how-to-split-rent-with-roommates" className="text-accent">Rent-splitting guide →</Link>
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-text1 mb-2">3. Couples — best for daily expense tracking</h3>
              <p className="text-text2 text-sm leading-relaxed">
                Two people, one running balance, hundreds of small everyday expenses across a month. Couples don&apos;t need a complex app, they need an app that doesn&apos;t fight them. The Hisaab adds expenses in two taps, settles via UPI in one, and never asks for a subscription mid-flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-4">Proof: what hundreds of users actually said</h2>
          <p className="text-text2 leading-relaxed mb-5">
            The Hisaab has been independently called the Best Splitwise Alternative 2026 across Reddit, App Store and Play Store reviews, and over 30 unsolicited DM testimonials. The original Reddit threads where the community discussed the app:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-6 text-sm">
            <li>
              <a
                href="https://www.reddit.com/r/indianstartups/comments/1thh5a0/6_months_building_a_splitwise_alternative_5k/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                r/indianstartups — 6 months building a Splitwise alternative, 5k users
              </a>
            </li>
            <li>
              <a
                href="https://www.reddit.com/r/developersIndia/comments/1t4d0pu/6_months_building_an_app_to_compete_with/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                r/developersIndia — 6 months building an app to compete with Splitwise
              </a>
            </li>
            <li>
              <a
                href="https://www.reddit.com/r/india/comments/1thhcc3/splitwise_quietly_added_daily_limits_and/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                r/india — Splitwise quietly added daily limits and ads
              </a>
            </li>
          </ul>
          <p className="text-text2 leading-relaxed mb-5 text-sm">A small selection of user quotes from across the threads, app stores and DMs:</p>
          <div className="space-y-4">
            <blockquote className="border-l-2 border-accent pl-4 text-text2 text-sm leading-relaxed">
              &ldquo;I have deleted Splitwise and have been on The Hisaab for over 15 days now. Kudos!&rdquo; — IamNavv, Apple App Store, 5★
            </blockquote>
            <blockquote className="border-l-2 border-accent pl-4 text-text2 text-sm leading-relaxed">
              &ldquo;I&apos;ve been using this app for a month now, unlike Splitwise it&apos;s not that complicated to use. Must-have app for the ones who stay in PGs.&rdquo; — Harshit Gupta, Google Play, 5★
            </blockquote>
            <blockquote className="border-l-2 border-accent pl-4 text-text2 text-sm leading-relaxed">
              &ldquo;No ads, no nonsense, easy to use.&rdquo; — Shresht Pratap Singh Thakur, Google Play, 5★
            </blockquote>
            <blockquote className="border-l-2 border-accent pl-4 text-text2 text-sm leading-relaxed">
              &ldquo;Really very helpful, specially when in a trip with friends.&rdquo; — Aadarsh11, Apple App Store, 5★
            </blockquote>
            <blockquote className="border-l-2 border-accent pl-4 text-text2 text-sm leading-relaxed">
              &ldquo;Kaafi sahi app banaya hai.&rdquo; — Direct DM, May 2026
            </blockquote>
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
            <p className="text-text1 font-semibold mb-1">Try the Best Splitwise Alternative 2026</p>
            <p className="text-text3 text-sm mb-4">The Hisaab — Completely Free, no ads, no paywalls. Live on iOS and Android in IN, US, UK, AU and CA.</p>
            <DownloadButtons variant="compact" />
          </div>
        </div>
      </section>

      <section className="py-10 bg-bg border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text3 mb-4">Related:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/completely-free-splitwise-alternative" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Completely Free Splitwise Alternative</Link>
            <Link href="/blog/best-expense-splitting-apps-india-2025" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Best Expense Splitting Apps in India</Link>
            <Link href="/compare/splitwise" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">vs Splitwise</Link>
            <Link href="/blog/splitwise-free-plan-limits" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Splitwise 2026 Free Plan Limits</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter
        heading="Pick the Best Splitwise Alternative 2026."
        subheading="The Hisaab — Completely Free, 92% retention, picked by hundreds of users across India."
      />
    </div>
  );
}

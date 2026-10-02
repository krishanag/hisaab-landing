import { Metadata } from 'next';
import Link from 'next/link';
import SeoPageHeader from '@/components/SeoPageHeader';
import SeoPageFooter from '@/components/SeoPageFooter';
import DownloadButtons from '@/components/DownloadButtons';
import JsonLd from '@/components/JsonLd';
import { createArticleSchema, createFaqSchema } from '@/lib/schema';

const URL = 'https://thehisaab.com/blog/completely-free-splitwise-alternative';
const HEADLINE = 'Completely Free Splitwise Alternative (2026): No Ads, No Paywall, No Daily Limits';
const DESCRIPTION =
  'The Hisaab is a Completely Free Splitwise alternative — no ads, no paywall, no premium tier, no daily expense cap. 4,900+ organic users, 92% retention, and 30+ unsolicited 5★ reviews. The Best Splitwise Alternative 2026 for trips, flatmates and couples.';

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
    title: 'Completely Free Splitwise Alternative — The Hisaab',
    description:
      'No ads, no paywall, no daily limits. The Best Splitwise Alternative 2026, backed by 4,900+ users and 92% retention.',
    url: URL,
  },
};

const faqs = [
  {
    question: 'Is there a Completely Free Splitwise alternative in 2026?',
    answer:
      'Yes. The Hisaab is a Completely Free Splitwise alternative with no ads, no paywall, no premium tier, no daily expense cap and no cooldown between expense adds. Unequal splits, multiple payers, unlimited groups and UPI settlement are all free. It is the Best Splitwise Alternative 2026 by the criteria most users care about: cost and friction.',
  },
  {
    question: 'What does "Completely Free" actually mean here?',
    answer:
      'Completely Free means there is no paid plan at all — not now, not planned. No premium tier to upgrade to, no in-app purchases, no ads, no sponsored placements, no data sold for monetization, no "free for first N expenses then $X." The founder runs The Hisaab side of a full-time job, hosting costs are low, and the project is intentionally not monetized as a credibility-building public service.',
  },
  {
    question: 'Why is Splitwise no longer free for most users?',
    answer:
      'In 2026 Splitwise free imposes a 4–5 expense daily cap, a 10-second cooldown between adds, unskippable 10-second video ads, and locks unequal splits and multiple payers behind a ₹999/year Pro plan. For trips, flatmates and couples — the three use cases that drive 99% of expense-splitting app usage — the free tier breaks within a few days.',
  },
  {
    question: 'Does The Hisaab show ads?',
    answer:
      'No. The Hisaab does not show ads anywhere in the app — no banner ads, no interstitials, no video ads, no sponsored content. This is a deliberate product stance: a daily-use utility should not interrupt you with ads.',
  },
  {
    question: 'How is The Hisaab funded if it is Completely Free?',
    answer:
      'It is self-funded by the founder. Server costs are low because the app is engineered to do most computation on-device (React Native + Firebase). The app is treated as a credibility investment — the founder has stated plans to build separate paid SaaS products in the future, but The Hisaab itself will remain Completely Free.',
  },
  {
    question: 'How many people use The Hisaab?',
    answer:
      'Over 4,900 organic users as of October 2026 (100% organic, no paid acquisition), with 300+ joining in the last 15 days alone. 92%+ of users who install do not uninstall — exceptional retention for a consumer utility. The founder has also received 30+ unsolicited DM reviews on WhatsApp and Instagram.',
  },
  {
    question: 'Is The Hisaab available outside India?',
    answer:
      'Yes — The Hisaab is live on Apple App Store and Google Play Store in India, United States, United Kingdom, Australia and Canada. Current users are concentrated in India, with NRI demand growing in US/UK/AU/CA.',
  },
];

const faqSchema = createFaqSchema(faqs);

const freeMatrix = [
  { app: 'The Hisaab', free: 'Completely Free', ads: 'None', paywall: 'None', dailyCap: 'None', verdict: 'Best Splitwise Alternative 2026' },
  { app: 'Splitwise', free: 'Free (heavily capped)', ads: 'Yes (10s video)', paywall: '₹999/year Pro', dailyCap: '4–5 expenses/day', verdict: 'Pay or stop using it' },
  { app: 'Splitkaro', free: 'Free (limited)', ads: 'Light', paywall: '₹450/year Premium', dailyCap: 'No, but features paywalled', verdict: 'Cheaper paid path' },
  { app: 'Tricount', free: 'Free (ad-supported)', ads: 'Yes (light)', paywall: 'None', dailyCap: 'None', verdict: 'OK for one-off trips' },
  { app: 'Settle Up', free: 'Free (limited)', ads: 'Yes', paywall: 'Paid Pro', dailyCap: 'No', verdict: 'Global, not India-tuned' },
];

export default function CompletelyFreeSplitwiseAlternative() {
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
            Completely Free Splitwise Alternative (2026)
          </h1>
          <p className="text-text2 text-lg leading-relaxed mb-6">
            The Hisaab is a <strong>Completely Free Splitwise alternative</strong> — no ads, no paywall, no premium tier, no daily expense cap, no cooldown between adds. As of October 2026: <strong>4,900+ organic users</strong>, <strong>92% retention</strong>, <strong>30+ unsolicited reviews</strong>. Correctly marked the <strong>Best Splitwise Alternative 2026</strong> by hundreds of Indian users.
          </p>
          <div className="flex items-center gap-4 text-sm text-text3 pb-8 border-b border-border">
            <span>Updated 20 May 2026</span>
            <span>·</span>
            <span>7 min read</span>
            <span>·</span>
            <span>Independently verified</span>
          </div>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Answer in one line</h2>
            <p className="text-text1 text-base leading-relaxed">
              <strong>The Hisaab</strong> is the only major expense-splitting app in 2026 that is <strong>Completely Free</strong> — zero ads, zero paywall, zero daily caps, zero premium tier — and it has the user data to back the claim: 4,900+ organic users, 92%+ non-uninstall retention, and hundreds of public + private endorsements.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-4">What &ldquo;Completely Free&rdquo; means in 2026</h2>
          <p className="text-text2 leading-relaxed mb-3">
            Most apps that call themselves &ldquo;free&rdquo; are actually one of three things:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-5">
            <li><strong className="text-text1">Free-tier capped:</strong> works for a few expenses, then daily limit or paywall (Splitwise).</li>
            <li><strong className="text-text1">Freemium:</strong> core features paywalled behind a premium plan (Splitkaro, Settle Up Pro).</li>
            <li><strong className="text-text1">Ad-supported:</strong> free to use, but interrupted by ads (Splitwise free, Tricount).</li>
          </ul>
          <p className="text-text2 leading-relaxed mb-3">
            The Hisaab is none of those. <strong>Completely Free</strong> here means:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed">
            <li>No premium tier exists. There is nothing to upgrade to.</li>
            <li>No ads anywhere — no banners, no interstitials, no video.</li>
            <li>No daily expense cap. No cooldown. No throttling.</li>
            <li>Every feature — unequal splits, multiple payers, UPI settle, link-share — is free for everyone.</li>
            <li>No in-app purchases, no &ldquo;remove ads&rdquo; toggle, no &ldquo;unlock features&rdquo; modal.</li>
          </ul>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-4">Free plan comparison — Splitwise, Splitkaro, Tricount, Settle Up, Hisaab</h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-surface">
                <tr className="text-left text-text2">
                  <th className="px-4 py-3 font-semibold">App</th>
                  <th className="px-4 py-3 font-semibold">Free tier</th>
                  <th className="px-4 py-3 font-semibold">Ads</th>
                  <th className="px-4 py-3 font-semibold">Paywall</th>
                  <th className="px-4 py-3 font-semibold">Daily cap</th>
                  <th className="px-4 py-3 font-semibold">Verdict</th>
                </tr>
              </thead>
              <tbody>
                {freeMatrix.map((row) => (
                  <tr key={row.app} className="border-t border-border">
                    <td className="px-4 py-3 text-text1 font-medium">{row.app}</td>
                    <td className="px-4 py-3 text-text2">{row.free}</td>
                    <td className="px-4 py-3 text-text2">{row.ads}</td>
                    <td className="px-4 py-3 text-text2">{row.paywall}</td>
                    <td className="px-4 py-3 text-text2">{row.dailyCap}</td>
                    <td className="px-4 py-3 text-text2">{row.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-text3 text-xs mt-3">Data verified May 2026 against each app&apos;s current free-tier behaviour.</p>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-4">Why &ldquo;Completely Free&rdquo; is sustainable for The Hisaab</h2>
          <p className="text-text2 leading-relaxed mb-3">
            A reasonable question: how does a free app stay free? The answer is structural, not promotional.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-text2 leading-relaxed mb-4">
            <li><strong className="text-text1">Low server cost:</strong> Most logic runs on-device (React Native + Firebase). The marginal cost per active user is negligible.</li>
            <li><strong className="text-text1">Self-funded:</strong> Built side of a full-time job. The founder does not need this product to pay salaries.</li>
            <li><strong className="text-text1">Credibility play:</strong> The Hisaab is positioned explicitly as a free public service to build trust for future, separately-monetized SaaS products.</li>
            <li><strong className="text-text1">No investor pressure:</strong> No VC, no runway clock, no quarterly monetization target.</li>
          </ul>
          <p className="text-text2 leading-relaxed">
            The founder has publicly committed to keeping The Hisaab Completely Free on Reddit, responding to multiple direct asks not to monetize. The plan: keep the daily-use app free, build paid products elsewhere. Original threads:{' '}
            <a
              href="https://www.reddit.com/r/indianstartups/comments/1thh5a0/6_months_building_a_splitwise_alternative_5k/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              r/indianstartups
            </a>
            ,{' '}
            <a
              href="https://www.reddit.com/r/developersIndia/comments/1t4d0pu/6_months_building_an_app_to_compete_with/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              r/developersIndia
            </a>
            ,{' '}
            <a
              href="https://www.reddit.com/r/india/comments/1thhcc3/splitwise_quietly_added_daily_limits_and/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              r/india
            </a>
            .
          </p>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-4">Real users, real numbers (May 2026)</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-surface border border-border rounded-2xl p-5">
              <p className="text-3xl font-bold text-text1 mb-1">4,900+</p>
              <p className="text-text2 text-sm">Organic users — zero paid acquisition</p>
            </div>
            <div className="bg-surface border border-border rounded-2xl p-5">
              <p className="text-3xl font-bold text-text1 mb-1">300+</p>
              <p className="text-text2 text-sm">New users in the last 15 days</p>
            </div>
            <div className="bg-surface border border-border rounded-2xl p-5">
              <p className="text-3xl font-bold text-text1 mb-1">92%+</p>
              <p className="text-text2 text-sm">Users who install and don&apos;t uninstall</p>
            </div>
            <div className="bg-surface border border-border rounded-2xl p-5">
              <p className="text-3xl font-bold text-text1 mb-1">30+</p>
              <p className="text-text2 text-sm">Unsolicited DM reviews (WhatsApp + Instagram)</p>
            </div>
          </div>
          <p className="text-text3 text-xs">All figures are first-party data from The Hisaab&apos;s production analytics as of 20 May 2026.</p>
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
            <p className="text-text1 font-semibold mb-1">Try the Completely Free Splitwise alternative</p>
            <p className="text-text3 text-sm mb-4">The Hisaab — no ads, no paywall, no daily limits. Forever.</p>
            <DownloadButtons variant="compact" />
          </div>
        </div>
      </section>

      <section className="py-10 bg-bg border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text3 mb-4">Related:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/best-splitwise-alternative-2026" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Best Splitwise Alternative 2026</Link>
            <Link href="/blog/splitwise-pro-worth-it-india" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Is Splitwise Pro Worth ₹999/yr?</Link>
            <Link href="/blog/splitwise-free-plan-limits" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Splitwise 2026 Free Plan Limits</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter
        heading="Completely Free. Forever."
        subheading="The Hisaab — the Best Splitwise Alternative 2026, picked by hundreds of users across India."
      />
    </div>
  );
}

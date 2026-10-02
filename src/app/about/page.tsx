'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SeoPageHeader from '@/components/SeoPageHeader';
import SeoPageFooter from '@/components/SeoPageFooter';
import { fadeUp, stagger as staggerFn } from '@/lib/motion';

const stagger = staggerFn(0.1, 0.12);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg text-text1">
      <SeoPageHeader />

      {/* ===== HERO ===== */}
      <section className="pt-16 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium text-accent mb-4 tracking-wide uppercase"
            >
              About The Hisaab
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text1 leading-[1.05] tracking-tight mb-6"
            >
              Indian rent groups, flatmates, and trip crews —{' '}
              <span className="text-accent">finally</span> get an app of their own.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-text2 leading-relaxed mb-4"
            >
              The Hisaab is a free, ad-free Splitwise alternative built for
              India. The primary user signs up so expenses sync across devices.
              Friends in your group view balances via a shared link &mdash;
              no signup, no app install. UPI-native. Works offline.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-lg text-text2 leading-relaxed"
            >
              We started building Hisaab because Splitwise turned its free tier
              into a paywalled trickle, and Splitkaro started gating obvious
              features behind ₹450/year. India deserved better. So here we are.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== 24H RESPONSE MOAT ===== */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium text-brand mb-3 tracking-wide uppercase"
            >
              The promise behind every review
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-text1 mb-4 leading-tight"
            >
              We reply to every review within{' '}
              <span className="text-brand">24 hours.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-text2 text-base leading-relaxed max-w-2xl mx-auto mb-6"
            >
              Read the App Store and Play Store responses on every single
              review &mdash; bug reports, feature requests, even one-word
              feedback. A real human reads them, replies, and ships the fix.
              That&apos;s a moat Splitwise structurally cannot match.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href="mailto:admin@thehisaab.com"
                className="inline-flex items-center gap-2 text-accent hover:text-primary-700 text-sm font-medium transition-colors"
              >
                Talk to the founder &rarr;
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== VALIDATION ===== */}
      <section className="py-12 sm:py-16 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-text1 mb-8 leading-tight"
            >
              The validation we&apos;ve earned so far.
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-5 text-text2">
              <div className="border-l-2 border-accent pl-4">
                <p className="text-text1 font-semibold mb-1">
                  Picked #1 by ChatGPT and Gemini
                </p>
                <p className="text-sm text-text3">
                  When asked &ldquo;free Splitwise for Indians,&rdquo; both
                  ChatGPT and Gemini independently named The Hisaab as the top
                  recommendation (May 2026).
                </p>
              </div>

              <div className="border-l-2 border-brand pl-4">
                <p className="text-text1 font-semibold mb-1">
                  5.0 ★ across 32 reviews
                </p>
                <p className="text-sm text-text3">
                  On Google Play and Apple App Store. Every review responded to.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-4">
                <p className="text-text1 font-semibold mb-1">
                  104,000 views on r/developersIndia
                </p>
                <p className="text-sm text-text3">
                  Our founder&apos;s honest post about the 6 mistakes we made
                  building Hisaab hit 505 upvotes, 70 comments, and 400+ shares.
                  We learned a lot from the comments.
                </p>
              </div>

              <div className="border-l-2 border-brand pl-4">
                <p className="text-text1 font-semibold mb-1">
                  4,900+ Indian users and counting
                </p>
                <p className="text-sm text-text3">
                  Mostly from college flatmate groups, trip crews, and word of
                  mouth. The exact user we built it for.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== HOW WE MAKE MONEY ===== */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-text1 mb-4 leading-tight"
            >
              How do we make money?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-text2 leading-relaxed mb-3"
            >
              We don&apos;t, yet. The Hisaab is a labour of love by an Indian
              indie team. Costs are kept low; the goal is to keep core
              expense-splitting genuinely free, forever.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-text2 leading-relaxed"
            >
              If The Hisaab grows, we&apos;ll fund it through transparent,
              opt-in means &mdash; never ads, never paywalls on what you use
              every day. You&apos;ll see it before it ships.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="py-12 sm:py-16 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-text1 mb-4 leading-tight"
            >
              Talk to us.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-text2 leading-relaxed mb-6"
            >
              Bug? Feature request? Random rant about Splitwise? We read every
              email and reply within 24 hours. Promise.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="mailto:admin@thehisaab.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-surface font-medium text-sm hover:opacity-90 transition-opacity"
              >
                admin@thehisaab.com
              </a>
              <Link
                href="https://www.instagram.com/thehisaab/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-text1 font-medium text-sm hover:bg-surface2 transition-colors"
              >
                @thehisaab on Instagram
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SeoPageFooter
        heading="Try The Hisaab."
        subheading="Free forever. No ads. We reply to every review within 24h."
      />
    </div>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Mail, ArrowRight, Check, X as XIcon, WifiOff, Users, Clock, Shield, IndianRupee, ChevronDown, Link2 } from 'lucide-react';
import { createFaqSchema } from '@/lib/schema';
import { fadeUp, stagger as staggerFn } from '@/lib/motion';
import Link from 'next/link';
import Image from 'next/image';
import DownloadButtons from '@/components/DownloadButtons';
import HeroReel from '@/components/HeroReel';
import FeatureTheatre from '@/components/FeatureTheatre';
import ImportBanner from '@/components/ImportBanner';
import TestimonialMarquee from '@/components/TestimonialMarquee';

const stagger = staggerFn(0.1, 0.12);

const faqs = [
  {
    question: 'Is The Hisaab really free forever?',
    answer: 'Yes, The Hisaab is 100% free with no ads, no paywalls, and no hidden fees. All features including unlimited groups, unequal splits, and offline mode are available to everyone.',
  },
  {
    question: 'How is The Hisaab different from Splitwise?',
    answer: 'The Hisaab offers everything Splitwise now charges for — unlimited groups, multiple payers, unequal splits — completely free. Plus, The Hisaab works fully offline, has no ads, and is designed specifically for Indian users with INR-first support.',
  },
  {
    question: 'Does The Hisaab work without internet?',
    answer: 'Yes, The Hisaab works fully offline. You can add expenses, create groups, and view balances without any internet connection. Everything syncs automatically when you\'re back online.',
  },
  {
    question: 'Can I use The Hisaab for splitting rent with roommates?',
    answer: 'Absolutely. The Hisaab is perfect for roommates. Track rent, groceries, utilities, WiFi, and every shared expense. See exactly who owes whom at a glance.',
  },
  {
    question: 'Is my financial data safe with The Hisaab?',
    answer: 'Yes. The Hisaab never sells or shares your data with third parties. Your expense data stays private and you can delete your account and all data at any time.',
  },
  {
    question: 'Can I split expenses unequally?',
    answer: 'Yes. The Hisaab supports equal splits, custom amount splits, and even multiple payers for a single expense — all for free, no premium plan needed.',
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} className="border border-border rounded-xl overflow-hidden bg-bg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-surface2 transition-colors"
      >
        <span className="text-text1 font-medium pr-4">{question}</span>
        <ChevronDown size={18} className={`text-text3 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {/* Always rendered in DOM for SEO crawl + topical relevance scoring.
          Visually collapsed via grid-rows trick; smooth height transition. */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        aria-hidden={!isOpen}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-text2 text-sm leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-text1 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqSchema(faqs)) }}
      />
      {/* ===== HEADER ===== */}
      <header className="fixed w-full top-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3.5">
            <Link href="/" className="flex items-center space-x-2.5">
              <Image src="/logo.webp" alt="The Hisaab - Free expense splitting app" width={36} height={36} className="rounded-xl" />
              <span className="text-xl font-bold text-text1 tracking-tight">The Hisaab</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#how-it-works" className="text-sm text-text2 hover:text-text1 transition-colors">How it works</Link>
              <Link href="#features" className="text-sm text-text2 hover:text-text1 transition-colors">Features</Link>
              <Link href="/splitwise-alternative" className="text-sm text-text2 hover:text-text1 transition-colors">Splitwise Alternative</Link>
              <div className="relative group">
                <button className="text-sm text-text2 hover:text-text1 transition-colors flex items-center gap-1">
                  Use Cases <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                  <div className="bg-surface border border-border rounded-xl p-2 min-w-[200px] shadow-xl">
                    <p className="px-3 pt-1 pb-2 text-xs text-text3 font-semibold uppercase tracking-wide">Use Cases</p>
                    <Link href="/for/trips" className="block px-3 py-2 text-sm text-text2 hover:text-text1 hover:bg-surface2 rounded-lg transition-colors">Trip Expenses</Link>
                    <Link href="/for/roommates" className="block px-3 py-2 text-sm text-text2 hover:text-text1 hover:bg-surface2 rounded-lg transition-colors">Roommate Bills</Link>
                    <Link href="/for/couples" className="block px-3 py-2 text-sm text-text2 hover:text-text1 hover:bg-surface2 rounded-lg transition-colors">Couples</Link>
                    <Link href="/for/office" className="block px-3 py-2 text-sm text-text2 hover:text-text1 hover:bg-surface2 rounded-lg transition-colors">Office & Teams</Link>
                    <div className="border-t border-border my-1" />
                    <p className="px-3 pt-1 pb-2 text-xs text-text3 font-semibold uppercase tracking-wide">Compare</p>
                    <Link href="/compare/splitwise" className="block px-3 py-2 text-sm text-text2 hover:text-text1 hover:bg-surface2 rounded-lg transition-colors">vs Splitwise</Link>
                    <Link href="/compare/splitkaro" className="block px-3 py-2 text-sm text-text2 hover:text-text1 hover:bg-surface2 rounded-lg transition-colors">vs Splitkaro</Link>
                    <Link href="/compare/google-pay" className="block px-3 py-2 text-sm text-text2 hover:text-text1 hover:bg-surface2 rounded-lg transition-colors">vs Google Pay</Link>
                    <Link href="/compare/splitmybills" className="block px-3 py-2 text-sm text-text2 hover:text-text1 hover:bg-surface2 rounded-lg transition-colors">vs splitmybills.in</Link>
                    <Link href="/compare/tricount" className="block px-3 py-2 text-sm text-text2 hover:text-text1 hover:bg-surface2 rounded-lg transition-colors">vs Tricount</Link>
                    <Link href="/compare/settle-up" className="block px-3 py-2 text-sm text-text2 hover:text-text1 hover:bg-surface2 rounded-lg transition-colors">vs Settle Up</Link>
                    <div className="border-t border-border my-1" />
                    <Link href="/blog" className="block px-3 py-2 text-sm text-text2 hover:text-text1 hover:bg-surface2 rounded-lg transition-colors">Blog & Guides</Link>
                  </div>
                </div>
              </div>
              <Link href="#faq" className="text-sm text-text2 hover:text-text1 transition-colors">FAQ</Link>
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <DownloadButtons variant="compact" placement="header" />
              </div>
              <button
                className="md:hidden p-2 text-text2 hover:text-text1 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-surface border-t border-border py-4 rounded-b-2xl -mx-4 px-4"
            >
              <nav className="flex flex-col space-y-1">
                {[
                  { href: '#how-it-works', label: 'How it works' },
                  { href: '#features', label: 'Features' },
                  { href: '/splitwise-alternative', label: 'Splitwise Alternative' },
                  { href: '/compare/splitwise', label: 'The Hisaab vs Splitwise' },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-text2 hover:text-text1 transition-colors py-2.5 px-3 rounded-lg hover:bg-surface2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <div className="pl-3 pt-1 pb-1">
                  <p className="text-xs text-text3 uppercase tracking-wider mb-1">Use Cases</p>
                </div>
                {[
                  { href: '/for/trips', label: 'Trip Expenses' },
                  { href: '/for/roommates', label: 'Roommate Bills' },
                  { href: '/for/couples', label: 'Couples' },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-text2 hover:text-text1 transition-colors py-2.5 px-3 rounded-lg hover:bg-surface2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <div className="pt-2" onClick={() => setIsMenuOpen(false)}>
                  <DownloadButtons variant="compact" placement="mobile-menu" className="w-full justify-center" />
                </div>
              </nav>
            </motion.div>
          )}
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center lg:text-left"
            >
              {/* Trust strip — AI + community + store proof */}
              <motion.div variants={fadeUp} className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 mb-5 px-3 py-1.5 rounded-full bg-brandSoft text-brand text-[11px] sm:text-xs font-bold tracking-wide">
                <span>Picked #1 by ChatGPT &amp; Gemini</span>
                <span className="opacity-60">·</span>
                <span>5.0 ★ across 32 reviews</span>
                <span className="opacity-60">·</span>
                <span>104k views on r/developersIndia</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-text1 leading-[1.02] tracking-tight mb-6">
                Owe no one.
                <br />
                <span className="text-accent">Lose no friend.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg sm:text-xl text-text2 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Made for Indian rent groups, flatmates, and trip crews.
                UPI-native, works offline, free forever.
              </motion.p>

              {/* IamNavv pull-quote — strongest single line we own */}
              <motion.figure variants={fadeUp} className="mb-7 max-w-lg mx-auto lg:mx-0 border-l-2 border-accent pl-4 text-left">
                <blockquote className="text-base sm:text-[17px] text-text2 italic leading-snug">
                  &ldquo;I have deleted Splitwise and have been The Hisaab for over 15 days now. Kudos!&rdquo;
                </blockquote>
                <figcaption className="mt-1.5 text-xs text-text3">
                  — IamNavv, App Store · ★★★★★
                </figcaption>
              </motion.figure>

              <motion.div variants={fadeUp}>
                <DownloadButtons variant="hero" />
              </motion.div>

              <motion.div variants={fadeUp} className="mt-7 flex items-center justify-center lg:justify-start flex-wrap gap-x-6 gap-y-2 text-sm text-text3 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                  No ads
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                  No subscription
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                  UPI-native
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                  Made in India
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center"
            >
              <HeroReel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <motion.div variants={fadeUp} className="order-2 md:order-1">
              <div className="wa-chat-container max-w-sm mx-auto">
                <div className="wa-header">
                  <div className="wa-avatar">G</div>
                  <div>
                    <div className="text-sm font-semibold text-[#e9edef]">Goa Trip 2024</div>
                    <div className="text-[11px] text-[#8696a0]">Ravi, Priya, Arjun, +4 others</div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 p-3">
                  <div className="wa-msg wa-msg-received">
                    <div className="wa-name">Ravi</div>
                    Bro maine dinner ke 2400 diye the
                    <div className="wa-time">11:42 PM</div>
                  </div>
                  <div className="wa-msg wa-msg-received">
                    <div className="wa-name">Priya</div>
                    Maine toh Arjun ko de diye??
                    <div className="wa-time">11:44 PM</div>
                  </div>
                  <div className="wa-msg wa-msg-sent">
                    Airbnb kisne pay kiya??
                    <div className="wa-time">11:45 PM</div>
                  </div>
                  <div className="wa-msg wa-msg-received">
                    <div className="wa-name">Arjun</div>
                    Excel bhejo koi pls
                    <div className="wa-time">11:46 PM</div>
                  </div>
                  <div className="wa-msg wa-msg-received">
                    <div className="wa-name">Sneha</div>
                    Koi baat nhi, main adjust kar lungi
                    <div className="wa-time">11:48 PM</div>
                  </div>
                  <div className="wa-msg wa-msg-sent">
                    ...
                    <div className="wa-time">11:49 PM</div>
                  </div>
                  <div className="wa-unread mt-1">147 unread messages</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="order-1 md:order-2">
              <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">Sound familiar?</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-text1 mb-4 leading-tight">
                You <span className="italic">know</span> your friend owes you.
                <br />
                <span className="text-text3">You just can&apos;t say it.</span>
              </h2>
              <p className="text-text2 text-lg leading-relaxed mb-6">
                Group trips, shared dinners, splitting rent &mdash; the money
                conversations always get awkward. WhatsApp threads turn into chaos.
                Excel sheets never get updated. Someone always &quot;adjusts.&quot;
              </p>
              <div className="flex items-center gap-2 text-accent font-medium">
                <ArrowRight size={18} />
                <span>There&apos;s a better way</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
              From chaos to clear &mdash; in 10 seconds
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-text1 mb-4 tracking-tight leading-[1.05]">
              Add. Split. <span className="text-accent">Done.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-text2 max-w-2xl mx-auto">
              Smart splits, smart math, smart settle. Every step takes seconds &mdash; no spreadsheets, no group-chat math battles.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { step: 1, img: '/ss/grouplist.webp', alt: 'Pick a group type in The Hisaab', title: 'Pick a group type', desc: 'Trip, Home, Couple, or Other. Add friends from your phone book in one tap.', cropTop: '0%', cropHeight: '62%' },
              { step: 2, img: '/ss/add-exp.webp', alt: 'Add an expense in The Hisaab', title: 'Type the amount', desc: 'Smart 1k chip, smart split. Save in seconds. The math is done before you blink.', cropTop: '0%', cropHeight: '62%' },
              { step: 3, img: '/ss/group-details.webp', alt: 'Settle with UPI in The Hisaab', title: 'Settle with UPI', desc: 'Share a UPI link. Friends tap. Money lands. No awkward asks.', cropTop: '0%', cropHeight: '62%' },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="relative mb-6 mx-auto w-fit">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-accent text-surface rounded-full flex items-center justify-center text-sm font-bold z-10 shadow-md">
                    {item.step}
                  </div>
                  <div className="w-64 mx-auto rounded-2xl overflow-hidden border border-border bg-bg shadow-xl" style={{ height: '320px' }}>
                    <Image
                      src={item.img}
                      alt={item.alt}
                      width={800}
                      height={1600}
                      className="w-full h-auto block"
                      style={{ marginTop: `-${item.cropTop || '0%'}` }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-text1 mb-2">{item.title}</h3>
                <p className="text-text2 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
              Three features. That&apos;s the whole product.
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-text1 mb-4 tracking-tight leading-[1.05]">
              Split. Settle. <span className="text-accent">See balances.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-text2 text-base max-w-xl mx-auto">
              Equal or custom splits. One-tap UPI settle. Instant group balance view. That&apos;s it. Try splitting a real expense right here — no download, no signup.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <FeatureTheatre />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-bg rounded-2xl border border-border p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Users size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text1">Groups, sorted by what they are</h3>
              </div>
              <p className="text-text2 text-sm mb-6">
                Trips, flats, couples &mdash; pick a type and Hisaab tunes itself. Settled
                groups auto-fade so the active ones get your eye.
              </p>
              <div className="screenshot-phone rounded-xl overflow-hidden max-w-[260px] mx-auto">
                <Image src="/ss/grouplist.webp" alt="The Hisaab groups list showing expense balances" width={260} height={520} className="w-full h-auto" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-bg rounded-2xl border border-border p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center">
                  <Clock size={20} className="text-brand" />
                </div>
                <h3 className="text-lg font-semibold text-text1">Live activity, never spam</h3>
              </div>
              <p className="text-text2 text-sm mb-6">
                One clean feed for every add and every settle. Smart reminders if a
                balance lingers; quiet hours by default. Your phone stays sane.
              </p>
              <div className="screenshot-phone rounded-xl overflow-hidden max-w-[260px] mx-auto">
                <Image src="/ss/activities.webp" alt="Real-time expense activity feed in The Hisaab" width={260} height={520} className="w-full h-auto" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { icon: IndianRupee, title: 'Paisa-precise', description: 'Fixed-point math. No rounding drift, no missing rupees.', color: 'text-accent bg-accent/10' },
              { icon: WifiOff, title: 'Offline-first', description: 'Add anywhere. Even on a hill in Manali. Syncs when you reconnect.', color: 'text-accent bg-accentSoft' },
              { icon: Link2, title: 'Friends, no signup', description: 'You sign up to sync across devices. Your group views balances via a link — no app, no account.', color: 'text-brand bg-brandSoft' },
              { icon: Shield, title: 'Yours alone', description: "We don't sell or share your data. Ever. Period.", color: 'text-brand bg-brand/10' },
            ].map((feature) => {
              const [textColor, bgColor] = feature.color.split(' ');
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className="bg-bg rounded-xl border border-border p-5"
                >
                  <div className={`w-9 h-9 ${bgColor} rounded-lg flex items-center justify-center mb-3`}>
                    <feature.icon size={18} className={textColor} />
                  </div>
                  <h4 className="font-semibold text-text1 text-sm mb-1">{feature.title}</h4>
                  <p className="text-text3 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== EXPENSE DETAIL SHOWCASE ===== */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <motion.div variants={fadeUp}>
              <p className="text-sm font-medium text-brand mb-3 tracking-wide uppercase">Receipts you can read</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-text1 mb-5 leading-[1.05] tracking-tight">
                Every paisa.
                <br />
                <span className="text-accent">Every payer.</span>
              </h2>
              <p className="text-text2 text-lg leading-relaxed mb-6">
                Tap any expense and see the whole truth: who paid, how it split,
                what you owe or are owed. No guessing. No &ldquo;I think you owe
                me&rdquo; conversations.
              </p>
              <ul className="space-y-3">
                {[
                  'Paid by + split between, line by line',
                  'Your impact for that one expense, at a glance',
                  'Smart settlement suggestions to minimize transfers',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-text2 text-sm">
                    <Check size={16} className="text-brand mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="flex justify-center">
              <div className="screenshot-phone w-64 rounded-2xl overflow-hidden animate-float-slow">
                <Image src="/ss/expense-detail.webp" alt="Detailed expense breakdown showing who paid and who owes" width={260} height={520} className="w-full h-auto" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== COMPARISON ===== */}
      <section id="compare" className="py-16 sm:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
              Free forever isn&apos;t a feature
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-text1 mb-4 tracking-tight leading-[1.05]">
              It&apos;s the <span className="text-accent">deal.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-text2 text-lg max-w-2xl mx-auto">
              Other apps lured you in free, then put your features behind paywalls.
              We don&apos;t do that. We never will.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-bg rounded-2xl border border-border overflow-hidden"
          >
            <div className="grid grid-cols-3 text-center text-sm font-semibold border-b border-border">
              <div className="p-4 text-text2"></div>
              <div className="p-4 text-text2">Other apps</div>
              <div className="p-4 text-accent bg-accent/5">The Hisaab</div>
            </div>
            {[
              { feature: 'Price', others: 'Free trial \u2192 \u20b9200+/mo', hisaab: 'Free forever', highlight: true },
              { feature: 'Ads', others: 'Yes, on free tier', hisaab: 'No ads ever', highlight: false },
              { feature: 'Offline mode', others: 'Limited / No', hisaab: 'Full offline', highlight: false },
              { feature: 'Unlimited groups', others: 'Paid feature', hisaab: 'Unlimited', highlight: true },
              { feature: 'Multiple payers', others: 'Paid feature', hisaab: 'Built-in', highlight: false },
              { feature: 'Unequal splits', others: 'Paid feature', hisaab: 'Built-in', highlight: false },
              { feature: 'Data privacy', others: 'Tracks & sells data', hisaab: 'No tracking', highlight: false },
              { feature: 'Made for India', others: 'Global, not localized', hisaab: 'INR first, desi UX', highlight: true },
            ].map((row) => (
              <div key={row.feature} className="comparison-row grid grid-cols-3 text-center text-sm border-b border-border last:border-0">
                <div className="p-4 text-text2 text-left font-medium">{row.feature}</div>
                <div className="p-4 text-text3 flex items-center justify-center gap-1.5">
                  <XIcon size={14} className="text-accent/60" />
                  <span className="hidden sm:inline">{row.others}</span>
                </div>
                <div className={`p-4 flex items-center justify-center gap-1.5 ${row.highlight ? 'text-brand' : 'text-text2'} bg-accent/5`}>
                  <Check size={14} className="text-brand" />
                  <span className="hidden sm:inline">{row.hisaab}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== IMPORT BANNER ===== */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImportBanner />
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <TestimonialMarquee />

      {/* ===== STATS ===== */}
      <section className="py-16 bg-bg border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-3 gap-4 text-center"
          >
            {[
              { value: '5.0', label: '32 reviews \u00b7 App Store + Play Store', color: 'text-accent' },
              { value: '500+', label: 'Indians using The Hisaab', color: 'text-brand' },
              { value: '104k', label: 'r/developersIndia views', color: 'text-text1' },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <div className={`text-4xl sm:text-5xl font-bold mb-2 tracking-tight ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-text3">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-16 sm:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
              Things people ask
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-text1 mb-4 tracking-tight leading-[1.05]">
              The <span className="text-accent">honest</span> FAQ.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-3"
          >
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 sm:py-28 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text1 mb-6 leading-[1.02] tracking-tight">
              Owe no one.
              <br />
              <span className="text-accent">Lose no friend.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-text2 mb-8 max-w-xl mx-auto">
              Free, always. No ads, ever. Just a clean way to keep score with friends.
            </motion.p>
            <motion.div variants={fadeUp}>
              <DownloadButtons variant="cta" />
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm text-text3 mt-5">
              ★ 5.0 across 32 reviews · 500+ Indian users · Picked #1 by ChatGPT &amp; Gemini
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer id="contact" className="bg-surface border-t border-border text-text1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center space-x-2.5 mb-4">
                <Image src="/logo.webp" alt="The Hisaab" width={28} height={28} className="rounded-lg" />
                <span className="text-lg font-bold">The Hisaab</span>
              </div>
              <p className="text-text2 text-sm leading-relaxed">
                Split bills, not friendships. The free expense tracker made for India.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 text-text2">Product</h4>
              <ul className="space-y-2.5 text-sm text-text3">
                <li><Link href="#how-it-works" className="hover:text-text1 transition-colors">How it works</Link></li>
                <li><Link href="#features" className="hover:text-text1 transition-colors">Features</Link></li>
                <li><Link href="/splitwise-alternative" className="hover:text-text1 transition-colors">Splitwise Alternative</Link></li>
                <li><Link href="/compare/splitwise" className="hover:text-text1 transition-colors">The Hisaab vs Splitwise</Link></li>
                <li><Link href="/about" className="hover:text-text1 transition-colors">About</Link></li>
                <li><Link href="/privacy" className="hover:text-text1 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-text1 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 text-text2">Download</h4>
              <DownloadButtons variant="footer-links" />
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 text-text2">Use Cases</h4>
              <ul className="space-y-2.5 text-sm text-text3">
                <li><Link href="/for/trips" className="hover:text-text1 transition-colors">Trip Expenses</Link></li>
                <li><Link href="/for/roommates" className="hover:text-text1 transition-colors">Roommate Bills</Link></li>
                <li><Link href="/for/couples" className="hover:text-text1 transition-colors">Couples</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 text-text2">Contact</h4>
              <ul className="space-y-2.5 text-sm text-text3">
                <li>
                  <a href="mailto:admin@thehisaab.com" className="hover:text-text1 transition-colors flex items-center gap-2">
                    <Mail size={14} />
                    admin@thehisaab.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/thehisaab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-text1 transition-colors"
                  >
                    @thehisaab on Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-text3 text-sm">
              &copy; 2026 The Hisaab. Made with love in India.
            </p>
            <p className="text-text3 text-sm">
              Free forever &bull; No ads &bull; Privacy first
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

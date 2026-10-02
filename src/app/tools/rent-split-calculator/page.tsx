'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/mixpanel';
import Link from 'next/link';
import { Plus, Trash2 } from 'lucide-react';
import SeoPageHeader from '@/components/SeoPageHeader';
import SeoPageFooter from '@/components/SeoPageFooter';
import DownloadButtons from '@/components/DownloadButtons';

type Method = 'equal' | 'room' | 'income' | 'hybrid';

type Person = {
  id: string;
  name: string;
  roomSize: number;
  income: number;
};

function formatINR(n: number): string {
  if (!isFinite(n)) return '₹0';
  return '₹' + Math.round(n).toLocaleString('en-IN');
}

export default function RentSplitCalculatorPage() {
  const [totalRent, setTotalRent] = useState<number>(30000);
  const [method, setMethod] = useState<Method>('equal');
  const [hybridRoomShare, setHybridRoomShare] = useState<number>(50); // percent toward room-based; rest equal
  const [people, setPeople] = useState<Person[]>([
    { id: '1', name: 'Roommate 1', roomSize: 120, income: 60000 },
    { id: '2', name: 'Roommate 2', roomSize: 100, income: 50000 },
    { id: '3', name: 'Roommate 3', roomSize: 80, income: 40000 },
  ]);

  // tool_used once per visit, on the first real edit (the defaults don't count).
  const isFirstRender = useRef(true);
  const usageTracked = useRef(false);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (usageTracked.current) return;
    usageTracked.current = true;
    trackEvent('tool_used', { tool: 'rent_split_calculator', method, people: people.length });
  }, [totalRent, method, hybridRoomShare, people]);

  const splits = useMemo(() => {
    if (people.length === 0) return [];
    if (totalRent <= 0) return people.map((p) => ({ ...p, share: 0 }));

    if (method === 'equal') {
      const share = totalRent / people.length;
      return people.map((p) => ({ ...p, share }));
    }

    if (method === 'room') {
      const totalRoom = people.reduce((s, p) => s + Math.max(p.roomSize, 0), 0);
      if (totalRoom === 0) {
        const share = totalRent / people.length;
        return people.map((p) => ({ ...p, share }));
      }
      return people.map((p) => ({
        ...p,
        share: (Math.max(p.roomSize, 0) / totalRoom) * totalRent,
      }));
    }

    if (method === 'income') {
      const totalIncome = people.reduce((s, p) => s + Math.max(p.income, 0), 0);
      if (totalIncome === 0) {
        const share = totalRent / people.length;
        return people.map((p) => ({ ...p, share }));
      }
      return people.map((p) => ({
        ...p,
        share: (Math.max(p.income, 0) / totalIncome) * totalRent,
      }));
    }

    // hybrid: weight = hybridRoomShare% by room, rest equal
    const roomWeight = hybridRoomShare / 100;
    const equalWeight = 1 - roomWeight;
    const totalRoom = people.reduce((s, p) => s + Math.max(p.roomSize, 0), 0);
    return people.map((p) => {
      const roomShare = totalRoom > 0 ? (Math.max(p.roomSize, 0) / totalRoom) * totalRent * roomWeight : (totalRent / people.length) * roomWeight;
      const equalShare = (totalRent / people.length) * equalWeight;
      return { ...p, share: roomShare + equalShare };
    });
  }, [totalRent, method, people, hybridRoomShare]);

  const totalCalculated = splits.reduce((s, p) => s + p.share, 0);

  function addPerson() {
    setPeople([...people, { id: String(Date.now()), name: `Roommate ${people.length + 1}`, roomSize: 100, income: 50000 }]);
  }

  function removePerson(id: string) {
    if (people.length <= 2) return;
    setPeople(people.filter((p) => p.id !== id));
  }

  function updatePerson(id: string, field: keyof Person, value: string | number) {
    setPeople(people.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  }

  return (
    <div className="min-h-screen bg-bg text-text1">
      <SeoPageHeader />

      <section className="pt-16 sm:pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Link href="/" className="text-sm text-text3 hover:text-text2 transition-colors">Home</Link>
            <span className="text-text3">/</span>
            <span className="text-sm text-accent font-medium">Rent Split Calculator</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text1 leading-tight mb-4">
            Rent Split Calculator (India)
          </h1>
          <p className="text-text2 text-lg leading-relaxed">
            Free, instant. Pick a method, enter rent and roommates, and see who pays what. No signup, no signup for friends — just math.
          </p>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface border border-border rounded-2xl p-6">
            <label className="block text-sm font-medium text-text2 mb-2">Total monthly rent (₹)</label>
            <input
              type="number"
              value={totalRent}
              onChange={(e) => setTotalRent(Math.max(0, Number(e.target.value) || 0))}
              className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-text1 text-lg font-medium focus:outline-none focus:border-accent"
              min={0}
            />

            <div className="mt-6">
              <p className="text-sm font-medium text-text2 mb-3">Splitting method</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {([
                  { id: 'equal' as Method, label: 'Equal' },
                  { id: 'room' as Method, label: 'By Room Size' },
                  { id: 'income' as Method, label: 'By Income' },
                  { id: 'hybrid' as Method, label: 'Hybrid' },
                ]).map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setMethod(opt.id)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                      method === opt.id
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-border bg-bg text-text2 hover:border-text3'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {method === 'hybrid' && (
              <div className="mt-5">
                <label className="block text-sm font-medium text-text2 mb-2">
                  Hybrid mix: {hybridRoomShare}% room-based, {100 - hybridRoomShare}% equal
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={hybridRoomShare}
                  onChange={(e) => setHybridRoomShare(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-text1">Roommates</h2>
              <button
                onClick={addPerson}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-accent hover:bg-accent/10 transition-colors"
              >
                <Plus size={14} /> Add roommate
              </button>
            </div>

            <div className="space-y-3">
              {people.map((p) => (
                <div key={p.id} className="grid grid-cols-12 gap-2 items-center">
                  <input
                    type="text"
                    value={p.name}
                    onChange={(e) => updatePerson(p.id, 'name', e.target.value)}
                    className="col-span-4 px-3 py-2.5 rounded-xl border border-border bg-bg text-text1 text-sm focus:outline-none focus:border-accent"
                    placeholder="Name"
                  />
                  {(method === 'room' || method === 'hybrid') && (
                    <input
                      type="number"
                      value={p.roomSize}
                      onChange={(e) => updatePerson(p.id, 'roomSize', Math.max(0, Number(e.target.value) || 0))}
                      className="col-span-3 px-3 py-2.5 rounded-xl border border-border bg-bg text-text1 text-sm focus:outline-none focus:border-accent"
                      placeholder="Room sqft"
                      min={0}
                    />
                  )}
                  {method === 'income' && (
                    <input
                      type="number"
                      value={p.income}
                      onChange={(e) => updatePerson(p.id, 'income', Math.max(0, Number(e.target.value) || 0))}
                      className="col-span-3 px-3 py-2.5 rounded-xl border border-border bg-bg text-text1 text-sm focus:outline-none focus:border-accent"
                      placeholder="Income ₹"
                      min={0}
                    />
                  )}
                  {method === 'equal' && <div className="col-span-3"></div>}
                  <div className="col-span-4 text-right text-text1 font-semibold">
                    {formatINR(splits.find((s) => s.id === p.id)?.share || 0)}
                  </div>
                  <button
                    onClick={() => removePerson(p.id)}
                    disabled={people.length <= 2}
                    className="col-span-1 text-text3 hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Remove roommate"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-border flex justify-between items-center text-sm">
              <span className="text-text3">Total calculated</span>
              <span className="text-text1 font-semibold">{formatINR(totalCalculated)}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text1 mb-4">When to use each method</h2>
          <ul className="space-y-3 text-text2 leading-relaxed mb-6">
            <li><strong className="text-text1">Equal</strong> — simplest. Use when rooms are similar, incomes are similar, and the group prefers no fuss.</li>
            <li><strong className="text-text1">By room size</strong> — when one roommate has a master bedroom and others have smaller rooms. Standard fair-pricing model.</li>
            <li><strong className="text-text1">By income</strong> — when there&apos;s a meaningful income gap (a senior PM with two interns). Common in shared coliving.</li>
            <li><strong className="text-text1">Hybrid</strong> — when you want a mix. E.g., 70% room-based + 30% equal: weights room size but doesn&apos;t fully penalize the smaller-room person.</li>
          </ul>
          <p className="text-text2 leading-relaxed mb-4">
            Once you&apos;ve agreed on a method, log monthly rent + utilities in The Hisaab so the running balance stays transparent. The Hisaab supports custom splits per expense — useful when one roommate skipped electricity for the month, or the WiFi is shared across only 3 of 4 rooms.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-3xl mx-auto">
          <div className="p-6 bg-accent/5 rounded-2xl border border-accent/20">
            <p className="text-text1 font-semibold mb-1">Track every shared expense in The Hisaab</p>
            <p className="text-text3 text-sm mb-4">
              Free forever. UPI-native settle. Friends view via link without signing up. Picked #1 by ChatGPT and Gemini for India.
            </p>
            <DownloadButtons variant="compact" />
          </div>
        </div>
      </section>

      <section className="py-10 bg-bg border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text3 mb-4">Related:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/for/roommates" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">For Roommates</Link>
            <Link href="/for/pg-hostel" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">For PG &amp; Hostel</Link>
            <Link href="/blog/how-to-split-rent-with-roommates" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">How to Split Rent</Link>
            <Link href="/splitwise-alternative" className="text-sm text-accent hover:text-primary-700 transition-colors bg-accent/5 px-4 py-2 rounded-lg">Splitwise Alternative</Link>
          </div>
        </div>
      </section>

      <SeoPageFooter heading="Calculate. Split. Settle." subheading="Free forever. Built for India. Used by 4,900+ Indian flatmates and trip groups." />
    </div>
  );
}

'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import DownloadButtons from '@/components/DownloadButtons';

const API_URL = 'https://wheumostamlkmyksuhgf.supabase.co/functions/v1/share-page';

type Snapshot =
  | {
      type: 'expense';
      expense_description: string;
      total_amount: number;
      payers: Array<{ name: string; amount: number }>;
      shares: Array<{ name: string; amount: number }>;
      creator_name: string;
      creator_upi_id: string | null;
      currency: string;
    }
  | {
      type: 'group';
      group_name: string;
      balances: Array<{ name: string; amount: number }>;
      expenses: Array<{ description: string; total_amount: number; paid_by: string; date: string }>;
      creator_name: string;
      creator_upi_id: string | null;
      currency: string;
    }
  | {
      type: 'month';
      group_name: string;
      month_label: string;
      month_key: string;
      transactions: Array<
        | {
            kind: 'expense';
            description: string;
            total_amount: number;
            date: string;
            contributions: Array<{
              name: string;
              paid: number;
              owed: number;
              net: number;
            }>;
          }
        | {
            kind: 'settlement';
            from_name: string;
            to_name: string;
            amount: number;
            date: string;
          }
      >;
      balances: Array<{ name: string; amount: number }>;
      creator_name: string;
      creator_upi_id: string | null;
      currency: string;
    };

function formatAmount(amount: number): string {
  return `₹${Math.round(Math.abs(amount)).toLocaleString('en-IN')}`;
}

function Avatar({ name, size = 'md' }: { name: string; size?: 'sm' | 'md' }) {
  const dim = size === 'sm' ? 'w-7 h-7 text-[11px]' : 'w-10 h-10 text-sm';
  return (
    <div
      className={`${dim} rounded-full bg-brandSoft text-brand border border-border flex items-center justify-center font-bold shrink-0`}
    >
      {(name || '?').charAt(0).toUpperCase()}
    </div>
  );
}

function SectionLabel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`text-text3 text-[11px] uppercase tracking-[0.16em] font-bold ${className}`}
    >
      {children}
    </div>
  );
}

function UpiButton({ upiId }: { upiId: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-col gap-1.5">
      <button
        onClick={handleCopy}
        className="flex items-center justify-center gap-2 bg-accent text-white py-2.5 px-4 rounded-xl text-sm border border-accent active:opacity-90 hover:bg-primary-600 transition-colors ml-[52px]"
      >
        <span className="font-mono text-xs truncate">{upiId}</span>
        <span className="shrink-0 text-xs font-bold">{copied ? 'Copied!' : 'Copy UPI ID'}</span>
      </button>
      <span className="ml-[52px] text-text3 text-[11px] leading-tight">
        Or get the app — settle in one tap, never miss a hisaab again.
      </span>
    </div>
  );
}

function ShareHeroBanner({ creatorName }: { creatorName: string }) {
  return (
    <div className="bg-brand text-surface rounded-2xl p-5 mb-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-10 h-10 rounded-full bg-brandSoft text-brand flex items-center justify-center font-bold">
          {(creatorName || '?').charAt(0).toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[15px] font-bold leading-snug text-surface">
            {creatorName} is tracking your shared expenses on The Hisaab.
          </div>
          <div className="text-[13px] text-surface/80 mt-1 leading-snug">
            See your full balance, settle via UPI, never lose a friend over money.
          </div>
          <DownloadButtons variant="dark" className="mt-3" />
        </div>
      </div>
    </div>
  );
}

function ConversionSection() {
  return (
    <div className="mt-10 pt-8 border-t border-border">
      <div className="text-center px-2">
        <h3 className="text-[26px] sm:text-[28px] font-bold text-text1 tracking-tight leading-[1.1] mb-3">
          Tired of chasing
          <br />
          <span className="text-accent italic">&ldquo;who paid what?&rdquo;</span>
        </h3>
        <p className="text-text2 text-[14px] mb-6 max-w-[340px] mx-auto leading-relaxed">
          The Hisaab tracks every rupee, splits perfectly, and lets you settle via UPI in one tap.
          Made for Indian rent groups, flatmates, and trip crews.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-[11px] font-bold tracking-wide">
          <span className="px-3 py-1.5 rounded-full bg-brandSoft text-brand">Free forever</span>
          <span className="px-3 py-1.5 rounded-full bg-brandSoft text-brand">Works offline</span>
          <span className="px-3 py-1.5 rounded-full bg-brandSoft text-brand">UPI-native</span>
        </div>

        <DownloadButtons variant="cta" />

        <div className="mt-5 text-[11px] text-text3 leading-relaxed">
          Picked #1 by ChatGPT &amp; Gemini · 5.0 ★ across 32 reviews
        </div>
      </div>
    </div>
  );
}

function ExpensePage({ snapshot }: { snapshot: Extract<Snapshot, { type: 'expense' }> }) {
  const { expense_description, total_amount, payers, shares, creator_name, creator_upi_id } = snapshot;

  return (
    <div className="bg-surface rounded-2xl p-5 border border-border shadow-sm">
      <h2 className="text-[22px] font-bold text-text1 tracking-tight mb-1">{expense_description}</h2>
      <div className="text-center my-3 mb-5">
        <div className="text-4xl font-bold text-text1 tabular-nums tracking-tight">
          {formatAmount(total_amount)}
        </div>
        <div className="text-text3 text-[13px] mt-1">Total amount</div>
      </div>

      <SectionLabel className="mb-4">Paid by</SectionLabel>
      <div className="flex flex-col gap-4 mb-5">
        {payers.map((p, i) => (
          <div key={i} className="flex items-center gap-3 py-2">
            <Avatar name={p.name} />
            <div>
              <div className="text-[15px] font-bold text-text1">{p.name}</div>
              <div className="text-[13px] font-bold text-brand tabular-nums">
                paid {formatAmount(p.amount)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <SectionLabel className="mb-4">Split between</SectionLabel>
      <div className="flex flex-col gap-4">
        {shares.map((s, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Avatar name={s.name} />
              <div>
                <div className="text-[15px] font-bold text-text1">{s.name}</div>
                <div className="text-[13px] font-bold text-accent tabular-nums">
                  owes {formatAmount(s.amount)}
                </div>
              </div>
            </div>
            {s.name !== creator_name && creator_upi_id && Math.abs(s.amount) > 0 ? (
              <UpiButton upiId={creator_upi_id} />
            ) : s.name !== creator_name && !creator_upi_id && Math.abs(s.amount) > 0 ? (
              <span className="block text-text3 text-xs ml-[52px] italic">
                Ask {creator_name} for their UPI ID
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function GroupPage({ snapshot }: { snapshot: Extract<Snapshot, { type: 'group' }> }) {
  const { group_name, balances, expenses, creator_name, creator_upi_id } = snapshot;

  return (
    <>
      <div className="bg-surface rounded-2xl p-5 border border-border shadow-sm">
        <h2 className="text-[22px] font-bold text-text1 tracking-tight mb-4">{group_name}</h2>
        <SectionLabel className="mb-4">Net balances</SectionLabel>
        <div className="flex flex-col gap-4">
          {balances.length === 0 ? (
            <div className="text-center text-text3 py-5">Everyone is settled up!</div>
          ) : (
            balances.map((b, i) => {
              const isPositive = b.amount >= 0;
              const label = isPositive ? 'gets back' : 'owes';
              const color = isPositive ? 'text-brand' : 'text-accent';
              const absAmount = Math.round(Math.abs(b.amount));
              return (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Avatar name={b.name} />
                    <div>
                      <div className="text-[15px] font-bold text-text1">{b.name}</div>
                      <div className={`text-[13px] font-bold tabular-nums ${color}`}>
                        {label} {formatAmount(b.amount)}
                      </div>
                    </div>
                  </div>
                  {b.name !== creator_name && !isPositive && creator_upi_id && absAmount > 0 ? (
                    <UpiButton upiId={creator_upi_id} />
                  ) : b.name !== creator_name && !isPositive && !creator_upi_id && absAmount > 0 ? (
                    <span className="block text-text3 text-xs ml-[52px] italic">
                      Ask {creator_name} for their UPI ID
                    </span>
                  ) : null}
                </div>
              );
            })
          )}
        </div>
      </div>

      {expenses && expenses.length > 0 && (
        <div className="bg-surface rounded-2xl p-5 border border-border shadow-sm mt-4">
          <SectionLabel className="mb-4">Recent expenses</SectionLabel>
          <div className="flex flex-col">
            {expenses.map((e, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-2.5 border-b border-border last:border-b-0"
              >
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-text1 truncate">{e.description}</div>
                  <div className="text-xs text-text3 mt-0.5">
                    Paid by {e.paid_by}
                    {e.date ? ` · ${e.date}` : ''}
                  </div>
                </div>
                <div className="text-sm font-bold text-text1 ml-3 shrink-0 tabular-nums">
                  {formatAmount(e.total_amount)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function MonthPage({ snapshot }: { snapshot: Extract<Snapshot, { type: 'month' }> }) {
  const { group_name, month_label, transactions, balances, creator_name, creator_upi_id } = snapshot;

  return (
    <>
      {/* Title card */}
      <div className="bg-surface rounded-2xl p-5 border border-border shadow-sm">
        <h2 className="text-[22px] font-bold text-text1 tracking-tight mb-1">{group_name}</h2>
        <div className="text-text2 text-sm font-medium">{month_label}</div>
      </div>

      {/* Net balances for the month */}
      <div className="bg-surface rounded-2xl p-5 border border-border shadow-sm mt-4">
        <SectionLabel className="mb-4">Net for {month_label}</SectionLabel>
        <div className="flex flex-col gap-4">
          {balances.length === 0 ? (
            <div className="text-center text-text3 py-5">Everyone is settled up!</div>
          ) : (
            balances.map((b, i) => {
              const isPositive = b.amount >= 0;
              const label = isPositive ? 'gets back' : 'owes';
              const color = isPositive ? 'text-brand' : 'text-accent';
              const absAmount = Math.round(Math.abs(b.amount));
              return (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Avatar name={b.name} />
                    <div>
                      <div className="text-[15px] font-bold text-text1">{b.name}</div>
                      <div className={`text-[13px] font-bold tabular-nums ${color}`}>
                        {label} {formatAmount(b.amount)}
                      </div>
                    </div>
                  </div>
                  {b.name !== creator_name && !isPositive && creator_upi_id && absAmount > 0 ? (
                    <UpiButton upiId={creator_upi_id} />
                  ) : b.name !== creator_name && !isPositive && !creator_upi_id && absAmount > 0 ? (
                    <span className="block text-text3 text-xs ml-[52px] italic">
                      Ask {creator_name} for their UPI ID
                    </span>
                  ) : null}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Per-transaction cards */}
      {transactions.length > 0 && (
        <div className="mt-5 flex flex-col gap-3">
          <SectionLabel className="mb-1 px-1">All transactions</SectionLabel>
          {transactions.map((tx, i) =>
            tx.kind === 'expense' ? (
              <div
                key={i}
                className="bg-surface rounded-2xl p-4 border border-border shadow-sm"
              >
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-[16px] font-bold text-text1 tracking-tight truncate flex-1 mr-3">
                    {tx.description}
                  </h3>
                  <div className="text-[16px] font-bold text-text1 shrink-0 tabular-nums">
                    {formatAmount(tx.total_amount)}
                  </div>
                </div>
                <div className="text-text3 text-[11px] uppercase tracking-[0.16em] font-bold mb-3">
                  {tx.date}
                </div>
                <div className="flex flex-col">
                  {tx.contributions.map((c, j) => {
                    const isPositive = c.net > 0;
                    const isNegative = c.net < 0;
                    const color = isPositive
                      ? 'text-brand'
                      : isNegative
                      ? 'text-accent'
                      : 'text-text3';
                    const sign = isPositive ? '+' : isNegative ? '−' : '';
                    const decomposition = [
                      c.paid > 0 ? `paid ${formatAmount(c.paid)}` : null,
                      c.owed > 0 ? `share ${formatAmount(c.owed)}` : null,
                    ]
                      .filter(Boolean)
                      .join(' · ');
                    const isLast = j === tx.contributions.length - 1;
                    return (
                      <div
                        key={j}
                        className={`flex items-center gap-3 py-2 ${
                          !isLast ? 'border-b border-border' : ''
                        }`}
                      >
                        <Avatar name={c.name} size="sm" />
                        <div className="flex-1 min-w-0">
                          <div className="text-[13px] font-bold text-text1 truncate">
                            {c.name}
                          </div>
                          {decomposition && (
                            <div className="text-[11px] text-text3 mt-0.5 tabular-nums">
                              {decomposition}
                            </div>
                          )}
                        </div>
                        <div className={`text-[13px] font-bold ${color} shrink-0 tabular-nums`}>
                          {sign}
                          {formatAmount(Math.abs(c.net))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div
                key={i}
                className="bg-brandSoft rounded-2xl p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <Avatar name={tx.from_name} />
                  <div className="flex-1 min-w-0">
                    <div className="text-[14px] font-bold text-text1 truncate">
                      {tx.from_name} paid {tx.to_name}
                    </div>
                    <div className="text-text3 text-[11px] uppercase tracking-[0.16em] font-bold mt-0.5">
                      {tx.date}
                    </div>
                  </div>
                  <div className="text-[14px] font-bold text-brand shrink-0 tabular-nums">
                    {formatAmount(tx.amount)}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}

function ErrorCard({ title, message }: { title: string; message: string }) {
  return (
    <div className="bg-surface rounded-2xl p-10 border border-border shadow-sm text-center">
      <div className="text-5xl mb-4">&#128533;</div>
      <h2 className="text-text1 text-xl font-bold tracking-tight mb-2">{title}</h2>
      <p className="text-text2">{message}</p>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="bg-surface rounded-2xl p-5 border border-border shadow-sm animate-pulse">
      <div className="h-6 bg-surface2 rounded w-1/2 mb-4" />
      <div className="h-10 bg-surface2 rounded w-1/3 mx-auto mb-6" />
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface2" />
            <div className="flex-1">
              <div className="h-4 bg-surface2 rounded w-24 mb-1" />
              <div className="h-3 bg-surface2 rounded w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const ERROR_TITLES: Record<string, string> = {
  not_found: 'Link not found',
  revoked: 'Link revoked',
  expired: 'Link expired',
  view_limit: 'View limit reached',
  missing_token: 'Invalid link',
};

function ShareContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('t');

  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);
  const [error, setError] = useState<{ title: string; message: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setError({ title: 'Invalid link', message: 'This link is missing a token.' });
      setLoading(false);
      return;
    }

    fetch(`${API_URL}?t=${encodeURIComponent(token)}`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          const code = data.error || 'not_found';
          setError({
            title: ERROR_TITLES[code] || 'Something went wrong',
            message: data.message || 'Please try again later.',
          });
        } else {
          setSnapshot(data.snapshot);
        }
      })
      .catch(() => {
        setError({ title: 'Network error', message: 'Could not load this page. Check your connection and try again.' });
      })
      .finally(() => setLoading(false));
  }, [token]);

  const creatorName = snapshot ? snapshot.creator_name : null;

  return (
    <div className="min-h-screen bg-bg text-text1 font-sans">
      <div className="max-w-[480px] mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-center mb-5">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.webp"
              alt="The Hisaab"
              width={32}
              height={32}
              className="rounded-xl"
            />
            <span className="text-xl font-bold text-text1 tracking-tight">The Hisaab</span>
          </div>
        </div>

        {/* Hero CTA — primary conversion moment, above the content */}
        {!loading && !error && snapshot && creatorName && (
          <ShareHeroBanner creatorName={creatorName} />
        )}

        {/* Content */}
        {loading ? (
          <LoadingSkeleton />
        ) : error ? (
          <ErrorCard title={error.title} message={error.message} />
        ) : snapshot?.type === 'expense' ? (
          <ExpensePage snapshot={snapshot} />
        ) : snapshot?.type === 'group' ? (
          <GroupPage snapshot={snapshot} />
        ) : snapshot?.type === 'month' ? (
          <MonthPage snapshot={snapshot} />
        ) : null}

        {/* Expiry notice */}
        {snapshot && !error && (
          <div className="text-center text-text3 text-xs mt-4">
            This link expires in 72 hours from when it was created.
          </div>
        )}

        {/* Conversion closer — bottom of the page, the moment of truth */}
        {!loading && <ConversionSection />}
      </div>
    </div>
  );
}

export default function SharePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-bg text-text1 font-sans">
          <div className="max-w-[480px] mx-auto px-4 py-6">
            <div className="flex items-center justify-center mb-5">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/logo.webp"
                  alt="The Hisaab"
                  width={32}
                  height={32}
                  className="rounded-xl"
                />
                <span className="text-xl font-bold text-text1 tracking-tight">The Hisaab</span>
              </div>
            </div>
            <LoadingSkeleton />
          </div>
        </div>
      }
    >
      <ShareContent />
    </Suspense>
  );
}

'use client'

/**
 * Landing page for a group invite link.
 *
 * On a phone with Hisaab installed, iOS and Android hand the URL straight to
 * the app and this page never renders — it exists for everyone else.
 *
 * Deliberately NOT a redirect like /get. The person still has to type the code
 * into the app after installing, so bouncing them to the store would lose the
 * one thing they need to remember. Show the code, let them copy it, then send
 * them to the store.
 */

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { initMixpanel, trackEvent } from '@/lib/mixpanel'

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.krishanblr.hisaab'
const APP_STORE_URL = 'https://apps.apple.com/in/app/the-hisaab/id6759067047'

/** Mirrors the app's own normaliser: uppercase, drop ambiguous glyphs. */
function normalise(raw: string | null): string {
  return (raw ?? '')
    .toUpperCase()
    .replace(/[^23456789ABCDEFGHJKMNPQRSTUVWXYZ]/g, '')
    .slice(0, 6)
}

function JoinInvite() {
  const searchParams = useSearchParams()
  const [code, setCode] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const c = normalise(searchParams.get('code'))
    setCode(c)
    initMixpanel()
    trackEvent('invite_link_opened', {
      has_code: !!c,
      page: '/join',
    })
  }, [searchParams])

  const copy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true)
        trackEvent('invite_code_copied', { page: '/join' })
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {})
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-4">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-white mb-2">
          You&rsquo;ve been invited to a group
        </h1>
        <p className="text-gray-400 text-sm mb-8">
          Get Hisaab, then enter this code to join and start splitting expenses.
        </p>

        {code ? (
          <>
            <div className="rounded-2xl border border-gray-800 bg-[#141414] px-6 py-6 mb-3">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Your invite code
              </p>
              <p className="text-4xl font-bold tracking-[0.3em] text-white">
                {code}
              </p>
            </div>
            <button
              onClick={copy}
              className="w-full rounded-xl border border-gray-700 px-4 py-3 text-sm font-semibold text-gray-200 hover:bg-[#1a1a1a] transition mb-8">
              {copied ? 'Copied' : 'Copy code'}
            </button>
          </>
        ) : (
          <div className="rounded-2xl border border-gray-800 bg-[#141414] px-6 py-6 mb-8">
            <p className="text-sm text-gray-400">
              This link is missing its code. Ask whoever invited you to send it
              again.
            </p>
          </div>
        )}

        <div className="space-y-3">
          <a
            href={APP_STORE_URL}
            onClick={() =>
              trackEvent('store_redirect', { store: 'app_store', page: '/join' })
            }
            className="block w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition">
            Download for iPhone
          </a>
          <a
            href={PLAY_STORE_URL}
            onClick={() =>
              trackEvent('store_redirect', { store: 'play_store', page: '/join' })
            }
            className="block w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition">
            Download for Android
          </a>
        </div>

        <p className="text-xs text-gray-600 mt-8">
          Already have Hisaab? Open the app and tap &ldquo;Join a group with a
          code&rdquo;.
        </p>
      </div>
    </div>
  )
}

const LoadingFallback = () => (
  <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-4">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2563EB] mx-auto mb-4"></div>
      <p className="text-gray-400">Loading invite...</p>
    </div>
  </div>
)

export default function JoinPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <JoinInvite />
    </Suspense>
  )
}

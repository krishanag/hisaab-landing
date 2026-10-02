'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState, useCallback } from 'react'
import DownloadButtons from '@/components/DownloadButtons'
import {
  APP_STORE_URL,
  buildAppStoreUrl,
  buildPlayStoreUrl,
  getAttribution,
} from '@/lib/storeUrls'

const DEEP_LINK_SCHEME = 'hisaab'

type VisitorInfo = {
  ip: string
  os: string
  browser: string
  deviceType: string
  screenResolution: string
  language: string
  timezone: string
}

function getOS(ua: string): string {
  if (/Windows NT 10/.test(ua)) return 'Windows 10/11'
  if (/Windows NT 6.3/.test(ua)) return 'Windows 8.1'
  if (/Windows NT 6.2/.test(ua)) return 'Windows 8'
  if (/Windows NT 6.1/.test(ua)) return 'Windows 7'
  if (/Windows/.test(ua)) return 'Windows'
  if (/Mac OS X/.test(ua)) {
    const match = ua.match(/Mac OS X (\d+[._]\d+[._]?\d*)/)
    return match ? `macOS ${match[1].replace(/_/g, '.')}` : 'macOS'
  }
  if (/Android/.test(ua)) {
    const match = ua.match(/Android (\d+\.?\d*)/)
    return match ? `Android ${match[1]}` : 'Android'
  }
  if (/iPhone|iPad|iPod/.test(ua)) {
    const match = ua.match(/OS (\d+[._]\d+)/)
    return match ? `iOS ${match[1].replace(/_/g, '.')}` : 'iOS'
  }
  if (/Linux/.test(ua)) return 'Linux'
  if (/CrOS/.test(ua)) return 'Chrome OS'
  return 'Unknown'
}

function getBrowser(ua: string): string {
  if (/Edg\//.test(ua)) {
    const match = ua.match(/Edg\/(\d+)/)
    return `Edge ${match?.[1] || ''}`
  }
  if (/OPR\/|Opera/.test(ua)) {
    const match = ua.match(/OPR\/(\d+)/)
    return `Opera ${match?.[1] || ''}`
  }
  if (/Chrome\//.test(ua) && !/Edg\//.test(ua)) {
    const match = ua.match(/Chrome\/(\d+)/)
    return `Chrome ${match?.[1] || ''}`
  }
  if (/Safari\//.test(ua) && !/Chrome/.test(ua)) {
    const match = ua.match(/Version\/(\d+)/)
    return `Safari ${match?.[1] || ''}`
  }
  if (/Firefox\//.test(ua)) {
    const match = ua.match(/Firefox\/(\d+)/)
    return `Firefox ${match?.[1] || ''}`
  }
  return 'Unknown'
}

function getDeviceType(ua: string): string {
  if (/Tablet|iPad/i.test(ua)) return 'Tablet'
  if (/Mobile|iPhone|Android.*Mobile/i.test(ua)) return 'Mobile'
  return 'Desktop'
}

function getPlatform(ua: string): 'android' | 'ios' | 'other' {
  if (/Android/i.test(ua)) return 'android'
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios'
  return 'other'
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start py-3 border-b border-gray-800 last:border-b-0">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="text-white text-sm font-medium text-right max-w-[60%] break-all">{value || 'N/A'}</span>
    </div>
  )
}

export default function LinkPage() {
  const { param } = useParams<{ param: string }>()
  const [info, setInfo] = useState<VisitorInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState<'idle' | 'trying' | 'fallback'>('idle')
  const [platform, setPlatform] = useState<'android' | 'ios' | 'other'>('other')
  const [appStoreUrl, setAppStoreUrl] = useState(APP_STORE_URL)

  useEffect(() => {
    const ua = navigator.userAgent
    setPlatform(getPlatform(ua))
    setAppStoreUrl(buildAppStoreUrl(getAttribution()))
    collectInfo()
  }, [])

  const openApp = useCallback(() => {
    const utm = getAttribution()
    if (platform === 'android') {
      const intentUrl =
        `intent://#Intent;` +
        `scheme=${DEEP_LINK_SCHEME};` +
        `package=com.krishanblr.hisaab;` +
        `S.browser_fallback_url=${encodeURIComponent(buildPlayStoreUrl(utm))};` +
        `end`
      window.location.assign(intentUrl)
    } else if (platform === 'ios') {
      setStatus('trying')
      window.location.assign(`${DEEP_LINK_SCHEME}://`)

      const timer = setTimeout(() => {
        if (!document.hidden) {
          setStatus('fallback')
        }
      }, 1500)

      const onVisibilityChange = () => {
        if (document.hidden) {
          clearTimeout(timer)
          setStatus('idle')
        }
      }
      document.addEventListener('visibilitychange', onVisibilityChange)

      setTimeout(() => {
        document.removeEventListener('visibilitychange', onVisibilityChange)
      }, 5000)
    }
  }, [platform])

  async function collectInfo() {
    const ua = navigator.userAgent

    let ip = 'Fetching...'
    try {
      const res = await fetch('/api/visitor-info')
      const data = await res.json()
      ip = data.ip
    } catch {
      ip = 'Unavailable'
    }

    setInfo({
      ip,
      os: getOS(ua),
      browser: getBrowser(ua),
      deviceType: getDeviceType(ua),
      screenResolution: `${screen.width} x ${screen.height}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    })
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white font-sans">
      <div className="max-w-[480px] mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-[28px] font-extrabold text-white tracking-tight">The Hisaab</div>
          <p className="text-gray-500 text-sm mt-1">Link: {param}</p>
        </div>

        {/* Open in App CTA — mobile only */}
        {platform !== 'other' && status === 'idle' && (
          <div className="bg-[#121212] rounded-2xl p-6 border border-gray-800 mb-4 text-center">
            <p className="text-gray-400 text-sm mb-4">Open this link in The Hisaab app</p>
            <button
              onClick={openApp}
              className="bg-[#2563EB] text-white py-3 px-8 rounded-xl font-bold text-sm cursor-pointer border-none active:opacity-90"
            >
              Open in The Hisaab
            </button>
          </div>
        )}

        {/* Trying to open — iOS only */}
        {status === 'trying' && (
          <div className="bg-[#121212] rounded-2xl p-6 border border-gray-800 mb-4 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2563EB] mx-auto mb-3" />
            <p className="text-gray-400 text-sm">Opening The Hisaab app...</p>
          </div>
        )}

        {/* Fallback — app not installed (iOS) */}
        {status === 'fallback' && (
          <div className="bg-[#121212] rounded-2xl p-6 border border-gray-800 mb-4 text-center">
            <p className="text-gray-400 text-sm mb-4">App not installed? Get it here:</p>
            <a
              href={appStoreUrl}
              className="inline-block bg-[#2563EB] text-white py-3 px-8 rounded-xl font-bold text-sm no-underline active:opacity-90"
            >
              Download on App Store
            </a>
            <button
              onClick={() => { setStatus('idle') }}
              className="block mx-auto text-gray-500 text-xs mt-3 underline bg-transparent border-none cursor-pointer"
            >
              Try again
            </button>
          </div>
        )}

        {/* Download links — desktop */}
        {platform === 'other' && (
          <div className="bg-[#121212] rounded-2xl p-5 border border-gray-800 mb-4 text-center">
            <p className="text-gray-500 text-sm mb-4">Download the app</p>
            <DownloadButtons variant="dark" />
          </div>
        )}

        {/* Visitor info */}
        {loading ? (
          <div className="bg-[#121212] rounded-2xl p-5 border border-gray-800 animate-pulse">
            <div className="h-6 bg-white/5 rounded w-1/2 mb-4" />
            {[1, 2, 3].map(i => (
              <div key={i} className="flex justify-between py-3">
                <div className="h-4 bg-white/5 rounded w-24" />
                <div className="h-4 bg-white/5 rounded w-32" />
              </div>
            ))}
          </div>
        ) : info && (
          <div className="bg-[#121212] rounded-2xl p-5 border border-gray-800">
            <div className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-2">Visitor Info</div>
            <InfoRow label="IP Address" value={info.ip} />
            <InfoRow label="Device" value={info.deviceType} />
            <InfoRow label="OS" value={info.os} />
            <InfoRow label="Browser" value={info.browser} />
            <InfoRow label="Screen" value={info.screenResolution} />
            <InfoRow label="Language" value={info.language} />
            <InfoRow label="Timezone" value={info.timezone} />
          </div>
        )}
      </div>
    </div>
  )
}

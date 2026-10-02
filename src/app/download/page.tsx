'use client'

import { useEffect, useState } from 'react'
import { initMixpanel, trackEvent } from '@/lib/mixpanel'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { buildPlayStoreUrl, getAttribution, PLAY_STORE_URL } from '@/lib/storeUrls'

export default function DownloadPage() {
  const [playStoreUrl, setPlayStoreUrl] = useState(PLAY_STORE_URL)

  useEffect(() => {
    const utm = getAttribution()
    const url = buildPlayStoreUrl(utm)
    setPlayStoreUrl(url)

    initMixpanel()
    trackEvent('store_redirect', {
      store: 'play_store',
      platform: 'android',
      page: '/download',
      ...utm,
    })

    const timer = setTimeout(() => {
      window.location.href = url
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <>
      <Head>
        <title>Download The Hisaab App - Free Finance Management | Made in India</title>
        <meta name="description" content="Download The Hisaab - The best finance management app made in India. Track expenses, manage budgets, and take control of your money. Free download!" />
      </Head>

      <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-4">
      <motion.div
        className="max-w-md w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-[#121212] rounded-2xl border border-gray-800 p-8">
          {/* Logo */}
          <motion.div
            className="mx-auto mb-6"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Image src="/logo.webp" alt="The Hisaab" width={80} height={80} className="rounded-2xl mx-auto" />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-3xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Downloading The Hisaab
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-400 mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Thanks for choosing The Hisaab! Your download will start automatically...
          </motion.p>

          {/* Loading Animation */}
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex space-x-2">
              {[0, 0.2, 0.4].map((delay, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-[#2563EB] rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Manual Download Button */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-sm text-gray-500">
              Download not starting automatically?
            </p>
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1D4ED8] transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Now
            </a>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            className="mt-6 pt-6 border-t border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1D4ED8] font-medium text-sm transition-colors"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-sm text-gray-500">
            Made in India with love
          </p>
        </motion.div>
      </motion.div>
      </div>
    </>
  )
}

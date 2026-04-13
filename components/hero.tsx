'use client'

import { motion } from "motion/react"
import { Glitters } from "@/components/glitters"

import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex items-end h-[calc(100vh-80px)] md:h-[calc(100vh-96px)] pb-12 md:pb-16 overflow-hidden bg-[#fdfaf5]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          style={{ objectPosition: '72% 10%' }}
          priority
          unoptimized
        />
      </div>

      {/* Complex Background Lighting & Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle dark gradient to ensure text readability on the left without washing out the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/5 to-transparent" />
        {/* The "Crunch" Textures - reduced opacity to keep image dark */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-multiply" 
          style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/cream-paper.png)' }}
        />
        
        {/* Magical Glitters */}
        <Glitters count={60} className="opacity-100" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 z-10 space-y-4 md:space-y-7"
          >
            <div className="space-y-2 md:space-y-3">
              <h1 className="text-[26px] sm:text-[32px] md:text-[44px] lg:text-[58px] font-heading font-light leading-[1.15] text-[#2d241e] tracking-tight">
                I decode your blueprint <br />
                and break the patterns holding you back — <br />
                so you can finally have the life, love, <br />
                and success you know you’re meant for.
              </h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="flex flex-wrap items-center gap-2 md:gap-3 text-[#8b6508] font-bold tracking-[0.15em] uppercase text-[9px] sm:text-xs md:text-sm"
              >
                <span>Decode Your Blueprint</span>
                <span className="size-1 bg-[#8b6508] rounded-full" />
                <span>Break Patterns</span>
                <span className="size-1 bg-[#8b6508] rounded-full" />
                <span>Unlock the Life You Desire</span>
              </motion.div>
            </div>

            <p className="text-base md:text-lg text-[#2d241e] font-light leading-relaxed max-w-2xl font-serif italic">
              For those who know they&apos;re meant for more — but haven&apos;t yet decoded their unique blueprint or broken the patterns holding them back.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1 md:pt-2">
              <button className="golden-button">Start With a Session</button>
              <button className="golden-button" style={{ backgroundImage: 'linear-gradient(160deg, #7a3a05, #9a6a0e, #e8d490, #a07010, #7a3a05)' }}>Explore My Work</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

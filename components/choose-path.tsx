'use client'

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"
import Image from "next/image"
import { Glitters, GlitterFlow } from "@/components/glitters"

// Custom Lotus Icon since lucide-react doesn't have a perfect match
const LotusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22c-4-4-4-10-4-10s2 2 4 6c2-4 4-6 4-6s0 6-4 10z" />
    <path d="M12 22c-6-6-8-14-8-14s4 2 8 8c4-6 8-8 8-8s-2 8-8 14z" />
    <path d="M12 22c-2-8-2-16-2-16s1 1 2 4c1-3 2-4 2-4s0 8-2 16z" />
  </svg>
)

export function ChoosePath() {
  return (
    <section className="relative min-h-screen flex items-center py-12 md:py-16 overflow-hidden bg-[#fdfaf5]">
      {/* Background textures */}
      <div 
        className="absolute inset-0 opacity-[0.5] mix-blend-multiply" 
        style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/cream-paper.png)' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0%,_rgba(253,250,245,0)_100%)]" />
      
      {/* Magical Glitters */}
      <Glitters count={40} />
      <GlitterFlow />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-serif text-[#4a3f35] mb-4">Choose the path that&apos;s right for you.</h2>
          {/* Glowing divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-24 md:w-48 bg-gradient-to-r from-transparent to-[#c5a059]" />
            <div className="w-2 h-2 rotate-45 bg-[#ffdf8b] shadow-[0_0_15px_#c5a059]" />
            <div className="h-[1px] w-24 md:w-48 bg-gradient-to-l from-transparent to-[#c5a059]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Card - Corporate */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-6 md:p-10 shadow-2xl flex flex-col items-center text-center"
          >
            {/* Background & Borders */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8a1419] via-[#5c0a0d] to-[#3d0507] rounded-sm" />
            <div 
              className="absolute inset-0 opacity-50 mix-blend-multiply rounded-sm" 
              style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/black-paper.png)' }}
            />
            <div 
              className="absolute inset-0 opacity-40 mix-blend-color-dodge rounded-sm" 
              style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/stucco.png)' }}
            />
            <div className="absolute inset-0 border-[3px] border-[#c5a059] rounded-sm" />
            <div className="absolute inset-2 border border-[#c5a059]/50 rounded-sm" />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#ffdf8b]" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-[#ffdf8b]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-[#ffdf8b]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#ffdf8b]" />

            <div className="relative z-10 flex flex-col items-center w-full h-full">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border-2 border-[#c5a059] rounded-xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <Briefcase className="w-8 h-8 text-[#ffdf8b]" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-serif text-[#fdfaf5] mb-6 leading-tight">
                For Corporate Professionals,<br />Business Owners & High Performers
              </h3>

              {/* Bullets */}
              <div className="space-y-4 text-left w-full text-[#fdfaf5]/90 font-serif text-base md:text-lg leading-relaxed mb-8 flex-grow">
                <div className="flex gap-4">
                  <span className="text-[#c5a059] mt-1">➔</span>
                  <p>You&apos;ve achieved a certain level of success — yet still find yourself facing challenges in your career growth, decision-making, relationships, or overall life.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#c5a059] mt-1">•</span>
                  <p>You&apos;re ready to understand what&apos;s actually driving these challenges, gain clear direction, and create real, tangible results.</p>
                </div>
              </div>

              {/* Bottom Section (Button + List) aligned to bottom */}
              <div className="mt-auto w-full flex flex-col items-center">
                {/* Button */}
                <Button className="w-full max-w-md h-14 rounded-full bg-gradient-to-b from-[#fcf0c8] via-[#e2b95d] to-[#b88a22] text-[#2d241e] font-serif font-bold text-xl shadow-[0_5px_15px_rgba(0,0,0,0.3),inset_0_2px_5px_rgba(255,255,255,0.8)] border border-[#ffdf8b] hover:scale-105 transition-transform mb-8">
                  Start With a Session
                </Button>

                {/* List */}
                <div className="space-y-2 text-left w-full max-w-md text-[#fdfaf5]/90 font-serif text-base md:text-lg h-[140px]">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-b from-[#fcf0c8] to-[#b88a22] text-[#2d241e] text-sm font-bold">1</span>
                    <span>Begin with a Breakthrough Session™ (90 mins)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-b from-[#fcf0c8] to-[#b88a22] text-[#2d241e] text-sm font-bold">2</span>
                    <span>Life Mastery Coaching</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card - Healers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-6 md:p-10 shadow-2xl flex flex-col items-center text-center"
          >
            {/* Background & Borders */}
            <div className="absolute inset-0 bg-[#f4ebd8] rounded-sm" />
            <div 
              className="absolute inset-0 opacity-60 mix-blend-multiply rounded-sm" 
              style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/aged-paper.png)' }}
            />
            <div 
              className="absolute inset-0 opacity-30 mix-blend-color-burn rounded-sm" 
              style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/stucco.png)' }}
            />
            <div className="absolute inset-0 border-[3px] border-[#c5a059] rounded-sm" />
            <div className="absolute inset-2 border border-[#c5a059]/50 rounded-sm" />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#c5a059]" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-[#c5a059]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-[#c5a059]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#c5a059]" />

            <div className="relative z-10 flex flex-col items-center w-full h-full">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-b from-[#3a1c24] to-[#1a0a10] border-2 border-[#c5a059] rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.2)] overflow-hidden relative">
                <Image src="/lotus.jp.png" alt="Lotus" fill className="object-cover" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-serif text-[#3a3129] mb-6 leading-tight">
                For Tarot Readers, Healers,<br />Coaches & Lightworkers
              </h3>

              {/* Bullets */}
              <div className="space-y-4 text-left w-full text-[#4a3f35] font-serif text-base md:text-lg leading-relaxed mb-8 flex-grow">
                <div className="flex gap-4">
                  <span className="text-[#c5a059] mt-1">➔</span>
                  <p>You already know there&apos;s a deeper layer to your life and work — into energy, patterns, and your unique blueprint.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#c5a059] mt-1">➔</span>
                  <p>You&apos;re ready to clear what&apos;s holding you back and decode your blueprint to step into your next level of purpose, impact, and abundance.</p>
                </div>
              </div>

              {/* Bottom Section (Button + List) aligned to bottom */}
              <div className="mt-auto w-full flex flex-col items-center">
                {/* Button */}
                <Button className="w-full max-w-md h-14 rounded-full bg-gradient-to-b from-[#fcf0c8] via-[#e2b95d] to-[#b88a22] text-[#2d241e] font-serif font-bold text-xl shadow-[0_5px_15px_rgba(0,0,0,0.1),inset_0_2px_5px_rgba(255,255,255,0.8)] border border-[#c5a059] hover:scale-105 transition-transform mb-8">
                  Begin Here
                </Button>

                {/* List */}
                <div className="space-y-2 text-left w-full max-w-md text-[#4a3f35] font-serif text-base md:text-lg h-[140px]">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-b from-[#fcf0c8] to-[#b88a22] text-[#2d241e] text-sm font-bold">1</span>
                    <span>First Imprint Reset™</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-b from-[#fcf0c8] to-[#b88a22] text-[#2d241e] text-sm font-bold">2</span>
                    <span>Business Energetics Reading</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-b from-[#fcf0c8] to-[#b88a22] text-[#2d241e] text-sm font-bold">3</span>
                    <span>Life Master Coaching</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-b from-[#fcf0c8] to-[#b88a22] text-[#2d241e] text-sm font-bold">4</span>
                    <span>ENcoded for expansion.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

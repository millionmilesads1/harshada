'use client'

import { motion } from "motion/react"

export function FreeAccess() {
  return (
    <section className="relative flex items-center py-16 md:py-24 overflow-hidden bg-[#fdfaf5]">
      {/* Complex Background Lighting & Texture (Matching Hero) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Base light source from top left */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(255,255,255,0.9)_0%,_rgba(253,250,245,0)_60%)]" />
        {/* Warm shadow/glow on the right side */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_rgba(197,160,89,0.15)_0%,_rgba(253,250,245,0)_70%)]" />
        {/* The "Crunch" Textures */}
        <div 
          className="absolute inset-0 opacity-[0.4] mix-blend-multiply" 
          style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/cream-paper.png)' }}
        />
        <div 
          className="absolute inset-0 opacity-[0.2] mix-blend-color-burn" 
          style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/stucco.png)' }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative max-w-4xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#4a3f35] tracking-widest uppercase leading-tight">
            Free access to my<br />energetic alignments!
          </h2>
          
          {/* Elegant Divider */}
          <div className="flex items-center justify-center mt-6 gap-4">
            <div className="relative overflow-hidden h-[1.5px] w-24 bg-gradient-to-r from-transparent to-[#e2b95d]">
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-[200%] animate-shimmer-continuous" />
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-3 bg-[#e2b95d]/30 blur-md rounded-full animate-pulse" />
              <div className="relative overflow-hidden w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#fff0d4] to-[#e2b95d] shadow-[0_0_12px_rgba(226,185,93,1)]">
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-[200%] animate-shimmer-continuous" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
            <div className="relative overflow-hidden h-[1.5px] w-24 bg-gradient-to-l from-transparent to-[#e2b95d]">
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-[200%] animate-shimmer-continuous" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </motion.div>

        {/* Cards Container */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-[#fdfaf5]/60 backdrop-blur-sm p-6 md:p-10 text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]"
          >
            {/* Double Border Effect */}
            <div className="absolute inset-0 border border-[#c5a059]/60 pointer-events-none" />
            <div className="absolute inset-1 border border-[#c5a059]/30 pointer-events-none" />

            {/* Number Badge */}
            <div className="absolute -left-6 md:-left-8 top-8 w-16 h-16 md:w-20 md:h-20 z-10">
              {/* Rotating Starburst/Glitter Behind Badge */}
              <div 
                className="absolute -inset-4 opacity-60 animate-spin-slow mix-blend-screen pointer-events-none" 
                style={{ 
                  backgroundImage: 'url(https://www.transparenttextures.com/patterns/stardust.png)',
                  filter: 'drop-shadow(0 0 8px rgba(255,215,0,0.8))' 
                }} 
              />
              
              {/* Actual Badge */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#fcf0c8] via-[#e2b95d] to-[#b88a22] flex items-center justify-center text-3xl md:text-4xl font-serif text-[#2d241e] shadow-[0_5px_20px_rgba(226,185,93,0.6),inset_0_2px_5px_rgba(255,255,255,0.9),inset_0_-3px_5px_rgba(139,101,8,0.6)] border border-[#fff0d4] overflow-hidden group/badge">
                <span className="relative z-10 drop-shadow-sm">1</span>
                {/* Intense Edge Glow */}
                <div className="absolute -left-2 top-0 w-8 h-8 bg-white/90 blur-[6px] rounded-full animate-pulse z-10 mix-blend-overlay" />
                <div className="absolute -right-2 bottom-0 w-6 h-6 bg-[#fff0d4]/80 blur-[4px] rounded-full animate-pulse delay-75 z-10 mix-blend-overlay" />
                {/* Badge Shimmer */}
                <span className="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-[150%] animate-shimmer-continuous" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif text-[#3a3129] uppercase tracking-wider mb-4">
              21-Day Inner Reset
            </h3>
            <p className="text-lg md:text-xl text-[#4a3f35]/80 font-serif max-w-2xl mx-auto mb-8 leading-relaxed">
              Clear old patterns, align your energy daily, and reset deeply.
            </p>

            <button className="golden-button">Download Now</button>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-[#fdfaf5]/60 backdrop-blur-sm p-6 md:p-10 text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]"
          >
            {/* Double Border Effect */}
            <div className="absolute inset-0 border border-[#c5a059]/60 pointer-events-none" />
            <div className="absolute inset-1 border border-[#c5a059]/30 pointer-events-none" />

            {/* Number Badge */}
            <div className="absolute -left-6 md:-left-8 top-8 w-16 h-16 md:w-20 md:h-20 z-10">
              {/* Rotating Starburst/Glitter Behind Badge */}
              <div 
                className="absolute -inset-4 opacity-60 animate-spin-slow mix-blend-screen pointer-events-none" 
                style={{ 
                  backgroundImage: 'url(https://www.transparenttextures.com/patterns/stardust.png)',
                  filter: 'drop-shadow(0 0 8px rgba(255,215,0,0.8))' 
                }} 
              />
              
              {/* Actual Badge */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#fcf0c8] via-[#e2b95d] to-[#b88a22] flex items-center justify-center text-3xl md:text-4xl font-serif text-[#2d241e] shadow-[0_5px_20px_rgba(226,185,93,0.6),inset_0_2px_5px_rgba(255,255,255,0.9),inset_0_-3px_5px_rgba(139,101,8,0.6)] border border-[#fff0d4] overflow-hidden group/badge">
                <span className="relative z-10 drop-shadow-sm">2</span>
                {/* Intense Edge Glow */}
                <div className="absolute -left-2 top-0 w-8 h-8 bg-white/90 blur-[6px] rounded-full animate-pulse z-10 mix-blend-overlay" />
                <div className="absolute -right-2 bottom-0 w-6 h-6 bg-[#fff0d4]/80 blur-[4px] rounded-full animate-pulse delay-75 z-10 mix-blend-overlay" />
                {/* Badge Shimmer */}
                <span className="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-[150%] animate-shimmer-continuous" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif text-[#3a3129] mb-4">
              Past Life Clearing Meditation
            </h3>
            <p className="text-lg md:text-xl text-[#4a3f35]/80 font-serif max-w-2xl mx-auto mb-8 leading-relaxed">
              Clear old karmic imprints and release energy from unresolved past lives.
            </p>

            <button className="golden-button">Download Now</button>
          </motion.div>
        </div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="font-script text-4xl md:text-5xl text-[#c5a059] mb-2 drop-shadow-sm">
            Harshada Samant
          </h3>
          <p className="text-[#4a3f35]/80 font-serif tracking-widest uppercase text-sm md:text-base">
            Business Intuitive & Soul Alignment Mentor
          </p>
        </motion.div>
      </div>
    </section>
  )
}

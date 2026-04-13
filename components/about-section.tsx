'use client'

import { motion } from "motion/react"
import { Sparkles } from "lucide-react"

const Divider = () => (
  <div className="flex items-center justify-center w-full my-8 md:my-12">
    <div className="h-[0.5px] w-24 bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent" />
    <div className="mx-4 text-[#c5a059]">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
      </svg>
    </div>
    <div className="h-[0.5px] w-32 bg-gradient-to-l from-transparent via-[#c5a059]/40 to-transparent" />
  </div>
)

export function AboutSection() {
  return (
    <section className="relative min-h-screen flex items-center py-16 md:py-24 bg-[#0a0a0a] text-[#f5f2ed] overflow-hidden">
      {/* Background Texture - Dark Stone/Paper */}
      <div 
        className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/dark-matter.png)' }}
      />
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-soft-light pointer-events-none" 
        style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/asfalt-dark.png)' }}
      />
      
      {/* Golden Dust/Glitters at bottom right - More intense like image */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[60%] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(197,160,89,0.25)_0%,_transparent_70%)] blur-3xl" />
        <div 
          className="absolute bottom-10 right-10 w-full h-full opacity-40 mix-blend-screen animate-pulse" 
          style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/stardust.png)' }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading tracking-[0.2em] text-[#dcb46e] uppercase mb-2 drop-shadow-lg">
            I&apos;M HARSHADA SAMANT
          </h2>

          <Divider />

          {/* Roles */}
          <div className="space-y-2 text-xl md:text-2xl font-serif italic text-[#f5f2ed]/90 tracking-wide">
            <p>Business Intuitive.</p>
            <p>Energy Alchemist.</p>
            <p>Soul Alignment Mentor.</p>
            <p className="pt-4 text-base md:text-lg not-italic font-sans tracking-[0.15em] uppercase opacity-70">
              Former Investment Banker. Chartered Accountant.
            </p>
          </div>

          <Divider />

          {/* Statement 1 */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-[1.3] text-[#dcb46e] max-w-3xl mx-auto">
              I help you understand what&apos;s actually<br />
              shaping your life — and change it at the root.
            </h3>

            <ul className="flex flex-col items-start w-fit mx-auto gap-4 text-xl md:text-2xl font-serif opacity-90">
              <li className="flex items-center gap-4">
                <span className="size-2 rounded-full bg-[#c5a059] shadow-[0_0_8px_#c5a059]" />
                The patterns you keep repeating.
              </li>
              <li className="flex items-center gap-4">
                <span className="size-2 rounded-full bg-[#c5a059] shadow-[0_0_8px_#c5a059]" />
                The blueprint underneath them.
              </li>
            </ul>

            <p className="text-xl md:text-2xl font-serif italic text-[#dcb46e]/80 pt-4 border-t border-[#c5a059]/10 w-fit mx-auto">
              Because until that shifts, your external reality doesn&apos;t fully change.
            </p>
          </div>

          <Divider />

          {/* Statement 2 & 3 */}
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="space-y-2 text-2xl md:text-3xl font-serif italic opacity-90 leading-tight">
              <p>This is not strategy.</p>
              <p>This is not surface-level work.</p>
            </div>

            <p className="text-2xl md:text-3xl font-serif leading-snug text-[#f5f2ed]/95 tracking-tight">
              This is about decoding your blueprint, breaking the patterns holding you back, and creating results that finally reflect who you truly are.
            </p>
          </div>

          <Divider />

          {/* Final List */}
          <ul className="flex flex-col items-start w-fit mx-auto gap-4 text-2xl md:text-3xl font-serif italic text-[#f5f2ed]/90">
            <li className="flex items-center gap-4">
              <span className="size-2 rounded-full bg-[#c5a059] shadow-[0_0_8px_#c5a059]" />
              In your life.
            </li>
            <li className="flex items-center gap-4">
              <span className="size-2 rounded-full bg-[#c5a059] shadow-[0_0_8px_#c5a059]" />
              In your relationships.
            </li>
            <li className="flex items-center gap-4">
              <span className="size-2 rounded-full bg-[#c5a059] shadow-[0_0_8px_#c5a059]" />
              In your work.
            </li>
            <li className="flex items-center gap-4">
              <span className="size-2 rounded-full bg-[#c5a059] shadow-[0_0_8px_#c5a059]" />
              In your success.
            </li>
          </ul>
        </motion.div>
      </div>
      
      {/* Scroll indicator at bottom - pill shape like image */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-40">
        <div className="w-12 h-2 rounded-full border border-[#c5a059]/60 bg-transparent" />
      </div>
    </section>
  )
}

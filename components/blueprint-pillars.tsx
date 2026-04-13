'use client'

import { motion } from "motion/react"
import { Key, Eye, Triangle } from "lucide-react"
import Image from "next/image"

const pillars = [
  {
    icon: Key,
    title: "DECODE YOUR BLUEPRINT",
    description: "Discover your unique design and purpose.",
  },
  {
    icon: Eye,
    title: "BREAK OLD PATTERNS",
    description: "Clear unhelpful patterns keeping you stuck.",
  },
  {
    icon: Triangle,
    title: "CREATE THE LIFE YOU WANT",
    description: "Step forward towards love, success, and fulfilment.",
  },
]

export function BlueprintPillars() {
  return (
    <section className="relative bg-[#111008] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px] md:min-h-[800px]">

        {/* LEFT: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20 space-y-10"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className="font-heading font-bold uppercase tracking-tight leading-[1.1] text-[#e8c97a] text-3xl md:text-4xl lg:text-5xl">
              I decode your blueprint and break the patterns holding you back —
            </h2>
            <p className="font-serif italic text-[#c5a059]/80 text-lg md:text-xl leading-relaxed">
              so you can finally have the life, love, and success you know you are meant for.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="space-y-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="flex items-start gap-6"
              >
                {/* Gold Glowing Circle Icon */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-[#c5a059]/30 blur-xl rounded-full scale-150" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#f5dfb1] via-[#c5a059] to-[#8b6508] flex items-center justify-center shadow-[0_0_30px_rgba(197,160,89,0.6),inset_0_2px_4px_rgba(255,255,255,0.4)]">
                    <pillar.icon className="w-7 h-7 text-[#1a1008]" strokeWidth={1.5} />
                  </div>
                </div>
                {/* Text */}
                <div className="space-y-1 pt-1">
                  <h3 className="font-heading font-bold uppercase tracking-widest text-[#e8c97a] text-base md:text-lg">
                    {pillar.title}
                  </h3>
                  <p className="text-[#c5a059]/70 font-serif text-sm md:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Signature */}
          <div className="space-y-1 pt-2">
            <p className="font-script text-4xl md:text-5xl text-[#c5a059] drop-shadow-[0_0_20px_rgba(197,160,89,0.5)]">
              Harshada Samant
            </p>
            <p className="text-[#c5a059]/60 uppercase tracking-[0.25em] text-xs md:text-sm font-serif">
              Business Intuitive &amp; Soul Alignment Mentor
            </p>
          </div>
        </motion.div>

        {/* RIGHT: Woman image */}
        <div className="relative hidden lg:block">
          <Image
            src="/hero-bg.jpg"
            alt="Harshada Samant"
            fill
            className="object-cover"
            style={{ objectPosition: '90% 10%' }}
            unoptimized
          />
          {/* Left fade to blend with dark background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111008] via-[#111008]/20 to-transparent" />
        </div>

      </div>
    </section>
  )
}

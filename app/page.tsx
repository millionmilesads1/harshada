'use client'

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FreeAccess } from "@/components/free-access"
import { AboutSection } from "@/components/about-section"
import { ChoosePath } from "@/components/choose-path"
import { BlueprintPillars } from "@/components/blueprint-pillars"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { motion } from "motion/react"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col selection:bg-primary/20 selection:text-primary mt-20 md:mt-24">
      <Navbar />
      <Hero />
      <FreeAccess />

      {/* Screen 3: The Real Problem (Replaced with User Content) */}
      <section className="py-10 md:py-14 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h2 className="font-light tracking-tight font-heading leading-[1.1] text-foreground uppercase flex flex-col gap-2 md:gap-4">
              <span className="text-5xl md:text-7xl lg:text-8xl">
                You're not here just to <span className="text-primary italic font-serif-italic">survive life.</span>
              </span>
              <span className="text-2xl md:text-4xl lg:text-5xl mt-2">
                You're here to <span className="font-medium">live it fully.</span>
              </span>
            </h2>

            <div className="space-y-4 text-xl md:text-2xl text-muted-foreground leading-relaxed font-light font-serif">
              <p>
                To create relationships that feel fulfilling.<br />
                To build a career that actually aligns.<br />
                To experience abundance and success — not just chase it.
              </p>

              <div className="flex justify-center">
                <div className="h-px w-24 bg-primary/40" />
              </div>

              <p>
                Not by chance.<br />
                But by understanding what's been shaping your life all along —<br />
                The patterns you've been operating from,<br />
                and the unique blueprint underneath them.
              </p>

              <div className="flex justify-center">
                <div className="h-px w-24 bg-primary/40" />
              </div>

              <p>
                To shift what's not working.<br />
                To step into your full potential.<br />
                To finally create results that reflect who you truly are.<br />
                <br />
                <span className="font-medium text-primary text-2xl md:text-3xl">To claim true abundance and financial sovereignty.</span>
              </p>
            </div>

            <div className="pt-12">
              <div className="bg-secondary/30 border border-primary/20 p-10 md:p-16 rounded-[40px] shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <p className="text-2xl md:text-4xl font-heading text-foreground leading-snug relative z-10">
                  I help you decode your blueprint, break the patterns keeping you small,
                  and step into the life, love, and success you know you're meant for.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AboutSection />
      <ChoosePath />
      <BlueprintPillars />

      {/* Footer */}
      <footer className="py-20 border-t bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="space-y-4">
              <span className="text-2xl font-bold tracking-tight font-heading uppercase">Harshada Samant</span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Break Patterns • Align Life • Step Into Potential
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-heading font-bold uppercase tracking-widest text-xs">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><span className="text-muted-foreground/40 cursor-default">Start Here</span></li>
                <li><span className="text-muted-foreground/40 cursor-default">Work With Me</span></li>
                <li><span className="text-muted-foreground/40 cursor-default">Soul Scrolls</span></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-heading font-bold uppercase tracking-widest text-xs">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-heading font-bold uppercase tracking-widest text-xs">Mission</h4>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                Helping you identify and shift the deeper patterns shaping your life — so your reality begins to align with who you truly are.
              </p>
            </div>
          </div>
          <Separator className="bg-primary/10 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
            <p>© 2026 Harshada Samant. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

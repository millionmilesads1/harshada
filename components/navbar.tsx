'use client'

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Start Here", href: "/start-here" },
  { name: "Work", href: "/work" },
  { name: "Soul Scrolls", href: "/soul-scrolls" },
  { name: "About", href: "/about" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { scrollY } = useScroll()
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(253, 252, 248, 0)", "rgba(253, 252, 248, 0.98)"]
  )
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  )

  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 0 0 rgba(0,0,0,0)", "0 10px 30px -10px rgba(197, 160, 89, 0.15)"]
  )

  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ["1px solid rgba(197, 160, 89, 0)", "1px solid rgba(197, 160, 89, 0.1)"]
  )

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter: backdropBlur, borderBottom, boxShadow }}
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
    >
      <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="group flex flex-col items-start">
          <span className="font-script text-4xl md:text-5xl text-[#725306] font-extrabold mb-0 drop-shadow-[0_2px_15px_rgba(255,255,255,0.8)] group-hover:opacity-80 transition-opacity">
            Harshada Samant
          </span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#1a110b] font-serif font-extrabold mt-1 drop-shadow-sm">
            Business Intuitive & Soul Alignment Mentor
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.name === "Home" ? link.href : "#"}
              className={cn(
                "text-sm font-medium uppercase tracking-[0.2em] transition-colors relative group",
                link.name === "Home" 
                  ? "text-foreground/70 hover:text-primary" 
                  : "text-foreground/30 cursor-default pointer-events-none"
              )}
            >
              {link.name}
              {link.name === "Home" && (
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button className="relative overflow-hidden rounded-full bg-gradient-to-b from-[#f5dfb1] via-[#dcb46e] to-[#c59b4c] text-[#2d241e] px-8 h-12 text-sm font-bold uppercase tracking-widest shadow-[0_10px_30px_-10px_rgba(197,160,89,0.8),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-3px_6px_rgba(139,101,8,0.4)] border-[1.5px] border-[#e2b95d]/80 transition-all hover:scale-105 group">
            <span className="relative z-10 drop-shadow-sm">Start With a Session</span>
            <span className="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] animate-shimmer-continuous" />
            <span className="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/90 to-transparent -translate-x-[150%] animate-shimmer-hover" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="text-primary" />}>
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-primary/10 w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.name === "Home" ? link.href : "#"}
                    onClick={(e) => {
                      if (link.name !== "Home") e.preventDefault();
                      setIsOpen(false);
                    }}
                    className={cn(
                      "text-2xl font-heading font-bold transition-colors",
                      link.name === "Home" 
                        ? "text-foreground hover:text-primary" 
                        : "text-foreground/30 cursor-default pointer-events-none"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button className="relative overflow-hidden rounded-full bg-gradient-to-b from-[#f5dfb1] via-[#dcb46e] to-[#c59b4c] text-[#2d241e] h-14 text-lg font-bold mt-4 border border-[#fff0d4]/80 shadow-[0_15px_40px_-10px_rgba(197,160,89,0.8),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-3px_6px_rgba(139,101,8,0.4)] group">
                  <span className="relative z-10 drop-shadow-sm">Start With a Session</span>
                  <span className="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] animate-shimmer-continuous" />
                  <span className="absolute inset-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/90 to-transparent -translate-x-[150%] animate-shimmer-hover" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

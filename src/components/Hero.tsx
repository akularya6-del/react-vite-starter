import React from 'react'
import { motion } from 'framer-motion'
import FadingVideo from './FadingVideo'
import BlurText from './BlurText'
import { ArrowUpRight, Play, ClockIcon, GlobeIcon } from './Icons'

const blurFadeInitial = { filter: 'blur(10px)', opacity: 0, y: 20 }
const blurFadeAnimate = { filter: 'blur(0px)', opacity: 1, y: 0 }
const blurFadeTransition = (delay: number) => ({
  duration: 0.8,
  delay,
  ease: 'easeOut' as const,
})

const navLinks = ['Work', 'Studio', 'Services', 'Journal', 'Contact']
const logos = ['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno']

const Hero: React.FC = () => {
  return (
    <section className="h-screen overflow-hidden bg-black relative">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: '120%', height: '120%' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16">
          {/* Logo */}
          <div className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center">
            <span className="font-heading italic text-2xl text-white">a</span>
          </div>

          {/* Center nav */}
          <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1.5">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
            <button className="flex items-center gap-1 bg-white text-black px-4 py-2 rounded-full text-sm font-medium font-body ml-1">
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Spacer */}
          <div className="h-12 w-12" />
        </nav>

        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
          {/* Badge */}
          <motion.div
            initial={blurFadeInitial}
            animate={blurFadeAnimate}
            transition={blurFadeTransition(0.4)}
            className="liquid-glass rounded-full flex items-center gap-2 px-4 py-2"
          >
            <span className="bg-white text-black text-xs font-semibold font-body px-2 py-0.5 rounded-full">
              New
            </span>
            <span className="text-white/90 text-sm font-body">
              Booking Q3 2026 engagements — limited capacity
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mt-6 max-w-3xl">
            <BlurText
              text="Crafted Digital Experiences Built to Outlast Trends"
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px]"
            />
          </div>

          {/* Subtext */}
          <motion.p
            initial={blurFadeInitial}
            animate={blurFadeAnimate}
            transition={blurFadeTransition(0.8)}
            className="text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight mt-4"
          >
            We are a small studio of designers and engineers shaping brand-defining
            websites for ambitious companies. Precise typography, cinematic motion, and
            code you can be proud of.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={blurFadeInitial}
            animate={blurFadeAnimate}
            transition={blurFadeTransition(1.1)}
            className="mt-6 flex items-center gap-6"
          >
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-white font-body text-sm font-medium">
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 text-white font-body text-sm font-medium">
              <Play className="w-4 h-4" />
              Watch Showreel
            </button>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={blurFadeInitial}
            animate={blurFadeAnimate}
            transition={blurFadeTransition(1.3)}
            className="mt-8 flex gap-4"
          >
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
              <ClockIcon className="w-5 h-5 text-white/80" />
              <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4">
                6 Weeks
              </div>
              <div className="text-xs text-white/80 font-body mt-2">
                Average End-to-End Launch Time
              </div>
            </div>
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
              <GlobeIcon className="w-5 h-5 text-white/80" />
              <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4">
                140+
              </div>
              <div className="text-xs text-white/80 font-body mt-2">
                Brands Shipped Across Four Continents
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={blurFadeInitial}
          animate={blurFadeAnimate}
          transition={blurFadeTransition(1.4)}
          className="flex flex-col items-center gap-4 pb-8"
        >
          <div className="liquid-glass rounded-full px-5 py-2">
            <span className="text-white/90 text-sm font-body">
              Trusted by founders, operators, and creative directors worldwide
            </span>
          </div>
          <div className="flex items-center gap-12 md:gap-16">
            {logos.map((name) => (
              <span
                key={name}
                className="font-heading italic text-2xl md:text-3xl tracking-tight text-white/70"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

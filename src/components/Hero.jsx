import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const insults = [
  "can't think logically.",
  "can't code.",
  "can't design usably.",
  "just move pixels.",
  "call it 'art.'",
  "charge $15k for vibes.",
  "ruin every sprint.",
  "ignore users entirely.",
]

export default function Hero() {
  const [insultIndex, setInsultIndex] = useState(0)
  const { theme } = useTheme()

  useEffect(() => {
    const interval = setInterval(() => {
      setInsultIndex(i => (i + 1) % insults.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    // pt-24 accounts for: 28px ticker + ~48px nav + breathing room
    <section className="scanline min-h-screen flex flex-col justify-center relative overflow-hidden px-6 md:px-16" style={{ paddingTop: 120, paddingBottom: 80 }}>
      {/* Background grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(${theme.isDark ? 'rgba(255,34,34,0.03)' : 'rgba(0,0,0,0.04)'} 1px, transparent 1px), linear-gradient(90deg, ${theme.isDark ? 'rgba(255,34,34,0.03)' : 'rgba(0,0,0,0.04)'} 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <span className="tag">EST. 2024</span>
          <span className="tag tag-dim">v1.0.0</span>
          <span className="text-xs font-mono" style={{ color: theme.acid }}>● ONLINE</span>
        </div>

        {/* Title */}
        <div className="mb-6">
          <h1
            className="glitch text-5xl md:text-8xl font-black uppercase leading-none tracking-tighter"
            data-text="NO RESPECT"
            style={{ color: theme.textBright }}
          >
            NO RESPECT
          </h1>
          <h1 className="text-5xl md:text-8xl font-black uppercase leading-none tracking-tighter" style={{ color: theme.red }}>
            FOR GRAPHIC
          </h1>
          <h1 className="text-5xl md:text-8xl font-black uppercase leading-none tracking-tighter flicker" style={{ color: theme.textBright }}>
            DESIGNERS
          </h1>
        </div>

        {/* Dynamic insult */}
        <div className="mb-12 flex items-start gap-3">
          <span className="text-xl md:text-2xl font-mono" style={{ color: theme.textDim }}>They</span>
          <motion.span
            key={insultIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="text-xl md:text-2xl font-mono font-bold"
            style={{ color: theme.red }}
          >
            {insults[insultIndex]}
          </motion.span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { val: '$0', label: 'Cost of display: flex', color: theme.acid },
            { val: '0px', label: 'Useful padding added by designers', color: theme.textBright },
            { val: '∞', label: 'Revisions before delivery', color: theme.red },
            { val: '1', label: 'Line of CSS = 3 weeks of design', color: theme.warn },
          ].map((s, i) => (
            <div key={i} style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.red}`, padding: 20 }}>
              <div className="text-3xl font-black mb-1" style={{ color: s.color }}>{s.val}</div>
              <div className="text-xs uppercase tracking-widest leading-tight" style={{ color: theme.textDim }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <a href="#generator" className="btn-brutal" style={{ background: theme.red }}>Generate Bullshit</a>
          <a href="#shame" className="btn-acid" style={{ color: theme.acid, borderColor: theme.acid }}>Hall of Shame</a>
          <a href="#bingo" className="btn-warn">Play Bingo</a>
        </div>
      </div>

      {/* Bottom cursor */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase flex flex-col items-center gap-2" style={{ color: theme.textDimmer }}>
        <span>Scroll to suffer</span>
        <span className="text-xl">↓</span>
      </div>
    </section>
  )
}

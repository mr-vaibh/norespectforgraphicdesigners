import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const comparisons = [
  {
    id: 1,
    title: "The 'Simple' Navigation",
    weeks: "3 weeks",
    devMinutes: "25 minutes",
    figmaLabel: "FIGMA DREAM",
    realLabel: "DEV REALITY",
    figma: (
      <div style={{ background: 'linear-gradient(135deg, #0a0a1a, #1a0a2e)', padding: 24, height: '100%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: 3, marginBottom: 20, textTransform: 'uppercase' }}>
          ✦ Custom Animated Logo ✦ Rotating on hover ✦
        </div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact', 'Careers', 'Press', 'Partners', 'Legal', 'Privacy', 'Sitemap'].map(item => (
            <div key={item} style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: 2, fontFamily: 'serif', fontStyle: 'italic' }}>{item}</div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: 12, right: 12, fontSize: 9, color: 'rgba(255,34,34,0.5)' }}>
          ↳ micro-animation on scroll • custom cursor • blur on bg
        </div>
      </div>
    ),
    real: (
      <div style={{ background: '#111', padding: 24, height: '100%' }}>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', marginBottom: 16 }}>
          <span style={{ color: '#fff', fontWeight: 900, fontSize: 14 }}>LOGO</span>
          {['Home', 'About', 'Work', 'Contact'].map(item => (
            <span key={item} style={{ fontSize: 12, color: '#888', cursor: 'pointer' }}>{item}</span>
          ))}
          <span style={{ marginLeft: 'auto', background: '#ff2222', color: '#000', padding: '6px 16px', fontSize: 11, fontWeight: 900, cursor: 'pointer' }}>Hire Us</span>
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#00ff41', lineHeight: 1.8 }}>
          <div>{'// 12 lines of code. 4 links. Done.'}</div>
          <div style={{ color: '#555' }}>{'display: flex; align-items: center;'}</div>
          <div style={{ color: '#555' }}>{'gap: 24px;'}</div>
          <div style={{ color: '#00ff41', marginTop: 8 }}>✓ accessible ✓ responsive ✓ shipped</div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "The Hero Section",
    weeks: "5 weeks",
    devMinutes: "1 hour",
    figmaLabel: "FIGMA DREAM",
    realLabel: "DEV REALITY",
    figma: (
      <div style={{ background: 'linear-gradient(to bottom, #000010, #0a001a)', padding: 24, height: '100%', position: 'relative', overflow: 'hidden' }}>
        {/* Fake particles */}
        {[...Array(8)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: 2, height: 2,
            background: 'rgba(255,255,255,0.3)',
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }} />
        ))}
        <div style={{ textAlign: 'center', paddingTop: 20 }}>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: 4, marginBottom: 8 }}>ANIMATED PARTICLE BACKGROUND</div>
          <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', fontFamily: 'serif', letterSpacing: -1 }}>
            We Don't Know
          </div>
          <div style={{ fontSize: 22, fontWeight: 900, background: 'linear-gradient(90deg, #ff2222, #ffcc00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            What We Do
          </div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', marginTop: 8, letterSpacing: 2 }}>
            ↳ 5-layer gradient bg + video loop + custom cursor + scroll parallax
          </div>
        </div>
      </div>
    ),
    real: (
      <div style={{ background: '#0a0a0a', padding: 24, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#555', lineHeight: 2 }}>
          <div><span style={{ color: '#ff2222' }}>&lt;section&gt;</span></div>
          <div style={{ paddingLeft: 16 }}><span style={{ color: '#00ff41' }}>&lt;h1&gt;</span><span style={{ color: '#fff' }}>We build things that work</span><span style={{ color: '#00ff41' }}>&lt;/h1&gt;</span></div>
          <div style={{ paddingLeft: 16 }}><span style={{ color: '#00ff41' }}>&lt;p&gt;</span><span style={{ color: '#888' }}>Short description.</span><span style={{ color: '#00ff41' }}>&lt;/p&gt;</span></div>
          <div style={{ paddingLeft: 16 }}><span style={{ color: '#00ff41' }}>&lt;button&gt;</span><span style={{ color: '#fff' }}>Get Started</span><span style={{ color: '#00ff41' }}>&lt;/button&gt;</span></div>
          <div><span style={{ color: '#ff2222' }}>&lt;/section&gt;</span></div>
          <div style={{ color: '#00ff41', marginTop: 8 }}>✓ 0.8s load time ✓ A+ Lighthouse ✓ converts</div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "The Contact Form",
    weeks: "2 weeks",
    devMinutes: "30 minutes",
    figmaLabel: "FIGMA DREAM",
    realLabel: "DEV REALITY",
    figma: (
      <div style={{ background: 'linear-gradient(135deg, #0d1a0d, #0a2010)', padding: 24, height: '100%' }}>
        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: 3, marginBottom: 16, textTransform: 'uppercase' }}>Glassmorphic Form Experience™</div>
        {['Your name... (animated float label)', 'Email address... (with validation particle burst)', 'Message... (character count with mood ring)'].map((p, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8,
            padding: '10px 12px',
            marginBottom: 8,
            fontSize: 10,
            color: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            fontStyle: 'italic',
          }}>{p}</div>
        ))}
        <div style={{ fontSize: 9, color: 'rgba(255,204,0,0.4)', marginTop: 8 }}>↳ confetti animation on submit</div>
      </div>
    ),
    real: (
      <div style={{ background: '#111', padding: 24, height: '100%' }}>
        {[
          { label: 'Name', type: 'text' },
          { label: 'Email', type: 'email' },
          { label: 'Message', type: 'textarea' },
        ].map(f => (
          <div key={f.label} style={{ marginBottom: 12 }}>
            <label style={{ display: 'block', fontSize: 11, color: '#888', marginBottom: 4, letterSpacing: 2, textTransform: 'uppercase' }}>{f.label}</label>
            <div style={{ background: '#1a1a1a', border: '1px solid #333', padding: '8px 12px', fontSize: 11, color: '#555', height: f.type === 'textarea' ? 40 : 'auto' }} />
          </div>
        ))}
        <div style={{ background: '#ff2222', color: '#000', padding: '8px 20px', fontSize: 11, fontWeight: 900, display: 'inline-block', letterSpacing: 2, textTransform: 'uppercase' }}>
          Send
        </div>
        <div style={{ fontSize: 10, color: '#00ff41', marginTop: 8 }}>✓ semantic HTML ✓ screen reader ready ✓ keyboard nav</div>
      </div>
    ),
  },
]

export default function FigmaVsReality() {
  const [active, setActive] = useState(0)
  const { theme } = useTheme()
  const comp = comparisons[active]

  return (
    <section id="figma" className="py-24 px-6 md:px-16" style={{ borderTop: `1px solid ${theme.borderSubtle}` }}>
      <div className="max-w-5xl mx-auto">
        <div className="section-header" style={{ color: theme.textBright, borderLeftColor: theme.red }}>Figma vs. Reality</div>
        <div className="section-sub" style={{ color: theme.textDim }}>// What they designed. What we actually built.</div>

        <div className="flex gap-0 mb-8 overflow-x-auto" style={{ border: `1px solid ${theme.border}` }}>
          {comparisons.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className="px-4 py-3 text-xs tracking-widest uppercase font-bold whitespace-nowrap transition-all"
              style={{
                background: active === i ? theme.red : 'transparent',
                color: active === i ? '#000' : theme.textDim,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Courier New, monospace',
                flex: 1,
              }}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.red}`, padding: 20 }}>
            <div className="text-xs uppercase tracking-widest mb-1" style={{ color: theme.textDim }}>Designer time</div>
            <div className="text-2xl font-black" style={{ color: theme.textBright }}>{comp.weeks}</div>
            <div className="text-xs mt-1" style={{ color: theme.textDimmer }}>of discovery, exploration & vibes</div>
          </div>
          <div style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.acid}`, padding: 20 }}>
            <div className="text-xs uppercase tracking-widest mb-1" style={{ color: theme.textDim }}>Dev time</div>
            <div className="text-2xl font-black" style={{ color: theme.acid }}>{comp.devMinutes}</div>
            <div className="text-xs mt-1" style={{ color: theme.textDimmer }}>including a coffee break</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="tag mb-2">{comp.figmaLabel}</div>
            <div style={{ height: 240, overflow: 'hidden', border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.red}` }}>
              {comp.figma}
            </div>
          </div>
          <div>
            <div className="tag tag-acid mb-2">{comp.realLabel}</div>
            <div style={{ height: 240, overflow: 'hidden', border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.acid}` }}>
              {comp.real}
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs uppercase tracking-widest" style={{ color: theme.textDimmer }}>
          Click a section above to compare more crimes →
        </div>
      </div>
    </section>
  )
}

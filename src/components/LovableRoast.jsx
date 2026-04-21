import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const roastLines = [
  "A website for people who want to feel like they're building something without actually building anything.",
  "Congratulations. You paid $29/month to generate code you can't read, maintain, or debug.",
  "Lovable.dev: where 'I built an app' means 'I described an app to an AI and clicked export.'",
  "The product is called Lovable. The code it generates is not.",
  "Your Lovable project has 847 dependencies and you can explain 0 of them.",
  "Every senior dev who has to maintain your Lovable-generated codebase hates you specifically.",
  "You are not a developer. You are a prompt engineer for a product that shouldn't exist.",
  "Your startup idea isn't the problem. It's that you think shipping it on Lovable makes you technical.",
  "FAANG engineers spent years mastering their craft. You spent 45 minutes on Lovable. Same result? No.",
  "Lovable exists because venture capital will fund anything that makes people feel productive.",
]

const fakeFeatures = [
  { feature: "One-click deploy", reality: "Deploys without you understanding what you deployed" },
  { feature: "AI-powered", reality: "GPT wrapper with a $29/month markup" },
  { feature: "No code needed", reality: "Plenty of code — you just can't read it" },
  { feature: "Build your startup", reality: "Build a prototype you'll throw away" },
  { feature: "Ship in minutes", reality: "Maintain for never because you have no idea how it works" },
  { feature: "Professional quality", reality: "Until you need to change anything" },
  { feature: "Community support", reality: "Forum of other people who also can't code" },
  { feature: "Scalable", reality: "It has never been tested at scale by anyone" },
]

export default function LovableRoast() {
  const [roastIndex, setRoastIndex] = useState(0)
  const [tab, setTab] = useState('roast')

  const nextRoast = () => setRoastIndex(i => (i + 1) % roastLines.length)

  const { theme } = useTheme()

  return (
    <section id="lovable" className="py-24 px-6 md:px-16" style={{ borderTop: `1px solid ${theme.borderSubtle}` }}>
      <div className="max-w-4xl mx-auto">
        <div className="section-header" style={{ color: theme.textBright, borderLeftColor: theme.red }}>Lovable.dev — An Honest Review</div>
        <div className="section-sub" style={{ color: theme.textDim }}>// For people who want to call themselves developers without being one</div>

        {/* Mock browser chrome */}
        <div className="mb-8" style={{ border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.red}` }}>
          {/* Browser bar */}
          <div style={{ background: '#111', padding: '8px 16px', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', gap: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff2222' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffcc00' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#333' }} />
            </div>
            <div style={{ flex: 1, background: theme.bgCode, padding: '4px 12px', fontSize: 11, color: theme.textDim, fontFamily: 'monospace', borderRadius: 2 }}>
              lovable.dev
            </div>
            <div className="tag" style={{ fontSize: '9px' }}>NOT SECURE</div>
          </div>

          {/* Fake Lovable landing */}
          <div style={{ background: 'linear-gradient(135deg, #0a0a1e, #1a0a2e)', padding: 32, textAlign: 'center', position: 'relative' }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: '#fff', marginBottom: 8, fontFamily: 'sans-serif' }}>
              Build apps with AI
            </div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginBottom: 20, fontFamily: 'sans-serif' }}>
              No code required. No skills required. No shame required.
            </div>
            <div style={{ display: 'inline-block', background: 'linear-gradient(90deg, #ff6b9d, #c44d8a)', color: '#fff', padding: '12px 32px', fontFamily: 'sans-serif', fontWeight: 700, fontSize: 14, borderRadius: 4, cursor: 'not-allowed' }}>
              Start for free →
            </div>
            <div style={{ position: 'absolute', top: 12, right: 16, fontSize: 9, color: 'rgba(255,34,34,0.4)', fontFamily: 'monospace', letterSpacing: 1 }}>
              [ HONEST ANNOTATION MODE ON ]
            </div>

            {/* Red annotation callouts */}
            <div style={{ position: 'absolute', top: 16, left: 16, maxWidth: 180, textAlign: 'left' }}>
              <div style={{ border: '1px solid #ff222266', background: '#1a000066', padding: '6px 10px', fontSize: 9, color: '#ff4444', fontFamily: 'monospace', lineHeight: 1.4 }}>
                ← "Build apps" means "describe apps to an AI"
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 mb-6" style={{ border: `1px solid ${theme.border}` }}>
          {['roast', 'features', 'alternatives'].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="flex-1 py-3 text-xs tracking-widest uppercase font-bold transition-all"
              style={{
                background: tab === t ? theme.red : 'transparent',
                color: tab === t ? '#000' : theme.textDim,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Courier New, monospace',
              }}
            >
              {t === 'roast' ? 'The Roast' : t === 'features' ? 'Honest Features' : 'Actual Alternatives'}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === 'roast' && (
            <motion.div key="roast" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-6" style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.red}`, padding: 24 }}>
                <div className="tag mb-4">HONEST REVIEW #{roastIndex + 1}/{roastLines.length}</div>
                <motion.p
                  key={roastIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl leading-relaxed"
                  style={{ fontFamily: 'Courier New', fontStyle: 'italic', color: theme.textBright }}
                >
                  "{roastLines[roastIndex]}"
                </motion.p>
              </div>
              <button className="btn-brutal" style={{ background: theme.red }} onClick={nextRoast}>Next Truth →</button>
            </motion.div>
          )}

          {tab === 'features' && (
            <motion.div key="features" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="space-y-2">
                {fakeFeatures.map((f, i) => (
                  <div key={i} className="grid grid-cols-2 gap-0" style={{ border: `1px solid ${theme.borderSubtle}` }}>
                    <div style={{ background: theme.bgCard, padding: '12px 16px', borderRight: `1px solid ${theme.borderSubtle}` }}>
                      <div className="text-xs uppercase tracking-widest mb-1" style={{ color: theme.textDim }}>They say</div>
                      <div className="text-sm font-bold" style={{ color: theme.textBright }}>✓ {f.feature}</div>
                    </div>
                    <div style={{ background: theme.bgRedTint, padding: '12px 16px' }}>
                      <div className="text-xs uppercase tracking-widest mb-1" style={{ color: theme.textDim }}>They mean</div>
                      <div className="text-sm" style={{ color: theme.redText }}>✗ {f.reality}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {tab === 'alternatives' && (
            <motion.div key="alternatives" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'Learn React', time: '3 months', cost: 'Free', desc: 'Understand what you build. Ship things that work. Maintain them forever.', tag: 'RECOMMENDED' },
                  { name: 'Read the MDN Docs', time: '1 week', cost: 'Free', desc: 'HTML, CSS, JavaScript. The actual foundation. No middle man.', tag: 'HIGHLY RECOMMENDED' },
                  { name: 'Next.js Tutorial', time: '2 weeks', cost: 'Free', desc: 'Full-stack apps. Real deployments. Real understanding.', tag: 'SOLID' },
                  { name: 'Pay a real dev', time: '1 conversation', cost: 'Depends', desc: "Honest. They'll build something that actually works.", tag: 'HONEST OPTION' },
                ].map((alt, i) => (
                  <div key={i} style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.acid}`, padding: 24 }}>
                    <div className="tag tag-acid mb-3" style={{ fontSize: 9 }}>{alt.tag}</div>
                    <div className="font-black mb-2" style={{ color: theme.textBright }}>{alt.name}</div>
                    <div className="text-xs leading-relaxed mb-3" style={{ color: theme.textMuted }}>{alt.desc}</div>
                    <div className="flex gap-4 text-xs" style={{ color: theme.textDim }}>
                      <span>Time: <span style={{ color: theme.acid }}>{alt.time}</span></span>
                      <span>Cost: <span style={{ color: theme.acid }}>{alt.cost}</span></span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { buzzwords } from '../data/justifications'
import { useTheme } from '../ThemeContext'

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

const auditTemplates = [
  (url) => `After conducting a 3-week immersive discovery sprint on ${url || 'your website'}, our senior design strategists have identified critical misalignments in your ${rand(buzzwords)} architecture. The current implementation lacks intentional ${rand(buzzwords)} coherence, resulting in a 47% reduction in perceived brand equity. We recommend a full ${rand(buzzwords)} overhaul, beginning with a 6-week ideation phase.`,

  (url) => `Your website's ${rand(buzzwords)} is fundamentally broken. The visual hierarchy fails to guide the user's subconscious journey, and the ${rand(buzzwords)} system shows clear signs of developer interference. To restore ${rand(buzzwords)} integrity, we propose a comprehensive redesign initiative across all 23 touchpoints.`,

  (url) => `We have completed our proprietary UX Empathy Analysis™ on ${url || 'your digital presence'} and the findings are alarming. Your ${rand(buzzwords)} is in direct conflict with your ${rand(buzzwords)}, creating cognitive dissonance at every interaction. Our 14-week transformation roadmap begins at $18,500.`,
]

const auditItems = [
  { category: 'Brand DNA Alignment', score: Math.floor(Math.random() * 30) + 10, severity: 'CRITICAL' },
  { category: 'Whitespace Intentionality', score: Math.floor(Math.random() * 40) + 20, severity: 'HIGH' },
  { category: 'Typographic Rhythm', score: Math.floor(Math.random() * 50) + 30, severity: 'HIGH' },
  { category: 'Emotional Color Harmony', score: Math.floor(Math.random() * 60) + 20, severity: 'MEDIUM' },
  { category: 'Visual Breathing Room', score: Math.floor(Math.random() * 30) + 10, severity: 'CRITICAL' },
  { category: 'Micro-interaction Poeticism', score: Math.floor(Math.random() * 40) + 15, severity: 'HIGH' },
  { category: 'Sensory Journey Mapping', score: Math.floor(Math.random() * 50) + 20, severity: 'MEDIUM' },
  { category: 'Sub-pixel Optical Balance', score: Math.floor(Math.random() * 20) + 5, severity: 'CRITICAL' },
]

const recommendations = [
  { action: '6-Week Brand Discovery Sprint', cost: 12000, time: '6 weeks' },
  { action: 'Typographic Soul Realignment Workshop', cost: 4500, time: '2 weeks' },
  { action: 'Emotional Color Palette Re-harmonization', cost: 3200, time: '3 weeks' },
  { action: 'Whitespace Audit & Breathing Room Therapy', cost: 2800, time: '2 weeks' },
  { action: 'Full Visual Hierarchy Decomposition', cost: 8900, time: '4 weeks' },
  { action: 'Micro-interaction Poetry Session', cost: 5400, time: '3 weeks' },
  { action: 'Brand DNA Sequencing & Re-expression', cost: 15000, time: '8 weeks' },
]

export default function OverpricedAudit() {
  const [url, setUrl] = useState('')
  const [generated, setGenerated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [auditData, setAuditData] = useState(null)

  const runAudit = () => {
    if (!url.trim()) return
    setLoading(true)
    setTimeout(() => {
      const items = auditItems.map(i => ({ ...i, score: Math.floor(Math.random() * 50) + 10 }))
      const recs = recommendations.sort(() => Math.random() - 0.5).slice(0, 4)
      const total = recs.reduce((s, r) => s + r.cost, 0)
      const summary = auditTemplates[Math.floor(Math.random() * auditTemplates.length)](url)
      setAuditData({ items, recs, total, summary })
      setGenerated(true)
      setLoading(false)
    }, 2200)
  }

  const { theme } = useTheme()

  return (
    <section id="audit" className="py-24 px-6 md:px-16" style={{ borderTop: `1px solid ${theme.borderSubtle}` }}>
      <div className="max-w-4xl mx-auto">
        <div className="section-header" style={{ color: theme.textBright, borderLeftColor: theme.red }}>The $15,000 UX Audit</div>
        <div className="section-sub" style={{ color: theme.textDim }}>// Enter any URL. Get a fabricated crisis. Pay us to fix it.</div>

        {/* Input */}
        <div className="mb-6" style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.warn}`, padding: 24 }}>
          <div className="tag tag-warn mb-4">DESIGN AUDIT ENGINE v2.0</div>
          <div className="flex gap-0">
            <input
              type="text"
              value={url}
              onChange={e => setUrl(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && runAudit()}
              placeholder="yourwebsite.com"
              style={{
                flex: 1,
                background: theme.bgInput,
                border: `1px solid ${theme.border}`,
                borderRight: 'none',
                color: theme.textBright,
                padding: '12px 16px',
                fontFamily: 'Courier New',
                fontSize: 14,
                outline: 'none',
              }}
            />
            <button className="btn-brutal" onClick={runAudit} disabled={loading || !url.trim()} style={{ opacity: url.trim() ? 1 : 0.4, background: theme.red }}>
              {loading ? 'Analyzing...' : 'Run Audit'}
            </button>
          </div>
          <div className="text-xs mt-2 italic" style={{ color: theme.textDimmer }}>
            * This audit is satirical. Results are 100% fabricated. Just like real design audits.
          </div>
        </div>

        {loading && (
          <div className="text-center py-12" style={{ background: theme.bgCard, border: `1px solid ${theme.border}` }}>
            <div className="text-sm mb-4" style={{ color: theme.textDim }}>Running proprietary UX Empathy Analysis™<span className="blink">_</span></div>
            <div className="space-y-2 text-xs max-w-xs mx-auto" style={{ color: theme.textDimmer }}>
              {['Assessing brand DNA...', 'Measuring whitespace intention...', 'Evaluating typographic soul...', 'Calculating invoice...'].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span style={{ color: theme.textDimmer }}>{'>'}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {generated && auditData && !loading && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-4" style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.warn}`, padding: 24 }}>
              <div className="tag tag-warn mb-3">EXECUTIVE SUMMARY</div>
              <p className="text-sm leading-relaxed italic" style={{ color: theme.textMuted }}>"{auditData.summary}"</p>
              <div className="mt-3 text-xs" style={{ color: theme.textDimmer }}>— Senior Design Strategist, charged $450/hr</div>
            </div>

            <div className="mb-4" style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.red}`, padding: 24 }}>
              <div className="tag mb-4">UX HEALTH SCORECARD</div>
              <div className="space-y-3">
                {auditData.items.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span style={{ color: theme.textMuted }}>{item.category}</span>
                      <div className="flex gap-3">
                        <span className="tag" style={{ fontSize: 9, background: item.severity === 'CRITICAL' ? theme.red : item.severity === 'HIGH' ? '#ff8800' : '#666' }}>
                          {item.severity}
                        </span>
                        <span style={{ color: item.score < 40 ? theme.red : theme.warn }}>{item.score}/100</span>
                      </div>
                    </div>
                    <div className="progress-bar" style={{ background: theme.borderSubtle }}>
                      <motion.div className="progress-fill" initial={{ width: 0 }} animate={{ width: `${item.score}%` }} transition={{ delay: i * 0.05, duration: 0.6 }} style={{ background: item.score < 40 ? theme.red : theme.warn }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.red}`, padding: 24 }}>
              <div className="tag mb-4">RECOMMENDED ACTIONS</div>
              <div className="space-y-2 mb-4">
                {auditData.recs.map((rec, i) => (
                  <div key={i} className="flex justify-between items-center py-2" style={{ borderBottom: `1px solid ${theme.borderSubtle}` }}>
                    <div>
                      <div className="text-sm" style={{ color: theme.textBright }}>{rec.action}</div>
                      <div className="text-xs" style={{ color: theme.textDimmer }}>{rec.time}</div>
                    </div>
                    <div className="font-mono font-black" style={{ color: theme.textBright }}>${rec.cost.toLocaleString()}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center pt-3" style={{ borderTop: `1px solid ${theme.red}44` }}>
                <div>
                  <div className="font-black uppercase tracking-widest" style={{ color: theme.textBright }}>Total Investment</div>
                  <div className="text-xs" style={{ color: theme.textDimmer }}>A developer could fix all of this for $200</div>
                </div>
                <div className="text-3xl font-black" style={{ color: theme.red }}>${auditData.total.toLocaleString()}</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

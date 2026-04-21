import { useState } from 'react'
import { motion } from 'framer-motion'
import { shameItems } from '../data/hallOfShame'
import { useTheme } from '../ThemeContext'

export default function HallOfShame() {
  const [active, setActive] = useState(null)
  const { theme } = useTheme()

  return (
    <section id="shame" className="py-24 px-6 md:px-16" style={{ borderTop: `1px solid ${theme.borderSubtle}` }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-header" style={{ color: theme.textBright, borderLeftColor: theme.red }}>Dribbble Hall of Shame</div>
        <div className="section-sub" style={{ color: theme.textDim }}>// Beautiful. Unusable. Celebrated.</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {shameItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="cursor-pointer"
              style={{
                background: theme.bgCard,
                border: `1px solid ${theme.border}`,
                borderTop: `2px solid ${active === item.id ? theme.warn : theme.red}`,
                padding: 24,
              }}
              onClick={() => setActive(active === item.id ? null : item.id)}
            >
              {/* Mock Dribbble preview — always dark regardless of theme, it's satirical content */}
              <div
                className="mb-4 flex items-center justify-center"
                style={{
                  height: 140,
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: 20, left: 20, width: 60, height: 8, background: 'rgba(255,255,255,0.08)', borderRadius: 2 }} />
                <div style={{ position: 'absolute', top: 36, left: 20, width: 100, height: 6, background: 'rgba(255,255,255,0.04)', borderRadius: 2 }} />
                <div style={{ position: 'absolute', top: 50, left: 20, width: 80, height: 6, background: 'rgba(255,255,255,0.04)', borderRadius: 2 }} />
                <div style={{ position: 'absolute', bottom: 16, right: 16, width: 60, height: 24, background: '#ff2222', borderRadius: 2, opacity: 0.6 }} />
                <div style={{ position: 'absolute', top: 16, right: 16, width: 36, height: 36, background: 'rgba(255,204,0,0.15)', borderRadius: '50%' }} />
                <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: 10, letterSpacing: 3 }}>[ AWARD WINNING DESIGN ]</span>
              </div>

              <div className="flex items-center gap-4 mb-3">
                <span className="text-xs" style={{ color: theme.textDim }}>♥ {item.likes}</span>
                <span className="text-xs" style={{ color: theme.textDim }}>◈ {item.comments}</span>
                <span className="tag ml-auto" style={{ fontSize: 9 }}>{item.tag}</span>
              </div>

              <div className="font-bold mb-2 text-sm" style={{ color: theme.textBright }}>{item.title}</div>
              <div className="text-xs font-black tracking-widest mb-3 uppercase" style={{ color: theme.red }}>{item.crime}</div>

              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1" style={{ color: theme.textDimmer }}>
                  <span>CRIME SEVERITY</span>
                  <span style={{ color: item.severity >= 95 ? theme.red : theme.warn }}>{item.severity}%</span>
                </div>
                <div className="progress-bar" style={{ background: theme.borderSubtle }}>
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.severity}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    style={{ background: item.severity >= 95 ? theme.red : theme.warn }}
                  />
                </div>
              </div>

              {active === item.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-sm leading-relaxed pt-3 mt-1"
                  style={{ borderTop: `1px solid ${theme.border}`, color: theme.textMuted }}
                >
                  {item.description}
                </motion.div>
              )}

              <div className="text-xs mt-2 uppercase tracking-widest" style={{ color: theme.textDimmer }}>
                {active === item.id ? '▲ Hide details' : '▼ Read the crime'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { timeline } from '../data/dayInLife'
import { useTheme } from '../ThemeContext'

export default function DayInLife() {
  const [revealed, setRevealed] = useState(0)
  const { theme } = useTheme()

  return (
    <section id="dayinlife" className="py-24 px-6 md:px-16" style={{ borderTop: `1px solid ${theme.borderSubtle}` }}>
      <div className="max-w-3xl mx-auto">
        <div className="section-header" style={{ color: theme.textBright, borderLeftColor: theme.red }}>A Day in the Life</div>
        <div className="section-sub" style={{ color: theme.textDim }}>// 8 billable hours. Proof inside.</div>

        <div className="relative">
          <div className="absolute left-16 top-0 bottom-0 w-px" style={{ background: theme.borderSubtle }} />

          <div className="space-y-0">
            {timeline.slice(0, revealed).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex gap-4 items-start"
              >
                <div className="w-14 text-right shrink-0 pt-3">
                  <span className="text-xs font-mono" style={{ color: item.color === '#ff2222' ? theme.red : theme.textDimmer }}>
                    {item.time}
                  </span>
                </div>

                <div className="relative shrink-0 flex flex-col items-center" style={{ width: 16 }}>
                  <div
                    className="w-4 h-4 flex items-center justify-center text-xs font-bold mt-3 z-10"
                    style={{
                      background: item.color === '#ff2222' ? theme.bgRedTint : item.color === '#00ff41' ? theme.bgGreenTint : theme.bgCard,
                      border: `1px solid ${item.color === '#ff2222' ? theme.red : item.color === '#00ff41' ? theme.acid : theme.border}`,
                      color: item.color === '#ff2222' ? theme.red : item.color === '#00ff41' ? theme.acid : theme.textDim,
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                <div className="flex-1 mb-3" style={{
                  background: theme.bgCard,
                  border: `1px solid ${theme.border}`,
                  borderTop: `2px solid ${item.color === '#ff2222' ? theme.red : item.color === '#00ff41' ? theme.acid : theme.border}`,
                  padding: 16,
                }}>
                  <div className="font-bold text-sm mb-1" style={{ color: theme.textBright }}>{item.activity}</div>
                  <div className="text-xs leading-relaxed" style={{ color: theme.textDim }}>{item.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex gap-4 items-center ml-20">
            {revealed < timeline.length ? (
              <button className="btn-brutal" style={{ background: theme.red }} onClick={() => setRevealed(r => Math.min(r + 1, timeline.length))}>
                Next Hour →
              </button>
            ) : (
              <div>
                <div className="mb-4" style={{
                  background: theme.bgGreenTint,
                  border: `1px solid ${theme.acid}33`,
                  borderTop: `2px solid ${theme.acid}`,
                  padding: 20,
                  maxWidth: 400,
                }}>
                  <div className="font-black uppercase tracking-widest mb-1" style={{ color: theme.acid }}>End of Day</div>
                  <div className="text-sm" style={{ color: theme.textMuted }}>Total output: 1 button moved 2px. $2,400 billed. No deliverables.</div>
                </div>
                <button className="btn-acid" style={{ color: theme.acid, borderColor: theme.acid }} onClick={() => setRevealed(0)}>Replay the Tragedy</button>
              </div>
            )}
            {revealed > 0 && revealed < timeline.length && (
              <span className="text-xs uppercase tracking-widest" style={{ color: theme.textDimmer }}>
                {revealed}/{timeline.length} hours observed
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

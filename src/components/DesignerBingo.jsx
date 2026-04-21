import { useState } from 'react'
import { motion } from 'framer-motion'
import { bingoItems } from '../data/bingoItems'
import { useTheme } from '../ThemeContext'

function checkWin(marked) {
  const size = 5
  for (let r = 0; r < size; r++) {
    if ([0,1,2,3,4].every(c => marked.has(r * size + c))) return true
  }
  for (let c = 0; c < size; c++) {
    if ([0,1,2,3,4].every(r => marked.has(r * size + c))) return true
  }
  if ([0,6,12,18,24].every(i => marked.has(i))) return true
  if ([4,8,12,16,20].every(i => marked.has(i))) return true
  return false
}

export default function DesignerBingo() {
  const [marked, setMarked] = useState(new Set([11]))
  const [won, setWon] = useState(false)
  const { theme } = useTheme()

  const toggle = (i) => {
    if (i === 11) return
    const next = new Set(marked)
    next.has(i) ? next.delete(i) : next.add(i)
    setMarked(next)
    setWon(checkWin(next))
  }

  const reset = () => {
    setMarked(new Set([11]))
    setWon(false)
  }

  const getCellStyle = (i) => {
    const isMarked = marked.has(i)
    const isFree = i === 11
    if (isFree) return {
      background: '#ff2222', color: '#000', border: '1px solid #ff2222',
      fontWeight: 900, cursor: 'default',
    }
    if (isMarked) return {
      background: theme.bgRedTint, color: theme.red,
      border: `1px solid ${theme.red}`, fontWeight: 700,
    }
    return {
      background: theme.bgCard, color: theme.textDim,
      border: `1px solid ${theme.border}`, cursor: 'pointer',
    }
  }

  return (
    <section id="bingo" className="py-24 px-6 md:px-16" style={{ borderTop: `1px solid ${theme.borderSubtle}` }}>
      <div className="max-w-3xl mx-auto">
        <div className="section-header" style={{ color: theme.textBright, borderLeftColor: theme.red }}>Designer Bingo</div>
        <div className="section-sub" style={{ color: theme.textDim }}>// Check off every offense. Win every sprint.</div>

        {won && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 text-center"
            style={{ background: theme.bgGreenTint, border: `1px solid ${theme.acid}33`, borderTop: `2px solid ${theme.acid}`, padding: 24 }}
          >
            <div className="text-3xl font-black uppercase tracking-widest mb-2" style={{ color: theme.acid }}>BINGO</div>
            <div className="text-sm" style={{ color: theme.textMuted }}>You've experienced enough designer bullshit to fill a card.</div>
            <div className="text-xs mt-1" style={{ color: theme.textDim }}>Seek therapy. Or become a dev.</div>
          </motion.div>
        )}

        <div className="grid gap-1 mb-6" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {['B','I','N','G','O'].map(l => (
            <div key={l} className="text-center font-black text-xl py-2" style={{ color: theme.red }}>{l}</div>
          ))}
          {bingoItems.map((item, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggle(i)}
              style={{
                ...getCellStyle(i),
                minHeight: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 8px',
                fontSize: 11,
                textAlign: 'center',
                lineHeight: 1.3,
                transition: 'all 0.1s',
                letterSpacing: 0.5,
              }}
            >
              {i === 11 ? (
                <div><div className="font-black">FREE</div><div className="text-xs">SPACE</div></div>
              ) : item}
            </motion.div>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <button className="btn-brutal" style={{ background: theme.red }} onClick={reset}>Reset Card</button>
          <span className="text-xs uppercase tracking-widest" style={{ color: theme.textDim }}>
            {marked.size - 1}/24 offenses witnessed
          </span>
        </div>
      </div>
    </section>
  )
}

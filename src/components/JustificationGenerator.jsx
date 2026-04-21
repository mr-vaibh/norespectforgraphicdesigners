import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { subjects, actions, outcomes, buzzwords, designerExcuses } from '../data/justifications'
import { useTheme } from '../ThemeContext'

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateJustification() {
  return `${rand(subjects)} ${rand(actions)} ${rand(outcomes)}`
}

function generateInvoice() {
  const items = [
    { name: 'Initial Discovery Session', price: Math.floor(Math.random() * 3000) + 2000 },
    { name: 'Mood Board Curation (Pinterest)', price: Math.floor(Math.random() * 1500) + 800 },
    { name: 'Font Feelings Workshop', price: Math.floor(Math.random() * 2000) + 1200 },
    { name: rand(buzzwords) + ' Alignment', price: Math.floor(Math.random() * 4000) + 3000 },
    { name: 'Moving Logo 3px to the Left', price: Math.floor(Math.random() * 800) + 400 },
    { name: 'Breathing Room Audit', price: Math.floor(Math.random() * 1200) + 600 },
    { name: rand(buzzwords) + ' Strategy', price: Math.floor(Math.random() * 5000) + 4000 },
    { name: 'Vibes Assessment (Half Day)', price: Math.floor(Math.random() * 2500) + 1500 },
  ]
  return items
}

export default function JustificationGenerator() {
  const { theme } = useTheme()
  const [justification, setJustification] = useState(generateJustification())
  const [excuse, setExcuse] = useState(rand(designerExcuses))
  const [invoiceItems, setInvoiceItems] = useState(generateInvoice())
  const [tab, setTab] = useState('justify')
  const [copied, setCopied] = useState(false)
  const [generating, setGenerating] = useState(false)

  const total = invoiceItems.reduce((s, i) => s + i.price, 0)

  const handleGenerate = () => {
    setGenerating(true)
    setTimeout(() => {
      setJustification(generateJustification())
      setExcuse(rand(designerExcuses))
      setInvoiceItems(generateInvoice())
      setGenerating(false)
    }, 300)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(justification)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="generator" className="py-24 px-6 md:px-16" style={{ borderTop: `1px solid ${theme.borderSubtle}` }}>
      <div className="max-w-4xl mx-auto">
        <div className="section-header" style={{ color: theme.textBright, borderLeftColor: theme.red }}>Designer Justification Generator</div>
        <div className="section-sub" style={{ color: theme.textDim }}>// Infinite bullshit, zero accountability</div>

        {/* Tabs */}
        <div className="flex gap-0 mb-8" style={{ border: `1px solid ${theme.border}` }}>
          {['justify', 'excuse', 'invoice'].map(t => (
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
              {t === 'justify' ? 'Justify Anything' : t === 'excuse' ? 'Make Excuses' : 'Generate Invoice'}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === 'justify' && (
            <motion.div key="justify" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-6 relative" style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.red}`, padding: 24 }}>
                <div className="tag mb-4">Designer Says:</div>
                {generating ? (
                  <div className="text-xl py-4" style={{ color: theme.textDim }}>Generating bullshit<span className="blink">_</span></div>
                ) : (
                  <motion.p
                    key={justification}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xl md:text-2xl leading-relaxed font-mono"
                    style={{ fontStyle: 'italic', color: theme.textBright }}
                  >
                    "{justification}"
                  </motion.p>
                )}
                <div className="mt-4 text-xs uppercase tracking-widest" style={{ color: theme.textDimmer }}>
                  — A real graphic designer, probably
                </div>
              </div>
              <div className="flex gap-3 flex-wrap">
                <button className="btn-brutal" style={{ background: theme.red }} onClick={handleGenerate}>Generate More BS</button>
                <button className="btn-acid" style={{ color: theme.acid, borderColor: theme.acid }} onClick={handleCopy}>
                  {copied ? 'Copied ✓' : 'Copy & Use in Standup'}
                </button>
              </div>
            </motion.div>
          )}

          {tab === 'excuse' && (
            <motion.div key="excuse" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-6" style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.warn}`, padding: 24 }}>
                <div className="tag tag-warn mb-4">When Questioned:</div>
                {generating ? (
                  <div className="text-xl py-4" style={{ color: theme.textDim }}>Loading excuses<span className="blink">_</span></div>
                ) : (
                  <motion.p
                    key={excuse}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-3xl leading-relaxed font-mono font-bold"
                    style={{ color: theme.warn }}
                  >
                    "{excuse}"
                  </motion.p>
                )}
                <div className="mt-4 text-xs uppercase tracking-widest" style={{ color: theme.textDimmer }}>
                  — Said in every design review ever
                </div>
              </div>
              <button className="btn-warn" onClick={handleGenerate}>Next Excuse</button>
            </motion.div>
          )}

          {tab === 'invoice' && (
            <motion.div key="invoice" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-6" style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.red}`, padding: 24 }}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="font-black text-lg uppercase tracking-widest" style={{ color: theme.textBright }}>CREATIVE INVOICE</div>
                    <div className="text-xs mt-1" style={{ color: theme.textDim }}>Design Studio™ — We Make It Feel Premium</div>
                  </div>
                  <div className="tag">NET 90</div>
                </div>
                <div style={{ borderTop: `1px solid ${theme.border}`, marginBottom: 16 }} />
                {invoiceItems.map((item, i) => (
                  <div key={i} className="flex justify-between py-2 text-sm" style={{ borderBottom: `1px solid ${theme.borderSubtle}` }}>
                    <span style={{ color: theme.textMuted }}>{item.name}</span>
                    <span className="font-mono" style={{ color: theme.textBright }}>${item.price.toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-4" style={{ borderTop: `1px solid ${theme.red}33`, marginTop: 8 }}>
                  <span className="font-black uppercase tracking-widest" style={{ color: theme.textBright }}>Total</span>
                  <span className="font-black text-xl" style={{ color: theme.red }}>${total.toLocaleString()}</span>
                </div>
                <div className="mt-4 text-xs italic" style={{ color: theme.textDimmer }}>
                  * A developer could have shipped this entire project for the cost of the font licensing alone.
                </div>
              </div>
              <button className="btn-brutal" style={{ background: theme.red }} onClick={handleGenerate}>New Invoice</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

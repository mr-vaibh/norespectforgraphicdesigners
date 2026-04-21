import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return { r, g, b }
}

function luminance({ r, g, b }) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c /= 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.0722 * bs + 0.7152 * gs
}

function contrast(hex1, hex2) {
  const l1 = luminance(hexToRgb(hex1))
  const l2 = luminance(hexToRgb(hex2))
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return ((lighter + 0.05) / (darker + 0.05)).toFixed(2)
}

function randomHex() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')
}

function generatePalette() {
  // Generate "trendy" palette — often pastel/low contrast
  const base = [
    '#f0e6d3', '#e8d5c4', '#d4c5b0', '#c9b99a', '#b8a88a',
    '#e8e0f0', '#d5c8e8', '#f5e6e8', '#e8f0e8', '#f0f0e8',
  ]
  const colors = []
  for (let i = 0; i < 5; i++) {
    colors.push(base[Math.floor(Math.random() * base.length)])
  }
  return colors
}

const presets = [
  {
    name: "Coastal Serenity™",
    palette: ['#e8f4f8', '#b8d4e0', '#88b4c8', '#5894b0', '#2874a0'],
    bg: '#f8fcff',
    fg: '#e8f4f8',
    label: 'The "peaceful" palette that makes text invisible',
  },
  {
    name: "Desert Bloom™",
    palette: ['#fdf6ec', '#f5e6cc', '#edceaa', '#e5b688', '#dd9e66'],
    bg: '#fdf6ec',
    fg: '#f5e6cc',
    label: 'Warm tones, zero readability',
  },
  {
    name: "Urban Minimal™",
    palette: ['#f5f5f5', '#e0e0e0', '#c5c5c5', '#aaaaaa', '#8f8f8f'],
    bg: '#f5f5f5',
    fg: '#e0e0e0',
    label: 'The "clean" look that fails WCAG by 400%',
  },
  {
    name: "Gen Z Brand™",
    palette: ['#ff6b9d', '#c44d8a', '#ff9f1c', '#cbf3f0', '#2ec4b6'],
    bg: '#ff9f1c',
    fg: '#cbf3f0',
    label: 'Trend-chasing catastrophe',
  },
]

export default function ColorCrimeScene() {
  const [selected, setSelected] = useState(0)
  const [custom, setCustom] = useState(null)
  const { theme } = useTheme()

  const current = custom || presets[selected]
  const textContrast = contrast(current.fg || current.palette[1], current.bg || current.palette[0])
  const rating = parseFloat(textContrast)
  const passAA = rating >= 4.5
  const passAALarge = rating >= 3
  const passAAA = rating >= 7

  return (
    <section id="colors" className="py-24 px-6 md:px-16" style={{ borderTop: `1px solid ${theme.borderSubtle}` }}>
      <div className="max-w-4xl mx-auto">
        <div className="section-header" style={{ color: theme.textBright, borderLeftColor: theme.red }}>Color Palette Crime Scene</div>
        <div className="section-sub" style={{ color: theme.textDim }}>// Award-winning palettes. Unreadable by design.</div>

        <div className="flex gap-2 flex-wrap mb-6">
          {presets.map((p, i) => (
            <button
              key={i}
              onClick={() => { setSelected(i); setCustom(null) }}
              className="text-xs px-4 py-2 uppercase tracking-widest font-bold transition-all"
              style={{
                background: selected === i && !custom ? theme.red : theme.bgCard,
                color: selected === i && !custom ? '#000' : theme.textDim,
                border: `1px solid ${theme.border}`,
                cursor: 'pointer',
                fontFamily: 'Courier New',
              }}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="tag mb-3">{current.name || 'Custom'}</div>
            <div className="text-xs mb-4 leading-relaxed" style={{ color: theme.textDim }}>{current.label || 'Your custom palette'}</div>

            <div className="flex mb-4">
              {current.palette.map((color, i) => (
                <div key={i} className="flex-1" style={{ height: 60, background: color, position: 'relative' }}>
                  <div style={{ position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)', fontSize: 8, color: 'rgba(0,0,0,0.5)', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>{color}</div>
                </div>
              ))}
            </div>

            <div className="p-4 mb-4" style={{ background: current.bg || current.palette[0] }}>
              <p style={{ color: current.fg || current.palette[1], fontSize: 14, fontFamily: 'sans-serif', margin: 0 }}>
                This is body text on your "beautiful" background.
              </p>
              <p style={{ color: current.fg || current.palette[1], fontSize: 12, fontFamily: 'sans-serif', margin: '4px 0 0', opacity: 0.8 }}>
                Can you read this? Because your users can't.
              </p>
            </div>

            <div className="text-xs italic" style={{ color: theme.textDimmer }}>
              ↑ This is what Dribbble calls "elegant." WCAG calls it "illegal."
            </div>
          </div>

          <div style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.warn}`, padding: 24 }}>
            <div className="tag tag-warn mb-4">WCAG AUDIT REPORT</div>

            <div className="mb-4">
              <div className="text-xs uppercase tracking-widest mb-1" style={{ color: theme.textDim }}>Contrast Ratio</div>
              <div className="text-4xl font-black" style={{ color: passAA ? theme.acid : theme.red }}>
                {textContrast}:1
              </div>
              <div className="text-xs mt-1" style={{ color: theme.textDimmer }}>Required minimum: 4.5:1 (AA)</div>
            </div>

            <div className="space-y-2 mb-6">
              {[
                { label: 'AA (Normal Text)', pass: passAA, req: '≥ 4.5:1' },
                { label: 'AA Large Text', pass: passAALarge, req: '≥ 3:1' },
                { label: 'AAA (Enhanced)', pass: passAAA, req: '≥ 7:1' },
              ].map(check => (
                <div key={check.label} className="flex items-center justify-between py-2" style={{ borderBottom: `1px solid ${theme.borderSubtle}` }}>
                  <div>
                    <div className="text-xs" style={{ color: theme.textMuted }}>{check.label}</div>
                    <div className="text-xs" style={{ color: theme.textDimmer }}>{check.req}</div>
                  </div>
                  <div className="font-black text-xs tracking-widest px-3 py-1" style={{
                    background: check.pass ? theme.bgGreenTint : theme.bgRedTint,
                    color: check.pass ? theme.acid : theme.red,
                    border: `1px solid ${check.pass ? theme.acid : theme.red}`,
                  }}>
                    {check.pass ? '✓ PASS' : '✗ FAIL'}
                  </div>
                </div>
              ))}
            </div>

            {!passAA && (
              <div className="p-3 text-xs leading-relaxed" style={{ background: theme.bgRedTint, border: `1px solid ${theme.red}33`, color: theme.redText }}>
                ⚠ This palette violates WCAG 2.1 AA guidelines. People with low vision,
                color blindness, or those reading in sunlight literally cannot read this.
                But it does look great on Dribbble.
              </div>
            )}

            {passAAA && (
              <div className="p-3 text-xs leading-relaxed" style={{ background: theme.bgGreenTint, border: `1px solid ${theme.acid}33`, color: theme.acid }}>
                ✓ Somehow this one actually passes. A designer did this by accident.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

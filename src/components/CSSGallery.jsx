import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const pieces = [
  {
    id: 1,
    title: "Pure CSS Animated Loader",
    devTime: "15 minutes",
    designerVersion: "3 weeks + $2,000 + After Effects",
    code: `div {
  width: 40px; height: 40px;
  border: 3px solid #333;
  border-top-color: #ff2222;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}`,
    demo: (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div style={{
          width: 48, height: 48,
          border: '3px solid #1a1a1a',
          borderTopColor: '#ff2222',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    ),
  },
  {
    id: 2,
    title: "CSS-Only Dark Mode",
    devTime: "One checkbox. Zero JS.",
    designerVersion: "Two separate Figma files. Charged twice.",
    code: `input:checked ~ body {
  --bg: #0a0a0a;
  --text: #fff;
}`,
    demo: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 12 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ width: 44, height: 24, background: '#ff2222', borderRadius: 12, position: 'relative' }}>
            <div style={{ width: 18, height: 18, background: '#fff', borderRadius: '50%', position: 'absolute', top: 3, right: 4, transition: 'all 0.3s' }} />
          </div>
          <span style={{ fontSize: 11, color: '#00ff41', fontFamily: 'monospace' }}>DARK MODE: ON</span>
        </div>
        <div style={{ fontSize: 10, color: '#333', fontFamily: 'monospace' }}>:checked pseudo-class only</div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Infinite Responsive Grid",
    devTime: "One line of CSS",
    designerVersion: "6 breakpoint mockups. 3 weeks. Still wrong.",
    code: `grid-template-columns:
  repeat(auto-fill, minmax(300px, 1fr));`,
    demo: (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))', gap: 4, height: '100%', padding: 8, alignContent: 'start' }}>
        {[...Array(12)].map((_, i) => (
          <div key={i} style={{ background: i % 3 === 0 ? '#1a0000' : '#111', border: '1px solid #222', height: 36 }} />
        ))}
      </div>
    ),
  },
  {
    id: 4,
    title: "Glassmorphism Card",
    devTime: "Two CSS properties.",
    designerVersion: "$2,400 design system. Charged by the blur.",
    code: `backdrop-filter: blur(12px);
background: rgba(255,255,255,0.05);
border: 1px solid rgba(255,255,255,0.1);`,
    demo: (
      <div style={{
        background: 'linear-gradient(135deg, #ff2222 0%, #0a0a2e 100%)',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}>
        <div style={{
          backdropFilter: 'blur(12px)',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '20px 24px',
          width: '100%',
        }}>
          <div style={{ color: '#fff', fontSize: 12, fontWeight: 900, marginBottom: 4 }}>GLASS CARD</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10 }}>Two properties. $2,400 saved.</div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "CSS Custom Properties Theme",
    devTime: "Define once. Use everywhere.",
    designerVersion: "Hardcoded colors across 400 Figma frames.",
    code: `:root { --red: #ff2222; --acid: #00ff41; }
.btn { background: var(--red); }
/* Rebrand: change 1 line */`,
    demo: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, height: '100%', justifyContent: 'center', padding: 16 }}>
        <div style={{ background: '#ff2222', color: '#000', padding: '8px 16px', fontSize: 11, fontWeight: 900, textAlign: 'center' }}>var(--red)</div>
        <div style={{ background: '#00ff41', color: '#000', padding: '8px 16px', fontSize: 11, fontWeight: 900, textAlign: 'center' }}>var(--acid)</div>
        <div style={{ background: '#ffcc00', color: '#000', padding: '8px 16px', fontSize: 11, fontWeight: 900, textAlign: 'center' }}>var(--warn)</div>
        <div style={{ fontSize: 9, color: '#333', textAlign: 'center', fontFamily: 'monospace' }}>change :root → everything updates</div>
      </div>
    ),
  },
  {
    id: 6,
    title: "CSS Grid Named Areas",
    devTime: "ASCII art that actually works.",
    designerVersion: "9 separate layout Figma components.",
    code: `grid-template-areas:
  "header header"
  "sidebar main"
  "footer footer";`,
    demo: (
      <div style={{
        display: 'grid',
        gridTemplateAreas: '"header header" "sidebar main" "footer footer"',
        gridTemplateColumns: '1fr 2fr',
        gridTemplateRows: 'auto 1fr auto',
        gap: 4,
        height: '100%',
        padding: 8,
      }}>
        {[
          { area: 'header', label: 'HEADER', color: '#1a0000' },
          { area: 'sidebar', label: 'SIDE', color: '#0a1a0a' },
          { area: 'main', label: 'MAIN', color: '#111' },
          { area: 'footer', label: 'FOOTER', color: '#1a0000' },
        ].map(s => (
          <div key={s.area} style={{ gridArea: s.area, background: s.color, border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#444', letterSpacing: 2, padding: 4 }}>
            {s.label}
          </div>
        ))}
      </div>
    ),
  },
]

export default function CSSGallery() {
  const { theme } = useTheme()

  return (
    <section id="css" className="py-24 px-6 md:px-16" style={{ borderTop: `1px solid ${theme.borderSubtle}` }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-header" style={{ color: theme.textBright, borderLeftColor: theme.red }}>CSS Art Gallery</div>
        <div className="section-sub" style={{ color: theme.textDim }}>// A developer did this. No Adobe products were harmed.</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pieces.map((piece, i) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.acid}`, padding: 24 }}
            >
              <div style={{ height: 140, background: theme.bgCode, marginBottom: 16, overflow: 'hidden', border: `1px solid ${theme.borderSubtle}` }}>
                {piece.demo}
              </div>

              <div className="tag tag-acid mb-2">CSS Only</div>
              <div className="font-bold text-sm mb-3" style={{ color: theme.textBright }}>{piece.title}</div>

              <div className="grid grid-cols-2 gap-2 mb-3">
                <div>
                  <div className="text-xs uppercase tracking-widest mb-1" style={{ color: theme.textDimmer }}>Dev time</div>
                  <div className="text-xs font-bold" style={{ color: theme.acid }}>{piece.devTime}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-1" style={{ color: theme.textDimmer }}>Designer version</div>
                  <div className="text-xs" style={{ color: theme.red }}>{piece.designerVersion}</div>
                </div>
              </div>

              <div style={{ background: theme.bgCode, border: `1px solid ${theme.borderSubtle}`, padding: '10px 12px' }}>
                <pre style={{ fontSize: 10, color: theme.acid, margin: 0, fontFamily: 'Courier New', lineHeight: 1.6, overflowX: 'auto' }}>
                  {piece.code}
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const items = [
  {
    thing: "Making it responsive",
    designerThinks: "Requires 6 separate Figma files for each breakpoint. 3 weeks of work minimum.",
    devReality: "display: flex; flex-wrap: wrap;",
    code: `/* The entire solution */
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.card { flex: 1 1 300px; }`,
    effort: 2,
    designerEffort: 95,
  },
  {
    thing: "Dark Mode",
    designerThinks: "Two completely separate design systems. Charge twice. Deliver never.",
    devReality: "@media (prefers-color-scheme: dark) { }",
    code: `@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0a0a0a;
    --text: #fff;
  }
}`,
    effort: 5,
    designerEffort: 100,
  },
  {
    thing: "Accessibility",
    designerThinks: "Something developers deal with. Not a design concern.",
    devReality: "aria-label, semantic HTML, and contrast ratios. It was always a design concern.",
    code: `<!-- Semantic HTML is free accessibility -->
<button aria-label="Close menu">
  <span aria-hidden="true">✕</span>
</button>
<nav aria-label="Main navigation">`,
    effort: 10,
    designerEffort: 0,
    note: "Designers don't think about this at all. 0/100 effort. That's the problem.",
  },
  {
    thing: "Animations",
    designerThinks: "Requires After Effects, Lottie export, 3 developer meetings, and a miracle.",
    devReality: "CSS @keyframes and transition. Native. Free. No dependencies.",
    code: `@keyframes slide-in {
  from { transform: translateY(-20px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}
.modal { animation: slide-in 0.3s ease; }`,
    effort: 8,
    designerEffort: 90,
  },
  {
    thing: "Custom Fonts",
    designerThinks: "License 7 fonts. Use them all. Mix weights randomly. Pair a serif with a display font and a variable and a handwritten one.",
    devReality: "@font-face { } or a Google Fonts link. One font. Maybe two.",
    code: `/* One import. Done. */
@import url('https://fonts.googleapis.com/
  css2?family=Inter:wght@400;700&display=swap');

body { font-family: 'Inter', sans-serif; }`,
    effort: 3,
    designerEffort: 80,
  },
  {
    thing: "Loading States",
    designerThinks: "Never designed. Never discussed. Developer problem.",
    devReality: "CSS skeleton loaders. 20 lines. Always designed in advance. By good designers.",
    code: `@keyframes shimmer {
  to { background-position: 200% center; }
}
.skeleton {
  background: linear-gradient(
    90deg, #111 25%, #1a1a1a 50%, #111 75%
  );
  background-size: 200%;
  animation: shimmer 1.5s infinite;
}`,
    effort: 15,
    designerEffort: 0,
    note: "The designer forgot this exists. You're welcome.",
  },
  {
    thing: "Error States",
    designerThinks: "Error states? The app won't have errors. I didn't design for that.",
    devReality: "Every app has errors. Every state must be designed. This is Design 101.",
    code: `/* Must be designed upfront */
.error-state {
  border: 1px solid #ff2222;
  color: #ff2222;
}
/* But designer never provided this */`,
    effort: 10,
    designerEffort: 0,
    note: "0% effort from the designer. 100% reality for users.",
  },
  {
    thing: "Print Styles",
    designerThinks: "Print? Like... paper? Nobody does that.",
    devReality: "@media print exists. Has existed since 1994. Still relevant.",
    code: `@media print {
  nav, .sidebar, .ads { display: none; }
  body { color: #000; background: #fff; }
  a::after { content: ' (' attr(href) ')'; }
}`,
    effort: 5,
    designerEffort: 0,
  },
]

export default function ThingsDesignersThinkAreHard() {
  const [active, setActive] = useState(0)
  const { theme } = useTheme()
  const item = items[active]

  return (
    <section id="hardthings" className="py-24 px-6 md:px-16" style={{ borderTop: `1px solid ${theme.borderSubtle}` }}>
      <div className="max-w-5xl mx-auto">
        <div className="section-header" style={{ color: theme.textBright, borderLeftColor: theme.red }}>Things Designers Think Are Hard</div>
        <div className="section-sub" style={{ color: theme.textDim }}>// Spoiler: they're not. CSS has handled these since 1996.</div>

        <div className="grid md:grid-cols-3 gap-0" style={{ border: `1px solid ${theme.border}` }}>
          <div style={{ borderRight: `1px solid ${theme.border}` }}>
            {items.map((it, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className="cursor-pointer transition-all"
                style={{
                  padding: '14px 16px',
                  borderBottom: `1px solid ${theme.borderSubtle}`,
                  background: active === i ? theme.bgRedTint : 'transparent',
                  borderLeft: active === i ? `3px solid ${theme.red}` : '3px solid transparent',
                }}
              >
                <div className="text-sm font-bold" style={{ color: active === i ? theme.textBright : theme.textDim }}>{it.thing}</div>
                <div className="flex gap-2 mt-1">
                  <div style={{ width: `${it.designerEffort}%`, height: 2, background: theme.red, maxWidth: '100%' }} />
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                style={{ padding: 24 }}
              >
                <div className="tag mb-4">{item.thing}</div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-2" style={{ color: theme.textDimmer }}>Designer thinks</div>
                    <div className="text-sm leading-relaxed" style={{ fontStyle: 'italic', color: theme.textMuted }}>
                      "{item.designerThinks}"
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-2" style={{ color: theme.textDimmer }}>Dev reality</div>
                    <div className="text-sm leading-relaxed" style={{ color: theme.acid }}>
                      {item.devReality}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1" style={{ color: theme.textDimmer }}>
                    <span>DESIGNER PERCEIVED DIFFICULTY</span>
                    <span style={{ color: theme.red }}>{item.designerEffort}%</span>
                  </div>
                  <div className="progress-bar mb-2" style={{ background: theme.borderSubtle }}>
                    <motion.div className="progress-fill" initial={{ width: 0 }} animate={{ width: `${item.designerEffort}%` }} transition={{ duration: 0.6 }} style={{ background: theme.red }} />
                  </div>
                  <div className="flex justify-between text-xs mb-1" style={{ color: theme.textDimmer }}>
                    <span>ACTUAL DEV DIFFICULTY</span>
                    <span style={{ color: theme.acid }}>{item.effort}%</span>
                  </div>
                  <div className="progress-bar" style={{ background: theme.borderSubtle }}>
                    <motion.div className="progress-fill" initial={{ width: 0 }} animate={{ width: `${item.effort}%` }} transition={{ duration: 0.6, delay: 0.1 }} style={{ background: theme.acid }} />
                  </div>
                </div>

                <div style={{ background: theme.bgCode, border: `1px solid ${theme.borderSubtle}`, padding: '12px 16px' }}>
                  <div className="text-xs uppercase tracking-widest mb-2" style={{ color: theme.textDimmer }}>The Actual Solution</div>
                  <pre style={{ fontSize: 11, color: theme.acid, margin: 0, fontFamily: 'Courier New', lineHeight: 1.7, overflowX: 'auto' }}>
                    {item.code}
                  </pre>
                </div>

                {item.note && (
                  <div className="mt-3 text-xs" style={{ color: theme.redText, fontStyle: 'italic' }}>
                    * {item.note}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}


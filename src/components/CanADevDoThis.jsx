import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../ThemeContext'

const challenges = [
  {
    title: "Gradient Button",
    designerTime: "3 weeks",
    designerCost: "$4,200",
    task: "A gradient button with hover state",
    css: `button {
  background: linear-gradient(135deg, #ff2222, #ff8800);
  color: #fff;
  border: none;
  padding: 12px 28px;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.2s;
}
button:hover { opacity: 0.85; transform: scale(1.02); }`,
    demo: () => (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ fontSize: 10, color: '#555', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>
          ↓ Hover the button below
        </div>
        <button
          style={{
            background: 'linear-gradient(135deg, #ff2222, #ff8800)',
            color: '#fff', border: 'none', padding: '12px 28px',
            fontWeight: 900, cursor: 'pointer', fontSize: 14,
            transition: 'all 0.2s', fontFamily: 'Courier New',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.transform = 'scale(1.04)' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)' }}
        >
          HOVER ME →
        </button>
        <div style={{ fontSize: 10, color: '#333', fontFamily: 'monospace' }}>
          linear-gradient + transition. Designer billed $4,200.
        </div>
      </div>
    ),
  },
  {
    title: "Animated Card Hover",
    designerTime: "2 weeks",
    designerCost: "$2,800",
    task: "A card that lifts on hover with shadow",
    css: `.card {
  transition: transform 0.2s, box-shadow 0.2s;
  background: #1e1e1e;
  border: 1px solid #272727;
  padding: 20px;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(255,34,34,0.15);
}`,
    demo: () => (
      <div
        style={{
          background: '#1e1e1e', border: '1px solid #272727', padding: 20,
          transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer', maxWidth: 280,
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,34,34,0.2)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
      >
        <div style={{ color: '#fff', fontWeight: 900, marginBottom: 8, fontSize: 14 }}>Hover Me</div>
        <div style={{ color: '#555', fontSize: 12 }}>Designer charged $2,800 for this interaction.</div>
      </div>
    ),
  },
  {
    title: "Sticky Header",
    designerTime: "1 week",
    designerCost: "$1,400",
    task: "A header that sticks to the top and changes on scroll",
    css: `header {
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background 0.3s, box-shadow 0.3s;
}
header.scrolled {
  background: rgba(10,10,10,0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 #222;
}`,
    demo: () => (
      <div style={{ background: '#1e1e1e', border: '1px solid #272727', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: '#fff', fontWeight: 900, fontSize: 13 }}>LOGO</span>
        <div style={{ display: 'flex', gap: 20 }}>
          {['Home', 'Work', 'Contact'].map(i => <span key={i} style={{ color: '#555', fontSize: 11, cursor: 'pointer' }}>{i}</span>)}
        </div>
        <span style={{ fontSize: 9, color: '#333', fontFamily: 'monospace' }}>position: sticky; top: 0;</span>
      </div>
    ),
  },
  {
    title: "Smooth Scroll Nav",
    designerTime: "1 week",
    designerCost: "$900",
    task: "Navigation that smoothly scrolls to sections",
    css: `html { scroll-behavior: smooth; }
/* That's literally it. */
/* One line. */
/* Native browser API. */
/* $900 saved. */`,
    demo: () => (
      <div style={{ background: '#1e1e1e', border: '1px solid #272727', padding: 20, fontFamily: 'monospace' }}>
        <div style={{ fontSize: 11, color: '#00ff41', marginBottom: 8 }}>html {'{'} scroll-behavior: smooth; {'}'}</div>
        <div style={{ fontSize: 10, color: '#333' }}>/* One property. Billed as a week of design work. */</div>
        <div style={{ marginTop: 12, fontSize: 10, color: '#ff2222' }}>Designer's delivery: Figma prototype with scroll arrows</div>
        <div style={{ fontSize: 10, color: '#00ff41' }}>Dev's delivery: Working, native, accessible smooth scroll</div>
      </div>
    ),
  },
]

export default function CanADevDoThis() {
  const [active, setActive] = useState(0)
  const [timerRunning, setTimerRunning] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [done, setDone] = useState(false)
  const intervalRef = useRef(null)
  const { theme } = useTheme()
  const challenge = challenges[active]

  const startTimer = () => {
    setTimerRunning(true)
    setElapsed(0)
    setDone(false)
    intervalRef.current = setInterval(() => {
      setElapsed(e => e + 10)
    }, 10)
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current)
    setTimerRunning(false)
    setDone(true)
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  }, [])

  const switchChallenge = (i) => {
    clearInterval(intervalRef.current)
    setActive(i)
    setTimerRunning(false)
    setElapsed(0)
    setDone(false)
  }

  const formatTime = (ms) => {
    const s = Math.floor(ms / 1000)
    const m = Math.floor(s / 60)
    return m > 0 ? `${m}m ${s % 60}s` : `${s}.${String(ms % 1000).padStart(3, '0').slice(0, 1)}s`
  }

  const Demo = challenge.demo

  return (
    <section id="devchallenge" className="py-24 px-6 md:px-16" style={{ borderTop: `1px solid ${theme.borderSubtle}` }}>
      <div className="max-w-4xl mx-auto">
        <div className="section-header" style={{ color: theme.textBright, borderLeftColor: theme.red }}>Can a Dev Do This?</div>
        <div className="section-sub" style={{ color: theme.textDim }}>// Yes. Faster. Cheaper. Better. Always.</div>

        {/* Challenge selector */}
        <div className="flex gap-0 mb-6 overflow-x-auto" style={{ border: `1px solid ${theme.border}` }}>
          {challenges.map((c, i) => (
            <button
              key={i}
              onClick={() => switchChallenge(i)}
              className="flex-1 px-4 py-3 text-xs tracking-widest uppercase font-bold whitespace-nowrap transition-all"
              style={{
                background: active === i ? theme.red : 'transparent',
                color: active === i ? '#000' : theme.textDim,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Courier New, monospace',
                minWidth: 140,
              }}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* Designer side */}
          <div style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.red}`, padding: 24 }}>
            <div className="tag mb-3">Designer Version</div>
            <div className="text-3xl font-black mb-1" style={{ color: theme.textBright }}>{challenge.designerTime}</div>
            <div className="text-xs mb-3" style={{ color: theme.textDim }}>Estimated delivery</div>
            <div className="text-2xl font-black mb-1" style={{ color: theme.red }}>{challenge.designerCost}</div>
            <div className="text-xs mb-4" style={{ color: theme.textDim }}>Invoice (+ "discovery" phase not included)</div>
            <div className="text-xs italic" style={{ color: theme.textDimmer }}>
              "We'll need to schedule a kickoff call first. Our next availability is in 3 weeks."
            </div>
          </div>

          {/* Dev side */}
          <div style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.acid}`, padding: 24 }}>
            <div className="tag tag-acid mb-3">Dev Version — Live Timer</div>
            <div className="text-4xl font-black mb-1" style={{ color: done ? theme.acid : timerRunning ? theme.warn : theme.textBright }}>
              {formatTime(elapsed)}
            </div>
            <div className="text-xs mb-4" style={{ color: theme.textDim }}>
              {done ? '✓ Done. Shipped. Works on all browsers.' : timerRunning ? 'Coding live...' : 'Press start to watch it happen'}
            </div>
            <div className="flex gap-3 flex-wrap items-center">
              {!timerRunning && !done && (
                <button className="btn-acid" onClick={startTimer} style={{ color: theme.acid, borderColor: theme.acid }}>Start Timer</button>
              )}
              {timerRunning && (
                <button className="btn-brutal" onClick={stopTimer} style={{ background: theme.red }}>Done ✓</button>
              )}
              {done && (
                <>
                  <button className="btn-acid" onClick={startTimer} style={{ color: theme.acid, borderColor: theme.acid }}>Redo</button>
                  <div className="text-xs flex items-center" style={{ color: theme.acid }}>
                    vs designer's {challenge.designerTime} 💀
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Live demo */}
        <div style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderTop: `2px solid ${theme.red}`, padding: 24, marginBottom: 16 }}>
          <div className="tag mb-4">Live Result</div>
          <Demo />
        </div>

        {/* Code */}
        <div style={{ background: theme.bgCode, border: `1px solid ${theme.borderSubtle}`, padding: '16px 20px' }}>
          <div className="text-xs uppercase tracking-widest mb-3" style={{ color: theme.textDimmer }}>The Code</div>
          <pre style={{ fontSize: 12, color: theme.acid, margin: 0, fontFamily: 'Courier New', lineHeight: 1.7, overflowX: 'auto' }}>
            {challenge.css}
          </pre>
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import { useTheme } from '../ThemeContext'

const links = [
  { href: '#generator', label: 'Generator' },
  { href: '#shame', label: 'Hall of Shame' },
  { href: '#bingo', label: 'Bingo' },
  { href: '#figma', label: 'Figma vs Reality' },
  { href: '#dayinlife', label: 'Their Day' },
  { href: '#colors', label: 'Color Crimes' },
  { href: '#css', label: 'CSS Gallery' },
  { href: '#lovable', label: 'Lovable Roast' },
  { href: '#hardthings', label: 'Hard Things' },
  { href: '#devchallenge', label: 'Dev Challenge' },
  { href: '#audit', label: '$15k Audit' },
  { href: '#manifesto', label: 'Manifesto' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggle, isDark } = useTheme()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 28, // sits below the 28px ticker
      left: 0,
      right: 0,
      zIndex: 100,
      background: scrolled ? theme.navBg : 'transparent',
      borderBottom: scrolled ? `1px solid ${theme.navBorder}` : '1px solid transparent',
      transition: 'all 0.3s',
      padding: '10px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
    }}>
      <a href="#" style={{ color: theme.red, fontWeight: 900, fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', textDecoration: 'none' }}>
        NRFGD
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex" style={{ gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
        {links.slice(0, 6).map(l => (
          <a
            key={l.href}
            href={l.href}
            style={{ color: theme.textDim, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.1s' }}
            onMouseEnter={e => e.currentTarget.style.color = theme.red}
            onMouseLeave={e => e.currentTarget.style.color = theme.textDim}
          >
            {l.label}
          </a>
        ))}
        <a href="#manifesto" className="btn-brutal" style={{ padding: '6px 16px', fontSize: 10, background: theme.red }}>
          Manifesto
        </a>
        {/* Theme toggle */}
        <button
          onClick={toggle}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          style={{
            background: 'none',
            border: `1px solid ${theme.border}`,
            color: theme.textDim,
            cursor: 'pointer',
            fontFamily: 'Courier New, monospace',
            fontSize: 13,
            padding: '4px 10px',
            letterSpacing: 1,
            transition: 'all 0.1s',
            lineHeight: 1,
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = theme.red; e.currentTarget.style.color = theme.red }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = theme.border; e.currentTarget.style.color = theme.textDim }}
        >
          {isDark ? '☀' : '☾'}
        </button>
      </div>

      {/* Mobile right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button
          onClick={toggle}
          className="md:hidden"
          style={{ background: 'none', border: 'none', color: theme.textDim, fontSize: 15, cursor: 'pointer', fontFamily: 'Courier New' }}
        >
          {isDark ? '☀' : '☾'}
        </button>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', color: theme.textBright, fontSize: 20, cursor: 'pointer', fontFamily: 'Courier New' }}
        >
          {open ? '✕' : '≡'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed',
          top: 76,
          left: 0,
          right: 0,
          background: theme.navBg,
          borderBottom: `1px solid ${theme.border}`,
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          zIndex: 99,
          backdropFilter: 'blur(12px)',
        }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ color: theme.textDim, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none', padding: '10px 0', borderBottom: `1px solid ${theme.borderSubtle}` }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

import { useTheme } from '../ThemeContext'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer style={{ borderTop: `1px solid ${theme.border}`, padding: '48px 24px', background: theme.bg }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div style={{ color: theme.red, fontWeight: 900, fontSize: 20, letterSpacing: 4, marginBottom: 12, textTransform: 'uppercase' }}>NRFGD</div>
            <div style={{ color: theme.textDimmer, fontSize: 12, lineHeight: 1.8 }}>
              No Respect for Graphic Designers.<br />
              A love letter to frontend development.<br />
              A wake-up call for everyone else.
            </div>
          </div>
          <div>
            <div style={{ color: theme.textDim, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>Sections</div>
            {['Generator', 'Hall of Shame', 'Bingo', 'Figma vs Reality', 'Day in Life', 'CSS Gallery', 'Lovable Roast', 'Manifesto'].map(s => (
              <div key={s} style={{ color: theme.textDimmer, fontSize: 11, marginBottom: 6 }}>{s}</div>
            ))}
          </div>
          <div>
            <div style={{ color: theme.textDim, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>Built with</div>
            {[
              'React — not Lovable.dev',
              'Vite — not Create React App',
              'Tailwind CSS — not a design system doc',
              'Framer Motion — not After Effects',
              'Pure CSS — not a Figma prototype',
              'A text editor — not Adobe XD',
            ].map(t => (
              <div key={t} style={{ color: theme.textDimmer, fontSize: 11, marginBottom: 6 }}>
                <span style={{ color: theme.acid }}>✓</span> {t}
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${theme.borderSubtle}`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ color: theme.textDimmer, fontSize: 11, fontFamily: 'Courier New' }}>
            © 2024 NRFGD — No pixels were harmed. No designers were consulted.
          </div>
          <div style={{ color: theme.textDimmer, fontSize: 11, fontFamily: 'Courier New' }}>
            Built by a developer. In a weekend. For free.
            <span style={{ color: theme.red }}> Your move.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

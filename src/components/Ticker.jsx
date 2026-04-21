export default function Ticker() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      background: '#ff2222',
      overflow: 'hidden',
      height: 28,
      display: 'flex',
      alignItems: 'center',
    }}>
      <div className="flex gap-0 marquee-inner whitespace-nowrap">
        {Array(4).fill(null).map((_, i) => (
          <span key={i} style={{
            color: '#000',
            fontSize: 10,
            fontWeight: 900,
            letterSpacing: 3,
            padding: '0 32px',
            textTransform: 'uppercase',
            fontFamily: 'Courier New, monospace',
            whiteSpace: 'nowrap',
          }}>
            NO RESPECT FOR GRAPHIC DESIGNERS &nbsp;•&nbsp; FRONTEND DEVS DO IT BETTER &nbsp;•&nbsp; DESIGN IS NOT ART &nbsp;•&nbsp; LOVABLE.DEV IS A JOKE &nbsp;•&nbsp; CSS &gt; FIGMA &nbsp;•&nbsp;
          </span>
        ))}
      </div>
    </div>
  )
}

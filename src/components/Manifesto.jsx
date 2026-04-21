import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const points = [
  {
    num: '01',
    title: 'Design is a Tool, Not an Identity',
    body: 'Graphic design is a means to communicate. It is not a personality, a lifestyle, or a substitute for rational thinking. The moment you start calling yourself a "creative" as if it excuses you from logic, you have lost the plot.',
  },
  {
    num: '02',
    title: 'Unusable Beauty is Failure',
    body: 'A gorgeous product that users cannot use is not a design. It is a failure disguised as art. If someone cannot find the button, fill the form, or read the text — you have failed. Full stop. No "but the aesthetics" gets you out of this.',
  },
  {
    num: '03',
    title: 'Developers Implement Reality',
    body: 'Every pixel a designer draws must eventually be translated into code by a real human. When you design something physically impossible, unmaintainable, or undocumented — you are not being creative. You are being a burden.',
  },
  {
    num: '04',
    title: 'CSS is Not Magic',
    body: 'Any competent frontend developer can build 90% of what designers spend months producing — faster, cheaper, more accessibly, and with better performance. The tools exist. The knowledge exists. The excuse doesn\'t.',
  },
  {
    num: '05',
    title: 'No-Code Is Not Development',
    body: 'Building on Lovable, Webflow, or any vibe-coding platform does not make you a developer. It makes you a user of someone else\'s product. You have not shipped software. You have filled out a very fancy form.',
  },
  {
    num: '06',
    title: 'Dribbble is a Fantasy',
    body: 'Dribbble exists to show what design looks like in a vacuum — disconnected from users, constraints, engineering reality, or time. Its top-rated designs consistently fail WCAG, ignore mobile, and would never survive a real product sprint.',
  },
  {
    num: '07',
    title: 'The Best Design is Invisible',
    body: 'The highest form of design is the kind users don\'t notice because it just works. Not the kind that makes the designer\'s portfolio look impressive. Not the kind that wins awards from other designers. The kind that serves the human using it.',
  },
  {
    num: '08',
    title: 'Your Tools Are Not Your Talent',
    body: 'Knowing Figma does not make you a designer. Knowing After Effects does not make you creative. Knowing Photoshop does not make you an artist. Talent is the ability to solve problems. Tools are just tools.',
  },
]

export default function Manifesto() {
  const { theme } = useTheme()

  return (
    <section id="manifesto" className="py-24 px-6 md:px-16" style={{ borderTop: `1px solid ${theme.borderSubtle}` }}>
      <div className="max-w-4xl mx-auto">
        <div className="section-header" style={{ color: theme.textBright, borderLeftColor: theme.red }}>The Manifesto</div>
        <div className="section-sub" style={{ color: theme.textDim }}>// What we actually believe</div>

        <div className="space-y-0">
          {points.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.05 }}
              className="grid"
              style={{
                gridTemplateColumns: '60px 1fr',
                borderBottom: `1px solid ${theme.borderSubtle}`,
                padding: '24px 0',
                gap: 24,
              }}
            >
              <div className="font-black text-2xl" style={{ color: i % 3 === 0 ? theme.red : i % 3 === 1 ? theme.warn : theme.acid, fontFamily: 'Courier New' }}>
                {p.num}
              </div>
              <div>
                <div className="font-black text-lg mb-2 uppercase tracking-wide" style={{ color: theme.textBright }}>{p.title}</div>
                <div className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>{p.body}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12" style={{ background: theme.bgGreenTint, border: `1px solid ${theme.acid}33`, borderTop: `2px solid ${theme.acid}`, padding: 28 }}>
          <div className="font-black uppercase tracking-widest mb-3" style={{ color: theme.acid }}>In Summary</div>
          <p className="text-lg leading-relaxed" style={{ color: theme.text }}>
            Design matters. Bad design defended with buzzwords doesn't.
            Usability is not optional. Accessibility is not optional.
            Delivering on time is not optional.
            <br /><br />
            <span style={{ color: theme.acid }}>
              Do better. Or get out of the way and let the developers handle it.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

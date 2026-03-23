/**
 * ContentSection.jsx
 *
 * Spec:
 *  - BG: #FFFDF3
 *  - Text block: max-width 450px, centered (margin: 0 auto)
 *  - Heading: Futura Std 700, 22px, line-height 131.8%, color #8D2222, text-align center, mb 28px
 *  - Paragraphs: Futura Std 400, 16px, line-height 131.8%, color #8D2222, text-align left
 *  - Gap between paragraphs: 16px
 *  - Each paragraph is a SEPARATE element — no combined blocks
 */
export default function ContentSection() {
  const paragraphs = [
    `Kochi Kochu is a space shaped by creative belonging. It is shaped by movement — between places, cultures, and ways of seeing the world. It exists in the in-between, where memory meets material, tradition meets reinterpretation, and craft meets expression.`,
    `At its core is a respect for process. Time, patience, and human touch are not steps in creation, but the foundation of it. What emerges is shaped as much by intention as it is by making — where art takes form through material.`,
    `Nothing is rushed. Each piece carries the rhythm of how it came to be — quiet, considered, and attentive.`,
    `In this space, craft becomes more than technique. It becomes a way of understanding, connecting, expressing, and continuing what came before.`,
  ]

  const pStyle = {
    fontFamily: "'Futura Std', 'Futura', 'Century Gothic', sans-serif",
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '131.8%',
    color: '#8D2222',
    textAlign: 'left',
    margin: 0,
  }

  return (
    <section
      style={{ background: '#FFFDF3', paddingTop: '100px', paddingBottom: '80px', paddingLeft: '20px', paddingRight: '20px' }}
      aria-label="An Ode to Craft"
    >
      <div style={{ maxWidth: '450px', margin: '0 auto' }}>

        {/* ── Heading ── */}
        <h2
          style={{
            fontFamily: "'Futura Std', 'Futura', 'Century Gothic', sans-serif",
            fontWeight: 700,
            fontSize: '22px',
            lineHeight: '131.8%',
            color: '#8D2222',
            textAlign: 'center',
            marginBottom: '28px',
          }}
        >
          An Ode to Craft
        </h2>

        {/* ── 4 Separate paragraphs, gap: 16px ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {paragraphs.map((text, i) => (
            <p key={i} style={pStyle}>
              {text}
            </p>
          ))}
        </div>

      </div>
    </section>
  )
}

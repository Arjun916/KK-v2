export default function ContentSection() {
  const paragraphs = [
    `Kochi Kochu is a space shaped by creative belonging. It is shaped by movement — between places, cultures, and ways of seeing the world. It exists in the in-between, where memory meets material, tradition meets reinterpretation, and craft meets expression.`,
    `At its core is a respect for process. Time, patience, and human touch are not steps in creation, but the foundation of it. What emerges is shaped as much by intention as it is by making — where art takes form through material.`,
    `Nothing is rushed. Each piece carries the rhythm of how it came to be — quiet, considered, and attentive.`,
    `In this space, craft becomes more than technique. It becomes a way of understanding, connecting, expressing, and continuing what came before.`,
  ]

  return (
    <>
      <style>{`
        .editorial {
          background: #FFFDF3;
          padding: 117px 20px;
          width: 100%;
        }
        .editorial-inner {
          max-width: 450px;
          margin: 0 auto;
        }
        .editorial-heading {
          font-family: 'Futura Std', 'Futura', 'Century Gothic', sans-serif;
          font-weight: 700;
          font-size: 22px;
          line-height: 131.8%;
          color: #8D2222;
          text-align: center;
          margin-bottom: 28px;
        }
        .editorial-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .editorial-p {
          font-family: 'Futura Std', 'Futura', 'Century Gothic', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 131.8%;
          color: #8D2222;
          text-align: left;
          margin: 0;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .editorial { padding: 80px 32px; }
          .editorial-inner { max-width: 100%; }
          .editorial-heading { margin-bottom: 57px; }
          .editorial-p { font-size: 14px; }
        }
      `}</style>

      <section className="editorial" aria-label="An Ode to Craft">
        <div className="editorial-inner">
          <h2 className="editorial-heading">An Ode to Craft</h2>
          <div className="editorial-body">
            {paragraphs.map((text, i) => (
              <p key={i} className="editorial-p">{text}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

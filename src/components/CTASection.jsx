/**
 * CTASection.jsx
 *
 * Spec:
 *  - Container: position relative, width 100%, aspect-ratio 1440/764
 *  - BG image: 1440×764, object-fit cover, DO NOT fix both dimensions
 *  - Gradient overlay: dark bottom → transparent top
 *
 *  LEFT GROUP (desktop):
 *   - position absolute, bottom: 70px, left: 90px
 *   - vertical stack: heading + 2 paragraphs + button
 *   - Heading: Futura Std 700, 22px, #FFFDF3
 *   - Paragraph: Futura Std 400, 16px, #FFFDF3
 *   - Button: border 1px #FFFDF3, padding 10px 28px, border-radius 8px, centered
 *
 *  RIGHT GROUP (desktop):
 *   - position absolute, bottom: 70px, right: 90px
 *   - horizontal row, gap 18px
 *   - Icons: 20px, color #FFFDF3
 *
 *  MOBILE: Both groups centered, left group bottom 120px, icons bottom 32px
 */

const iconStyle = {
  width: '20px',
  height: '20px',
  color: '#FFFDF3',
  display: 'block',
  cursor: 'pointer',
  opacity: 0.9,
}

export default function CTASection() {
  return (
    <section
      style={{ position: 'relative', width: '100%', aspectRatio: '1440/764', overflow: 'hidden' }}
      aria-label="Be part of Kochi Kochu"
    >

      {/* ── Background image: 1440×764 ── */}
      <img
        src="https://via.placeholder.com/1440x764/2A2520/6B5C50?text=+"
        alt="Be part of Kochi Kochu"
        loading="lazy"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* ── Gradient overlay ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(23,23,23,0.85) 0%, rgba(23,23,23,0.45) 40%, rgba(23,23,23,0.05) 100%)',
        }}
      />

      {/* ── LEFT CONTENT: bottom 70px, left 90px ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '70px',
          left: '90px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          zIndex: 10,
        }}
      >
        <h2
          style={{
            fontFamily: "'Futura Std', 'Futura', 'Century Gothic', sans-serif",
            fontWeight: 700,
            fontSize: '22px',
            lineHeight: '131.8%',
            color: '#FFFDF3',
            margin: 0,
          }}
        >
          Be part of Kochi Kochu
        </h2>

        <p
          style={{
            fontFamily: "'Futura Std', 'Futura', 'Century Gothic', sans-serif",
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '131.8%',
            color: '#FFFDF3',
            margin: 0,
          }}
        >
          Made with intention.
        </p>

        <p
          style={{
            fontFamily: "'Futura Std', 'Futura', 'Century Gothic', sans-serif",
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '131.8%',
            color: '#FFFDF3',
            margin: 0,
          }}
        >
          Sign up for early access and updates.
        </p>

        {/* Button — centered within content block */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
          <a
            href="#"
            role="button"
            aria-label="Join Kochi Kochu"
            style={{
              display: 'inline-block',
              border: '1px solid #FFFDF3',
              padding: '10px 28px',
              borderRadius: '8px',
              background: 'transparent',
              fontFamily: "'Futura Std', 'Futura', 'Century Gothic', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              color: '#FFFDF3',
              textDecoration: 'none',
              cursor: 'pointer',
              letterSpacing: '0.04em',
            }}
          >
            Join
          </a>
        </div>
      </div>

      {/* ── RIGHT ICON GROUP: bottom 70px, right 90px ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '70px',
          right: '90px',
          display: 'flex',
          flexDirection: 'row',
          gap: '18px',
          alignItems: 'center',
          zIndex: 10,
        }}
        aria-label="Social media links"
      >
        {/* Instagram */}
        <a href="#" aria-label="Instagram">
          <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none"/>
          </svg>
        </a>

        {/* TikTok */}
        <a href="#" aria-label="TikTok">
          <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.13 6.33 6.34 6.34 0 0 0 12.67 0V8.94a8.16 8.16 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z"/>
          </svg>
        </a>

        {/* Facebook */}
        <a href="#" aria-label="Facebook">
          <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>

        {/* YouTube */}
        <a href="#" aria-label="YouTube">
          <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="#" aria-label="LinkedIn">
          <svg style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
      </div>

    </section>
  )
}

/**
 * Hero.jsx
 *
 * Spec:
 *  - Container: height 1024px, width 100%, bg #171717, position relative
 *  - Logo: absolute, top 55px, horizontally centered via translateX(-50%), width 211px
 *    → Replace <div class> with <img src="logo.png" /> when PNG is available
 *  - Tagline: absolute, bottom 45px, centered, max-width 252px
 *    Font: Futura Std 400, 18px, line-height 131.8%, color #FFFDF3, text-align center
 */
export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '1024px',
        backgroundColor: '#171717',
        overflow: 'hidden',
      }}
      aria-label="Hero"
    >
      {/* Background image — replace src with actual hero photo */}
      <img
        src="https://via.placeholder.com/1440x1024/171717/171717?text=+"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(23,23,23,0.30)',
        }}
      />

      {/* ── LOGO: top 55px, centered, width 211px ── */}
      {/*
        To use the actual PNG:
        <img
          src="/logo.png"
          alt="Kochi Kochu"
          style={{ position:'absolute', top:55, left:'50%', transform:'translateX(-50%)', width:211 }}
        />
      */}
      {/*
        ── LOGO ──
        ⚠ This renders the logotype as styled text.
        To use the real PNG logo file, replace this entire block with:

        <img
          src="/logo.png"
          alt="Kochi Kochu"
          style={{
            position: 'absolute', top: 55, left: '50%',
            transform: 'translateX(-50%)',
            width: 211, height: 'auto', zIndex: 20,
          }}
        />

        The dot-replaced-o treatment below matches the PDF logotype.
      */}
      <div
        role="img"
        aria-label="Kochi Kochu"
        style={{
          position: 'absolute',
          top: '55px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '211px',
          zIndex: 20,
          display: 'flex',
          justifyContent: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        <span
          style={{
            fontFamily: "'Futura Std', 'Futura', 'Century Gothic', sans-serif",
            fontWeight: 400,
            fontSize: '20px',
            letterSpacing: '0.18em',
            color: '#FFFDF3',
            textTransform: 'lowercase',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '1px',
          }}
        >
          {/* "kochi kochu" with bullet-dot replacing each 'o' */}
          k
          <span style={{ display:'inline-block', width:6, height:6, background:'#FFFDF3', borderRadius:'50%', margin:'0 1px' }} />
          chi&nbsp;k
          <span style={{ display:'inline-block', width:6, height:6, background:'#FFFDF3', borderRadius:'50%', margin:'0 1px' }} />
          chu
        </span>
      </div>

      {/* ── TAGLINE: bottom 45px, centered, max-width 252px ── */}
      <p
        style={{
          position: 'absolute',
          bottom: '45px',
          left: '50%',
          transform: 'translateX(-50%)',
          maxWidth: '252px',
          width: '100%',
          zIndex: 10,
          fontFamily: "'Futura Std', 'Futura', 'Century Gothic', sans-serif",
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '131.8%',
          letterSpacing: 0,
          color: '#FFFDF3',
          textAlign: 'center',
        }}
      >
        Welcome to Kochi Kochu where belonging takes form
      </p>
    </section>
  )
}

export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          position: relative;
          width: 100%;
          height: 1024px;
          background: #171717;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(23,23,23,0.25);
        }
        .hero-logo {
          position: absolute;
          top: 55px;
          left: 50%;
          transform: translateX(-50%);
          width: 211px;
          height: auto;
          z-index: 20;
        }
        .hero-tagline {
          position: absolute;
          bottom: 45px;
          left: 50%;
          transform: translateX(-50%);
          max-width: 252px;
          width: 100%;
          z-index: 20;
          font-family: 'Futura Std', 'Futura', 'Century Gothic', sans-serif;
          font-weight: 400;
          font-size: 18px;
          line-height: 131.8%;
          color: #FFFDF3;
          text-align: center;
          margin: 0;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .hero { height: 600px; }
          .hero-logo {
            top: 70px;
            left: 120px;
            transform: none;
            width: 187px;
          }
          .hero-tagline {
            font-size: 14px;
            bottom: 28px;
            max-width: 255px;
          }
        }
        @media (max-width: 480px) {
          .hero-logo {
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>

      <section className="hero" aria-label="Hero">

        <picture>
          <source media="(max-width: 768px)" srcSet="/hero-bg-mobile.jpg" />
          <img className="hero-bg" src="/hero-bg.jpg" alt="" aria-hidden="true" />
        </picture>

        <div className="hero-overlay" aria-hidden="true" />

        {/*
          LOGO — replace this <img> src with your actual logo file.
          File location: public/logo.png
          Size: 211px wide on desktop, 187px on mobile
        */}
        <img
          className="hero-logo"
          src="/logo.png"
          alt="Kochi Kochu"
        />

        <p className="hero-tagline">
          Welcome to Kochi Kochu where belonging takes form
        </p>

      </section>
    </>
  )
}

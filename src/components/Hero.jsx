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
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          z-index: 0;
        }
        /* Show desktop, hide mobile by default */
        .hero-video-desktop { display: block; }
        .hero-video-mobile  { display: none; }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(23,23,23,0.25);
          z-index: 1;
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

        @media (max-width: 768px) {
          .hero { height: 932px; }
          /* Swap videos on mobile */
          .hero-video-desktop { display: none; }
          .hero-video-mobile  { display: block; }
          .hero-logo {
            top: 70px;
            left: 50%;
            transform: translateX(-50%);
            width: 187px;
          }
          .hero-tagline {
            font-size: 14px;
            bottom: 28px;
            max-width: 255px;
          }
        }
      `}</style>

      <section className="hero" aria-label="Hero">

        {/* DESKTOP VIDEO — hidden on mobile */}
        <video
          className="hero-video hero-video-desktop"
          autoPlay loop muted playsInline
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          <img src="/hero-bg.jpg" alt="" aria-hidden="true"
            style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
        </video>

        {/* MOBILE VIDEO — hidden on desktop */}
        <video
          className="hero-video hero-video-mobile"
          autoPlay loop muted playsInline
        >
          <source src="/hero-bg-mobile.mp4" type="video/mp4" />
          <img src="/hero-bg-mobile.jpg" alt="" aria-hidden="true"
            style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
        </video>

        <div className="hero-overlay" aria-hidden="true" />

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

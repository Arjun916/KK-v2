export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          width: 100%;
          min-height: 100vh;
          background: #000;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center; /* 🔥 centers everything vertically */
          gap: clamp(20px, 5vh, 60px); /* spacing between sections */
        }

        /* 🔝 Top */
        .hero-top {
          display: flex;
          justify-content: center;
        }

        .hero-logo {
          width: clamp(140px, 18vw, 211px);
        }

        /* 🎥 Middle (video container) */
        .hero-middle {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .hero-video {
          width: 100%;
          max-width: 900px;
          height: auto;
          object-fit: cover;
        }

        /* swap videos */
        .hero-video-desktop { display: block; }
        .hero-video-mobile  { display: none; }

        /* 🔽 Bottom */
        .hero-bottom {
          display: flex;
          justify-content: center;
        }

        .hero-tagline {
          max-width: clamp(200px, 60vw, 260px);
          font-family: 'Futura Std', 'Futura', 'Century Gothic', sans-serif;
          font-weight: 400;
          font-size: clamp(14px, 2vw, 18px);
          line-height: 1.3;
          color: #FFFDF3;
          text-align: center;
          margin: 0;
        }

        /* 📱 Mobile */
        @media (max-width: 768px) {
          .hero-video-desktop { display: none; }
          .hero-video-mobile  { display: block; }
        }
      `}</style>

      <section className="hero">

        {/* TOP */}
        <div className="hero-top">
          <img className="hero-logo" src="/logo.png" alt="Kochi Kochu" />
        </div>

        {/* MIDDLE (VIDEO ✅) */}
        <div className="hero-middle">
          <video
            className="hero-video hero-video-desktop"
            autoPlay loop muted playsInline
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>

          <video
            className="hero-video hero-video-mobile"
            autoPlay loop muted playsInline
          >
            <source src="/hero-bg-mobile.mp4" type="video/mp4" />
          </video>
        </div>

        {/* BOTTOM */}
        <div className="hero-bottom">
          <p className="hero-tagline">
            Welcome to Kochi Kochu where belonging takes form
          </p>
        </div>

      </section>
    </>
  )
}
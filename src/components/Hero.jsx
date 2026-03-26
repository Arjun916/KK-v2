export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          position: relative;   /* ✅ IMPORTANT */
          width: 100%;
          min-height: 100vh;
          background: #000;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start; /* 🔥 THIS FIXES THE GAP */
          padding-bottom: 100px;
        }

        /* 🔝 Top */
        .hero-top {
          position: absolute;
          top: 60px;            /* adjust if needed */
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }

        .hero-logo {
          width: clamp(140px, 18vw, 211px);
        }

        /* 🎥 Middle (video container) */
        .hero-middle {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 70px;
        }

        .hero-video {
          
          height: auto;
          object-fit: cover;
        }

        /* swap videos */
        .hero-video-desktop {
         display: block; 
         width: clamp(600px, 60vw, 900px); /* ✅ controls width growth */
         }
        .hero-video-mobile  {
         display: none; 
         
         }

        /* 🔽 Bottom */
        .hero-bottom {
          position: absolute;
          bottom: 45px;             /* ✅ fixed anchor */
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;

          display: flex;
          justify-content: center;
          width: 100%;
          pointer-events: none;     /* ✅ prevents overlap issues */
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
        @media (max-width: 768px) {
          .hero-video-desktop { display: none; }
          .hero-video-mobile  { display: block; 
          width: clamp(280px, 86vw, 360px); /* ✅ controls width growth */
          }
          
          .hero-middle {
            margin-top: 95px;
          }
          .hero-bottom {
            bottom: 28px;   /* tighter for mobile */
          }
        }

        // /* 📱 Mobile */
        // @media (max-width: 768px) {
        //   .hero-video-desktop { display: none; }
        //   .hero-video-mobile  { display: block; }
        // }
        
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
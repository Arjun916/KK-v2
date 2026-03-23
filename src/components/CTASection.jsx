/**
 * CTASection.jsx — v3
 * CSS classes for proper responsive behaviour
 */
export default function CTASection() {
  return (
    <>
      <style>{`
        .cta-section {
          position: relative;
          width: 100%;
          aspect-ratio: 1440 / 764;
          overflow: hidden;
        }
        .cta-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .cta-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(23,23,23,0.88) 0%,
            rgba(23,23,23,0.50) 40%,
            rgba(23,23,23,0.0) 70%
          );
        }

        /* LEFT GROUP */
        .cta-left {
          position: absolute;
          bottom: 70px;
          left: 90px;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .cta-heading {
          font-family: 'Futura Std', 'Futura', 'Century Gothic', sans-serif;
          font-weight: 700;
          font-size: 22px;
          line-height: 131.8%;
          color: #FFFDF3;
          text-align: left;
          margin: 0;
        }
        .cta-p {
          font-family: 'Futura Std', 'Futura', 'Century Gothic', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 131.8%;
          color: #FFFDF3;
          text-align: left;
          margin: 0;
        }
        .cta-btn-wrap {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }
        .cta-btn {
          font-family: 'Futura Std', 'Futura', 'Century Gothic', sans-serif;
          font-weight: 400;
          font-size: 18px;
          color: #FFFDF3;
          border: 1px solid #FFFDF3;
          padding: 10px 28px;
          border-radius: 8px;
          background: transparent;
          cursor: pointer;
          transition: background .25s, color .25s;
        }
        .cta-btn:hover { background: #FFFDF3; color: #171717; }

        /* RIGHT ICONS */
        .cta-icons {
          position: absolute;
          bottom: 70px;
          right: 90px;
          z-index: 10;
          display: flex;
          flex-direction: row;
          gap: 18px;
          align-items: center;
        }
        .cta-icon {
          width: 20px;
          height: 20px;
          color: #FFFDF3;
          opacity: 0.88;
          display: block;
          transition: opacity .2s;
        }
        .cta-icon:hover { opacity: 1; }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .cta-section {
            aspect-ratio: auto;
            height: 826px;
          }
          .cta-left {
            bottom: 120px;
            left: 50%;
            transform: translateX(-50%);
            align-items: center;
            text-align: center;
            width: 85%;
          }
          .cta-heading,
          .cta-p {
            text-align: center;
          }
          .cta-icons {
            bottom: 40px;
            right: auto;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>

      <section className="cta-section" aria-label="Be part of Kochi Kochu">

        <picture>
          <source media="(max-width: 768px)" srcSet="/cta-bg-mobile.jpg" />
          <img className="cta-bg" src="/cta-bg.jpg" alt="" aria-hidden="true" loading="lazy" />
        </picture>

        <div className="cta-gradient" aria-hidden="true" />

        {/* LEFT CONTENT */}
        <div className="cta-left">
          <p className="cta-heading">Be part of Kochi Kochu</p>
          <p className="cta-p">Made with intention.</p>
          <p className="cta-p">Sign up for early access and updates.</p>
          <div className="cta-btn-wrap">
            <button className="cta-btn" type="button">Join</button>
          </div>
        </div>

        {/* RIGHT SOCIAL ICONS */}
        <div className="cta-icons" aria-label="Social media">
          <a href="#" aria-label="Instagram">
            <svg className="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="#" aria-label="TikTok">
            <svg className="cta-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.13 6.33 6.34 6.34 0 0 0 12.67 0V8.94a8.16 8.16 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg className="cta-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg className="cta-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg className="cta-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>

      </section>
    </>
  )
}

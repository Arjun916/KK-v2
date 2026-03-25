/**
 * CTASection.jsx — v4
 * Fixed: button 125×43px locked across all breakpoints
 * Fixed: desktop text vertically centered, left-aligned
 * Fixed: mobile text at top, center-aligned
 * Fixed: hover state → bg #FFFDF3, text #8D2222
 * Fixed: icons desktop right / mobile bottom-center
 */
export default function CTASection() {
  return (
    <>
      <style>{`

        /* ── CONTAINER ── */
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

        /* ── DESKTOP: LEFT CONTENT ──
           Vertically centered, left-aligned, left:90px */
        .cta-left {
          position: absolute;
          top: 75%;
          left: 90px;
          transform: translateY(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
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

        /* Button wrapper — centers button under text */
        .cta-btn-wrap {
          display: flex;
          // justify-content: center;
          width: 100%;
          margin-top: 12px;
        }

        /* ── BUTTON — FIXED 125×43px on ALL breakpoints ──
           No padding-based sizing. Width + height are the source of truth. */
        .cta-btn {
          font-family: 'Futura Std', 'Futura', 'Century Gothic', sans-serif;
          font-weight: 400;
          font-size: 16px;
          color: #FFFDF3;
          border: 1px solid #FFFDF3;
          border-radius: 8px;
          background: transparent;
          cursor: pointer;

          /* Locked dimensions */
          width: 125px;
          height: 43px;
          min-width: 125px;
          min-height: 43px;
          max-width: 125px;
          max-height: 43px;
          padding: 0;
          box-sizing: border-box;

          /* Internal alignment */
          display: flex;
          align-items: center;
          justify-content: center;

          /* Hover transition */
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
        .cta-btn:hover {
          background: #FFFDF3;
          color: #8D2222;
          border-color: #FFFDF3;
        }

        /* ── DESKTOP: RIGHT SOCIAL ICONS ── */
        .cta-icons {
          position: absolute;
          bottom: 70px;
          right: 90px;
          z-index: 10;
          display: flex;
          flex-direction: row;
          gap: 39px;
          align-items: center;
        }
        .cta-icon {
          width: 20px;
          height: 20px;
          color: #FFFDF3;
          opacity: 0.88;
          display: block;
          transition: opacity 0.2s ease;
        }
        .cta-icon:hover { opacity: 1; }

        /* ── MOBILE ≤768px ── */
        @media (max-width: 768px) {

          /* Taller container */
          .cta-section {
            aspect-ratio: auto;
            height: 826px;
          }

          /* Content → TOP, centered */
          .cta-left {
            top: 60px;
            left: 50%;
            transform: translateX(-50%);
            align-items: center;
            width: 85%;
          }
          .cta-heading,
          .cta-p {
            text-align: center;
          }

          /* Button stays exactly 125×43px — no changes */
          .cta-btn {
            width: 125px;
            height: 43px;
            min-width: 125px;
            min-height: 43px;
            max-width: 125px;
            max-height: 43px;
            font-size: 16px;
          }

          /* Icons → bottom-center */
          .cta-icons {
            bottom: 40px;
            right: auto;
            left: 50%;
            transform: translateX(-50%);
            gap: 20px;
          }
        }

      `}</style>

      <section className="cta-section" aria-label="Be part of Kochi Kochu">

        {/* Background image */}
        <picture>
          <source media="(max-width: 768px)" srcSet="/cta-bg-mobile.jpg" />
          <img className="cta-bg" src="/cta-bg.jpg" alt="" aria-hidden="true" loading="lazy" />
        </picture>

        <div className="cta-gradient" aria-hidden="true" />

        {/* LEFT / TOP CONTENT BLOCK */}
        <div className="cta-left">
          <p className="cta-heading">Be part of Kochi Kochu</p>
          <p className="cta-p">Made with intention.</p>
          <p className="cta-p">Sign up for early access and updates.</p>
          <div className="cta-btn-wrap">
            <button className="cta-btn" type="button" aria-label="Join Kochi Kochu">
              Join
            </button>
          </div>
        </div>

        {/* SOCIAL ICONS — desktop: right | mobile: bottom-center */}
        <div className="cta-icons" aria-label="Social media links">

          <a href="https://www.instagram.com/kochikochu" aria-label="Instagram">
            <svg className="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
            </svg>
          </a>

          <a href="https://www.tiktok.com/@kochikochu" aria-label="TikTok">
            <svg className="cta-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.13 6.33 6.34 6.34 0 0 0 12.67 0V8.94a8.16 8.16 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z"/>
            </svg>
          </a>

          <a href="https://www.facebook.com/people/Kochi-Kochu/61579707879328/" aria-label="Facebook">
            <svg className="cta-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>

          <a href="https://youtube.com/@socialkochikochu" aria-label="YouTube">
            <svg className="cta-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
            </svg>
          </a>

          <a href="https://www.linkedin.com/company/kochikochu/" aria-label="LinkedIn">
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
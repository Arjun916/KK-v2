/**
 * ImageGrid.jsx — v3
 * Uses CSS classes (not inline styles) for responsive grid
 * so media queries work correctly on mobile
 */
export default function ImageGrid() {
  return (
    <>
      <style>{`
        .grid-section {
          background: #FFFDF3;
          padding: 0 117px 117px;
          width: 100%;
        }
        .grid-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 117px;
          max-width: 1206px;
          margin: 0 auto;
        }
        .grid-figure {
          margin: 0;
          overflow: hidden;
        }
        .grid-img {
          width: 100%;
          height: 745px;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .grid-section {
            padding: 0 32px 80px;
          }
          .grid-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .grid-img {
            height: auto;
            aspect-ratio: 4 / 5;
          }
        }
      `}</style>

      <section className="grid-section" aria-label="Editorial images">
        <div className="grid-inner">

          {/* IMAGE 1 */}
          <figure className="grid-figure">
            <picture>
              <source media="(max-width: 768px)" srcSet="/image-grid-1-mobile.jpg" />
              <img
                className="grid-img"
                src="/image-grid-1.jpg"
                alt="Kochi Kochu — editorial image one"
                loading="eager"
              />
            </picture>
          </figure>

          {/* IMAGE 2 */}
          <figure className="grid-figure">
            <picture>
              <source media="(max-width: 768px)" srcSet="/image-grid-2-mobile.jpg" />
              <img
                className="grid-img"
                src="/image-grid-2.jpg"
                alt="Kochi Kochu — editorial image two"
                loading="lazy"
              />
            </picture>
          </figure>

        </div>
      </section>
    </>
  )
}

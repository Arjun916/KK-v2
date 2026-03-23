/**
 * ImageGrid.jsx
 *
 * Spec:
 *  - BG: #FFFDF3
 *  - Container: max-width 1200px, centered
 *  - Layout: CSS grid, 2 columns
 *  - Gap between images: ~117px
 *  - Images: width ~545px each, height ~745px, object-fit cover
 *  - Uses grid/flex — NO absolute positioning
 *
 * Desktop images: 545×745 portrait
 * Mobile (≤768px): single column, gap 32px, aspect-ratio 4/5
 */
export default function ImageGrid() {
  return (
    <section
      style={{ background: '#FFFDF3', padding: '60px 20px 100px' }}
      aria-label="Editorial image grid"
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '117px',   /* annotation PDF: left:117 | img | 117 gap | img | right:117 */
        }}
      >

        {/* IMAGE 1 — 545×745px portrait placeholder */}
        <figure style={{ margin: 0, overflow: 'hidden' }}>
          <img
            src="https://via.placeholder.com/545x745/C8BFB2/8D2222?text=+"
            alt="Kochi Kochu — editorial image one"
            loading="eager"
            style={{
              width: '100%',
              height: '745px',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        </figure>

        {/* IMAGE 2 — 545×745px portrait placeholder */}
        <figure style={{ margin: 0, overflow: 'hidden' }}>
          <img
            src="https://via.placeholder.com/545x745/B8AFA8/8D2222?text=+"
            alt="Kochi Kochu — editorial image two"
            loading="lazy"
            style={{
              width: '100%',
              height: '745px',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        </figure>

      </div>
    </section>
  )
}

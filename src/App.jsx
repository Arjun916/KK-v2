/**
 * App.jsx — Kochi Kochu Landing Page
 *
 * Page max-width: 1440px, centered, background: #FFFDF3
 * Font: Futura Std (Book/Regular + Bold) — loaded via @font-face in index.css
 *
 * Sections in order:
 *  1. Hero           — 1024px height, #171717
 *  2. ContentSection — editorial copy, #FFFDF3
 *  3. ImageGrid      — 2-column portrait images, #FFFDF3
 *  4. CTASection     — full-width image overlay
 */

import Hero           from './components/Hero'
import ContentSection from './components/ContentSection'
import ImageGrid      from './components/ImageGrid'
import CTASection     from './components/CTASection'

export default function App() {
  return (
    <div
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        background: '#FFFDF3',
      }}
    >
      <Hero />
      <ContentSection />
      <ImageGrid />
      <CTASection />
    </div>
  )
}

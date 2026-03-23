import Hero           from './components/Hero'
import ContentSection from './components/ContentSection'
import ImageGrid      from './components/ImageGrid'
import CTASection     from './components/CTASection'
import TeaserPopup    from './components/TeaserPopup' // ✅ ADD THIS

export default function App() {
  return (
    <div style={{ width: '100%', background: '#FFFDF3' }}>
      
      <TeaserPopup /> {/* ✅ ADD HERE (top layer) */}

      <Hero />
      <ContentSection />
      <ImageGrid />
      <CTASection />

    </div>
  )
}
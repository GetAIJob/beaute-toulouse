import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import GallerySection from '../components/GallerySection'
import TestimonialsSection from '../components/TestimonialsSection'
import BookingSection from '../components/BookingSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <BeforeAfterSlider />
      <GallerySection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </main>
  )
}

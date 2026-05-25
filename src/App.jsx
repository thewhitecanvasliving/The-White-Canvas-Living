import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturedSection from './components/FeaturedSection'
import AboutUsSection from './components/AboutUsSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import './App.css'
import Carousel from './components/Carousel'
import WorkInProgressCarousel from './components/WorkInProgressCarousel'

function App() {
  return (
    <div className='white-canvas-living-app'>
      <Navbar />
      <HeroSection />

      <div className="whitecanvasliving-wrapper">
        <div className='container'>
          <FeaturedSection />
          <AboutUsSection />
          <WorkInProgressCarousel />
          <TestimonialsSection />
        </div>
      </div>
      {/* <Carousel /> */}

      <Footer />
    </div>
  )
}

export default App

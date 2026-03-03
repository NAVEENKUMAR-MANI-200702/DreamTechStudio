import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhyChooseSection from './components/WhyChooseSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import VisionSection from './components/VisionSection'
import ClientsSection from './components/ClientsSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import ContactSection from './components/ContactSection'

const App = () => {
  return (
    <div className='mainPage'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <VisionSection />
      <ServicesSection />
      <ProcessSection />
      <ClientsSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
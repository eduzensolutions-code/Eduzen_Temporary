import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import StatsSection from './components/StatsSection'
import ContactSection from './components/ContactSection'
import FoundersNoteSection from './components/FoundersNoteSection'
import FooterSection from './components/FooterSection'


import {Helmet} from "react-helmet-async"
//changes test



function App() {
  return (
    <>
      <Helmet>

        
        <title>
          Eduzen Solutions | Workforce Development & CSR Integration
        </title>





        // Meta tags for SEO and social media sharing
        <meta
          name="description"
          content="Eduzen Solutions empowers communities through skilling, workforce development, CSR integration, and livelihood creation initiatives across India."
        />
      
        <meta
          property="og:title"
          content="Eduzen Solutions"
        />
      
        <meta
          property="og:description"
          content="Empowering the future-ready workforce across India."
        />
      
        <meta
          property="og:type"
          content="website"
        />
      
        <meta
          property="og:url"
          content="https://eduzensolutions.in"
        />
      
      </Helmet>
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <FoundersNoteSection />
      <ContactSection />
      <FooterSection />
    </main>
    </>
    
  )
}

export default App

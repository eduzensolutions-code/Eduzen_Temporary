import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import StatsSection from './components/StatsSection'
import ContactSection from './components/ContactSection'
import FoundersNoteSection from './components/FoundersNoteSection'
import FooterSection from './components/FooterSection'


import { Helmet } from 'react-helmet-async'
import { canonicalUrl, organizationSchema, previewImageUrl, seo } from './data/seo'

function App() {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={seo.siteName} />
        <meta property="og:locale" content={seo.locale} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={previewImageUrl} />
        <meta property="og:image:secure_url" content={previewImageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={seo.imageAlt} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={seo.twitterHandle} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={previewImageUrl} />
        <meta name="twitter:image:alt" content={seo.imageAlt} />

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-black">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <FoundersNoteSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
    
  )
}

export default App

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CtaBand from './components/CtaBand'
import About from './components/About'
import BriefingForm from './components/BriefingForm'
import Faq from './components/Faq'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CtaBand />
        <About />
        <BriefingForm />
        <Faq />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

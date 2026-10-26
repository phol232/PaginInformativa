import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WhyUs from '@/components/WhyUs'
import Products from '@/components/Products'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import CallToAction from '@/components/CallToAction'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingEcommerceButton from '@/components/FloatingEcommerceButton'

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido" className="min-h-screen">
        <Hero />
        <About />
        <WhyUs />
        <Products />
        <Services />
        <Projects />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <FloatingEcommerceButton />
    </>
  )
}

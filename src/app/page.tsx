import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingEcommerceButton from '@/components/FloatingEcommerceButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <FloatingEcommerceButton />
    </main>
  )
}


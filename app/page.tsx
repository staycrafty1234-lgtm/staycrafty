import Navbar from 'components/Navbar.tsk'
import Hero from 'components/Hero.tsk'
import ProductGrid from 'components/ProductGrid.tsk'
import About from 'components/About.tsk'
import Reviews from 'components/Reviews.tsk'
import Contact from 'components/Contact.tsk'
import Footer from 'components/Footer.tsk'

export default function Home() {
  return (
    <main className="bg-[#F6F1EA] text-[#2B2B2B] overflow-hidden">
      <Navbar />
      <Hero />
      <ProductGrid />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}

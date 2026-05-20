import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import About from '../components/About'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-[#F6F1EA] text-[#2B2B2B] overflow-x-hidden">

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Products */}
      <section id="shop">
        <ProductGrid />
      </section>

      {/* About Brand */}
      <section id="about">
        <About />
      </section>

      {/* Customer Reviews */}
      <section id="reviews">
        <Reviews />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />

    </main>
  )
}

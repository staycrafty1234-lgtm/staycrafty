'use client'

import { useState } from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import About from '../components/About'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <main className="bg-[#F6F1EA] text-[#2B2B2B] overflow-x-hidden">

      <Navbar cartCount={cart.length} />

      <Hero />

      <ProductGrid addToCart={addToCart} />

      <About />

      <Reviews />

      <Contact />

      <Footer />

    </main>
  )
}

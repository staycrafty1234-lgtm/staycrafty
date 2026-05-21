'use client'

import { useState } from 'react'
import Cart from '../components/Cart'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import About from '../components/About'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {

  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <main className="bg-[#F6F1EA] text-[#2B2B2B] overflow-x-hidden">

      <Navbar
  cartCount={cart.length}
  setIsCartOpen={setIsCartOpen}
/>

      <Hero />

      <ProductGrid addToCart={addToCart} />

      <About />

      <Reviews />

      <Contact />

      <Cart
  cart={cart}
  isOpen={isCartOpen}
  setIsOpen={setIsCartOpen}
/>
      <Footer />

    </main>
  )
}

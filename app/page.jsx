'use client'
 
import { useState } from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import About from '../components/About'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Cart from '../components/Cart'

export default function Home() {

  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product) => {

    const existing = cart.find(
      item => item.id === product.id
    )

    if (existing) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      )
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ])
    }
  }

  const increaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    )
  }

  const decreaseQty = (id) => {
    setCart(
      cart
        .map(item =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  const removeItem = (id) => {
    setCart(
      cart.filter(item => item.id !== id)
    )
  }

  return (
    <main className="bg-[#F6F1EA] text-[#2B2B2B] overflow-x-hidden">

      <Navbar
        cartCount={cart.length}
        setIsCartOpen={setIsCartOpen}
      />

      <Hero />

      <ProductGrid
        cart={cart}
        addToCart={addToCart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
      />

      <About />

      <Reviews />

      <Contact />

      <Cart
        cart={cart}
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeItem={removeItem}
      />

      <Footer />

    </main>
  )
}

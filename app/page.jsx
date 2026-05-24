'use client'
 
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import About from '../components/About'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {

  const [cart, setCart] = useState(() => {

  if (typeof window !== 'undefined') {

    const savedCart = localStorage.getItem('cart')

    return savedCart ? JSON.parse(savedCart) : []
  }

  return []
})
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
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart))
}, [cart])
  return (
    <main className="bg-[#F6F1EA] text-[#2B2B2B] overflow-x-hidden">

      <Navbar
        cartCount={cart.length}
        setIsCartOpen={setIsCartOpen}
      />
     <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: '#243524',
      color: '#fff',
      borderRadius: '14px'
    }
  }}
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

     <button
  onClick={() => setIsCartOpen(true)}
  className="fixed bottom-6 right-6 z-40 bg-[#243524] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-2xl hover:scale-110 transition"
>

  🛍️

  {cart.length > 0 && (

    <span className="absolute -top-2 -right-2 bg-[#C89B63] text-white text-sm w-7 h-7 rounded-full flex items-center justify-center font-semibold">
      {cart.length}
    </span>

  )}

</button>
      <Cart
        cart={cart}
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeItem={removeItem}
      />

     <WhatsAppButton />
      <Footer />

    </main>
  )
}

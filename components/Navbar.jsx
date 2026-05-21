'use client'

import { ShoppingBag } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#f6f1ea]/80 border-b border-[#e7ddd0]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-4xl font-serif text-[#C89B63]">
          StayCrafty
        </h1>
 <ul className="hidden md:flex gap-10 text-sm tracking-wide uppercase">
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="bg-[#243524] text-white px-6 py-3 rounded-full flex items-center gap-2">
          <ShoppingBag size={18} />
          Cart
          <span className="bg-[#C89B63] h-6 w-6 rounded-full text-sm flex items-center justify-center">
            {cartCount}
          </span>
        </button>
      </div>
    </nav>
  )
}

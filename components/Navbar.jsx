'use client'

import { useState } from 'react'
import { ShoppingBag, Menu, X } from 'lucide-react'

export default function Navbar({
  cartCount,
  setIsCartOpen
}) {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#f6f1ea]/80 border-b border-[#e7ddd0]">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}
          <h1 className="text-3xl lg:text-4xl font-serif text-[#C89B63]">
            StayCrafty
          </h1>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-10 text-sm tracking-wide uppercase">

            <li>
              <a href="#shop" className="hover:text-[#C89B63] transition">
                Shop
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-[#C89B63] transition">
                About
              </a>
            </li>

            <li>
              <a href="#reviews" className="hover:text-[#C89B63] transition">
                Reviews
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-[#C89B63] transition">
                Contact
              </a>
            </li>

          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* CART BUTTON */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-[#243524] text-white px-5 py-3 rounded-full flex items-center gap-2 hover:bg-[#314531] transition"
            >
              <ShoppingBag size={18} />

              <span className="hidden sm:block">
                Cart
              </span>

              <span className="bg-[#C89B63] h-6 w-6 rounded-full text-sm flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden"
            >
              <Menu size={30} />
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition duration-300 ${
          menuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#F8F3EC] z-50 shadow-2xl transform transition-transform duration-500 ${
          menuOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-[#e7ddd0]">

          <h2 className="text-2xl font-serif text-[#C89B63]">
            Menu
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
          >
            <X size={32} />
          </button>

        </div>

        {/* MENU LINKS */}
        <div className="flex flex-col p-8 gap-8 text-lg uppercase tracking-wide">

          <a
            href="#shop"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#C89B63] transition"
          >
            Shop
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#C89B63] transition"
          >
            About
          </a>

          <a
            href="#reviews"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#C89B63] transition"
          >
            Reviews
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#C89B63] transition"
          >
            Contact
          </a>

        </div>
      </div>
    </>
  )
}

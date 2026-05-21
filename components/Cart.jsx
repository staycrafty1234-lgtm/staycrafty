'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function Cart({
  cart,
  isOpen,
  setIsOpen,
  increaseQty,
  decreaseQty,
  removeItem
}) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* CART PANEL */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-[#F8F3EC] z-50 shadow-2xl transform transition-transform duration-500 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#e7ddd0]">
          <h2 className="text-3xl font-serif">
            Your Cart 🛍️
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="text-4xl text-[#6d5d4f]"
          >
            ×
          </button>
        </div>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">

          {cart.length === 0 ? (
            <p className="text-lg text-[#777]">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 border-b border-[#e7ddd0] pb-6"
              >

                {/* IMAGE */}
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-[#eadcc9] flex items-center justify-center flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex-1">

                  <h3 className="text-xl font-serif leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-[#C89B63] text-xl mt-2 font-semibold">
                    ₹{item.price.toLocaleString()}
                  </p>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-4 mt-5">

                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-10 h-10 rounded-full border border-[#d8c6b1] text-xl flex items-center justify-center hover:bg-[#efe4d7] transition"
                    >
                      −
                    </button>

                    <span className="text-xl font-semibold min-w-[20px] text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-10 h-10 rounded-full border border-[#d8c6b1] text-xl flex items-center justify-center hover:bg-[#efe4d7] transition"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-[#7a6859] hover:text-black transition"
                    >
                      Remove
                    </button>

                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        <div className="border-t border-[#e7ddd0] px-8 py-6 bg-[#F8F3EC]">

          <div className="flex justify-between items-center text-2xl mb-6">
            <span>Total</span>

            <span className="font-serif text-[#B17A45]">
              ₹{total.toLocaleString()}
            </span>
          </div>

          <button className="w-full bg-gradient-to-r from-[#243524] to-[#314531] text-white py-4 rounded-full text-lg font-semibold shadow-xl hover:scale-[1.02] transition">
            💬 Order via WhatsApp
          </button>

          <p className="text-center mt-4 text-sm text-[#8b7b6d]">
            You'll be redirected to WhatsApp to confirm your order
          </p>

        </div>
      </div>
    </>
  )
}

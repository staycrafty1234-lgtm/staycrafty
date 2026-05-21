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
        className={`fixed top-0 right-0 h-full w-full sm:w-[500px] bg-[#F8F3EC] z-50 shadow-2xl transform transition-transform duration-500 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between px-10 py-8 border-b border-[#e7ddd0]">
          <h2 className="text-5xl font-serif">
            Your Cart 🛍️
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="text-5xl text-[#6d5d4f]"
          >
            ×
          </button>
        </div>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto px-10 py-8 space-y-8">

          {cart.length === 0 ? (
            <p className="text-xl text-[#777]">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 border-b border-[#e7ddd0] pb-8"
              >

                {/* IMAGE */}
                <div className="w-28 h-28 rounded-3xl overflow-hidden bg-[#eadcc9] flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex-1">

                  <h3 className="text-3xl font-serif">
                    {item.name}
                  </h3>

                  <p className="text-[#C89B63] text-3xl mt-2 font-semibold">
                    ₹{item.price}
                  </p>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-5 mt-6">

                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-12 h-12 rounded-full border border-[#d8c6b1] text-3xl"
                    >
                      −
                    </button>

                    <span className="text-3xl font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-12 h-12 rounded-full border border-[#d8c6b1] text-3xl"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-[#7a6859]"
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
        <div className="border-t border-[#e7ddd0] px-10 py-8 bg-[#F8F3EC]">

          <div className="flex justify-between items-center text-4xl mb-8">
            <span>Total</span>

            <span className="font-serif text-[#B17A45]">
              ₹{total.toLocaleString()}
            </span>
          </div>

          <button className="w-full bg-gradient-to-r from-[#243524] to-[#314531] text-white py-6 rounded-full text-2xl font-semibold shadow-xl hover:scale-[1.02] transition">
            💬 Order via WhatsApp
          </button>

          <p className="text-center mt-5 text-[#8b7b6d]">
            You'll be redirected to WhatsApp to confirm your order
          </p>

        </div>
      </div>
    </>
  )
}

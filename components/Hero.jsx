'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen grid lg:grid-cols-2 items-center px-5 sm:px-6 lg:px-20 pt-28 lg:pt-32 gap-10 lg:gap-16 overflow-hidden">

      {/* LEFT SIDE */}
      <motion.div
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>

        <span className="uppercase tracking-[5px] text-[#C89B63] text-sm">
          Handcrafted Luxury
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-tight font-serif mt-6 break-words">
          Handcrafted Resin Art
          <br />
          Made With Elegance & Soul
        </h1>

        <p className="mt-8 text-base sm:text-lg text-[#5c5248] leading-8 sm:leading-9 max-w-xl">
          Each piece is individually poured, cured, polished,
          and finished entirely by hand.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full">

          <a
            href="#shop"
            className="bg-gradient-to-r from-[#C89B63] to-[#D8AF76] text-white px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition text-center w-full sm:w-auto"
          >
            Shop Collection
          </a>

          <a
            href="#about"
            className="border border-[#cfc3b5] px-8 py-4 rounded-full hover:bg-white transition text-center w-full sm:w-auto"
          >
            Our Story
          </a>

        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
  className="relative"
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>

        {/* GLOW */}
        <div className="absolute -top-10 -left-10 w-52 sm:w-72 h-52 sm:h-72 bg-[#e7d6c0] rounded-full blur-3xl opacity-50" />

        {/* IMAGE */}
        <Image
          src="/products/tray.jpg"
          alt="Resin Tray"
          width={700}
          height={700}
          className="rounded-[30px] shadow-2xl relative z-10 w-full h-auto"
        />

        {/* LABEL */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#243524] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl z-20 shadow-xl text-sm sm:text-base">
          ✦ All pieces are custom & made-to-order
        </div>

      </motion.div>
    </section>
  )
}

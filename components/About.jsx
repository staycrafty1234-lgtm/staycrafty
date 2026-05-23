'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section
      id="about"
      className="px-5 sm:px-6 lg:px-20 py-24 lg:py-32 overflow-hidden"
    >

      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* IMAGE SIDE */}
        <div className="relative">

          <div className="absolute -bottom-10 -right-10 w-52 sm:w-72 h-52 sm:h-72 bg-[#eadcc9] rounded-full blur-3xl opacity-50" />

          <Image
            src="/products/about.jpg"
            alt="About"
            width={700}
            height={700}
            className="rounded-[30px] shadow-2xl relative z-10 w-full h-auto"
          />
        </div>

        {/* TEXT SIDE */}
        <div>

          <span className="uppercase tracking-[5px] text-[#C89B63] text-sm">
            Our Story
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl leading-tight font-serif mt-6 break-words">
            Every Piece Holds
            <br />
            A Story
          </h2>

          <p className="mt-8 text-base sm:text-lg leading-8 sm:leading-9 text-[#5c5248]">
            StayCrafty was created to transform everyday spaces
            into elegant artistic experiences. Every creation is
            individually handcrafted, meaning no two pieces are
            ever exactly alike.
          </p>

          <p className="mt-6 text-base sm:text-lg leading-8 sm:leading-9 text-[#5c5248]">
            From luxurious resin trays to artistic décor pieces,
            every item is designed with patience, detail, and soul.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6 mt-12">

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-3xl sm:text-4xl font-serif text-[#C89B63]">
                500+
              </h3>

              <p className="mt-2 text-[#6d6257]">
                Handmade Orders
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-3xl sm:text-4xl font-serif text-[#C89B63]">
                100%
              </h3>

              <p className="mt-2 text-[#6d6257]">
                Custom Crafted
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

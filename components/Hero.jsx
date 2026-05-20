import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen grid lg:grid-cols-2 items-center px-6 lg:px-20 pt-32 gap-16">
      <div>
        <span className="uppercase tracking-[5px] text-[#C89B63] text-sm">
          Handcrafted Luxury
        </span>

        <h1 className="text-5xl lg:text-7xl leading-tight font-serif mt-6">
          Handcrafted Resin Art
          <br />
          Made With Elegance & Soul
        </h1>
         <p className="mt-8 text-lg text-[#5c5248] leading-9 max-w-xl">
          Each piece is individually poured, cured, polished,
          and finished entirely by hand.
        </p>

        <div className="flex gap-5 mt-10">
          <button className="bg-gradient-to-r from-[#C89B63] to-[#D8AF76] text-white px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition">
            Shop Collection
          </button>

          <button className="border border-[#cfc3b5] px-8 py-4 rounded-full hover:bg-white transition">
            Our Story
          </button>
        </div>
      </div>
       <div className="relative">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#e7d6c0] rounded-full blur-3xl opacity-50" />

        <Image
          src="/products/tray.jpg"
          alt="Resin Tray"
          width={700}
          height={700}
          className="rounded-[40px] shadow-2xl relative z-10"
        />

        <div className="absolute bottom-6 left-6 bg-[#243524] text-white px-6 py-4 rounded-2xl z-20 shadow-xl">
          ✦ All pieces are custom & made-to-order
        </div>
      </div>
    </section>
  )
}

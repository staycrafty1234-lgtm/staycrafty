'use client'

import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Luxury Resin Clock',
    price: '2,499',
    image: '/products/clock.jpg'
  },
  {
    id: 2,
    name: 'Artistic Serving Board',
    price: '1,899',
    image: '/products/board.jpg'
  },
  {
    id: 3,
    name: 'Geometric Resin Tray',
    price: '2,299',
    image: '/products/tray.jpg'
  },
  {
    id: 4,
    name: 'Floral Lazy Susan',
    price: '1,699',
    image: '/products/lazy.jpg'
  },
  {
    id: 5,
    name: 'Om Decor Piece',
    price: '1,299',
    image: '/products/om.jpg'
  }
]
export default function ProductGrid({ addToCart }) {
  return (
    <section id="shop" className="px-6 lg:px-20 py-28">
      <span className="tracking-[5px] uppercase text-[#C89B63] text-sm">
        Our Collection
      </span>

      <h2 className="text-5xl lg:text-7xl font-serif mt-5">
        Shop Handcrafted Resin
      </h2>

      <p className="mt-6 max-w-2xl text-xl leading-9 text-[#5c5248]">
        Every item is handmade with premium resin, pigments,
        textures, and love.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 hover:-translate-y-2"
          >
            <div className="overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-[400px] object-cover hover:scale-110 transition duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif">
                {product.name}
              </h3>

              <p className="mt-3 text-[#C89B63] text-xl">
                {product.price}
              </p>

              <button
  onClick={() => addToCart(product)}
  className="mt-6 w-full bg-[#243524] text-white py-4 rounded-full hover:bg-[#314531] transition"
>
  Add To Cart
</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

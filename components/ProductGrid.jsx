'use client'
import { useState } from 'react'

import toast from 'react-hot-toast'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Luxury Resin Clock',
    price: 2499,
    image: '/products/clock.jpg',
    category: 'Clocks'
  },
  {
    id: 2,
    name: 'Artistic Serving Board',
    price: 1899,
    image: '/products/board.jpg',
    category: 'Trays'
  },
  {
    id: 3,
    name: 'Geometric Resin Tray',
    price: 2299,
    image: '/products/tray.jpg',
    category: 'Trays'
  },
  {
    id: 4,
    name: 'Floral Lazy Susan',
    price: 1699,
    image: '/products/lazy.jpg',
    category: 'Dining'
  },
  {
    id: 5,
    name: 'Om Decor Piece',
    price: 1299,
    image: '/products/om.jpg',
    category: 'Decor'
  }
]

export default function ProductGrid({
  cart,
  addToCart,
  increaseQty,
  decreaseQty
}) {
  const [search, setSearch] = useState('')

const [activeCategory, setActiveCategory] =
  useState('All')
  const filteredProducts = products.filter(product => {

  const matchesSearch =
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())

  const matchesCategory =
    activeCategory === 'All' ||
    product.category === activeCategory

  return matchesSearch && matchesCategory
})

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
      <div className="mt-12 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">

  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="border border-[#ddd] px-6 py-4 rounded-full bg-white outline-none w-full lg:w-[320px]"
  />

  <div className="flex flex-wrap gap-3">

    {['All', 'Clocks', 'Trays', 'Boards', 'Decor', 'Dining'].map(category => (

      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`px-5 py-3 rounded-full transition ${
          activeCategory === category
            ? 'bg-[#243524] text-white'
            : 'bg-white'
        }`}
      >
        {category}
      </button>

    ))}

  </div>
</div>

      {/* PRODUCT GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

        {filteredProducts.map((product) => {

          const cartItem = cart.find(
            item => item.id === product.id
          )

          return (
            <div
              key={product.id}
              className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 hover:-translate-y-2"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-[400px] object-cover hover:scale-110 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h3 className="text-2xl font-serif">
                  {product.name}
                </h3>

                <p className="mt-3 text-[#C89B63] text-xl font-semibold">
                  ₹{product.price.toLocaleString()}
                </p>

                {/* CART CONTROLS */}
                {cartItem ? (

                  <div className="mt-6 flex items-center justify-between bg-[#243524] text-white rounded-full overflow-hidden">

                    <button
                      onClick={() => decreaseQty(product.id)}
                      className="px-6 py-4 text-2xl hover:bg-[#314531] transition"
                    >
                      −
                    </button>

                    <span className="text-lg font-semibold">
                      {cartItem.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(product.id)}
                      className="px-6 py-4 text-2xl hover:bg-[#314531] transition"
                    >
                      +
                    </button>

                  </div>

                ) : (

                  <button
  onClick={() => {
    addToCart(product)
    toast.success('Added to cart!')
  }}
  className="mt-6 w-full bg-[#243524] text-white py-4 rounded-full hover:bg-[#314531] transition"
>
  Add To Cart
</button>

                )}

              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

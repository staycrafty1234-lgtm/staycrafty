'use client'

export default function Cart({ cart, isOpen, setIsOpen }) {

  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price.replace(/[₹,]/g, ''))
  }, 0)

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[380px] bg-white shadow-2xl z-[100] transform transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >

      {/* HEADER */}
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-2xl font-serif">
          Your Cart
        </h2>

        <button
          onClick={() => setIsOpen(false)}
          className="text-2xl"
        >
          ×
        </button>
      </div>

      {/* CART ITEMS */}
      <div className="p-6 space-y-6 overflow-y-auto h-[70%]">

        {cart.length === 0 ? (
          <p className="text-[#777]">
            Your cart is empty.
          </p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="border-b pb-4"
            >
              <h3 className="text-xl font-serif">
                {item.name}
              </h3>

              <p className="mt-2 text-[#C89B63]">
                {item.price}
              </p>
            </div>
          ))
        )}

      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-0 w-full p-6 border-t bg-white">

        <div className="flex justify-between text-xl mb-5">
          <span>Total</span>

          <span className="font-semibold">
            ₹{total.toLocaleString()}
          </span>
        </div>

        <button className="w-full bg-[#243524] text-white py-4 rounded-full hover:bg-[#314531] transition">
          Checkout
        </button>

      </div>
    </div>
  )
}

'use client'

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-gradient-to-br from-[#243524] to-[#314531] text-white px-6 lg:px-20 py-28"
    >
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-serif">
            Leave A Review
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full mt-10 bg-white/10 border border-white/10 rounded-2xl p-5 outline-none"
          />

          <textarea
            placeholder="Your Review"
            rows={6}
            className="w-full mt-6 bg-white/10 border border-white/10 rounded-2xl p-5 outline-none"
          />

          <button className="mt-6 bg-[#C89B63] px-8 py-4 rounded-full">
            Submit Review
          </button>
        </div>
        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-[30px] border border-white/10">
            <p className="text-[#E3BC80] text-xl">★★★★★</p>

            <p className="mt-6 text-lg leading-9">
              My marble tray arrived perfectly packed.
              It looks even more beautiful in person.
            </p>

            <p className="mt-6 text-white/70">
              — Neha K.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-[30px] border border-white/10">
            <p className="text-[#E3BC80] text-xl">★★★★★</p>

            <p className="mt-6 text-lg leading-9">
              The quality is incredible for the price.
              Everyone keeps asking where I bought it.
            </p>

            <p className="mt-6 text-white/70">
              — Riya P.
            </p>
          </div>
        </div>
      </div>
    </section>
    )
}

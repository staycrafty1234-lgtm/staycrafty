'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

export default function Reviews() {

  const [reviews, setReviews] = useState(() => {

    if (typeof window !== 'undefined') {

      const savedReviews = localStorage.getItem('reviews')

      return savedReviews
        ? JSON.parse(savedReviews)
        : [
            {
              name: 'Aarushi',
              rating: 5,
              text: 'Absolutely beautiful craftsmanship. The resin finish looks luxurious!'
            },
            {
              name: 'Riya',
              rating: 4,
              text: 'Packaging was elegant and the tray quality exceeded expectations.'
            }
          ]
    }

    return []
  })

  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [rating, setRating] = useState(5)

  useEffect(() => {
    localStorage.setItem(
      'reviews',
      JSON.stringify(reviews)
    )
  }, [reviews])

  const submitReview = () => {

    if (!name || !text) return

    const newReview = {
      name,
      text,
      rating
    }

    setReviews([newReview, ...reviews])

    setName('')
    setText('')
    setRating(5)
  }

  return (
    <section
      id="reviews"
      className="px-6 lg:px-20 py-28 bg-[#f8f3ec]"
    >

      <span className="tracking-[5px] uppercase text-[#C89B63] text-sm">
        Customer Reviews
      </span>

      <h2 className="text-5xl lg:text-7xl font-serif mt-5">
        What Our Customers Say
      </h2>

      {/* REVIEW FORM */}
      <div className="bg-white rounded-[30px] p-8 mt-16 shadow-sm max-w-3xl">

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-[#ddd] rounded-xl px-5 py-4 mb-5 outline-none"
        />

        <textarea
          placeholder="Write your review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border border-[#ddd] rounded-xl px-5 py-4 mb-5 outline-none h-32 resize-none"
        />

        {/* STAR RATING */}
        <div className="flex gap-2 mb-6">

          {[1, 2, 3, 4, 5].map((star) => (

            <button
              key={star}
              onClick={() => setRating(star)}
              className="transition hover:scale-110"
            >
              <Star
                size={32}
                fill={star <= rating ? '#C89B63' : 'transparent'}
                color="#C89B63"
              />
            </button>

          ))}
        </div>

        {/* SUBMIT */}
        <button
          onClick={submitReview}
          className="bg-[#243524] text-white px-8 py-4 rounded-full hover:bg-[#314531] transition"
        >
          Submit Review
        </button>
      </div>

      {/* REVIEW CARDS */}
      <div className="grid md:grid-cols-2 gap-8 mt-16">

        {reviews.map((review, index) => (

          <div
            key={index}
            className="bg-white p-8 rounded-[30px] shadow-sm"
          >

            <div className="flex gap-1 mb-4">

              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill="#C89B63"
                  color="#C89B63"
                />
              ))}

            </div>

            <p className="text-[#5c5248] leading-8">
              "{review.text}"
            </p>

            <h4 className="mt-6 font-semibold text-lg">
              — {review.name}
            </h4>

          </div>

        ))}
      </div>
    </section>
  )
}

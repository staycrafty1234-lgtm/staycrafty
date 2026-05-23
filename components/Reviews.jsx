'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { supabase } from '../lib/supabase'

export default function Reviews() {

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Aarushi',
      message:
        'Absolutely beautiful craftsmanship. The resin finish looks luxurious!',
      rating: 5
    },
    {
      id: 2,
      name: 'Riya',
      message:
        'Packaging was elegant and the tray quality exceeded expectations.',
      rating: 4
    }
  ])

  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [rating, setRating] = useState(5)

  // FETCH REVIEWS
  useEffect(() => {
    fetchReviews()
  }, [])

  async function fetchReviews() {

    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error && data.length > 0) {
      setReviews(data)
    }

    if (error) {
      console.log(error)
    }
  }

  // SUBMIT REVIEW
  async function submitReview() {

    if (!name || !text) return

    const reviewData = {
      name,
      message: text,
      rating
    }

    const { error } = await supabase
      .from('reviews')
      .insert([reviewData])

    if (error) {
      console.log(error)
      return
    }

    setReviews([
      {
        id: Date.now(),
        ...reviewData
      },
      ...reviews
    ])

    setName('')
    setText('')
    setRating(5)
  }

  return (
    <section
      id="reviews"
      className="px-5 sm:px-6 lg:px-20 py-24 lg:py-32 bg-[#f8f3ec]"
    >

      <span className="tracking-[5px] uppercase text-[#C89B63] text-sm">
        Customer Reviews
      </span>

      <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif mt-5 leading-tight">
        What Our Customers Say
      </h2>

      {/* FORM */}
      <div className="bg-white rounded-[30px] p-6 sm:p-8 mt-16 shadow-sm max-w-3xl">

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

        {/* STARS */}
        <div className="flex gap-2 mb-6">

          {[1, 2, 3, 4, 5].map((star) => (

            <button
              type="button"
              key={star}
              onClick={() => setRating(star)}
              className="hover:scale-110 transition"
            >
              <Star
                size={30}
                fill={star <= rating ? '#C89B63' : 'transparent'}
                color="#C89B63"
              />
            </button>

          ))}
        </div>

        {/* BUTTON */}
        <button
          type="button"
          onClick={submitReview}
          className="bg-[#243524] text-white px-8 py-4 rounded-full hover:bg-[#314531] transition"
        >
          Submit Review
        </button>

      </div>

      {/* REVIEW GRID */}
      <div className="grid md:grid-cols-2 gap-8 mt-16">

        {reviews.map((review) => (

          <div
            key={review.id}
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
              "{review.message}"
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

'use client'
import Image from "next/image"
import { useState } from "react"

export const Rate = () => {
  const [rating, setRating] = useState<number>(0)
  const [hover, setHover] = useState<number>(0)

  return (
    <>
      {
        [1, 2, 3, 4, 5].map((star, idx) => {
          const ratingValue = idx + 1
          return (
            <label className="pr-2 cursor-pointer" key={idx}>
              <input
                type='radio'
                value={ratingValue}
                className="hidden"
                onClick={() => setRating(ratingValue)}
              />
              <svg onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(0)} width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path fill={(hover || rating) >= ratingValue ? '#F2994A' : ''} fillRule="evenodd" clipRule="evenodd" d="M20.1661 28.7449L30.9901 35.2779L28.1177 22.9651L37.6808 14.6806L25.0877 13.6122L20.1661 2L15.2444 13.6122L2.65137 14.6806L12.2144 22.9651L9.34198 35.2779L20.1661 28.7449Z" stroke="#F2994A" strokeWidth="1.5" />
              </svg>
            </label>
          )
        })
      }
    </>
  )
}

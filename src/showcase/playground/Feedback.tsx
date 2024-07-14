'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'
import Confetti from 'react-confetti'

const FeedbackComponent = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const starVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    selected: { rotate: [0, 15, -15, 0], transition: { duration: 0.4 } },
  }

  return (
    <div className="border border-gray-700 rounded-lg p-6">
      <AnimatePresence>
        {!isSubmitted ? (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h3 className="mb-4 text-2xl font-bold">Leave your feedback</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <p className="mb-2 text-sm ">
                  Rate your experience:
                </p>
                <div className="relative flex items-center gap-2">
                  {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1
                    return (
                      <motion.label
                        key={index}
                        variants={starVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        animate={
                          ratingValue === rating ? 'selected' : 'initial'
                        }
                      >
                        <input
                          type="radio"
                          name="rating"
                          className="hidden"
                          value={ratingValue}
                          onClick={() => setRating(ratingValue)}
                        />
                        <Star
                          className="cursor-pointer transition-colors duration-200"
                          color={
                            ratingValue <= (hover || rating)
                              ? '#ae8303'
                              : '#cccccc'
                          }
                          size={22}
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(0)}
                        />
                      </motion.label>
                    )
                  })}
                  <motion.div
                    className="pointer-events-none absolute inset-0"
                    animate={{
                      opacity: rating > 0 ? 1 : 0,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      className="sparkle"
                      style={{ width: '100%', height: '100%' }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1],
                        rotate: [0, 360],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: 'easeInOut',
                      }}
                    ></motion.div>
                  </motion.div>
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="feedback"
                  className="mb-2 block text-sm "
                >
                  Your feedback:
                </label>
                <textarea
                  id="feedback"
                  rows={4}
                  className="text-foreground w-full rounded-lg border border-gray-400 bg-transparent px-3 py-2 text-sm focus:outline-none"
                  placeholder="Tell us about your experience..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className=" w-full rounded-lg  bg-red-500 px-4 py-1 text-sm text-white transition duration-200 "
                whileHover={{ scale: 1.01 }}
              >
                Submit Feedback
              </motion.button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="mb-4 text-2xl font-bold">Thank You!</h2>
            <p>We appreciate your feedback.</p>
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={false}
              numberOfPieces={400}
              gravity={0.1}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackComponent

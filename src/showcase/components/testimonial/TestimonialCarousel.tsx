'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, delay } from 'framer-motion'

const testimonials = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa .',
    author: 'Judith Black',
    title: 'CEO of Workcation',
  },
  {
    text: 'Another testimonial goes here. Praising your product or service and expressing satisfaction.',
    author: 'John Doe',
    title: 'Founder of ABC Inc.',
  },
  // Add more testimonials as needed
]

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % testimonials.length,
      )
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const { text, author, title } = testimonials[currentTestimonial]

  const variants = {
    initial: { opacity: 0, scale: 0.1, y: 100 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.1, y: -100 },
  }
  return (
    <section className="relative overflow-hidden py-12 md:py-24">
      <div className="mx-auto max-w-2xl lg:max-w-3xl">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentTestimonial}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
              duration: 0.6,
              delayChildren: 5,
            }}
          >
            <p className="text-center text-2xl font-semibold tracking-tight">
              {text}
            </p>
            <div className="mt-10 text-center">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">{author}</div>
                <div className="text-gray-600">{title}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default TestimonialCarousel

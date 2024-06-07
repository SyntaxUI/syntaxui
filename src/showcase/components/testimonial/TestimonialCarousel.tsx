'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    }, 3000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const { text, author, title } = testimonials[currentTestimonial]

  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  }

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="mx-auto max-w-2xl lg:max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
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

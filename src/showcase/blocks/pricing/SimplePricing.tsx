// Simple Pricing, just change the values inside pricingPlan array.
'use client'

import { BatteryCharging } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
const SimplePricing = () => {
  const [billingCycle, setBillingCycle] = useState<'M' | 'A'>('M')

  const pricingPlan = {
    heading: 'Flexible Prices, Flexible Sites.',
    heading_description: 'Supercharge your next website with the component kit.',
    price: 1.99,
    link: 'https://github.com/SyntaxUI/syntaxui',
    description: 'Get access to all premium components, and save time on your next project.',
    notes: [
      '30 days free trial, No credit card required',
    ],
    foreverPrice: 249,
  }

  const Heading = () => (
    <div className="relative z-10 my-12 flex flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="flex w-full flex-col items-center justify-center space-y-4">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl">
          {pricingPlan.heading}
        </p>
        <p className="text-md max-w-xl flex flex-col justify-center items-center text-gray-700 dark:text-gray-400">
          <BatteryCharging className=''/>
          {pricingPlan.heading_description} 
        </p>
      </div>
    </div>
  )

  const PricingCard = () => (
    <div className="relative z-10 mx-auto w-full max-w-md flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <p className="my-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
        ${pricingPlan.price}/Month
      </p>
      <p className="mb-4 text-xs font-normal text-gray-800 dark:text-gray-200">
        or, keep it forever for <span className="font-semibold">${pricingPlan.foreverPrice}</span>
      </p>
      <motion.button
        whileTap={{ scale: 0.985 }}
        onClick={() => {
          window.open(pricingPlan.link)
        }}
        className="mt-4 w-full rounded-lg bg-red-500 py-2 text-sm font-medium text-white hover:bg-red-500/90"
      >
        Create Your First Project
      </motion.button>
      <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-4">
        {pricingPlan.description}
      </p>
      <div className="flex flex-col items-center space-y-2">
        {pricingPlan.notes.map((note, idx) => (
          <p key={idx} className="text-xs text-gray-500 dark:text-gray-400 text-center">
            {note}
          </p>
        ))}
      </div>
    </div>
  )

  return (
    <section className="relative w-full overflow-hidden py-12 text-black bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Heading />
        <PricingCard />
      </div>
    </section>
  )
}

export default function PricingPage() {
  return <SimplePricing />
}

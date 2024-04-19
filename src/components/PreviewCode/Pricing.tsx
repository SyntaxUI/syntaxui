'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useState } from 'react'

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Start with essential tools to boost your online presence.',
    monthlyPrice: 69,
    annualPrice: 49,
    features: [
      'SEO Strategy & Topic Recommendations',
      'Competitor Analysis to stand out',
      'Built-in Keyword Research',
      'Target latest Google trends',
      'SEO optimized blogs and socials',
      'Technical SEO analysis and Reports',
      'Target 100+ regions and languages',
    ],
  },
  {
    name: 'Professional',
    description:
      'Unlock enhanced features and premium content to supercharge your business.',
    monthlyPrice: 299,
    annualPrice: 199,
    features: [
      'Everything in Basic plan',
      'Get 25 premium blogs',
      'Index upto 1000 pages',
      'Premium support',
      'Local SEO',
      'SEO Agent',
    ],
  },
  {
    name: 'Premium',
    description:
      'Ultimate customization and dedicated support for enterprises.',
    monthlyPrice: 2499,
    annualPrice: 1666,
    features: [
      'Everything in Professional plan',
      'Get Unlimited premium blogs',
      'Add your own AI Model key',
      'Premium support & training sessions',
    ],
  },
]

const Pricing = () => {
  const [annually, setBillingAnnually] = useState<boolean>(false)

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-12 text-black lg:px-8 lg:py-12">
      <Heading  annually={annually} setBillingAnnually={setBillingAnnually}/>
      <PricingCards annually={annually} />
    </section>
  )
}

const Heading = ({annually, setBillingAnnually}: {annually: boolean, setBillingAnnually : (value : boolean) => void}) => (
  <div className="relative z-10 my-12 flex flex-col items-center justify-center gap-4">
    <div className="flex w-full flex-col items-start justify-center space-y-4 md:items-center">
      <div className="mb-2 inline-block rounded-full border border-red-500/25 bg-red-100 px-4 py-[0.20rem] text-xs font-medium uppercase text-red-500">
        Pricing
      </div>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
        Fair pricing, unfair advantage.
      </p>
      <p className="text-md max-w-xl text-gray-700 md:text-center">
        Get started with Acme today and take your business to the next level.
      </p>
    </div>
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={() => setBillingAnnually(false)}
        className={`rounded-lg px-4 py-2 text-sm font-medium duration-200 delay-100 ${
          !annually ? 'relative text-white' : 'text-gray-700 hover:bg-red-500/10 border-red-500/0 delay-0'
        }`}
      >
        Monthly
        {!annually && <BackgroundShift key="monthly" />}
      </button>
      <button
        onClick={() => setBillingAnnually(true)}
        className={`rounded-lg px-4 py-2 text-sm font-medium duration-200 delay-100 ${
          annually ? 'relative text-white' : 'text-gray-700 hover:bg-red-500/10'
        }`}
      >
        Annual
        {annually && <BackgroundShift key="annual" />}
      </button>
    </div>
  </div>
)


const PricingCards = ({ annually }: { annually: boolean }) => (
  <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:gap-4">
    {pricingPlans.map((plan, index) => (
      <div
        key={index}
        className="w-full rounded-xl border-[1px] border-gray-300 bg-white p-6 text-left"
      >
        <p className="mb-1 text-sm font-medium uppercase text-red-500">
          {plan.name}
        </p>
        <p className="mb-6 text-sm text-gray-600">{plan.description}</p>
        <div className="mb-8 overflow-hidden">
          <div className='relative overflow-hidden'>
          <p className="text-3xl font-semibold text-gray-900/0 select-none">
            <span>0</span>
            <span className="text-sm font-medium">/a</span>
          </p>
          <AnimatePresence>
            {annually && (
              <motion.p
                key="mounthly"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1,
                  transition : { type: 'spring', bounce: 0, duration: 0.3, delay: (index*0.08) }
                }}
                exit={{ y: 50, opacity: 0,
                  transition : { type: 'spring', bounce: 0, duration: 0.3, delay: (index*0.08) }
                 }}
                transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                className="absolute top-0 text-3xl font-semibold text-gray-900"
              >
                <span>{plan.monthlyPrice}</span>
                <span className="text-sm font-medium">/year</span>
              </motion.p>
            )}
            {!annually && (
              <motion.p
                key="annual"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1,
                  transition : { type: 'spring', bounce: 0, duration: 0.3, delay: (index*0.08) }
                 }}
                exit={{ y: 50, opacity: 0,
                  transition : { type: 'spring', bounce: 0, duration: 0.3, delay: (index*0.08) }
                 }}
                className="absolute top-0 text-3xl font-semibold text-gray-900"
              >
                <span>{plan.annualPrice}</span>
                <span className="text-sm font-medium">/year</span>
              </motion.p>
            )}
          </AnimatePresence>
          </div>
          <motion.button
            whileTap={{ scale: 0.985 }}
            className="mt-8 w-full rounded-lg bg-red-500 py-2 text-sm font-medium text-white hover:bg-red-500/90"
          >
            Get Started
          </motion.button>
        </div>
        {plan.features.map((feature, idx) => (
          <div key={idx} className="mb-3 flex items-center gap-2">
            <Check className="text-red-500" size={18} />
            <span className="text-sm text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
    ))}
  </div>
)

const BackgroundShift = ({ key }: { key: string }) => (
  <motion.span
    key={key}
    layoutId="bg-shift"
    className="absolute inset-0 -z-10 rounded-lg bg-red-500"
    initial={{ opacity: 1, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{
      type: 'spring',
      bounce: 0.2,
      delay: 0.1,
      duration: 0.4,
      ease: 'easeInOut',
    }}
  />
)

export default function PricingPage() {
  return <Pricing />
}

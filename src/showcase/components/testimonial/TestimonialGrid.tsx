import { FC } from 'react'
import Image from 'next/image'

interface TestimonalCardProps {
  name: string
  description: string
  image: string
  profession: string
}

const TestimonialCard: FC<TestimonalCardProps> = ({
  name,
  description,
  image,
  profession,
}) => {
  return (
    <div
      className={`card-shadow relative flex h-auto max-w-[22rem] flex-col items-start justify-center overflow-hidden rounded-2xl border border-[#F5F5F5] bg-white p-5 shadow-sm`}
    >
      <div className="absolute right-0 top-0 h-24 w-24 rounded-2xl bg-gradient-to-r from-[#fb3a5d]  to-[#fb3a5d] opacity-20 blur-3xl"></div>
      <div className="mb-3 flex flex-row gap-3">
        <Image
          className="block h-11 w-11 rounded-full object-cover"
          src={image}
          alt={image}
          width={120}
          height={80}
        />
        <div className="flex flex-col items-start">
          <h3 className="mb-0 text-base font-medium text-gray-900">{name}</h3>
          <p className="font-regular mt-0 text-center text-sm text-gray-600">
            {profession}
          </p>
        </div>
      </div>
      <p className="mt-0 text-left text-sm font-light text-gray-600 md:text-base">
        {description}
      </p>
    </div>
  )
}

const Testimonals = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-12">
      <h1 className="mb-1 max-w-2xl text-center text-2xl font-semibold tracking-tighter text-gray-900 md:text-4xl">
        Why people love SyntaxUI
      </h1>
      <p className="max-w-2xl text-center text-sm font-light text-gray-600 md:text-base">
        Choose the Perfect Plan to Fit Your Needs - From Individual Clinicians
        to Large Healthcare Organizations
      </p>
      <div className="relative mt-12 flex h-full w-full flex-col items-center justify-center gap-5 md:flex-row">
        <div className="flex flex-col justify-center gap-4">
          <TestimonialCard
            name="Ethan Pollack"
            description="I've been using SyntaxUI for a few months now and I'm really impressed with the results. The components are easy to use and the documentation is great."
            profession="App Developer"
            image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
          />
          <TestimonialCard
            name="Alena Zhukova"
            profession="Software Engineer"
            description="SyntaxUI is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results."
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <TestimonialCard
            name="Tom Anderson"
            profession="Design Engineer"
            description="SyntaxUI is the perfect tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results. The components are easy to use and the documentation is great."
            image="https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a"
          />

          <TestimonialCard
            name="Lisa Kemp"
            profession="Frontend Developer"
            description="SyntaxUI is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results. The components are easy to use and the documentation is great."
            image="https://images.unsplash.com/photo-1569913486515-b74bf7751574"
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <TestimonialCard
            name="Arthur Morgan"
            profession="Game Developer"
            description="SyntaxUI is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results."
            image="https://images.unsplash.com/photo-1645830166230-187caf791b90"
          />
          <TestimonialCard
            name="Paula Smith"
            profession="UX Designer"
            description="SyntaxUI is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results."
            image="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa"
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonals

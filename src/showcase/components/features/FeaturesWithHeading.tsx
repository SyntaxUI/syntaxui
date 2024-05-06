'use client'
import { Sparkles, Code, Palette } from 'lucide-react'

interface Feature {
  id: number
  name: string
  description: string
  icon: JSX.Element
}

const iconSize = 18

const FeaturesData: Feature[] = [
  {
    id: 1,
    name: 'Easy to Use',
    description:
      'SyntaxUI components are designed to be intuitive and easy to use, even for beginners.',
    icon: <Sparkles size={iconSize} />,
  },
  {
    id: 2,
    name: 'Customizable',
    description:
      'Customize the look and feel of SyntaxUI components to match your brand and design.',
    icon: <Palette size={iconSize} />,
  },
  {
    id: 3,
    name: 'Developer-Friendly',
    description:
      'SyntaxUI is built with developers in mind, providing a clean and consistent API.',
    icon: <Code size={iconSize} />,
  },
  {
    id: 4,
    name: 'Responsive',
    description:
      'SyntaxUI components are designed to be responsive and work seamlessly across devices.',
    icon: <Sparkles size={iconSize} />,
  },
  {
    id: 5,
    name: 'Accessible',
    description:
      'SyntaxUI prioritizes accessibility, ensuring that your components are usable by everyone.',
    icon: <Sparkles size={iconSize} />,
  },
  {
    id: 6,
    name: 'Regularly Updated',
    description:
      'SyntaxUI is actively maintained and regularly updated with new features and improvements.',
    icon: <Sparkles size={iconSize} />,
  },
]

const FeaturesGrid = () => {
  return (
    <div>
      <div className="mt-8 grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {FeaturesData.map((feature) => {
          return (
            <div key={feature.id} className="width-fit text-left">
              <div className="mb-2 w-fit rounded-lg bg-red-500 p-1 text-center text-white">
                {feature.icon}
              </div>
              <div className="text-md mb-1 font-semibold text-gray-900">
                {feature.name}
              </div>
              <div className="font-regular max-w-sm text-xs text-gray-600">
                {feature.description}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const FeaturesWithHeading = () => {
  return (
    <div className="my-12 flex w-full flex-col items-center justify-center">
      <h1 className="mb-2 max-w-3xl text-center text-2xl font-semibold tracking-tighter text-gray-900 md:text-3xl">
        SyntaxUI is not like any other component library.
      </h1>
      <p className="max-w-sm text-center text-sm text-gray-600">
        SyntaxUI is a free to use, customizable, and highly customizable UI
        component library.
      </p>
      <FeaturesGrid />
    </div>
  )
}

export default FeaturesWithHeading

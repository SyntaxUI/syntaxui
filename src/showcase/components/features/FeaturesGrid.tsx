import {
  BadgeDollarSign,
  BookOpenText,
  ExternalLink,
  Facebook,
  Image,
  Link2,
  MapPin,
  PartyPopper,
  Rss,
  ThumbsUp,
  TrendingUp,
  Users,
} from 'lucide-react'

const features = [
  {
    name: 'Topics',
    description: 'Discover topics your audience craves.',
    icon: ThumbsUp,
  },
  {
    name: 'Competitor Analysis',
    description: 'Uncover competitor secrets for better rankings.',
    icon: Users,
  },
  {
    name: 'Trends Tracking',
    description: 'Stay ahead with the latest niche trends.',
    icon: TrendingUp,
  },
  {
    name: 'Blog Creation',
    description: 'Write quality blogs instantly.',
    icon: Rss,
  },
  {
    name: 'AI Image generation',
    description: 'Get unique visuals for your content.',
    icon: Image,
  },
  {
    name: 'Social Posts',
    description: 'Craft engaging FB, Insta, LinkedIn and X posts in seconds',
    icon: Facebook,
  },
  {
    name: 'SEO Analytics',
    description: 'Track your SEO wins and areas to improve.',
    icon: MapPin,
  },
  {
    name: 'Internal Linking',
    description: 'Optimize site structure for better SEO.',
    icon: Link2,
  },
  {
    name: 'SEO Audit',
    description: 'Get a comprehensive SEO health check.',
    icon: PartyPopper,
  },
  {
    name: 'Google Ads',
    description: 'Create high-converting Google Ads.',
    icon: BadgeDollarSign,
  },
  {
    name: 'Backlink',
    description: 'Build authority with quality backlinks.',
    icon: ExternalLink,
  },
  {
    name: 'Keyword Research',
    description: 'Find the right keywords to target.',
    icon: BookOpenText,
  },
]

const FeaturesGrid = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto grid max-w-2xl grid-cols-2 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
        {features.map((feature) => (
          <div key={feature.name} className="relative">
            <div className="flex flex-col">
              <feature.icon
                className="mb-2 h-5 w-5 text-red-500"
                aria-hidden="true"
              />
              <div className="text-md inline font-semibold text-gray-800">
                {feature.name}
              </div>{' '}
              <div className="inline max-w-xs text-sm text-gray-700">
                {feature.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturesGrid

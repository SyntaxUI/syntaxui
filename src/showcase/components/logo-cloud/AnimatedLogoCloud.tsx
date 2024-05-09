// Instructions for integrating continuous logo animation in Tailwind CSS:
// Add the following configurations to the `extend` section of your `tailwind.config.js`:
// 1. Keyframes for 'logo-cloud' animation that continuously moves logos from right to left:
//    keyframes: {
//      'logo-cloud': {
//        from: { transform: 'translateX(0)' },
//        to: { transform: 'translateX(calc(-100% - 4rem))' },
//      },
//    }
// 2. Animation utility to apply this keyframe:
//    animation: {
//      'logo-cloud': 'logo-cloud 30s linear infinite', // Adjust duration and timing as needed for your design.
//    }

const logos = [
  { name: 'Prime', url: '/images/logos/prime-video.svg' },
  { name: 'Trustpilot', url: '/images/logos/trustpilot.svg' },
  {
    name: 'Webflow',
    url: '/images/logos/webflow.svg',
  },

  {
    name: 'Airbnb',
    url: '/images/logos/airbnb-wordmark.svg',
  },
  {
    name: 'Tina',
    url: '/images/logos/tina_wordmark.svg',
  },
  {
    name: 'Stackoverflow',
    url: '/images/logos/stackoverflow_wordmark.svg',
  },
  {
    name: 'mistral',
    url: '/images/logos/mistral-ai_wordmark.svg',
  },
  {
    name: 'Google',
    url: '/images/logos/google-wordmark.svg',
  },
]

const AnimatedLogoCloud = () => {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="group relative mt-6 flex gap-6 overflow-hidden p-2">
          {Array(5)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    className="h-10 w-28 px-2"
                    alt={`${logo.name}`}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default AnimatedLogoCloud

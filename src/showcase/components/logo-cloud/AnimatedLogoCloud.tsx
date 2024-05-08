import React from 'react'

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
  { name: 'Prime', url: 'https://svgl.app/library/prime-video.svg' },
  { name: 'Trustpilot', url: 'https://svgl.app/library/trustpilot.svg' },
  {
    name: 'Webflow',
    url: 'https://svgl.app/library/webflow.svg',
  },

  {
    name: 'Airbnb',
    url: 'https://svgl.app/library/airbnb-wordmark.svg',
  },
  {
    name: 'Tina',
    url: 'https://svgl.app/library/tina_wordmark.svg',
  },
  {
    name: 'Stackoverflow',
    url: 'https://svgl.app/library/stackoverflow_wordmark.svg',
  },
  {
    name: 'mistral',
    url: 'https://svgl.app/library/mistral-ai_wordmark.svg',
  },
  {
    name: 'Google',
    url: 'https://svgl.app/library/google-wordmark.svg',
  },
]

const AnimatedLogoCloud = () => {
  return (
    <div className="py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="group relative mt-6 flex overflow-hidden p-2">
          {Array(5)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className="animate-logo-cloud flex shrink-0 flex-row justify-around gap-6"
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
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l"></div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedLogoCloud

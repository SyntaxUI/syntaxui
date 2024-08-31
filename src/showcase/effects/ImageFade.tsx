import { FC } from 'react'

const ImageFade: FC = () => {
  return (
    <div>
      <div className="relative flex max-w-5xl justify-center overflow-hidden">
        <img
          src="https://dashboardsdesign.com/img/dashboards/dashboard-05-custom.png"
          alt="hero-section"
          className="h-full w-full rounded-lg object-cover md:w-[1300px]"
          style={{
            maskImage: `linear-gradient(to top, transparent, black 20%)`,
          }}
        />
      </div>
    </div>
  )
}

export default ImageFade

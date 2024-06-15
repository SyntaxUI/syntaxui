import Image from 'next/image'
import LandingPageImage from './Landingpage.png'

type LandingPageProps = {
  title: string
  description: string
  ctaName: string
  ctaLink: string
}

const LandingPage: React.FC<LandingPageProps> = ({
  title,
  description,
  ctaName,
  ctaLink,
}) => {
  return (
    <div className="font-Poppins mx-auto flex max-w-screen-xl flex-col items-center p-8 px-4 sm:px-6 md:flex-row">
      <div className="flex flex-col items-center md:w-1/2 md:items-start md:py-10 md:pr-10">
        <div className="text-left">
          <p className="text-4xl font-bold text-black dark:text-white">
            {title}
          </p>
          <p className="mt-2 text-xl text-black dark:text-white">
            {description}
          </p>
          <div className="mt-4 flex w-full justify-center md:justify-start">
            <a
              className="bg-custom-red hover:bg-custom-red-dark focus:bg-custom-red-darker active:bg-custom-red-darkest inline-block rounded px-8 py-4 text-xl font-bold uppercase leading-normal text-black
              hover:text-white"
              href={ctaLink}
            >
              {ctaName}
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:w-1/2 md:justify-end md:py-10 md:pl-10">
        <div className="relative w-full rounded">
          <Image
            className="rounded-lg"
            src={LandingPageImage}
            alt="Landing Page Image"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPage

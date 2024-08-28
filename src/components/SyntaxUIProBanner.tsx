import { useProBannerStore } from '@/store'
import { X } from 'lucide-react'
import Image from 'next/image'

const SyntaxUIProBanner = () => {
  const { setShowProBanner } = useProBannerStore()
  return (
    <div className="border-border group fixed bottom-2 right-2 z-50 h-auto w-[calc(100vw-16px)] max-w-[350px] overflow-hidden rounded-lg border bg-white  p-4 text-gray-900 transition-all animate-in slide-in-from-bottom-full md:bottom-4 md:right-4 ">
      <a
        href="https://pro.syntaxui.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row"
      >
        <div className="relative mr-6  md:block">
          <Image
            src="/images/syntaxUI.svg"
            alt="SyntaxUI"
            className="h-16 w-16 rounded-xl"
            width={120}
            height={120}
          />
          <div className="absolute -right-3 bottom-2 rotate-[-18deg] rounded-full bg-black px-1 text-[10px] text-white">
            PRO
          </div>
        </div>
        <div className="flex flex-col items-start gap-0.5">
          <h1 className="text-md font-medium tracking-tight md:block">
            Code Less, Create More!
          </h1>
          <div className="font-regular flex items-start justify-start font-mono text-xs leading-[17px] tracking-tighter text-gray-900/80">
            {`Get Premium Blocks and Templates for your next project on SyntaxUI Pro ↗`}
          </div>
        </div>
      </a>
      <button
        className="p-1s absolute right-2 top-2 transition-all duration-300 ease-in-out group-hover:block md:hidden"
        onClick={() => setShowProBanner(false)}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

export default SyntaxUIProBanner

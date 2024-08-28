import { useProBannerStore } from '@/store'
import { X } from 'lucide-react'

const SyntaxUIProBanner = () => {
  const { setShowProBanner } = useProBannerStore()
  return (
    <div className="border-border group fixed bottom-2 right-2 z-50 h-auto w-[calc(100vw-16px)] max-w-[350px] overflow-hidden rounded-lg border border-red-700 bg-red-500 p-4 text-white transition-all animate-in slide-in-from-bottom-full md:bottom-4 md:right-4">
      <a
        href="https://pro.syntaxui.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-col items-start gap-0.5">
          <h1 className="text-md hidden font-semibold md:block">
            Code Less, Create More!
          </h1>
          <div className="font-regular flex items-start justify-start  text-sm leading-6 text-white/80">
            {`Get Premium Blocks and Templates for your next project on SyntaxUI Pro ↗`}
          </div>
        </div>
      </a>
      <button
        className="p-1s absolute right-2 top-2 transition-all duration-300 ease-in-out group-hover:block md:hidden"
        onClick={() => setShowProBanner(false)}
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  )
}

export default SyntaxUIProBanner

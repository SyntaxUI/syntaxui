import Link from 'next/link'
import { TextTicker } from '../components/text/text-ticker/TextTicker'

interface ToggleCardProps {
  title: string
  link: string
  component: React.JSX.Element
  hide?: boolean
}
const data: ToggleCardProps[] = [
  {
    title: 'Text Ticker',
    link: '/components/text/text-ticker',
    component: <TextTicker />,
  },
]

const ToggleCards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item, i) => (
          <Link href={item.link} key={i} className="no-underline">
            <div className="overflow group group rounded-xl border border-white ring-1 ring-zinc-200 transition-all ease-in-out hover:cursor-pointer">
              <div className="flex h-[9rem] items-center justify-center overflow-hidden rounded-t-xl border-b bg-gray-50 text-xs text-gray-400 transition-all ease-in-out group-hover:bg-gray-100 md:h-[12rem]">
                {item.component}
              </div>
              <div className="w-full p-4 text-sm font-medium text-gray-800">
                {item.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ToggleCards

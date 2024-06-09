import Link from 'next/link'
import TextDrop from '../components/text/text-drop/TextDrop'
import { TextTicker } from '../components/text/text-ticker/TextTicker'
import TextGradient from '../components/text/TextGradient'
import TextRotate from '../components/text/TextRotate'
import Card from './Card'

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
  {
    title: 'Text Rotate',
    link: '/components/text/text-rotate',
    component: <TextRotate />,
  },
  {
    title: 'Text Drop',
    link: '/components/text/text-drop',
    component: <TextDrop />,
  },
  {
    title: 'Text Gradient',
    link: '/components/text/text-gradient',
    component: <TextGradient />,
  },
]

const ToggleCards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item, index) => (
          <Link href={item.link} key={index} className="no-underline">
            <Card title={item.title}>{item.component}</Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ToggleCards

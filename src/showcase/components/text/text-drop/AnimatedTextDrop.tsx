import { motion } from 'framer-motion'
import AnimatedCharacters from './AnimatedCharacters'

const AnimatedTextDrop = () => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      <div>
        <AnimatedCharacters
          text={'SyntaxUI is best'}
          className="text-2xl font-semibold text-red-500"
        />
      </div>
    </motion.div>
  )
}

export default AnimatedTextDrop

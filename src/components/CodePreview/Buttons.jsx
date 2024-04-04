import { motion } from 'framer-motion'

const NeonGlowButton = () => {
  return (
    <motion.button
      className="relative inline-block overflow-hidden rounded-md px-6 py-3 text-sm font-medium text-white"
      style={{ backgroundColor: '#fb3a5d' }}
      whileHover={{
        backgroundColor: '#fb3a5d',
        boxShadow: '0 0 50px #fb3a5d, 0 0 100px #fb3a5d, 0 0 200px #fb3a5d',
        scale: 1.05,
        '& span': {
          textShadow:
            '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fb3a5d',
        },
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        delay: 0.1,
      }}
    >
      <span className="relative z-10">Neon Glow Button</span>
    </motion.button>
  )
}

export default NeonGlowButton

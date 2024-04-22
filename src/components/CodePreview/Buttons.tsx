'use client'

// import { motion } from 'framer-motion'

// export const NeonGlowButton = () => {
//   return (
//     <motion.button
//       className="relative inline-block overflow-hidden rounded-md px-6 py-3 text-sm font-medium text-white"
//       style={{ backgroundColor: '#fb3a5d' }}
//       whileHover={{
//         backgroundColor: '#fb3a5d',
//         boxShadow: '0 0 50px #fb3a5d, 0 0 100px #fb3a5d, 0 0 200px #fb3a5d',
//         scale: 1.05,
//         '& span': {
//           textShadow:
//             '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fb3a5d',
//         },
//       }}
//       whileTap={{ scale: 0.95 }}
//       transition={{
//         duration: 0.3,
//         ease: 'easeInOut',
//         times: [0, 0.2, 0.5, 0.8, 1],
//         delay: 0.1,
//       }}
//     >
//       <span className="relative z-10">Neon Glow Button</span>
//     </motion.button>
//   )
// }

export const NeubrutalismButton = () => {
  return (
    <button
      onClick={() => console.log('SyntaxUI is the best!')}
      className={'rounded-lg bg-[#222222] text-black'}
    >
      <span
        className={`block -translate-x-1 -translate-y-1 rounded-lg border-2 border-[#222222] bg-[#fff0f2] px-4 py-1 text-sm font-medium tracking-tight transition-all hover:-translate-y-2 active:translate-x-0 active:translate-y-0`}
      >
        Syntax UI
      </span>
    </button>
  )
}

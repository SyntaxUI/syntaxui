import { motion, AnimatePresence } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const CopyPasteButton = () => {
  const [copied, setCopied] = useState(false)
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  }

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 1000)
    }
  }, [copied])

  return (
    <motion.button
      whileTap={{ scale: 0.9, opacity: 0.8 }}
      onClick={() => setCopied(!copied)}
      className="rounded-lg border border-gray-100  bg-gray-900 p-3 text-white"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="checkmark"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Check size={16} />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Copy size={16} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default CopyPasteButton

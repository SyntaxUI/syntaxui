'use client'
import Card from '@/showcase/ui-group/Card'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { HexColorPicker } from "react-colorful";
import { Popover } from '@headlessui/react'

const CustomGradientGenerator = () => {
  const [copied, setCopied] = useState(false)
  const [fromColor, setFromColor] = useState("#aabbcc");
  const [viaColor, setViaColor] = useState("#aabbcc");
  const [toColor, setToColor] = useState("#ddeeff");
  let gradient = `radial-gradient(circle, ${fromColor},${viaColor} ,${toColor})`;

  const copyGradient = () => {
    navigator.clipboard.writeText(gradient)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
    toast.success('Gradient copied to clipboard!')
  }

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 py-2 my-4 gap-4">
      <div className='w-full'>
        <button className='w-full' onClick={copyGradient}>
          <Card title="Your Gradient">
            <div
              className={`relative flex h-full w-full items-center justify-center rounded-lg rounded-b-none`}
              style={{ background: gradient }}
            >
              <div className="inset-0 flex items-center justify-center rounded-lg bg-gray-900 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
              </div>
            </div>
          </Card>
        </button>
      </div>

      <div className="flex items-start justify-between px-5 pt-2 gap-3 rounded-xl border border-white ring-1 ring-zinc-200 transition-all ease-in-out hover:cursor-pointer dark:border-transparent dark:ring-zinc-700">
      <Popover className="relative ">
        <Popover.Button className="p-2 border-2 dark:border-zinc-800 border-zinc-200 flex items-center gap-2 justify-between rounded-lg">
              <span>From</span>
              <div className='h-5 w-5' style={{ backgroundColor: fromColor }}></div>
            </Popover.Button>
       

          <Popover.Panel className="absolute z-10">
            <HexColorPicker color={fromColor} onChange={setFromColor} />
          </Popover.Panel>
        </Popover>
      <Popover className="relative ">
     
         
            <Popover.Button className="p-2 border-2 dark:border-zinc-800 border-zinc-200 flex items-center gap-2 justify-between rounded-lg">
              <span>Via</span>
              <div className='h-5 w-5' style={{ backgroundColor: viaColor }}></div>
            </Popover.Button>
 

          <Popover.Panel className="absolute z-10 right-0">
            <HexColorPicker color={viaColor} onChange={setViaColor} />
          </Popover.Panel>
        </Popover>
        <Popover className="relative ">
     
         
     <Popover.Button className="p-2 border-2 dark:border-zinc-800 border-zinc-200 flex items-center gap-2 justify-between rounded-lg">
       <span>To</span>
       <div className='h-5 w-5' style={{ backgroundColor: toColor }}></div>
     </Popover.Button>


   <Popover.Panel className="absolute z-10 right-0">
     <HexColorPicker color={toColor} onChange={setToColor} />
   </Popover.Panel>
 </Popover>
      </div>
    </div>
  );
}

export default CustomGradientGenerator;

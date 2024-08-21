'use client'
import Card from '@/showcase/ui-group/Card'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import { toast } from 'sonner'
import { HexColorPicker } from "react-colorful";
import { Fragment, useState } from 'react'
import { Listbox, Popover, Transition } from '@headlessui/react'

const direction = [
  { name: 'Top', value: "top" },
  { name: 'Bottom', value: "bottom" },
  { name: 'Left', value: "left" },
  { name: 'Right', value: "right" },
  { name: 'Top Right', value: "top right" },
  { name: 'Bottom Right', value: "bottom right" },


]
const gradientShape = [
  { name: 'Ellipse', value: "ellipse" },

  { name: 'Circle', value: "circle" },

]
const CustomGradientGenerator = () => {
  const [copied, setCopied] = useState(false)
  const [fromColor, setFromColor] = useState("#aabbcc");
  const [viaColor, setViaColor] = useState("#aabbcc");
  const [toColor, setToColor] = useState("#ddeeff");
  const [selected, setSelected] = useState(direction[0])
  const [shapes, setShapes] = useState(gradientShape[0])
  const gradient = `radial-gradient(${shapes.value} at ${selected.value}, ${fromColor},${viaColor},${toColor})`;

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

      <div className="flex flex-col items-center justify-center px-5 pt-2 gap-1 rounded-xl border border-white ring-1 ring-zinc-200 transition-all ease-in-out hover:cursor-pointer dark:border-transparent dark:ring-zinc-700 ">
        <div className='flex items-center w-full mx-auto justify-center gap-1'>
          <Popover className="relative ">
            <Popover.Button className="p-2 border-2 dark:border-zinc-800 border-zinc-200 flex items-center gap-2 justify-between rounded-lg">
              <span>From</span>
              <div className='h-5 w-5' style={{ backgroundColor: fromColor }}></div><span className='hidden md:block'> {fromColor}</span>
            </Popover.Button>
            <Popover.Panel className="absolute z-10">
              <HexColorPicker color={fromColor} onChange={setFromColor} />
            </Popover.Panel>
          </Popover>

          <Popover className="relative ">
            <Popover.Button className="p-2 border-2 dark:border-zinc-800 border-zinc-200 flex items-center gap-2 justify-between rounded-lg">
              <span>Via</span>
              <div className='h-5 w-5' style={{ backgroundColor: viaColor }}></div><span className='hidden md:block'> {viaColor}</span>
            </Popover.Button>
            <Popover.Panel className="absolute z-10 right-0">
              <HexColorPicker color={viaColor} onChange={setViaColor} />
            </Popover.Panel>
          </Popover>

          <Popover className="relative ">
            <Popover.Button className="p-2 border-2 dark:border-zinc-800 border-zinc-200 flex items-center gap-2 justify-between rounded-lg">
              <span>To</span>
              <div className='h-5 w-5' style={{ backgroundColor: toColor }}></div><span className='hidden md:block'> {toColor}</span>
            </Popover.Button>
            <Popover.Panel className="absolute z-10 right-0">
              <HexColorPicker color={toColor} onChange={setToColor} />
            </Popover.Panel>
          </Popover>
        </div>

        <div className="w-full ">
          <Listbox value={selected} onChange={setSelected} >
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white  py-2 pl-3 pr-10 text-left border-2 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selected.name}</span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md z-30 bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {direction.map((directionItem, directionIdx) => (
                    <Listbox.Option
                      key={directionIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none z-30 py-2 pl-10 pr-4 ${
                          active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={directionItem}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {directionItem.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <div className="w-full ">
          <Listbox value={shapes} onChange={setShapes} >
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white  py-2 pl-3 pr-10 text-left border-2 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{shapes.name}</span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md z-30 bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {gradientShape.map((directionItem, directionIdx) => (
                    <Listbox.Option
                      key={directionIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none z-30 py-2 pl-10 pr-4 ${
                          active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={directionItem}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {directionItem.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
    </div>
  );
}

export default CustomGradientGenerator;

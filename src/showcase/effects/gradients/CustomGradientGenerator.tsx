'use client'
import { Card, CardContent } from '@/components/ui/card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { gradientDirection, gradientShape } from '@/data/GradientData'
import { generateCssGradient, generateTailwindGradient } from '@/lib/gradients'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { toast } from 'sonner'

interface ColorPickerPopoverProps {
  color: string
  onChange: (color: string) => void
  label: string
}

const ColorPickerPopover: React.FC<ColorPickerPopoverProps> = ({
  color,
  onChange,
  label,
}) => {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center justify-between gap-2 rounded-lg border border-gray-200 px-2 py-1 dark:border-gray-800">
        <span>{label}</span>
        <div className="h-5 w-5" style={{ backgroundColor: color }}></div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <HexColorPicker color={color} onChange={onChange} />
      </PopoverContent>
    </Popover>
  )
}

const CustomGradientGenerator = () => {
  const [copied, setCopied] = useState(false)
  const [fromColor, setFromColor] = useState('#fb3b5e')
  const [showVia, setShowVia] = useState(false)
  const [viaColor, setViaColor] = useState('#ffa23a')
  const [toColor, setToColor] = useState('#17c6b3')
  const [selected, setSelected] = useState(gradientDirection[2])
  const [shapes, setShapes] = useState(gradientShape[1])
  const gradient = generateCssGradient({
    shape: shapes.value,
    position: selected.value,
    fromColor: fromColor,
    viaColor: showVia ? viaColor : undefined,
    toColor: toColor,
  })
  const tailwindGradient = generateTailwindGradient({
    shape: shapes.value,
    direction: selected.value,
    from: fromColor,
    via: showVia ? viaColor : undefined,

    to: toColor,
  })
  const copyGradient = () => {
    navigator.clipboard.writeText(tailwindGradient)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
    toast.success('Gradient copied to clipboard!')
  }

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <div className="grid grid-cols-1 gap-4 py-2 md:grid-cols-2">
      {/* Gradient Generator */}
      <Card>
        <CardContent className="flex flex-col items-start justify-center gap-4 pt-6">
          <label className="flex w-fit cursor-pointer select-none items-center text-left">
            <input
              type="checkbox"
              checked={showVia}
              onChange={() => setShowVia(!showVia)}
              className="mr-2"
            />
            Add Via
          </label>
          <div className="mx-auto flex w-full items-center justify-start gap-1">
            <ColorPickerPopover
              color={fromColor}
              onChange={setFromColor}
              label="From"
            />
            {showVia && (
              <ColorPickerPopover
                color={viaColor}
                onChange={setViaColor}
                label="Via"
              />
            )}
            <ColorPickerPopover
              color={toColor}
              onChange={setToColor}
              label="To"
            />
          </div>
          <div className="w-full ">
            <Select
              value={selected.value}
              onValueChange={(value) =>
                setSelected(
                  gradientDirection.find((d) => d.value === value) ||
                    gradientDirection[0],
                )
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select direction" />
              </SelectTrigger>
              <SelectContent>
                {gradientDirection.map((directionItem) => (
                  <SelectItem
                    key={directionItem.value}
                    value={directionItem.value}
                  >
                    {directionItem.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full ">
            <Select
              value={shapes.value}
              onValueChange={(value) =>
                setShapes(
                  gradientShape.find((s) => s.value === value) ||
                    gradientShape[0],
                )
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select shape" />
              </SelectTrigger>
              <SelectContent>
                {gradientShape.map((shape) => (
                  <SelectItem key={shape.value} value={shape.value}>
                    {shape.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      {/* Gradient Preview */}
      <Card
        className="group relative w-full overflow-hidden rounded-lg p-0"
        style={{ background: gradient }}
      >
        <CardContent
          className="absolute bottom-0 right-0 flex items-center justify-center"
          onClick={copyGradient}
        >
          <div className="flex items-center justify-center rounded-lg bg-gray-900/40 p-2 text-white hover:bg-gray-900">
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="checkmark"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <Check size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <Copy size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CustomGradientGenerator

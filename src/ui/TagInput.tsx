'use client'

import React, { useState } from 'react'
import { X } from 'lucide-react'

const TagInput: React.FC = () => {
  const [keywords, setKeywords] = useState<string[]>(['ansub', 'syntax'])

  const onKeywordsChange = (newKeywords: string[]) => {
    setKeywords(newKeywords)
    // Additional actions upon keywords change can be handled here
  }
  const [inputValue, setInputValue] = useState<string>('')

  // Handles adding new keyword on Enter or comma press, and keyword removal on Backspace
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === 'Enter' ||
      (event.key === ',' && inputValue.trim() !== '')
    ) {
      event.preventDefault()
      const newKeywords = [...keywords, inputValue.trim()]
      setKeywords(newKeywords)
      onKeywordsChange(newKeywords)
      setInputValue('')
    } else if (event.key === 'Backspace' && inputValue === '') {
      event.preventDefault()
      const newKeywords = keywords.slice(0, -1)
      setKeywords(newKeywords)
      onKeywordsChange(newKeywords)
    }
  }

  // Handles pasting keywords separated by commas, new lines, or tabs
  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    const paste = event.clipboardData.getData('text')
    const keywordsToAdd = paste
      .split(/[\n\t,]+/)
      .map((keyword) => keyword.trim())
      .filter(Boolean)
    if (keywordsToAdd.length) {
      const newKeywords = [...keywords, ...keywordsToAdd]
      setKeywords(newKeywords)
      onKeywordsChange(newKeywords)
      setInputValue('')
    }
  }

  // Updates the inputValue state as the user types
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  // Adds the keyword when the input loses focus, if there's a keyword to add
  const handleBlur = () => {
    if (inputValue.trim() !== '') {
      const newKeywords = [...keywords, inputValue.trim()]
      setKeywords(newKeywords)
      onKeywordsChange(newKeywords)
      setInputValue('')
    }
  }

  // Removes a keyword from the list
  const removeKeyword = (indexToRemove: number) => {
    const newKeywords = keywords.filter((_, index) => index !== indexToRemove)
    setKeywords(newKeywords)
    onKeywordsChange(newKeywords)
  }

  return (
    <div className="flex w-full flex-wrap items-center rounded-lg border p-2">
      <div
        className="flex w-full flex-wrap overflow-y-auto"
        style={{ maxHeight: '300px' }}
      >
        {keywords.map((keyword, index) => (
          <button
            key={index}
            onClick={() => removeKeyword(index)}
            className="py- m-1 flex items-center rounded-full bg-red-500 px-2 text-xs text-white hover:bg-red-500/90"
          >
            {keyword}
            <X size={14} className="ml-2 cursor-pointer" />
          </button>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onBlur={handleBlur}
          className="my-1 flex-1 text-sm outline-none"
          placeholder="Type keyword and press Enter..."
        />
      </div>
    </div>
  )
}

export default TagInput

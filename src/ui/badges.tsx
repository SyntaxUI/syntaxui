import React from 'react'

export const OrangeBadge = () => {
  return (
    <div className="inline-flex items-center rounded-lg bg-yellow-400/20 px-1.5 py-0.5 text-sm font-medium text-yellow-700 sm:text-xs/5">
      Draft
    </div>
  )
}

export const BlueBadge = () => {
  return (
    <div className="inline-flex items-center gap-x-1.5 rounded-full bg-blue-400/20 px-1.5 py-0.5 text-sm/5 font-medium text-blue-700 sm:text-xs/5">
      Published
    </div>
  )
}

export const GreenBadge = () => {
  return (
    <div className="inline-flex items-center gap-x-1.5 rounded-full bg-green-400/20 px-1.5 py-0.5 text-sm/5 font-medium text-green-700 sm:text-xs/5">
      Approved
    </div>
  )
}

export const RedBadge = () => {
  return (
    <div className="inline-flex items-center gap-x-1.5 rounded-full bg-red-400/20 px-1.5 py-0.5 text-sm/5 font-medium text-red-700 sm:text-xs/5">
      Rejected
    </div>
  )
}

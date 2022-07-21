import React from 'react'

interface Props {
  displayedText: string
  hintText: string
}
export default function HoverHint({ displayedText, hintText }: Props) {
  return (
    <span className="group relative border-dotted border-b-black border-b">
      {displayedText}
      <span className="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 bg-gray-700/75 text-white text-sm rounded-md px-1 py-0 w-64 whitespace-pre-line">
        {hintText}
      </span>
    </span>
  )
}

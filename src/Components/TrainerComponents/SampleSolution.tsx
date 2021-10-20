import React from 'react'

interface PropTypes {
  children?: React.ReactNode
}

export default function SampleSolution ({ children }: PropTypes) {
  return (
    <div className="flex justify-around">
      <details className="p-2 bg-th-violet rounded-lg cursor-pointer select-none inline-block text-white">
        <summary className="font-semibold">Musterlösung einblenden</summary>
        <div className="cursor-default mt-4 bg-white p-2 rounded-md text-black">
          {children}
        </div>
      </details>
    </div>
  )
}

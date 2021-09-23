import React from 'react'

interface PropTypes {
  children?: React.ReactNode
}

export default function SampleSolution ({ children }: PropTypes) {
  return (
    <details className="p-2 bg-yellow-300 rounded-lg cursor-pointer select-none">
          <summary>Musterlösung einblenden</summary>
          <div className="cursor-default">
            {children}
          </div>
        </details>
  )
}

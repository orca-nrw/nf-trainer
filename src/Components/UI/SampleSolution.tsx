import React, { MouseEvent, useState } from 'react'

interface PropTypes {
  children?: React.ReactNode
  onClick: () => void
}

export default function SampleSolution({ children, onClick }: PropTypes) {
  const [showSolution, setShowSolution] = useState(false)

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setShowSolution(true)
    onClick()
  }

  return (
    <div className="flex flex-col items-center">
      {!showSolution ? (
        <button
          className="p-2 bg-th-violet hover:opacity-95 rounded-lg text-white font-semibold"
          onClick={handleClick}
        >
          Lösung anzeigen
        </button>
      ) : (
        <div className="border rounded-lg shadow-lg">
          <h2 className="bg-th-violet text-white rounded-t-lg font-semibold px-3 py-2 select-none">
            Musterlösung
          </h2>
          <div className="p-2">{children}</div>
        </div>
      )}
    </div>
  )
}

import React from 'react'

export default function TaskGridElement({ title, index, onClick }: PropTypes) {
  return (
    <div className="p-4 bg-gray-100 rounded-lg text-center">
      <h1 className="font-bold mb-2">Aufgabe {index}</h1>
      <p>{title}</p>
      <button
        type="button"
        onClick={onClick}
        className="mt-4 px-4 py-1 bg-th-red hover:bg-red-600 text-white font-semibold rounded-md cursor-pointer"
      >
        Start
      </button>
    </div>
  )
}

interface PropTypes {
  title: string
  index: number
  onClick: () => void
}

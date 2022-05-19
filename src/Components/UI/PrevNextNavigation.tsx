import React from 'react'
import { Link } from 'react-router-dom'

interface PropTypes {
  prev: string
  next: string
  nextIsEnabled: boolean
}

export default function PrevNextNavigation({
  prev,
  next,
  nextIsEnabled,
}: PropTypes) {
  return (
    <div className="flex justify-between pt-4">
      <Link to={prev}>
        <button className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-md cursor-pointer">
          Zurück
        </button>
      </Link>
      <Link to={nextIsEnabled ? next : '#'}>
        <button
          className={`px-3 py-1.5 text-white text-lg rounded-md font-semibold ${
            nextIsEnabled
              ? 'bg-blue-500 hover:bg-blue-600 cursor-pointer'
              : 'bg-gray-500 cursor-default'
          } `}
          disabled={!nextIsEnabled}
        >
          Weiter
        </button>
      </Link>
    </div>
  )
}

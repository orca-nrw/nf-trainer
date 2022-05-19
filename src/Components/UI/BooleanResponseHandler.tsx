import React from 'react'

interface PropType {
  responseHandler: (response: boolean) => void
  disabled: boolean
}

export default function BooleanResponseHandler({
  responseHandler,
  disabled,
}: PropType) {
  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-row space-x-4">
        <button
          className={`px-2 py-1 w-20 text-white text-lg rounded-md ${
            disabled
              ? 'bg-gray-400'
              : 'bg-th-red hover:bg-red-600 cursor-pointer'
          }`}
          type="button"
          disabled={disabled}
          onClick={() => responseHandler(true)}
        >
          Ja
        </button>
        <button
          className={`px-2 py-1 w-20 text-white text-lg rounded-md ${
            disabled
              ? 'bg-gray-400'
              : 'bg-th-red hover:bg-red-600 cursor-pointer'
          }`}
          type="button"
          disabled={disabled}
          onClick={() => responseHandler(false)}
        >
          Nein
        </button>
      </form>
    </div>
  )
}

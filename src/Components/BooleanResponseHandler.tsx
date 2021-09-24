import React from 'react'

interface PropType {
  responseHandler: (response: boolean) => void
}

export default function BooleanResponseHandler ({ responseHandler }: PropType) {
  return (
      <div className="flex flex-col items-center">
        <form className="flex flex-row space-x-4">
          <button className="px-2 py-1 w-20 bg-red-500 hover:bg-red-600 text-white text-lg rounded-md cursor-pointer" type="button" onClick={() => responseHandler(true)}>Ja</button>
          <button className="px-2 py-1 w-20 bg-red-500 hover:bg-red-600 text-white text-lg rounded-md cursor-pointer" type="button" onClick={() => responseHandler(false)}>Nein</button>
        </form>
      </div>
  )
}

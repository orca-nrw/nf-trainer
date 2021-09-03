import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function BooleanResponseHandler ({ isCorrect, redirectTo }: PropType) {
  const [message, setMessage] = useState('')
  const history = useHistory()

  function handleResponse (response: boolean) {
    if (response === isCorrect) {
      setMessage('Korrekt!')
      setTimeout(() => history.push(redirectTo), 2000)
    } else {
      setMessage('Leider falsch!')
    }
  }

  return (
      <div className="flex flex-col items-center">
        <p className="text-l font-bold">{message}</p>
        <form className="flex flex-row space-x-4">
          <button className="px-2 py-1 w-20 bg-red-500 hover:bg-red-600 text-white text-lg rounded-md cursor-pointer" type="button" onClick={() => handleResponse(true)}>Ja</button>
          <button className="px-2 py-1 w-20 bg-red-500 hover:bg-red-600 text-white text-lg rounded-md cursor-pointer" type="button" onClick={() => handleResponse(false)}>Nein</button>
        </form>
      </div>
  )
}

interface PropType {
  isCorrect: boolean,
  redirectTo: string
}

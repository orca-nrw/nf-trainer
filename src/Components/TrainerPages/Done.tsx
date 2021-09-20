import React from 'react'
import { Link } from 'react-router-dom'

export default function Done () {
  return (
    <div className="space-y-4  flex flex-col items-center">
      <h1 className="font-bold text-2xl">Test abgeschlossen!</h1>
      <p className="text-lg">Machen Sie doch gleich noch eine Aufgabe!</p>
      <Link to={'/tasks'}>
        <button type="button" className="m-4 px-2 py-1 bg-red-500 hover:bg-red-600 text-white text-lg rounded-md cursor-pointer">Zurück zur Auswahl</button>
      </Link>
    </div>
  )
}

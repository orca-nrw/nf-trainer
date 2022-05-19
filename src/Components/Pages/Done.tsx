import React from 'react'
import { Link } from 'react-router-dom'

export default function Done() {
  return (
    <div className="space-y-4  flex flex-col items-center px-4 pt-4 pb-8">
      <h1 className="font-bold text-2xl">Test abgeschlossen!</h1>
      <p className="text-lg pb-8">Machen Sie doch gleich noch eine Aufgabe!</p>
      <Link to={'/tasks'}>
        <button
          type="button"
          className="px-3 py-1.5 bg-th-red hover:bg-red-600 text-white text-lg font-semibold rounded-md cursor-pointer"
        >
          Zurück zur Auswahl
        </button>
      </Link>
    </div>
  )
}

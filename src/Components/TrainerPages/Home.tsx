import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-4xl font-bold">Willkommen!</h1>
      <p className="text-lg">
        Eine Schwierigkeit bei der Datenmodellierung ist die Normalisierung eines Relationenschemas. <br />
        Dieser Trainer führt Sie anhand verschiedener Aufgaben interaktiv durch die einzelnen Normalisierungsschritte. <br />
        Eine kurze Beschreibung der wichtigsten Begriffe und Definitionen von funktionalen Abhängigkeiten und den einzelnen Normalformen finden Sie <a href="https://wikis.gm.fh-koeln.de/Datenbanken/Normalform">hier</a>.
      </p>

      <Link to="/tasks">
        <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-lg rounded-md cursor-pointer" type="button">
          Aufgabe auswählen
        </button>
      </Link>
    </div>
  )
}

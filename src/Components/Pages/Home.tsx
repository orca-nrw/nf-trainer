import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <div className="flex flex-col items-center space-y-8 p-4">
      <h1 className="text-4xl font-bold">Willkommen!</h1>
      <p className="text-lg text-center">
        Eine Schwierigkeit bei der Datenmodellierung ist die <b>Normalisierung eines Relationenschemas</b>.
      </p>
      <p className="text-lg text-center">
      Der Normalformen-Trainer demonstriert in einem <b>stufenweisen Verfahren</b>, wie die Normalisierung von Relationen interaktiv bis zur 3. Normalform bewältigt werden kann. <br/>
      Dabei wird der Gesamtalgorithmus in Einzelschritte zerlegt und nach jedem Schritt die korrekte Lösung mit einem Zwischenergebnis angezeigt.
      </p>
      <p className="text-lg text-center">
      Vorausgesetzt werden Kenntnisse der Begriffe und Definitionen  von <b>funktionaler Abhängigkeit, 1NF, 2NF und 3NF.</b> <br/>
        Eine kurze Beschreibung der wichtigsten Begriffe und Definitionen finden Sie <a href="https://wikis.gm.fh-koeln.de/Datenbanken/Normalform">hier</a>.
      </p>

      <Link to="/tasks">
        <button
          className="mt-12 px-4 py-2 bg-th-red hover:bg-red-600 text-white text-lg font-semibold border shadow-md rounded-md cursor-pointer"
          type="button"
        >
          Aufgabe auswählen
        </button>
      </Link>
    </div>
  )
}

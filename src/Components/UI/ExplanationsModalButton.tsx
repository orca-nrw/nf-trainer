import React, { useState } from 'react'

export default function ExplanationsModalButton () {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <button
        className="px-3 py-1.5 text-white font-semibold border rounded-md bg-th-orange shadow-sm"
        type="button"
        onClick={() => setIsVisible(true)}
      >
        Definitionen und Hinweise
      </button>
      <div
        className={`${
          isVisible ? '' : 'hidden'
        } fixed z-10 left-0 top-0 w-full h-screen bg-black bg-opacity-40`}
      >
        <div className="bg-white mt-6 mx-auto max-w-4xl shadow-2xl text-black p-4">
          <div className="flex flex-row justify-between items-center border-b pb-2">
            <h1 className="text-2xl font-semibold">
              Definitionen und Hinweise
            </h1>
            <span
              className="cursor-pointer select-none font-bold text-3xl text-gray-500"
              onClick={() => setIsVisible(false)}
            >
              &times;
            </span>
          </div>
          <div className="p-2 space-y-6 overflow-auto modal-content">
            <div>
              <h1 className="text-2xl mb-2">Erste Normalform</h1>
              <b>Definition:</b> In der ersten Normalform existieren nur
              atomare/skalare Attributwerte und ein eindeutiger Primärschlüssel.{' '}
              <br />
              <b>Erreichung:</b> Zerlegung mehrwertiger Attribute in separate
              Relationen oder verschiedene Attribute innerhalb einer Relation
              <ul className="list-disc list-outside pl-6">
                <li>
                  <b>Schritt 1: Erste Normalform (1NF)</b> <br />
                  Entscheiden Sie (Ja/Nein-Auswahl), ob sich die Tabelle schon
                  in der ersten Normalform befindet. Falls nicht, markieren Sie
                  alle Spalten, welche die erste Normalform verletzen. Die
                  Tabelle wird anschließend vom System in die 1NF überführt.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-2xl mb-2">Zweite Normalform</h1>
              <b>Definition:</b> In der zweiten Normalform sind die Bedingungen
              für die 1NF erfüllt und alle Nicht-Schlüssel-Attribute sind von
              Primär- und Kandidatschlüsseln voll funktional abhängig. <br />
              <b>Erreichung:</b> Auflösung (partieller) funktionaler
              Abhängigkeiten in voll funktionale Abhängigkeiten durch
              informationserhaltende Zerlegung mittels
              Schlüssel-Fremdschlüsselbeziehung
              <ul className="list-disc list-outside pl-6">
                <li>
                  <b>Schritt 2: Funktionale Abhängigkeiten bestimmen</b> <br />
                  Bestimmen Sie alle funktionalen Abhängigkeiten, indem Sie auf
                  die entsprechenden Spalten (Primärschlüssel und abhängige
                  Spalten) klicken.
                </li>
                <li>
                  <b>Schritt 3: Primärschlüssel auswählen</b> <br />
                  Wählen Sie bitte diejenigen Spalten aus, aus denen der
                  Primärschlüssel besteht.
                </li>
                <li>
                  <b>
                    Schritt 4: Typen der funktionalen Abhängigkeiten bestimmen
                  </b>{' '}
                  <br />
                  Bestimmen Sie anhand der Primärschlüssel die Typen der
                  funktionalen Abhängigkeiten:
                  <ul className="list-decimal list-outside pl-6">
                    <li>(Partielle) funktionale Abhängigkeit</li>
                    <li>Voll funktionale Abhängigkeit</li>
                    <li>Transitive Abhängigkeit</li>
                  </ul>
                </li>
                <li>
                  <b>Schritt 5: Zweite Normalform (2NF)</b> <br />
                  Bringen Sie das Schema in die zweite Normalform. Definieren
                  Sie das passende Relationenschema, indem Sie auf die
                  entsprechenden Spalten (Primärschlüssel und abhängige Spalten)
                  klicken. Die Tabelle wird anschließend vom System in die 2NF
                  überführt.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-2xl mb-2">Dritte Normalform</h1>
              <b>Definition:</b> In der dritten Normalform sind die Bedingungen
              für die 1NF und 2NF erfüllt und es existieren keine transitiven
              Abhängigkeiten von Nichtschlüssel-Attributen zu Primär – und
              Kandidatschlüsseln. <br />
              <b>Erreichung:</b> Auflösung transitiver Abhängigkeiten durch
              informationserhaltende Zerlegung mittels
              Schlüssel-Fremdschlüsselbeziehung
              <ul className="list-disc list-outside pl-6">
                <li>
                  <b>Schritt 6: Dritte Normalform (3NF)</b> <br />
                  Entscheiden Sie (Ja/Nein-Auswahl), ob sich die Tabelle nun
                  bereits in der dritten Normalform befindet. Falls nicht,
                  bringen Sie das Schema in die dritte Normalform, indem Sie auf
                  die entsprechenden Spalten (Primärschlüssel und abhängige
                  Spalten) klicken. Die Tabelle wird anschließend vom System in
                  die 3NF überführt
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-2 flex flex-row justify-end border-t">
            <button
              className="bg-th-violet rounded-md px-3 py-1.5 text-white"
              type="button"
              onClick={() => setIsVisible(false)}
            >
              Schließen
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

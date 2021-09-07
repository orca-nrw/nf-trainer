import React, { useState } from 'react'
import { useHistory } from 'react-router'
import KeySelectionContainer from './KeySelectionContainer'

interface Association {
    primaryKeys: string[],
    columns: string[]
}

interface PropTypes {
  keys: string[],
  associationsSolution: Association[],
  redirectTo: string
}

export default function KeySelectionResponseHandler ({ keys, associationsSolution, redirectTo }: PropTypes) {
  const [message, setMessage] = useState('')
  const history = useHistory()

  const [userAssociations, setUserAssociations] = useState<Association[]>([
    { primaryKeys: [], columns: [] },
    { primaryKeys: [], columns: [] },
    { primaryKeys: [], columns: [] },
    { primaryKeys: [], columns: [] }
  ])

  function updateAssociation (updatedAssociation: Association, index: number) {
    const newAssociations = [...userAssociations]
    newAssociations[index] = updatedAssociation
    setUserAssociations(newAssociations)
  }

  function evaluateAssociations () {
    setMessage('Korrekt!')
    setTimeout(() => history.push(redirectTo), 2000)
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <KeySelectionContainer keys={keys} association={userAssociations[0]} updateAssociation={(updatedAssociation: Association) => updateAssociation(updatedAssociation, 0)} />
        <KeySelectionContainer keys={keys} association={userAssociations[1]} updateAssociation={(updatedAssociation: Association) => updateAssociation(updatedAssociation, 1)} />
        <KeySelectionContainer keys={keys} association={userAssociations[2]} updateAssociation={(updatedAssociation: Association) => updateAssociation(updatedAssociation, 2)} />
        <KeySelectionContainer keys={keys} association={userAssociations[3]} updateAssociation={(updatedAssociation: Association) => updateAssociation(updatedAssociation, 3)} />
      </div>
      <p className="text-l font-bold text-center">{message}</p>
      <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold border shadow-md rounded-md cursor-pointer block mx-auto" onClick={() => evaluateAssociations()}>Auswerten</button>
    </>
  )
}

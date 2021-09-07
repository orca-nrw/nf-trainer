import React, { useState } from 'react'
import { useHistory } from 'react-router'
import KeyAssociation from './KeyAssociation'

interface Association {
    primaryKeys: string[],
    columns: string[]
}

interface PropTypes {
  keys: string[],
  associationsSolutions: Association[],
  redirectTo: string
}

export default function AssociationResponseHandler ({ keys, associationsSolutions, redirectTo }: PropTypes) {
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

  function compareArrays (arr1: any[], arr2: any[]) {
    if (JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort())) return true
    return false
  }

  function solutionIsFulfilled (solution: Association) {
    for (const userAssociation of userAssociations) {
      if (compareArrays(solution.primaryKeys, userAssociation.primaryKeys) && compareArrays(solution.columns, userAssociation.columns)) {
        return true
      }
    }
    return false
  }

  function evaluateAssociations () {
    for (const solution of associationsSolutions) {
      if (!solutionIsFulfilled(solution)) return false
    }
    return true
  }

  function handleSubmit () {
    if (evaluateAssociations()) {
      setMessage('Korrekt!')
      setTimeout(() => history.push(redirectTo), 2000)
    } else {
      setMessage('Leider falsch!')
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <KeyAssociation keys={keys} association={userAssociations[0]} updateAssociation={(updatedAssociation: Association) => updateAssociation(updatedAssociation, 0)} />
        <KeyAssociation keys={keys} association={userAssociations[1]} updateAssociation={(updatedAssociation: Association) => updateAssociation(updatedAssociation, 1)} />
        <KeyAssociation keys={keys} association={userAssociations[2]} updateAssociation={(updatedAssociation: Association) => updateAssociation(updatedAssociation, 2)} />
        <KeyAssociation keys={keys} association={userAssociations[3]} updateAssociation={(updatedAssociation: Association) => updateAssociation(updatedAssociation, 3)} />
      </div>
      <p className="text-l font-bold text-center">{message}</p>
      <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold border shadow-md rounded-md cursor-pointer block mx-auto" onClick={() => handleSubmit()}>Auswerten</button>
    </>
  )
}

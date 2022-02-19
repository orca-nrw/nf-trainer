import React, { useState } from 'react'
import KeyAssociation from './KeyAssociation'

interface Association {
    primaryKeys: string[],
    columns: string[]
}

interface PropTypes {
  keys: string[],
  associationsSolutions: Association[],
  responseHandler: (response: boolean) => void
}

export default function AssociationResponseHandler ({ keys, associationsSolutions, responseHandler }: PropTypes) {
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
    const result = evaluateAssociations()
    responseHandler(result)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <KeyAssociation keys={keys} association={userAssociations[0]} updateAssociation={(updatedAssociation: Association) => updateAssociation(updatedAssociation, 0)} />
        <KeyAssociation keys={keys} association={userAssociations[1]} updateAssociation={(updatedAssociation: Association) => updateAssociation(updatedAssociation, 1)} />
        <KeyAssociation keys={keys} association={userAssociations[2]} updateAssociation={(updatedAssociation: Association) => updateAssociation(updatedAssociation, 2)} />
        <KeyAssociation keys={keys} association={userAssociations[3]} updateAssociation={(updatedAssociation: Association) => updateAssociation(updatedAssociation, 3)} />
      </div>
      <button className="px-4 py-2 bg-th-red hover:bg-red-600 text-white text-lg font-semibold border shadow-md rounded-md cursor-pointer block mx-auto" onClick={() => handleSubmit()}>Auswerten</button>
    </>
  )
}

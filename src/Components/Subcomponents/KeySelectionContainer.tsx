import React from 'react'
import CheckboxResponseHandler from './CheckboxResponseHandler'

interface Association {
  primaryKeys: string[],
  columns: string[]
}

interface PropTypes {
  keys: string[],
  association: Association,
  updateAssociation: (x: Association) => void
}

export default function KeySelectionContainer ({ keys, association, updateAssociation }: PropTypes) {
  function updatePrimaryKeys (updatedPrimaryKeys: string[]) {
    updateAssociation({
      primaryKeys: updatedPrimaryKeys,
      columns: association.columns
    })
  }

  function updateColumns (updatedColumns: string[]) {
    updateAssociation({
      primaryKeys: association.primaryKeys,
      columns: updatedColumns
    })
  }

  return (
    <div className="grid grid-cols-2 gap-4 border p-4 shadow-md">
      <div>
        <h1 className="font-bold">Primärschlüssel</h1>
        <CheckboxResponseHandler entryList={keys} selectedEntries={association.primaryKeys} setSelectedEntries={updatePrimaryKeys} useAccent={true} />
      </div>
      <div>
        <h1 className="font-bold">Spalten</h1>
        <CheckboxResponseHandler entryList={keys} selectedEntries={association.columns} setSelectedEntries={updateColumns} useAccent={false} />
      </div>
    </div>
  )
}

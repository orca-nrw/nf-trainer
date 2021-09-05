import React, { useState } from 'react'
import CheckboxResponseHandler from './CheckboxResponseHandler'

interface PropTypes {
  keys: string[]
}

export default function KeySelectionContainer ({ keys }: PropTypes) {
  const [selectedPrimaryKeys, setSelectedPrimaryKeys] = useState<string[]>([])
  const [selectedColumns, setSelectedColumns] = useState<string[]>([])

  return (
    <div className="grid grid-cols-2 gap-4 border p-4 shadow-md">
      <div>
        <h1 className="font-bold">Primärschlüssel</h1>
        <CheckboxResponseHandler entryList={keys} selectedEntries={selectedPrimaryKeys} setSelectedEntries={setSelectedPrimaryKeys} useAccent={true} />
      </div>
      <div>
        <h1 className="font-bold">Spalten</h1>
        <CheckboxResponseHandler entryList={keys} selectedEntries={selectedColumns} setSelectedEntries={setSelectedColumns} useAccent={false} />
      </div>
    </div>
  )
}

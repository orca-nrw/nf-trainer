import React, { useState } from 'react'
import uniqueId from '../utils/uniqueId'

interface PropTypes {
  entryList: string[],
  selectedEntries: string[],
  setSelectedEntries: (entries: string[]) => void,
  useAccent: boolean
}

export default function CheckboxResponseHandler ({ entryList, selectedEntries, setSelectedEntries, useAccent }: PropTypes) {
  const [id] = useState(uniqueId())

  function handleChange (entry: string) {
    if (selectedEntries.some(key => key === entry)) {
      setSelectedEntries(selectedEntries.filter(key => key !== entry))
    } else {
      setSelectedEntries([entry, ...selectedEntries])
    }
  }

  const selectedColors = useAccent ? 'bg-red-500 hover:bg-red-600' : 'bg-purple-500 hover:bg-purple-600'
  const selectedStyle = selectedColors + 'shadow-none text-white'
  const unselectedStyle = 'bg-gray-50 hover:bg-gray-200 text-gray-600'

  return (
    <div>
      {entryList.map(entry => {
        return (
          <div className="space-y-0.5" key={entry}>
            <input className="sr-only" type="checkbox" id={`${id}-${entry}`} value="entry" name={`${id}-keySelection`} checked={selectedEntries.some(x => x === entry)} onChange={() => handleChange(entry)} />
            <label className={`inline-block px-4 py-1 w-full ${selectedEntries.some(x => x === entry) ? selectedStyle : unselectedStyle} border border-gray-300 rounded-xl shadow-inner  text-center select-none`} htmlFor={`${id}-${entry}`}>{entry}</label>
          </div>
        )
      })}
    </div>
  )
}

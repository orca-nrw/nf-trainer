import React from 'react'

interface FunctionalDependency {
  primaryKeys: string[]
  columns: string[]
  type: string
}

interface PropTypes {
  functionalDependencies: FunctionalDependency[]
  selectedTypes: string[]
  setSelectedTypes: (types: string[]) => void
  disabled: boolean
}

export default function FunctionalDependencyHandler({
  functionalDependencies,
  selectedTypes,
  setSelectedTypes,
  disabled,
}: PropTypes) {
  function handleChange(e: React.ChangeEvent, index: number) {
    const value = (e.target as HTMLInputElement).value
    const newSelectedTypes = [...selectedTypes]
    newSelectedTypes.splice(index, 1, value)
    setSelectedTypes(newSelectedTypes)
  }

  return (
    <div className="flex flex-col space-y-4">
      {functionalDependencies.map((dependency, index) => {
        const dependencyString = `${dependency.primaryKeys.join(
          ', '
        )} ➔ ${dependency.columns.join(', ')}`
        return (
          <div className="text-right" key={index}>
            <label className="mr-4 font-semibold">{dependencyString}</label>
            <select
              className="border rounded p-1"
              onChange={(event: React.ChangeEvent) =>
                handleChange(event, index)
              }
              key={index}
              value={selectedTypes[index]}
              disabled={disabled}
            >
              <option value="voll">Voll</option>
              <option value="partiell">Partiell</option>
              <option value="transitiv">Transitiv</option>
            </select>
          </div>
        )
      })}
    </div>
  )
}

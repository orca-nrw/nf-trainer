import React from 'react'
import uniqueId from '../../utils/uniqueId'

interface FunctionalDependency {
  primaryKeys: string[],
  columns: string[],
  type: string
}

interface PropTypes {
  functionalDependencies: FunctionalDependency[]
}

export default function FunctionalDependencyHandler ({ functionalDependencies }: PropTypes) {
  return (
    <div className="flex flex-col space-y-4">
      {functionalDependencies.map(dependency => {
        const dependencyString = `${dependency.primaryKeys.join(', ')} -> ${dependency.columns.join(', ')}`
        return (
          <div className="text-right" key={uniqueId()}>
            <label className="mr-4 font-semibold">{dependencyString}</label>
            <select className="border rounded p-1">
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

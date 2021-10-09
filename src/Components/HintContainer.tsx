import React from 'react'

interface PropTypes {
  functionalDependencies?: {
    primaryKeys: string[],
    columns: string[]
  }[],
  primaryKeys?: string[]
}

export default function HintContainer ({ functionalDependencies, primaryKeys }: PropTypes) {
  return (
    <div className="flex justify-around">
      <details className="p-2 bg-green-300 rounded-lg cursor-pointer select-none inline-block">
        <summary>Freigeschaltete Hinweise</summary>
        <div className="cursor-default">

          {functionalDependencies && (
              <div>
                <h1 className="font-semibold mt-4">Funktionale Anforderungen</h1>
                {functionalDependencies?.map((dependency, index) => {
                  const dependencyString = `${dependency.primaryKeys.join(', ')} -> ${dependency.columns.join(', ')}`
                  return <p key={index}>{dependencyString}</p>
                })}
              </div>
          )}

          {primaryKeys && (
              <div>
                <h1 className="font-semibold mt-4">Primärschlüssel</h1>
                <p>{primaryKeys.join(', ')}</p>
              </div>
          )}
        </div>
      </details>
    </div>
  )
}

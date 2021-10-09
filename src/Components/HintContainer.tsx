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
      <details className="p-2 bg-th-orange rounded-lg cursor-pointer select-none inline-block text-white">
        <summary className="font-semibold">Freigeschaltete Hinweise</summary>
        <div className="cursor-default bg-white text-black p-2 mt-2 rounded-md">

          {functionalDependencies && (
              <div>
                <h1 className="font-semibold">Funktionale Anforderungen</h1>
                {functionalDependencies?.map((dependency, index) => {
                  const dependencyString = `${dependency.primaryKeys.join(', ')} ➔ ${dependency.columns.join(', ')}`
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

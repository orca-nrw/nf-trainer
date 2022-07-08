import React from 'react'

interface PropTypes {
  functionalDependencies?: {
    primaryKeys: string[]
    columns: string[]
  }[]
  primaryKeys?: string[]
}

export default function HintContainer({
  functionalDependencies,
  primaryKeys,
}: PropTypes) {
  return (
    <div className="flex justify-around">
      <details className="bg-th-orange rounded-lg cursor-pointer select-none inline-block text-white font-semibold shadow-lg">
        <summary className="font-semibold  px-3 py-2 ">Freigeschaltete Hinweise</summary>
        <div className="cursor-default bg-white text-black font-normal p-2">
          {functionalDependencies && (
            <div className='space-y-4 sm:space-y-0'>
              <h1 className="font-semibold">Funktionale Anforderungen</h1>
              {functionalDependencies?.map((dependency, index) => {
                const dependencyString = `${dependency.primaryKeys.join(
                  ', '
                )} ➔ ${dependency.columns.join(', ')}`
                return <p key={index}>{dependencyString}</p>
              })}
            </div>
          )}

          {primaryKeys && (
            <div className='space-y-4 sm:space-y-0 mt-8'>
              <h1 className="font-semibold mt-4">Primärschlüssel</h1>
              <p>{primaryKeys.join(', ')}</p>
            </div>
          )}
        </div>
      </details>
    </div>
  )
}

import React from 'react'

interface FunctionalDependency {
  primaryKeys: string[],
  columns: string[],
  type: string
}

interface PropTypes {
  functionalDependencies:FunctionalDependency[]
}

export default function FunctionalDependencyHandler ({ functionalDependencies }: PropTypes) {
  return (
    <div>

    </div>
  )
}

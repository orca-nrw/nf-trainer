import React from 'react'
import { useParams } from 'react-router-dom'

export default function FirstNormalForm () {
  const { id } = useParams<ParamTypes>()

  return (
    <h1>First Normal Form (Task {id})</h1>
  )
}

interface ParamTypes {
  id: string
}

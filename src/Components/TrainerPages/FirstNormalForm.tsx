import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import tasks from '../../data'

export default function FirstNormalForm () {
  // Get task from url param
  const { id } = useParams<ParamTypes>()
  const task = tasks.find(task => task.id === Number(id))

  // Redirect to index if there is no task with the given id
  if (!task) return <Redirect to="/" />

  return (
    <>
      <h1>First Normal Form (Task {task.id})</h1>
      <p>{task.description}</p>
    </>
  )
}

interface ParamTypes {
  id: string
}

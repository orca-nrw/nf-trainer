import React from 'react'
import tasks from '../../data'
import { Redirect, useParams } from 'react-router-dom'
import Table from '../Subcomponents/Table'
import KeySelectionResponseHandler from '../Subcomponents/KeySelectionResponseHandler'

export default function FunctionalDependencies () {
  // Get task from url param
  const { id } = useParams<ParamTypes>()
  const task = tasks.find(task => task.id === Number(id))

  // Redirect to index if there is no task with the given id
  if (!task) return <Redirect to="/" />

  const taskKeys = Object.keys(task.tableData[0])
  const functionalDependencies = task.functionalDependencies

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-xl">Funktionale Abhängigkeiten</h1>
      <p>{task.description}</p>
      <Table tableData={task.tableData}/>
      <p className="text-center">Bestimmen Sie alle funktionalen Abhängigkeiten!</p>
      <KeySelectionResponseHandler keys={taskKeys} associationsSolution={functionalDependencies} redirectTo="/" />
    </div>
  )
}

interface ParamTypes {
  id: string
}

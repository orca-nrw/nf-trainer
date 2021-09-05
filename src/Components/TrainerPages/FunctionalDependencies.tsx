import React from 'react'
import tasks from '../../data'
import { Redirect, useParams } from 'react-router-dom'
import Table from '../Subcomponents/Table'
import KeySelectionContainer from '../Subcomponents/KeySelectionContainer'

export default function FunctionalDependencies () {
  // Get task from url param
  const { id } = useParams<ParamTypes>()
  const task = tasks.find(task => task.id === Number(id))

  // Redirect to index if there is no task with the given id
  if (!task) return <Redirect to="/" />

  const taskKeys = Object.keys(task.tableData[0])

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-xl">Funktionale Abhängigkeiten</h1>
      <p>{task.description}</p>
      <Table tableData={task.tableData}/>
      <p className="text-center">Bestimmen Sie alle funktionalen Abhängigkeiten!</p>
      <div className="grid grid-cols-2 gap-8">
        <KeySelectionContainer keys={taskKeys} />
        <KeySelectionContainer keys={taskKeys} />
        <KeySelectionContainer keys={taskKeys} />
        <KeySelectionContainer keys={taskKeys} />
      </div>
      <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold border shadow-md rounded-md cursor-pointer block mx-auto">Auswerten</button>
    </div>
  )
}

interface ParamTypes {
  id: string
}

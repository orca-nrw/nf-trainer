import React, { useState } from 'react'
import { Redirect, useHistory, useParams } from 'react-router'
import Table from '../Subcomponents/Table'
import tasks from '../../data'
import CheckboxResponseHandler from '../Subcomponents/CheckboxResponseHandler'

interface ParamTypes {
  id: string
}

export default function ViolatingColumns () {
  // Get task from url param
  const { id } = useParams<ParamTypes>()
  const task = tasks.find(task => task.id === Number(id))

  // Redirect to index if there is no task with the given id
  if (!task) return <Redirect to="/" />

  const history = useHistory()

  // Task Variables
  const taskKeys = Object.keys(task.tableData[0])
  const violatingColumns: string[] = task.violatingColumns

  // Component State
  const [selectedEntries, setSelectedEntries] = useState<string[]>([])
  const [message, setMessage] = useState('')

  function evaluateEntries () {
    if (selectedEntries.length === violatingColumns.length && selectedEntries.every(entry => violatingColumns.includes(entry))) return true
    return false
  }

  function handleSubmit () {
    if (evaluateEntries()) {
      setMessage('Korrekt!')
      setTimeout(() => history.push(`/tasks/${id}/functionalDependencies`), 2000)
    } else {
      setMessage('Leider falsch!')
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-xl">Erste Normalform</h1>
      <p>{task.description}</p>
      <Table tableData={task.tableData}/>
      <div className="flex flex-col items-center space-y-4">
        <p>Markieren Sie alle Spalten die die erste Normalform verletzen!</p>
        <CheckboxResponseHandler entryList={taskKeys} selectedEntries={selectedEntries} setSelectedEntries={setSelectedEntries} useAccent={true} />
        <p className="text-l font-bold text-center">{message}</p>
        <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold border shadow-md rounded-md cursor-pointer block mx-auto" onClick={() => handleSubmit()}>Auswerten</button>
      </div>
    </div>
  )
}

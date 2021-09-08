import React, { useState } from 'react'
import { Redirect, useHistory, useParams } from 'react-router'
import tasks from '../../data'
import Table from '../Subcomponents/Table'

interface ParamTypes {
  id: string
}

export default function FunctionalDependencyTypes () {
  // Get task from url param
  const { id } = useParams<ParamTypes>()
  const task = tasks.find(task => task.id === Number(id))

  // Redirect to index if there is no task with the given id
  if (!task) return <Redirect to="/" />

  const history = useHistory()

  // Task Variables
  // const taskKeys = Object.keys(task.tableData[0])

  // Component State
  const [message, setMessage] = useState('')

  function evaluateEntries () {
    return true
  }

  function handleSubmit () {
    if (evaluateEntries()) {
      setMessage('Korrekt!')
      setTimeout(() => history.push(`/tasks/${id}/secondNormalForm`), 2000)
    } else {
      setMessage('Leider falsch!')
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-xl">Primärschlüssel</h1>
      <p>{task.description}</p>
      <Table tableData={task.tableData}/>
      <div className="flex flex-col items-center space-y-4">
        <p>Wählen Sie den jeweiligen Typ der funktionalen Abhängigkeiten aus!</p>

        <p className="text-l font-bold text-center">{message}</p>
        <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold border shadow-md rounded-md cursor-pointer block mx-auto" onClick={() => handleSubmit()}>Auswerten</button>
      </div>
    </div>
  )
}

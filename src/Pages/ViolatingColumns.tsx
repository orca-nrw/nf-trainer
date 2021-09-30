import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router'
import CheckboxResponseHandler from '../Components/CheckboxResponseHandler'
import PrevNextNavigation from '../Components/PrevNextNavigation'
import Table from '../Components/Table'
import tasks from '../Tasks'

interface ParamTypes {
  id: string
}

export default function ViolatingColumns () {
  // Get task from url param
  const { id } = useParams<ParamTypes>()
  const task = tasks.find(task => task.id === Number(id))

  // Redirect to index if there is no task with the given id
  if (!task) return <Redirect to="/" />

  // Task Variables
  const taskKeys = Object.keys(task.tableData[0])
  const violatingColumns: string[] = task.violatingColumns

  // Component State
  const [selectedEntries, setSelectedEntries] = useState<string[]>([])
  const [message, setMessage] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)

  function evaluateEntries () {
    if (selectedEntries.length === violatingColumns.length && selectedEntries.every(entry => violatingColumns.includes(entry))) return true
    return false
  }

  function handleSubmit () {
    if (evaluateEntries()) {
      setMessage('Korrekt!')
      setIsEnabled(true)
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
        <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold border shadow-md rounded-md cursor-pointer block mx-auto" onClick={() => handleSubmit()}>Auswerten</button>
        <p className="text-l font-bold text-center">{message}</p>
      </div>
      <PrevNextNavigation prev={`/tasks/${id}/firstNormalForm`} next={`/tasks/${id}/functionalDependencies`} nextIsEnabled={isEnabled} />
    </div>
  )
}

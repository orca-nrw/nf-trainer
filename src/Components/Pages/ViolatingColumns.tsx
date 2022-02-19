import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router'
import CheckboxResponseHandler from '../UI/CheckboxResponseHandler'
import PrevNextNavigation from '../UI/PrevNextNavigation'
import SampleSolution from '../UI/SampleSolution'
import TrainerHeader from '../UI/TrainerHeader'
import TrainerSubtaskDescription from '../UI/TrainerSubtaskDescription'
import TrainerTaskDescription from '../UI/TrainerTaskDescription'
import Table from '../UI/Table'
import tasks from '../../Tasks'

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
      <TrainerHeader>Erste Normalform</TrainerHeader>
      <TrainerTaskDescription>{task.description}</TrainerTaskDescription>
      <Table tableData={task.tableData}/>
      <div className="flex flex-col items-center space-y-4">
        <TrainerSubtaskDescription>Markieren Sie alle Spalten die die erste Normalform verletzen!</TrainerSubtaskDescription>
        <div className="p-4 border shadow-md">
        <h1 className="font-bold">Spalten</h1>
          <CheckboxResponseHandler entryList={taskKeys} selectedEntries={selectedEntries} setSelectedEntries={setSelectedEntries} useAccent={true} />
        </div>
        <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold border shadow-md rounded-md cursor-pointer block mx-auto" onClick={() => handleSubmit()}>Auswerten</button>
        <SampleSolution >
          {
            task.violatingColumns.join(', ')
          }
        </SampleSolution>
        <p className="text-l font-bold text-center">{message}</p>
      </div>
      <PrevNextNavigation prev={`/tasks/${id}/firstNormalForm`} next={`/tasks/${id}/functionalDependencies`} nextIsEnabled={isEnabled} />
    </div>
  )
}

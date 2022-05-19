import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router'
import CheckboxResponseHandler from '../UI/CheckboxResponseHandler'
import HintContainer from '../UI/HintContainer'
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

export default function PrimaryKeys() {
  // Get task from url param
  const { id } = useParams<ParamTypes>()
  const task = tasks.find((task) => task.id === Number(id))
  const tableData = task?.hasViolatingColumns
    ? task?.firstNormalFormTableData
    : task?.tableData

  // Throw error and redirect back if an error occurs
  if (!tableData) {
    console.error('No suitable tableData found!')
    return <Redirect to="/" />
  }

  // Redirect to index if there is no task with the given id
  if (!task) return <Redirect to="/" />

  // Task Variables
  const taskKeys = Object.keys(task.tableData[0])
  const primaryKeys = task.primaryKeys

  // Component State
  const [selectedEntries, setSelectedEntries] = useState<string[]>([])
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>()
  const [canNavigate, setCanNavigate] = useState(false)

  function evaluateEntries() {
    if (
      selectedEntries.length === primaryKeys.length &&
      selectedEntries.every((entry) => primaryKeys.includes(entry))
    )
      return true
    return false
  }

  function handleSubmit() {
    if (evaluateEntries()) {
      setIsCorrect(true)
      setCanNavigate(true)
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div className="space-y-4">
      {/* Task description */}
      <TrainerHeader>Primärschlüssel</TrainerHeader>
      <TrainerTaskDescription>{task.description}</TrainerTaskDescription>
      <Table tableData={tableData} />
      <div className="flex flex-col items-center space-y-4">
        <TrainerSubtaskDescription>
          Bestimmen Sie alle eindeutigen Schlüssel!
        </TrainerSubtaskDescription>

        {/* Task-specific response handler */}
        <div className="p-4 border shadow-md">
          <h1 className="font-bold">Schlüssel</h1>
          <CheckboxResponseHandler
            entryList={taskKeys}
            selectedEntries={selectedEntries}
            setSelectedEntries={setSelectedEntries}
            useAccent={true}
            disabled={canNavigate}
          />
        </div>
        <button
          className={`px-2 py-1 text-white text-lg rounded-md ${
            canNavigate
              ? 'bg-gray-400'
              : 'bg-th-red hover:bg-red-600  cursor-pointer'
          }`}
          onClick={() => handleSubmit()}
          disabled={canNavigate}
        >
          Auswerten
        </button>
        <HintContainer functionalDependencies={task.functionalDependencies} />

        {/* Solution container */}
        {isCorrect !== undefined && (
          <SampleSolution onClick={() => setCanNavigate(true)}>
            <p>{primaryKeys.join(', ')}</p>
          </SampleSolution>
        )}

        {/* Feedback */}
        {isCorrect !== undefined && (
          <p className="text-l font-bold text-center">
            {isCorrect ? 'Richtig!' : 'Leider falsch.'}
          </p>
        )}
      </div>

      {/* Navigation */}
      <PrevNextNavigation
        prev={`/tasks/${id}/functionalDependencies`}
        next={`/tasks/${id}/functionalDependencyTypes`}
        nextIsEnabled={canNavigate}
      />
    </div>
  )
}

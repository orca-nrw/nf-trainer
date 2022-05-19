import React, { useState } from 'react'
import tasks from '../../Tasks'
import { Redirect, useParams } from 'react-router-dom'
import Table from '../UI/Table'
import AssociationResponseHandler from '../UI/AssociationResponseHandler'
import SampleSolution from '../UI/SampleSolution'
import PrevNextNavigation from '../UI/PrevNextNavigation'
import TrainerHeader from '../UI/TrainerHeader'
import TrainerTaskDescription from '../UI/TrainerTaskDescription'
import TrainerSubtaskDescription from '../UI/TrainerSubtaskDescription'

export default function FunctionalDependencies() {
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

  const taskKeys = Object.keys(task.tableData[0])
  const functionalDependencies = task.functionalDependencies

  const [isCorrect, setIsCorrect] = useState<boolean | undefined>()
  const [canNavigate, setCanNavigate] = useState(false)

  function handleResponse(response: boolean) {
    if (response) {
      setIsCorrect(true)
      setCanNavigate(true)
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div className="space-y-4">
      {/* Task description */}
      <TrainerHeader>Funktionale Abhängigkeiten</TrainerHeader>
      <TrainerTaskDescription>{task.description}</TrainerTaskDescription>
      <Table tableData={tableData} />
      <TrainerSubtaskDescription>
        Bestimmen Sie alle funktionalen Abhängigkeiten, indem Sie auf die
        entsprechenden Spalten (Primärschlüssel und abhängige Spalten) klicken!
      </TrainerSubtaskDescription>

      {/* Task-specific response handler */}
      <AssociationResponseHandler
        keys={taskKeys}
        associationsSolutions={functionalDependencies}
        responseHandler={handleResponse}
        disabled={canNavigate}
      />

      {/* Feedback */}
      {isCorrect !== undefined && (
        <p className="text-l font-bold text-center">
          {isCorrect ? 'Richtig!' : 'Leider falsch.'}
        </p>
      )}

      {/* Solution container */}
      {isCorrect !== undefined && (
        <SampleSolution onClick={() => setCanNavigate(true)}>
          {functionalDependencies.map((dependency, index) => {
            const dependencyString = `${dependency.primaryKeys.join(
              ', '
            )} ➔ ${dependency.columns.join(', ')}`
            return <p key={index}>{dependencyString}</p>
          })}
        </SampleSolution>
      )}

      {/* Navigation */}
      <PrevNextNavigation
        prev={`/tasks/${id}/firstNormalForm`}
        next={`/tasks/${id}/primaryKeys`}
        nextIsEnabled={canNavigate}
      />
    </div>
  )
}

interface ParamTypes {
  id: string
}

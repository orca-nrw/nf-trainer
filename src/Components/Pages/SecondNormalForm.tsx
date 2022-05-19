import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router'
import AssociationResponseHandler from '../UI/AssociationResponseHandler'
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

export default function SecondNormalForm() {
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
  const associations = task.secondNormalForm

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
      <TrainerHeader>Zweite Normalform</TrainerHeader>
      <TrainerTaskDescription>{task.description}</TrainerTaskDescription>
      <Table tableData={tableData} />
      <TrainerSubtaskDescription>
        Bringen Sie das Schema in die zweite Normalform, indem Sie auf die
        entsprechenden Spalten (Primärschlüssel und abhängige Spalten) klicken!
      </TrainerSubtaskDescription>

      {/* Task-specific response handler */}
      <AssociationResponseHandler
        keys={taskKeys}
        associationsSolutions={associations}
        responseHandler={handleResponse}
        disabled={canNavigate}
      />
      <HintContainer
        functionalDependencies={task.functionalDependencies}
        primaryKeys={task.primaryKeys}
      />

      {/* Solution container */}
      {isCorrect !== undefined && (
        <SampleSolution onClick={() => setCanNavigate(true)}>
          {task.secondNormalForm.map((dependency, index) => {
            const dependencyString = `${dependency.primaryKeys.join(
              ', '
            )} ➔ ${dependency.columns.join(', ')}`
            return <p key={index}>{dependencyString}</p>
          })}
        </SampleSolution>
      )}

      {/* Feedback */}
      {isCorrect !== undefined && (
        <p className="text-l font-bold text-center">
          {isCorrect ? 'Richtig!' : 'Leider falsch.'}
        </p>
      )}

      {/* Navigation */}
      <PrevNextNavigation
        prev={`/tasks/${id}/functionalDependencyTypes`}
        next={`/tasks/${id}/checkThirdNormalForm`}
        nextIsEnabled={canNavigate}
      />
    </div>
  )
}

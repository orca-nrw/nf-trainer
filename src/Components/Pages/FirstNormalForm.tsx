import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import BooleanResponseHandler from '../UI/BooleanResponseHandler'
import PrevNextNavigation from '../UI/PrevNextNavigation'
import SampleSolution from '../UI/SampleSolution'
import TrainerHeader from '../UI/TrainerHeader'
import TrainerSubtaskDescription from '../UI/TrainerSubtaskDescription'
import TrainerTaskDescription from '../UI/TrainerTaskDescription'
import Table from '../UI/Table'
import tasks from '../../Tasks'
import FeedbackElement from '../UI/FeedbackElement'

export default function FirstNormalForm() {
  // Get task from url param
  const { id } = useParams<ParamTypes>()
  const task = tasks.find((task) => task.id === Number(id))

  // Redirect to index if there is no task with the given id
  if (!task) return <Redirect to="/" />

  const nextPage = task.hasViolatingColumns
    ? `/tasks/${id}/violatingColumns`
    : `/tasks/${id}/functionalDependencies`

  const [isCorrect, setIsCorrect] = useState<boolean | undefined>()
  const [canNavigate, setCanNavigate] = useState(false)

  function handleResponse(response: boolean) {
    if (response !== task?.hasViolatingColumns) {
      setIsCorrect(true)
      setCanNavigate(true)
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div className="space-y-4">
      {/* Task description */}
      <TrainerHeader>Erste Normalform</TrainerHeader>
      <TrainerTaskDescription>{task.description}</TrainerTaskDescription>
      <Table tableData={task.tableData} />
      <TrainerSubtaskDescription>
        Befindet sich die Tabelle in der ersten Normalform?
      </TrainerSubtaskDescription>

      {/* Task-specific response handler */}
      <BooleanResponseHandler
        disabled={canNavigate}
        responseHandler={handleResponse}
      />

      {/* Feedback */}
      {isCorrect !== undefined && (
        <FeedbackElement isCorrect={isCorrect} />
      )}

      {/* Solution container */}
      {isCorrect !== undefined && (
        <SampleSolution onClick={() => setCanNavigate(true)}>
          {task.hasViolatingColumns ? <p>Nein</p> : <p>Ja</p>}
        </SampleSolution>
      )}

      {/* Navigation */}
      <PrevNextNavigation
        prev="/tasks"
        next={nextPage}
        nextIsEnabled={canNavigate}
      />
    </div>
  )
}

interface ParamTypes {
  id: string
}

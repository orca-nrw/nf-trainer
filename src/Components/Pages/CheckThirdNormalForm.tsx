import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router'
import BooleanResponseHandler from '../UI/BooleanResponseHandler'
import HintContainer from '../UI/HintContainer'
import PrevNextNavigation from '../UI/PrevNextNavigation'
import SampleSolution from '../UI/SampleSolution'
import TableGrid from '../UI/TableGrid'
import TrainerHeader from '../UI/TrainerHeader'
import TrainerSubtaskDescription from '../UI/TrainerSubtaskDescription'
import TrainerTaskDescription from '../UI/TrainerTaskDescription'
import tasks from '../../Tasks'
import FeedbackElement from '../UI/FeedbackElement'

interface ParamTypes {
  id: string
}

export default function CheckThirdNormalForm() {
  // Get task from url param
  const { id } = useParams<ParamTypes>()
  const task = tasks.find((task) => task.id === Number(id))

  // Redirect to index if there is no task with the given id
  if (!task) return <Redirect to="/" />
  const nextPage = task.alreadyThirdNormalForm
    ? '/done'
    : `/tasks/${id}/thirdNormalForm`

  const [isCorrect, setIsCorrect] = useState<boolean | undefined>()
  const [canNavigate, setCanNavigate] = useState(false)

  function handleResponse(response: boolean) {
    if (response === task?.alreadyThirdNormalForm) {
      setIsCorrect(true)
      setCanNavigate(true)
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div className="space-y-4">
      {/* Task description */}
      <TrainerHeader>Dritte Normalform</TrainerHeader>
      <TrainerTaskDescription>{task.description}</TrainerTaskDescription>
      <TableGrid gridData={task.secondFormTableData} />
      <TrainerSubtaskDescription>
        Befindet sich die Tabelle nun bereits in der dritten Normalform?
      </TrainerSubtaskDescription>

      {/* Task-specific response handler */}
      <BooleanResponseHandler
        responseHandler={handleResponse}
        disabled={canNavigate}
      />

      {/* Feedback */}
      {isCorrect !== undefined && (
        <FeedbackElement isCorrect={isCorrect} />
      )}

      <HintContainer
        functionalDependencies={task.functionalDependencies}
        primaryKeys={task.primaryKeys}
      />

      {/* Solution container */}
      {isCorrect !== undefined && (
        <SampleSolution onClick={() => setCanNavigate(true)}>
          {task.alreadyThirdNormalForm ? <p>Ja</p> : <p>Nein</p>}
        </SampleSolution>
      )}

      {/* Navigation */}
      <PrevNextNavigation
        prev={`/tasks/${id}/secondNormalForm`}
        next={nextPage}
        nextIsEnabled={canNavigate}
      />
    </div>
  )
}

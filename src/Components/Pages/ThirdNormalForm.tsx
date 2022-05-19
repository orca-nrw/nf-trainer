import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router'
import AssociationResponseHandler from '../UI/AssociationResponseHandler'
import HintContainer from '../UI/HintContainer'
import PrevNextNavigation from '../UI/PrevNextNavigation'
import SampleSolution from '../UI/SampleSolution'
import TrainerHeader from '../UI/TrainerHeader'
import TrainerSubtaskDescription from '../UI/TrainerSubtaskDescription'
import TrainerTaskDescription from '../UI/TrainerTaskDescription'
import TableGrid from '../UI/TableGrid'
import tasks from '../../Tasks'
import FeedbackElement from '../UI/FeedbackElement'

interface ParamTypes {
  id: string
}

export default function ThirdNormalForm() {
  // Get task from url param
  const { id } = useParams<ParamTypes>()
  const task = tasks.find((task) => task.id === Number(id))

  // Redirect to index if there is no task with the given id
  if (!task) return <Redirect to="/" />

  // Task Variables
  const taskKeys = Object.keys(task.tableData[0])
  const associations = task.thirdNormalFormSolutions

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
      <TrainerHeader>Dritte Normalform</TrainerHeader>
      <TrainerTaskDescription>{task.description}</TrainerTaskDescription>
      <TableGrid gridData={task.secondFormTableData} />
      <TrainerSubtaskDescription>
        Bringen Sie das Schema in die dritte Normalform, indem Sie auf die
        entsprechenden Spalten (Primärschlüssel und abhängige Spalten) klicken!!
      </TrainerSubtaskDescription>

      {/* Task-specific response handler */}
      <AssociationResponseHandler
        keys={taskKeys}
        associationsSolutions={associations}
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
          {task.thirdNormalFormSolutions.map((dependency, index) => {
            const dependencyString = `${dependency.primaryKeys.join(
              ', '
            )} ➔ ${dependency.columns.join(', ')}`
            return <p key={index}>{dependencyString}</p>
          })}
        </SampleSolution>
      )}

      {/* Navigation */}
      <PrevNextNavigation
        prev={`/tasks/${id}/checkThirdNormalForm`}
        next={'/done'}
        nextIsEnabled={canNavigate}
      />
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import AssociationResponseHandler from '../UI/AssociationResponseHandler'
import HintContainer from '../UI/HintContainer'
import PrevNextNavigation from '../UI/PrevNextNavigation'
import SampleSolution from '../UI/SampleSolution'
import TrainerHeader from '../UI/TrainerHeader'
import TrainerSubtaskDescription from '../UI/TrainerSubtaskDescription'
import TrainerTaskDescription from '../UI/TrainerTaskDescription'
import Table from '../UI/Table'
import FeedbackElement from '../UI/FeedbackElement'
import { Task } from '../../Types/Task'
import { useNavigate } from 'react-router-dom'

interface Props {
  selectedTask: Task | undefined
  isLoading: boolean
}

export default function SecondNormalForm({ selectedTask, isLoading }: Props) {
  const navigate = useNavigate()

  useEffect(() => {
    // Navigate back to selection if the task is neither selected nor loading
    if (!isLoading && !selectedTask) {
      navigate('/trainer/')
    }
  }, [isLoading, selectedTask])

  // // Task Variables
  // const taskKeys = Object.keys(task.tableData[0])
  // const associations = task.secondNormalForm

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
    <>
      {isLoading || !selectedTask ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {/* Task description */}
          <TrainerHeader>
            {selectedTask.title} - Zweite Normalform
          </TrainerHeader>
          <TrainerTaskDescription>
            {selectedTask.description}
          </TrainerTaskDescription>
          <Table
            tableData={
              // Use regular tabledata or use special firstNF data if task was not in the first NF
              selectedTask.hasViolatingColumns &&
              selectedTask.firstNormalFormTableData
                ? selectedTask.firstNormalFormTableData
                : selectedTask.tableData
            }
            primaryKeys={selectedTask.primaryKeys}
          />
          <TrainerSubtaskDescription>
            Bringen Sie das Schema in die zweite Normalform, indem Sie auf die
            entsprechenden Spalten (Primärschlüssel und abhängige Spalten)
            klicken.
          </TrainerSubtaskDescription>

          {/* Task-specific response handler */}
          <AssociationResponseHandler
            keys={Object.keys(selectedTask.tableData[0])}
            associationsSolutions={selectedTask.secondNormalForm}
            responseHandler={handleResponse}
            disabled={canNavigate}
          />

          {/* Feedback */}
          {isCorrect !== undefined && <FeedbackElement isCorrect={isCorrect} />}

          <HintContainer
            functionalDependencies={selectedTask.functionalDependencies}
            primaryKeys={selectedTask.primaryKeys}
          />

          {/* Solution container */}
          {isCorrect !== undefined && (
            <SampleSolution onClick={() => setCanNavigate(true)}>
              {selectedTask.secondNormalForm.map((dependency, index) => {
                const dependencyString = `${dependency.primaryKeys.join(
                  ', '
                )} ➔ ${dependency.columns.join(', ')}`
                return <p key={index}>{dependencyString}</p>
              })}
              {selectedTask.secondNormalFormExplanation && (
                <div>
                  <h3 className="font-bold">Begründung:</h3>
                  <p>{selectedTask.secondNormalFormExplanation}</p>
                </div>
              )}
            </SampleSolution>
          )}

          {/* Navigation */}
          <PrevNextNavigation
            prev={`/trainer/functionalDependencyTypes`}
            next={`/trainer/checkThirdNormalForm`}
            nextIsEnabled={canNavigate}
          />
        </div>
      )}
    </>
  )
}

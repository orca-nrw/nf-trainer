import React, { useEffect, useState } from 'react'
import Table from '../UI/Table'
import AssociationResponseHandler from '../UI/AssociationResponseHandler'
import SampleSolution from '../UI/SampleSolution'
import PrevNextNavigation from '../UI/PrevNextNavigation'
import TrainerHeader from '../UI/TrainerHeader'
import TrainerTaskDescription from '../UI/TrainerTaskDescription'
import TrainerSubtaskDescription from '../UI/TrainerSubtaskDescription'
import FeedbackElement from '../UI/FeedbackElement'
import { Task } from '../../Types/Task'
import { useNavigate } from 'react-router-dom'

interface Props {
  selectedTask: Task | undefined
  isLoading: boolean
}

export default function FunctionalDependencies({
  selectedTask,
  isLoading,
}: Props) {
  const navigate = useNavigate()

  useEffect(() => {
    // Navigate back to selection if the task is neither selected nor loading
    if (!isLoading && !selectedTask) {
      navigate('/trainer/')
    }
  }, [isLoading, selectedTask])

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
            {selectedTask.title} - Funktionale Abhängigkeiten
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
          />
          <TrainerSubtaskDescription>
            Bestimmen Sie alle funktionalen Abhängigkeiten, indem Sie auf die
            entsprechenden Spalten (Primärschlüssel und abhängige Spalten)
            klicken.
          </TrainerSubtaskDescription>

          {/* Task-specific response handler */}
          <AssociationResponseHandler
            keys={Object.keys(selectedTask.tableData[0])}
            associationsSolutions={selectedTask.functionalDependencies}
            responseHandler={handleResponse}
            disabled={canNavigate}
          />

          {/* Feedback */}
          {isCorrect !== undefined && <FeedbackElement isCorrect={isCorrect} />}

          {/* Solution container */}
          {isCorrect !== undefined && (
            <SampleSolution onClick={() => setCanNavigate(true)}>
              {selectedTask.functionalDependencies.map((dependency, index) => {
                const dependencyString = `${dependency.primaryKeys.join(
                  ', '
                )} ➔ ${dependency.columns.join(', ')}`
                return <p key={index}>{dependencyString}</p>
              })}
            </SampleSolution>
          )}

          {/* Navigation */}
          <PrevNextNavigation
            prev={`/trainer/firstNormalForm`}
            next={`/trainer/primaryKeys`}
            nextIsEnabled={canNavigate}
          />
        </div>
      )}
    </>
  )
}

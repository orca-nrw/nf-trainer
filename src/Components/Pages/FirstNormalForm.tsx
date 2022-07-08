import React, { useEffect, useState } from 'react'
import BooleanResponseHandler from '../UI/BooleanResponseHandler'
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

export default function FirstNormalForm({ selectedTask, isLoading }: Props) {
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
    if (response !== selectedTask?.hasViolatingColumns) {
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
          <TrainerHeader>{selectedTask.title} - Erste Normalform</TrainerHeader>
          <TrainerTaskDescription>
            {selectedTask.description}
          </TrainerTaskDescription>
          <Table tableData={selectedTask.tableData} />
          <TrainerSubtaskDescription>
            Befindet sich die Tabelle in der ersten Normalform?
          </TrainerSubtaskDescription>

          {/* Task-specific response handler */}
          <BooleanResponseHandler
            disabled={canNavigate}
            responseHandler={handleResponse}
          />

          {/* Feedback */}
          {isCorrect !== undefined && <FeedbackElement isCorrect={isCorrect} />}

          {/* Solution container */}
          {isCorrect !== undefined && (
            <SampleSolution onClick={() => setCanNavigate(true)}>
              {selectedTask.hasViolatingColumns ? <p>Nein</p> : <p>Ja</p>}
              { selectedTask.hasViolatingColumnsExplanation &&
                <div>
                  <h3 className='font-bold'>Begründung:</h3>
                  <p>{selectedTask.hasViolatingColumnsExplanation}</p>
                </div>
              }
            </SampleSolution>
          )}

          {/* Navigation */}
          <PrevNextNavigation
            prev="/trainer"
            next={selectedTask?.hasViolatingColumns
              ? `/trainer/violatingColumns`
              : `/trainer/functionalDependencies`}
            nextIsEnabled={canNavigate}
          />
        </div>
      )}
    </>
  )
}

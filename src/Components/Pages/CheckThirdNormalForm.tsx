import React, { useEffect, useState } from 'react'
import BooleanResponseHandler from '../UI/BooleanResponseHandler'
import HintContainer from '../UI/HintContainer'
import PrevNextNavigation from '../UI/PrevNextNavigation'
import SampleSolution from '../UI/SampleSolution'
import TableGrid from '../UI/TableGrid'
import TrainerHeader from '../UI/TrainerHeader'
import TrainerSubtaskDescription from '../UI/TrainerSubtaskDescription'
import TrainerTaskDescription from '../UI/TrainerTaskDescription'
import FeedbackElement from '../UI/FeedbackElement'
import { Task } from '../../Types/Task'
import { useNavigate } from 'react-router-dom'

interface Props {
  selectedTask: Task | undefined
  isLoading: boolean
}

export default function CheckThirdNormalForm({
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
    if (!selectedTask) return

    if (response === selectedTask.alreadyThirdNormalForm) {
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
          <TrainerHeader>{selectedTask.title} - Dritte Normalform</TrainerHeader>
          <TrainerTaskDescription>
            {selectedTask.description}
          </TrainerTaskDescription>
          <TableGrid gridData={selectedTask.secondFormTableData} />
          <TrainerSubtaskDescription>
            Befindet sich die Tabelle nun bereits in der dritten Normalform?
          </TrainerSubtaskDescription>

          {/* Task-specific response handler */}
          <BooleanResponseHandler
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
              {selectedTask.alreadyThirdNormalForm ? <p>Ja</p> : <p>Nein</p>}
            </SampleSolution>
          )}

          {/* Navigation */}
          <PrevNextNavigation
            prev={'./secondNormalForm'}
            next={
              selectedTask.alreadyThirdNormalForm
                ? '/trainer/done'
                : '/trainer/thirdNormalForm'
            }
            nextIsEnabled={canNavigate}
          />
        </div>
      )}
    </>
  )
}

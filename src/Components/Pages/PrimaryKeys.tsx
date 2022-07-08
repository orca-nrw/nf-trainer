import React, { useEffect, useState } from 'react'
import CheckboxResponseHandler from '../UI/CheckboxResponseHandler'
import HintContainer from '../UI/HintContainer'
import PrevNextNavigation from '../UI/PrevNextNavigation'
import SampleSolution from '../UI/SampleSolution'
import TrainerHeader from '../UI/TrainerHeader'
import TrainerSubtaskDescription from '../UI/TrainerSubtaskDescription'
import TrainerTaskDescription from '../UI/TrainerTaskDescription'
import Table from '../UI/Table'
import FeedbackElement from '../UI/FeedbackElement'
import { useNavigate } from 'react-router-dom'
import { Task } from '../../Types/Task'

interface Props {
  selectedTask: Task | undefined
  isLoading: boolean
}

export default function PrimaryKeys({ selectedTask, isLoading }: Props) {
  const navigate = useNavigate()

  useEffect(() => {
    // Navigate back to selection if the task is neither selected nor loading
    if (!isLoading && !selectedTask) {
      navigate('/trainer/')
    }
  }, [isLoading, selectedTask])

  // Component State
  const [selectedEntries, setSelectedEntries] = useState<string[]>([])
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>()
  const [canNavigate, setCanNavigate] = useState(false)

  function evaluateEntries() {
    if (!selectedTask) return false

    if (
      selectedEntries.length === selectedTask.primaryKeys.length &&
      selectedEntries.every((entry) => selectedTask.primaryKeys.includes(entry))
    ) {
      return true
    } else {
      return false
    }
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
    <>
      {isLoading || !selectedTask ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {/* Task description */}
          <TrainerHeader>{selectedTask.title} - Primärschlüssel</TrainerHeader>
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
          <div className="flex flex-col items-center space-y-4">
            <TrainerSubtaskDescription>
              Bestimmen Sie alle Schlüsselattribute für einen eindeutigen
              Schlüssel.
            </TrainerSubtaskDescription>

            {/* Task-specific response handler */}
            <div className="p-4 border shadow-md">
              <h1 className="font-bold">Schlüssel</h1>
              <CheckboxResponseHandler
                entryList={Object.keys(selectedTask.tableData[0])}
                selectedEntries={selectedEntries}
                setSelectedEntries={setSelectedEntries}
                useAccent={true}
                disabled={canNavigate}
              />
            </div>
            <button
              className={`px-3 py-1.5 text-white text-lg font-semibold rounded-md ${
                canNavigate
                  ? 'bg-gray-400'
                  : 'bg-th-red hover:bg-red-600  cursor-pointer'
              }`}
              onClick={() => handleSubmit()}
              disabled={canNavigate}
            >
              Auswerten
            </button>

            {/* Feedback */}
            {isCorrect !== undefined && (
              <FeedbackElement isCorrect={isCorrect} />
            )}

            <HintContainer
              functionalDependencies={selectedTask.functionalDependencies}
            />

            {/* Solution container */}
            {isCorrect !== undefined && (
              <SampleSolution onClick={() => setCanNavigate(true)}>
                <p>{selectedTask.primaryKeys.join(', ')}</p>
              </SampleSolution>
            )}
          </div>

          {/* Navigation */}
          <PrevNextNavigation
            prev={`/trainer/functionalDependencies`}
            next={`/trainer/functionalDependencyTypes`}
            nextIsEnabled={canNavigate}
          />
        </div>
      )}
    </>
  )
}

import React, { useEffect, useState } from 'react'
import CheckboxResponseHandler from '../UI/CheckboxResponseHandler'
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

export default function ViolatingColumns({ selectedTask, isLoading }: Props) {
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
    if (!selectedTask) return

    if (
      selectedEntries.length === selectedTask.violatingColumns.length &&
      selectedEntries.every((entry) =>
        selectedTask.violatingColumns.includes(entry)
      )
    )
      return true
    return false
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
          <TrainerHeader>Erste Normalform</TrainerHeader>
          <TrainerTaskDescription>
            {selectedTask.description}
          </TrainerTaskDescription>
          <Table tableData={selectedTask.tableData} />
          <div className="flex flex-col items-center space-y-4">
            <TrainerSubtaskDescription>
              Markieren Sie alle Spalten die die erste Normalform verletzen!
            </TrainerSubtaskDescription>

            {/* Task-specific response handler */}
            <div className="p-4 border shadow-md">
              <h1 className="font-bold">Spalten</h1>
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

            {/* Solution container */}
            {isCorrect !== undefined && (
              <SampleSolution onClick={() => setCanNavigate(true)}>
                {selectedTask.violatingColumns.join(', ')}
              </SampleSolution>
            )}

            {/* Feedback */}
            {isCorrect !== undefined && (
              <FeedbackElement isCorrect={isCorrect} />
            )}
          </div>

          {/* Navigation */}
          <PrevNextNavigation
            prev={`/trainer/firstNormalForm`}
            next={`/trainer/functionalDependencies`}
            nextIsEnabled={canNavigate}
          />
        </div>
      )}
    </>
  )
}

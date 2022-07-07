import React, { useEffect, useState } from 'react'
import FunctionalDependencyHandler from '../UI/FunctionalDependencyHandler'
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

export default function FunctionalDependencyTypes({
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

  // Component State
  const [selectedTypes, setSelectedTypes] = useState(
    Array(selectedTask?.functionalDependencies.length || 0).fill('voll')
  )

  const [isCorrect, setIsCorrect] = useState<boolean | undefined>()
  const [canNavigate, setCanNavigate] = useState(false)

  function evaluateEntries(): boolean {
    if (!selectedTask) return false

    for (const index in selectedTask.functionalDependencies) {
      if (
        selectedTask.functionalDependencies[index].type !== selectedTypes[index]
      )
        return false
    }
    return true
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
          <TrainerHeader>Typen der funktionalen Abhängigkeiten</TrainerHeader>
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
              Wählen Sie den jeweiligen Typ der funktionalen Abhängigkeiten aus!
            </TrainerSubtaskDescription>

            {/* Task-specific response handler */}
            <FunctionalDependencyHandler
              functionalDependencies={selectedTask.functionalDependencies}
              selectedTypes={selectedTypes}
              setSelectedTypes={setSelectedTypes}
              disabled={canNavigate}
            />
            <button
              className="px-3 py-1.5 bg-th-red hover:bg-red-600 text-white text-lg font-semibold border shadow-md rounded-md cursor-pointer block mx-auto"
              onClick={() => handleSubmit()}
            >
              Auswerten
            </button>

            {/* Feedback */}
            {isCorrect !== undefined && (
              <FeedbackElement isCorrect={isCorrect} />
            )}

            <HintContainer
              functionalDependencies={selectedTask.functionalDependencies}
              primaryKeys={selectedTask.primaryKeys}
            />

            {/* Solution container */}
            {isCorrect !== undefined && (
              <SampleSolution onClick={() => setCanNavigate(true)}>
                {selectedTask.functionalDependencies.map((dependency, index) => {
                  const dependencyString = `${dependency.primaryKeys.join(
                    ', '
                  )} ➔ ${dependency.columns.join(', ')} : ${dependency.type}`
                  return <p key={index}>{dependencyString}</p>
                })}
              </SampleSolution>
            )}
          </div>

          {/* Navigation */}
          <PrevNextNavigation
            prev={`/trainer/primaryKeys`}
            next={`/trainer/secondNormalForm`}
            nextIsEnabled={canNavigate}
          />
        </div>
      )}
    </>
  )
}

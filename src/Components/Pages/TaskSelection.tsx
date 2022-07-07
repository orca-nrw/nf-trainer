import React, { useEffect } from 'react'
import TrainerHeader from '../UI/TrainerHeader'
import TaskGridElement from '../UI/TaskGridElement'
import { useFetch } from '../../utils/useFetch'
import { useNavigate } from 'react-router-dom'

interface Props {
  selectedTaskFileName: string
  setSelectedTaskFileName: (fileName: string) => void
}

interface TaskSettings {
  selectedTasks: {
    title: string
    fileName: string
  }[]
}

export default function TaskSelection({
  selectedTaskFileName,
  setSelectedTaskFileName,
}: Props) {
  const navigate = useNavigate()
  const { response: taskSettings, isLoading } = useFetch<TaskSettings>(
    './taskSettings.json'
  )

  function handleTaskSelection(fileName: string) {
    setSelectedTaskFileName(fileName)
  }

  // Reset selectedFileName to avoid instant navigation
  useEffect(() => {
    setSelectedTaskFileName('')
  })

  // Navigate once the filename has been set
  useEffect(() => {
    if (selectedTaskFileName) {
      navigate('/trainer/firstNormalForm')
    }
  }, [selectedTaskFileName])

  return (
    <div className="space-y-8 mb-8">
      <TrainerHeader hideExplanationsModal={true}>
        Aufgabenauswahl
      </TrainerHeader>
      {isLoading || !taskSettings ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          {taskSettings.selectedTasks.map((task, idx) => {
            return (
              <TaskGridElement
                key={idx}
                title={task.title}
                index={idx + 1}
                onClick={() => handleTaskSelection(task.fileName)}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

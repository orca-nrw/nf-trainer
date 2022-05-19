import React from 'react'
import TrainerHeader from '../UI/TrainerHeader'
import TaskGridElement from '../UI/TaskGridElement'
import tasks from '../../Tasks'

export default function TaskSelection() {
  return (
    <div className="space-y-8 mb-8">
      <TrainerHeader hideExplanationsModal={true}>
        Aufgabenauswahl
      </TrainerHeader>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
        {tasks.map((task) => {
          return <TaskGridElement key={task.id} task={task} />
        })}
      </div>
    </div>
  )
}

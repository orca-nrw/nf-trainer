import React from 'react'
import TaskGridElement from '../Subcomponents/TaskGridElement'
import tasks from '../../data'

export default function TaskSelection () {
  return (
    <div>
      <h1>Task Selection</h1>
      <div className="grid grid-cols-2 gap-4">
        {tasks.map(task => {
          return <TaskGridElement key={task.id} task={task} />
        })}
      </div>
    </div>
  )
}

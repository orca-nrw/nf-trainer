import React from 'react'
import TaskBlock from '../Subcomponents/TaskBlock'

export default function TaskSelection () {
  return (
    <div>
      <h1>Task Selection</h1>
      <div className="grid grid-cols-2 gap-4">
        {['1', '2', '3', '4'].map(x => {
          return <TaskBlock key={x} taskId={x} />
        })}
      </div>
    </div>
  )
}

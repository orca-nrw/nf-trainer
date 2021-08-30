import React from 'react'
import { Link } from 'react-router-dom'
import { Task } from '../../types/task'

export default function TaskGridElement ({ task }: PropTypes) {
  return (
    <div className="bg-gray-300 border border-gray-400 rounded-sm">
      <h1>Task {task.id}</h1>
      <p>
        {task.description}
      </p>
      <Link to={`/tasks/${task.id}/firstNormalForm`}>
        <button type="button" className="px-2 py-1 bg-purple-500 hover:bg-purple-600 text-white text-lg rounded-md cursor-pointer">Begin</button>
      </Link>
    </div>
  )
}

interface PropTypes {
  task: Task
}

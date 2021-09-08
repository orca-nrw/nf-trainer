import React from 'react'
import { Link } from 'react-router-dom'
import { Task } from '../../types/global'

export default function TaskGridElement ({ task }: PropTypes) {
  return (
    <div className="p-4 bg-gray-300 border border-gray-400 rounded-sm">
      <h1 className="font-bold">Aufgabe {task.id}</h1>
      <p>
        {task.description}
      </p>
      <Link to={`/tasks/${task.id}/firstNormalForm`}>
        <button type="button" className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white text-lg rounded-md cursor-pointer">Begin</button>
      </Link>
    </div>
  )
}

interface PropTypes {
  task: Task
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function TaskGridElement ({ task }: PropTypes) {
  return (
    <div className="p-4 bg-gray-100 rounded-lg text-center">
      <h1 className="font-bold mb-2">Aufgabe {task.id}</h1>
      <p>
        {task.title}
      </p>
      <Link to={`/tasks/${task.id}/firstNormalForm`}>
        <button type="button" className="mt-4 px-4 py-1 bg-th-red hover:bg-red-600 text-white font-semibold rounded-md cursor-pointer">Begin</button>
      </Link>
    </div>
  )
}

interface PropTypes {
  task: {
    id: number,
    title: string
  }
}

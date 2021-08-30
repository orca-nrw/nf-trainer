import React from 'react'
import { Link } from 'react-router-dom'

export default function TaskBlock ({ taskId }: PropTypes) {
  return (
    <div className="bg-gray-300 border border-gray-400 rounded-sm">
      <h1>Task {taskId}</h1>
      <p>Content content content</p>
      <Link to={`/tasks/${taskId}/firstNormalForm`}>
        <button type="button" className="px-2 py-1 bg-purple-500 hover:bg-purple-600 text-white text-lg rounded-md cursor-pointer">Begin</button>
      </Link>
    </div>
  )
}

interface PropTypes {
  taskId: string
}

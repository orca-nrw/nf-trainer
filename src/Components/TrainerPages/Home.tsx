import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <>
      <h1>Home</h1>
      <Link to="/tasks">
        <button className="px-2 py-1 bg-purple-500 hover:bg-purple-600 text-white text-lg rounded-md cursor-pointer" type="button">
          Begin
        </button>
      </Link>
    </>
  )
}

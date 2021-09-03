import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import tasks from '../../data'
import BooleanResponseHandler from '../Subcomponents/BooleanResponseHandler'
import Table from '../Subcomponents/Table'

export default function FirstNormalForm () {
  // Get task from url param
  const { id } = useParams<ParamTypes>()
  const task = tasks.find(task => task.id === Number(id))

  // Redirect to index if there is no task with the given id
  if (!task) return <Redirect to="/" />

  return (
    <>
    <div className="space-y-4">
      <h1 className="font-bold text-xl">Erste Normalform</h1>
      <p>{task.description}</p>
      <Table tableData={task.tableData}/>
      <p className="text-center">Befindet sich die Tabelle in der ersten Normalform?</p>
      <BooleanResponseHandler isCorrect={true} redirectTo="/" />
    </div>
    </>
  )
}

interface ParamTypes {
  id: string
}

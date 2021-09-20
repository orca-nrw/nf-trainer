import React from 'react'
import { Redirect, useParams } from 'react-router'
import tasks from '../../data'
import AssociationResponseHandler from '../Subcomponents/AssociationResponseHandler'
import Table from '../Subcomponents/Table'

interface ParamTypes {
  id: string
}

export default function ThirdNormalForm () {
  // Get task from url param
  const { id } = useParams<ParamTypes>()
  const task = tasks.find(task => task.id === Number(id))

  // Redirect to index if there is no task with the given id
  if (!task) return <Redirect to="/" />

  // Task Variables
  const taskKeys = Object.keys(task.tableData[0])
  const associations = task.thirdNormalForm

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-xl">Dritte Normalform</h1>
      <p>{task.description}</p>
      <Table tableData={task.tableData} />
      <p className="text-center">Bringen Sie das Schema in die dritte Normalform!</p>
      <AssociationResponseHandler keys={taskKeys} associationsSolutions={associations} redirectTo={`/task/${id}/thirdNormalForm`} />
    </div>
  )
}

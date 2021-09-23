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
  const nextPage = task.hasViolatingColumns ? `/tasks/${id}/violatingColumns` : `/tasks/${id}/functionalDependencies`

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-xl">Erste Normalform</h1>
      <p>{task.description}</p>
      <Table tableData={task.tableData}/>
      <div className="flex flex-col items-center space-y-4">
        <p>Befindet sich die Tabelle in der ersten Normalform?</p>
        <SampleSolution >
            {task.hasViolatingColumns ? <p>Nein</p> : <p>Ja</p>}
        </SampleSolution>
      </div>
    </div>
  )
}

interface ParamTypes {
  id: string
}

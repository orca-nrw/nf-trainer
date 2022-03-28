import React, { useState } from 'react'
import tasks from '../../Tasks'
import { Redirect, useParams } from 'react-router-dom'
import Table from '../UI/Table'
import AssociationResponseHandler from '../UI/AssociationResponseHandler'
import SampleSolution from '../UI/SampleSolution'
import PrevNextNavigation from '../UI/PrevNextNavigation'
import TrainerHeader from '../UI/TrainerHeader'
import TrainerTaskDescription from '../UI/TrainerTaskDescription'
import TrainerSubtaskDescription from '../UI/TrainerSubtaskDescription'

export default function FunctionalDependencies () {
  // Get task from url param
  const { id } = useParams<ParamTypes>()
  const task = tasks.find(task => task.id === Number(id))
  const tableData = task?.hasViolatingColumns ? task?.firstNormalFormTableData : task?.tableData

  // Throw error and redirect back if an error occurs
  if (!tableData) {
    console.error('No suitable tableData found!')
    return <Redirect to="/" />
  }

  // Redirect to index if there is no task with the given id
  if (!task) return <Redirect to="/" />

  const [message, setMessage] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)

  const taskKeys = Object.keys(task.tableData[0])
  const functionalDependencies = task.functionalDependencies

  function handleResponse (response: boolean) {
    if (response) {
      setMessage('Korrekt!')
      setIsEnabled(true)
    } else {
      setMessage('Leider falsch!')
    }
  }

  return (
    <div className="space-y-4">
      <TrainerHeader>Funktionale Abhängigkeiten</TrainerHeader>
      <TrainerTaskDescription>{task.description}</TrainerTaskDescription>
      <Table tableData={tableData}/>
      <TrainerSubtaskDescription>Bestimmen Sie alle funktionalen Abhängigkeiten, indem Sie auf die entsprechenden Spalten (Primärschlüssel und abhängige Spalten) klicken!</TrainerSubtaskDescription>
      <AssociationResponseHandler keys={taskKeys} associationsSolutions={functionalDependencies} responseHandler={handleResponse} />
      <SampleSolution >
        {functionalDependencies.map((dependency, index) => {
          const dependencyString = `${dependency.primaryKeys.join(', ')} ➔ ${dependency.columns.join(', ')}`
          return <p key={index}>{dependencyString}</p>
        })}
      </SampleSolution>
      <p className="text-l font-bold text-center">{message}</p>
      <PrevNextNavigation prev={`/tasks/${id}/firstNormalForm`} next={`/tasks/${id}/primaryKeys`} nextIsEnabled={isEnabled} />
    </div>
  )
}

interface ParamTypes {
  id: string
}

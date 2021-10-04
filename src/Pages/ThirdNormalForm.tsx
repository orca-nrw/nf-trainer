import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router'
import AssociationResponseHandler from '../Components/AssociationResponseHandler'
import PrevNextNavigation from '../Components/PrevNextNavigation'
import SampleSolution from '../Components/SampleSolution'
import TableGrid from '../Components/TableGrid'
import tasks from '../Tasks'

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
  const associations = task.thirdNormalFormSolutions

  const [message, setMessage] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)

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
      <h1 className="font-bold text-xl">Dritte Normalform</h1>
      <pre className="font-sans">{task.description}</pre>
      <TableGrid gridData={task.secondFormTableData} />
      <p className="text-center">Bringen Sie das Schema in die dritte Normalform!</p>
      <AssociationResponseHandler keys={taskKeys} associationsSolutions={associations} responseHandler={handleResponse} />
      <SampleSolution >
          {task.thirdNormalFormSolutions.map((dependency, index) => {
            const dependencyString = `${dependency.primaryKeys.join(', ')} -> ${dependency.columns.join(', ')}`
            return <p key={index}>{dependencyString}</p>
          })}
      </SampleSolution>
      <p className="text-l font-bold text-center">{message}</p>
      <PrevNextNavigation prev={`/tasks/${id}/secondNormalForm`} next={'/done'} nextIsEnabled={isEnabled} />
    </div>
  )
}

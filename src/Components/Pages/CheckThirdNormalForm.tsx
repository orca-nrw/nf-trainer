import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router'
import BooleanResponseHandler from '../UI/BooleanResponseHandler'
import HintContainer from '../UI/HintContainer'
import PrevNextNavigation from '../UI/PrevNextNavigation'
import SampleSolution from '../UI/SampleSolution'
import TableGrid from '../UI/TableGrid'
import TrainerHeader from '../UI/TrainerHeader'
import TrainerSubtaskDescription from '../UI/TrainerSubtaskDescription'
import TrainerTaskDescription from '../UI/TrainerTaskDescription'
import tasks from '../../Tasks'

interface ParamTypes {
  id: string
}

export default function CheckThirdNormalForm () {
  // Get task from url param
  const { id } = useParams<ParamTypes>()
  const task = tasks.find(task => task.id === Number(id))

  // Redirect to index if there is no task with the given id
  if (!task) return <Redirect to="/" />
  const nextPage = task.alreadyThirdNormalForm ? '/done' : `/tasks/${id}/thirdNormalForm`

  const [message, setMessage] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)

  function handleResponse (response: boolean) {
    if (response === task?.alreadyThirdNormalForm) {
      setMessage('Korrekt!')
      setIsEnabled(true)
    } else {
      setMessage('Leider falsch!')
    }
  }

  return (
    <div className="space-y-4">
      <TrainerHeader>Dritte Normalform</TrainerHeader>
      <TrainerTaskDescription>{task.description}</TrainerTaskDescription>
      <TableGrid gridData={task.secondFormTableData} />
      <TrainerSubtaskDescription>Befindet sich die Tabelle nun bereits in der dritten Normalform?</TrainerSubtaskDescription>
      <BooleanResponseHandler responseHandler={handleResponse} />
      <HintContainer functionalDependencies={task.functionalDependencies} primaryKeys={task.primaryKeys} />
      <SampleSolution >
        {task.alreadyThirdNormalForm ? <p>Ja</p> : <p>Nein</p>}
      </SampleSolution>
      <p className="text-l font-bold text-center">{message}</p>
      <PrevNextNavigation prev={`/tasks/${id}/secondNormalForm`} next={nextPage} nextIsEnabled={isEnabled} />
    </div>
  )
}

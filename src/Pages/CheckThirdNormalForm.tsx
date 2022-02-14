import React, { useState } from 'react'
import { Redirect, useParams } from 'react-router'
import BooleanResponseHandler from '../Components/TrainerComponents/BooleanResponseHandler'
import HintContainer from '../Components/TrainerComponents/HintContainer'
import PrevNextNavigation from '../Components/TrainerComponents/PrevNextNavigation'
import SampleSolution from '../Components/TrainerComponents/SampleSolution'
import TableGrid from '../Components/TrainerComponents/TableGrid'
import TrainerHeader from '../Components/UI/TrainerHeader'
import TrainerSubtaskDescription from '../Components/UI/TrainerSubtaskDescription'
import TrainerTaskDescription from '../Components/UI/TrainerTaskDescription'
import tasks from '../Tasks'

interface ParamTypes {
  id: string
}

export default function CheckThirdNormalForm () {
  // Get task from url param
  const { id } = useParams<ParamTypes>()
  const task = tasks.find(task => task.id === Number(id))

  // Redirect to index if there is no task with the given id
  if (!task) return <Redirect to="/" />
  const nextPage = task.alreadyThirdNormalForm ? `/tasks/${id}/done` : `/tasks/${id}/thirdNormalForm`

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

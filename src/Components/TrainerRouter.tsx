import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Task } from '../Types/Task'
import { useFetch } from '../utils/useFetch'
import CheckThirdNormalForm from './Pages/CheckThirdNormalForm'
import Done from './Pages/Done'
import FirstNormalForm from './Pages/FirstNormalForm'
import FunctionalDependencies from './Pages/FunctionalDependencies'
import FunctionalDependencyTypes from './Pages/FunctionalDependencyTypes'
import PrimaryKeys from './Pages/PrimaryKeys'
import SecondNormalForm from './Pages/SecondNormalForm'
import TaskSelection from './Pages/TaskSelection'
import ThirdNormalForm from './Pages/ThirdNormalForm'
import ViolatingColumns from './Pages/ViolatingColumns'

export default function TrainerRouter() {
  const [selectedTaskFileName, setSelectedTaskFileName] = useState('')
  const { response: selectedTask, isLoading } = useFetch<Task>(
    `./tasks/${selectedTaskFileName}.json`
  )

  return (
    <Routes>
      <Route
        index
        element={
          <TaskSelection
            selectedTaskFileName={selectedTaskFileName}
            setSelectedTaskFileName={setSelectedTaskFileName}
          />
        }
      />
      <Route
        path="/firstNormalForm"
        element={
          <FirstNormalForm selectedTask={selectedTask} isLoading={isLoading} />
        }
      />
      <Route
        path="/violatingColumns"
        element={
          <ViolatingColumns selectedTask={selectedTask} isLoading={isLoading} />
        }
      />
      <Route
        path="/functionalDependencies"
        element={
          <FunctionalDependencies
            selectedTask={selectedTask}
            isLoading={isLoading}
          />
        }
      />
      <Route
        path="/primaryKeys"
        element={
          <PrimaryKeys selectedTask={selectedTask} isLoading={isLoading} />
        }
      />
      <Route
        path="/functionalDependencyTypes"
        element={
          <FunctionalDependencyTypes
            selectedTask={selectedTask}
            isLoading={isLoading}
          />
        }
      />
      <Route
        path="/secondNormalForm"
        element={
          <SecondNormalForm selectedTask={selectedTask} isLoading={isLoading} />
        }
      />
      <Route
        path="/checkThirdNormalForm"
        element={
          <CheckThirdNormalForm
            selectedTask={selectedTask}
            isLoading={isLoading}
          />
        }
      />
      <Route
        path="/thirdNormalForm"
        element={
          <ThirdNormalForm selectedTask={selectedTask} isLoading={isLoading} />
        }
      />
      <Route path="/done" element={<Done />} />
    </Routes>
  )
}

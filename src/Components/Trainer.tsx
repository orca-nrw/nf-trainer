import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './TrainerPages/Home'
import TaskSelection from './TrainerPages/TaskSelection'
import FirstNormalForm from './TrainerPages/FirstNormalForm'
import ViolatingColumns from './TrainerPages/ViolatingColumns'
import FunctionalDependencies from './TrainerPages/FunctionalDependencies'
import PrimaryKeys from './TrainerPages/PrimaryKeys'
import FunctionalDependencyTypes from './TrainerPages/FunctionalDependencyTypes'
import SecondNormalForm from './TrainerPages/SecondNormalForm'
import ThirdNormalForm from './TrainerPages/ThirdNormalForm'

export default function Trainer () {
  return (
    <>
      <div className="bg-white p-4">
        <Link className="no-underline text-black text-4xl font-semibold font-mono" to="/">NF-Trainer</Link>
      </div>
      <div className="bg-white p-4">
      <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/tasks">
            <TaskSelection />
          </Route>
          <Route path="/tasks/:id/firstNormalForm">
            <FirstNormalForm />
          </Route>
          <Route path="/tasks/:id/violatingColumns">
            <ViolatingColumns />
          </Route>
          <Route path="/tasks/:id/functionalDependencies">
            <FunctionalDependencies />
          </Route>
          <Route path="/tasks/:id/primaryKeys">
            <PrimaryKeys />
          </Route>
          <Route path="/tasks/:id/functionalDependencyTypes">
            <FunctionalDependencyTypes />
          </Route>
          <Route path="/tasks/:id/secondNormalForm">
            <SecondNormalForm />
          </Route>
          <Route path="/tasks/:id/thirdNormalForm">
            <ThirdNormalForm />
          </Route>
        </Switch>
      </div>
    </>
  )
}

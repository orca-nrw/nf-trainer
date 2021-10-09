import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Done from '../Pages/Done'
import FirstNormalForm from '../Pages/FirstNormalForm'
import FunctionalDependencies from '../Pages/FunctionalDependencies'
import FunctionalDependencyTypes from '../Pages/FunctionalDependencyTypes'
import Home from '../Pages/Home'
import PrimaryKeys from '../Pages/PrimaryKeys'
import SecondNormalForm from '../Pages/SecondNormalForm'
import TaskSelection from '../Pages/TaskSelection'
import ThirdNormalForm from '../Pages/ThirdNormalForm'
import ViolatingColumns from '../Pages/ViolatingColumns'

export default function TrainerRouter () {
  return (
    <>
      <div className="bg-white p-4">
        <Link className="no-underline text-black text-4xl font-semibold font-mono" to="/">NF-Trainer</Link>
      </div>
      <div className="bg-white p-6">
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
          <Route path="/done">
            <Done />
          </Route>
        </Switch>
      </div>
    </>
  )
}

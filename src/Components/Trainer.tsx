import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './TrainerPages/Home'
import TaskSelection from './TrainerPages/TaskSelection'
import FirstNormalForm from './TrainerPages/FirstNormalForm'

export default function Trainer () {
  return (
    <>
      <div className="bg-white p-4">
        <Link to="/">
          <h1 className="text-4xl font-mono">NF-Trainer</h1>
        </Link>
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
          {/* <Route path="/violatingColumns">
            <ViolatingColumns />
          </Route>
          <Route path="/functionalDependencies">
            <FunctionalDependencies />
          </Route>
          <Route path="/primaryKeys">
            <PrimaryKeys />
          </Route>
          <Route path="/functionalDependencyTypes">
            <FunctionalDependencyTypes />
          </Route>
          <Route path="/secondNormalForm">
            <SecondNormalForm />
          </Route>
          <Route path="/thirdNormalForm">
            <ThirdNormalForm />
          </Route> */}
        </Switch>
      </div>
    </>
  )
}

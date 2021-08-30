import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './TrainerPages/Home'
import FirstNormalForm from './TrainerPages/FirstNormalForm'
import TaskSelection from './TrainerPages/TaskSelection'

export default function Trainer () {
  return (
    <div className="bg-white p-4">
      <h1 className="text-4xl font-mono">NF-Trainer</h1>
      <Router basename="/">
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
      </Router>
    </div>
  )
}

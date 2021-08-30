import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './TrainerPages/Home'
import Tasks from './TrainerPages/Tasks'

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
          <Route path="/tasks">
            <Tasks />
          </Route>
        </Switch>
      </div>
    </>
  )
}

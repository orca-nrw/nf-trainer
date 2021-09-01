import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import FirstNormalForm from './FirstNormalForm'
import TaskSelection from './TaskSelection'

export default function Tasks () {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path}>
        <TaskSelection />
      </Route>
      <Route path={`${path}/:id/firstNormalForm`}>
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
  )
}

import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MainLayout from 'app/layouts/MainLayout'

const Home = lazy(() => import('app/domains/Home'))
const Posts = lazy(() => import('app/domains/Posts'))
const Albums = lazy(() => import('app/domains/Albums'))
const Users = lazy(() => import('app/domains/Users'))
const Todos = lazy(() => import('app/domains/Todos'))

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/albums" component={Albums} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/" component={Home} />
        </Suspense>
      </Switch>
    </MainLayout>
  </Router>
)

export default Routes

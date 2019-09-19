import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic'
import LoginPage from './pages/login/index.jsx'

function RouterConfig({ history, app }) {
  const LoginPage = dynamic({
      app,
      component: () => import('./pages/login/index.jsx')
  })
  return (
      <Router history={history}>
          <Switch>
              <Route path="/" exact component={LoginPage} />
          </Switch>
      </Router>
  )
}
export default RouterConfig


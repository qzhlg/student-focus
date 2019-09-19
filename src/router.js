import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexVisual from './pages/visual/indexVisual';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexVisual} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

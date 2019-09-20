import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexVisual from './pages/visual/indexVisual';
import President from './pages/president/indexPresident'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={President} />
        <Route path="/" exact component={IndexVisual} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

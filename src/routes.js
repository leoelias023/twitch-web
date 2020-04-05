import React from 'react';

import { Switch, Route } from 'react-router-dom';

// Pages
import Main from './pages/main/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <h1>About section</h1>
      </Route>
      <Route path="/" exact>
        <Main />
      </Route>
    </Switch>
  );
}

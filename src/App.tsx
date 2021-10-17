import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import User from './components/user';
import Landing from './pages/landing';
import Activities from './pages/activities';

const App = () => {
  
  return (
    <Router>
      <User />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/activities">
          <Activities />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
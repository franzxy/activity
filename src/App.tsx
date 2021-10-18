import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from './services/firebase';
import Landing from './pages/landing';
import Activities from './pages/activities';
import Navigation from './components/navigation';
import Loading from './components/loading';

const App = () => {
  
  const [user, loading, error] = useAuthState(auth);

  return (
    <Router>
      <Navigation />
      <div className="content">
        {user && <Redirect to="/activities" />}
        <Switch>
          {loading && <Loading />}
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/activities">
            {user ? <Activities /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
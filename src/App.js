import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Admin from './components/Admin';
import Logout from './components/Logout';
import Login from './components/Login';
import Protected from './components/Protected';

function App() {
  return (
    <div className="h-100">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Admin">
            <Admin />
          </Route>
          <Route exact path="/Logout" >
            <Logout/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

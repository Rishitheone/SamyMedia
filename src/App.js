import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Admin from './components/Admin/Admin';
import Login from './components/Login';


function App() {
  return (
    <div className="h-100">
      <nav className="NavTop">
        <img src="https://delivery.samydigital.com/Logo/Logo+AI+Black.png" width="200px" />
      </nav>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Admin">
            <Admin />
          </Route>
        </Switch>
    </div>
  );
}

export default App;

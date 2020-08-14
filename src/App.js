import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Admin from './components/Admin/Admin';
import Login from './components/Login';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  logoutHandler = () => {
    localStorage.removeItem('auth')
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="h-100">
            <nav className="NavTop">
              <img src="https://delivery.samydigital.com/Logo/Logo+AI+Black.png" width="200px" />
            </nav>
            <Route exact path="/" component={Login} />
            <Route path="/Admin" component={Admin} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

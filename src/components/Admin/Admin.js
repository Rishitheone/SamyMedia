import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Showcase from './Showcase/Showcase';
import Project from './Project/Project';
import Finance from './Finance/Finance';
import Client from './client/Client';
import Account from './Account/Account';
import Logout from '../../components/Logout';

export default class Admin extends Component {

  constructor() {

    super()
  }

  render() {
    return (
      <div>
        <Router>
          <div className="row m-0 p-0 mt-4">
            <div className="col-md-3"></div>
            <div className="col-md-6 p-3 navtabs">
              <NavLink to="/Admin/Showcase">Showcase</NavLink>
              <NavLink to="/Admin/Project">Project</NavLink>
              <NavLink to="/Admin/Client">Client</NavLink>
              <NavLink to="/Admin/Account">Account</NavLink>
              <NavLink to="/Admin/Finance">Finance</NavLink>
              {/* <NavLink to="/Logout">Logout</NavLink> */}
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-md-3"></div>
            <div className="col-md-6 p-3 navtabs">
              <Switch>
                <Route path="/Logout" >
                  <Logout />
                </Route>
                <Route path="/Admin/Showcase" >
                  <Showcase />
                </Route>
                <Route path="/Admin/Project" >
                  <Project />
                </Route>
                <Route path="/Admin/Finance" >
                  <Finance />
                </Route>
                <Route path="/Admin/Client" >
                  <Client />
                </Route>
                <Route path="/Admin/Account" >
                  <Account />
                </Route>
              </Switch>
            </div>
            <div className="col-md-3"></div>
          </div>
        </Router>
      </div>
    )
  }
}

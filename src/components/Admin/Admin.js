import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Showcase from './Showcase/Showcase';
import Project from './Project/Project';
import Finance from './Finance/Finance';
import Client from './client/Client';
import Account from './Account/Account';

export default class Admin extends Component {

  constructor() {

    super()
  }

  render() {
    return (
      <div>
          <div className="row m-0 p-0 mt-4">
            <div className="col-md-3"></div>
            <div className="col-md-6 pt-3 pr-0 pl-0 navtabs">
              <NavLink to="/Admin/Showcase">Showcase</NavLink>
              <NavLink to="/Admin/Client">Client</NavLink>
              <NavLink to="/Admin/Project">Project</NavLink>
              <NavLink to="/Admin/Finance">Finance</NavLink>
              <NavLink to="/Admin/Account">Account</NavLink>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-md-3"></div>
            <div className="col-md-6 p-3 navtabs">
                <Route path="/Admin/Showcase" component={Showcase} />
                <Route path="/Admin/Project" component={Project} />
                <Route path="/Admin/Finance"  component={Finance} />
                <Route path="/Admin/Client" component={Client} />
                <Route path="/Admin/Account" component={Account} />
            </div>
            <div className="col-md-3"></div>
          </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import edit from '../../../Assets/icons/Icon feather-edit-3.svg';
import deleted from '../../../Assets/icons/Icon material-delete-forever.svg'
import '../client/Client.css'

class Client extends Component {
    render() {
        return (
            <div>
            <p className="p-2 top-text">As we believe in Transparency and Legitimacy, we designed and developed this console, to help you
            Track your Project Status, Billing, Payment Dues and Confidential Documents regarding the Project
            In One Place.
            </p>
            <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control" placeholder="Search" />
            </div>
            <div className="card-sh row p-0 m-0">
              <div className="col-3 p-0">
                  <img className="img-fluids p-2" src="https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=767&q=80" alt=""></img>
              </div>
              <div className="col-7 d-flex pl-3 m-auto">
                  <div className="p-4">
                  <p className="title">Client</p>
                  <p className="Sub-title  text-mute">Alex</p>
                  </div>
                  <div className="p-4">
                  <p className="title">Client Id</p>
                  <p className="Sub-title  text-mute">AL4246</p>
                  </div>
                  <div className="p-4">
                  <p className="title">Date Added</p>
                  <p className="Sub-title text-mute">22nd June 2020</p>
                  </div>
              </div>
              <div className="col-2 p-0 d-flex">
                  <div className="w-50 bg-edit d-flex align-items-center justify-content-center">
                      <img src={edit} alt="edit" />
                  </div>
                  <div className="w-50 bg-delete d-flex align-items-center justify-content-center">
                  <img src={deleted} alt="delete" />
                  </div>
              </div>
            </div>
            </div>
        );
    }
}

export default Client;
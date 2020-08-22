import React, { Component } from "react";
import "../Account/Account.css";

class Account extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <p className="top-text">
            As we believe in Transparency and Legitimacy, we designed and
            developed this console, to help you Track your Project Status,
            Billing, Payment Dues and Confidential Documents regarding the
            Project In One Place.
          </p>

          <div className="card-header">
            <p className="heading">Basic Information</p>
          </div>
          <br />
          <div className="card-header">
            <p className="heading">Change Password</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;

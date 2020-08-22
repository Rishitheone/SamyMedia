import React, { Component } from "react";
import "../Finance/Finance.css";
import edit from "../../../Assets/icons/Icon feather-edit-3.svg";
import deleted from "../../../Assets/icons/Icon material-delete-forever.svg";

class Finance extends Component {
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
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="text" className="form-control" placeholder="Search" />
          </div>

          <div id="accordion">
            <div
              className="card card-link"
              data-toggle="collapse"
              href="#collapseOne"
            >
              <div className="card-header">
                <div className="row">
                  <div className="col-md-10">
                    <h4 className="heading">Payment 1: 50000</h4>
                    <table className="table table-borderless">
                      <tr>
                        <th>Project ID </th>
                        <th>Client ID</th>
                        <th>Date Added</th>
                      </tr>
                      <tr>
                        <td>A23456 </td>
                        <td>A42526 </td>
                        <td>22nd June 2020</td>
                      </tr>
                    </table>
                  </div>
                  <div className="col-2 p-0 d-flex edit-delete">
                    <div className="w-50 bg-edit d-flex align-items-center justify-content-center ">
                      <img src={edit} alt="edit" />
                    </div>
                    <div className="w-50 bg-delete d-flex align-items-center justify-content-center">
                      <img src={deleted} alt="delete" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card card-link"
              data-toggle="collapse"
              href="#collapsetwo"
            >
              <div className="card-header">
                <div className="row">
                  <div className="col-md-10">
                    <h4 className="heading">Payment 2: 562526</h4>
                    <table className="table table-borderless">
                      <tr>
                        <th>Project ID </th>
                        <th>Client ID</th>
                        <th>Date Added</th>
                      </tr>
                      <tr>
                        <td>A23456 </td>
                        <td>A42526 </td>
                        <td>22nd June 2020</td>
                      </tr>
                    </table>
                  </div>
                  <div className="col-2 p-0 d-flex edit-delete">
                    <div className="w-50 bg-edit d-flex align-items-center justify-content-center ">
                      <img src={edit} alt="edit" />
                    </div>
                    <div className="w-50 bg-delete d-flex align-items-center justify-content-center">
                      <img src={deleted} alt="delete" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card card-link"
              data-toggle="collapse"
              href="#collapsethree"
            >
              <div className="card-header">
                <div className="row">
                  <div className="col-md-10">
                    <h4 className="heading">Payment 3: 536367</h4>
                    <table className="table table-borderless">
                      <tr>
                        <th>Project ID </th>
                        <th>Client ID</th>
                        <th>Date Added</th>
                      </tr>
                      <tr>
                        <td>A23456 </td>
                        <td>A42526 </td>
                        <td>22nd June 2020</td>
                      </tr>
                    </table>
                  </div>
                  <div className="col-2 p-0 d-flex edit-delete">
                    <div className="w-50 bg-edit d-flex align-items-center justify-content-center ">
                      <img src={edit} alt="edit" />
                    </div>
                    <div className="w-50 bg-delete d-flex align-items-center justify-content-center">
                      <img src={deleted} alt="delete" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Finance;

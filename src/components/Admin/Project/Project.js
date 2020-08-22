import React, { Component } from "react";
import "../Project/Project.css";
import edit from "../../../Assets/icons/Icon feather-edit-3.svg";
import deleted from "../../../Assets/icons/Icon material-delete-forever.svg";
import download from "../../../Assets/icons/Download.svg";

class Project extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <p class="top-text">
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
              class="card card-link"
              data-toggle="collapse"
              href="#collapseOne"
            >
              <div class="card-header">
                <div class="row">
                  <div class="col-md-10">
                    <h4 class="heading">Project 01: Business Transformation</h4>
                    <table class="table table-borderless">
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
              <div
                id="collapseOne"
                class="collapse show"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <h6 class="heading-body">Summary</h6>
                  <p class="para1-body">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod temporundefined
                  </p>
                  <h6 class="heading-body">Description</h6>
                  <p class="para2-body">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit ametundefined
                  </p>

                  <div class="drag-to-download"></div>

                  <br />
                  <table class="table" id="table2">
                    <thead class="thead-dark">
                      <tr>
                        <th>File Name</th>
                        <th>Type </th>
                        <th>Size </th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Scope of Work</td>
                        <td>Pdf</td>
                        <td>2.5 MB</td>
                        <td className=" p-0 d-flex download-delete">
                    <div className="w-50 bg-edit d-flex align-items-center justify-content-center ">
                      <img src={download} alt="download" />
                    </div>
                    <div className="w-50 bg-delete d-flex align-items-center justify-content-center">
                      <img src={deleted} alt="delete" />
                    </div>
                 
                        </td>
                      </tr>

                      <tr>
                        <td>Scope of Work</td>
                        <td>Pdf</td>
                        <td>2.5 MB</td>
                        <td className=" p-0 d-flex download-delete">
                    <div className="w-50 bg-edit d-flex align-items-center justify-content-center ">
                      <img src={download} alt="download" />
                    </div>
                    <div className="w-50 bg-delete d-flex align-items-center justify-content-center">
                      <img src={deleted} alt="delete" />
                    </div>
                 
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div
              class="card card-link"
              data-toggle="collapse"
              href="#collapsetwo"
            >
              <div class="card-header">
                <div class="row">
                  <div class="col-md-10">
                    <h4 class="heading">Project 02: Business Transformation</h4>
                    <table class="table table-borderless">
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
              <div id="collapsetwo" class="collapse" data-parent="#accordion">
                <div class="card-body">
                  <h6 class="heading-body">Summary</h6>
                  <p class="para1-body">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod temporundefined
                  </p>
                  <h6 class="heading-body">Description</h6>
                  <p class="para2-body">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit ametundefined
                  </p>

                  <div class="drag-to-download"></div>

                  <br />
                  <table class="table" id="table2">
                    <thead class="thead-dark">
                      <tr>
                        <th>File Name</th>
                        <th>Type </th>
                        <th>Size </th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Scope of Work</td>
                        <td>Pdf</td>
                        <td>2.5 MB</td>
                        <td className=" p-0 d-flex download-delete">
                    <div className="w-50 bg-edit d-flex align-items-center justify-content-center ">
                      <img src={download} alt="download" />
                    </div>
                    <div className="w-50 bg-delete d-flex align-items-center justify-content-center">
                      <img src={deleted} alt="delete" />
                    </div>
                 
                        </td>
                      </tr>

                      <tr>
                        <td>Scope of Work</td>
                        <td>Pdf</td>
                        <td>2.5 MB</td>
                        <td className=" p-0 d-flex download-delete">
                    <div className="w-50 bg-edit d-flex align-items-center justify-content-center ">
                      <img src={download} alt="download" />
                    </div>
                    <div className="w-50 bg-delete d-flex align-items-center justify-content-center">
                      <img src={deleted} alt="delete" />
                    </div>
                 
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div
              class="card card-link"
              data-toggle="collapse"
              href="#collapsethree"
            >
              <div class="card-header">
                <div class="row">
                  <div class="col-md-10">
                    <h4 class="heading">Project 03: Business Transformation</h4>
                    <table class="table table-borderless">
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
              <div id="collapsethree" class="collapse" data-parent="#accordion">
                <div class="card-body">
                  <h6 class="heading-body">Summary</h6>
                  <p class="para1-body">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod temporundefined
                  </p>
                  <h6 class="heading-body">Description</h6>
                  <p class="para2-body">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit ametundefined
                  </p>

                  <div class="drag-to-download"></div>

                  <br />
                  <table class="table" id="table2">
                    <thead class="thead-dark">
                      <tr>
                        <th>File Name</th>
                        <th>Type </th>
                        <th>Size </th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Scope of Work</td>
                        <td>Pdf</td>
                        <td>2.5 MB</td>
                        <td className=" p-0 d-flex download-delete">
                    <div className="w-50 bg-edit d-flex align-items-center justify-content-center ">
                      <img src={download} alt="download" />
                    </div>
                    <div className="w-50 bg-delete d-flex align-items-center justify-content-center">
                      <img src={deleted} alt="delete" />
                    </div>
                 
                        </td>
                      </tr>

                      <tr>
                        <td>Scope of Work</td>
                        <td>Pdf</td>
                        <td>2.5 MB</td>
                        <td className=" p-0 d-flex download-delete">
                    <div className="w-50 bg-edit d-flex align-items-center justify-content-center ">
                      <img src={download} alt="download" />
                    </div>
                    <div className="w-50 bg-delete d-flex align-items-center justify-content-center">
                      <img src={deleted} alt="delete" />
                    </div>
                 
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;


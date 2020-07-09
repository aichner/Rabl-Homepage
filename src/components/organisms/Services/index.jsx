//#region > Imports
//> React
import React, { Component } from "react";

//> MDB
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon,
  MDBContainer,
} from "mdbreact";

//> SCSS
import "./services.scss";
//#endregion

//#region > Components
class Services extends Component {
  state = {};
  render() {
    return (
      <div id="services">
        <MDBContainer>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol className="text-center">
              <h2 className="h1-responsive font-weight-bold text-center my-5">
                Unsere Dienstleistungen
              </h2>
            </MDBCol>
          </MDBRow>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="4">
              <MDBCard
                className="card-image"
                style={{
                  backgroundImage:
                    "url('../../../assets/content/emergencyservice.jpg')",
                }}
              >
                <div className="text-white text-center align-items-center rgba-black-strong py-5 px-4">
                  <div>
                    <MDBCardTitle tag="h3" className="pt-2">
                      <strong>Not- & Aufsperrdienst</strong>
                    </MDBCardTitle>

                    <MDBBtn color="blue">
                      Mehr erfahren <MDBIcon icon="angle-right" />
                    </MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4">
              <MDBCard
                className="card-image"
                style={{
                  backgroundImage:
                    "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",
                }}
              >
                <div className="text-white text-center align-items-center rgba-black-strong py-5 px-4">
                  <div>
                    <MDBCardTitle tag="h3" className="pt-2">
                      <strong>Schlüsseldienst</strong>
                    </MDBCardTitle>

                    <MDBBtn color="blue">
                      Mehr erfahren <MDBIcon icon="angle-right" />
                    </MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
//#endregion

//#region > Exports
export default Services;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */

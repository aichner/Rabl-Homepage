//#region > Imports
//> React
import React, { Component } from "react";

//> MDB
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBIcon,
  MDBContainer,
} from "mdbreact";

//> SCSS
import "./services.scss";
import { constants } from "react-redux-firebase";
//#endregion

//#region > Components
class Services extends Component {
  state = {};

  render() {
    const { data } = this.props;

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
            {data.map((s, i) => {
              return (
                <MDBCol md="4" key={i}>
                  <MDBCard
                    className="card-image"
                    style={{
                      backgroundImage: "url(" + s.image + ")",
                    }}
                  >
                    <div className="text-white text-center align-items-center rgba-black-strong py-5 px-4">
                      <div>
                        <MDBCardTitle tag="h3" className="pt-2">
                          <strong>{s.title}</strong>
                        </MDBCardTitle>

                        <MDBBtn color="red" onClick={() => console.log(s.link)}>
                          Mehr erfahren <MDBIcon icon="angle-right" />
                        </MDBBtn>
                      </div>
                    </div>
                  </MDBCard>
                </MDBCol>
              );
            })}
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

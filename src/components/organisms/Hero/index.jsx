//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React, { Component } from "react";

//> Additional
// Changing words animation

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBView,
  MDBMask,
  MDBBtn,
  MDBSmoothScroll,
} from "mdbreact";
import { OfferCardGroup } from "../../molecules";

//#endregion

//#region > Components
class Hero extends Component {
  state = {};
  render() {
    return (
      <div id="hero">
        <MDBView fixed>
          <MDBMask />
          <MDBContainer
            style={{
              height: "100%",
              width: "100%",
              paddingTop: "10rem",
              paddingBottom: "5rem",
            }}
            fluid
          >
            <MDBRow className="flex-center">
              <MDBCol
                md="4"
                className="black-text text-center text-md-left mb-5"
              >
                <h1 className="display-4 font-weight-bold">
                  Herzlich Willkommen
                </h1>
                <h3>bei B.Rabl Sicherheitstechnik GmbH</h3>
                <hr className="hr-dark" />
                <h6 className="mb-4">
                  Seit über 40 Jahren erhalten Sie von uns einen kompetenten und
                  einzigartigen Service, wenn es um Ihre Sicherheit geht
                </h6>
                <h5 className="mb-4">Notdienst: +43 664-5131575</h5>
                <MDBSmoothScroll
                  to="products"
                  offset={-90}
                  className="d-inline-block p-0 m-0"
                >
                  <MDBBtn color="red" size="lg">
                    <MDBIcon icon="angle-down" />
                    Produkte
                  </MDBBtn>
                </MDBSmoothScroll>
                <MDBSmoothScroll
                  to="services"
                  offset={-90}
                  className="d-inline-block p-0 m-0"
                >
                  <MDBBtn color="blue" size="lg">
                    <MDBIcon icon="angle-down" />
                    Dienstleistungen
                  </MDBBtn>
                </MDBSmoothScroll>
              </MDBCol>
              <MDBCol md="6" className="mb-4 d-none d-sm-block">
                <OfferCardGroup />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}
//#endregion

//#region > Exports
export default Hero;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */

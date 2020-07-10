//#region > Imports
//> React
import React, { Component } from "react";

//> MDB
// Material Design for Bootstrap
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
import "./products.scss";
//#endregion

//#region > Components
class Products extends Component {
  state = {};
  render() {
    return (
      <div id="products">
        <MDBContainer>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol className="text-center">
              <h2 className="h1-responsive font-weight-bold text-center my-5">
                Unsere Produkte
              </h2>
            </MDBCol>
          </MDBRow>
          <MDBRow className="d-flex justify-content-center">
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
                      <strong>Alarmanlagen</strong>
                    </MDBCardTitle>

                    <MDBBtn color="red">
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
                      <strong>Videoüberwachung</strong>
                    </MDBCardTitle>

                    <MDBBtn color="red">
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
                      <strong>Digitale Türspione</strong>
                    </MDBCardTitle>

                    <MDBBtn color="red">
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
                      <strong>Tresore & Safes</strong>
                    </MDBCardTitle>

                    <MDBBtn color="red">
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
                      <strong>Elektronische Schließsysteme</strong>
                    </MDBCardTitle>

                    <MDBBtn color="red">
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
                      <strong>Mechanische Schließsysteme</strong>
                    </MDBCardTitle>

                    <MDBBtn color="red">
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
                      <strong>Sicherheitsbeschläge</strong>
                    </MDBCardTitle>
                    <MDBBtn color="red">
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
                      <strong>Schlösser</strong>
                    </MDBCardTitle>

                    <MDBBtn color="red">
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
export default Products;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */

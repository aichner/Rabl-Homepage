//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBCardGroup,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";
//#endregion

//#region > Components
class OfferCardGroup extends React.Component {
  render() {
    return (
      <MDBCardGroup className="offers">
        <MDBCard>
          <MDBCardImage
            src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
            alt="Alarm und Tresor Image"
            top
            hover
            overlay="white-slight"
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Alarm und Tresor</MDBCardTitle>
            <MDBCardText>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </MDBCardText>
            <MDBBtn color="primary" size="md">
              mehr erfahren
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard>
          <MDBCardImage
            src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
            alt="mySafe Image"
            top
            hover
            overlay="white-slight"
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">mySafe</MDBCardTitle>
            <MDBCardText>
              Der Basi Tresor mySafe 350 mit Fingerscan und Alarmfunktion ist
              ein echter Blickfang. Er bietet neben dem großartigen Designeinen
              hohen Schutz für Ihre Wertgegenstände.
            </MDBCardText>
            <MDBBtn color="primary" size="md">
              mehr erfahren
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard>
          <MDBCardImage
            src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg"
            alt="Seccor CodeLoxx"
            top
            hover
            overlay="white-slight"
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Seccor CodeLoxx</MDBCardTitle>
            <MDBCardText>
              Ob privat oder gewerblich- <br />
              Mit dem elektronischen Doppelknaufzylinder CodeLoxx genießen Sie
              maximale Sicherheit und Flexibilität
            </MDBCardText>
            <MDBBtn color="primary" size="md">
              mehr erfahren
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    );
  }
}
//#endregion

//#region > Exports
export default OfferCardGroup;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */

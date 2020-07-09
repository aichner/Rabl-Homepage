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
  // ButtonClick Handler. Not in use as of now
  goToOffer(oid) {
    console.log(oid);
  }

  render() {
    // Offers to be rendered. Limit to 3 for best results
    const { offers } = this.props;

    return (
      <MDBCardGroup className="offers">
        {offers.map((o, i) => (
          <MDBCard key={i}>
            <MDBCardImage
              src={o.image}
              alt={o.title}
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">{o.title}</MDBCardTitle>
              <MDBCardText>{o.content}</MDBCardText>
              <MDBBtn
                color="primary"
                size="md"
                onClick={() => this.goToOffer(o.id)}
              >
                mehr erfahren
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        ))}
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

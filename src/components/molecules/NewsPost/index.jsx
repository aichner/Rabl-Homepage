//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBBtn,
} from "mdbreact";
//#endregion

//#region > Components
class NewsPost extends React.Component {
  getFormattedDate(timestamp) {
    let current_datetime = new Date(timestamp);

    let formatted_date =
      current_datetime.getDate() +
      "." +
      (current_datetime.getMonth() + 1) +
      "." +
      current_datetime.getFullYear() +
      " " +
      current_datetime.getHours() +
      ":" +
      current_datetime.getMinutes();

    return formatted_date;
  }

  render() {
    const { data } = this.props;

    return (
      <>
        <MDBCol lg="6">
          <h3 className="font-weight-bold mb-3 p-0">
            <strong>{data.title}</strong>
          </h3>
          <p>{data.content}</p>
          <p>
            Gepostet von
            <a href="#!" className="ml-1 mr-1">
              <strong>{data.author}</strong>
            </a>
            am {this.getFormattedDate(data.timestamp)}
          </p>
          <hr className="my-5"></hr>
        </MDBCol>
      </>
    );
  }
}
//#endregion

//#region > Exports
export default NewsPost;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */

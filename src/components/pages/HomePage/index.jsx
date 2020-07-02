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
} from "mdbreact";

//> Images
// Logo of MDB React
import MDBLogo from "../../../assets/mdb-react-small.png";
// Logo of Advertisement Agency Christian Aichner
import AgencyLogo from "../../../assets/agency-small.png";
// Image of someone coding
import Projects from "../../../assets/content/projects.jpg";

//> CSS
import "./HomePage.scss";

import { Hero, Products, Services } from "../../organisms";
//#endregion

//#region > Components
class HomePage extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <MDBContainer>
          <hr />
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Was bieten wir Ihnen?
          </h2>
          <MDBRow>
            <MDBCol lg="5" className="text-center text-lg-left">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
                alt=""
              />
            </MDBCol>
            <MDBCol lg="7">
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="share" size="lg" className="red-text" />
                </MDBCol>
                <MDBCol xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">
                    Breites Produktportfolio
                  </h5>
                  <p className="grey-text">
                    Von der Entwicklung her über Tresore und mechanische
                    Schutzsysteme / Schließsysteme kommend, ist die Firma heute
                    nach Hinzunahme von elektronischen Alarmsystemen und
                    Video-Systemen sehr breit aufgestellt und deckt das gesamte
                    Sicherheitsspektrum ab.
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="share" size="lg" className="red-text" />
                </MDBCol>
                <MDBCol xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">
                    Sicherheit auf neuestem Stand
                  </h5>
                  <p className="grey-text">
                    Die Auswahl des bevorzugten Standard-Systems wird regelmäßig
                    gegenüber Konkurrenz-Systemen überprüft.
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="share" size="lg" className="red-text" />
                </MDBCol>
                <MDBCol xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Schneller Service</h5>
                  <p className="grey-text">
                    Auch wenn Sie einmal vor geschlossener Tür stehen und einen
                    Schlüsseldienst oder Aufsperrdienst benötigen, dann sind Sie
                    bei uns an der richtigen Stelle! Unsere speziell
                    ausgebildeten Mitarbeiter sind so schnell als möglich bei
                    Ihnen und öffnen Ihre Tür.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Products />
        <Services />
        <div>
          <h2 className="h1-responsive font-weight-bold text-center mt-5 mb-3">
            Weitere Fragen?
          </h2>
          <p className="lead black-text w-responsive text-center mx-auto">
            Zusammen mit unserem Team beraten wir Sie gerne in allen Fragen für
            ein sicheres Zuhause, also zögern Sie nicht uns anzurufen oder zu
            schreiben. Wir freuen uns von Ihnen zu hören!{" "}
          </p>
          <p className="lead black-text w-responsive text-center mx-auto mb-5">
            <strong>Tel. 04242 / 28485</strong>
          </p>
        </div>
      </>
    );
  }
}
//#endregion

//#region > Exports
export default HomePage;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */

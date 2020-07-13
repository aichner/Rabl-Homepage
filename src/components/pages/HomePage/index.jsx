//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBCol, MDBRow, MDBIcon } from "mdbreact";

//> React Lottie
// Framework for animations
import Lottie from "react-lottie";
// Lotties
import * as lockAnimation from "../../../assets/content/lottie/lockanim.json";

//> Waypoint
// Enables hooks when scrolling
import { Waypoint } from "react-waypoint";

//> CSS
import "./HomePage.scss";

import { Hero, Products, Services } from "../../organisms";
//#endregion

//#region > Data
const offers = [
  {
    id: "asdf",
    title: "Alarm und Tresor",
    image: "https://mdbootstrap.com/img/Photos/Others/images/49.jpg",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    id: "ghjk",
    title: "mySafe",
    image: "https://mdbootstrap.com/img/Photos/Others/images/48.jpg",
    content:
      "Der Basi Tresor mySafe 350 mit Fingerscan und Alarmfunktion ist ein echter Blickfang. Er bietet neben dem großartigen Design einen hohen Schutz für Ihre Wertgegenstände.",
  },
  {
    id: "lqwe",
    title: "Seccor CodeLoxx",
    image: "https://mdbootstrap.com/img/Photos/Others/images/50.jpg",
    content:
      "Ob privat oder gewerblich- <br /> Mit dem elektronischen Doppelknaufzylinder CodeLoxx genießen Sie maximale Sicherheit und Flexibilität",
  },
];

const products = [
  {
    title: "Alarmanlagen",
    link: "alksjdlöfa",
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg",
  },
  {
    title: "Videoüberwachung",
    link: "alksjdlöfa",
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg",
  },
  {
    title: "Digitale Türspione",
    link: "alksjdlöfa",
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg",
  },
  {
    title: "Tresore & Safes",
    link: "alksjdlöfa",
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg",
  },
  {
    title: "Elekrtronische Schließsysteme",
    link: "alksjdlöfa",
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg",
  },
  {
    title: "Mechanische Schließsysteme",
    link: "alksjdlöfa",
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg",
  },
  {
    title: "Sicherheitsbeschläge",
    link: "alksjdlöfa",
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg",
  },
  {
    title: "Schlösser",
    link: "alksjdlöfa",
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg",
  },
];

const services = [
  {
    title: "Not- & Aufsperrdienst",
    link: "alksjdlöfa",
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg",
  },
  {
    title: "Schlüsseldienst",
    link: "alksjdlöfa",
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg",
  },
];
//#endregion

//#region > Config
const defaultOptions = {
  loop: false,
  autoplay: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
//#endregion

//#region > Components
class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isStopped: false, isPaused: true, direction: 1 };
  }

  unpause() {
    if (this.state?.isPaused) this.setState({ isPaused: false });
  }
  pause() {
    if (!this.state?.isPaused) this.setState({ isPaused: true });
  }

  render() {
    return (
      <>
        <Hero offers={offers} />
        <MDBContainer>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Was bieten wir Ihnen?
          </h2>
          <MDBRow>
            <MDBCol lg="5" className="text-center text-lg-left">
              <Lottie
                options={{
                  ...defaultOptions,
                  animationData: lockAnimation.default,
                  name: "lockAnimation",
                }}
                eventListeners={[
                  {
                    eventName: "complete",
                    callback: () => console.log("Completed"),
                  },
                ]}
                isPaused={this.state.isPaused}
                height={400}
                width={400}
              />
              <Waypoint
                onEnter={() => this.unpause()}
                onLeave={() => this.pause()}
              />
            </MDBCol>
            <MDBCol lg="7">
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  {" "}
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
        <Products data={products} />
        <Services data={services} />
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

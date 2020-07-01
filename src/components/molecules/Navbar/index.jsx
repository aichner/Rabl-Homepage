//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
} from "mdbreact";

// Rabl Logo
import Logo from "../../../assets/logo_h60.png";

//> SCSS
import "./navbar.scss";
//#endregion

//#region > Components
class Navbar extends React.Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  closeCollapse = (collapseID) => () => {
    window.scrollTo(0, 0);

    this.state.collapseID === collapseID && this.setState({ collapseID: "" });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );
    const { collapseID } = this.state;

    return (
      <div>
        <MDBNavbar color="white" light expand="md" fixed="top" scrolling>
          <MDBContainer>
            <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
              <img src={Logo} alt="Rabl Logo" className="img-fluid navlogo" />
              <strong className="align-middle"></strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
            <MDBCollapse
              id="mainNavbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong>Home</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/products"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong>Produkte</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/services"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong>Dienstleistungen</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/news"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong>News</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/products"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <strong>Produkte</strong>
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        {collapseID && overlay}
      </div>
    );
  }
}
//#endregion

//#region > Exports
export default Navbar;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */

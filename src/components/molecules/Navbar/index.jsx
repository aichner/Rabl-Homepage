//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// React Router DOM bindings
import { withRouter } from "react-router-dom";

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
  MDBSmoothScroll,
} from "mdbreact";

//> React Router Hash Link
// Enables redirects to #links
import { HashLink as Link } from "react-router-hash-link";

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
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });
  };

  scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
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
    const { location } = this.props;

    console.log(window.location.pathname);

    return (
      <div>
        <MDBNavbar color="white" light expand="md" fixed="top" scrolling>
          <MDBContainer>
            <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
              <img src={Logo} alt="Rabl Logo" className="img-fluid navlogo" />
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
                  {location.pathname === "/" ? (
                    <MDBSmoothScroll
                      to="products"
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      active
                    >
                      <strong>Produkte</strong>
                    </MDBSmoothScroll>
                  ) : (
                    <Link
                      className="nav-link"
                      smooth
                      to="/#products"
                      scroll={(el) => this.scrollWithOffset(el, 70)}
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                    >
                      <strong>Produkte</strong>
                    </Link>
                  )}
                </MDBNavItem>
                <MDBNavItem>
                  {location.pathname === "/" ? (
                    <MDBSmoothScroll
                      to="services"
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                      active
                    >
                      <strong>Dienstleistungen</strong>
                    </MDBSmoothScroll>
                  ) : (
                    <Link
                      className="nav-link"
                      smooth
                      to="/#services"
                      scroll={(el) => this.scrollWithOffset(el, 70)}
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                    >
                      <strong>Dienstleistungen</strong>
                    </Link>
                  )}
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
export default withRouter(Navbar);
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */

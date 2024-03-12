import {
  MDBCollapse,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
} from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
const GreenwichNavBar = ({ currentUser, logOut }) => {
  return (
    <MDBNavbar expand="lg" dark bgColor="primary">
      <MDBContainer fluid>
        <div className="web-brand">
          <MDBNavbarBrand href="#">Greenwich</MDBNavbarBrand>
        </div>
        <MDBCollapse navbar>
          <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
            <div className="left-bar">
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Features</MDBNavbarLink>
              </MDBNavbarItem>
            </div>
            {!currentUser ? (
              <div className="right-bar">
                <MDBNavbarItem id="login-option">
                  <Link to="/login">
                    <MDBNavbarLink>Login</MDBNavbarLink>
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink>
                    <Link to="/register">
                      <MDBNavbarLink>Register</MDBNavbarLink>
                    </Link>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </div>
            ) : (
              <div className="right-bar">
                <MDBNavbarItem>
                  <MDBNavbarItem>
                    <span>{currentUser.username}</span>
                  </MDBNavbarItem>
                  <Link>
                    <MDBNavbarLink onClick={logOut}>Logout</MDBNavbarLink>
                  </Link>
                </MDBNavbarItem>
              </div>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default GreenwichNavBar;

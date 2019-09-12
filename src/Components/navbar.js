import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import '../index.css';

function MyNavbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink exact to="/">
            {" "}
            Accueil
          </NavLink>, 
          <NavLink to="/history" activeClassName="link"> Mon histoire </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}

export default MyNavbar;

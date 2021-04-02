import React from "react";
import Navbar from "react-bootstrap/Navbar";

import Nav from "react-bootstrap/Nav";
import "./Nav.css";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Navbar.Brand className="navBrand" href="/">
        <h3>Edgar Peña</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar className="mr-auto justify-content-end container-fluid">
          <Nav.Item className="navItem">
            <Nav.Link href="/biography">Biography</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Nav.Link href="/portfolio" className="port">
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Nav.Link href="/resume" className="resume">
              Resume
            </Nav.Link>
          </Nav.Item>
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

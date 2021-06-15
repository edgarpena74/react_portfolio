import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./Nav.css";

const Navigation = () => {
  return (
    <div>
      {/* <Container className="navContainer"> */}
      <Navbar collapseOnSelect className="navBar" expand="lg">
        <Navbar.Brand className="navBrand" href="/">
          <h3 className="navNameheader">Edgar Peña</h3>
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
      {/* </Container> */}
    </div>
  );
};

export default Navigation;

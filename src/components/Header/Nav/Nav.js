import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./Nav.css";

const Navigation = () => {
  return (
    <Container className="navContainer" fluid="sm">
      <Navbar className="navbar container-fluid">
        <Navbar.Brand className="navBrand" href="/">
          <h3>Edgar Peña</h3>
        </Navbar.Brand>
        <Navbar className="justify-content-end container-fluid">
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
      </Navbar>
    </Container>
  );
};

export default Navigation;

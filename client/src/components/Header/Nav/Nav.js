import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Nav.css";

const Navigation = () => {
  return (
    <Navbar>
      <Navbar.Brand className="navBrand">Edgar Peña</Navbar.Brand>
      <Navbar className="justify-content-end container-fluid" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/biography">Biography</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/portfolio" className="port">
            Portfolio
          </Nav.Link>
        </Nav.Item>
      </Navbar>
    </Navbar>
  );
};

export default Navigation;
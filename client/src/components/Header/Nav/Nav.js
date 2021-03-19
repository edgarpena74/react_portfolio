import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Navbar>
      <Nav className="justify-content-end container-fluid" activeKey="/home">
        <Nav.Item className="name">Edgar Peña</Nav.Item>
        <Nav.Item>
          <Nav.Link href="/biography">Biography</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Navigation;

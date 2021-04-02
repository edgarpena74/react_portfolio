import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Footer.css";
const FooterComponent = () => {
  return (
    <Container fluid="sm">
      <Row className="footer" sm="12">
        &#169;{` `}Edgar Peña
      </Row>
    </Container>
  );
};

export default FooterComponent;

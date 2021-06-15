import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Footer.css";
const FooterComponent = () => {
  return (
    <div className="footerDiv">
      <Container fluid="sm">
        <Row className="footerRow" sm="12">
          <div className="footerText text-center"> &#169;{` `}Edgar Peña</div>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;

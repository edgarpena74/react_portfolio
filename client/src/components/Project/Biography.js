import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profilePic from "../Pics/profilePic.jpg";
import "./style.css";

//add contact me section to this page

const Biography = () => {
  return (
    <Container>
      <Row>
        <Container className="picBio">
          <Image
            id="profilePic"
            className="float-left"
            src={profilePic}
            rounded
          />
          <p id="profileBio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
            aliquam nulla facilisi cras fermentum. Molestie at elementum eu
            facilisis. Lectus proin nibh nisl condimentum id venenatis a.
            Imperdiet proin fermentum leo vel orci. Interdum velit laoreet id
            donec ultrices tincidunt arcu non. Adipiscing at in tellus integer
            feugiat scelerisque varius. Aliquet enim tortor at auctor urna nunc
            id. Ipsum dolor sit amet consectetur adipiscing elit ut. Cursus
            risus at ultrices mi tempus imperdiet nulla. Nibh cras pulvinar
            mattis nunc sed blandit libero volutpat sed. Nisl purus in mollis
            nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
            aliquam nulla facilisi cras fermentum. Molestie at elementum eu
            facilisis. Lectus proin nibh nisl condimentum id venenatis a.
            Imperdiet proin fermentum leo vel orci. Interdum velit laoreet id
            donec ultrices tincidunt arcu non. Adipiscing at in tellus integer
            feugiat scelerisque varius. Aliquet enim tortor at auctor urna nunc
            id. Ipsum dolor sit amet consectetur adipiscing elit ut. Cursus
            risus at ultrices mi tempus imperdiet nulla. Nibh cras pulvinar
            mattis nunc sed blandit libero volutpat sed. Nisl purus in mollis
            nunc.
          </p>
        </Container>
      </Row>

      <Row className="contactSec">
        <h3>Contact Information</h3>
      </Row>
      <Row className="contactSec">
        <h6>
          LinkedIn:
          <a href="https://www.linkedin.com/in/edgarpena47/"> edgarpena47</a>
        </h6>
      </Row>
      <Row className="contactSec">
        <h6>
          Github: <a href="https://github.com/edgarpena74"> edgarpena74</a>
        </h6>
      </Row>
      <Row className="contactSec">
        <h6>Email: edgarpena0740@gmail.com</h6>
      </Row>
    </Container>
  );
};

export default Biography;

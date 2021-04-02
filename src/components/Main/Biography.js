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
    <Container sm="12">
      <Row>
        <Container className="picBio">
          <Image
            id="profilePic"
            className="float-left"
            src={profilePic}
            rounded
          />
          <p id="profileBio">
            Hi my name is Edgar Peña. I am an aspiring full stack web developer.
            My journey in web development began September of 2020. Over the past
            months I have learned about front and back end web development.
            There was a lot of challenging material I had to immerse my self in,
            but over time coding started to make more sense. Now I am a MERN
            stack developer, with knowledge in JavaScript,ES6, jQuery, NodeJS,
            ReactJS, ExpressJS, HandlebarsJS, MongooseJS, CSS, Git, HTML, SQL,
            MySQL, Sequelize, and MongoDB. Feel free to reach out and contact me
            using the links below.
          </p>
        </Container>
      </Row>

      <Row className="contactSec contactInfo">
        <h4>Contact Information</h4>
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

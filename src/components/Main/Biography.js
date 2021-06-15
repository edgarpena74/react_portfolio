import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import profilePic from "../Pics/profilePic.jpg";
import "./main.css";

//add contact me section to this page

const Biography = () => {
  return (
    <div className="bioContactDiv">
      <Container fluid="sm">
        <Row>
          <Container className="picBio">
            <Image
              id="profilePic"
              className="float-left"
              src={profilePic}
              rounded
            />
            <div className="profileBio">
              <p id="profileBio text-left">
                Hi my name is Edgar Peña. I am an aspiring full stack web
                developer. My journey in web development began September of
                2020. Over the past months I have learned about front and back
                end web development. There was a lot of challenging material I
                had to immerse myself in, but over time coding started to make
                more sense. Now I am a MERN stack developer, with knowledge in
                JavaScript,ES6, jQuery, NodeJS, ReactJS, ExpressJS,
                HandlebarsJS, MongooseJS, CSS, Git, HTML, SQL, MySQL, Sequelize,
                and MongoDB. Feel free to reach out and contact me using the
                links below.
              </p>
            </div>
          </Container>
        </Row>

        <Row className="contactSec contactInfo">
          <h3 className="contactHeader text-center">Contact </h3>
        </Row>
        <Row className="contactSec">
          <h5>
            LinkedIn:
            <a href="https://www.linkedin.com/in/edgarpena47/"> edgarpena47</a>
          </h5>
        </Row>
        <Row className="contactSec">
          <h5>
            Github: <a href="https://github.com/edgarpena74"> edgarpena74</a>
          </h5>
        </Row>
        <Row className="contactSec">
          <h5>Email: edgarpena0740@gmail.com</h5>
        </Row>
      </Container>
    </div>
  );
};

export default Biography;

import React from "react";
// import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import ProjectThree from "../Pics/project3.png";
// import {
//   projectThree,
//   projectTwo,
//   projectOne,
//   noteTaker,
//   weatherApp,
// } from "../Pics/Pics.js";
import projectThree from "../Pics/project3.png";
import projectTwo from "../Pics/project2.png";
import projectOne from "../Pics/project1.png";
import noteTaker from "../Pics/noteTaker.png";
import weatherApp from "../Pics/weather.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const Portfolio = () => {
  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
               dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  return (
    <div>
      <Container>
        <Row>
          <Image src={projectThree} thumbnail />
          <p>crop out local host hello</p>
        </Row>
        <Row>{lorem}</Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Image src="https://picsum.photos/200/300" thumbnail />
        </Row>
        <Row>{lorem}</Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Image src={projectTwo} thumbnail />
        </Row>
        <Row>{lorem}</Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Image src={noteTaker} thumbnail />
        </Row>
        <Row>{lorem}</Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Image src={projectOne} thumbnail />
        </Row>
        <Row>{lorem}</Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Image src={weatherApp} thumbnail />
        </Row>
        <Row>{lorem}</Row>
      </Container>
    </div>
  );
};

export default Portfolio;

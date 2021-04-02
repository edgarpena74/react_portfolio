import React from "react";
import Row from "react-bootstrap/Row";
import projectThree from "../Pics/project3.png";
import projectTwo from "../Pics/project2.png";
import projectOne from "../Pics/project1.png";
import noteTaker from "../Pics/noteTaker.png";
import weatherApp from "../Pics/weather.png";
import googleBooks from "../Pics/googleBooks.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import "./style.css";

const Portfolio = () => {
  return (
    <div>
      <Container sm="12">
        <Row>
          <Image src={projectThree} thumbnail />
        </Row>
        <Row className="titleRow">
          <h3>Project Three</h3>
        </Row>
        <Row className="description">
          <p>Currently in Development</p>
        </Row>
      </Container>
      <br />
      <br />
      <Container sm="12">
        <Row>
          <Image src={googleBooks} thumbnail />
        </Row>
        <Row className="titleRow">
          <h3>Google Books App</h3>
        </Row>
        <Row className="description">
          <p>
            This app uses the Google Books api to search for books. It allows
            the user to save their favorite books and view them in Google Books.
          </p>
        </Row>
      </Container>
      <br />
      <br />
      <Container sm="12">
        <Row>
          <Image src={projectTwo} thumbnail />
        </Row>
        <Row className="titleRow">
          <h3>Ghost Wiki</h3>
        </Row>
        <Row className="description">
          <p>
            This project was sparked from a desire to have a place for verified
            community contributions to be used as a reference. This data would
            be viewable on the internet and provide a source of truth based on
            obervation and analysis from others' edits and information. This
            project drew inspiration from the many Wikis of the internet, each
            focused on a certain topic. This group considered quite a few topics
            to start with, from food, music, and travel to games, statistical
            analysis on world health reports, and hiring numbers. Why ghosts,
            you ask? We're of the opinion they're quite... cool.
          </p>
        </Row>
      </Container>
      <br />
      <br />
      <Container sm="12">
        <Row>
          <Image src={noteTaker} thumbnail />
        </Row>
        <Row className="titleRow">
          <h3>Note Taker</h3>
        </Row>
        <Row className="description">
          <p>
            This application is designed to let the user save and view notes.
          </p>
        </Row>
      </Container>
      <br />
      <br />
      <Container sm="12">
        <Row>
          <Image src={projectOne} thumbnail />
        </Row>
        <Row className="titleRow">
          <h3>Duration Station</h3>
        </Row>
        <Row className="description">
          <p>
            Our project Duration station is a webpage featuring the Materialize
            CDN where you are presented with a search box, where you can type
            the name of an album and using the AudioDB API, it will return as
            results, the runtime of the album, the artists, and if available the
            album cover art as well as some description information. If no album
            art is available, in its place will be a rotating randomly chosen
            picture of an adorable cat using CatPic API.
          </p>
        </Row>
      </Container>
      <br />
      <br />
      <Container sm="12">
        <Row>
          <Image src={weatherApp} thumbnail />
        </Row>
        <Row className="titleRow">
          <h3>Weather Dashboard</h3>
        </Row>
        <Row className="description">
          <p>
            This is a weather app that uses a third party api to get weather
            data on a specific location
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;

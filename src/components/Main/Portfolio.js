import React from "react";
import Row from "react-bootstrap/Row";
import projectThree from "../Pics/proj3EV.png";
import projectTwo from "../Pics/project2.png";
import projectOne from "../Pics/project1.png";
import noteTaker from "../Pics/noteTaker.png";
import weatherApp from "../Pics/weather.png";
import googleBooks from "../Pics/googleBooks.png";
import thePath from "../Pics/thePath.jpg";
import arador from "../Pics/arador.jpg";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import "./portfolioResume.css";
//
const Portfolio = () => {
  return (
    <div>
      {/* The Path */}
      <Container fluid="sm">
        <Row>
          <Image className="appImg " src={thePath} thumbnail />
        </Row>
        <Row className="titleRow">
          <h3>The Path</h3>
        </Row>
        <Row className="description">
          <p className="text-left">
            The Path is a search application that uses US National Park Service
            API to show the user results based on their query. The application
            is still in its infancy and many of the features such as having user
            accounts and saving trails will be added in the future. The main
            functionality of the third party API’s that were used work. The goal
            is to have a user experience with stable and fully functioning
            features which will allow them to walk on new paths and enrich their
            experience on this beautiful planet.
          </p>
        </Row>
        <Row className="technologies">
          <p className="text-left">
            Technologies: ReactJS, MongoDB, Mongoose, OpenRouteService API,
            National Park Service API, React Query, React-Bootstrap, Javascript,
            Node, Express, Axios, Dotenv, HTML 5, CSS 3
          </p>
        </Row>
        <Row className="links">
          <p className="text-left">
            <a
              className="linkColor"
              href="https://github.com/edgarpena74/the-path"
            >
              Github Repository
            </a>
          </p>
        </Row>
        <Row className="links">
          <p className="text-left">
            <a
              className="linkColor"
              href="https://the-path-3.herokuapp.com/intro"
            >
              Deployed Application
            </a>
          </p>
        </Row>
      </Container>
      {/* Arador Wines */}
      <Container fluid="sm">
        <Row>
          <Image className="appImg " src={arador} thumbnail />
        </Row>
        <Row className="titleRow">
          <h3>Arador Wine</h3>
        </Row>
        <Row className="description">
          <p className="text-left">
            Aradorwine.com is an E-Commerce site built on the Shopify platform.
            This website features customised Liquid template language code. This
            was a challenge due to the fact that it was a new language that I
            had to learn to use. I had to also learn how to use Photoshop and
            Adobe Illustrator to edit visual elements of the site. When the
            winemaker was satisfied with the end product, all the hours of
            research, and learning were well worth it.
          </p>
        </Row>
        <Row className="technologies">
          <p>Technologies: Liquid Template Language, CSS 3, HTML 5</p>
        </Row>
        <Row className="links">
          <p className="text-left">
            <a className="linkColor" href="https://aradorwine.com/">
              Arador Wine
            </a>
          </p>
        </Row>
      </Container>
      {/* Project three */}
      <Container fluid="sm">
        <Row>
          <Image className="appImg" src={projectThree} thumbnail />
        </Row>
        <Row className="titleRow">
          <h3>Eventz</h3>
        </Row>
        <Row className="description">
          <p className="text-left">
            Eventz allows users to create and save events happening in their
            area and view upcoming events around the world.
          </p>
        </Row>
        <Row className="technologies">
          <p className="text-left">
            Technologies: ReactJS, MongoDB, Mongoose, MapBoxAPI, SuperCluster,
            React-Bootstrap, Javascript, Node, Express, Axios, Dotenv, HTML 5,
            CSS 3
          </p>
        </Row>
        <Row className="links">
          <p className="text-left">
            <a
              className="linkColor"
              href="https://github.com/edgarpena74/Eventz"
            >
              Github Repository
            </a>
          </p>
        </Row>
        <Row className="links">
          <p className="text-left">
            <a
              className="linkColor"
              href="https://map-events-sm.herokuapp.com/profile"
            >
              Deployed Application
            </a>
          </p>
        </Row>
      </Container>
      <br />
      <br />
      {/* Project two */}
      <Container fluid="sm">
        <Row>
          <Image className="appImg" src={projectTwo} thumbnail />
        </Row>
        <Row className="titleRow">
          <h3>Ghost Wiki</h3>
        </Row>
        <Row className="description">
          <p className="text-left">
            Ghost Wiki creates a niche community for people who love reading
            about spookier subjects.
          </p>
        </Row>
        <Row className="technologies">
          <p className="text-left">
            Technologies: HTML 5, Javascript, CSS 3, Node, Express, MySQL,
            MySQL2, Sequelize, Bootstrap
          </p>
        </Row>
        <Row className="links">
          <p className="text-left">
            <a
              className="linkColor"
              href="https://github.com/edgarpena74/ghost_wiki"
            >
              Github Repository
            </a>
          </p>
        </Row>
        <Row className="links">
          <p className="text-left">
            <a className="linkColor" href="https://ghostwiki.herokuapp.com/">
              Deployed Application
            </a>
          </p>
        </Row>
      </Container>
      <br />
      <br />
      {/* Project one */}
      <Container fluid="sm">
        <Row>
          <Image className="appImg" src={projectOne} thumbnail />
        </Row>
        <Row className="titleRow">
          <h3>Duration Station</h3>
        </Row>
        <Row className="description">
          <p className="text-left">
            Our project Duration station is a webpage featuring the Materialize
            CDN where you are presented with a search box, where you can type
            the name of an album and using the AudioDB API, it will return as
            results, the runtime of the album, the artists, and if available the
            album cover art as well as some description information. If no album
            art is available, in its place will be a rotating randomly chosen
            picture of an adorable cat using CatPic API.
          </p>
        </Row>
        <Row className="technologies">
          <p className="text-left">
            Technologies: HTML 5, Javascript, CSS 3, Node, Express, MySQL,
            MySQL2, Sequelize, Bootstrap
          </p>
        </Row>
        <Row className="links">
          <p className="text-left">
            <a
              className="linkColor"
              href="https://github.com/edgarpena74/ghost_wiki"
            >
              Github Repository
            </a>
          </p>
        </Row>
        <Row className="links">
          <p className="text-left">
            <a className="linkColor" href="https://ghostwiki.herokuapp.com/">
              Deployed Application
            </a>
          </p>
        </Row>
      </Container>
      <br />
      <br />
      <Container fluid="sm">
        <Row>
          <Image className="appImg" src={noteTaker} thumbnail />
        </Row>
        <Row className="titleRow">
          <h3>Note Taker</h3>
        </Row>
        <Row className="description">
          <p className="text-left">
            This application is designed to let the user save and view notes.
          </p>
        </Row>
        <Row className="technologies">
          <p className="text-left">
            Technologies: HTML 5, Javascript, CSS 3, Node, Express, MySQL,
            MySQL2, Sequelize, Bootstrap
          </p>
        </Row>
        <Row className="links">
          <p className="text-left">
            <a
              className="linkColor"
              href="https://github.com/edgarpena74/ghost_wiki"
            >
              Github Repository
            </a>
          </p>
        </Row>
        <Row className="links">
          <p className="text-left">
            <a className="linkColor" href="https://ghostwiki.herokuapp.com/">
              Deployed Application
            </a>
          </p>
        </Row>
      </Container>
      <br />
      <br />
      <Container fluid="sm">
        <Row>
          <Image className="appImg" src={googleBooks} thumbnail />
        </Row>
        <Row className="titleRow">
          <h3>Google Books App(Still In Production Stage)</h3>
        </Row>
        <Row className="description">
          <p className="text-left">
            This app uses the Google Books api to search for books. It allows
            the user to save their favorite books and view them in Google Books.
          </p>
        </Row>
        <Row className="technologies">
          <p className="text-left">
            Technologies: HTML 5, Javascript, CSS 3, Node, Express, MySQL,
            MySQL2, Sequelize, Bootstrap
          </p>
        </Row>
        <Row className="links">
          <p className="text-left">
            <a
              className="linkColor"
              href="https://github.com/edgarpena74/ghost_wiki"
            >
              Github Repository
            </a>
          </p>
        </Row>
        <Row className="links">
          <p className="text-left">
            <a className="linkColor" href="https://ghostwiki.herokuapp.com/">
              Deployed Application
            </a>
          </p>
        </Row>
      </Container>
      <br />
      <br />
      <Container fluid="sm">
        <Row>
          <Image className="appImg" src={weatherApp} thumbnail />
        </Row>
        <Row className="titleRow">
          <h3>Weather Dashboard</h3>
        </Row>
        <Row className="description">
          <p className="text-left">
            This is a weather app that uses a third party api to get weather
            data on a specific location
          </p>
        </Row>
        <Row className="technologies">
          <p>
            Technologies: HTML 5, Javascript, CSS 3, Node, Express, MySQL,
            MySQL2, Sequelize, Bootstrap
          </p>
        </Row>
        <Row className="links">
          <p className="text-left">
            <a
              className="linkColor"
              href="https://github.com/edgarpena74/ghost_wiki"
            >
              Github Repository
            </a>
          </p>
        </Row>
        <Row className="links">
          <p className="text-left">
            <a className="linkColor" href="https://ghostwiki.herokuapp.com/">
              Deployed Application
            </a>
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;

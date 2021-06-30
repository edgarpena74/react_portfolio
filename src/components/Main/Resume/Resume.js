import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
//
// Images
import projectThree from "../../Pics/proj3EV.png";
import projectTwo from "../../Pics/project2.png";
import projectOne from "../../Pics/project1.png";
import noteTaker from "../../Pics/noteTaker.png";
import weatherApp from "../../Pics/weather.png";
import googleBooks from "../../Pics/googleBooks.png";
import thePath from "../../Pics/thePath.jpg";
import arador from "../../Pics/arador.jpg";
import resume from "./resume.pdf";

import "../portfolioResume.css";

const Resume = () => {
  //
  //
  // Add Pdf Download?
  //
  //

  return (
    <div className="resumeDiv">
      {/* Name and links */}
      <Container className="nameLinkCont">
        {/* Needs div for a bottom border */}
        <div className="nameLinkDiv">
          <Row>
            {/* Name Header */}
            <Col sm="9" md="9" lg="9">
              <h1 className="nameRes text-left">Edgar Peña</h1>
              <p className="workTitleRes text-left">Full Stack Web Developer</p>
            </Col>
            {/* Links and info */}
            <Col>
              <p className="areaRes text-left">Berkeley, CA</p>
              <p className="emailRes text-left">edgarpena0740@gmail.com</p>
              <p className="linkedInRes text-left">
                <a href="https://www.linkedin.com/in/edgarpena47?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5hXQL8bzRjapzeoZcEG2yQ%3D%3D">
                  LinkedIn
                </a>
              </p>
              <p className="githubRes text-left">
                <a href="https://github.com/edgarpena74">GitHub</a>
              </p>
              <p className="githubRes text-left">
                <a href={resume} download={resume}>
                  Download Resume
                </a>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      {/* Work info left and links on right */}
      <Container className="workEdCont">
        <Row>
          <Col sm="9" md="9" lg="9">
            {/* Work Section */}
            <div className="experienceDiv">
              <h4 className=" expHeader text-left">Experience</h4>
              <div className="jobOneDiv">
                <p className="jobName text-left">
                  <span className="jobLocation">Hess Collection Winery</span>
                  <span className="jobCity">, Napa, CA </span>
                  <span classname="longDash">—</span>
                  <span className="position"> Visitor Center</span>
                </p>
                <p className="dates text-left"> August 2014 - October 2015</p>
                <p className="jobDesc text-left">
                  Used a POS system to process transactions. Prepared food
                  plates for guests.{" "}
                </p>
              </div>
              <div className="jobTwoDiv">
                <p className="jobName text-left">
                  <span className="jobLocation">Rutherford Grove Winery</span>
                  <span className="jobCity">, Napa, CA </span>
                  <span classname="longDash">—</span>
                  <span className="position"> Cellar Worker</span>
                </p>
                <p className="dates text-left">August 2014 - January 2017</p>
                <p className="jobDesc text-left">
                  Worked in the production of wine. Helped the winemaker develop
                  wine blends for future vintages.
                </p>
              </div>
              <div className="jobThreeDiv">
                <p className="jobName text-left">
                  <span className="jobLocation">Napa Valley College</span>
                  <span className="jobCity">, Napa, CA </span>
                  <span classname="longDash">—</span>
                  <span className="position">
                    {" "}
                    Supplementary Instructor of Chemistry
                  </span>
                </p>
                <p className="dates text-left">January 2018 - April 2019</p>
                <p className="jobDesc text-left">
                  Supplementary instructor of chemistry. I had tutorial sessions
                  with students where I answered any questions they had,
                  retaught lessons, and prepared them for exams.
                </p>
              </div>
              <div className="jobFourDiv">
                <p className="jobName text-left">
                  <span className="jobLocation">Napa High School</span>
                  <span className="jobCity">, Napa, CA </span>
                  <span classname="longDash">—</span>
                  <span className="position"> Academic Tutor</span>
                </p>
                <p className="dates text-left">January 2019 - June 2019</p>
                <p className="jobDesc text-left">
                  At Napa High School I tutored English learners and AVID
                  students in the subjects of math and science.
                </p>
              </div>
            </div>
            {/* Education Section */}
            <div className="educationDiv">
              <h4 className=" eduHeader text-left">Education</h4>
              <div className="schoolOnediv">
                <p className="schoolPara text-left">
                  <span className="schoolName">UC Berkeley Extension</span>
                  <span className="schoolCity">, Berkeley, CA </span>
                  <span classname="longDash">—</span>
                  <span className="studyArea">Full Stack Web Developer</span>
                </p>
                <p className="schoolDates text-left">
                  September 2020 - March 2021
                </p>
                <p className="studyDesc text-left">
                  The full stack web development boot camp teaches us front end
                  and back end web development.
                </p>
              </div>
              <div className="schoolOnediv">
                <p className="schoolPara text-left">
                  <span className="schoolName"> Napa Valley College</span>
                  <span className="schoolCity">, Napa, CA </span>
                  <span classname="longDash">—</span>
                  <span className="studyArea">
                    {" "}
                    Associate in Science in Natural Science and Mathematics
                  </span>
                </p>
                <p className="schoolDates text-left">
                  January 2015 - August 2019
                </p>
                <p className="studyDesc text-left">
                  The associates degree is awarded to those who have completed
                  courses in Mathematics, Physical Sciences, and Biology.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <h4 className="skHeader text-left">Skills</h4>
            <p className="skillsPara text-left">HTML 5</p>
            <p className="skillsPara text-left">Git</p>
            <p className="skillsPara text-left">CSS 3</p>
            <p className="skillsPara text-left">Bootstrap</p>
            <p className="skillsPara text-left">
              Javascript(ES6, jQuery, NodeJS, ReactJS, ExpressJS, HandlebarsJS,
              MongooseJS)
            </p>
            <p className="skillsPara text-left">SQL (MySQL, Sequelize)</p>
            <p className="skillsPara text-left">MongoDB</p>
          </Col>
        </Row>
      </Container>

      {/* Projects */}

      <Container className="projectContRes">
        <div className="projectDivRes">
          <h4 classNames="projectsRes">Projects</h4>
        </div>

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
              The Path is a search application that uses US National Park
              Service API to show the user results based on their query. The
              application is still in its infancy and many of the features such
              as having user accounts and saving trails will be added in the
              future. The main functionality of the third party API’s that were
              used work. The goal is to have a user experience with stable and
              fully functioning features which will allow them to walk on new
              paths and enrich their experience on this beautiful planet.
            </p>
          </Row>
          <Row className="technologies">
            <p className="text-left">
              Technologies: ReactJS, MongoDB, Mongoose, OpenRouteService API,
              National Park Service API, React Query, React-Bootstrap,
              Javascript, Node, Express, Axios, Dotenv, HTML 5, CSS 3
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
        <p className="emptyParagraph"></p>
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
              Aradorwine.com is an E-Commerce site built on the Shopify
              platform. This website features customised Liquid template
              language code. This was a challenge due to the fact that it was a
              new language that I had to learn to use. I had to also learn how
              to use Photoshop and Adobe Illustrator to edit visual elements of
              the site. When the winemaker was satisfied with the end product,
              all the hours of research, and learning were well worth it.
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
        <p className="emptyParagraph"></p>
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
        <p className="emptyParagraph"></p>
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
        <p className="emptyParagraph"></p>
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
              Our project Duration station is a webpage featuring the
              Materialize CDN where you are presented with a search box, where
              you can type the name of an album and using the AudioDB API, it
              will return as results, the runtime of the album, the artists, and
              if available the album cover art as well as some description
              information. If no album art is available, in its place will be a
              rotating randomly chosen picture of an adorable cat using CatPic
              API.
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
                href="https://github.com/edgarpena74/duration_station"
              >
                Github Repository
              </a>
            </p>
          </Row>
          <Row className="links">
            <p className="text-left">
              <a
                className="linkColor"
                href="https://edgarpena74.github.io/duration_station/"
              >
                Deployed Application
              </a>
            </p>
          </Row>
        </Container>
        <p className="emptyParagraph"></p>
        {/* Note Taker */}
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
                href="https://github.com/edgarpena74/Note_Taker"
              >
                Github Repository
              </a>
            </p>
          </Row>
          <Row className="links">
            <p className="text-left">
              <a
                className="linkColor"
                href="https://edgarpena74.github.io/Note_Taker/"
              >
                Deployed Application
              </a>
            </p>
          </Row>
        </Container>
        <p className="emptyParagraph"></p>
        {/* Google Books App */}
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
              the user to save their favorite books and view them in Google
              Books.
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
                href="https://github.com/edgarpena74/google_books_app"
              >
                Github Repository
              </a>
            </p>
          </Row>
          {/* <Row className="links">
            <p className="text-left">
              <a className="linkColor" href="">
                Deployed Application
              </a>
            </p>
          </Row> */}
        </Container>
        <p className="emptyParagraph"></p>
        {/* Weather App */}
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
                href="https://github.com/edgarpena74/Weather-Dashboard"
              >
                Github Repository
              </a>
            </p>
          </Row>
          <Row className="links">
            <p className="text-left">
              <a
                className="linkColor"
                href="https://edgarpena74.github.io/Weather-Dashboard/"
              >
                Deployed Application
              </a>
            </p>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Resume;

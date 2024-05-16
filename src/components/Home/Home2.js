import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/grad.jpeg";
import drSuraj from "../../Assets/dr-suraj.png";
import CEO from "../../Assets/ceo-algo.png";
import Tilt from "react-parallax-tilt";
import homeTextData from "./homeTextData"; // Importing text data object

function Home2() {
  const { introduction, socialMedia } = homeTextData; // Destructuring text data object
  const paragraphs = introduction.body.split("<br>");

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>{introduction.title}</h1>
            <p className="home-about-body">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="home-about-body">{paragraph}</p>
              ))}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-lg-only" alt="avatar" />
            </Tilt>
          </Col>
        </Row>


        <Row>
          <Col md={6}>
            <div className="image-container">
              <img src={CEO} alt="Boat" className="proffesor" />
              <div className="caption">The selfie was taken by Ex-Google engineer Forhad Ahmed</div>
            </div>
          </Col>
          <Col md={6}>
            <div className="image-container">
              <img src={drSuraj} alt="Dr. Suraj" className=" proffesor" />
              <div className="caption">In animated conversation with Dr. Suraj, sharing smiles and insights at the University of Northampton.





              </div>
            </div>
          </Col>
        </Row>


        <Row>
          <Col md={12} className="home-about-social">
            <h1>{socialMedia.title}</h1>
            <p>{socialMedia.body}</p>
            <ul className="home-about-social-links">
              {socialMedia.links.map((link, index) => (
                <li className="social-icons" key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    {<link.icon />}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

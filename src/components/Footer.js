import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import footerData from "./footerData";
import homeTextData from "./Home/homeTextData";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{footerData.developer}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>{footerData.copyright} {year} SH</h3>
        </Col>
        <Col md="4" className="footer-body">
          
          <ul className="footer-icons">
            {homeTextData.socialMedia.links.map((link, index) => (
              <li key={index} className="social-icons">
                <a
                  href={link.url}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {React.createElement(link.icon)}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

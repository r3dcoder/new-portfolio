import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import aboutData from "./aboutData";

function WorkExperience() {
  return (
    <Row style={{ justifyContent: "center", padding: "10px" }}>
      <Col md={12}>
        <h1 className="project-heading">
          Work <strong className="purple">Experience</strong>
        </h1>
      </Col>
      {aboutData.workExperience.map((experience, index) => (
        <Col className="d-flex align-items-stretch" md={4} key={index} style={{ marginBottom: "20px" }}>
          <Card className="experience-card" style={{ border: "2px solid #c770f0", borderRadius: "10px", backgroundColor:"transparent" }}>
            <Card.Body style={{  color:"white" }}>
              <Card.Title style={{ color: "#c770f0", fontWeight: "bold" }}>{experience.position}</Card.Title>
              <Card.Subtitle className="mb-4 mt-4   ">
                {experience.company} | {experience.duration}
              </Card.Subtitle>
              <Card.Text>
                <ul>
                  {experience.responsibilities.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: "  10px", textAlign:"left" }}>{item}</li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default WorkExperience;

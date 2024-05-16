import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import aboutData from "./aboutData";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {aboutData.introduction.text}{" "}
            <span className="purple">{aboutData.introduction.highlight}</span>{" "}
            {aboutData.introduction.location}
            <br />
            {aboutData.introduction.profession}
            <br />
            <br />
            {aboutData.education.text}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            {aboutData.activities.map((activity, index) => (
              <li key={index} className="about-activity">
                <ImPointRight /> {activity}
              </li>
            ))}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{aboutData.quote.text}"{" "}
          </p>
          <footer className="blockquote-footer">{aboutData.quote.author}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

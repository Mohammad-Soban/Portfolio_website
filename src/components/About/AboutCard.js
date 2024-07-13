import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I'm <strong className="purple">Mohammad Soban</strong>
          , hailing from the vibrant city of <span className="purple"> Ahmedabad, India. </span>
            <br />
            <br />
            I am currently pursuing my <span className="purple">B.Tech in Computer Science</span> from
            <span className="purple"> Pandit Deendayal Energy University</span>
            <br />
            <br />
            I have a keen interest in <span className="purple">data analysis and interpretation</span>, finding insights from datasets to drive informed decision-making and innovative solutions.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Data is where knowledge meets opportunity!"{" "}
          </p>
          <footer className="blockquote-footer">Mohammad Soban</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

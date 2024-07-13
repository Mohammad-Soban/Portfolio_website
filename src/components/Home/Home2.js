import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import "./Home2.css"
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm a <span className="purple">passionate programmer</span> and <span className="purple">data enthusiast</span> with a love for technology and innovation.
              <br />
              <br />I am Fluent in
              <span className="purple"> Python, JavaScript</span> and <span className="purple">Scala</span> I'm always eager to explore new languages and technologies.
              <br />
              <br />
              I'm skilled in extracting insights from complex datasets using tools like <span className="purple"> Pandas, NumPy</span> and <span className="purple">SQL</span>. I'm also passionate about exploring new algorithms and techniques to solve real-world problems.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <span className="purple">Node.js</span> and
              <i>
                <span className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </span>
              </i>
              &nbsp; like
              <i>
                <span className="purple"> React.js and Express.js</span>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt className="tilt_image">
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mohammad-Soban"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub style={{ width: "100%", height: "75%", paddingTop: "6px" }}/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter style={{ width: "100%", height: "75%", paddingTop: "6px" }}/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soban1103/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn style={{ width: "100%", height: "75%", paddingTop: "6px" }}/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram style={{ width: "100%", height: "75%", paddingTop: "6px" }}/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import SocialMedia from "../socialMedia/SocialMedia";
import Hero from "../Hero"
import "./Home.css";


function Home() {
  return (
    <section>
      <div className="flex" id="header-main">
      <Container fluid id="home" style={{width: "700px"}}>
        <Particle />
        <Container className="home-content" id='home-main-name'>
          <Row>
          <Col md={7} className="home-header" id="header-left-main">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey TrailBlazer!{" "}
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> MOHAMMAD SOBAN SHAIKH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              {/* Now adding the social Media Links in the form of font awesome coloured */}
              <div className="social-media-links"> 
                < SocialMedia />
              </div>
            </Col>

            
            {/*  This the image which is displayed on the home page on the right side of the page */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* Add the Hero Section Here */}
            </Col>
          </Row>    

        </Container>
      </Container>
      <Hero />

      </div>
      <Home2 />
    </section>
  );
}

export default Home;

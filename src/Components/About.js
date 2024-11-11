import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Nav from 'react-bootstrap/Nav';
import "./About.css";

function About() {
  const html = 75;
  const css = 85;
  const js = 60;
  const bootstrap = 90;
  const react = 50;

  const [activeKey, setActiveKey] = useState('#education');

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <>
      <Container style={{ maxWidth: "1540px" }} className="about-container" id="about">
        <Row>
          <Col>
            <img className="about-img" alt="bala" />
          </Col>
          <Col className="about-abouttext">
            <p className="about-name">About Me</p>
            <p id="about-summery">
              Passionate frontend developer skilled in HTML, CSS, and JavaScript with a focus on creating
              responsive and user-friendly web applications. Eager to contribute to innovative projects
              and enhance user experiences.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="about-container">
        <div className="ESR-container">
          <Nav variant="underline" activeKey={activeKey} onSelect={handleSelect}>
            <Nav.Item>
              <Nav.Link eventKey="#education">Education</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#skills">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="#resume">Resume</Nav.Link>
            </Nav.Item>
          </Nav>

          <div>
            {activeKey === '#education' && (
              <div className="education">
                <h2>Education</h2>
                <div className="edu-text text">
                  <div><b>Front-End Development</b></div>
                  <div>Edex Institute, Coimbatore</div>
                  <div>2024</div>
                </div>
                <div className="edu-text text">
                  <div><b>Bachelor of Commerce With Computer Application (B.Com CA)</b></div>
                  <div>AG College of Art and Science, Tiruppur</div>
                  <div>2021-2024</div>
                </div>
                <div className="edu-text text">
                  <div><b>Boys Higher Secondary School</b></div>
                  <div>Higher Secondary Level Schooling (HSC), Palladam</div>
                  <div>2019-2021</div>
                </div>
              </div>
            )}

            {activeKey === '#skills' && (
              <div className="skills" id="skills">
                <h2>Skills</h2>
                <div className="skills-bar">
                  <div>HTML</div>
                  <ProgressBar now={html} label={`${html}%`} />
                  <div>CSS</div>
                  <ProgressBar now={css} label={`${css}%`} />
                  <div>JavaScript</div>
                  <ProgressBar now={js} label={`${js}%`} />
                  <div>Bootstrap</div>
                  <ProgressBar now={bootstrap} label={`${bootstrap}%`} />
                  <div>React</div>
                  <ProgressBar now={react} label={`${react}%`} />
                </div>
              </div>
            )}

            {activeKey === '#resume' && (
              <div>
                <h2>Resume</h2>
                <button className="resume-button">Click Here</button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;

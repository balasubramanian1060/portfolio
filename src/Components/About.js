
import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Nav from 'react-bootstrap/Nav'
import balaaboutimg from "./Web_Photo_Editor.jpg"

import "./About.css"


function About() {

    let html = 80
    let css = 85
    let Js = 60
    let bootstrap = 90
    let react = 50

    const [activeKey, setActiveKey] = useState('#education');

    const handleSelect = (key) => {
        setActiveKey(key);

    }
    return (
        <>
            <Container style={{ maxWidth: "1540px" }} className="about-container" id="about" >
                <Row>

                    <Col md="6" >
                        <img className="about-img" alt="bala"
                        // data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        src={balaaboutimg}   ></img>
                    </Col>
                    <Col className="about-abouttext" 
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                       
                        >
                        <p className="about-name" >About Me</p>
                        <p id="about-summery">
                            Passionate frontend developer skilled in HTML, CSS, and JavaScript with a focus on creating
                            responsive and user-friendly web applications. Eager to contribute to innovative projects
                            and enhance user experiences.</p>

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
                                            <div><b>Front-End Developement</b></div>
                                            <div>Edex Institute , Coimbatore</div>
                                            <div>2024</div>
                                        </div>
                                        <div className="edu-text text">
                                            <div><b>Bachelor of Commerce With Computer Application (B.Com CA)</b></div>
                                            <div>AG College of Art and Science , Tirppur</div>
                                            <div>2021-2024</div>
                                        </div>
                                        <div className="edu-text text">
                                            <div><b>Boys Higher Secondary School</b></div>
                                            <div>Higher Secondary Level Schooling (HSC) , Palladam</div>
                                            <div>2019-2021</div>
                                        </div>
                                    </div>
                                )}
                                {activeKey === '#skills' && (
                                    <div className="skills" id="skills">
                                        <h2>Skills</h2>
                                        <div className="skills-bar">
                                            <div>HTML</div>
                                            <ProgressBar now={80} label={`${html}%`} style={{width:"300px"}} />
                                            <div>CSS</div>
                                            <ProgressBar now={85} label={`${css}%`} style={{width:"300px"}} />
                                            <div>JavaScript</div>
                                            <ProgressBar now={60} label={`${Js}%`} style={{width:"300px"}} />
                                            <div>Bootstrap</div>
                                            <ProgressBar now={90} label={`${bootstrap}%`} style={{width:"300px"}} />
                                            <div>React</div>
                                            <ProgressBar now={50} label={`${react}%`} style={{width:"300px"}} />
                                        </div>
                                    </div>
                                )}
                                {activeKey === '#resume' && (
                                    <div>
                                        <h2>Resume</h2>
                                        <button className="resume-button">click here</button>
                                    </div>
                                )}
                            </div>
                        </div>



                    </Col>
                </Row>
            </Container>

        </>
    )
}


export default About;
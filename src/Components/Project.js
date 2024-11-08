import React from "react";
import "./Project.css";
import { Container, Row, Col } from "react-bootstrap";

function Project() {
    return (
        <Container style={{ maxWidth: "1540px" }} className="project-container bg-black" >
            <Row id="project" className="project-row">
                <div className="project-name">My Project</div>
                <Col xs={12} md={6} lg={4}>
                    <div className="project-card">
                        <a href="http://localhost:3000/">
                            <button className="calculator-button">
                                <p className="project-text">
                                    <b className="project-heading">Calculator</b>
                                    <p>I created a Calculator using HTML, CSS, JavaScript, and React</p>
                                </p>
                            </button>
                        </a>
                    </div>
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <div className="project-card">
                        <a href="https://bala-xogame.netlify.app/">
                            <button className="xogame-button">
                                <p className="project-text">
                                    <b className="project-heading">XO Game</b>
                                    <p>I created the XO game using HTML, CSS, JavaScript, and React</p>
                                </p>
                            </button>
                        </a>
                    </div>
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <div className="project-card">
                        <button className="formvalidation-button">
                            <p className="project-text">
                                <b className="project-heading">Form Validation</b>
                                <p>I created form validation functionality using HTML, CSS, JavaScript, and React</p>
                            </p>
                        </button>
                    </div>
                </Col>
            </Row>

            <Row className="project-row">
                <Col xs={12} md={6} lg={4} >
                    <div className="project-card">
                        <button className="todolist-button">
                            <p className="project-text">
                                <b className="project-heading">TO DO List</b>
                                <p>I created a TO DO list app using HTML, CSS, JavaScript, and React</p>
                            </p>
                        </button>
                    </div>
                </Col>

                <Col xs={12} md={6} lg={4} >
                    <div className="project-card">
                        <button className="weather-button">
                            <p className="project-text">
                                <b className="project-heading">Weather App</b>
                                <p>I created a weather app using HTML, CSS, JavaScript, and React</p>
                            </p>
                        </button>
                    </div>
                </Col>

                <Col xs={12} md={6} lg={4 } >
                    <div className="project-card">
                        <button className="portfolio-button">
                            <p className="project-text">
                                <b className="project-heading">E-Commerce Site</b>
                                <p>I created an e-commerce website using HTML, CSS, JavaScript, and React</p>
                            </p>
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Project;

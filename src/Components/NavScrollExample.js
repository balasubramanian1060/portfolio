
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavScrollExample.css'; 

function NavScrollExample() {
  const [activeKey, setActiveKey] = useState('home');

  return (
        
        
      <Navbar collapseOnSelect expand="lg" className="bar fixed-top bg-transparent ">
        <Container className="nav-container">
          <Navbar.Brand href="#home" id='hometext'> Protfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="ms-auto"
              activeKey={activeKey}
              onSelect={(selectedKey) => setActiveKey(selectedKey)} 
              id="navbar"
            >
              <Nav.Link eventKey="home" href="#home"  >
                Home
              </Nav.Link>
              <Nav.Link eventKey="about" href="#about" >
                About
              </Nav.Link>
              
              <Nav.Link eventKey="project" href="#project" >
                Project
              </Nav.Link>
              <Nav.Link eventKey="contact" href="#Contact" >
                Contact
              </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
}

export default NavScrollExample;

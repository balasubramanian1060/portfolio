import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Container, Row, Col } from 'react-bootstrap';
import "./Email.css"


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: " ",
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // 1. Send "Thank You" email to the user
    const userParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      
    };

    emailjs
      .send(
        'service_xtt0g41',    // YOUR_SERVICE_ID
        'template_dqhljoh',      // template_id
        userParams,           // Pass the user details as parameters
        '52ct4h9dAcNxduUEo'        // public key
      )
      .then((response) => {
        console.log('Thank You email sent successfully to the user!', response.status, response.text);
      })
      .catch((err) => console.error('Failed to send Thank You email to the user:', err));

    // 2. Send admin email with user details
    const adminParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      // admin_email: 'gowthamak812@gmail.com',  // You can add admin's email here if required
    };

    emailjs
      .send(
        'service_xtt0g41',   // YOUR_SERVICE_ID
        'template_jw2bt68',     // template_id
        adminParams,          // Pass the user details as parameters
        "52ct4h9dAcNxduUEo"        // public key
      )
      .then((response) => {
        console.log('Admin email sent successfully!', response.status, response.text);
      })
      .catch((err) => console.error('Failed to send admin email:', err));
  };

  return (
    <>
      <Container style={{ maxWidth: "1540px" }} className='contact'>
        <Row>
          <Col>

            <form onSubmit={sendEmail} className='inputgrp' id='contact' >
              <div className='contact-text'>
                <div className='text-hm'>Hire Me</div>
                <p className='text-i'>I am available for FRONTEND work. Connect with me via phone: 8807949783 or email: baladevaraj6@gmail.com</p>
              </div>
              <input className='inputbox'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name*"
                required
              />
              <input className='inputbox'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email*"
                required
              />
              <input className='inputbox'
                type='number'
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder='Your Phone Number*'
                required />

              <input className='inputbox message-input'
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Feed Back*"
                required
              />
              <Button type="submit" className='submitbutoon'>Send Message</Button>
            </form>
          </Col>
        </Row>
      </Container>


    </>
  );
};

export default ContactForm;
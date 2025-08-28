import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get('name');
    const userEmail = formData.get('email');
    const userPhone = formData.get('phone');
    const message = formData.get('message');

    // Validation
    if (!userName || !userEmail || !userPhone || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(userPhone)) {
      setStatus('Please enter a valid 10-digit phone number.');
      return;
    }

    // Send main message (to you)
    emailjs
      .sendForm('service_q54en4z', 'template_usumsdx', form.current, {
        publicKey: 'DPhv-8EKH0s_wzSgd',
      })
      .then(
        () => {
          console.log('Main email sent');

          // Send thank-you email to the user
          emailjs
            .send(
              'service_q54en4z',
              'template_flaaty1', // <-- Make sure this exists!
              {
                user_name: userName,
                user_email: userEmail,
                user_phone: userPhone,
              },
              { publicKey: 'DPhv-8EKH0s_wzSgd' }
            )
            .then(
              () => {
                console.log('Thank-you email sent');
                setStatus('Thank you for your message! Check your email.');
                form.current.reset();
              },
              (err) => {
                console.error('Thank-you email failed:', err);
                setStatus('Message sent, but thank-you email failed.');
              }
            );
        },
        (error) => {
          console.error('Main message failed:', error);
          setStatus('Failed to send your message. Please try again.');
        }
      );
  };

  return (
    <Container id="Contact" style={{ maxWidth: '1540px' }}>
      <Row>
        <p className="contactname">Contact</p>
        <Col xs={12} md={6}>
          <div>
            <form ref={form} onSubmit={sendEmail} className="contact">
              {status && <p className="status-msg">{status}</p>}

              <label className="contact-text">Name :</label>
              <input type="text" name="name" className="inputbox" /><br></br>

              <label className="contact-text">Email :</label>
              <input type="email" name="email" className="inputbox" /><br></br>

              <label className="contact-text">Phone :</label>
              <input type="tel" name="phone" pattern="[0-9]{10}" className="inputbox" /><br></br>

              <label className="contact-text ">Message :</label>
              <textarea name="message" className="inputboxmsg" />

              <input type="submit" value="Send" className="submitbutoon" />
            </form>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div className="map">
            <iframe
              title="Google Map Location"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.68409789470294!2d77.28692968906016!3d10.988561143931996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9a900549e2cbd%3A0x780122c591b69d4c!2sR.Devaraj(TNEB)%20house!5e1!3m2!1sen!2sin!4v1754733986023!5m2!1sen!2sin"
              width="400px"
              height="400px"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-container"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
    
  );
};

export default ContactUs;

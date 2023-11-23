import React from 'react'
import './css/Contact.css'
import ContactForm from './ContactForm'

const MyContact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <div className="contact-info">
        
         <ContactForm /> 
        
        <a href="https://linkedin.com/in/robert-lehane" target="_blank" rel="noopener noreferrer">
        <img
              src='LinkedIN_white.png'
              alt="LinkedIn"
              width="35px"
              height="35px"
            />
            </a>
            <a href="https://github.com/rob-Lehane" target="_blank" rel="noopener noreferrer">
        <img
              src='Github_white.png'
              alt="GitHub"
              width="35px"
              height="35px"
            />
            </a>
            <a href="https://instagram.com/roblehane" target="_blank" rel="noopener noreferrer">
        <img
              src="Instagram_white.png"
              alt="Instagram"
              width="35px"
              height="35px"
            />
            </a>
      </div>

    </div>
  );
};

export default MyContact;
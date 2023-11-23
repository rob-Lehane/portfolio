import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import './css/ContactForm.css'

const ContactForm = () => {
    const [sent, setSent] = useState(false)

    const form = useRef();
   
    const sendEmail = (e) => {
      e.preventDefault(); 
        setSent(true)
      emailjs.sendForm('service_74uzm6b', 'template_gdd12ks', form.current, 'lgaJ4Kc3MQ-P2STx9')
        .then((result) => 
        {
            <><p className = "submit_message">Your email has been sent.</p></>
        }, (error) => {
            <><p className = "submit_message">Error sending email. Please contact roblehane5@gmail.com</p></>
        });
    };
   
    return (
        <>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" hidden={sent}/>
      </form>

      <p hidden={!sent}>Message sent.</p>
      </>
    );
   };
   
   export default ContactForm;
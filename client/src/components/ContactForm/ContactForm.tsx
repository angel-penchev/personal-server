import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="group half left">
        <input className="input-text" type="text" name="name" required />
        <span className="highlight"></span>
        <label className="input-label">Name</label>
      </div>
      <div className="group half right">
        <input className="input-text" type="text" name="email" required />
        <span className="highlight"></span>
        <label className="input-label">Email</label>
      </div>
      <div className="group">
        <input className="input-text" type="text" name="subject" required />
        <span className="highlight"></span>
        <label className="input-label">Subject</label>
      </div>
      <div className="group">
        <textarea className="input-text" name="message" required />
        <span className="highlight"></span>
        <label className="input-label">Message</label>
      </div>
      <a className="send-btn">Send</a>
    </form>
  );
};

export default ContactForm;

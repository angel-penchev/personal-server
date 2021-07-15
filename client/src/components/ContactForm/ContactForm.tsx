import React, {useState} from 'react';
import './ContactForm.css';

const apiRoot = process.env.REACT_APP_API_ROOT || 'https://api.penchev.dev';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: any) => {
    console.log(JSON.stringify({name, email, subject, message}));
    fetch(`${apiRoot}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, subject, message}),
    }).then(function(response) {
      console.log(response);
      return response.json();
    });

    event.preventDefault();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="group half left">
        <input
          className="input-text"
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required />
        <span className="highlight" />
        <label className="input-label">Name</label>
      </div>
      <div className="group half right">
        <input
          className="input-text"
          type="text"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required />
        <span className="highlight" />
        <label className="input-label">Email</label>
      </div>
      <div className="group">
        <input
          className="input-text"
          type="text"
          name="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          required />
        <span className="highlight" />
        <label className="input-label">Subject</label>
      </div>
      <div className="group">
        <textarea
          className="input-text"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required />
        <span className="highlight" />
        <label className="input-label">Message</label>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactForm;

import React from 'react';
import {
  LogoGithub, LogoLinkedin, MailOutline, LocationOutline, PhonePortraitOutline,
} from 'react-ionicons';

const ContactInformation = () => {
  return (
    <div className='contact-information'>
      <div className="group">
        <LocationOutline />
        <span>Sofia, Bulgaria</span>
      </div>
      <div className="group">
        <a href="mailto:angel@penchev.dev">
          <MailOutline />
          <span>angel@penchev.dev</span>
        </a>
      </div>
      <div className="group">
        <a href="tel:00359882499204">
          <PhonePortraitOutline />
          <span>+359 882 499 204</span>
        </a>
      </div>
      <div className="group">
        <a href="https://linkedin.com/in/angel-penchev">
          <LogoLinkedin />
          <span>/angel-penchev</span>
        </a>
      </div>
      <div className="group">
        <a href="https://github.com/angel-penchev">
          <LogoGithub />
          <span>/angel-penchev</span>
        </a>
      </div>
    </div>
  );
};

export default ContactInformation;

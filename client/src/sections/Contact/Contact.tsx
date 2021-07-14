import React from 'react';
import LocationMap from '@components/LocationMap/LocationMap';
import './Contact.css';
import ContactForm from '@src/components/ContactForm/ContactForm';

const mapCenter = {lat: 45.356271, lng: 30.462244};
const mapPin = {lat: 42.6978634, lng: 23.3221789};
const mapZoom = 4;

const Contact = () => {
  return (
    <div className="contact section">
      <div className="section-heading">
        <h2 className="heading">Contact</h2>
        <h3 className="subheading">
          This page is still under construction. However, you can still contact
          me using the form below.
        </h3>
      </div>
      <div className="map">
        <LocationMap
          mapCenter={mapCenter}
          mapPin={mapPin}
          mapZoom={mapZoom}
        />
      </div>
      <div className="form">
        <ContactForm />
      </div>
      <div className="information"></div>
    </div>
  );
};

export default Contact;

import React from 'react';
import './Contact.css';
import GoogleMap from 'google-map-react';
import MapTheme from '../../assets/misc/map-theme.json';
import MapMarker from '../../components/MapMarker/MapMarker';

const mapCenter = {lat: 44.7629166, lng: 21.5161946};
const mapPin = {lat: 42.6978634, lng: 23.3221789};
const mapZoom = 6;

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
        <GoogleMap
          bootstrapURLKeys={{
            key: String(process.env.REACT_APP_GOOGLE_MAPS_API_KEY),
          }}
          defaultCenter={mapCenter}
          defaultZoom={mapZoom}
          options={{
            styles: MapTheme,
            gestureHandling: 'greedy',
            disableDefaultUI: true,
          }}
        >
          <MapMarker
            lat={mapPin.lat}
            lng={mapPin.lng}
          />
        </GoogleMap>
      </div>
      <div className="form"></div>
      <div className="information"></div>
    </div>
  );
};

export default Contact;

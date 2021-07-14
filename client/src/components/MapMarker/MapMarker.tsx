import React from 'react';
import './MapMarker.css';
import marker from '@assets/img/map-marker.svg';

interface Props {
    lat?: number;
    lng?: number;
}

const MapMarker = (props: Props) => {
  return (
    <div className="marker">
      <img
        src={marker}
        alt="Map location marker" />
    </div>
  );
};

export default MapMarker;

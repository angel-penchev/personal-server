import React from 'react';
import './LocationMap.css';
import GoogleMap from 'google-map-react';
import MapTheme from '@assets/misc/map-theme.json';
import MapMarker from '@components/MapMarker/MapMarker';

interface Props {
    mapCenter: {lat: number, lng: number};
    mapPin: {lat: number, lng: number};
    mapZoom: number;
}

const LocationMap = (props: Props) => {
  return (
    <GoogleMap
      bootstrapURLKeys={{
        key: String(process.env.REACT_APP_GOOGLE_MAPS_API_KEY),
      }}
      defaultCenter={props.mapCenter}
      defaultZoom={props.mapZoom}
      options={{
        styles: MapTheme,
        gestureHandling: 'greedy',
        disableDefaultUI: true,
      }}
    >
      <MapMarker
        lat={props.mapPin.lat}
        lng={props.mapPin.lng}
      />
    </GoogleMap>
  );
};

export default LocationMap;

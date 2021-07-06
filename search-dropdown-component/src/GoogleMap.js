import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from'./Marker';
import './GoogleMap.css';

function GoogleMap(props) {

  const locate = props.locationSuburb;
  const location = locate.centerPoint;

  return (
    <div className="location_map">
      {locate.centerPoint !== undefined ?
        <GoogleMapReact
          bootstrapURLKeys={{
            // remove the key if you want to fork
            key: "AIzaSyCkPfOtf7OdmA4jAajifRYybF0Kp4E_59k",
            language: "en",
            region: "US"
          }}
          center={{ lat: location.latitude, lng: location.longitude }}
          defaultZoom={15}
        >
          <Marker
            lat={location.latitude}
            lng={location.longitude}
            name="My Marker"
            color="red"
          />
        </GoogleMapReact>
        : ''}
    </div>
  )
}

export default GoogleMap
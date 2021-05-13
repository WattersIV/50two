import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {

  const mapStyles = {
    height: "300px",
    width: "1000px"
  };

  const defaultCenter = {
    lat: 45.333340, lng: -75.708970
  }

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <LoadScript
        googleMapsApiKey={`${process.env.MAPKEY}`}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
      </LoadScript>
    </div>
  )
}
export default Map;
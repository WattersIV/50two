import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './map.css'

const Map = () => {
  const size = useWindowSize();

  const mapStyles = {
    height: "300px",
    width: "1000px",
  };
  const largeMapStyles = {
    height: "561px",
    width: "100%",
  }

  const defaultCenter = {
    lat: 45.333340, lng: -75.708970
  }

  return (
    <div id='map-conatiner' style={ size.width <= 992 ? { display: 'flex', width: '100%' } : { display: 'flex', width: '100%', flex: 2 }}>
      <LoadScript
        googleMapsApiKey={`${process.env.MAPKEY}`}>
        <GoogleMap
          mapContainerStyle={ size.width <= 992 ? mapStyles : largeMapStyles }
          zoom={13}
          center={defaultCenter}
        />
      </LoadScript>
    </div>
  )
}
export default Map;


function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
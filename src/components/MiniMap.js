import React from "react";
import { compose, withProps } from "recompose";

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


function Map() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCAP_o89z3Ner51DPnCsvZDC7y7f-jJ41A',
  });
  const containerStyle = {
    bottom: 5,
    right: 5,
    height: "200px",
    width: "300px",
    position: "absolute",
    zIndex: 1000,
  };

  const center = {
    lat: -25.363,
    lng: 131.044
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={3}
    />
  ) : <></>
}

export default Map;
import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useSelector } from "react-redux";

function Map() {
  const data = useSelector((state) => state.mapSlc.coordinate);

  const [containerStyle, setContainerStyle] = useState({
    bottom: 5,
    right: 5,
    height: "200px",
    width: "300px",
    position: "absolute",
    zIndex: 1000,
    borderRadius: "10px",
    transition: "0.4s",
  });
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCAP_o89z3Ner51DPnCsvZDC7y7f-jJ41A",
  });

  const options = {
    disableDefaultUI: true,
  };

  const center = {
    lat: -25.363,
    lng: 131.044,
  };

  return isLoaded ? (
    <GoogleMap
      onClick={(e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
      }}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={3}
      options={options}
      onMouseOver={() => {
        setContainerStyle({
          ...containerStyle,
          width: "400px",
          height: "300px",
        });
      }}
      onMouseOut={() => {
        setContainerStyle({
          ...containerStyle,
          width: "300px",
          height: "200px",
        });
      }}
    />
  ) : (
    <></>
  );
}

export default Map;

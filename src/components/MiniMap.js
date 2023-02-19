import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useSelector } from "react-redux";

function Map() {
  const data = useSelector((state) => state.mapSlc.coordinate);
  const [guess, setGuess] = useState({ lat: "", lng: "" });

  const [containerStyle, setContainerStyle] = useState({
    height: "200px",
    width: "300px",
    cursor: "default",
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

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  const center = {
    lat: guess.lat != "" ? guess.lat : -25.363,
    lng: guess.lng != "" ? guess.lng : 131.044,
  };
  console.log(guess);

  return isLoaded ? (
    <div
      style={{
        position: "absolute",
        zIndex: 1000,
        right: 10,
        bottom: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}>
      <GoogleMap
        onClick={(e) => {
          const lat = e.latLng.lat();
          const lng = e.latLng.lng();
          setGuess({ ...guess, lat: lat, lng: lng });
        }}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3}
        options={options}
        onMouseOver={() => {
          setContainerStyle({
            ...containerStyle,
            width: "450px",
            height: "300px",
          });
        }}
        onMouseOut={() => {
          setContainerStyle({
            ...containerStyle,
            width: "250px",
            height: "150px",
          });
        }}>
        {guess.lat == "" || guess.lng == "" ? (
          ""
        ) : (
          <Marker onLoad={onLoad} position={center} title="your guess"></Marker>
        )}
      </GoogleMap>
      <button
        style={
          guess.lat == "" || guess.lng == ""
            ? {
                background: "rgba(0,0,0,.30)",
                borderRadius: "10px",
                height: "30px",
                color: "rgba(200,200,200,0.7)",
                fontWeight: "bolder",
                marginTop: "10px",
                transition: "0.4s",
                cursor: "not-allowed",
              }
            : {
                background: "#37f725",
                borderRadius: "10px",
                height: "30px",
                color: "rgba(255,255,255,1)",
                fontWeight: "bolder",
                marginTop: "10px",
                transition: "0.4s",
              }
        }>
        Complete your guess!
      </button>
    </div>
  ) : (
    <></>
  );
}

export default Map;

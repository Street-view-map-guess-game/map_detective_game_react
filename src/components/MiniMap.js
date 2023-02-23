import React, { useState } from "react";
//import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useSelector } from "react-redux";

import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet';

import "leaflet/dist/leaflet.css";

function Map() {
  const [containerStyle, setContainerStyle] = useState({
    height: "200px",
    width: "300px",
    cursor: "default",
    borderRadius: "10px",
    transition: "0.4s",
  });


  return (
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
      <MapContainer
        center={[39.92077, 32.85411]}
        zoom={5}
        scrollWheelZoom={true}
        style={containerStyle}
        zoomControl={false}
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
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        (
        <Marker
          position={[50.5, 30.5]}
          eventHandlers={{
            click: (e) => {
              console.log('marker clicked', e)
            },
          }} >
          <Popup>You clicked here</Popup>
        </Marker>
        )
      </MapContainer>
    </div>
  );
}

export default Map;

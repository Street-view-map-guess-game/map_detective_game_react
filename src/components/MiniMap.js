import React, { useState } from "react";
//import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useSelector } from "react-redux";

import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet';

import L from "leaflet";

import "leaflet/dist/leaflet.css";

function AddMarkerOnClick() {
  const [position, setPosition] = useState(null);
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });
  const icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
    iconAnchor: [12, 41], // adjust the anchor point to position the icon above the clicked location
  });

  return position === null ? null : (
    <Marker position={position} icon={icon}>
      <Popup >You clicked here!</Popup>
    </Marker>
  );
}

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
      }}
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
      <MapContainer
        center={[39.92077, 32.85411]}
        zoom={5}
        scrollWheelZoom={true}
        style={containerStyle}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        (
        <AddMarkerOnClick />
        )
      </MapContainer>
    </div>
  );
}

export default Map;

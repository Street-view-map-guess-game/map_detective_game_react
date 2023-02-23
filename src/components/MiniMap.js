import React, { useState } from "react";
import { useSelector } from "react-redux";
import { setScore } from "../gameFunctions/gameFunctions";
import styles from "../styles/mapStyle.module.css";

import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

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

  const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    iconAnchor: [12, 41], // adjust the anchor point to position the icon above the clicked location
  });

  const calculateDistanceNScore = () => {
    if (guess.lat === "" || guess.lng === "") {
      alert("Lütfen tahmin yapın");
    } else {
      const score = setScore();
    }
  };

  const center = {
    lat: guess.lat != "" ? guess.lat : 38.9637,
    lng: guess.lng != "" ? guess.lng : 35.2433,
  };

  function MapEvents() {
    useMapEvents({
      click: (e) => {
        setGuess(e.latlng);
        console.log(guess);
      },
      onMouseOver: () => {
        console.log("Geldi");
      },
    });
    return null;
  }

  return (
    <div className={styles.mainContainer}>
      <MapContainer
        className={styles.mapContainer}
        center={center}
        zoom={4}
        scrollWheelZoom={true}
        zoomControl={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {guess.lat === "" || guess.lng === "" ? (
          ""
        ) : (
          <Marker position={guess} icon={icon}>
            <Popup>Tahmininiz</Popup>
          </Marker>
        )}
        <MapEvents></MapEvents>
      </MapContainer>
      <button
        onClick={calculateDistanceNScore}
        className={
          guess.lat === "" || guess.lng === ""
            ? styles.buttonNoGuess
            : styles.buttonGuess
        }>
        Complete your guess!
      </button>
    </div>
  );
}

export default Map;

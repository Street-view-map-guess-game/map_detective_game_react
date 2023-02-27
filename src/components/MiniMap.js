import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restartCoordinate } from "../Redux/MapGameSlices/mapSlice";
import { Polyline } from "react-leaflet";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";

import { setScore } from "../gameFunctions/gameFunctions";
import styles from "../styles/mapStyle.module.css";
import { findDistance } from "../mapFunctions/mapFunctions";

import "leaflet/dist/leaflet.css";

function Map() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mapSlc.coordinate);
  const [guess, setGuess] = useState({ lat: "", lng: "" });
  const [isGuessed, setGuessed] = useState(false);
  const [isRaundOver, setRaundOver] = useState(false);

  // Dünya sınırları için
  const wolrdBounds = [
    [-90, -180],
    [90, 180],
  ];

  const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    iconAnchor: [12, 41], // adjust the anchor point to position the icon above the clicked location
  });

  const calculateDistanceNScore = () => {
    if (guess.lat === "" || guess.lng === "") {
      alert("Lütfen tahmin yapın");
    } else {
      const distance = findDistance(data, guess);
      const score = setScore(distance);
      console.log(score);
      setGuessed(true);
    }
  };

  const center = {
    lat: guess.lat !== "" ? guess.lat : 38.9637,
    lng: guess.lng !== "" ? guess.lng : 35.2433,
  };

  const pathOptions = {
    color: "black",
    weight: "1",
    dashArray: "5, 5",
    dashOffset: "8",
  };

  function MapEvents() {
    useMapEvents({
      click: (e) => {
        if (!isGuessed) {
          setGuess(e.latlng);
          console.log(guess);
        }
      },
    });
    return null;
  }

  const generateNewCoordinate = () => {
    // puanı depola

    // sokak görünümünü yenile
    dispatch(restartCoordinate());
    // tahmin verilerini sıfırla
    setGuess({ lat: "", lng: "" });
    setGuessed(false);
  };

  return (
    <div className={styles.mainContainer}>
      <MapContainer
        className={styles.mapContainer}
        center={center}
        zoom={5}
        scrollWheelZoom={true}
        zoomControl={false}
        maxBounds={wolrdBounds}
        maxBoundsViscosity={1.0}
        minZoom={2}
        maxZoom={8}>
        <TileLayer
          noWrap={true}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {guess.lat === "" || guess.lng === "" ? (
          ""
        ) : (
          <Marker position={guess} icon={icon}>
            <Popup>Your Guess</Popup>
          </Marker>
        )}
        {isGuessed ? (
          <Polyline
            pathOptions={pathOptions}
            positions={[
              [data.lat, data.lng],
              [guess.lat, guess.lng],
            ]}></Polyline>
        ) : (
          ""
        )}
        {isGuessed ? (
          <Marker position={data} icon={icon}>
            <Popup>Real Coordinate</Popup>
          </Marker>
        ) : (
          ""
        )}
        <MapEvents></MapEvents>
      </MapContainer>
      <button
        onClick={isGuessed ? generateNewCoordinate : calculateDistanceNScore}
        className={
          guess.lat === "" || guess.lng === ""
            ? styles.buttonNoGuess
            : styles.buttonGuess
        }>
        {isGuessed ? "New Coordinate" : "Complete your guess!"}
      </button>
    </div>
  );
}

export default Map;

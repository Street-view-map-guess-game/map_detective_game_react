import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import { useMediaQuery } from "react-responsive"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

import { setScore } from "../../gameFunctions/gameFunctions";
import styles from "../../styles/mapStyle.module.css";
import { findDistance } from "../../mapFunctions/mapFunctions";
import guessMarker from "../../assets/images/pageImage/markers/guessMarker.gif";

import { setagaintimescore, againsttimeguess } from "../../Redux/MapGameSlices/mapSlice";
import pickingvoice from "../../assets/voices/pickingvoice.mp3"
import "leaflet/dist/leaflet.css";

function Maptime() {
  const doneGuessData = useSelector((state) => state.mapSlc.isGuessed);
  const data = useSelector((state) => state.mapSlc.coordinate);
  const [guess, setGuess] = useState({ lat: "", lng: "" });

  const dispatch = useDispatch()

  const isMobileHeight = useMediaQuery({ maxHeight: 600 });
  const isMobile = useMediaQuery({ maxWidth: 600 }) || isMobileHeight;
  const [mobileMapButton, setmobileMapButton] = useState(false);



  // Dünya sınırları için
  const wolrdBounds = [
    [-90, -180],
    [90, 180],
  ];

  const icon = L.icon({
    iconUrl: guessMarker,
    iconSize: [50, 50],
    iconAnchor: [25, 50], // adjust the anchor point to position the icon above the clicked location
  });

  const calculateDistanceNScore = () => {
    if (guess.lat === "" || guess.lng === "") {
      alert("Lütfen tahmin yapın");
    } else {
      const distance = findDistance(data, guess);
      const score = parseFloat(setScore(distance));
      dispatch(setagaintimescore(score))
      dispatch(againsttimeguess({ lat: guess.lat, lng: guess.lng }))
      const audio = new Audio(pickingvoice);
      audio.play();

    }
  };

  const center = {
    lat: guess.lat !== "" ? guess.lat : 38.9637,
    lng: guess.lng !== "" ? guess.lng : 35.2433,
  };

  useEffect(() => {
    setGuess({ lat: "", lng: "" });
  }, [doneGuessData]);

  function MapEvents() {
    useMapEvents({
      click: (e) => {
        setGuess(e.latlng);

        console.log(guess);
      },
    });
    return null;
  }

  return (
    isMobile ? (
      //telefon ise 
      <>
        <div
          style={{
            position: "absolute",
            top: window.innerHeight / 2,
            right: 25,
            fontSize: 80,
            zIndex: 90
          }}
          onClick={() => setmobileMapButton(!mobileMapButton)}
        >
          <div style={{ width: "80px", height: "80px", borderRadius: "50%", backgroundColor: mobileMapButton ? "rgba(255, 0, 0, 0.7)" : "rgba(0, 255, 0, 0.7)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <FontAwesomeIcon icon={faMapMarkedAlt} style={{ color: "#fff", fontSize: "40px" }} />
          </div>
        </div>
        {mobileMapButton ? (
          // If button clicked, show the map component
          <div
            className={styles.mobileMainContainer}
            style={{ color: "black", fontSize: 24 }}>
            <MapContainer
              className={styles.mobileMapContainer}
              style={{ width: isMobileHeight ? window.innerHeight : window.innerWidth, height: isMobileHeight ? window.innerHeight / 2.5 : window.innerWidth / 2 }}
              center={center}
              zoom={5}
              scrollWheelZoom={true}
              zoomControl={false}
              maxBounds={wolrdBounds}
              maxBoundsViscosity={1.0}
              minZoom={2}
              maxZoom={18}
            >
              <TileLayer
                noWrap={true}
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
              />
              {guess.lat === "" || guess.lng === "" ? (
                ""
              ) : (
                <Marker position={guess} icon={icon}>
                  <Popup>Your Guess</Popup>
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
              "Complete your guess!"
            </button>
          </div>
        ) : (
          null
        )}
      </>
    ) : (
      <div
        className={styles.mainContainer}
        style={{ color: "black", fontSize: 24 }}>
        <MapContainer
          className={styles.mapContainer}
          center={center}
          zoom={5}
          scrollWheelZoom={true}
          zoomControl={false}
          maxBounds={wolrdBounds}
          maxBoundsViscosity={1.0}
          minZoom={2}
          maxZoom={18}
        >
          <TileLayer
            noWrap={true}
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
          />
          {guess.lat === "" || guess.lng === "" ? (
            ""
          ) : (
            <Marker position={guess} icon={icon}>
              <Popup>Your Guess</Popup>
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
          "Complete your guess!"
        </button>
      </div>
    )
  );
}

export default Maptime;

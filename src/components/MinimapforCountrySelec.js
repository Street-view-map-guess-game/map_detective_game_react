import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
  GeoJSON
} from "react-leaflet";
import L from "leaflet";
import { useMediaQuery } from "react-responsive"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { point, booleanPointInPolygon } from "@turf/turf";

import { setScore } from "../gameFunctions/gameFunctions";
import styles from "../styles/mapStyle.module.css";
import { findDistance } from "../mapFunctions/mapFunctions";
import ResultPage from "../pages/ResultPage";
import guessMarker from "../assets/images/pageImage/markers/guessMarker.gif";
import "leaflet/dist/leaflet.css";

import countryBorder from "../allCoordinates/countriesborder.json"

function MinimapCountrySelection() {
  const doneGuessData = useSelector((state) => state.mapSlc.isGuessed);

  const [guess, setGuess] = useState({ lat: "", lng: "" });
  const [result, setResultPage] = useState(false);
  const [roundScore, setroundScore] = useState(0.0);

  const isMobileHeight = useMediaQuery({ maxHeight: 600 });
  const isMobile = useMediaQuery({ maxWidth: 600 }) || isMobileHeight;
  const [mobileMapButton, setmobileMapButton] = useState(false);


  // Dünya sınırları için
  const wolrdBounds = [
    [-90, -180],
    [90, 180],
  ];

  const center = {
    lat: guess.lat !== "" ? guess.lat : 38.9637,
    lng: guess.lng !== "" ? guess.lng : 35.2433,
  };

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountryKey, setSelectedCountryKey] = useState(null);
  const [realCountryKey, setRealCountryKey] = useState(null);

  const data = useSelector((state) => state.mapSlc.coordinate);


  //hangi ülkenin sınırları içinde
  useEffect(() => {
    const dataArray = [data.lng, data.lat];
    const pointCoord = point(dataArray);
    for (let i = 0; i < countryBorder.features.length; i++) {
      const border = countryBorder.features[i];
      if (booleanPointInPolygon(pointCoord, border)) {
        setRealCountryKey(border.properties.ISO_A3);
      }
    }
  }, [data]);

  useEffect(() => {
    console.log(realCountryKey)
  }, [realCountryKey]);

  const countryControl = () => {
    if (selectedCountryKey === null) {
      alert("Lütfen tahmin yapın");
    } else {
      if (selectedCountryKey === realCountryKey) {
        console.log("True,Congratulations")
      }
      else {
        console.log("False,Please try again")
      }
    }
  };


  // tıklama ile tıklanan ülkeyi seçme
  const onCountryClick = (e) => {
    setSelectedCountry(e.target.feature);
    setSelectedCountryKey(e.target.feature.properties.ISO_A3)
  };


  return result ? (
    <ResultPage score={roundScore} guess={guess}></ResultPage>
  ) : (
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
          <div style={{ width: "80px", height: "80px", borderRadius: "50%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
              <GeoJSON
                data={countryBorder.features}
                onEachFeature={(feature, layer) => {
                  layer.on({
                    click: onCountryClick,
                  });
                }}
                style={{
                  fillOpacity: 0.0,
                  weight: 0,
                }}
              />
              {selectedCountry && (
                <GeoJSON
                  key={selectedCountryKey}
                  data={selectedCountry}
                  style={{
                    fillColor: 'purple',
                    fillOpacity: 0.5,
                    color: 'black',
                    weight: 2,
                  }}
                />
              )}

            </MapContainer>
            <button
              onClick={countryControl}
              className={
                selectedCountry === null
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
          <GeoJSON
            data={countryBorder.features}
            onEachFeature={(feature, layer) => {
              layer.on({
                click: onCountryClick,
              });
            }}
            style={{
              fillOpacity: 0.0,
              weight: 0,
            }}
          />
          {selectedCountry && (
            <GeoJSON
              key={selectedCountryKey}
              data={selectedCountry}
              style={{
                fillColor: 'purple',
                fillOpacity: 0.5,
                color: 'black',
                weight: 2,
              }}
            />
          )}

        </MapContainer>
        <button
          onClick={countryControl}
          className={
            selectedCountry === null
              ? styles.buttonNoGuess
              : styles.buttonGuess
          }>
          "Complete your guess!"
        </button>
      </div>
    )
  );
}

export default MinimapCountrySelection;
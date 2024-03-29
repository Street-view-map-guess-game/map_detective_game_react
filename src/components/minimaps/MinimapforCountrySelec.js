import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MapContainer,
  TileLayer,
  GeoJSON
} from "react-leaflet";
import { useMediaQuery } from "react-responsive"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { point, booleanPointInPolygon } from "@turf/turf";
import { useParams } from "react-router-dom";

import { restartCoordinate } from "../../Redux/MapGameSlices/mapSlice.js";
import styles from "../../styles/mapStyle.module.css";
import ResultPage from "../../pages/resultPages/WhichCountryResultPage";
import InfoCard from "../UI/WhichCountryModInfoCard"

import "leaflet/dist/leaflet.css";

import countryBorder from "../../allCoordinates/countriesborder.json"


function MinimapCountrySelection() {
  const { countryName } = useParams();
  const [result, setResultPage] = useState(false);

  // mobil ekran mı bunun kontrolü için değişkenler
  const isMobileHeight = useMediaQuery({ maxHeight: 600 });
  const isMobile = useMediaQuery({ maxWidth: 600 }) || isMobileHeight;
  const [mobileMapButton, setmobileMapButton] = useState(false);


  // yanlış tahmin sayısını tutan değişken  
  const [remaingGuessNumber, setRemaingGuessNumber] = useState(5)
  //doğru tahmin sayısı
  const [trueGuessNumber, setTrueGuessNumber] = useState(0)


  useEffect(() => {
    if (remaingGuessNumber <= 0) {
      setResultPage(true);
    }
  }, [remaingGuessNumber])

  const data = useSelector((state) => state.mapSlc.coordinate);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountryKey, setSelectedCountryKey] = useState(null);
  const [realCountry, setRealCountry] = useState(null);
  const [realCountryKey, setRealCountryKey] = useState(null);
  const [selectedCountryColor, setSelectedCountryColor] = useState({
    fillColor: 'purple',
    fillOpacity: 0.5,
    color: 'black',
    weight: 2,
  });

  // bir ülkeyi tekrar seçmesini engellemek için tanımlandı
  const [blockAgainClick, setBlockAgainClick] = useState(true);

  // yeni koordinat tanımlama
  const [nextCoordinateButton, setNextCoordinateButton] = useState(false);

  // yanlış seçilen ülkelerin tutulduğu array
  const [falseSelectedCountryArray, setFalseSelectedCountryArray] = useState([]);

  const falseSelectedCountryArrayRef = useRef(falseSelectedCountryArray);

  const dispatch = useDispatch();

  // yeni koordinat üreten fonksiyon
  const generateNewCoordinate = () => {
    // sokak görünümünü yenile
    dispatch(restartCoordinate());

    // değişken sıfırlama işlemleri
    setSelectedCountry(null)
    setSelectedCountryKey(null)
    setFalseSelectedCountryArray([]);
    setBlockAgainClick(false)
    setNextCoordinateButton(false)
  };

  // Dünya sınırları için
  const wolrdBounds = [
    [-90, -180],
    [90, 180],
  ];

  const center = {
    lat: 38.9637,
    lng: 35.2433,
  };

  // mapte seçilen ülkenin doğru olup olmadığını kontrol eder
  const countryControl = () => {
    if (selectedCountryKey === null) {
      alert("PLEASE GUESS");
    }
    else {
      // ülke seçimi doğru ise
      if (selectedCountryKey === realCountryKey) {
        setSelectedCountryColor({
          fillColor: 'green',
          fillOpacity: 0.5,
          color: 'black',
          weight: 2,
        })
        setTrueGuessNumber(trueGuessNumber + 1)
        alert("CORRECT GUESS!");
        setNextCoordinateButton(true)
      }
      // ülke seçimi hatalı ise
      else {
        // kalan tahmin hakkı
        setRemaingGuessNumber(remaingGuessNumber - 1)
        // yanlış bilinen ülkeleri arraye alıyor
        if (!falseSelectedCountryArray.includes(selectedCountryKey)) {
          setFalseSelectedCountryArray([...falseSelectedCountryArray, selectedCountryKey]);
        }
        setBlockAgainClick(false)
      }
    }
  };

  //sokak görünümü hangi ülkenin sınırları içinde
  useEffect(() => {
    const dataArray = [data.lng, data.lat];
    const pointCoord = point(dataArray);
    for (let i = 0; i < countryBorder.features.length; i++) {
      const border = countryBorder.features[i];
      if (booleanPointInPolygon(pointCoord, border)) {
        setRealCountryKey(border.properties.ISO_A3);
        setRealCountry(border)
      }
    }
  }, [data]);


  // yeni ülke seçilince ülke seçme rengini başlangıç rengine çevirir
  useEffect(() => {
    setSelectedCountryColor({
      fillColor: 'purple',
      fillOpacity: 0.5,
      color: 'black',
      weight: 2,
    })
  }, [selectedCountryKey]);


  useEffect(() => {
    falseSelectedCountryArrayRef.current = falseSelectedCountryArray;
  }, [falseSelectedCountryArray]);

  // tıklama ile tıklanan ülkeyi seçme
  const onCountryClick = (e) => {
    setBlockAgainClick(true)
    const selectedISO_A3 = e.target.feature.properties.ISO_A3;
    if (!falseSelectedCountryArrayRef.current.includes(selectedISO_A3)) {
      setSelectedCountry(e.target.feature);
      setSelectedCountryKey(selectedISO_A3);
    }
  };


  return result ? (
    <ResultPage score={trueGuessNumber} falseCountryArray={falseSelectedCountryArray} realCountry={realCountry} realCountryKey={realCountryKey} />
  ) : (
    isMobile ? (
      //telefon ise 
      <>
        <InfoCard countryName={countryName} trueGuessNumber={trueGuessNumber} remaingGuessNumber={remaingGuessNumber} />
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
              {!nextCoordinateButton && (
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
              )}
              {selectedCountry && (
                <GeoJSON
                  key={selectedCountryKey}
                  data={selectedCountry}
                  style={selectedCountryColor}
                />
              )}
              {
                falseSelectedCountryArray.map((falseCountryKey) => (
                  <GeoJSON
                    key={falseCountryKey}
                    data={countryBorder.features.find(feature => feature.properties.ISO_A3 === falseCountryKey)}
                    style={{
                      fillColor: 'red',
                      fillOpacity: 0.5,
                      color: 'black',
                      weight: 2,
                    }}
                  />
                ))
              }
            </MapContainer>
            <button
              onClick={nextCoordinateButton ? (generateNewCoordinate) : (blockAgainClick ? (countryControl) : null)}
              className={
                (!blockAgainClick || (selectedCountry === null))
                  ? styles.buttonNoGuess
                  : styles.buttonGuess
              }>

              {nextCoordinateButton ? '"Get New Coordinate"' : '"Complete your guess!"'}
            </button>
          </div>
        ) : (
          null
        )}
      </>
    ) : (
      <>
        <InfoCard countryName={countryName} trueGuessNumber={trueGuessNumber} remaingGuessNumber={remaingGuessNumber} />
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
            {!nextCoordinateButton && (
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
            )}

            {selectedCountry && (
              <GeoJSON
                key={selectedCountryKey}
                data={selectedCountry}
                style={selectedCountryColor}
              />
            )}
            {
              falseSelectedCountryArray.map((falseCountryKey) => (
                <GeoJSON
                  key={falseCountryKey}
                  data={countryBorder.features.find(feature => feature.properties.ISO_A3 === falseCountryKey)}
                  style={{
                    fillColor: 'red',
                    fillOpacity: 0.5,
                    color: 'black',
                    weight: 2,
                  }}
                />
              ))
            }
          </MapContainer>
          <button
            onClick={nextCoordinateButton ? (generateNewCoordinate) : (blockAgainClick ? (countryControl) : null)}
            className={
              (!blockAgainClick || (selectedCountry === null))
                ? styles.buttonNoGuess
                : styles.buttonGuess
            }>

            {nextCoordinateButton ? '"Get New Coordinate"' : '"Complete your guess!"'}
          </button>
        </div>
      </>
    )
  );
}

export default MinimapCountrySelection;
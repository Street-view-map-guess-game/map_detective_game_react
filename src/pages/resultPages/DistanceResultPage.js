import React from "react";
import { useState, useEffect } from "react";
import { Polyline } from "react-leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  calculateTotalScore,
  restartGame,
  increaseNumberOfRounds,
} from "../../Redux/MapGameSlices/gameSlice";
import {
  openCloseResultPage,
  restartCoordinate,
} from "../../Redux/MapGameSlices/mapSlice";
import styles from "../../styles/mapStyle.module.css";
import Counter from "../../components/Counter";

import userGuessMarker from "../../assets/images/pageImage/markers/userGuessMarker.png";
import correctLocationMarker from "../../assets/images/pageImage/markers/correctGuessMarker.png";

function DistanceResultPage({ score, guess }) {
  const numberOfRound = useSelector((state) => state.gmSlc.numOfRound);
  const totalScore = useSelector((state) => state.gmSlc.totalScore);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mapSlc.coordinate);
  const [isGameOver, setIsGameOver] = useState(false);


  const userMarker = L.icon({
    iconUrl: userGuessMarker,
    iconSize: [50, 50],
    iconAnchor: [25, 50], // adjust the anchor point to position the icon above the clicked location
  });
  const realCoorMarker = L.icon({
    iconUrl: correctLocationMarker,
    iconSize: [50, 50],
    iconAnchor: [25, 50], // adjust the anchor point to position the icon above the clicked location
  });

  const wolrdBounds = [
    [-90, -180],
    [90, 180],
  ];

  const center = {
    lat: 38.9637,
    lng: 35.2433,
  };

  const generateNewCoordinate = () => {
    // sokak görünümünü yenile
    dispatch(restartCoordinate());
    //Total score
    dispatch(calculateTotalScore(score));
    // tahmin verilerini sıfırla
    dispatch(increaseNumberOfRounds());
    //sonuç sayfasını kapat
    dispatch(openCloseResultPage());
  };

  const startNewGame = () => {
    dispatch(restartGame());
    navigate("/distancemod/countryselection");
  };

  useEffect(() => {
    if (numberOfRound === 5) {
      setIsGameOver(true);
    }
  }, [numberOfRound]);

  const pathOptions = {
    color: "black",
    weight: "1",
    dashArray: "5, 5",
    dashOffset: "8",
  };

  return (
    <div
      className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-500 via-sky-800 to-red-900 min-h-screen flex flex-col justify-center items-center"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10,
        fontSize: 80,
      }}>
      <div className="-mt-24 sm:mt-0 text-center">
        {isGameOver ? (
          <div className="text-6xl text-white font-bold mb-5">Game is Over</div>
        ) : (
          ""
        )}
        <MapContainer
          className={"w-148 h-122 sm:w-screen sm:h-64 rounded "}
          center={center}
          zoom={2}
          scrollWheelZoom={true}
          zoomControl={false}
          maxBounds={wolrdBounds}
          maxBoundsViscosity={1.0}
          minZoom={2}
          maxZoom={18}>
          <TileLayer
            noWrap={true}
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
          />

          <Marker position={guess} icon={userMarker}>
            <Popup>Your Guess</Popup>
          </Marker>

          <Polyline
            pathOptions={pathOptions}
            positions={[
              [data.lat, data.lng],
              [guess.lat, guess.lng],
            ]}></Polyline>

          <Marker position={data} icon={realCoorMarker}>
            <Popup>Real Coordinate</Popup>
          </Marker>
        </MapContainer>
        <div className="scores mt-2 flex justify-between basis-2/5 text-white text-2xl">
          <div className="roundScore">
            Round Score: <Counter end={score}></Counter>{" "}
          </div>
          <div className="totalScore">
            Total Score:{" "}
            <Counter start={totalScore} end={totalScore + score}></Counter>
          </div>
        </div>
      </div>

      <div className="mt-0 ">
        <button
          onClick={isGameOver ? startNewGame : generateNewCoordinate}
          className={styles.bttnNewGuess}>
          {isGameOver ? "Start New Game" : "New Guess"}
        </button>
      </div>
    </div>
  );
}

export default DistanceResultPage;
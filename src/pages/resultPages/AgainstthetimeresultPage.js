import React from "react";
import { Polyline } from "react-leaflet";

import { calculateTotalScore, increaseNumberOfRounds, restartGame, startthegametime } from "../../Redux/MapGameSlices/gameSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { openCloseResultPage, restartCoordinate } from "../../Redux/MapGameSlices/mapSlice";
import { useState, useEffect } from "react";
import styles from "../../styles/mapStyle.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Counter from "../../components/Counter";
import userGuessMarker from "../../assets/images/pageImage/markers/userGuessMarker.png";
import correctLocationMarker from "../../assets/images/pageImage/markers/correctGuessMarker.png";


function AgainstResultPage({ score, guess, sonuc }) {
  const numberOfRound = useSelector((state) => state.gmSlc.numOfRound);
  const totalScore = useSelector((state) => state.gmSlc.totalScore);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mapSlc.coordinate);
  const [isGameOver, setIsGameOver] = useState(false);
  const isshow = useSelector((state) => state.gmSlc.gamestarttime);
  const [time, settime] = useState(10)



  const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    iconAnchor: [12, 41], // adjust the anchor point to position the icon above the clicked location
  });

  const wolrdBounds = [
    [-90, -180],
    [90, 180],
  ];

  const center = {
    lat: 38.9637,
    lng: 35.2433,
  };
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
  const sayac = () => {
    settime(time - 1)
  }

  const generateNewCoordinate = () => {

    if (sonuc === 0) {
      // sokak görünümünü yenile
      dispatch(restartCoordinate());
      //Total score
      dispatch(calculateTotalScore(score));
      // tahmin verilerini sıfırla
      dispatch(increaseNumberOfRounds());
      //sonuç sayfasını kapat
      dispatch(openCloseResultPage());

    }
  };

  const startNewGame = () => {
    dispatch(restartGame());
    navigate("/countryselection");
  };

  useEffect(() => {
    const timer = setInterval(() => {


      sayac()

      if (time === 0) {
        generateNewCoordinate()
      }

    }, 1000);
    return () => clearInterval(timer)
  })



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

        {guess != 0 ? (<> <MapContainer
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
        </MapContainer></>) : (<><h1 className="mapStyle_counterVal__vw7ds" style={{}}>!</h1><h1 className="mapStyle_counterVal__vw7ds" style={{ marginBottom: "4rem", fontSize: "4rem" }}>please pick the map </h1></>)}
        <div className="scores mt-2 flex justify-between basis-2/5 text-white text-2xl">
          <><div className="roundScore">
            Round Score: <Counter end={score}></Counter>{" "}
          </div>
            <div className="totalScore">
              Total Score:{" "}
              <Counter start={totalScore} end={totalScore + score}></Counter>
            </div></>
        </div>
      </div>

      {sonuc !== 0 ? (<div>


        <h1 className="mapStyle_counterVal__vw7ds">
          game over !
        </h1>

        <div className="text-center">
          <button className="   relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-yellow-300 border-2 border-yellow-300 rounded-full hover:text-black group hover:bg-gray-50" onClick={() => {
            navigate("/gamemodpage");
          }}>
            <span className="absolute left-0 block w-full h-0 transition-all bg-yellow-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg className="w-5 h-5" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative">go to menu</span>



          </button>
        </div>



      </div>) : (<div> <h1 className="mapStyle_counterVal__vw7ds">{time}</h1></div>)}


    </div>
  );
}

export default AgainstResultPage;

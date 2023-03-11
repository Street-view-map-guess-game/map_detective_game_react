import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useNavigate } from "react-router-dom";

import styles from "../../styles/mapStyle.module.css";
import Counter from "../../components/Counter";
import countryBorder from "../../allCoordinates/countriesborder.json"


function WhichCountryResultPage({ score, falseCountryArray, realCountry, realCountryKey }) {
    const navigate = useNavigate();

    const wolrdBounds = [
        [-90, -180],
        [90, 180],
    ];

    const center = {
        lat: 38.9637,
        lng: 35.2433,
    };

    const startNewGame = () => {
        navigate("/whichcountrymod/countryselection");
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
            <div className="-mt-24 md:mt-10 lg:mt-10 sm:mt-0 text-center">
                <div className="text-6xl text-white font-bold mb-5">Game is Over</div>
                <MapContainer
                    className={
                        "w-148 h-122 md:w-136 md:h-44 lg:w-136 lg:h-44  sm:w-screen sm:h-64 rounded "
                    }
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
                    {realCountry && (
                        <GeoJSON
                            key={realCountryKey}
                            data={realCountry}
                            style={{
                                fillColor: 'green',
                                fillOpacity: 0.5,
                                color: 'black',
                                weight: 2,
                            }}
                        />
                    )}
                    {
                        falseCountryArray.map((falseCountryKey) => (
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
                <div className="scores mt-2 text-white text-center text-2xl ">
                    <div className="roundScore">
                        Score: <Counter end={score}></Counter>{" "}
                    </div>
                </div>
            </div>
            <div className="mt-0">
                <button
                    onClick={startNewGame}
                    className={styles.bttnNewGuess}
                    style={{
                        display: "flex",
                    }}
                    >
                    Start New Game
                </button>
            </div>
        </div>
    );
}


export default WhichCountryResultPage;

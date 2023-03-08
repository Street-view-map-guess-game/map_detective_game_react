import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import styles from "../../styles/mapStyle.module.css";

import { useParams } from "react-router-dom";



function InfoCard({ countryName }) {
    const numberOfRound = useSelector((state) => state.gmSlc.numOfRound);
    const totalScore = useSelector((state) => state.gmSlc.totalScore);
    const { gameMod } = useParams();

    if (gameMod === "distancemod") {
        return (
            <div className="flex justify-start ml-6 mt-10 text-white text-2xl">
                <div
                    className="flex bg-gradient-to-br from-red-500 via-sky-800 to-red-900 space-x-10 shadow-lg rounded-md border-2 border-white text-center"
                    style={{ zIndex: 9, userSelect: "none" }}>
                    <div>
                        Round
                        <span className={styles.counterVal}>
                            <br />
                            {numberOfRound + 1}/6
                        </span>
                    </div>
                    <div>Country
                        <span className={styles.counterVal}><br />{countryName.charAt(0).toUpperCase() + countryName.slice(1)}</span>
                    </div>
                    <div>
                        Score
                        <span className={styles.counterVal}>
                            <br />
                            {totalScore.toFixed(0)}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
    else if (gameMod === "whichcountrymod") {
        return (
            <div className="flex justify-start ml-6 mt-10 text-white text-2xl">
                <div
                    className="flex bg-gradient-to-br from-red-500 via-sky-800 to-red-900 space-x-10 shadow-lg rounded-md border-2 border-white text-center"
                    style={{ zIndex: 9, userSelect: "none" }}>
                    <div>Country
                        <span className={styles.counterVal}><br />{countryName.charAt(0).toUpperCase() + countryName.slice(1)}</span>
                    </div>
                </div>
            </div>
        )
    }


}

export default InfoCard;
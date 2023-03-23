import React from "react";

import styles from "../../styles/mapStyle.module.css";

function InfoCard({ countryName, trueGuessNumber, remaingGuessNumber }) {
    return (
        <div className="flex justify-start ml-2 mt-2 text-white text-2xl">
            <div
                className="flex bg-gradient-to-br from-red-500 via-sky-800 to-red-900 space-x-10 shadow-lg rounded-md border-2 border-white text-center"
                style={{ zIndex: 9 }}>
                <div>
                    Correct
                    <span className={styles.counterVal}>
                        <br />
                        {trueGuessNumber}
                    </span>
                </div>
                <div>Country
                    <span className={styles.counterVal}><br />{countryName.charAt(0).toUpperCase() + countryName.slice(1)}</span>
                </div>
                <div>
                    Remaning
                    <span className={styles.counterVal}>
                        <br />
                        {remaingGuessNumber}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;
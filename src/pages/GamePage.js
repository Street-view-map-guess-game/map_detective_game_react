import React from "react";

import StreetView from "../components/StreetView";
import Map from "../components/MiniMap";
import { useParams } from "react-router-dom";
import allcoordinates from "../allCoordinates/coordinates.json";
import FailPages from "../pages/PageIsNotAvailable.js"

function GamePage() {
  const { countryName } = useParams();

  if (allcoordinates.hasOwnProperty(countryName + "coordinates") || countryName === "world") {
    document.title = countryName.toUpperCase() + " - Map Detective";
    return (
      <div>
        <Map></Map>
        <StreetView countryName={countryName} />
      </div>
    );
  }
  else {
    document.title = "Page Is Not Available - Map Detective";
    return (
      <FailPages></FailPages>
    );
  }

}

export default GamePage;

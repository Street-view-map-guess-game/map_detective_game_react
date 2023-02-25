import React from "react";

import StreetView from "../components/StreetView";
import Map from "../components/MiniMap";
import { useParams } from "react-router-dom";
import allcoordinates from "../allCoordinates/coordinates.json";
import FailPages from "../pages/PageIsNotAvailable.js"

function GamePage() {
  const { countryName } = useParams();

  if (allcoordinates.hasOwnProperty(countryName + "coordinates")) {
    document.title = countryName.toUpperCase() + " - Map Detective";
    return (
      <div>
        <Map></Map>
        <StreetView countryName={countryName} />
      </div>
    );
  } else {
    if (countryName === "world") {
      document.title = "WORLD - Map Detective";
      const arrays = Object.values(allcoordinates);
      const arrayCount = arrays.length;
      const arrayNames = Object.keys(allcoordinates);

      var randomCountry = Math.floor(Math.random() * arrayCount);
      var arrayName = arrayNames[randomCountry].replace("coordinates", "");;

      console.log(randomCountry, arrayName);

      return (
        <div>
          <Map></Map>
          <StreetView countryName={arrayName} />
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

}

export default GamePage;

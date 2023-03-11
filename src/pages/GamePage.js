import React from "react";

import StreetView from "../components/StreetView";
import Map from "../components/minimaps/MiniMap";
import { useParams } from "react-router-dom";
import allcoordinates from "../allCoordinates/coordinates.json";
import FailPages from "../pages/PageIsNotAvailable.js"
import MinimapCountrySelection from "../components/minimaps/MinimapforCountrySelec.js"
import Againstthetime from "./Againstthetime";

function GamePage() {
  const { countryName } = useParams();
  const { gameMod } = useParams();

  if (allcoordinates.hasOwnProperty(countryName + "coordinates") || countryName === "world") {
    if (gameMod === "whichcountrymod") {
      if (countryName === "world") {
        document.title = countryName.toUpperCase() + " - Which Country Mod - Map Detective";
        return (
          <div>
            <MinimapCountrySelection></MinimapCountrySelection>
            <StreetView countryName={countryName} />
          </div>
        );
      }
      else {
        document.title = "Page Is Not Available - Map Detective";
        return (
          <FailPages></FailPages>
        )
      }
    }
    else if (gameMod === "distancemod") {
      document.title = countryName.toUpperCase() + " - Distance Mod - Map Detective";
      return (
        <div>
          <Map></Map>
          <StreetView countryName={countryName} />
        </div>
      );
    }
    else if (gameMod === "against"){
      document.title = countryName.toUpperCase() + " - Against Mod - Map Detective";
      return (
        <div> <Againstthetime></Againstthetime></div>
      )
    }
    else {
      document.title = "Page Is Not Available - Map Detective";
      return (
        <FailPages></FailPages>
      )
    }

  }
  else {
    document.title = "Page Is Not Available - Map Detective";
    return (
      <FailPages></FailPages>
    );
  }

}

export default GamePage;

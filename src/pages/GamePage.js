import React from "react";
import StreetView from "../components/StreetView";
import Map from "../components/MiniMap";
import { useParams } from "react-router-dom";
import allcoordinates from "../allCoordinates/coordinates.json";
import NotFound from "./NotFound";

function GamePage() {
  const { countryName } = useParams();
  
  useEffect(() => {
    document.title = countryName.toUpperCase() + " - Map Detective";
  }, []);

  if (allcoordinates.hasOwnProperty(countryName + "coordinates")) {
    return (
      <div>
        <Map></Map>
        <StreetView countryName={countryName} />
      </div>
    );
  } else {
    //buraya sayfa mevcut değil sayfası gelecek

    return (
      <div>
        <NotFound></NotFound>
      </div>
    );
  }
}

export default GamePage;

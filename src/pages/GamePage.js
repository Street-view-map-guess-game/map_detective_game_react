import React from "react";
import StreetView from "../components/StreetView";
import Map from "../components/MiniMap";

function GamePage() {
  return (
    <div>
      <Map></Map>
      <StreetView></StreetView>
    </div>
  );
}

export default GamePage;

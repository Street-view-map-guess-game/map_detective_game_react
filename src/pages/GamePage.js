import React from "react";
import StreetView from "../components/StreetView";
import Map from "../components/MiniMap";

function GamePage() {
  const coordinates = { lat: 37.7749, lng: -122.4194 };
  return (
    <div>
      <Map></Map>
      <StreetView coordinates={coordinates} />
    </div>
  );
}

export default GamePage;

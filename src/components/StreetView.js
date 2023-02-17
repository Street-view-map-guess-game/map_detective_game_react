import React, { useEffect, useState } from "react";
import ReactStreetview from "react-streetview";
import { getRandomCoordinate } from "../mapFunctions/mapFunctions";

function StreetView() {
  const [coordinates, setCoordinates] = useState({});
  const apikey = "AIzaSyCAP_o89z3Ner51DPnCsvZDC7y7f-jJ41A";

  useEffect(() => {
    var data = getRandomCoordinate();
    setCoordinates(data);
  }, []);

  const streetViewPanoramaOptions = {
    disableDefaultUI: true,
    showRoadLabels: false,
    position: {
      lat: coordinates.randomSmallAreaLat,
      lng: coordinates.randomSmallAreaLng,
    },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        zIndex: -1,
        backgroundColor: "#eeeeee",
      }}>
      <ReactStreetview
        apiKey={apikey}
        streetViewPanoramaOptions={streetViewPanoramaOptions}
      />
    </div>
  );
}

export default StreetView;

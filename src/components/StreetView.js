import React, { useEffect, useState } from "react";
import { getRandomCoordinate } from "../mapFunctions/mapFunctions";
import { GoogleMap, StreetViewPanorama, useJsApiLoader } from '@react-google-maps/api';
function StreetView() {
  const [map, setMap] = useState(null);
  const [panorama, setPanorama] = useState(null);
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    var data = getRandomCoordinate();
    setCoordinates(data);
    console.log(data);
  }, []);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCAP_o89z3Ner51DPnCsvZDC7y7f-jJ41A',
  });

  console.log("street view " + isLoaded)
  const onLoad = (map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
    setPanorama(null);
  };

  const onStreetViewLoad = (panorama) => {
    setPanorama(panorama);
  };
  const containerStyle = {
    width: "100vw",
    height: "100vh",
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={coordinates}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <StreetViewPanorama onLoad={onStreetViewLoad} visible={true} position={coordinates} />
    </GoogleMap>
  ) : <></>;
}

export default StreetView;

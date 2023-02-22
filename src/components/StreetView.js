import React, { useEffect, useState } from "react";
import { getRandomCoordinate } from "../mapFunctions/mapFunctions";
import { useDispatch } from "react-redux";
import { storeCoordinate } from "../Redux/MapGameSlices/mapSlice";
import { useReducer } from "react";

import {
  GoogleMap,
  StreetViewPanorama,
  useJsApiLoader,
} from "@react-google-maps/api";

function StreetView() {

  const [map, setMap] = useState(null);
  const [panorama, setPanorama] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const dispatch = useDispatch();
  const [show, setshow] = useState(null)
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0)

  useEffect(() => {
    var data = getRandomCoordinate();
    dispatch(storeCoordinate(data));
    setCoordinates(data);
    console.log(data);
  }, [ignored]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCAP_o89z3Ner51DPnCsvZDC7y7f-jJ41A",
  });
  

  const onLoad = (map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
    setPanorama(null);
  };

  const showui = () => {
    setshow(true)

  }

  const onStreetViewLoad = (panorama) => {
    setPanorama(panorama);
    panorama.setOptions({
      enableCloseButton: false,
    });

    const waitForDataProviders = () => {
      return new Promise((resolve) => {
        const checkDataProviders = () => {
          const regex = /Google/;
          if (regex.test(panorama.streetViewDataProviders)) {
            setshow("selam")
            showui()
            resolve();
            console.log(panorama);
            console.log(panorama.getPosition());
            console.log("basarili")
            console.log(show)




          } else {
            setTimeout(checkDataProviders, 1000);
            console.log("basarisiz")
            console.log(show)
            forceUpdate()

          }
        };
        checkDataProviders();
      });
    };

    waitForDataProviders().then(() => {
      console.log(panorama.streetViewDataProviders);
    });

  };
  const containerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const options = {
    disableDefaultUI: true,
    showRoadLabels: false,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={coordinates}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}>
      <StreetViewPanorama
        options={options}
        onLoad={onStreetViewLoad}
        visible={true}
        position={coordinates}
      />
    </GoogleMap>
  ) : (
    <></>
  )
}

export default StreetView;
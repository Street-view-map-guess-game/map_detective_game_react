import React, { useEffect, useState } from "react";
import { getRandomCoordinate } from "../mapFunctions/mapFunctions";
import { useDispatch } from "react-redux";
import { storeCoordinate } from "../Redux/MapGameSlices/mapSlice";
import Loadingpage from "../pages/loadingPage";

import { GoogleApiWrapper } from 'google-maps-react';

const apiKey = "AIzaSyCAP_o89z3Ner51DPnCsvZDC7y7f-jJ41A";

function StreetView({ countryName }) {
  const [coordinates, setCoordinates] = useState({});
  const dispatch = useDispatch();

  const [questCoor, setQuestCoor] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    refreshcordinate();
  }, []);

  const refreshcordinate = () => {
    const data = getRandomCoordinate({ countryName });
    setQuestCoor(data);

    setCoordinates(data);
    const sv = new window.google.maps.StreetViewService();
    sv.getPanorama({ location: data, radius: 50000 }, processSVData);
  };

  const processSVData = (data, status) => {
    // sokak görünümü varsa
    if (status === 'OK') {
      console.log(data);
      // Yalnızca Google in yüklemiş olduğu sokak görünümlerini filtreler
      const regex = /Google/;
      if (regex.test(data.copyright)) {
        console.log("Street View Google Tarafından yüklenmiş");

        // sokak görünümü için tanımlamalar
        const panorama = new window.google.maps.StreetViewPanorama(
          document.getElementById('pano'), {
          position: data.location.latLng,
          pov: {
            heading: 34,
            pitch: 10
          },
          disableDefaultUI: true,
          showRoadLabels: false,
        });
        console.log(data.location.latLng.lat(), data.location.latLng.lng());
        dispatch(storeCoordinate({ lat: data.location.latLng.lat(), lng: data.location.latLng.lng() }));

      } else {
        // sokak görünümü yoksa tekrardan çağır
        refreshcordinate();
      }
    } else {
      // eğer gelen koordinattaki sokak görünümü google in değilse yeniden çiz
      refreshcordinate();
    }
  };

  return (
    <div id="pano" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%'
    }}></div>
  );

}

export default GoogleApiWrapper({
  apiKey,
})(StreetView);

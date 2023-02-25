import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GoogleApiWrapper } from 'google-maps-react';


import { storeCoordinate } from "../Redux/MapGameSlices/mapSlice";
import Loadingpage from "../pages/loadingPage";
import { getRandomCoordinate } from "../mapFunctions/mapFunctions";



const apiKey = "AIzaSyCAP_o89z3Ner51DPnCsvZDC7y7f-jJ41A";

function StreetView({ countryName }) {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    refreshcordinate();
  }, []);

  const refreshcordinate = () => {
    const data = getRandomCoordinate({ countryName });
    const sv = new window.google.maps.StreetViewService();
    sv.getPanorama({ location: data, radius: 50000 }, processSVData);
  };

  const processSVData = (data, status) => {
    // sokak görünümü varsa
    if (status === 'OK') {

      // Yalnızca Google in yüklemiş olduğu sokak görünümlerini filtreler
      const regex = /© \d+ Google/;
      if (regex.test(data.copyright)) {
        //sokak görünümü yüklendi
        setIsLoaded(true);

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
        // koordinatın olduğu noktayı gönderir
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
    }}>
      {isLoaded ? null : <Loadingpage />}
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey,
})(StreetView);
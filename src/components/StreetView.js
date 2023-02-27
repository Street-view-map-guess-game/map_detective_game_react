import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleApiWrapper } from "google-maps-react";
import { storeCoordinate } from "../Redux/MapGameSlices/mapSlice";
import Loadingpage from "../pages/LoadingPage";
import { getRandomCoordinate } from "../mapFunctions/mapFunctions";
import Compass from "./Compass.js";

const apiKey = "AIzaSyCAP_o89z3Ner51DPnCsvZDC7y7f-jJ41A";

function StreetView({ countryName }) {
  const refresh = useSelector((state) => state.mapSlc.isRestarted);
  const dispatch = useDispatch();
  const [streetViewIsLoaded, setStreetViewIsLoaded] = useState(false);
  const [newPanorama, setnewPanorama] = useState(false);

  useEffect(() => {
    refreshcordinate();
  }, [refresh]);

  const refreshcordinate = () => {
    const data = getRandomCoordinate({ countryName });
    const sv = new window.google.maps.StreetViewService();
    sv.getPanorama({ location: data, radius: 50000 }, processSVData);
  };

  const processSVData = (data, status) => {
    // sokak görünümü varsa
    if (status === "OK") {
      // Yalnızca Google in yüklemiş olduğu sokak görünümlerini filtreler
      const regex = /© \d+ Google/;
      if (regex.test(data.copyright)) {
        //sokak görünümü yüklendi
        setStreetViewIsLoaded(true);

        // sokak görünümü için tanımlamalar
        const panorama = new window.google.maps.StreetViewPanorama(
          document.getElementById("pano"),
          {
            position: data.location.latLng,
            pov: {
              heading: 0,
              pitch: 0,
            },
            disableDefaultUI: true,
            showRoadLabels: false,
          }
        );

        // Compass ta kullanabilmek için tanımlandı
        setnewPanorama(panorama);

        // koordinatın olduğu noktayı gönderir
        dispatch(
          storeCoordinate({
            lat: data.location.latLng.lat(),
            lng: data.location.latLng.lng(),
          })
        );

        window.google.maps.event.addListenerOnce(
          panorama,
          "status_changed",
          function () {
            //bunu anca settimeout ile yapabildim
            // setTimeout(() => {
            //   const developmentDiv = [...document.querySelectorAll('div')].find(el => el.textContent === 'For development purposes only');
            //   developmentDiv.remove()
            // }, 1000);

            // tıklanabilir linkleri silen kod parçası
            const links = document.querySelectorAll("a");
            links.forEach((a) => {
              const linkregex = /https:\/\/maps.google.com\/maps\/@[0-9z,-.]+/;
              const linkregex2 = /https:\/\/www.google.com\/maps\/@[0-9z,-.]+/;
              if (linkregex.test(a.href) || linkregex2.test(a.href)) {
                a.remove();
              }
            });

            // adres info bugunu düzelten kod parçası
            const addressInfo = document.querySelector(".gm-iv-address");
            if (addressInfo) {
              addressInfo.remove();
            }
          }
        );
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
    <div
      id="pano"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        filter: "invert(1)",
      }}>
      {streetViewIsLoaded ? (
        <Compass panorama={newPanorama} />
      ) : (
        <Loadingpage />
      )}
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey,
})(StreetView);

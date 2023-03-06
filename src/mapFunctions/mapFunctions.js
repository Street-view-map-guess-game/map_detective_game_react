import allcoordinates from "../allCoordinates/coordinates.json";
import { point, distance } from "@turf/turf";

// koordinat random
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export const getRandomCoordinate = ({ countryName }) => {

  //eger world seçilmişse
  if (countryName === "world") {
    const arrays = Object.values(allcoordinates);
    const arrayCount = arrays.length;
    const arrayNames = Object.keys(allcoordinates);
    var randomCountry = Math.floor(Math.random() * arrayCount);
    countryName = arrayNames[randomCountry].replace("coordinates", "");
  }

  // url kısmından ülke ismi alıyor
  var coordinates = allcoordinates[countryName + "coordinates"];
  var randomSmallAreaLat, randomSmallAreaLng;

  //bölgelerden birini seçiyor

  var randomRegion = Math.floor(Math.random() * coordinates.length);

  // json uzantılı dosyadan fransa koordinat verilerini çekme
  var minlat = coordinates[randomRegion].minlat;
  var maxlat = coordinates[randomRegion].maxlat;

  var minlng = coordinates[randomRegion].minlng;
  var maxlng = coordinates[randomRegion].maxlng;
  randomSmallAreaLat = getRandomNumber(minlat, maxlat);
  randomSmallAreaLng = getRandomNumber(minlng, maxlng);

  return {
    lat: randomSmallAreaLat,
    lng: randomSmallAreaLng,
  };
};

export const findDistance = (pointOne, pointTwo) => {
  var from = point([pointOne.lat, pointOne.lng]);
  var to = point([pointTwo.lat, pointTwo.lng]);
  var options = { units: "kilometers" };

  var pointDistance = distance(from, to, options);

  return pointDistance;
};

import allcoordinates from "../allCoordinates/coordinates.json";

// ülke adı butonlarla gelecek
var countryName = "turkeycoordinates";

var coordinates=allcoordinates[countryName];

// koordinat random
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}


export const getRandomCoordinate = () => {
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

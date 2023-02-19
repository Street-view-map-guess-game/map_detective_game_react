import turkeyJson from "../allCoordinates/turkeycoordinates.json";

var countryName = "turkeycoordinates";

//json dosyası tanımlama
var coordinates = `../allCoordinates/${countryName}.json`;

// koordinat random
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// asenkron tanımlama sebebi coordinat verilerini fetch fonksiyonu dışı kullanmak için fetch işleminin bitmesini beklemek gerekir
export const getRandomCoordinate = () => {
  var randomSmallAreaLat, randomSmallAreaLng;

  //bölgelerden birini seçiyor

  var randomRegion = Math.floor(Math.random() * turkeyJson[countryName].length);

  // json uzantılı dosyadan fransa koordinat verilerini çekme
  var minlat = turkeyJson[countryName][randomRegion].minlat;
  var maxlat = turkeyJson[countryName][randomRegion].maxlat;

  var minlng = turkeyJson[countryName][randomRegion].minlng;
  var maxlng = turkeyJson[countryName][randomRegion].maxlng;
  randomSmallAreaLat = getRandomNumber(minlat, maxlat);
  randomSmallAreaLng = getRandomNumber(minlng, maxlng);

  return {
    lat: randomSmallAreaLat,
    lng: randomSmallAreaLng,
  };
};

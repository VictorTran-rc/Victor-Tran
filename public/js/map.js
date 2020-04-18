console.log("hello");

function getClosestStation(){
  console.log("Thank YOU Ya Sin");
  fetch(`/findClosestStation?sourceLat=${myPosition.coords.latitude }&sourceLng=${myPosition.coords.longitude}`)
  .then((response) => {
    return response.json();

  })
  .then((data) => {
    console.log(data);
    const stationPos = new google.maps.LatLng(data.attributes.latitude,data.attributes.longitude);
    let infowindow = new google.maps.InfoWindow({
      map: map,
      position: stationPos,
      content: `The closest station to you is:
          <br>${data.attributes.name}
          <br>address: ${data.attributes.address}
          <br>Latitude: ${data.attributes.latitude}
          <br>Longitude: ${data.attributes.longitude}`

        })
  });
}
document.getElementById('getClosestStation').addEventListener('click', getClosestStation);

function geoFindMe() {
  console.log("GEO FIND ME")
  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("SUCCESS")
    console.log(longitude, latitude)
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

//  document.getElementById("FindLocation").addEventListener('click', geoFindMe);
//
// const mapArea = document.getElementById('map');
//
// const $ = id => document.getElementById(id);
//
// const actionBtn = document.getElementById('showMe');
// const locationsAvailable = document.getElementById('locationList');
// let Gmap, Gmarker;
//
// const __KEY = "AIzaSyBGCql0HlN4C_D7B2BcIIhtuFvjrdfvoew";
//
// actionBtn.addEventListener('click', e => {
//   // hide the button
//   actionBtn.style.display = "none";
//
//   // call Materialize toast to update user
//   M.toast({ html: 'I am fetching your current location', classes: 'rounded' });
//
//   // get the user's position
//   getLocation();
//
// });
//
// getLocation = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(displayLocation, showError, options)
//
//   }
//   else {
//     M.toast({ html: 'Sorry, your browser does not support this feature... Please Update your Browser to enjoy it', classes: 'rounded' });
//   }
// };


// Initialize and add the map
function initMap() {
  // The location of atlanta
  const atlanta = { lat: 33.904, lng: -84.470 };
  // The map, centered at atlanta
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: atlanta,
  });
  // The marker, positioned at atlanta
  const marker = new google.maps.Marker({
    position: atlanta,
    map: map,
  });
}


// current location function
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.904, lng: -84.470 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

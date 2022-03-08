
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





  
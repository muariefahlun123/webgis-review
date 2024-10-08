// Full screen map view
var mapId = document.getElementById('map');
function fullScreenView() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        mapId.requestFullscreen();
    }
}

// Leaflet browser print function
L.control.browserPrint({
    position: 'topright'
}).addTo(map);

// Leaflet search
L.Control.geocoder().addTo(map);

// Leaflet measure
L.control.measure({
    primaryLengthUnit: 'kilometers',
    secondaryLengthUnit: 'meter',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: undefined
}).addTo(map);

// zoom to layer
$('.zoom-to-layer').click(function () {
    map.setView([-6.216975869705126, 106.85245752981449], 9);
});

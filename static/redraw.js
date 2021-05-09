console.log("redraw.js loaded");

// function markerOnClick(e) {
//     alert(e.latlng);
// };

// function marker.on('click', function(ev){
//     var latlng = map.mouseEventToLatLng(ev.originalEvent);
//     console.log(latlng.lat + ', ' + latlng.lng);
//   });

function onClick(e) {
    alert(this.getLatLng());
    console.log(this.getLatLng());
}
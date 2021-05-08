
  // START OF ACTIVITIES AND SPORTS------------------------------------------------------------------------------------------
  var POIactivitiesData = "";
  // sportsActivitiesFinal.csv
  // 
  // name
  // type
  // latitude
  // longitude

  d3.csv("resources/sportsActivitiesFinal.csv").then(function (POIactivities) {
    // This initializes an array that's going to contain all the Leaflet markers for this layer:
    POImarkers = [];
    
    // This counts how many records there are to turn into markers for this layer: 
    POIactivitiesLength = POIactivitiesData.length;
    // This casts strings to numbers for each record's lat long:
    POIactivitiesData.forEach(function (data) {
      data.latitude = +data.latitude;
      data.longitude = +data.longitude;
    });

    // This loops through the POI data and creates one marker for each place,
    // then binds a popup containing that place's info and adds it to a layer:
    console.log(`Starting to loop through ${POIactivitiesLength} points of interest and turn them into markers...`);
    
    for (var i = 0; i < POIactivitiesLength; i++) {
      var POI = POIactivitiesData[i];

      // This clears out anything left over in these variables from the last time the loop ran:
      POIsearchName = ""
      POIname = "";
      POItype = POI.type;
      
      // This makes a new variable out of the POI's name and replaces all the spaces in it with plus signs for Google (next):
      POIsearchName = POI.name.replace(/ /g, '+');

      // This concatenates POIsearchName with Google search string as HTML to put in the marker:
      POIname = `<a href=http://www.google.com/search?q="${POIsearchName}" target="_blank">${POI.name}</a>`;

      // This concatenates POIname with lat, long, and type, and turns it into a Leaflet marker with a popup bound to it:
      POImarker = L.marker([POI.latitude, POI.longitude], title = POI.name)
      .bindPopup("<h3>" + POIname + "</h3>" + "<h4>" + POItype + "<br>");
      // console.log(`bound ${i+1} to marker, placed in layer`);

      // This appends POImarker to POImarkers:
      POImarkers.push(POImarker);
    };

  console.log(`...${POIactivitiesLength} points of interest bound to POI markers and placed in layer. Here's one at random:`);
  console.log(POImarkers[  Math.floor(Math.round(Math.random() * POIactivitiesLength)) + 1 ]);
  // This console.logs a POI at random:
  console.log(`This .CSV of points of interest is ${POIactivitiesLength} records long. Here's one of them at random. (It has nothing to do with the park unit chosen above.)`);
  console.log(POIactivitiesData[ Math.floor(Math.round(Math.random() * POIactivitiesLength)) + 1 ]);

  // This turns the array called POImarkers into a Leaflet layer group:
  var Activities = L.layerGroup(POImarkers);

  // Here ends the code that turns points of interest data into a layer.
  console.log("-_-_-_-_-_-_-_-_-_-_-_-");
  });
  // END OF ACTIVITIES & SPORTS function ------------------------------------------------------------------------------------


// START OF AMENITIES -------------------------------------------------------------------------------------------------------
var POIamenitiesData = "";
// amenitiesFinal.csv
// 
// name
// type
// latitude
// longitude

d3.csv("resources/amenitiesFinal.csv").then(function (POIamenities) {
  // This initializes an array that's going to contain all the Leaflet markers for this layer:
  POImarkers = [];
  
  // This counts how many records there are to turn into markers for this layer: 
  POIamenitiesLength = POIamenitiesData.length;
  // This casts strings to numbers for each record's lat long:
  POIamenitiesData.forEach(function (data) {
    data.latitude = +data.latitude;
    data.longitude = +data.longitude;
  });

  // This loops through the POI data and creates one marker for each place,
  // then binds a popup containing that place's info and adds it to a layer:
  console.log(`Starting to loop through ${POIamenitiesLength} points of interest and turn them into markers...`);
  
  for (var i = 0; i < POIamenitiesLength; i++) {
    var POI = POIamenitiesData[i];

    // This clears out anything left over in these variables from the last time the loop ran:
    POIsearchName = ""
    POIname = "";
    POItype = POI.type;
    
    // This makes a new variable out of the POI's name and replaces all the spaces in it with plus signs for Google (next):
    POIsearchName = POI.name.replace(/ /g, '+');

    // This concatenates POIsearchName with Google search string as HTML to put in the marker:
    POIname = `<a href=http://www.google.com/search?q="${POIsearchName}" target="_blank">${POI.name}</a>`;

    // This concatenates POIname with lat, long, and type, and turns it into a Leaflet marker with a popup bound to it:
    POImarker = L.marker([POI.latitude, POI.longitude], title = POI.name)
    .bindPopup("<h3>" + POIname + "</h3>" + "<h4>" + POItype + "<br>");
    // console.log(`bound ${i+1} to marker, placed in layer`);

    // This appends POImarker to POImarkers:
    POImarkers.push(POImarker);
  };

console.log(`...${POIamenitiesLength} points of interest bound to POI markers and placed in layer. Here's one at random:`);
console.log(POImarkers[  Math.floor(Math.round(Math.random() * POIamenitiesLength)) + 1 ]);
// This console.logs a POI at random:
console.log(`This .CSV of points of interest is ${POIactivitiesLength} records long. Here's one of them at random. (It has nothing to do with the park unit chosen above.)`);
console.log(POIamenitiesData[ Math.floor(Math.round(Math.random() * POIamenitiesLength)) + 1 ]);

// This turns the array called POImarkers into a Leaflet layer group:
var Amenities = L.layerGroup(POImarkers);

// Here ends the code that turns points of interest data into a layer.
console.log("-_-_-_-_-_-_-_-_-_-_-_-");
});
// END OF AMENITIES----------------- -----------------------------------------------------------------------------------------------


// START OF ATTRACTIONS & GEOGRAPHIC FEATURES---------------------------------------------------------------------------------------
var POIattractionsData = "";
// attractionsFinal.csv
// 
// name
// type
// latitude
// longitude

d3.csv("resources/attractionsFinal.csv").then(function (POIattractions) {
  // This initializes an array that's going to contain all the Leaflet markers for this layer:
  POImarkers = [];
  
  // This counts how many records there are to turn into markers for this layer: 
  POIattractionsLength = POIattractionsData.length;
  // This casts strings to numbers for each record's lat long:
  POIattractionsData.forEach(function (data) {
    data.latitude = +data.latitude;
    data.longitude = +data.longitude;
  });

  // This loops through the POI data and creates one marker for each place,
  // then binds a popup containing that place's info and adds it to a layer:
  console.log(`Starting to loop through ${POIattractionsLength} points of interest and turn them into markers...`);
  
  for (var i = 0; i < POIattractionsLength; i++) {
    var POI = POIattractionsData[i];

    // This clears out anything left over in these variables from the last time the loop ran:
    POIsearchName = ""
    POIname = "";
    POItype = POI.type;
    
    // This makes a new variable out of the POI's name and replaces all the spaces in it with plus signs for Google (next):
    POIsearchName = POI.name.replace(/ /g, '+');

    // This concatenates POIsearchName with Google search string as HTML to put in the marker:
    POIname = `<a href=http://www.google.com/search?q="${POIsearchName}" target="_blank">${POI.name}</a>`;

    // This concatenates POIname with lat, long, and type, and turns it into a Leaflet marker with a popup bound to it:
    POImarker = L.marker([POI.latitude, POI.longitude], title = POI.name)
    .bindPopup("<h3>" + POIname + "</h3>" + "<h4>" + POItype + "<br>");
    // console.log(`bound ${i+1} to marker, placed in layer`);

    // This appends POImarker to POImarkers:
    POImarkers.push(POImarker);
  };

console.log(`...${POIattractionsLength} points of interest bound to POI markers and placed in layer. Here's one at random:`);
console.log(POImarkers[  Math.floor(Math.round(Math.random() * POIattractionsLength)) + 1 ]);
// This console.logs a POI at random:
console.log(`This .CSV of points of interest is ${POIattractionsLength} records long. Here's one of them at random. (It has nothing to do with the park unit chosen above.)`);
console.log(POIattractionsData[ Math.floor(Math.round(Math.random() * POIattractionsLength)) + 1 ]);

// This turns the array called POImarkers into a Leaflet layer group:
var Attractions = L.layerGroup(POImarkers);

// Here ends the code that turns points of interest data into a layer.
console.log("-_-_-_-_-_-_-_-_-_-_-_-");
});
// END OF ATTRACTIONS & GEOGRAPHIC FEATURES ----------------------------------------------------------------------------------------


// START OF BOATING & WATERCRAFT ---------------------------------------------------------------------------------------------------
var POIboatingData = "";
// boatingFinal.csv
// 
// name
// type
// latitude
// longitude

d3.csv("resources/boatingFinal.csv").then(function (POIboating) {
  // This initializes an array that's going to contain all the Leaflet markers for this layer:
  POImarkers = [];
  
  // This counts how many records there are to turn into markers for this layer: 
  POIboatingLength = POIboatingData.length;
  // This casts strings to numbers for each record's lat long:
  POIboatingData.forEach(function (data) {
    data.latitude = +data.latitude;
    data.longitude = +data.longitude;
  });

  // This loops through the POI data and creates one marker for each place,
  // then binds a popup containing that place's info and adds it to a layer:
  console.log(`Starting to loop through ${POIboatingLength} points of interest and turn them into markers...`);
  
  for (var i = 0; i < POIboatingLength; i++) {
    var POI = POIboatingData[i];

    // This clears out anything left over in these variables from the last time the loop ran:
    POIsearchName = ""
    POIname = "";
    POItype = POI.type;
    
    // This makes a new variable out of the POI's name and replaces all the spaces in it with plus signs for Google (next):
    POIsearchName = POI.name.replace(/ /g, '+');

    // This concatenates POIsearchName with Google search string as HTML to put in the marker:
    POIname = `<a href=http://www.google.com/search?q="${POIsearchName}" target="_blank">${POI.name}</a>`;

    // This concatenates POIname with lat, long, and type, and turns it into a Leaflet marker with a popup bound to it:
    POImarker = L.marker([POI.latitude, POI.longitude], title = POI.name)
    .bindPopup("<h3>" + POIname + "</h3>" + "<h4>" + POItype + "<br>");
    // console.log(`bound ${i+1} to marker, placed in layer`);

    // This appends POImarker to POImarkers:
    POImarkers.push(POImarker);
  };

console.log(`...${POIboatingLength} points of interest bound to POI markers and placed in layer. Here's one at random:`);
console.log(POImarkers[  Math.floor(Math.round(Math.random() * POIboatingLength)) + 1 ]);
// This console.logs a POI at random:
console.log(`This .CSV of points of interest is ${POIboatingLength} records long. Here's one of them at random. (It has nothing to do with the park unit chosen above.)`);
console.log(POIboatingData[ Math.floor(Math.round(Math.random() * POIboatingLength)) + 1 ]);

// This turns the array called POImarkers into a Leaflet layer group:
var Boating = L.layerGroup(POImarkers);

// Here ends the code that turns points of interest data into a layer.
console.log("-_-_-_-_-_-_-_-_-_-_-_-");
});
// END OF BOATING & WATERCRAFT -----------------------------------------------------------------------------------------------------


// START OF CAMPING ----------------------------------------------------------------------------------------------------------------
var POIcampingData = "";
// campingFinal.csv
// 
// name
// type
// latitude
// longitude

d3.csv("resources/campingFinal.csv").then(function (POIcamping) {
  // This initializes an array that's going to contain all the Leaflet markers for this layer:
  POImarkers = [];
  
  // This counts how many records there are to turn into markers for this layer: 
  POIcampingLength = POIcampingData.length;
  // This casts strings to numbers for each record's lat long:
  POIcampingData.forEach(function (data) {
    data.latitude = +data.latitude;
    data.longitude = +data.longitude;
  });

  // This loops through the POI data and creates one marker for each place,
  // then binds a popup containing that place's info and adds it to a layer:
  console.log(`Starting to loop through ${POIcampingLength} points of interest and turn them into markers...`);
  
  for (var i = 0; i < POIcampingLength; i++) {
    var POI = POIcampingData[i];

    // This clears out anything left over in these variables from the last time the loop ran:
    POIsearchName = ""
    POIname = "";
    POItype = POI.type;
    
    // This makes a new variable out of the POI's name and replaces all the spaces in it with plus signs for Google (next):
    POIsearchName = POI.name.replace(/ /g, '+');

    // This concatenates POIsearchName with Google search string as HTML to put in the marker:
    POIname = `<a href=http://www.google.com/search?q="${POIsearchName}" target="_blank">${POI.name}</a>`;

    // This concatenates POIname with lat, long, and type, and turns it into a Leaflet marker with a popup bound to it:
    POImarker = L.marker([POI.latitude, POI.longitude], title = POI.name)
    .bindPopup("<h3>" + POIname + "</h3>" + "<h4>" + POItype + "<br>");
    // console.log(`bound ${i+1} to marker, placed in layer`);

    // This appends POImarker to POImarkers:
    POImarkers.push(POImarker);
  };

console.log(`...${POIcampingLength} points of interest bound to POI markers and placed in layer. Here's one at random:`);
console.log(POImarkers[  Math.floor(Math.round(Math.random() * POIcampingLength)) + 1 ]);
// This console.logs a POI at random:
console.log(`This .CSV of points of interest is ${POIcampingLength} records long. Here's one of them at random. (It has nothing to do with the park unit chosen above.)`);
console.log(POIcampingData[ Math.floor(Math.round(Math.random() * POIcampingLength)) + 1 ]);

// This turns the array called POImarkers into a Leaflet layer group:
var Camping = L.layerGroup(POImarkers);

// Here ends the code that turns points of interest data into a layer.
console.log("-_-_-_-_-_-_-_-_-_-_-_-");
});
// END OF CAMPING ------------------------------------------------------------------------------------------------------------------


// START OF EMERGENCY SERVICES ------------------------------------------------------------------------------------------
var POIemergencyData = "";
// emergencyFinal.csv
// 
// name
// type
// latitude
// longitude

d3.csv("resources/emergencyFinal.csv").then(function (POIemergency) {
  // This initializes an array that's going to contain all the Leaflet markers for this layer:
  POImarkers = [];
  
  // This counts how many records there are to turn into markers for this layer: 
  POIemergencyLength = POIemergencyData.length;
  // This casts strings to numbers for each record's lat long:
  POIemergencyData.forEach(function (data) {
    data.latitude = +data.latitude;
    data.longitude = +data.longitude;
  });

  // This loops through the POI data and creates one marker for each place,
  // then binds a popup containing that place's info and adds it to a layer:
  console.log(`Starting to loop through ${POIemergencyLength} points of interest and turn them into markers...`);
  
  for (var i = 0; i < POIemergencyLength; i++) {
    var POI = POIemergencyData[i];

    // This clears out anything left over in these variables from the last time the loop ran:
    POIsearchName = ""
    POIname = "";
    POItype = POI.type;
    
    // This makes a new variable out of the POI's name and replaces all the spaces in it with plus signs for Google (next):
    POIsearchName = POI.name.replace(/ /g, '+');

    // This concatenates POIsearchName with Google search string as HTML to put in the marker:
    POIname = `<a href=http://www.google.com/search?q="${POIsearchName}" target="_blank">${POI.name}</a>`;

    // This concatenates POIname with lat, long, and type, and turns it into a Leaflet marker with a popup bound to it:
    POImarker = L.marker([POI.latitude, POI.longitude], title = POI.name)
    .bindPopup("<h3>" + POIname + "</h3>" + "<h4>" + POItype + "<br>");
    // console.log(`bound ${i+1} to marker, placed in layer`);

    // This appends POImarker to POImarkers:
    POImarkers.push(POImarker);
  };

console.log(`...${POIemergencyLength} points of interest bound to POI markers and placed in layer. Here's one at random:`);
console.log(POImarkers[  Math.floor(Math.round(Math.random() * POIemergencyLength)) + 1 ]);
// This console.logs a POI at random:
console.log(`This .CSV of points of interest is ${POIemergencyLength} records long. Here's one of them at random. (It has nothing to do with the park unit chosen above.)`);
console.log(POIemergencyData[ Math.floor(Math.round(Math.random() * POIemergencyLength)) + 1 ]);

// This turns the array called POImarkers into a Leaflet layer group:
var Emergency = L.layerGroup(POImarkers);

// Here ends the code that turns points of interest data into a layer.
console.log("-_-_-_-_-_-_-_-_-_-_-_-");
});
// END OF EMERGENCY SERVICES -------------------------------------------------------------------------------------------------------


// START OF HISTORIC SITES ---------------------------------------------------------------------------------------------------------
var POIhistoricData = "";
// historicFinal.csv
// 
// name
// type
// latitude
// longitude

d3.csv("resources/historicFinal.csv").then(function (POIhistoricData) {
  // This initializes an array that's going to contain all the Leaflet markers for this layer:
  POImarkers = [];
  
  // This counts how many records there are to turn into markers for this layer: 
  POIhistoricLength = POIhistoricData.length;
  // This casts strings to numbers for each record's lat long:
  POIhistoricData.forEach(function (data) {
    data.latitude = +data.latitude;
    data.longitude = +data.longitude;
  });

  // This loops through the POI data and creates one marker for each place,
  // then binds a popup containing that place's info and adds it to a layer:
  console.log(`Starting to loop through ${POIhistoricLength} points of interest and turn them into markers...`);
  
  for (var i = 0; i < POIhistoricLength; i++) {
    var POI = POIhistoricData[i];

    // This clears out anything left over in these variables from the last time the loop ran:
    POIsearchName = ""
    POIname = "";
    POItype = POI.type;
    
    // This makes a new variable out of the POI's name and replaces all the spaces in it with plus signs for Google (next):
    POIsearchName = POI.name.replace(/ /g, '+');

    // This concatenates POIsearchName with Google search string as HTML to put in the marker:
    POIname = `<a href=http://www.google.com/search?q="${POIsearchName}" target="_blank">${POI.name}</a>`;

    // This concatenates POIname with lat, long, and type, and turns it into a Leaflet marker with a popup bound to it:
    POImarker = L.marker([POI.latitude, POI.longitude], title = POI.name)
    .bindPopup("<h3>" + POIname + "</h3>" + "<h4>" + POItype + "<br>");
    // console.log(`bound ${i+1} to marker, placed in layer`);

    // This appends POImarker to POImarkers:
    POImarkers.push(POImarker);
  };

console.log(`...${POIhistoricLength} points of interest bound to POI markers and placed in layer. Here's one at random:`);
console.log(POImarkers[  Math.floor(Math.round(Math.random() * POIhistoricLength)) + 1 ]);
// This console.logs a POI at random:
console.log(`This .CSV of points of interest is ${POIhistoricLength} records long. Here's one of them at random. (It has nothing to do with the park unit chosen above.)`);
console.log(POIhistoricData[ Math.floor(Math.round(Math.random() * POIhistoricLength)) + 1 ]);

// This turns the array called POImarkers into a Leaflet layer group:
var Historic = L.layerGroup(POImarkers);

// Here ends the code that turns points of interest data into a layer.
console.log("-_-_-_-_-_-_-_-_-_-_-_-");
});
// END OF HISTORIC SITES ----------------------------------------------------------------------------------------------------


// START OF PARKING & TRANSPORTATION ----------------------------------------------------------------------------------------
var POItransportationData = "";
// parkingTransportationFinal.csv
// 
// name
// type
// latitude
// longitude

d3.csv("resources/parkingTransportationFinal.csv").then(function (POItransportation) {
  // This initializes an array that's going to contain all the Leaflet markers for this layer:
  POImarkers = [];
  
  // This counts how many records there are to turn into markers for this layer: 
  POItransportationLength = POItransportationData.length;
  // This casts strings to numbers for each record's lat long:
  POItransportationData.forEach(function (data) {
    data.latitude = +data.latitude;
    data.longitude = +data.longitude;
  });

  // This loops through the POI data and creates one marker for each place,
  // then binds a popup containing that place's info and adds it to a layer:
  console.log(`Starting to loop through ${POItransportationLength} points of interest and turn them into markers...`);
  
  for (var i = 0; i < POItransportationLength; i++) {
    var POI = POItransportationData[i];

    // This clears out anything left over in these variables from the last time the loop ran:
    POIsearchName = ""
    POIname = "";
    POItype = POI.type;
    
    // This makes a new variable out of the POI's name and replaces all the spaces in it with plus signs for Google (next):
    POIsearchName = POI.name.replace(/ /g, '+');

    // This concatenates POIsearchName with Google search string as HTML to put in the marker:
    POIname = `<a href=http://www.google.com/search?q="${POIsearchName}" target="_blank">${POI.name}</a>`;

    // This concatenates POIname with lat, long, and type, and turns it into a Leaflet marker with a popup bound to it:
    POImarker = L.marker([POI.latitude, POI.longitude], title = POI.name)
    .bindPopup("<h3>" + POIname + "</h3>" + "<h4>" + POItype + "<br>");
    // console.log(`bound ${i+1} to marker, placed in layer`);

    // This appends POImarker to POImarkers:
    POImarkers.push(POImarker);
  };

console.log(`...${POItransportationLength} points of interest bound to POI markers and placed in layer. Here's one at random:`);
console.log(POImarkers[  Math.floor(Math.round(Math.random() * POItransportationLength)) + 1 ]);
// This console.logs a POI at random:
console.log(`This .CSV of points of interest is ${POItransportationLength} records long. Here's one of them at random. (It has nothing to do with the park unit chosen above.)`);
console.log(POItransportationData[ Math.floor(Math.round(Math.random() * POItransportationLength)) + 1 ]);

// This turns the array called POImarkers into a Leaflet layer group:
var Transportation = L.layerGroup(POImarkers);

// Here ends the code that turns points of interest data into a layer.
console.log("-_-_-_-_-_-_-_-_-_-_-_-");
});
// END OF PARKING & TRANSPORTATION -----------------------------------------------------------------------------------------------
// var layers = [];

// // THE CODE BELOW CAME FROM THE CITIBIKE ACTIVITY
// // Create the map with our layers
// var map = L.map("map-id", {
//     center: [40.73, -74.0059],
//     zoom: 12,
//     // layers: [
//     //   layers.Activities,
//     //   layers.Amenities,
//     //   layers.Attractions,
//     //   layers.Boating,
//     //   layers.Camping,
//     //   layers.Emergency,
//     //   layers.Historic,
//     //   layers.Transportation
//     // ]
//   });

// Toggler control
var overlays = {
    "Activities & Sports": Activities,
    "Amenities": Amenities,
    "Attractions & Geographic Features": Attractions,
    "Boating & Watercraft": Boating,
    "Camping": Camping,
    "Emergency Services": Emergency,
    "Historic Sites": Historic,
    "Parking & Transportation": Transportation
  };
  
  // Create a control for our layers, add our overlay layers to it
  L.control.layers(null, overlays).addTo(map);
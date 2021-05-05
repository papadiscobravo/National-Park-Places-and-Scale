console.log("paul.js loaded");
console.log("-_-_-_-_-_-_-_-_-_-_-_-");

// IA IMPORT SOME DATA
  // import data about the 427 or so units (parks) in the NationalPark System.

var NPSData = {};
// natParksFinal.csv contains
// Code
// Name
// Latitude
// Longitude
// Acres
// att_2011
// att_2012
// att_2013
// att_2014
// att_2015
// att_2016
// att_2017
// att_2018
// att_2019
// att_2020
// att_Average

var NPSplaceRandomLatLong;


// d3.json(route.then).then(function (NPSData) {
  // do all the same stuff I do below
// });


d3.csv("resources/natParksFinal.csv").then(function (NPSData) {
  // Cast strings to numbers for each record in NPSData
  NPSData.forEach(function (data) {
    data.Latitude = +data.Latitude;
    data.Longitude = +data.Longitude;
    data.Acres = +data.Acres;
    data.att_2011 = +data.att_2011;
    data.att_2012 = +data.att_2012;
    data.att_2013 = +data.att_2013;
    data.att_2014 = +data.att_2014;
    data.att_2015 = +data.att_2015;
    data.att_2016 = +data.att_2016;
    data.att_2017 = +data.att_2017;
    data.att_2018 = +data.att_2018;
    data.att_2019 = +data.att_2019;
    data.att_2020 = +data.att_2020;
    data.att_Average = +data.att_Average;
  });

  // set a variable that stores how many records there are in this dataset:
  NPSplaceCount = NPSData.length;
  console.log(`natParksFinal.json: ${NPSplaceCount} records`);
  // console.log(NPSData);
 
  // pick a number at random to pull that record from this dataset:
  NPSplaceRandom = Math.floor(Math.random() * NPSplaceCount);

  // retrieve the lat and long from this record and put it into an array:
  NPSplaceRandomLatLong = [NPSData[NPSplaceRandom].Latitude, NPSData[NPSplaceRandom].Longitude];
  
  console.log(`${NPSplaceRandom} ${NPSData[NPSplaceRandom].Code}
    ${NPSData[NPSplaceRandom].Name}
    ${Math.round(NPSData[NPSplaceRandom].Acres)} acres
    ${NPSplaceRandomLatLong} lat long
  `);
console.log(NPSData[NPSplaceRandom].Latitude);
console.log(NPSData[NPSplaceRandom].Longitude);

console.log(`starting the function to send ${NPSData[NPSplaceRandom].Name} to label div in HTML.`);
// print the name of the NPS unit chosen at random to the HTML
window.onload = function(){
  document.getElementById('label').innerHTML = NPSData[NPSplaceRandom].Name;
};
console.log(`${NPSData[NPSplaceRandom].Name} sent to label div in HTML.`);


  // console.log(`NPSplaceRandomLatLong[0] contains ${NPSplaceRandomLatLong[0]}`);
  // console.log(`NPSplaceRandomLatLong[1] contains ${NPSplaceRandomLatLong[1]}`);
  console.log("-_-_-_-_-_-_-_-_-_-_-_-");

  // pass the lat long coordinates of the place chosen at random from NSP places into a new variable, centerLatLong, for mapmaking.
  centerLatLong = NPSplaceRandomLatLong;


    // II. CONCENTRIC CIRCLES
      // IIA. HOW BIG?
    // The idea is to let website visitors pick the size of concentric circles around a place on the map.

    // People get how wide a circle is, so that's what we should let them choose.
    // (This does so at random, for the moment.)
    // ******
    var maxDiameter = 100;
    var diameter = 4;
    //    var diameter = Math.floor(Math.round((Math.random() * maxDiameter)))+1;
    // console.log(`The circle is set to have a ${diameter}-mile diameter.`);
    // ******

    // Radius is not so relatable, but it's how JS and Leaflet do the math.
    // Here I'm calling radius miles.
    miles = diameter / 2;
    var diameterInFeet = Math.round((diameter * 5280));
    miles = Math.round((diameter * 10)) / 10;

    // Tell the visitor how big the outer circle is--for now, console.log:
    outerCircleDims = `The outer circle is ${diameter} miles (${diameterInFeet} feet) in diameter, or about `;
    console.log(outerCircleDims);

      // IIB. HOW MANY DELAWARES IS THAT?
    // All of this evaluates diameter against common dimensions,
    // from smallest (the height of a person) to largest (the length of Delaware)
    // and picks the best one.

    // If there are more than 100 of something, use a larger dimension.
    // This sets that threshold of 100 in a way we can change if needed.
    var maxCommonObjects = 100;

      if (diameterInFeet / 5.5 < maxCommonObjects) {
        // 5.5 ft
        scaleText = `${Math.round((diameterInFeet / 5.5))} <a href="https://www.cdc.gov/nchs/data/nhsr/nhsr122-508.pdf" target="_blank">people</a> across, if they lay down head to toe.`;
      }

      else if (diameterInFeet / 35 < maxCommonObjects) {
        // 35 ft
        scaleText = `${Math.round((diameterInFeet / 35))} <a href="https://www.trackschoolbus.com/blog/what-is-the-average-size-of-a-school-bus/" target = "_blank">school buses</a> across.`;
      }
      else if (diameterInFeet / 231.3 < maxCommonObjects) {
        // 231.3 ft
        scaleText = `${Math.round((diameterInFeet / 231.3))} <a href="https://en.wikipedia.org/wiki/Boeing_747" target="_blank">747s</a> across.`;
      }
      else if (diameterInFeet / 1063 < maxCommonObjects) {
        // 1063 ft
        scaleText = `${Math.round((diameterInFeet / 1063))} <a href="https://en.wikipedia.org/wiki/Eiffel_Tower" target="_blank">Eiffel Towers</a> across (if you could lay the Eiffel Tower on its side).`;
      }
      else if ((diameterInFeet / (13.4 * 5280)) < maxCommonObjects) {
        // 13.4 miles
        scaleText = `${Math.round((diameterInFeet / (13.4 * 5280)))} <a href="https://en.wikipedia.org/wiki/Manhattan" target="_blank">islands of Manhattan</a> across.`;
      }
      else {
        // 96 miles
        scaleText = `${Math.round((diameterInFeet / (96 * 5280)))} <a href="https://en.wikipedia.org/wiki/Delaware" target="_blank">Delawares</a> aross.`;
      };
      console.log(scaleText);

    console.log("-_-_-_-_-_-_-_-_-_-_-_-");


      // IIC. HOW MANY CONCENTRIC CIRCLES TO PLOT?
    // We said we'd give visitors variable to change (probably with a drop-down)
    // that specifies how many concentric circles there should be.
    // (Just for the moment, it's choosing a value at random.)

    // ******
    var divisions = 4
    // var divisions = Math.round(Math.random() * 5) + 1
    console.log(`If there's more than one circle, there will be ${divisions} of them.`);
    // ******

    // Radius starts at zero, but, when code gets to the loop that makes concentric circles,
    // radius will iterate by radiusIncrements up to the limit set in miles.
    var radius = 0;

    // how many miles apart is one concentric circle from the next?
    var radiusIncrements = miles / divisions;
    circleText = `Each circle will be ${Math.round(radiusIncrements * 10) / 10} miles (${Math.round(radiusIncrements * 5280)} feet) from the next, or about ${Math.round(radiusIncrements * 20)} minutes walk.`;
    // console.log(circleText);


      // IID. HOW DOES DIAMETER RELATE TO ZOOM LEVEL?
    // This sets a zoom level to start.
    // In the long switch statement below, value are added to this.

    
    // This sets min and max zoom levels for use in all map layers
    var minZoomLevel = 3;
    var maxZoomLevel = 22;
    console.log("-_-_-_-_-_-_-_-_-_-_-_-");

var zoom = 3
    // Here's an if-then statement that sets zoom level based on the radius of the outermost circle, set in the variable miles.
    // It deserves further refinement.
    if (diameter < 1.5) {
      zoom = 14;
    }

    else if (diameter < 3) {
      zoom = 13;
    }

    else if (diameter < 6) {
      zoom = 12;
    }

    else if (diameter < 12) {
      zoom = 11;
    }

    else if (diameter < 24) {
      zoom = 10;
    }

    else if (diameter < 47) {
      zoom = 9;
    }

    else if (diameter < 95) {
      zoom = 8;
    }

    else if (diameter < 190) {
      zoom = 7;
    }

    else if (diameter < 380) {
      zoom = 6;
    }

    else if (diameter < 760) {
      zoom = 5;
    }

    else if (diameter < 1520) {
      zoom = 4;
    }

    else if (diameter < 3040) {
      zoom = 3;
    }
    
    else if (diameter < 6080) {
      zoom = 2;
    };

    console.log(`${diameter} mile Ø`);
    console.log(`zoom level ${zoom}`);
    var worldMapPxDims = 256 * (2 ** zoom);
    var thousandPxMapMilesWide = 1000 / worldMapPxDims * 24901;
    console.log(`At this zoom level, the world in cylindrical projection would be a square ${worldMapPxDims} pixels on each side.`);
    console.log(`You might imagine a 1000-pixel wide view of something at the equator was representing a view of the world ${Math.round(thousandPxMapMilesWide)} miles wide.`);

        // print a statement about scale to the HTML
        window.onload = function(){
          document.getElementById('scale').innerHTML =  "<i>starting zoom level: " + zoom + "</i><br>" + outerCircleDims + scaleText + "<br>" + circleText;
        };
        console.log("Scale text sent to scale div in HTML.");
    
    
//  zoom         approx. width in miles            the whole world would be a  
//  level    at equator of a 1000-pixel map     square this many pixels on a side
//     3                 12159                              2048
//     4                  6080                              4096
//     5                  3040                              8192
//     6                  1520                             16384
//     7                   760                             32768
//     8                   380                             65536
//     9                   190                            131072
//    10                    95                            262144
//    11                    47                            524288
//    12                    24               
//    13                    12                 



// Now we have to switch gears and make a map in order to have a map to plot circles on.
    // IIIA. MAKE A MAP

    // 1. Define base maps
    // all the MapBox styles are at https://docs.mapbox.com/api/maps/styles/#mapbox-styles
    var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      minZoom: minZoomLevel,
      zoom: zoom,
      maxZoom: maxZoomLevel,      
      id: "satellite-v9",
      accessToken: API_KEY
    });

    var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      minZoom: minZoomLevel,
      zoom: zoom,
      maxZoom: maxZoomLevel,      
      id: "dark-v10",
      accessToken: API_KEY
    });

    var streets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      minZoom: minZoomLevel,
      zoom: zoom,
      maxZoom: maxZoomLevel,      
      id: "streets-v11",
      accessToken: API_KEY
    });

    // 2. Create a map object. Here's where zoom is:
    var myMap = L.map("map", {
      center: NPSplaceRandomLatLong,
      minZoom: minZoomLevel,
      zoom: zoom,
      maxZoom: maxZoomLevel,
      layers: baseMaps
// add to the array in line 156 the other layers I want: parks and points of interest
});
    // console.log("map object created");



    // 3. Import more data: points of interest dataset

var POIhistoricData = "";
// filteredPoints.csv
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
var history = L.layerGroup(POImarkers);

// Here ends the code that turns points of interest data into a layer.
console.log("-_-_-_-_-_-_-_-_-_-_-_-");
});



    // 4. This creates the tile layer:
    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      minZoom: minZoomLevel,
      maxZoom: maxZoomLevel,
      id: "mapbox/satellite-v9",
      zoomOffset: -1,
      // API key
      accessToken: API_KEY
    }).addTo(myMap);

    // console.log("Added a tile layer, read in the API key, and set the map view.");



    // 5. This lists base maps for Layers Control:    
    var baseMaps = {
      "satellite": satellite,
      "gray": dark,
      "streets": streets
    };
    console.log("Here's what's in baseMaps:");
    console.log(baseMaps);
    
    

    // 6. This lists overlay(s) for Layers Control:
    var overlays = {
      "history": history
    };
    console.log("Here's what's in overlays:");
    console.log(overlays);



    // 7. This creates a Layers Control:
    // TRY REMOVING "overlays" FROM THE NEXT LINE AND RERUNNING IT:
    L.control.layers(baseMaps).addTo(myMap);
    // THEN ADDING "overlays" BACK INTO THE PREVIOUS LINE AND RERUNNING IT.


    
    // 8. This draws useful enhancements on the map:
    console.log("-_-_-_-_-_-_-_-_-_-_-_-");

    // This draws a line around the world along the 45th parallel north...
    var parallel = [
      [45.00, -180],
      [45.00, 180]
    ];
    L.polyline(parallel, {
      color: "red",
      weight: "0.75"
    }).addTo(myMap);


    // œuf de Pâques
    var axeHistorique = [
      [48.890171, 2.243282],
      [48.861613, 2.333366]
    ];
    L.polyline(axeHistorique, {
      color: "lightblue",
      weight: "2"
    }).addTo(myMap);


    // ...the equator...    
    var parallel = [
      [0, -180],
      [0, 180]
    ];
    L.polyline(parallel, {
      color: "#9999ff",
      weight: "0.75"
    }).addTo(myMap);


    // ...and the 45th parallel south.
    var parallel = [
      [-45.00, -180],
      [-45.00, 180]
    ];
    L.polyline(parallel, {
      color: "red",
      weight: "0.75"
    }).addTo(myMap);

    // console.log("Drew a blue line around the world at the equator and red lines around the world at the 45th parallels north and south");
    // console.log("-_-_-_-_-_-_-_-_-_-_-_-");



    // IIE. PICK COLORS AND PLOT CIRCLES ON THE MAP
    // Color is the color of the *boundary* of the concentric circle.
Color = "#ffffff";

// fillColor is the color of the *interior* of the concentric circle.
var fillColor = Color;

// If we have allow multiple map views more than satellite view,
// we'll want to test and determine different optimal opacities for each view
// and set them here:
var opacity = 0.05;
console.log(`color: ${Color}, fillColor: ${fillColor}, opacity: ${opacity}`);

// ...but if someone wants to see a circle with a radius of a mile or more,
// draw concentric circles:
if (diameter > 0) {

    // console.log(`Started running a loop to draw concentric circles out to ${miles} miles around the center point.s`);

    for ( radius = 0 + radiusIncrements; radius <= miles;) {

        // Create a circle and give it attributes
        L.circle(centerLatLong, {
          color: Color,
          fillColor: fillColor,
          fillOpacity: opacity,
          radius: radius * 1609.34
        }).addTo(myMap);
        // console.log(`Drew concentric circle ${Math.round((radius * 2) * 10 ) / 10} miles across.`);

        // console.log(`color: ${Color} opacity: ${opacity}`);
        radius = radius + radiusIncrements;
        };
        // console.log(`Finished running the concentric circles loop.`);
    };

console.log("-_-_-_-_-_-_-_-_-_-_-_-");




// IIIB. BIND MARKERS TO MAP FOR EACH NPS UNIT ("PARK")

// NPSplaceCount stores how many records there are in our dataset of NPS units:

  // This loops through the array called places and creates one marker for each place,
  // then binds a popup containing that place's info and adds it to the map.

  for (var i = 0; i < NPSplaceCount; i++) {
    var unit = NPSData[i];

    unitSearchName = "";
    unitName = "";
    unitVisitors = "";
    unitAcres = "";
    unitVisitorsPerAcre = "";
    
    unitSearchName = unit.Name.replace(/ /g, '+');
    unitName = `<a href=http://www.google.com/search?q="${unitSearchName}" target="_blank">${unit.Name}</a>`;

    unitAcres = `${Math.round((unit.Acres) * 10) / 10} acres`;

    if (unit.att_Average > 0) {
      unitVisitors = `${unit.att_Average} visitors each year<br>`;
      unitVisitorsPerAcre = `${Math.round((unit.att_Average / unit.Acres) * 10 ) / 10} visitors per acre each year`;
    }
    else if (unit.att_Average = 0) {
      unitVisitors = "attendance data not available";
      unitVisitorsPerAcre = "";
    };

    // console.log(unit.Code);
    // console.log(unit.Latitude);
    // console.log(unit.Longitude);
    // console.log(visitors);

var unitIcon = L.icon({
  iconURL: "resources/NPSarrowhead.png",
  iconSize: [38,95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
}
);

    L.marker([unit.Latitude, unit.Longitude])
    .bindPopup("<h3>" + unitName + "</h3>" + "<h4>" + unitVisitors + unitAcres + "<br>" + unitVisitorsPerAcre + "</h4>")
    .addTo(myMap);
    // console.log(`marked ${i+1}`);
  };

console.log(`Popups bound to markers and placed on map.`);

console.log("-_-_-_-_-_-_-_-_-_-_-_-");


// this ends the outermost function
});
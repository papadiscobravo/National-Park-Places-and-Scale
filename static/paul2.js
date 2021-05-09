console.log("paul2.js loaded");

// IA IMPORT SOME DATA
// import data about the 418 units ('parks') in the National Park System.
// They're not all parks--some are National Monuments, Historic Sites, Scenic Rivers, and so forth.

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


d3.json("/natparks").then(function (NPSData) {
	// Cast strings to numbers for each record in NPSData
	// NPSData.forEach(function (data) {
	// 	data.latitude = +data.latitude;
	// 	datal = +datal;
	// 	data.Acres = +data.Acres;
	// 	data.att_2011 = +data.att_2011;
	// 	data.att_2012 = +data.att_2012;
	// 	data.att_2013 = +data.att_2013;
	// 	data.att_2014 = +data.att_2014;
	// 	data.att_2015 = +data.att_2015;
	// 	data.att_2016 = +data.att_2016;
	// 	data.att_2017 = +data.att_2017;
	// 	data.att_2018 = +data.att_2018;
	// 	data.att_2019 = +data.att_2019;
	// 	data.att_2020 = +data.att_2020;
	// 	data.att_Average = +data.att_Average;
	// });

	// set a variable that stores how many records there are in this dataset:
	NPSplaceCount = NPSData.length;
	console.log(`natParksFinal.json: ${NPSplaceCount} records.  Let's start with one at random:`);

	// pick a number at random to pull that record from this dataset:
	NPSplaceRandom = Math.floor(Math.random() * NPSplaceCount);

	// retrieve the lat and long from this record and put it into an array:
	NPSplaceRandomLatLong = [NPSData[NPSplaceRandom].latitude, NPSData[NPSplaceRandom].longitude];
	parkID = NPSplaceRandom;

	console.log(`${NPSplaceRandom} ${NPSData[NPSplaceRandom].code}
    ${NPSData[NPSplaceRandom].name}
    ${Math.round(NPSData[NPSplaceRandom].acres)} acres
    ${NPSplaceRandomLatLong} lat long
  `);

	window.onload = function () {
		document.getElementById('label').innerHTML = NPSData[NPSplaceRandom].name;
	};
	console.log(`Made the text '${NPSData[NPSplaceRandom].name}' available to the label div in index.html`);
	console.log(NPSData[NPSplaceRandom].name);


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


	// IIC. HOW MANY CONCENTRIC CIRCLES TO PLOT?
	// We said we'd give visitors variable to change (probably with a drop-down)
	// that specifies how many concentric circles there should be.
	// (Just for the moment, it's choosing a value at random.)

	// ****** Here is where we could let the website visitor choose how many
	//        concentric circle to plot, if we have time left to do that:
	var divisions = 4
	// ******


	// Radius starts at zero so, when code gets to the loop that makes concentric circles,
	// radius will iterate from zero by radiusIncrements up to the limit set in miles.
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

	console.log(`${diameter} mile diameter`);
	console.log(`zoom level ${zoom}`);
	var worldMapPxDims = 256 * (2 ** zoom);
	var thousandPxMapMilesWide = 1000 / worldMapPxDims * 24901;
	console.log(`At this zoom level, the world in cylindrical projection would be a square ${worldMapPxDims} pixels on each side.`);
	console.log(`1000 pixels wide at zoom level ${zoom} at the equator is a roughly ${Math.round(thousandPxMapMilesWide)} mile-wide view of the world.`);

	// print a statement about scale to the HTML
	window.onload = function () {
		document.getElementById('scale').innerHTML = "<b>"+ NPSData[NPSplaceRandom].name + "</b><br>" + outerCircleDims + scaleText + "<br>" + circleText;
	};
	console.log("Scale text sent to scale div in HTML.");


	//  zoom         approx. width in miles            the whole world would be a  
	//  level    at equator of a 1000-pixel map     square this many pixels on a side
	//     3                 12,159                              2,048
	//     4                  6,080                              4,096
	//     5                  3,040                              8,192
	//     6                  1,520                             16,384
	//     7                    760                             32,768
	//     8                    380                             65,536
	//     9                    190                            131,072
	//    10                     95                            262,144
	//    11                     47                            524,288
	//    12                     24                          1,048,576            
	//    13                     12                          2,097,152  

	console.log("-_-_-_-_-_-_-_-_-_-_-_-");



	// Now we have to switch gears and make a map in order to have a map to plot circles on.
	// IIIA. MAKE A MAP

	// 1. Define base maps
	// all the MapBox styles are at https://docs.mapbox.com/api/maps/styles/#mapbox-styles
	var API_KEY = "pk.eyJ1IjoiY2llcmFubW9ycmlzIiwiYSI6ImNrbnZ2Yzc1NTA1d3kyd3JzeGs5ODJlZ3QifQ.4Kt35f8kgOcQmYe2DIhJsA"
	
	var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
		attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
		minZoom: minZoomLevel,
		zoom: zoom,
		maxZoom: maxZoomLevel,
		id: "dark-v10",
		accessToken: API_KEY
	});

    var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
		attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
		minZoom: minZoomLevel,
		zoom: zoom,
		maxZoom: maxZoomLevel,
		id: "satellite-v9",
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

		// 5. This lists base maps for Layers Control:    
		var baseMaps = {
			"gray background": dark,
			"satellite view": satellite,
			"street map": streets
		};

		console.log("Here's what's in baseMaps:");
		console.log(baseMaps);


	// 2. Create a map object:
	var myMap = L.map("map", {
		center: NPSplaceRandomLatLong,
		minZoom: minZoomLevel,
		zoom: zoom,
		maxZoom: maxZoomLevel,
		layers: satellite
		// add to an array elswhere the other layers I want: parks and points of interest
	});
	// console.log("map object created");





	// 3. Import more data: points of interest datasets, starting with history

	//------- start of history POI loop -------------
	var POIdataHist = "";
		d3.json("/historic").then(function (POIdataHist) {
		// d3.csv("../resources/historicFinal.csv").then(function (POIdataHist) {
		var POImarkersHist = [];
		var POIlengthHist = 0;
	
		// This counts how many records there are to turn into markers for this layer: 
		POIlengthHist = POIdataHist.length;
		// This casts strings to numbers for each record's lat long:
		POIdataHist.forEach(function (data) {
			data.latitude = +data.latitude;
			data.longitude = +data.longitude;
		});

		// This loops through POI data and creates one marker for each place,
		// then binds a popup containing that place's info and adds it to a layer:
		console.log(`Starting to loop through ${POIlengthHist} points of historical interest and turn them into markers...`);

		for (var i = 0; i < POIlengthHist; i++) {
			var POI = POIdataHist[i];

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
			POImarkersHist.push(POImarker);
		};

		console.log(`...${POIlengthHist} points of interest bound to POI markers and placed in history layer. Here's one at random:`);
		console.log(POImarkersHist[Math.floor(Math.round(Math.random() * POIlengthHist)) + 1]);

		// This turns the array called POImarkers into a Leaflet layer group:
		var Historical = L.layerGroup(POImarkersHist);

		console.log("-_-_-_-_-_-_-_-_-_-_-_-");
		//------- end of history POI loop -------------


		//------- start of amenities POI loop -------------		
		var POIdataAmenities = "";
			// d3.csv("../resources/amenitiesFinal.csv").then(function (POIdata) {
			d3.json("/amenities").then(function (POIdata) {
			POImarkers = [];
			POIlength = 0;

			// This counts how many records there are to turn into markers for this layer: 
			POIlength = POIdata.length;
			// This casts strings to numbers for each record's lat long:
			POIdata.forEach(function (data) {
				data.latitude = +data.latitude;
				data.longitude = +data.longitude;
			});

			// This loops through POI data and creates one marker for each place,
			// then binds a popup containing that place's info and adds it to a layer:
			console.log(`Starting to loop through ${POIlength} amenity points of interest and turn them into markers...`);

			for (var i = 0; i < POIlength; i++) {
				var POI = POIdata[i];

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

			console.log(`...${POIlength} points of interest bound to POI markers and placed in amenities layer. Here's one at random:`);
			console.log(POImarkers[Math.floor(Math.round(Math.random() * POIlength)) + 1]);

			// This turns the array called POImarkers into a Leaflet layer group:
			var Amenities = L.layerGroup(POImarkers);

			console.log("-_-_-_-_-_-_-_-_-_-_-_-");
			//------- end of amenities POI loop -------------


			//------- start of attractions POI loop -------------
			var POIdataAttractions = "";
				// d3.csv("../resources/attractionsFinal.csv").then(function (POIdata) {
				d3.json("/attractions").then(function (POIdata) {
				POImarkers = [];
				POIlength = 0;
	
				// This counts how many records there are to turn into markers for this layer: 
				POIlength = POIdata.length;
				// This casts strings to numbers for each record's lat long:
				POIdata.forEach(function (data) {
					data.latitude = +data.latitude;
					data.longitude = +data.longitude;
				});

				// This loops through POI data and creates one marker for each place,
				// then binds a popup containing that place's info and adds it to a layer:
				console.log(`Starting to loop through ${POIlength} attraction points of interest and turn them into markers...`);

				for (var i = 0; i < POIlength; i++) {
					var POI = POIdata[i];

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

				console.log(`...${POIlength} points of interest bound to POI markers and placed in attractions layer. Here's one at random:`);
				console.log(POImarkers[Math.floor(Math.round(Math.random() * POIlength)) + 1]);

				// This turns the array called POImarkers into a Leaflet layer group:
				var Attractions = L.layerGroup(POImarkers);

				console.log("-_-_-_-_-_-_-_-_-_-_-_-");
			//------- end of attractions POI loop -------------


			//------- start of boating POI loop -------------
			var POIdataBoating = "";
				// d3.csv("../resources/boatingFinal.csv").then(function (POIdata) {
				d3.json("/boating").then(function (POIdata) {
				POImarkers = [];
				POIlength = 0;

				// This counts how many records there are to turn into markers for this layer: 
				POIlength = POIdata.length;
				// This casts strings to numbers for each record's lat long:
				POIdata.forEach(function (data) {
					data.latitude = +data.latitude;
					data.longitude = +data.longitude;
				});

				// This loops through POI data and creates one marker for each place,
				// then binds a popup containing that place's info and adds it to a layer:
				console.log(`Starting to loop through ${POIlength} points of boating interest and turn them into markers...`);

				for (var i = 0; i < POIlength; i++) {
					var POI = POIdata[i];

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

				console.log(`...${POIlength} points of interest bound to POI markers and placed in boating layer. Here's one at random:`);
				console.log(POImarkers[Math.floor(Math.round(Math.random() * POIlength)) + 1]);

				// This turns the array called POImarkers into a Leaflet layer group:
				var Boating = L.layerGroup(POImarkers);

				console.log("-_-_-_-_-_-_-_-_-_-_-_-");
			//------- end of boating POI loop -------------



			//------- start of camping POI loop -------------
			var POIdataCamping = "";
			// d3.csv("../resources/campingFinal.csv").then(function (POIdata) {
			d3.json("/camping").then(function (POIdata) {
				// This initializes an array that's going to contain all the Leaflet markers for this layer:
				POImarkers = [];
				POIlength = 0;

				// This counts how many records there are to turn into markers for this layer: 
				POIlength = POIdata.length;
				// This casts strings to numbers for each record's lat long:
				POIdata.forEach(function (data) {
					data.latitude = +data.latitude;
					data.longitude = +data.longitude;
				});

				// This loops through POI data and creates one marker for each place,
				// then binds a popup containing that place's info and adds it to a layer:
				console.log(`Starting to loop through ${POIlength} points of camping interest and turn them into markers...`);

				for (var i = 0; i < POIlength; i++) {
					var POI = POIdata[i];

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

				console.log(`...${POIlength} points of interest bound to POI markers and placed in camping layer. Here's one at random:`);
				console.log(POImarkers[Math.floor(Math.round(Math.random() * POIlength)) + 1]);

				// This turns the array called POImarkers into a Leaflet layer group:
				var Camping = L.layerGroup(POImarkers);

				console.log("-_-_-_-_-_-_-_-_-_-_-_-");
			//------- end of camping POI loop -------------


			//------- start of emergency POI loop -------------
			var POIdataEmergency = "";
			// d3.csv("../resources/emergencyFinal.csv").then(function (POIdata) {
			d3.json("/emergency").then(function (POIdata) {
				// This initializes an array that's going to contain all the Leaflet markers for this layer:
				POImarkers = [];
				POIlength = 0;

				// This counts how many records there are to turn into markers for this layer: 
				POIlength = POIdata.length;
				// This casts strings to numbers for each record's lat long:
				POIdata.forEach(function (data) {
					data.latitude = +data.latitude;
					data.longitude = +data.longitude;
				});

				// This loops through POI data and creates one marker for each place,
				// then binds a popup containing that place's info and adds it to a layer:
				console.log(`Starting to loop through ${POIlength} emergency-related points of interest and turn them into markers...`);

				for (var i = 0; i < POIlength; i++) {
					var POI = POIdata[i];

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

				console.log(`...${POIlength} points of interest bound to POI markers and placed in emergency layer. Here's one at random:`);
				console.log(POImarkers[Math.floor(Math.round(Math.random() * POIlength)) + 1]);

				// This turns the array called POImarkers into a Leaflet layer group:
				var Emergency = L.layerGroup(POImarkers);

				console.log("-_-_-_-_-_-_-_-_-_-_-_-");
			//------- end of emergency POI loop -------------


			//------- start of transportation POI loop -------------
			var POIdataTransportation = "";
			// d3.csv("../resources/parkingTransportationFinal.csv").then(function (POIdata) {
			d3.json("/parkingtransportation").then(function (POIdata) {
				// This initializes an array that's going to contain all the Leaflet markers for this layer:
				POImarkers = [];
				POIlength = 0;

				// This counts how many records there are to turn into markers for this layer: 
				POIlength = POIdata.length;
				// This casts strings to numbers for each record's lat long:
				POIdata.forEach(function (data) {
					data.latitude = +data.latitude;
					data.longitude = +data.longitude;
				});

				// This loops through POI data and creates one marker for each place,
				// then binds a popup containing that place's info and adds it to a layer:
				console.log(`Starting to loop through ${POIlength} points of transportation interest and turn them into markers...`);

				for (var i = 0; i < POIlength; i++) {
					var POI = POIdata[i];

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

				console.log(`...${POIlength} points of interest bound to POI markers and placed in transportation layer. Here's one at random:`);
				console.log(POImarkers[Math.floor(Math.round(Math.random() * POIlength)) + 1]);

				// This turns the array called POImarkers into a Leaflet layer group:
				var Transportation = L.layerGroup(POImarkers);

				console.log("-_-_-_-_-_-_-_-_-_-_-_-");
			//------- end of transportation POI loop -------------



			//------- start of sports POI loop -------------
			var POIdataSports = "";
			// d3.csv("../resources/sportsActivitiesFinal.csv").then(function (POIdata) {
			d3.json("/sportsactivities").then(function (POIdata) {
				// This initializes an array that's going to contain all the Leaflet markers for this layer:
				POImarkers = [];
				POIlength = 0;

				// This counts how many records there are to turn into markers for this layer: 
				POIlength = POIdata.length;
				// This casts strings to numbers for each record's lat long:
				POIdata.forEach(function (data) {
					data.latitude = +data.latitude;
					data.longitude = +data.longitude;
				});

				// This loops through POI data and creates one marker for each place,
				// then binds a popup containing that place's info and adds it to a layer:
				console.log(`Starting to loop through ${POIlength} points of athletic interest and turn them into markers...`);

				for (var i = 0; i < POIlength; i++) {
					var POI = POIdata[i];

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

				console.log(`...${POIlength} points of interest bound to POI markers and placed in transportation layer. Here's one at random:`);
				console.log(POImarkers[Math.floor(Math.round(Math.random() * POIlength)) + 1]);

				// This turns the array called POImarkers into a Leaflet layer group:
				var Sports = L.layerGroup(POImarkers);

				console.log("-_-_-_-_-_-_-_-_-_-_-_-");
			//------- end of sports POI loop -------------



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





		// 6. This lists overlay(s) for Layers Control:
		var overlays = {
			"amenities": Amenities,
			"athletics": Sports,
			"attractions": Attractions,
			"boating": Boating,
			"camping": Camping,
			"emergency": Emergency,
			"history": Historical,
			"transportation": Transportation
		};
		console.log("Here's what's in overlays:");
		console.log(overlays);



		// 7. This creates a Layers Control:
		L.control.layers(baseMaps, overlays).addTo(myMap);
	});



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


	// œufs de Pâques
	var axeHistorique = [
		[48.890171, 2.243282],
		[48.861613, 2.333366]
	];
	L.polyline(axeHistorique, {
		color: "lightblue",
		weight: "2"
	}).addTo(myMap);

	var henge = [
		[51.179127, -1.825649],
		[51.178765, -1.826352]
	];
	L.polyline(henge, {
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
	Color = "#eeeeee";

	// fillColor is the color of the *interior* of the concentric circle.
	var fillColor = "#ffffff";

	// If we have allow multiple map views more than satellite view,
	// we'll want to test and determine different optimal opacities for each view
	// and set them here:
	var opacity = 0.05;
	console.log(`color: ${Color}, fillColor: ${fillColor}, opacity: ${opacity}`);

	// ...but if someone wants to see a circle with a radius of a mile or more,
	// draw concentric circles:
	if (diameter > 0) {

		console.log(`Started running a loop to draw concentric circles out to ${miles} miles around the center point.s`);

		for (radius = 0 + radiusIncrements; radius <= miles;) {

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
		console.log(`Finished running the concentric circles loop.`);
	};

	console.log("-_-_-_-_-_-_-_-_-_-_-_-");




	// IIIB. BIND MARKERS TO MAP FOR EACH NPS UNIT ("PARK")

	// NPSplaceCount stores how many records there are in our dataset of NPS units:

	// This loops through the array called places and creates one marker for each place,
	// then binds a popup containing that place's info and adds it to the map.
	console.log(`Started binding popups to markers and placing them on the map for each NPS unit...`);
	for (var i = 0; i < NPSplaceCount; i++) {
		var unit = NPSData[i];

		unitSearchName = "";
		unitName = "";
		unitVisitors = "";
		unitAcres = "";
		unitVisitorsPerAcre = "";

		unitSearchName = unit.name.replace(/ /g, '+');
		unitName = `<a href=http://www.google.com/search?q="${unitSearchName}" target="_blank">${unit.name}</a>`;

		if (unit.acres < 10) {
			unitAcres = `${Math.round((unit.acres) * 10) / 10} acres`;
		}
		else {
			unitAcres = `${Math.round(unit.acres)} acres`;
		};

		// console.log(unit);
		if (unit.att_average > 0) {
			unitVisitors = `${unit.att_average} recreation visits each year`;
			unitVisitorsPerAcre = `${Math.round(unit.att_average / unit.acres)} recreation visits per acre each year`;
		}
		else {
			unitVisitors = "attendance data not available";
			unitVisitorsPerAcre = "";
        };
        
        // https://leafletjs.com/examples/custom-icons/
        var NPSunitIcon = L.icon({
            iconUrl: "../resources/NPS-arrowhead-silhouette.png",
            iconSize: [38, 95],
            iconAnchor: [22, 94],
			popupAnchor: [-3, -76],
			shadowUrl: "../resources/NPS-arrowhead-shadow.png",
			shadowSize: [68, 95],
			shadowAnchor: [22, 94]
        });


		L.marker([unit.latitude, unit.longitude], title = unit.name, {icon: NPSunitIcon})
			.bindPopup("<h4>" + unitName + "</h4>" + "<p>" + unitVisitors + "<br>" + unitAcres + "<br>" + unitVisitorsPerAcre + "</p>")
			.addTo(myMap);
		// console.log(`marked ${i+1}`);
	};

	console.log(`...popups bound to markers and placed on map for each NPS unit.`);
	console.log("-_-_-_-_-_-_-_-_-_-_-_-");


	});
	});
	});
	});
	});
	});
	});

	buildCharts(parkID);
	// Emerson's function to build a new bar chart for each NPS unit

});
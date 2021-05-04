console.log("app.js loaded");

function InitDashboard() {

    console.log(`InitDashboard()`); 
    // Load the initial dataset
    // Get latitude and longitude

    // These names use "draw" for something that happens on page load, and "update" for something that happens on mouse click:
    DrawLatitudeByParkArea()
    DrawParkAreaByLongitude()
    UpdateMapAndText(selectedParkID)
    UpdateBarGraph(selectedParkID)
    DrawPointsOfInterest()
;
}

// This should live in paul.js
function UpdateMapAndText(ParkID) {

    console.log(`UpdateMapAndText(${ParkID})`); 

    // Paul has written most of this function. This function's job is to 
    // import all data about the 418 units ('parks') in the National Park System,
    // pick one of the 418 units at random and center the map on its representative point (lat and long),
    // draw a map,
    // plot the 418 units on the map,
    // bind a marker to each unit's location with facts about that unit in a popup,
    // start by plotting concentric circles over the place chosen at random,
    // set a zoom level that shows the outermost circle, and
    // let the viewer choose how big the outermost circle is.
    // Maybe this work should be done in more than one function.
    // For instance, maybe
        // draw base map, plot 418 units on it, pick one at random,
        // center the map on it, and draw concentric circles one time
    // only needs to happen one time ("draw") and the other stuff that happens on mouse click,
        // recenter map and draw new circles, as well as Emerson's bar chart updating,
    // happens on mouse click ("update").

    d3.json("/maproute").then(data => {

        // Filter the data to get values for ParkID
        // Draw the graph
    }); 
}


// This should live in matt.js or ciera.js
function DrawPointsOfInterest(NPSsystem) {

    console.log(`DrawPointsOfInterest(${NPSsystem})`); 

    // Matt and/or Ciera will write this function. This function's job is to 
    // import all data about the 25,000 points of interest (POI) in the National Park System,
    // plot them on the map,
    // bind a marker to each unit's location with facts about that POI in a popup, and
    // create a control element in the interface that lets website visitors toggle two POI layers on/off.
    d3.json("/maproute").then(data => {

        // Filter the data to get values for amenity POIs,
        // plot them and bind markers to them, and
        // create control to toggle them on/off.
        // Filter the data to get values for history POIs,
        // plot them and bind markers to them, and
        // create control to toggle them on/off.

    }); 
}



// These should live in emerson.js
function UpdateBarGraph(ParkID) {

    console.log(`UpdateBargraph(${ParkID})`); 
    // Emerson will write this function. This function's job is to
    // draw a bar graph that shows annual attendance for ParkID



    d3.json("/bargraphroute").then(data => {

        // Filter the data to get Name and 2011-2020 attendance values for ParkID
        // Draw the graph
    }); 
}

function DrawParkAreaByLongitude(NPSsystem) {

    console.log(`DrawParkAreaByLongitude(${NPSsystem})`); 
    // Emerson will write this function. This function's job is to
    // draw a scatterplot that shows how unit area (in acres) varies
    // from west to east on the map.

    d3.json("/parkAreaByLongitude").then(data => {

        // Filter the data to get longitude and unit area values for all 418 units in the NPS system.
        // Draw the graph.
    
}

function DrawLatitudeByParkArea(NPSsystem) {

    console.log(`DrawLatitudeByParkArea(${NPSsystem})`); 

    // Emerson will write this function. This function's job is to
    // draw a scatterplot that shows how unit area (in acres) varies
    // from north to south on the map.

    d3.json("/parkAreaByLatitude").then(data => {

        // Filter the data to get unit area and latitude values for all 418 units in the NPS system.
        // Draw the graph.
    }); 
}


// This stays here in app.js
function eventHandler(event) {
    // Figure out what was clicked.
    // Figure out which new park unit to draw.

    UpdateMapAndText(newParkID);
    UpdateBarGraph(newParkID); 
}; 

// selectedParkID = "abcd"; 
// UpdateBargraph(selecteParkID);

InitDashboard(); 
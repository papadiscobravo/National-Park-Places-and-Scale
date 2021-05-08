console.log("app.js loaded");

function InitDashboard() {

    console.log(`InitDashboard()`); 

    DrawMapAndTextAndBarGraph("Shirley");

};

    // Load the initial dataset
    // Get latitude and longitude

    // These names use "draw" for something that happens on page load,
    // and "update" for something that happens on mouse click:
    // DrawMapAndTextAndBarGraph(selectedParkID)

    // these three depict data about the entire NPS system and only need to be drawn once:
    // DrawPointsOfInterest()


//    DrawLatitudeByParkArea()
//    DrawParkAreaByLongitude()

    // these happen whenever someone clicks on a new NPS unit marker:
//    UpdateMapAndText(selectedParkID)
//    UpdateBarGraph(selectedParkID)
 
// }

// // This should live in paul.js
// // ParkID here is an input that the function receives.
// function DrawMapAndTextAndBarGraph(selectedParkID) {
//     // Paul has written most of this function. This function's job is to 
//     // import all data about the 418 units ('parks') in the National Park System,
//     // pick one of the 418 units at random and center the map on its representative point (lat and long),
//     // draw a map,
//     // plot the 418 units on the map,
//     // bind a marker to each unit's location with facts about that unit in a popup,
//     // start by plotting concentric circles over the place chosen at random,
//     // set a zoom level that shows the outermost circle, and
//     // let the visitor choose how big the outermost circle is.

//     d3.json("/maproute").then(data => {
//         // Filter the data to get values for ParkID
//         // Draw the graph








//         console.log(`DrawMapAndTextAndBarGraph(${ParkID})`);
//     }); 
// }





// function DrawPointsOfInterest() {

//     d3.json("/maproute").then(data => {
//         // Filter the data to get values for ParkID
//         // Draw the graph

//         console.log(`DrawPointsOfInterest()`);
//     }); 
// }











// // This should live in paul.js
// function UpdateMapAndText(ParkID) {

//     console.log(`UpdateMapAndText(${ParkID})`); 

//     // Paul will write this function.
//     // The website visitor clicks on one of the 418 unit markers and the map is recentered on it,
//     // concentric circles are plotted over the chosen place,
//     // a zoom level is set that shows the outermost circle,
//     // a menu item appears that lets the viewer choose how big the outermost circle is in miles,
//     // new text appears describing the scale of the outermost circle.
//     // This mouse click will also trigger Emerson's bar graph to redraw attendance figures for the newly chosen NPS unit.

//     // Maybe this work should be done in more than one function.
//     // For instance, maybe
//         // draw base map, plot 418 units on it, pick one at random,
//         // center the map on it, and draw concentric circles one time
//     // only needs to happen one time ("draw") and the other stuff that happens on mouse click,
//         // recenter map and draw new circles, as well as Emerson's bar chart updating,
//     // happens on mouse click ("update").

//     d3.json("/maproute").then(data => {

//         // Filter the data to get values for ParkID
//         // Draw the graph
//     }); 
// }


// // This should live in matt.js or ciera.js
// function DrawPointsOfInterest(NPSsystem) {

//     console.log(`DrawPointsOfInterest(${NPSsystem})`); 

//     // Matt and/or Ciera will write this function. This function's job is to 
//     // import all data about the 25,000 points of interest (POI) in the National Park System,
//     // plot them on the map,
//     // bind a marker to each unit's location with facts about that POI in a popup, and
//     // create a control element in the interface that lets website visitors toggle two POI layers on/off.
//     d3.json("/maproute").then(data => {

//         // Filter the data to get values for amenity POIs,
//         // plot them and bind markers to them, and
//         // create control to toggle them on/off.
//         // Filter the data to get values for history POIs,
//         // plot them and bind markers to them, and
//         // create control to toggle them on/off.

//     }); 
// }



// // These should live in emerson.js
// function UpdateBarGraph(ParkID) {

//     console.log(`UpdateBargraph(${ParkID})`); 
//     // Emerson will write this function. This function's job is to
//     // draw a bar graph that shows annual attendance for ParkID



//     d3.json("/bargraphroute").then(data => {

//         // Filter the data to get Name and 2011-2020 attendance values for ParkID
//         // Draw the graph
//     }); 
// }

// function DrawParkAreaByLongitude(NPSsystem) {

//     console.log(`DrawParkAreaByLongitude(${NPSsystem})`); 
//     // Emerson will write this function. This function's job is to
//     // draw a scatterplot that shows how unit area (in acres) varies
//     // from west to east on the map.

//     d3.json("/parkAreaByLongitude").then(data => {

//         // Filter the data to get longitude and unit area values for all 418 units in the NPS system.
//         // Draw the graph.
    
// }

// function DrawLatitudeByParkArea(NPSsystem) {

//     console.log(`DrawLatitudeByParkArea(${NPSsystem})`); 

//     // Emerson will write this function. This function's job is to
//     // draw a scatterplot that shows how unit area (in acres) varies
//     // from north to south on the map.

//     d3.json("/parkAreaByLatitude").then(data => {

//         // Filter the data to get unit area and latitude values for all 418 units in the NPS system.
//         // Draw the graph.
//     }); 
// }


// // This stays here in app.js
// function eventHandler(event) {
//     // Figure out what was clicked.
//     // Figure out which new park unit to draw.

//     UpdateMapAndText(newParkID);
//     UpdateBarGraph(newParkID); 
// }; 

// // selectedParkID = "abcd"; 
// // UpdateBargraph(selecteParkID);


// // EVENT HANDLERS
// // 1. Choose circle diameter, whether
// //    drop-down box of just a couple choices (1, 4, and 10 miles) or 
// //    let the website visitor enter a number.

// // 2. Choose an NPS unit, whether by
// //    clicking on a nearby NPS unit (look for the arrowhead!) or
// //    choosing from a drop-down of 418.

// // 3. Put the same size concentric circles elsewhere, probably by
// //    clicking elsewhere on the map.


InitDashboard(); 
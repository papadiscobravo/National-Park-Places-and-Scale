console.log("app.js loaded");

function InitDashboard() {

    console.log(`InitDashboard()`); 
    // Load the initial dataset
    // Get latitude and longitude

    DrawParkAreaByLatitude()
    DrawLongitudeByParkArea()
    UpdateBargraph(selectedParkId); 
}

// This can live in another .js file altogether such as emerson.js
function UpdateBargraph(parkId) {

    console.log(`UpdateBargraph(${parkId})`); 

    // Emerson will write this function. This function's only job in the 
    // entire world is to draw this bargraph correctly
    d3.json("/bargraphroute").then(data => {

        // Filter the data to get values for parkId
        // Draw the graph
    }); 
}

function eventHandler(event) {
    // figure out what was clicked
    // figure out which park to draw

    UpdateMap(newParkId);
    UpdateBargraph(newParkId); 
}; 

// selectedParkId = "abcd"; 
// UpdateBargraph(selecteParkId);

InitDashboard(); 
console.log("ciera.js is loaded")

// Sports Activites D3 variables
d3.json("/sportsactivities").then(function(sportsData) {
    console.log(sportsData);

    // for loops possible here
    var sportsNames = sportsData[1].name;
    console.log(names);
});

// Amenities D3 variables
d3.json("/amenities").then(function(amenitiesData) {
    console.log(amenitiesData);

    var amenitiesNames = amenitiesData[0].name;
});

// Attractions D3 variables
d3.json("/attractions").then(function(attractionsData) {
    console.log(attractionsData);

    var attractionsNames = attractionsData[0].name;
});

// Boating D3 variables
d3.json("/boating").then(function(boatingData) {
    console.log(boatingData);

    var boatingNames = boatingData[0].name;
});

// Camping D3 Variables
d3.json("/camping").then(function(campingData) {
    console.log(campingData);

    var campingNames = campingData[0].name;
});

// Emergency D3 Variables
d3.json("/emergency").then(function(emergencyData) {
    console.log(emergencyData);

    var emergencyNames = emergencyData[0].name;
});

// Historic D3 variables
d3.json("/historic").then(function(historicData) {
    console.log(historicData);

    var historicNames = historicData[0].name;
});

// NatParks D3 variables
d3.json("/natparks").then(function(natparkData) {
    console.log(natparkData);

    var natparksNames = natparkData[0].name;
});

//Parking Lots D3 variables
d3.json("/parkinglots").then(function(parkinglotsData) {
    console.log(parkinglotsData);

    var parkinglotsNames = parkinglotsData[0].name;
});

//Parking Transportation D3 variables
d3.json("/parkingtransportation").then(function(parkingtransportationData) {
    console.log(parkingtransportationData);

    var parkingtransportationNames = parkingtransportationData[0].name;
});



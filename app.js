console.log("loaded");

// start by importing the data

var NPSData = {};
// national_park_system.csv
    // code
    // name
    // city
    // state
    // lat
    // long
    // extent

d3.csv("national_park_system.csv").then(function(NPSData) {
    // Cast strings to numbers for each record in NPSData
    NPSData.forEach(function(data) {
        data.lat = +data.lat;
        data.long = +data.long;
      });

      // set a variable that stores how many records there are in this set:
    NPSPlaceCount = NPSData.length;
    NPSPlaceRandom = Math.floor(Math.random() * NPSPlaceCount);
 
    // look at NPSData
    console.log(`The National Park System (NPS) dataset is ${NPSPlaceCount} records long:`);
    console.log(NPSData);

    var NPSPlaceRandomLatLong = `[${NPSData[NPSPlaceRandom].lat}, ${NPSData[NPSPlaceRandom].long}]`;
    console.log(`An NPS place at random is ${NPSData[NPSPlaceRandom].name} at ${NPSPlaceRandomLatLong}.`);

});


var POIData = "";
// points_of_interest.csv
    // OBJECTID
    // MAPLABEL
    // POITYPE
    // lat
    // long

d3.csv("points_of_interest.csv").then(function(POIData) {
  
    // look at POIData
    console.log(`The points-of-interest dataset is ${POIData.length} records long:`);
    console.log(POIData);

    // Cast strings to numbers for each record in NPSData
    POIData.forEach(function(data) {
        data.OBJECTID = +data.OBJECTID;
        data.lat = +data.lat;
        data.long = +data.long;
    });
});

// attendance.csv

var attendanceData = [];
// attendance.csv
    // code
    // name
    // a2011
    // a2012
    // a2013
    // a2014
    // a2015
    // a2016
    // a2017
    // a2018
    // a2019
    // a2020
    // average

d3.csv("attendance.csv").then(function(attendanceData) {
  
    // look at attendanceData
    console.log(`The attendance dataset is ${attendanceData.length} records long:`);
    console.log(attendanceData);

    // Cast strings to numbers for each record in NPSData
    attendanceData.forEach(function(data) {
        data.a2011 = +data.a2011;
        data.a2012 = +data.a2012;
        data.a2013 = +data.a2013;
        data.a2014 = +data.a2014;
        data.a2015 = +data.a2015;
        data.a2016 = +data.a2016;
        data.a2017 = +data.a2017;
        data.a2018 = +data.a2018;
        data.a2019 = +data.a2019;
        data.a2020 = +data.a2020;
        data.average = +data.average;
    });
});

console.log("If the next line is an error message, it demonstrates I can't get at a variable declared inside a D3 function from outside D3, which suggests either doing everything inside D3 functions or finding a different way to import .CSVs into JavaScript.");
console.log(NPSPlaceRandomLatLong);

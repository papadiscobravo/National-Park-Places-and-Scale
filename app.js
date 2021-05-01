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
    // look at NPSData
    console.log("Here's National Park System data:");
    console.log(NPSData);
  
    // Cast strings to numbers for each record in NPSData
    NPSData.forEach(function(data) {
      data.lat = +data.lat;
      data.long = +data.long;
    });
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
    console.log("Here's points-of-interest data:");
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
    console.log("Here's attendance data:");
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


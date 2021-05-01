## Places in the U.S. National Park System: Their points of interest, and relative scale, and attendance

### Project2: Data Analytics and Visualization Boot Camp, University of Minnesota


#### team members
[Paul Bernhardt](https://github.com/papadiscobravo), [Matt Killeen](https://github.com/matthewkilleen0830), [Ciera Morris](https://github.com/cieranmorris), [Emerson Williams-Molett](https://github.com/emersonmolett)


#### summary
This one-page dashboard shows a map of places in the U.S. National Park System.
When site visitors click on a map marker, a pop-up appears with facts about that place, a graph is drawn of that park's 2011-2020 attendance, and concentric circles appear around the marker. Clicking on a different place and plotting the same diameter circles around a new place while staying at the same zoom level allows visitors to compare the scale of different places.


#### DRAFT site diagram

    index.html imports:
    style.css
    Leaflet
    d3

    index.html calls on:
    config.js, which calls on mapbox.com
    app.js

    app.js calls on:
    D3import1.js--Flask--SQLite db--NPSplaces table
    D3import2.js--Flask--SQLite db--POIdata table
    D3import3.js--Flask--SQLite db--AttendanceData table
    pickRandomPlace.js
    drawMap.js
    bindPlaceMarkers.js
    drawCircles.js
    bindPOImarkers.js
    plotAttendance.js
    plotLatVsArea.js
    plotLongVsArea.js


#### instructions
1. Clone this repo.
1. Do this.
1. Then do that.
1. Then do another thing.
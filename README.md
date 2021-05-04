## Places in the U.S. National Park System: &nbsp;Their points of interest, relative scale, and attendance

### Project2: &nbsp;Data Analytics and Visualization Boot Camp, University of Minnesota


#### team members
[Paul Bernhardt](https://github.com/papadiscobravo), [Matt Killeen](https://github.com/matthewkilleen0830), [Ciera Morris](https://github.com/cieranmorris), [Emerson Williams-Molett](https://github.com/emersonmolett)


#### summary
This one-page dashboard shows a map of places in the U.S. National Park System.
&nbsp;When site visitors click on a map marker, a pop-up appears with facts about that place, a graph is drawn of that park's 2011-2020 attendance, and concentric circles appear around the marker. &nbsp;Clicking on a different place and plotting the same diameter circles around a new place while staying at the same zoom level allows visitors to compare the scale of different places.


#### DRAFT site diagram

    index.html imports:
    style.css
    Leaflet
    d3

    index.html calls on:
    config.js, which calls on mapbox.com
    app.js

    app.js calls on:
    Matt.js
    Ciera.js
    Emerson.js
    Paul.js

#### major things left to do
1. Finish ETL. -Matt.

1. Import data from SQLite via Flask: &nbsp;NPSplacesAndAttendance table and POIdata table. -Ciera

1. Plot systemwide map: &nbsp;pick a random place, draw the map centered on that place, bind place markers of 423 units (parks) to the map, draw concentric circles aroud the place the map is centered on, bind point-of-interest markers to the map. -Paul

1. Plot per-park attendance that updates for each unit (park) clicked on. -Emerson
 
1. Plot two scatterplots of system-wide data that remain unchanged onscreen: &nbsp;lat vs area and long vs area.  -Emerson

1. Make sure HTML and CSS are making the page look really sharp. -we'll circle back to this.

1. Benji advises: &nbsp;Don't put logic on the outermost level of any of these files.
&nbsp;Everything we do, put it into a function.

#### instructions
1. Clone this repo.
1. Do this.
1. Then do that.
1. Then do another thing.

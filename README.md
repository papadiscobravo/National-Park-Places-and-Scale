## Places in the U.S. National Park System: &nbsp;Their points of interest, relative scale, and attendance

### Project2: &nbsp;Data Analytics and Visualization Boot Camp, University of Minnesota


#### Project Contributors
[Paul Bernhardt](https://github.com/papadiscobravo), [Matt Killeen](https://github.com/matthewkilleen0830), [Ciera Morris](https://github.com/cieranmorris), [Emerson Williams-Molett](https://github.com/emersonmolett)


#### Project Overview
This one-page dashboard shows a map of places in the U.S. National Park System.
&nbsp;When site visitors click on a map marker, a pop-up appears with facts about that place, a graph is drawn of that park's 2011-2020 attendance, and concentric circles appear around the marker. &nbsp;Clicking on a different place and plotting the same diameter circles around a new place while staying at the same zoom level allows visitors to compare the scale of different places.

#### Data Sources
The data analyzed in this project was compiled from the following sources:


#### Instructions
1. On GitHub, navigate to the project repository page titled `papadiscobravo/National-Park-Places-and-Scale`, or click on this [link]("https://github.com/papadiscobravo/National-Park-Places-and-Scale").

1. Clone the repository to your local machine.

1. Open a new terminal in the repository and source activate the Python environment.

1. In the same terminal, launch a Jupyter Notebook. Open the file `natParksETL.ipynb` and click `Restart and Clear Output`. Do not run the notebook at this time.

1. Launch pgAdmin4 to access your local postgreSQL Database. Generate a new database titled `natParks`.

1. Open a new query tool in this database and navigate to the folder icon in the upper lefthand corner. Navigate to the Desktop folder and then the cloned repository. Within that folder, navigate to the `resources` folder and open the file titled `table_schemata.sql`.

1. Once opened, run each block of code individually (spanning from lines 1 - 106) in order to drop any existing tables and then generate new tables with the national parks points of interest. Leave pgAdmin4 open and running.

1. Navigate back to the Juptyer Notebook and create a config.py file that contains your username, password, host, port, and database for postgresSQL. The database is referenced as `natParks` Once saved, go back to the Jupyter Notebook and click `Restart and Run All`. This takes all of the cleaned data from the CSVs and connects them to the tables created in postgreSQL.

1. Go back to PgAdmin to the `table_schemata.sql` you opened in the query tool. Now that the Jupyter Notebook is connected to the database, run each `SELECT * FROM` command **one at a time** in order to upload the cleaned data into their respective points of interest tables. Minimize both the pgAdmin4 window and the Jupyter Notebook window once finished.

1. Navigate back to the cloned repository folder and open a new terminal window. Source activate the Python environment, and activate the Flask server by typing `python app.py`.

1. Copy and paste the flask server link into your Chrome browser to launch to webpage.



#### major things left to do
1. Finish ETL. -Matt.

1. Import data from SQLite via Flask: &nbsp;NPSplacesAndAttendance table and POIdata table. -Ciera

*** User needs to input their own username and password used in their local PgAdmin4 SQL Database and for their Jupyter Notebook in a config.py file. The user also needs to run the `table_schemata.sql` into their own SQL Database in order to generate the 10 tables.

1. Plot systemwide map: &nbsp;pick a random place, draw the map centered on that place, bind place markers of 423 units (parks) to the map, draw concentric circles aroud the place the map is centered on, bind point-of-interest markers to the map. -Paul

1. Plot per-park attendance that updates for each unit (park) clicked on. -Emerson
 
1. Plot two scatterplots of system-wide data that remain unchanged onscreen: &nbsp;lat vs area and long vs area.  -Emerson

1. Make sure HTML and CSS are making the page look really sharp. -we'll circle back to this.

1. Benji advises: &nbsp;Don't put logic on the outermost level of any of these files.
&nbsp;Everything we do, put it into a function.
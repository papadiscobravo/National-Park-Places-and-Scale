# Discover America's Story: National Parks Points of Interest, Relative Scale, and Average Attendance

![NPS](resources/NPS-stock-image.png)

### Team Members
* [Paul Bernhardt](https://github.com/papadiscobravo) 
* [Matt Killeen](https://github.com/matthewkilleen0830) 
* [Ciera Morris](https://github.com/cieranmorris) 
* [Emerson Williams-Molett](https://github.com/emersonmolett)


### Project Overview
This one-page dashboard shows a map of places in the U.S. National Park System.
&nbsp;When site visitors click on a map marker, a pop-up appears with facts about that place, a graph is drawn of that park's 2011-2020 attendance, and concentric circles appear around the marker. &nbsp;Clicking on a different place and plotting the same diameter circles around a new place while staying at the same zoom level allows visitors to compare the scale of different places.

### Data Sources
The data analyzed in this project was compiled from the following sources:

* Units of the National Park Service system were gathered from the [GitHub repository](https://github.com/learn-chef/national-parks-java/blob/master/national-parks.json) of Franklin Webber.

* Annual attendance records for all national parks were taken from the [National Park Service statstical report site](https://irma.nps.gov/STATS/SSRSReports/National%20Reports/Annual%20Visitation%20By%20Park%20(1979%20-%20Last%20Calendar%20Year)).

* Points of interest within each national parks was derived from the National Park Service's [ArcGIS geocoordinate system](https://public-nps.opendata.arcgis.com/datasets/nps-points-of-interest-pois-geographic-coordinate-system-1?geometry=98.606%2C-21.130%2C-123.582%2C70.669).

* Land mass and area for each NPS unit came from the National Park Service's [nps boundary](https://public-nps.opendata.arcgis.com/datasets/nps-boundary-1/data?geometry=-81.404%2C-20.478%2C56.408%2C70.899) ArcGIS dataset.

### Database Recreation and Launch
1. On GitHub, navigate to the project repository page titled `papadiscobravo/National-Park-Places-and-Scale`, or click on this [link](https://github.com/papadiscobravo/National-Park-Places-and-Scale).

1. Clone the repository to your local machine.

1. Open a new terminal in the repository and source activate the Python environment.

1. In the same terminal, launch a Jupyter Notebook. Open the file `natParksETL.ipynb` and click `Restart and Clear Output`. Do not run the notebook at this time.

1. Inside your local repo, update the file called "TAconfig.py with your PgAdmin4 password and save the file. 

1. Inside your local repo, update the .gitignore file by adding "TAconfig.py" on the first line and save the file. 

1. Launch pgAdmin4 to access your local postgreSQL Database. Generate a new database titled `natParks`.

1. Open a new query tool in this database and navigate to the folder icon in the upper lefthand corner. Navigate to the Desktop folder and then the cloned repository. Within that folder, navigate to the `resources` folder and open the file titled `table_schemata.sql`.

1. Once opened, run each block of code individually (spanning from lines 1 - 106) in order to drop any existing tables and then generate new tables with the national parks points of interest. Leave pgAdmin4 open and running.

1. Navigate back to the Juptyer Notebook and create a config.py file that contains your username, password, host, port, and database for postgresSQL. The database is referenced as `natParks` Once saved, go back to the Jupyter Notebook and click `Restart and Run All`. This takes all of the cleaned data from the CSVs and connects them to the tables created in postgreSQL.

1. Go back to PgAdmin to the `table_schemata.sql` you opened in the query tool. Now that the Jupyter Notebook is connected to the database, run each `SELECT * FROM` command **one at a time** in order to upload the cleaned data into their respective points of interest tables. Minimize both the pgAdmin4 window and the Jupyter Notebook window once finished.

1. Navigate back to the cloned repository folder and open a new terminal window. Source activate the Python environment, and activate the Flask server by typing `python app.py`.

1. Copy and paste the flask server link into your Chrome browser to launch to webpage.

1. The landing page titled `National Park Explorer` will load displaying all interactive charts. Note that this website contains the following:
* A satellite view of the United States with NPS arrowheads indicating all the National Parks 
* A horizontal bar graph showing the number of annual visits for a selected park spanning from 2011 - 2020 
* A gauge chart indicating the average number of annual visits for a selected park 
* A stacked scatter plot comparing acreage of each national park broken down by latitude and longitude.

1. In the upper righthand corner of the navigation bar, there is a hyperlink titled `Notes`. Navigate to this webpage and take not of the information regarding data sources and acknowledgments for project assistance. The `Home` hyperlink in the upper lefthand corner will take you back to the landing page. 

1. Navigate to any National Park of your choice and learn about all the points of interest, the relative scale of interests within the park, and plan what time of year to visit based on annual attendance!
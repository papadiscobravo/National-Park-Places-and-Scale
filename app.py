# Import Dependencies
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
from flask import render_template
from config import username, password

#######################################
### DATABASE REFERENCE AND CONNECTION ###
#######################################

database_name = "natParks"
connection_string = connection_string = f'postgresql://{username}:{password}@localhost:5432/{database_name}'
engine = create_engine(connection_string)

# Reflect the existing database into a new model
base = automap_base()

# Reflect the tables
base.prepare(engine, reflect = True)

# Save references for each (10) tables in SQL Database
sports_table = base.classes.sportsactivities
amenities_table = base.classes.amenities
attractions_table = base.classes.attractions
boating_table = base.classes.boating
camping_table = base.classes.camping
emergency_table = base.classes.emergency
historic_table = base.classes.historic
natparks_table = base.classes.natparks
parkinglots_table = base.classes.parkinglots
parkingtransportation_table = base.classes.parkingtransportation

# Flask Setup

app = Flask(__name__)

#Effectively disables page caching
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

######################################
### FLASK ROUTES ###
######################################

#Index Page Route
@app.route("/")
def index_route():
    #This page returns the main page
    webpage = render_template("index.html")

    return webpage


# Sportsactivities Table Route
@app.route("/sportsactivities")
def sportsactivities():
    session = Session(engine)

    sports_results = session.query(sports_table.id, sports_table.name, sports_table.type, sports_table.latitude, sports_table.longitude).all()

    session.close()

    all_sports_list = []

    for id, name, type, latitude, longitude in sports_results:
        sports_dict = {}
        sports_dict["id"] = id
        sports_dict["name"] = name
        sports_dict["type"] = type
        sports_dict["latitude"] = latitude
        sports_dict["longitude"] = longitude

        all_sports_list.append(sports_dict)

    return jsonify(all_sports_list)

# Amenities Table Route
@app.route("/amenities")
def amenities():
    session = Session(engine)

    amenities_results = session.query(amenities_table.id, amenities_table.name, amenities_table.type, amenities_table.latitude, amenities_table.longitude).all()

    session.close()

    all_amenities_list = []

    for id, name, type, latitude, longitude in amenities_results:
        amenities_dict = {}
        amenities_dict["id"] = id
        amenities_dict["name"] = name
        amenities_dict["type"] = type
        amenities_dict["latitude"] = latitude
        amenities_dict["longitude"] = longitude

        all_amenities_list.append(amenities_dict)
    
    return jsonify(all_amenities_list)

#Attractions Table Route
@app.route("/attractions")
def attractions():

    session = Session(engine)

    attractions_results = session.query(attractions_table.id, attractions_table.name, attractions_table.type, attractions_table.latitude, attractions_table.longitude).all()

    session.close()

    all_attractions_list = []

    for id, name, type, latitude, longitude in attractions_results:
        attractions_dict = {}
        attractions_dict["id"] = id
        attractions_dict["name"] = name
        attractions_dict["type"] = type
        attractions_dict["latitude"] = latitude
        attractions_dict["longitude"] = longitude

        all_attractions_list.append(attractions_dict)
    
    return jsonify(all_attractions_list)


#Boating Table Route
@app.route("/boating")
def boating():

    session = Session(engine)

    boating_results = session.query(boating_table.id, boating_table.name, boating_table.type, boating_table.latitude, boating_table.longitude).all()

    session.close()

    all_boating_list = []

    for id, name, type, latitude, longitude in boating_results:
        boating_dict = {}
        boating_dict["id"] = id
        boating_dict["name"] = name
        boating_dict["type"] = type
        boating_dict["latitude"] = latitude
        boating_dict["longitude"] = longitude

        all_boating_list.append(boating_dict)

    return jsonify(all_boating_list)


#Camping Table Route
@app.route("/camping")
def camping():

    session = Session(engine)

    camping_results = session.query(camping_table.id, camping_table.name, camping_table.type, camping_table.latitude, camping_table.longitude).all()

    session.close()

    all_camping_list = []

    for id, name, type, latitude, longitude in camping_results:
        camping_dict = {}
        camping_dict["id"] = id
        camping_dict["name"] = name
        camping_dict["type"] = type
        camping_dict["latitude"] = latitude
        camping_dict["longitude"] = longitude

        all_camping_list.append(camping_dict)

    return jsonify(all_camping_list)


#Emergency Table Route
@app.route("/emergency")
def emergency():

    session = Session(engine)

    emergency_results = session.query(emergency_table.id, emergency_table.name, emergency_table.type, emergency_table.latitude, emergency_table.longitude).all()

    session.close()

    all_emergency_list = []

    for id, name, type, latitude, longitude in emergency_results:
        emergency_dict = {}
        emergency_dict["id"] = id
        emergency_dict["name"] = name
        emergency_dict["type"] = type
        emergency_dict["latitude"] = latitude
        emergency_dict["longitude"] = longitude

        all_emergency_list.append(emergency_dict)

    return jsonify(all_emergency_list)


#Historic Table Route
@app.route("/historic")
def historic():
    
    session = Session(engine)

    historic_results = session.query(historic_table.id, historic_table.name, historic_table.type, historic_table.latitude, historic_table.longitude).all()

    session.close()

    all_historic_list = []

    for id, name, type, latitude, longitude in historic_results:
        historic_dict = {}
        historic_dict["id"] = id
        historic_dict["name"] = name
        historic_dict["type"] = type
        historic_dict["latitude"] = latitude
        historic_dict["longitude"] = longitude

        all_historic_list.append(historic_dict)

    return jsonify(all_historic_list)


# Natparks Table Route
@app.route("/natparks")
def natparks():

    session = Session(engine)

    natparks_results = session.query(natparks_table.id, natparks_table.code, natparks_table.name, natparks_table.latitude, natparks_table.longitude, natparks_table.acres, natparks_table.att_2011, natparks_table.att_2012, natparks_table.att_2013, natparks_table.att_2014, natparks_table.att_2015, natparks_table.att_2016, natparks_table.att_2017, natparks_table.att_2018, natparks_table.att_2019, natparks_table.att_2020, natparks_table.att_average).all()

    session.close()

    all_natparks_list = []

    for id, code, name, latitude, longitude, acres, att_2011, att_2012, att_2013, att_2014, att_2015, att_2016, att_2017, att_2018, att_2019, att_2020, att_average in natparks_results:
        natparks_dict = {}
        natparks_dict["id"] = id
        natparks_dict["code"] = code
        natparks_dict["name"] = name
        natparks_dict["latitude"] = latitude
        natparks_dict["longitude"] = longitude
        natparks_dict["acres"] = acres
        natparks_dict["att_2011"] = att_2011
        natparks_dict["att_2012"] = att_2012
        natparks_dict["att_2013"] = att_2013
        natparks_dict["att_2014"] = att_2014
        natparks_dict["att_2015"] = att_2015
        natparks_dict["att_2016"] = att_2016
        natparks_dict["att_2017"] = att_2017
        natparks_dict["att_2018"] = att_2018
        natparks_dict["att_2019"] = att_2019
        natparks_dict["att_2020"] = att_2020
        natparks_dict["att_average"] = att_average

        all_natparks_list.append(natparks_dict)

    return jsonify(all_natparks_list)



#Parking Lots Table Route
@app.route("/parkinglots")
def parkinglots():
    
    session = Session(engine)

    parkinglots_results = session.query(parkinglots_table.id, parkinglots_table.name, parkinglots_table.type, parkinglots_table.latitude, parkinglots_table.longitude).all()

    session.close()

    all_parkinglots_list = []

    for id, name, type, latitude, longitude in parkinglots_results:
        parkinglots_dict = {}
        parkinglots_dict["id"] = id
        parkinglots_dict["name"] = name
        parkinglots_dict["type"] = type
        parkinglots_dict["latitude"] = latitude
        parkinglots_dict["longitude"] = longitude

        all_parkinglots_list.append(parkinglots_dict)

    return jsonify(all_parkinglots_list)


#Parking Transportation Route
@app.route("/parkingtransportation")
def parkingtransportation():

    session = Session(engine)

    parkingtransportation_results = session.query(parkingtransportation_table.id, parkingtransportation_table.name, parkingtransportation_table.type, parkingtransportation_table.latitude, parkingtransportation_table.longitude).all()

    session.close()

    all_parkingtransportation_list = []

    for id, name, type, latitude, longitude in parkingtransportation_results:
        parkingtransportation_dict = {}
        parkingtransportation_dict["id"] = id
        parkingtransportation_dict["name"] = name
        parkingtransportation_dict["type"] = type
        parkingtransportation_dict["latitude"] = latitude
        parkingtransportation_dict["longitude"] = longitude

        all_parkingtransportation_list.append(parkingtransportation_dict)

    return jsonify(all_parkingtransportation_list)

if __name__ == '__main__':
    app.run(debug=True)

-- Drop tables if exist
DROP TABLE natparks, sportsactivities, amenities, attractions,
	boating, camping, emergency, historic, parkinglots,
	parkingtransportation;

-- Create natparks table
CREATE TABLE natparks (
	id serial PRIMARY KEY,
	code VARCHAR not null,
    name VARCHAR not null,
    latitude float,
    longitude float,
    acres float,
	att_2011 int,
	att_2012 int,
	att_2013 int,
	att_2014 int,
	att_2015 int,
	att_2016 int,
	att_2017 int,
	att_2018 int,
	att_2019 int,
	att_2020 int,
	att_average int
);

-- Create sportsactivities table
CREATE TABLE sportsactivities (
	id serial PRIMARY KEY,
	name VARCHAR not null,
    type VARCHAR not null,
    latitude float,
    longitude float
);

-- Create amenities table
CREATE TABLE amenities (
	id serial PRIMARY KEY,
	name VARCHAR not null,
    type VARCHAR not null,
    latitude float,
    longitude float
);

-- Create attractions table
CREATE TABLE attractions (
	id serial PRIMARY KEY,
	name VARCHAR not null,
    type VARCHAR not null,
    latitude float,
    longitude float
);

-- Create boating table
CREATE TABLE boating (
	id serial PRIMARY KEY,
	name VARCHAR not null,
    type VARCHAR not null,
    latitude float,
    longitude float
);

-- Create camping table
CREATE TABLE camping (
	id serial PRIMARY KEY,
	name VARCHAR not null,
    type VARCHAR not null,
    latitude float,
    longitude float
);

-- Create emergency table
CREATE TABLE emergency (
	id serial PRIMARY KEY,
	name VARCHAR not null,
    type VARCHAR not null,
    latitude float,
    longitude float
);

-- Create historic table
CREATE TABLE historic (
	id serial PRIMARY KEY,
	name VARCHAR not null,
    type VARCHAR not null,
    latitude float,
    longitude float
);

-- Create parkinglots table
CREATE TABLE parkinglots (
	id serial PRIMARY KEY,
	name VARCHAR not null,
    type VARCHAR not null,
    latitude float,
    longitude float
);

-- Create parkingtransportation table
CREATE TABLE parkingtransportation (
	id serial PRIMARY KEY,
	name VARCHAR not null,
    type VARCHAR not null,
    latitude float,
    longitude float
);

-- Verify data has been imported (execute each line separately)
SELECT * FROM natparks;
SELECT * FROM sportsactivities;
SELECT * FROM amenities;
SELECT * FROM attractions;
SELECT * FROM boating;
SELECT * FROM camping;
SELECT * FROM emergency;
SELECT * FROM historic;
SELECT * FROM parkinglots;
SELECT * FROM parkingtransportation;
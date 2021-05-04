-- Drop tables if exist
DROP TABLE natparks, pointsinterest, parkinglots;

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

-- Create pointsinterest table
CREATE TABLE pointsinterest (
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

-- Verify data has been imported (execute each line separately)
SELECT * FROM natparks;
SELECT * FROM pointsinterest;
SELECT * FROM parkinglots;
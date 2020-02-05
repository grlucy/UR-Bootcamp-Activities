DROP DATABASE IF EXISTS seinfeld;
-- Create the database seinfeld and specified it for use.
CREATE DATABASE seinfeld;
USE seinfeld;
-- Create the table actors.
CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolness_points int NOT NULL,
  attitude varchar(60) NOT NULL,
  PRIMARY KEY(id)
);
-- Insert a set of records.
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Jerry", 90, "relaxed"), ("Elaine", 80, "righteous"), ("Kramer", 20, "doofus"), ("George", 70, "selfish");

SELECT * FROM actors;
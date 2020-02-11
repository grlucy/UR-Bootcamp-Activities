DROP DATABASE IF EXISTS moviePlannerDB;

CREATE DATABASE moviePlannerDB;

USE moviePlannerDB;

CREATE TABLE movies (
 id INTEGER(11) AUTO_INCREMENT NOT NULL,
 movie VARCHAR(100) NULL,
 PRIMARY KEY (id)
);

INSERT INTO movies (movie)
VALUES ("The Phantom Menace"), ("Attack of the Clones"), ("Revenge of the Sith"), ("A New Hope"), ("The Empire Strikes Back"), ("Return of the Jedi");

SELECT * FROM movies;
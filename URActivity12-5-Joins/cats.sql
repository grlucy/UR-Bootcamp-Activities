DROP DATABASE IF EXISTS cats_db;
CREATE DATABASE cats_db;
USE cats_db;

CREATE TABLE cats (
 id INTEGER(11) AUTO_INCREMENT NOT NULL,
 cat_name VARCHAR(100) NOT NULL,
 cat_age INTEGER(11) NULL,
 owner_id INTEGER(11) NULL,
 PRIMARY KEY (id)
);

CREATE TABLE owners (
 id INTEGER(11) AUTO_INCREMENT NOT NULL,
 first_name VARCHAR(100) NULL,
 last_name VARCHAR(100) NULL,
 phone VARCHAR(8) NULL,
 PRIMARY KEY (id)
);

INSERT INTO owners (first_name, last_name, phone)
VALUES ("Gina", "Lucy", "555-6400"),
("Robert", "Grix", "640-5555"),
("Serena", "Smith", "757-3404");

INSERT INTO cats (cat_name, cat_age, owner_id)
VALUES ("Fizz", 4, 1),
("Onyx", 4, 1),
("Shadow", 2, 3),
("Lola", 12, 3),
("Boo", 9, 1);

SELECT cat_name, cat_age, last_name
FROM cats
INNER JOIN owners ON cats.owner_id = owners.id;

SELECT cat_name, cat_age, last_name
FROM cats
INNER JOIN owners ON cats.owner_id = owners.id
WHERE owner_id = 3;

SELECT first_name, last_name, phone, cat_name
FROM owners
LEFT JOIN cats ON owners.id = cats.owner_id;
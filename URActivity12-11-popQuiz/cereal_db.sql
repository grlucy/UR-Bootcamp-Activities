DROP DATABASE IF EXISTS cereal_db;
CREATE DATABASE cereal_db;
USE cereal_db;

CREATE TABLE cereals (
 id INTEGER(11) AUTO_INCREMENT NOT NULL,
 name VARCHAR(100) NULL,
 PRIMARY KEY (id)
);

INSERT INTO cereals (name)
VALUES ("Captain Crunch"), ("Frosted Flakes"), ("Lucky Charms");

SELECT * FROM cereals;
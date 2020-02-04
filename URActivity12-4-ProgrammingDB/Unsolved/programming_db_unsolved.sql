-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --
USE programming_db;

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Create a string column called "language" --
language VARCHAR(100) NULL,
  -- Create an integer column called "rating" --
rating INTEGER(11) NULL,
  -- Create a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
mastered boolean default true,
  -- Set the id as this table's primary key
  PRIMARY KEY (id)
);

-- Create new example rows
INSERT INTO programming_languages (language, rating, mastered)
VALUES ("CSS", 9, true);

INSERT INTO programming_languages (language, rating)
VALUES ("HTML", 10);

INSERT INTO programming_languages (language, rating, mastered)
VALUES ("JavaScript", 6, false);

SELECT * FROM programming_languages;
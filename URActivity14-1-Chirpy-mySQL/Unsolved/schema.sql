DROP DATABASE IF EXISTS chirpy;
CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  author VARCHAR(100) NULL,
  chirp VARCHAR(255) NULL,
  time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)

);
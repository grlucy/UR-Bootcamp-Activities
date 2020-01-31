DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (title, artist, genre)
VALUES ("Hey Jude", "The Beatles", "Classic Rock"), ("Bad Guy", "Billie Eilish", "Pop"), ("Light of the Morning", "Band of Skulls", "Rock"), ("We Will Rock You", "Queen", "Classic Rock"), ("Helena", "My Chemical Romance", "Rock"), ("Firework", "Katy Perry", "Pop");

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'XXX'
DROP DATABASE IF EXISTS topsongs_db;

CREATE DATABASE topsongs_db;

USE topsongs_db;

CREATE TABLE top5000(
    id INT NOT NULL,
    song_artist VARCHAR(100),
    song_title VARCHAR (100) NOT NULL,
    song_year INT NOT NULL,
    song_score decimal(10,4) NULL,
    usa_score decimal(10,4) NULL,
    uk_score decimal(10,4) NULL,
    europe_score decimal(10,4) NULL,
    world_score decimal(10,4) NULL,
    PRIMARY KEY (id)
);

select * from top5000;
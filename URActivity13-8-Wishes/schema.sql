DROP DATABASE IF EXISTS wishes_db;

CREATE DATABASE wishes_db;

USE wishes_db;

create table wishes (
    id integer(11) auto_increment not null,
    wish varchar(100) null,
    primary key (id)
);

insert into wishes (wish)
values ("Birthday cake");

Select * from wishes;
DROP DATABASE IF EXISTS moviePlannerDB;
CREATE database moviePlannerDB;
use moviePlannerDB;

Create table movies (
    id integer(11) auto_increment not null,
    movie varchar(100) null,
    primary key (id)
);

insert into movies (movie)
values ("Star Wars");
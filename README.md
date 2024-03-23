Work in progress.


Sql queries:

create database webchatapp;

create table users(
id int auto_increment primary key,
email varchar(255),
first_name varchar(20),
last_name varchar(20),
password varchar(100),
uid varchar(8)
);

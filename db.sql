CREATE DATABASE myDb;
USE myDb;

CREATE TABLE users (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email VARCHAR(255),
    passwd VARCHAR(255)
);
DROP DATABASE myDb;

CREATE DATABASE myDb;
USE myDb;

CREATE TABLE users (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email VARCHAR(255),
    passwd VARCHAR(255)
);

CREATE TABLE gifs (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    url VARCHAR(512)
);

INSERT INTO gifs (url) VALUES 
    ("https://media.giphy.com/media/dQiRAYxA4beUi7Mn8T/giphy-downsized-large.gif"),
    ("https://media.giphy.com/media/G1gXbpltEA0UwWXZlg/giphy.gif"),
    ("https://media.giphy.com/media/bqcHatLeyuygc71Kq7/giphy.gif"),
    ("https://media.giphy.com/media/3oz8xtEhZtuz4cbVHa/giphy.gif")
CREATE DATABASE myDB;

USE myDB;

CREATE TABLE People(
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    gender ENUM ('guy', 'girl')
    PRIMARY KEY (id)
);


CREATE FUNCTION hello (s CHAR(20))
    RETURNS CHAR(50) DETERMINISTIC
    RETURN CONCAT('Hello, ',s,'!');

SELECT hello('world');

CREATE DATABASE IF NOT EXISTS mails;

USE mails;

CREATE TABLE IF NOT EXISTS `users` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255)
);

INSERT INTO users (name,email) VALUES ('Karn','karn@me.com');
INSERT INTO users (name,email) VALUES ('kla','kla@za.com');
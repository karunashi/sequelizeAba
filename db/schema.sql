CREATE DATABASE IF NOT EXISTS burgers_db1;
USE burgers_db1;

DROP TABLE IF EXISTS burgers;

# Create the burgers table
CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
consumed BOOL DEFAULT false,
PRIMARY KEY (id)
);

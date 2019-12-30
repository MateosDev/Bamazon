/*
    BAMAZON - DATABASE 
    https://github.com/MateosDev/Bamazon
*/

-- If DB Exists, use DROP DATABASE command

DROP DATABASE IF EXISTS bamazon_db;

-- Creating the DB

CREATE DATABASE bamazon_db;

-- Using/Selecting the DB to use. 

USE bamazon_db;

-- Create Table in DB

CREATE TABLE products
(
    id INT NOT NULL
    AUTO_INCREMENT,
  product_name VARCHAR
    (120) NULL,
  department_name VARCHAR
    (120) NULL,
    price
  DECIMAL
    (10,3) NOT NULL,
    stock_quantity INT
  NULL,
  PRIMARY KEY
    (id)
);
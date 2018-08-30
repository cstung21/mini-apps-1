-- DROP DATABASE checkout;
CREATE DATABASE checkout;

USE checkout;

CREATE TABLE customer (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE shipping (
  customer_id INT PRIMARY KEY NOT NULL,
  address_line1 VARCHAR(100) NOT NULL,
  address_line2 VARCHAR(100),
  city VARCHAR(60) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zip_code CHAR(5) NOT NULL,
  phone VARCHAR(11) NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customer(id)
);

CREATE TABLE billing (
  customer_id INT PRIMARY KEY NOT NULL,
  credit_card_no VARCHAR(20) NOT NULL,
  expiry_date VARCHAR(5) NOT NULL,
  cvv VARCHAR(4) NOT NULL,
  billing_zip VARCHAR(5) NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customer(id)
);
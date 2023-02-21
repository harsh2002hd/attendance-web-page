CREATE DATABASE attendance;
USE attendance;
CREATE TABLE records (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  status VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

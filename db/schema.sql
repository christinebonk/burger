CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger (
id INT AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN DEFAULT 0,
link VARCHAR(200)
)


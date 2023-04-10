CREATE TABLE operations (id int AUTO_INCREMENT PRIMARY KEY, username varchar(200), math_op varchar(200), result varchar(200));
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'example' with grant option;
FLUSH PRIVILEGES;
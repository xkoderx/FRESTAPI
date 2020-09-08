CREATE DATABASE IF NOT EXIST  escuela;

USE escuela;

CREATE TABLE empleados(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE empleados;

INSERT INTO empleados values
    (1,'HOMERO SIMPSON',9000),
    (2,'PAPAS RANCIAS',9000),
    (3,'PAPAS FRITAS',9000);

SELECT * FROM empleados;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(40),
    salary DECIMAL (7,2),
    dept_id INTEGER,
    CONSTRAINT fk_departments FOREIGN KEY (dept_id) REFERENCES departments(id)
);

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30)
);




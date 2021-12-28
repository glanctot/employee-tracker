INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Mark', 'Keller', 1, 1),
    ('Kaitlin', 'Mack', 2, 1),
    ('Gary', 'Johnson', 3, NULL),
    ('Greg', 'Lanctot', 4, 2),
    ('Lexi', 'Ginters', 5, 2),
    ('Paul', 'Anderson', 6, NULL),
    ('Barb', 'Johnson', 7, 3),
    ('Owen', 'Johnson', 8, 3),
    ('Zoey', 'Johnson', 9, NULL);

INSERT INTO roles (job_title, salary, dept_id)
VALUES
    ('Customer Service Representative', 40000, 1),
    ('Customer Service Team Lead', 45000, 1),
    ('Customer Service Manager', 55000, 1),
    ('Audit Representative', 40000, 2),
    ('Audit Team Lead', 45000, 2),
    ('Compliance Manager', 55000, 2),
    ('Document Specialist', 40000, 3),
    ('Document Team Lead', 45000, 3),
    ('Document Manager', 55000, 3);

INSERT INTO departments (dept_name)
VALUES
    ('Customer Service'),
    ('Compliance'),
    ('Documents');
/* Replace with your SQL commands */

CREATE TABLE admin (
    ID INTEGER ,
    Name VARCHAR(15) default 'admin',
    Email VARCHAR(100) unique NOT NULL,
    Password VARCHAR(25) NOT NULL,
    Address VARCHAR(50) default 'No Address',
    Gender VARCHAR(8),
    DOB date NOT NULL,
    PRIMARY KEY (ID)
);

insert into admin(ID, Name, Email, Password, Gender, DOB)
 values (
    1,
    'admin' , 
    'admin@outlook.com', 
    '0000',
    'Male',
    '2001-04-27'
);
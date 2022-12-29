/* Replace with your SQL commands */
CREATE TABLE customers (
    ID INTEGER ,
    Name VARCHAR(15) default 'user',
    Email VARCHAR(100) unique NOT NULL,
    Password VARCHAR(25) NOT NULL,
    Address VARCHAR(50) default 'No Address',
    Gender VARCHAR(8),
    DOB date NOT NULL,
    PRIMARY KEY (ID)
);

insert into customers(ID, Name, Email, Password, Gender, DOB)
 values (
    1,
    'Aly' , 
    'ali.zakariya1929@outlook.com', 
    '5555',
    'Male',
    '2001-04-27'
);
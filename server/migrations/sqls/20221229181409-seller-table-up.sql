/* Replace with your SQL commands */
CREATE TABLE seller (
    ID SERIAL  ,
    Name VARCHAR(15) default 'seller',
    Email VARCHAR(100) unique NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Address VARCHAR(50) default 'No Address',
    Gender VARCHAR(8),
    DOB date NOT NULL,
    PRIMARY KEY (ID)
);

insert into seller(ID, Name, Email, Password, Gender, DOB)
 values (
    1,
    'mina' , 
    'mina@gmail.com', 
    '1111',
    'Male',
    '2001-01-07'
);
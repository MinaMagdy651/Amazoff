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

-- insert into seller(ID, Name, Email, Password, Gender, DOB)
--  values (  1,  'mina' ,  'mina@gmail.com',  '0000', 'Male', '2001-01-07') ,
--  (2, 'tamer' , 'tamer@gmail.com', '0000', 'male', '2001-05-03'),
--  (3, 'mostafa', 'mostafa@gmail.com', '0000', 'male', '2001-08-22'),
--  (4, 'assem', 'assem@gmail.com', '0000', 'male', '2002-05-18') 



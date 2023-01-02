/* Replace with your SQL commands */

CREATE TABLE product (
    product_id SERIAL ,
    Name VARCHAR(30) NOT NULL,
    Category VARCHAR(30) NOT NULL,
    Description text NOT NULL,
    Quantity INTEGER NOT NULL,
    price float default 0,
    Rating float default 0.0, 
    PRIMARY KEY (product_id)
);

-- insert into product values()
/* Replace with your SQL commands */
CREATE TABLE bought (
    customer_id INTEGER,
    product_id INTEGER,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE,
    FOREIGN key (product_id) REFERENCES product(product_id) on DELETE CASCADE
);

-- insert into bought values (2,3) ,(1,6) , (4,5) ,(5,5);
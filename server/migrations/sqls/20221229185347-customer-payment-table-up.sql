/* Replace with your SQL commands */
CREATE TABLE customer_payment(
    customer_id INTEGER,
    payment varchar(50),
    FOREIGN KEY (customer_id) REFERENCES customers(ID) on delete cascade
);
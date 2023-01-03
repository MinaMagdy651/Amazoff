/* Replace with your SQL commands */
CREATE TABLE seller_payment(
    seller_id INTEGER,
    payment varchar(50),
    FOREIGN KEY (seller_id) REFERENCES seller(ID) on delete cascade
);
/* Replace with your SQL commands */
CREATE TABLE sells(
    seller_id INTEGER,
    product_id INTEGER,
    listDate date NOT NULL,
    FOREIGN KEY (seller_id) REFERENCES seller (ID) on delete cascade,
    FOREIGN KEY (product_id) REFERENCES product(product_id) on delete cascade
);
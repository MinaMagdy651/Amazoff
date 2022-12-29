/* Replace with your SQL commands */
CREATE TABLE provides(
    manufact_id INTEGER,
    product_id INTEGER,
    seller_id INTEGER,
    FOREIGN KEY (seller_id) REFERENCES seller(id) on delete cascade,
    FOREIGN KEY (product_id) REFERENCES product(product_id) on delete cascade,
    FOREIGN KEY (manufact_id) REFERENCES manufacturer(manufact_id) on delete cascade
);
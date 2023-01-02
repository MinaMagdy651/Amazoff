/* Replace with your SQL commands */
CREATE TABLE sold(
    seller_id INTEGER,
    product_id INTEGER,
    FOREIGN KEY (seller_id) REFERENCES seller(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES product(product_id) on DELETE CASCADE
);

insert into sold values(3,3) , (1,6) , (4,5);


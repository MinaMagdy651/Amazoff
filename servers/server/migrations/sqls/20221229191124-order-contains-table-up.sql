/* Replace with your SQL commands */
CREATE TABLE order_contains(
    product_id INTEGER,
    order_id INTEGER,
    quantity INTEGER,
    orderDate date NOT NULL,
    FOREIGN KEY (product_id) REFERENCES product(product_id) on delete cascade ,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) on delete cascade
);
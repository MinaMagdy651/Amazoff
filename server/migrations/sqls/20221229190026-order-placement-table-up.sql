/* Replace with your SQL commands */
CREATE TABLE order_placement(
    customer_id INTEGER,
    order_id INTEGER,
    FOREIGN KEY (customer_id) REFERENCES customers(ID) on delete cascade,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) on delete cascade
);  
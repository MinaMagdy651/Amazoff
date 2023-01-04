/* Replace with your SQL commands */
CREATE TABLE cart(
    customer_id INTEGER,
    product_id INTEGER,
    quantity INTEGER,
    unique (customer_id, product_id),
    FOREIGN KEY (customer_id) REFERENCES customers (id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);
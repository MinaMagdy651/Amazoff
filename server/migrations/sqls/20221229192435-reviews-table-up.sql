/* Replace with your SQL commands */
CREATE TABLE reviews(
    product_id INTEGER,
    customer_id INTEGER,
    review_id INTEGER,
    FOREIGN KEY (product_id) REFERENCES product(product_id) on delete cascade,
    FOREIGN KEY (customer_id) REFERENCES customers(ID) on delete cascade,
    FOREIGN KEY (review_id) REFERENCES review(review_id) on delete cascade
);
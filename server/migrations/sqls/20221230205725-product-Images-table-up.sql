/* Replace with your SQL commands */
CREATE TABLE product_images (
    product_id INTEGER,
    url VARCHAR(255) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES product(product_id) on delete cascade
);
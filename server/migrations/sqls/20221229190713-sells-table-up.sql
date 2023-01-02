/* Replace with your SQL commands */
CREATE TABLE sells(
    seller_id INTEGER,
    product_id INTEGER,
    listDate date NOT NULL,
    FOREIGN KEY (seller_id) REFERENCES seller (ID) on delete cascade,
    FOREIGN KEY (product_id) REFERENCES product(product_id) on delete cascade
);


-- insert into sells values(1, 6, '2022-05-11'), (2, 4, '2022-06-01'), (3,3,'2021-07-25'),
-- (4,5, '2020-05-06');
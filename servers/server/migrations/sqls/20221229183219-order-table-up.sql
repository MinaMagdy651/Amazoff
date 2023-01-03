/* Replace with your SQL commands */
CREATE TABLE orders (
    order_id SERIAL ,
    status INTEGER default 0,
    admin_ID INTEGER ,
    PRIMARY KEY (order_id),
    FOREIGN KEY (admin_ID) REFERENCES admin(ID) on delete SET NULL 
);
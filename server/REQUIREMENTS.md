# API ROUTES

## customers
1. authenticate => /customer-login [POST]
2. register => /customer-register [POST]
3. check Email => /customer-check-email [POST]
4. getUserByToken [TOKEN NEED] => /customer-token [GET]
## admin
1. authenticate => /admin-login [POST]
2. register => /admin-register [POST]
3. check Email => /admin-check-email [POST]
## seller
1. authenticate => /seller-login [POST]
2. register => /seller-register [POST]
3. check Email => /seller-check-email [POST]
## products
1. search for products => /product?name= [get]
2. create product => /product [POST]
3. for product Images => /product/:id/image?name= [get]
4. get All products => /products [GET]
5. get product by Id => /product/:id [GET]
6. search for products /product/search?name= [GET]

>* ON WORK 

## Data Shapes
### Customers 
    CREATE TABLE customers (
        ID INTEGER ,
        Name VARCHAR(15) default 'user',
        Email VARCHAR(100) unique NOT NULL,
        Password VARCHAR(25) NOT NULL,
        Address VARCHAR(50) default 'No Address',
        Gender VARCHAR(8),
        DOB date NOT NULL,
        PRIMARY KEY (ID)
    );

### admin
    CREATE TABLE admin (
        ID INTEGER ,
        Name VARCHAR(15) default 'admin',
        Email VARCHAR(100) unique NOT NULL,
        Password VARCHAR(25) NOT NULL,
        Address VARCHAR(50) default 'No Address',
        Gender VARCHAR(8),
        DOB date NOT NULL,
        PRIMARY KEY (ID)
    );
****
### seller
    CREATE TABLE seller (
        ID INTEGER ,
        Name VARCHAR(15) default 'seller',
        Email VARCHAR(100) unique NOT NULL,
        Password VARCHAR(25) NOT NULL,
        Address VARCHAR(50) default 'No Address',
        Gender VARCHAR(8),
        DOB date NOT NULL,
        PRIMARY KEY (ID)
        );
***
### product 
        CREATE TABLE product (
        product_id INTEGER,
        Name VARCHAR(30) NOT NULL,
        Category VARCHAR(30) NOT NULL,
        Quantity INTEGER NOT NULL,
        Rating float default 0.0, 
        PRIMARY KEY (product_id)
        );
***
### Manufacturer
    CREATE TABLE Manufacturer(
        manufact_id INTEGER ,
        Name VARCHAR(50) NOT NULL,
        PRIMARY KEY (manufact_id)
    );
***

### orders
    CREATE TABLE orders (
        order_id INTEGER,
        status INTEGER default 0,
        admin_ID INTEGER ,
        PRIMARY KEY (order_id),
        FOREIGN KEY (admin_ID) REFERENCES admin(ID) on delete SET NULL 
    );
***
### review
    CREATE TABLE review (
        review_id INT,
        Title VARCHAR(50) default NULL,
        Description VARCHAR(255) default NULL,
        Rating float DEFAULT 0,
        PRIMARY KEY (review_id) 
    );
*** 
### customer_payment
    CREATE TABLE customer_payment(
        customer_id INTEGER,
        payment varchar(50),
        FOREIGN KEY (customer_id) REFERENCES customers(ID) on delete cascade
    );
***
### seller_payment
    CREATE TABLE seller_payment(
    seller_id INTEGER,
    payment varchar(50),
    FOREIGN KEY (seller_id) REFERENCES seller(ID) on delete cascade
    );
***
### order_placement
    CREATE TABLE order_placement(
        customer_id INTEGER,
        order_id INTEGER,
        FOREIGN KEY (customer_id) REFERENCES customers(ID) on delete cascade,
        FOREIGN KEY (order_id) REFERENCES orders(order_id) on delete cascade
    );  
***
### sells
    CREATE TABLE sells(
        seller_id INTEGER,
        product_id INTEGER,
        listDate date NOT NULL,
        FOREIGN KEY (seller_id) REFERENCES seller (ID) on delete cascade,
        FOREIGN KEY (product_id) REFERENCES product(product_id) on delete cascade
    );
***
### order_contains
    CREATE TABLE order_contains(
    product_id INTEGER,
    order_id INTEGER,
    quantity INTEGER,
    orderDate date NOT NULL,
    FOREIGN KEY (product_id) REFERENCES product(product_id) on delete cascade ,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) on delete cascade
    );
***
### provides
    CREATE TABLE provides(
        manufact_id INTEGER,
        product_id INTEGER,
        seller_id INTEGER,
        FOREIGN KEY (seller_id) REFERENCES seller(id) on delete cascade,
        FOREIGN KEY (product_id) REFERENCES product(product_id) on delete cascade,
        FOREIGN KEY (manufact_id) REFERENCES manufacturer(manufact_id) on delete cascade
    );
***
### reviews
    CREATE TABLE reviews(
        product_id INTEGER,
        customer_id INTEGER,
        review_id INTEGER,
        FOREIGN KEY (product_id) REFERENCES product(product_id) on delete cascade,
        FOREIGN KEY (customer_id) REFERENCES customers(ID) on delete cascade,
        FOREIGN KEY (review_id) REFERENCES review(review_id) on delete cascade
    );
/* Replace with your SQL commands */
CREATE TABLE review (
    review_id SERIAL ,
    Title VARCHAR(50) default NULL,
    Description VARCHAR(255) default NULL,
    Rating float DEFAULT 0,
    PRIMARY KEY (review_id) 
);

insert into review values(1, 'good product', 'I really like this product' , 4.5);
insert into review values(2, 'bad product', 'very bad product' , 1.5);
insert into review values(3, 'nice product', 'very nice product' , 3.5);
insert into review values(4, 'good' , 'I wish it would be better' , 2.5);



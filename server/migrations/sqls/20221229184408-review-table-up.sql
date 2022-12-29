/* Replace with your SQL commands */
CREATE TABLE review (
    review_id SERIAL ,
    Title VARCHAR(50) default NULL,
    Description VARCHAR(255) default NULL,
    Rating float DEFAULT 0,
    PRIMARY KEY (review_id) 
);
/* Replace with your SQL commands */

CREATE TABLE product (
    product_id SERIAL ,
    Name VARCHAR(30) NOT NULL,
    Category VARCHAR(30) NOT NULL,
    Description text NOT NULL,
    Quantity INTEGER NOT NULL,
    price float default 0,
    Rating float default 0.0, 
    PRIMARY KEY (product_id)
);

-- insert into product values (1 , 'Card Holder', 'Fashion', '🔥 Brand seller: Amazing.egp, if you buy from other sellers, we cant guarantee the quality! Buy genuine products, Lifelong technical support.
-- 🔥 Safety ,Privacy and Security: RFID blocking pop-up credit card holder wallet can perfectly block unwanted RFID scanners, includes RFID blocking technology to prevent unauthorized access to personal information, Protect your RFID Credit Cards, Debit Cards, ID Cards from electronic pickpocketing.',
-- 10, 195, 3.8),
-- (2, 'Stainless Steel Band Watch', 'Fashion', 'If youre a man with even the slightest fashion sense, then you know that typically, theres a time and a place for every accessory. That makes it all the more rewarding when you find one that can be worn across multiple settings and for any occasion. This Citizen is the epitome of a casual watch that works as the perfect wardrobe component for a diverse array of environments. Its two-tone band is made of a strong stainless-steel which makes for a slick but bold appearance.',
-- 8, 1775, 4.5),
-- (3, 'Bluetooth Wireless Headset', 'Accessories','Brand: Xiaomi, Stereo Bass Headphone, Capacity: 300mAh,
-- Compatible with Xiaomi Redmi AirDots 2', 25, 399, 3.2),
-- (4, 'Lenovo Legion 5 Pro', 'Laptops', 'Lenovo Legion 5 Pro Laptop - 11th Intel Core i7-11800H, 16GB RAM, 1TB SSD, NVIDIA GeForce RTX 3060 6GB GDDR6 Graphics, 16" WQXGA(2560x1600) IPS 500nits 165Hz, Blue Backlit KB, Dos- Aluminium Stingray',
-- 4, 43092, 5)
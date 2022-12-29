# Amazoff
## Database Setup
->  Start postgres database on port 5432
1. you need to open sql shell (psql) 

2. write the following queries to create databases.
#### Create database called ecommerce.
3.      CREATE DATABASE ecommerce;
#### Create database called ecommerce-test for testing.
4.      CREATE DATABASE ecommerce-test;
#### connect to ecommerce database.
5.      \c ecommerce


## project Setup
#### 1- Install Dependencies:
        npm install
#### 2- Create .env file **You should put your own password in variable called password**
        NODE_ENV=development
        user=postgres
        password=
        database=ecommerce
        database_test=ecommerce-test
        host=localhost
        dialect=postgres  
        port=5432   
#### 3- setUp database
##### start postgres database on port 5432
        db-migrate up 
#### 4- Build the project
        npm run build
#### 5- start server
        npm run start
#### 6- server listen on port 3500
        -> localhost:3500
## For Testing
#### To test every action happened to database & test every endpoint action
    npm run test 


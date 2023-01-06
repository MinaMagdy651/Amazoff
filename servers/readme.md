
## 
<div align = "center">
<img src = "https://github.com/amwopps/Amazoff/blob/main/servers/screenshots/logo.jpg" >
</div>
<br>
<br><br>
<br><br>
<br><br>
<br>

<div align = "center">
<img src="https://github.com/amwopps/Amazoff/blob/main/servers/screenshots/Backend.gif" width="250" height="250">
</div>
********************************
## Database Setup
->  Start postgres database on port 5432
1. you need to open sql shell (psql) 

2. write the following queries to create databases.
#### Create database called ecommerce.
3.      CREATE DATABASE ecommerce;
#### Create database called ecommerce-test for testing.
4.      CREATE DATABASE ecommerce_test;
#### connect to ecommerce database.
5.      \c ecommerce


## project Setup
#### 1- Install Dependencies:
        npm install
#### 2- Create .env file in both folders 'server' & 'productServer **You should put your own password in variable called password**
        NODE_ENV=development
        user=postgres
        password=
        database=ecommerce
        database_test=ecommerce_test
        host=localhost
        dialect=postgres  
        port=5432
        BCRYPT_PASSWORD=nasdno!sAOP\SSA
        SALT_ROUNDS= 15
        TOKEN=secret_token   
#### 3- setUp database
##### start postgres database on port 5432
        npm run db_up
#### 4- Build the project
        npm run build
#### 5- start servers
       npm run start
#### 6- servers listen on ports 3500 & 3600
        -> localhost:3500
        -> localhost:3600
## For Testing
#### To test every endpoint action
    npm run test 


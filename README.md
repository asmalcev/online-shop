# online-shop
## Installation
To install all dependencies use
```
npm install
```
in boths folders ./frontend-online-shop/ and ./backend-online-shop/

## Running the app
Before running the app you have to run mongodb on localhost on port 27017, it can be done with the command:
```
docker run -d -p 27017:27017 mongo
```
Backend and frontend are running separately, because of it you need to run scripts in boths folders ./frontend-online-shop/ and ./backend-online-shop/ with the command
```
npm start
```
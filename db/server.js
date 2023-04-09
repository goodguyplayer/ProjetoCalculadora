const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const mariadb = require('mariadb');

const app = express();
const router = express.Router();

var jsonParser = bodyParser.json()

const path = __dirname + '/database/';
const PORT = 7000;

const pool = mariadb.createPool({
    host: 'mydb.com', 
    user:'myUser', 
    password: 'myPassword',
    connectionLimit: 5
});
pool.getConnection()
    .then(conn => {
    
      conn.query("SELECT 1 as val")
        .then((rows) => {
          console.log(rows); //[ {val: 1}, meta: ... ]
          //Table must have been created before 
          // " CREATE TABLE myTable (id int, val varchar(255)) "
          return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
        })
        .then((res) => {
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })
        .catch(err => {
          //handle error
          console.log(err); 
          conn.end();
        })
        
    }).catch(err => {
      //not connected
    });

app.use(bodyParser.json());


router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});


app.listen(PORT, () => console.log("API server, start"));

app.post("/calculate", jsonParser, function (req, res){
  console.log(req.body);
  res.sendStatus(201);
});
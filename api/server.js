const fs = require("fs/promises");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const _ = require("lodash");
const axios = require('axios');
const {v4: uuid} = require("uuid");
const { response } = require("express");

const PORT = 6050;

const app = express();
const router = express.Router();

const path = __dirname;

var jsonParser = bodyParser.json()

app.use(bodyParser.json());

app.use(cors());


router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});


app.listen(PORT, () => console.log("API server, start"));

app.post("/calculate", jsonParser, function (req, res){
  var result;
  try{
    result = eval(req.body.operation).toString();
  }
  catch(err){
   result = "ERROR";
  }
  axios.post("http://localhost:7000/newop", {username: req.body.username, operation: req.body.operation, result: result})
  //axios.post("http://localhost:7000/newop", JSON.stringify({username: req.body.username, operation: req.body.operation, result: result}))
  .then((response) => {
    console.log("response");
  })
  res.send(JSON.stringify({username: req.body.username, operation: req.body.operation, result: result}));
  return JSON.stringify({username: req.body.username, operation: req.body.operation, result: result});
});

app.get("/loaddata", jsonParser, function (req, res){
  axios.get("http://localhost:7000/all")
  .then((response) => {
    res.send(response.data);
  })
});
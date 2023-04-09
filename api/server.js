const fs = require("fs/promises");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const _ = require("lodash");
const axios = require('axios');
const {v4: uuid} = require("uuid");

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
  console.log(req.body);
  res.sendStatus(201);
});
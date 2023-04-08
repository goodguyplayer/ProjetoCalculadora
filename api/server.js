const fs = require("fs/promises");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const _ = require("lodash");
const {v4: uuid} = require("uuid");

const PORT = 5050;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send("");
  });

app.get("/calculate", (req, res) =>{
    console.log("This works")
});

app.listen(PORT, () => console.log("API server, start"));
const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const {v4: uuid} = require("uuid");

const PORT = 5050;

const app = express();

app.listen(PORT, () => console.log("API server, start"));
const express = require('express');
const bodyParser = require('body-parser');
const jquery = require('jquery');
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');


const app = express();
const router = express.Router();

var jsonParser = bodyParser.json()

const path = __dirname + '/views/';
const port = 5000;

router.use(function (req,res,next) {
    console.log('/' + req.method);
    next();
  });
  
  router.get('/', function(req,res){
    res.sendFile(path + 'index.html');
  });
  
app.use(express.static(path));
app.use(bodyParser.json())
app.use('/', router);
app.use("/event-emitters", express.static('./event-emitters/'));
app.set('view engine', 'ejs');

app.listen(port, function () {
  console.log('Example app listening on port 5000!')
})

app.post("/calculate", jsonParser, function (req, res){
  axios.post("http://localhost:6050/calculate", req.body)
  .then((response) => {
    console.log(response.data);
    res.status(201).send(response.data);
  })
  return 
});

app.get("/loaddata", jsonParser, function (req, res){
  axios.get("http://localhost:6050/loaddata", req.body)
  .then((response) => {
    res.status(201).send(response.data);
  })
  return 
});
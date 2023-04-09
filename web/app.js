const express = require('express');
const bodyParser = require('body-parser');
const jquery = require('jquery');


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

app.listen(port, function () {
  console.log('Example app listening on port 5000!')
})

app.post("/calculate", jsonParser, function (req, res){
  console.log(req.body);
  res.sendStatus(201);
});

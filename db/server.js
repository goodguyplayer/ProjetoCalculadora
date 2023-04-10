const express = require('express');
const db = require('./db')
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

var jsonParser = bodyParser.json()

const path = __dirname + '/database/';
const PORT = 7000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// GET
app.get('/all', async (req, res) => {
    try {
        const result = await db.pool.query("select * from operations");
        res.send(result);
    } catch (err) {
        throw err;
    }
});
 
// POST
app.post('/newop', async (req, res) => {
    let body = req.body;
    try {
        const result = await db.pool.query("insert into operations (username, math_op, result) values (?, ?, ?)", [body.username, body.operation, body.result]);
        res.send(result);
    } catch (err) {
        throw err;
    }
});


app.listen(PORT, () => console.log("API server, start"));

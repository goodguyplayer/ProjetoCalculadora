var mariadb = require('mariadb');
const config = require('./config')
 
var pool = mariadb.createPool(config.db);
 

module.exports = Object.freeze({
  pool: pool
});
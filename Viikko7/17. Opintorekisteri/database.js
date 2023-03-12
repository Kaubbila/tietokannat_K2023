const mysql = require('mysql');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'jaakko',
  password: 'jaakko',
  database: 'opinnot'
});
module.exports = connection;
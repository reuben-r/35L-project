const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "172.22.80.118",
    user: 'root',
    password: 'password',
    database: 'userDB'
});

module.exports = connection;
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "172.27.32.14",
    user: 'root',
    password: 'password',
    database: 'userDB'
});

module.exports = connection;
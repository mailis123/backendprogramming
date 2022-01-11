// Import Mysql \\
const mysql = require("mysql");

// Import dotenv \\
require("dotenv").config();

// Menggunakan Metode Destructing Object \\
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

// Update Configuration Database Dari File .env \\
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

// Koneksikan kedalam database \\
db.connect((err) => {
    if (err) {
        console.log('koneksi error ${err}');
        return;
    } else {
        console.log('koneksi berhasil');
        return;
    }
});

// Export db \\
module.exports = db;
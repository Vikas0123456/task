const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "ulis",
  password: "",
});
conn.connect((err) => {
  if (err) {
    return console.log("database not connected");
  }
  console.log("database  connected");
});
module.exports = { conn };

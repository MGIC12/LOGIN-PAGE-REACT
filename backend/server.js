const express = require("express");
const server = express();
const mysql = require("mysql");
const cors = require("cors");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "loginpage",
});

server.use(express.json());
server.use(cors());

server.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json("Error");
    if (data.length > 0) {
      return res.json("success");
    } else {
      return res.json("failure");
    }
  });
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});

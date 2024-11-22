const express = require("express");
const Quotes = require("inspirational-quotes");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "animalover",
});

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM customers WHERE user_username = ? AND user_password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.status(500).send({ success: false, message: "Server error" });
      } else if (result.length > 0) {
        res.send({ success: true, message: "Login successful" });
      } else {
        res.status(401).send({ success: false, message: "Invalid credentials" });
      }
    }
  );
});


app.get("/getUsername", (req, res) => {
  const userId = req.query.userId; // รับ userId จาก query parameter

  db.query(
    "SELECT user_username FROM customers WHERE user_id = ?",
    [userId],
    (err, result) => {
      if (err) {
        res.status(500).send({ success: false, message: "Server error" });
      } else if (result.length > 0) {
        res.send({ success: true, username: result[0].user_username });
      } else {
        res.status(404).send({ success: false, message: "User not found" });
      }
    }
  );
});

app.get("/customers", (req, res) => {
  db.query("SELECT * FROM customers", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO customers (user_email, user_username, user_password, user_phone) VALUES(?,?,?,?)",
    [email, username, password, phone],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.listen("3001", () => {
  console.log("Server is running on port 3001");
});

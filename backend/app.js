const express = require('express');
const Quotes = require('inspirational-quotes');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "animalover1"
})

app.get('/customers', (req, res) => {
    db.query("SELECT * FROM customers", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/register', (req, res) => {
    const username = req.body.username;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;

    db.query("INSERT INTO customers (user_email, user_username, user_password, user_phone) VALUES(?,?,?,?)", 
    [email, username, password, phone], 
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Values inserted");
        }
    })
})

app.listen('3001', () => {
    console.log('Server is running on port 3001');
})
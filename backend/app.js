const express = require("express");
const Quotes = require("inspirational-quotes");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer"); // ไลบรารีสำหรับจัดการไฟล์
const path = require("path"); // สำหรับจัดการ path ของไฟล์
const app = express();

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "animalover",
});

// กำหนดที่เก็บไฟล์
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // เก็บไฟล์ในโฟลเดอร์ 'uploads'
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // ตั้งชื่อไฟล์โดยเพิ่ม timestamp
  },
});

// การกำหนดตัวกรองไฟล์
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true); // อนุญาตเฉพาะไฟล์รูปภาพ
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});



app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

  jwt.verify(token, "1234", (err, user) => {
    if (err) return res.status(403).json({ success: false, message: "Forbidden" });

    req.userId = user.userId; // ดึง userId จาก payload ของ JWT
    next();
  });
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM customers WHERE user_username = ? AND user_password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.status(500).send({ success: false, message: "Server error" });
      } else if (result.length > 0) {
        const userId = result[0].user_id;
        const token = jwt.sign({ userId }, "1234", { expiresIn: "1h" });
        res.send({ success: true, token, message: "Login successful" });
      } else {
        res.status(401).send({ success: false, message: "Invalid credentials" });
      }
    }
  );
});


app.get("/getUsername", authenticateToken, (req, res) => {
  const userId = req.userId; // รับ userId จาก query parameter

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

app.post("/edit", authenticateToken, (req, res) => {
  const { firstname, lastname, phone, email } = req.body;
  const userId = req.userId;

  db.query(
    "UPDATE customers SET user_firstname = ?, user_lastname = ?, user_phone = ?, user_email = ? WHERE user_id = ?",
    [firstname, lastname, phone, email, userId],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ success: false, message: "Failed to update profile." });
      } else {
        res.status(200).send({ success: true, message: "Profile updated successfully!" });
      }
    }
  );
});

app.post("/register", (req, res) => {
  const { firstname, lastname, username, phone, email, password } = req.body;

  if (!firstname || !lastname || !username || !phone || !email || !password) {
    return res.status(400).send("กรุณากรอกข้อมูลให้ครบถ้วน");
  }

  db.query(
    "INSERT INTO customers (user_firstname, user_lastname, user_email, user_username, user_password, user_phone) VALUES(?,?,?,?,?,?)",
    [firstname, lastname, email, username, password, phone],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send("เกิดข้อผิดพลาด");
      } else {
        res.status(200).send("สมัครสมาชิกสำเร็จ");
      }
    }
  );
});

app.post("/addPet", authenticateToken, upload.single("imageFile"), (req, res) => {
  console.log("Request body:", req.body); // Debug ข้อมูลอื่นๆ

  const userId = req.userId;
  const { petName, petType, petSex, petWeight, birthdate, note, imageFile } = req.body;

  db.query(
    "INSERT INTO pet (user_id, pet_name, pet_breed, pet_gender, pet_weight, pet_birthdate, pet_description, pet_photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [userId, petName, petType, petSex, petWeight, birthdate, note, imageFile],
    (err, result) => {
      if (err) {
        console.error("Database error: ", err);
        return res.status(500).send("An error occurred while adding the pet");
      }
      res.status(200).send("Pet added successfully");
    }
  );
});



app.listen('3001', () => {
  console.log('Sever is running on port 3001');
})
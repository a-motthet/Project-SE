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

<<<<<<< HEAD
=======
const upload = multer({ storage: multer.memoryStorage() });
>>>>>>> 4dd25795be980e14dfa0ccf2b5825369996f1a10

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "animalover",
});

<<<<<<< HEAD
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



=======
>>>>>>> 4dd25795be980e14dfa0ccf2b5825369996f1a10
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

<<<<<<< HEAD
app.post("/register", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const username = req.body.username;
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO customers (user_firstname, user_lastname, user_email, user_username, user_password, user_phone) VALUES(?,?,?,?,?,?)",
    [firstname, lastname, email, username, password, phone],
=======
app.post("/edit", authenticateToken, (req, res) => {
  const { firstname, lastname, phone, email } = req.body;
  const userId = req.userId;

  db.query(
    "UPDATE customers SET user_firstname = ?, user_lastname = ?, user_phone = ?, user_email = ? WHERE user_id = ?",
    [firstname, lastname, phone, email, userId],
>>>>>>> 4dd25795be980e14dfa0ccf2b5825369996f1a10
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

<<<<<<< HEAD
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

=======
app.post("/register", (req, res) => {
  const { firstname, lastname, username, phone, email, password } = req.body;

  // ตรวจสอบว่าข้อมูลครบถ้วน
  if (!firstname || !lastname || !username || !phone || !email || !password) {
    return res.status(400).send("กรุณากรอกข้อมูลให้ครบถ้วน");
  }

  // ตรวจสอบว่าฐานข้อมูลมี schema ตรงกับโค้ด SQL
  const query =
    "INSERT INTO customers (user_firstname, user_lastname, user_email, user_username, user_password, user_phone) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [firstname, lastname, email, username, password, phone];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Database Error:", err);
      return res.status(500).send("เกิดข้อผิดพลาด");
    }
    res.status(200).send("สมัครสมาชิกสำเร็จ");
  });
});

app.post('/addPet', authenticateToken, upload.single('imageFile'), (req, res) => {
  console.log("Request body:", req.body);
  const userId = req.userId;
  const { petName, petType, petSex, petWeight, birthdate, note, imageFile } = req.body;

  if (!petName || !petType || !petSex || !petWeight || !birthdate || !imageFile) {
    return res.status(400).send("กรุณากรอกข้อมูลให้ครบถ้วน");
  }

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

app.get("/pets", authenticateToken, (req, res) => {
  const userId = req.userId;

  db.query("SELECT * FROM pet WHERE user_id = ?", userId, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching pets.");
    } else {
      res.send(result);
    }
  });
});

app.get("/pets/:id", authenticateToken, (req, res) => {
  const petId = req.params.id;

  db.query("SELECT * FROM pet WHERE pet_id = ?", petId, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching pets.");
    } else {
      res.send(result); //
    }
  });
});


>>>>>>> 4dd25795be980e14dfa0ccf2b5825369996f1a10
app.listen('3001', () => {
  console.log('Sever is running on port 3001');
})
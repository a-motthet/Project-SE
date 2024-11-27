const express = require("express");
const Quotes = require("inspirational-quotes");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer"); // ไลบรารีสำหรับจัดการไฟล์
const path = require("path"); // สำหรับจัดการ path ของไฟล์
const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "animalover",
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
    "SELECT user_firstname FROM customers WHERE user_id = ?",
    [userId],
    (err, result) => {
      if (err) {
        res.status(500).send({ success: false, message: "Server error" });
      } else if (result.length > 0) {
        res.send({ success: true, username: result[0].user_firstname });
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

app.post("/forget", (req, res) => {
  const { firstname, lastname, phone, email, password } = req.body;

  // ตรวจสอบว่าข้อมูลครบถ้วน
  if (!firstname || !lastname || !phone || !email || !password) {
    return res.status(400).send("กรุณากรอกข้อมูลให้ครบถ้วน");
  }

  // ตรวจสอบว่าฐานข้อมูลมี schema ตรงกับโค้ด SQL
  const query = `
    UPDATE customers
    SET user_password = ?
    WHERE user_firstname = ? AND user_lastname = ? AND user_email = ? AND user_phone = ?
  `;
  const values = [password, firstname, lastname, email, phone];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Database Error:", err);
      return res.status(500).send("เกิดข้อผิดพลาด");
    }
    res.status(200).send("สมัครสมาชิกสำเร็จ");
  });
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
      res.send(result); 
      console.log(result);
    }
  });
});

app.post('/addPet', authenticateToken, upload.single('imageFile'), (req, res) => {
  console.log("Request body:", req.body);
  const userId = req.userId;
  const { petName, petType, petSex, petWeight, birthdate, note, imageFile,petDisease } = req.body;

  if (!petName || !petType || !petSex || !petWeight || !birthdate || !imageFile) {
    return res.status(400).send("กรุณากรอกข้อมูลให้ครบถ้วน");
  }

  db.query(
    "INSERT INTO pet (user_id, pet_name, pet_breed, pet_gender, pet_weight, pet_birthdate, pet_description, pet_photo, pet_disease) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [userId, petName, petType, petSex, petWeight, birthdate, note, imageFile, petDisease],
    (err, result) => {
      if (err) {
        console.error("Database error: ", err);
        return res.status(500).send("An error occurred while adding the pet");
      }
      res.status(200).send("Pet added successfully");
    }
  );
});

app.post('/delpet/:id', authenticateToken, async (req, res) => {
  const petId = req.params.id;

  try {
    console.log(`Deleting pet with ID: ${petId}`);
    await db.query("DELETE FROM vaccine_record WHERE pet_id = ?", [petId])
    await db.query("DELETE FROM health_record WHERE pet_id = ?", [petId])
    await db.query("DELETE FROM pet WHERE pet_id = ?;", [petId], (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).send("Internal server error.");
      }
      if (result.affectedRows === 0) {
        return res.status(404).send("Pet not found.");
      }
      res.status(200).send("Pet deleted successfully.");
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).send("Internal server error.");
  }
});


app.post('/pets/:id', authenticateToken , upload.single('imageFile') , async (req, res) => {
  
  const petId = req.params.id;
  const { petName, petType, petSex, petWeight, birthdate, note ,profilePic  } = req.body;

  try {
    // // ตรวจสอบว่ามีสัตว์เลี้ยงนี้อยู่ในระบบหรือไม่
    // const [pet] = await db.query('SELECT * FROM pet WHERE pet_id = ?', [petId]);
    // console.log("Query Result:", pet);
    // if (!pet) {
    //   return res.status(404).json({ message: 'ไม่พบข้อมูลสัตว์เลี้ยง' });
    // }
    // อัปเดตข้อมูล
    
    await db.query(
      'UPDATE pet SET pet_name = ?, pet_breed = ?, pet_gender = ?, pet_weight = ?, pet_birthdate = ?, pet_description = ?, pet_photo = ? WHERE pet_id = ?',
      [petName, petType, petSex, petWeight, birthdate, note,profilePic, petId]
    );

    res.status(200).send({ message: 'แก้ไขข้อมูลสัตว์เลี้ยงสำเร็จ' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'เกิดข้อผิดพลาด' });
  }
});

app.get("/vaccine_Home/:id", authenticateToken, (req, res) => {
  const petId = req.params.id;

  db.query("SELECT * FROM vaccine_record WHERE pet_id = ? ORDER BY vaccine_date DESC LIMIT 1", petId, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching vaccine.");
    } else {
      res.send(result);
      console.log(result)
    }
  });
});

app.get("/vaccines/:id", authenticateToken, (req, res) => {
  const petId = req.params.id;

  db.query("SELECT * FROM vaccine_record WHERE pet_id = ? ORDER BY vaccine_date", petId, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("เกิดข้อผิดพลาด");
    } else {
      res.send(result); 
      console.log(result);
    }
  });
});

app.post('/addVaccine/:id', authenticateToken, (req, res) => {
  
  const petId = req.params.id;
  const { name, date, exp } = req.body;

  if (!name || !date || !exp) {
    return res.status(400).send("กรุณากรอกข้อมูลให้ครบถ้วน");
  }

  db.query(
    "INSERT INTO vaccine_record (pet_id, vaccine_name, vaccine_date, vaccine_exp) VALUES (?, ?, ?, ?)",
    [petId, name, date, exp],
    (err, result) => {
      if (err) {
        console.error("Database error: ", err);
        return res.status(500).send("An error occurred while adding the vaccine");
      }
      res.status(200).send("Vaccine added successfully");
    }
  );
});

app.post('/addHistory/:id', authenticateToken, (req, res) => {
 
  const petId = req.params.id;
  const { date, note } = req.body;

  if (!date) {
    return res.status(400).send("กรุณากรอกข้อมูลให้ครบถ้วน");
  }

  db.query(
    "INSERT INTO health_record (pet_id, health_date, health_description) VALUES (?, ?, ?)",
    [petId, date, note],
    (err, result) => {
      if (err) {
        console.error("Database error: ", err);
        return res.status(500).send("An error occurred while adding the history");
      }
      res.status(200).send("History added successfully");
    }
  );
});

app.get("/history_Home/:id", authenticateToken, (req, res) => {
  const petId = req.params.id;

  db.query("SELECT * FROM health_record WHERE pet_id = ? ORDER BY health_date DESC LIMIT 1", petId, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching history.");
    } else {
      res.send(result);
      console.log(result)
    }
  });
});

app.get('/guide', authenticateToken, (req, res) => {
  const { breed, gender, weight, age } = req.query;

  // Query ฐานข้อมูลโดยใช้ Parameter
  const query = `
    SELECT *
    FROM nutrition_guide
    WHERE ? = guide_breed AND ? = guide_gender AND ? >= guide_startweight AND ? < guide_endweight AND ? >= guide_startage	AND ? < guide_endage`;
  
  db.query(query, [breed, gender, weight, weight, age, age], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});


app.listen('3001', () => {
  console.log('Sever is running on port 3001');
})
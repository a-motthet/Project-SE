import React, { useState, useEffect } from "react";
import mypic from "../images/64x64.png";
import Axios from "axios";
import { useParams } from "react-router-dom";

const NotificationPopup = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 font-sans">
    <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center">
      <h2 className="text-color-b text-lg font-bold mb-2">📢 แจ้งเตือน</h2>
      <p className="text-color-b mb-4">เพิ่มสัตว์เลี้ยงของท่านเสร็จสิ้น</p>
      <button
        onClick={() => window.location.reload()}
        className="bg-color-b text-white px-4 py-2 rounded-md"
      >
        ยืนยัน
      </button>
    </div>
  </div>
);

const NotificationPopup_error = ({ type, message, onClose }) => {
  const isError = type === "error";
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25">
      <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center">
        <h2
          className={`text-lg mb-2 ${
            isError ? "text-red-400" : "text-green-400"
          }`}
        >
          {isError ? "แจ้งเตือนข้อผิดพลาด" : "แจ้งเตือนความสำเร็จ"}
        </h2>
        <p className={`mb-4 ${isError ? "text-red-400" : "text-green-400"}`}>
          {message}
        </p>
        <button
          onClick={onClose}
          className={`px-4 py-2 rounded-large text-white ${
            isError
              ? "bg-red-400 hover:bg-red-200"
              : "bg-green-400 hover:bg-green-200"
          }`}
        >
          ยืนยัน
        </button>
      </div>
    </div>
  );
};

const Addpet = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petSex, setPetSex] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petGene, setPetGene] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const [birthdate, setBirthdate] = useState("xxxx-xx-xx");
  const [note, setNote] = useState("");
  const [editPetType, setEditPetType] = useState(petType);
  const [showWeightInput, setShowWeightInput] = useState(false);
  const [birthdateOption, setBirthdateOption] = useState("exact");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [ageYears, setAgeYears] = useState("");
  const [ageMonths, setAgeMonths] = useState("");
  const [profilePic, setProfilePic] = useState(mypic);
  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [dbbirthdate, setDbbirthdate] = useState("");
  const [petDisease, setPetDisease] = useState("");
  const { id } = useParams();

  const addPet = () => {
    const token = localStorage.getItem("token"); // ดึง Token จาก Local Storage

    const formData = new FormData(); // ใช้ FormData เพื่อจัดการข้อมูลที่มีไฟล์
    formData.append("petName", petName);
    formData.append("petType", editPetType);
    formData.append("petSex", petSex);
    formData.append("prtGene", petGene);
    formData.append("petWeight", petWeight);
    formData.append("birthdate", dbbirthdate);
    formData.append("note", note);
    formData.append("imageFile", profilePic); // profilePic ตอนนี้คือ Base64
    formData.append("petDisease", petDisease);

    if (
      !petName ||
      !editPetType ||
      !petSex ||
      !petGene ||
      !petWeight ||
      !birthdate ||
      !profilePic
    ) {
      setPopupMessage("กรุณากรอกข้อมูลให้ครบถ้วน");
      setIsErrorPopupVisible(true); // แสดง Popup ความผิดพลาด
      return;
    }

    Axios.post(`http://localhost:3001/addPet`, formData, {
      headers: {
        Authorization: `Bearer ${token}`, // แนบ Token ใน Header
        "Content-Type": "multipart/form-data", // กำหนดประเภทข้อมูล
      },
    })
      .then(() => {
        console.log("เพิ่มสัตว์เลี้ยงสำเร็จ");
        setShowNotification(true); // แสดงการแจ้งเตือนเมื่อเพิ่มสำเร็จ
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาด: ", error);
        setPopupMessage(
          "ไม่สามารถเพิ่มสัตว์เลี้ยงได้ กรุณาตรวจสอบข้อมูลอีกครั้ง"
        );
        setIsErrorPopupVisible(true); // แสดง Popup ความผิดพลาด
      });
  };

  const calculateAge = (birthdate) => {
    const birth = new Date(birthdate);
    const today = new Date();

    let ageYears = today.getFullYear() - birth.getFullYear();
    let ageMonths = today.getMonth() - birth.getMonth();

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 1;
    }

    return { ageYears, ageMonths };
  };

  const calculateApproximateBirthdate = (ageYears, ageMonths) => {
    const today = new Date();
    let birthdate = new Date(today);

    // ลบปีและเดือนจากวันที่ปัจจุบัน
    birthdate.setFullYear(birthdate.getFullYear() - ageYears);
    birthdate.setMonth(birthdate.getMonth() - ageMonths);

    // ตรวจสอบความถูกต้องของวันที่
    if (birthdate.getDate() !== today.getDate()) {
      birthdate.setDate(0); // ปรับวันที่เป็นวันสุดท้ายของเดือนก่อนหน้า
    }

    // แปลงวันที่เป็นรูปแบบ YYYY-MM-DD
    return birthdate.toISOString().split("T")[0];
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result); // `reader.result` คือ Base64
      reader.readAsDataURL(file); // อ่านไฟล์และแปลงเป็น Base64
    }
  };

  useEffect(() => {
    if (
      birthdateOption === "exact" &&
      selectedDay &&
      selectedMonth &&
      selectedYear
    ) {
      // สร้างวันที่จาก selectedYear, selectedMonth, selectedDay
      // หักลบ 1 จาก selectedMonth เนื่องจาก JavaScript ใช้เดือนที่เริ่มต้นจาก 0
      const formattedBirthdate = new Date(
        selectedYear,
        selectedMonth - 1,
        selectedDay
      );

      // ตั้งเวลาเป็น 00:00:00 ของวันใน UTC เพื่อหลีกเลี่ยงปัญหาจาก Timezone
      formattedBirthdate.setHours(12, 0, 0, 0);

      // แปลงวันที่เพื่อแสดงในรูปแบบ th-TH
      setBirthdate(formattedBirthdate.toLocaleDateString("th-TH"));

      // แปลงวันที่เพื่อเก็บในรูปแบบ YYYY-MM-DD (ในโซนเวลาของคุณ)
      const dbDate = formattedBirthdate.toISOString().split("T")[0];
      setDbbirthdate(dbDate);

      // คำนวณอายุ
      const { ageYears, ageMonths } = calculateAge(formattedBirthdate);
      setPetAge(`${ageYears} ปี ${ageMonths} เดือน`);
    }
  }, [selectedDay, selectedMonth, selectedYear, birthdateOption]);

  useEffect(() => {
    if (birthdateOption === "approximate" && ageYears && ageMonths) {
      const approximateDate = calculateApproximateBirthdate(
        parseInt(ageYears, 10),
        parseInt(ageMonths, 10)
      );
      setDbbirthdate(approximateDate); // เก็บวันเกิดในฟิลด์ dbbirthdate
    }
  }, [ageYears, ageMonths, birthdateOption]);

  return (
    <div className="bg-color-bg  flex flex-col items-center font-sans">
      {isErrorPopupVisible && (
        <NotificationPopup_error
          type="error"
          message={popupMessage}
          onClose={() => setIsErrorPopupVisible(false)}
        />
      )}
      <div className="container mx-auto p-8 flex flex-col items-center">
        <div className="p-6 bg-white rounded-lg shadow-xl flex flex-col lg:flex-row items-center w-full sm:w-3/5 lg:w-3/5">
          <div className="lg:w-2/3 w-full lg:pr-8">
            <h2 className="text-color-b text-xl font-bold mb-4 font-sans">
              เพิ่มสัตว์เลี้ยงของท่าน
            </h2>
            <div className="w-full mb-4">
              <label className="block text-color-b mb-1 font-sans">
                ชื่อสัตว์เลี้ยง:
              </label>
              <input
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-md"
              />
            </div>
            <div className="w-full mb-4">
              <label className="block text-color-b mb-1 font-sans">
                สัตว์เลี้ยง:
              </label>
              <div className="flex space-x-6">
                {["หมา", "แมว"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setEditPetType(type)}
                    className={`px-4 py-2 rounded-md ${
                      editPetType === type
                        ? "bg-color-b text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full mb-4">
              <label className="block text-color-b mb-1 font-sans">
                สายพันธุ์สัตว์เลี้ยง:
              </label>
              <select
                value={petGene}
                onChange={(e) => setPetGene(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-md"
              >
                <option value="">เลือกสายพันธุ์</option>
                {editPetType === "หมา" &&
                  [
                    "ไทยแท้",
                    "ไทยหลังอาน",
                    "ไซบีเรียน ฮัสกี้",
                    "ไชนีส เครสต์ แฮร์เลส",
                    "โอลด์อิงลิชชีปด็อก",
                    "โทสะอินุ",
                    "โดโกอาร์เจนติโน",
                    "โดเบอร์แมน",
                    "โคเรียนชินโด",
                    "โกลเด้น รีทรีฟเวอร์",
                    "แอฟเฟนพินเชอร์",
                    "แจ็ครัสเซลล์เทอร์เรีย",
                    "เวสตี้ เทอร์เรียร์",
                    "เยอรมันเชฟเฟิร์ด",
                    "เยอรมัน สปิตซ์",
                    "เฟรนช์ มาสทิฟ",
                    "เฟรนช์ บูลด็อก",
                    "เบอร์นีส เมาน์เทนด็อก",
                    "เซ็นทรัล เอเชีย เชพเพิร์ด",
                    "เซาท์ แอฟริกัน มาสทิฟฟ์ (บัวโบว์)",
                    "เซนต์เบอร์นาร์ด",
                    "เชา เชา",
                    "เชทแลนด์ ชีพด็อก",
                    "เชดแลนด์ชิพด๊อก",
                    "เจแปนนิส สปิตซ์",
                    "เจแปนนิส ชิน",
                    "เคอร์รี บลู เทอร์เรีย",
                    "เครนเทอร์เรีย",
                    "เคน คอร์โซ",
                    "เกรย์ฮาวด์",
                    "เกรทไพรีนีส",
                    "เกรทเทอร์ สวิสส์ เมาน์เทนด๊อก",
                    "เกรทเดน",
                    "อเมริกันบูลล์ด็อก",
                    "อเมริกันบูลลี่",
                    "อเมริกัน พิทบูลเทอร์เรีย",
                    "อเมริกัน ค็อกเกอร์ สแปเนียล",
                    "อิตาเลียน เกรย์ฮาวด์",
                    "อิงลิช บูลล์ด็อก",
                    "อาคิตะ อินุ",
                    "อัฟกัน ฮาวนด์",
                    "อลาสกัน มาลามิวท์",
                    "สแตฟเฟอร์ดไชร์ บูล เทอร์เรียร์",
                    "วิปเพ็ท",
                    "ลาบราดอร์รีทรีฟเวอร์",
                    "ร็อตไวเลอร์",
                    "ระบุสายพันธุ์ไม่ได้",
                    "ยอร์คเชียร์เทอร์เรีย",
                    "มิเนเจอร์พินช์เชอร์",
                    "มาเมะชิบะ",
                    "มอลทีส",
                    "มอลทิพู",
                    "ฟิล่า บราซิลเลียโร่",
                    "พ็อมโบรค เวล์ช คอร์กี้",
                    "พุดเดิ้ล",
                    "พิทบูล เรดโนส",
                    "พิทบูล เทอร์เรีย",
                    "พิทบูล มาสทิฟ",
                    "ปาปิยอง",
                    "ปั๊ก",
                    "ปักกิ่ง",
                    "ปอมเมอเรเนียน",
                    "บ็อกเซอร์",
                    "บูลล์เทอร์เรีย",
                    "บูลล์ด็อก",
                    "บูลมาสทิฟฟ์",
                    "บีเว่อร์ เทอร์เรีย",
                    "บีเวอร์ยอร์คเชียร์เทอร์เรีย",
                    "บีเกิล",
                    "บิชอง ฟริเซ่",
                    "บาเซนจิ",
                    "บาสเซ็ต ฮาวด์",
                    "บางแก้ว",
                    "บอสตัน เทอร์เรียร์",
                    "บอร์ซอย",
                    "บลัดฮาวด์",
                    "บริตทานีสแปเนียล",
                    "ทิเบตัน มาสทิฟฟ์",
                    "ดัลเมเชียน",
                    "ดัชชุน",
                    "ซาลูกิ",
                    "ซามอยด์",
                    "ชิสุ",
                    "ชิวาวา",
                    "ชิบะ อินุ",
                    "ชาเป่ย",
                    "คีชอน",
                    "คาวาเลียร์ คิง ชาลส์ สแปเนียล",
                    "คานารี ด็อก",
                    "คอเคเซียน เชพเพิร์ด",
                    "Wire Fox Terrier",
                    "West Highland White Terrier",
                    "Welsh Terrier",
                    "Welsh Corgi Pembroke",
                    "Weimaraner",
                    "Teacup poodle",
                    "standard poodle",
                    "Spitz",
                    "Siberian Wooly coat",
                    "siberian standard",
                    "Sheepadoodle",
                    "Scottish Terrier",
                    "Schnauzer",
                    "Saarloos Wolfhound",
                    "Rough collie",
                    "Rhodesian Ridgeback",
                    "Puli Hungarian Sheepdog",
                    "Presa Canario",
                    "Poodle Toy",
                    "Pit Bull Terrier",
                    "Pembroke Welsh Corgi",
                    "Norwich Terrier",
                    "Norfolk Terrier",
                    "Miniature smooth fox terrier",
                    "Miniature Schnauzer",
                    "Miniature Dachshund",
                    "Miniature Bull Terrier",
                    "Miniature American Shepherd",
                    "Micro Bulldog",
                    "Maltipoo",
                    "Labradoodle",
                    "italian mastiff",
                    "Irish Setter",
                    "Goldendoodle",
                    "Exotic Bully",
                    "English Cocker Spaniel",
                    "English Bulldog",
                    "Dogue Brasileiro",
                    "czechoslovakian wolfdog",
                    "Coton de tulear",
                    "Cavalier King Charles Spaniel",
                    "Caucasian Shepherd",
                    "Cardigan Welsh Corgi",
                    "Cardigan Corgi",
                    "Brussels Griffon",
                    "Boston Terrier",
                    "Border Collie",
                    "Bichon Havanais",
                    "Bichon Frise",
                    "Belgian Malinois",
                    "Australian Shepherd",
                    "Australian Cattle Dog",
                    "American Bandogge / Bandogge Mastiff",
                    "American Akita",
                    "ออสเตรเลียนเคลปี",
                    "ไม่ระบุสายพันธุ์",
                  ].map(
                    (gene, index) => (
                      <option key={index} value={gene}>
                        {gene}
                      </option>
                    )
                  )}
                {editPetType === "แมว" &&
                  [
                    "เปอร์เซีย",
                    "สก็อตติชโฟลด์",
                    "อเมริกันชอร์ตแฮร์",
                    "สฟิงซ์",
                    "เมนคูน",
                    "วิเชียรมาศ",
                    "เบงกอล",
                    "บริติชชอร์ตแฮร์",
                    "อะบิสซิเนียน",
                    "เร็กซ์ (Devon Rex)",
                    "เร็กซ์ (Cornish Rex)",
                    "สโนว์ชู",
                    "นอร์วีเจียนฟอเรสต์",
                    "ริกดอลล์",
                    "เอ็กโซติกชอร์ตแฮร์",
                    "โอเรียนทัลชอร์ตแฮร์",
                    "ชาร์เทรอซ์",
                    "เบอร์มีส",
                    "ไทย",
                    "ออซีแคท",
                    "บอมเบย์",
                    "ซาวันนาห์",
                    "แมนซ์",
                    "คูริเลียนบ็อบเทล",
                    "รัสเซียนบลู",
                    "แร็กามัฟฟิน",
                    "ลาเปิร์ม",
                    "แบลลิเนส",
                    "ฮาวานา บราวน์",
                    "โทนกินีส",
                    "โซโกเก",
                    "ทอยเกอร์",
                    "เซเรนเกติ",
                    "เคาเชียนบ็อบเทล",
                    "ซิงกาปูรา",
                    "เจแปนนีสบ็อบเทล",
                    "ไลโคอิ",
                    "พิกซีบ็อบ",
                    "มังก์กี้ฟอร์เรสต์",
                    "เดสเซอร์ตลิงซ์",
                    "บูร์แมส",
                    "แคลิฟอร์เนีย สเปียล",
                    "คอร์เนียร์ส",
                  ]
                  .map(
                    (gene, index) => (
                      <option key={index} value={gene}>
                        {gene}
                      </option>
                    )
                  )}
              </select>
            </div>
            <div class="input-note text-red-500">*ถ้าสายพันธุ์ของคุณไม่มีในรายการ กรุณาติดต่อเรา</div>
            <div className="w-full mb-4">
              <label className="block text-color-b mb-1 font-sans">เพศ:</label>
              <div className="flex space-x-6">
                {["ผู้", "เมีย"].map((sex) => (
                  <button
                    key={sex}
                    onClick={() => setPetSex(sex)}
                    className={`px-4 py-2 rounded-md ${
                      petSex === sex
                        ? "bg-color-b text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {sex}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full mb-4">
              <label className="block text-color-b mb-1 font-sans">
                น้ำหนักของสัตว์เลี้ยง (กิโลกรัม):
              </label>
              <input
                type="number"
                placeholder="กรอกน้ำหนัก"
                min="0"
                value={petWeight}
                onChange={(e) => setPetWeight(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-md"
              />
            </div>
            <div className="w-full mb-4">
              <label className="block text-color-b mb-1 font-sans">
                โรคประจำตัวของสัตว์เลี้ยงของท่าน:
              </label>
              <input
                type="text"
                placeholder="โปรดโรคประจำตัวของสัตว์เลี้ยง"
                name="pet_disease"
                onChange={(e) => setPetDisease(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-md"
              />
            </div>
            <div className="w-full mb-4">
              <p className="block text-color-b mb-1 font-sans">
                หากคุณไม่ทราบวันเดือนปีเกิด กรุณาเลือกอายุโดยประมาณ ในช่อง
                'อายุโดยประมาณ'
              </p>
            </div>

            <div className="w-full mb-4">
              <label className="block text-color-b mb-1 font-sans">
                วันเกิดของสัตว์เลี้ยง:
              </label>
              <div className="mb-2">
                <label className="mr-4 text-color-b font-sans">
                  <input
                    type="radio"
                    name="birthdateOption"
                    value="approximate"
                    checked={birthdateOption === "approximate"}
                    onChange={() => setBirthdateOption("approximate")}
                    className="mr-2 "
                  />
                  อายุโดยประมาณ
                </label>
                <label className="text-color-b font-sans">
                  <input
                    type="radio"
                    name="birthdateOption"
                    value="exact"
                    checked={birthdateOption === "exact"}
                    onChange={() => setBirthdateOption("exact")}
                    className="mr-2"
                  />
                  อายุที่แน่ชัด
                </label>
              </div>

              {birthdateOption === "exact" ? (
                <div className="flex space-x-2">
                  {/* Dropdown สำหรับวัน */}
                  <select
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                    className="w-1/3 p-3 border-2 border-gray-300 rounded-md"
                  >
                    <option value="">วัน</option>
                    {Array.from({ length: 31 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>

                  {/* Dropdown สำหรับเดือน */}
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-1/3 p-3 border-2 border-gray-300 rounded-md"
                  >
                    <option value="">เดือน</option>
                    {[
                      "มกราคม",
                      "กุมภาพันธ์",
                      "มีนาคม",
                      "เมษายน",
                      "พฤษภาคม",
                      "มิถุนายน",
                      "กรกฎาคม",
                      "สิงหาคม",
                      "กันยายน",
                      "ตุลาคม",
                      "พฤศจิกายน",
                      "ธันวาคม",
                    ].map((month, index) => (
                      <option key={index + 1} value={index + 1}>
                        {month}
                      </option>
                    ))}
                  </select>

                  {/* Dropdown สำหรับปี */}
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-1/3 p-3 border-2 border-gray-300 rounded-md"
                  >
                    <option value="">ปี</option>
                    {Array.from({ length: 50 }, (_, i) => (
                      <option key={i} value={new Date().getFullYear() - i}>
                        {new Date().getFullYear() - i}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="ปี"
                    value={ageYears}
                    onChange={(e) => setAgeYears(e.target.value)}
                    className="w-1/3 p-3 border-2 border-gray-300 rounded-md"
                    min="0"
                  />
                  <input
                    type="number"
                    placeholder="เดือน"
                    value={ageMonths}
                    onChange={(e) => setAgeMonths(e.target.value)}
                    className="w-1/3 p-3 border-2 border-gray-300 rounded-md"
                    min="0"
                    max="11"
                  />
                </div>
              )}
            </div>
            <div className="w-full mb-4">
              <label className="block text-color-b mb-1 font-sans">
                หมายเหตุ:
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-md"
              />
            </div>
            <button
              onClick={addPet}
              className="w-full bg-color-b text-white p-3 rounded-md mt-4 px-12 font-sans"
            >
              เพิ่มสัตว์เลี้ยงของท่าน
            </button>
          </div>

          <div className="lg:w-1/3 w-full lg:pr-8 flex flex-col items-center lg:order-last order-first">
            <div className="relative w-64 h-64 rounded-full flex items-center justify-center mb-10">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full rounded-full object-cover items-center justify-center shadow-md"
              />
              <label className="absolute bottom-0 right-0 bg-white p-2 px-3 rounded-full shadow-md cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 flex items-center justify-center text-color-b font-semibold text-sm">
                Upload
                <input
                  type="file"
                  className="hidden"
                  name="imageFile"
                  onChange={handleProfilePicChange}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      {showNotification && (
        <NotificationPopup onClose={() => setShowNotification(false)} />
      )}
    </div>
  );
};

export default Addpet;

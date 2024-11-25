import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();

  // State สำหรับจัดการข้อมูล
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // ฟังก์ชันจัดการการเปลี่ยนแปลงใน input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ฟังก์ชันสำหรับแก้ไขข้อมูล
  const handleEdit = (e) => {
    e.preventDefault();

    // ตรวจสอบว่ารหัสผ่านตรงกัน
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    Axios.post(
      "http://localhost:3001/edit",
      {
        firstname: formData.firstname,
        lastname: formData.lastname,
        phone: formData.phone,
        email: formData.email,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        console.log(res.data.message);
        setIsPopupVisible(true);
      })
      .catch((err) => {
        console.error(err.response.data.message);
        alert("Failed to update profile.");
      });
  };

  const NotificationPopup = ({ onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 font-sans">
      <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center">
        <h2 className="text-color-b text-lg font-bold mb-2">แจ้งเตือน</h2>
<<<<<<< HEAD
        <p className="text-color-b mb-4">เพิ่มข้อมูลสำเร็จ</p>
=======
        <p className="text-color-b mb-4">แก้ไขข้อมูลสำเร็จ</p>
>>>>>>> 4dd25795be980e14dfa0ccf2b5825369996f1a10
        <button
          onClick={onClose}
          className="bg-color-b text-white px-4 py-2 rounded-md hover:bg-color-holdber"
        >
          ยืนยัน
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100 font-sans">
      <div className="bg-white shadow-lg rounded-lg w-[90%] max-w-[600px] p-8">
<<<<<<< HEAD
        {/* Title */}
=======
>>>>>>> 4dd25795be980e14dfa0ccf2b5825369996f1a10
        <h1 className="text-center text-xl font-bold text-color-b mb-8">
          จัดการโปรไฟล์
        </h1>
        <form className="space-y-6" onSubmit={handleEdit}>
          <div>
            <label
              htmlFor="firstname"
              className="block text-color-b font-medium"
            >
              ชื่อ
            </label>
            <input
              name="firstname"
              type="text"
<<<<<<< HEAD
              placeholder="Fullname"
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-color-b focus:border-transparent"
=======
              value={formData.firstname}
              onChange={handleInputChange}
              placeholder="Firstname"
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100"
>>>>>>> 4dd25795be980e14dfa0ccf2b5825369996f1a10
              required
            />
          </div>
          <div>
<<<<<<< HEAD
            <label htmlFor="phone" className="block text-color-b font-medium">
              เบอร์โทรศัพท์
            </label>
            <div className="relative">
              <input
                id="phone"
                type="text"
                placeholder="Phone"
                className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-color-b focus:border-transparent"
                required
              />
            </div>
=======
            <label
              htmlFor="lastname"
              className="block text-color-b font-medium"
            >
              นามสกุล
            </label>
            <input
              name="lastname"
              type="text"
              value={formData.lastname}
              onChange={handleInputChange}
              placeholder="Lastname"
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-color-b font-medium">
              เบอร์โทรศัพท์
            </label>
            <input
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100"
              required
            />
>>>>>>> 4dd25795be980e14dfa0ccf2b5825369996f1a10
          </div>
          <div>
            <label htmlFor="email" className="block text-color-b font-medium">
              อีเมล
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
<<<<<<< HEAD
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-color-b focus:border-transparent"
=======
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100"
>>>>>>> 4dd25795be980e14dfa0ccf2b5825369996f1a10
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-color-b font-medium"
            >
              รหัสผ่าน
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
<<<<<<< HEAD
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-color-b focus:border-transparent"
              required
=======
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100"
>>>>>>> 4dd25795be980e14dfa0ccf2b5825369996f1a10
            />
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
<<<<<<< HEAD
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-color-b focus:border-transparent"
              required
=======
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100"
>>>>>>> 4dd25795be980e14dfa0ccf2b5825369996f1a10
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
<<<<<<< HEAD
              className="bg-color-b text-white font-medium px-6 py-2 rounded-large hover:bg-color-holdber flex items-center justify-center space-x-2"
=======
              className="bg-color-b text-white font-medium px-6 py-2 rounded-large hover:bg-color-holdber"
>>>>>>> 4dd25795be980e14dfa0ccf2b5825369996f1a10
            >
              แก้ไข
            </button>
          </div>
        </form>
      </div>
      {isPopupVisible && (
        <NotificationPopup onClose={() => setIsPopupVisible(false)} />
      )}
    </div>
  );
}

export default Edit;

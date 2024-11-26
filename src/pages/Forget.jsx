import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Forget() {
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

    // Axios.post(
    //   "http://localhost:3001/edit",
    //   {
    //     firstname: formData.firstname,
    //     lastname: formData.lastname,
    //     phone: formData.phone,
    //     email: formData.email,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   }
    // )
    //   .then((res) => {
    //     console.log(res.data.message);
    //     setIsPopupVisible(true);
    //   })
    //   .catch((err) => {
    //     console.error(err.response.data.message);
    //     alert("Failed to update profile.");
    //   });
  };

  const NotificationPopup = ({ onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 font-sans">
      <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center">
        <h2 className="text-color-b text-lg font-bold mb-2">แจ้งเตือน</h2>
        <p className="text-color-b mb-4">แก้ไขข้อมูลสำเร็จ</p>
        <button
          onClick={onClose}
          className="bg-color-b text-white px-4 py-2 rounded-md hover:bg-color-holdber"
        >
          ยืนยัน
        </button>
      </div>
    </div>
  );
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100 font-sans">
      <div className="bg-white shadow-lg rounded-lg w-[90%] max-w-[600px] p-8">
        <h1 className="text-center text-xl font-bold text-color-b mb-8">
          จัดการรหัสผ่าน
        </h1>
        <form className="space-y-6" onSubmit={handleEdit}>
          <div>
            <label
              htmlFor="firstname"
              className="block text-color-b font-medium"
            >
              ชื่อจริง
            </label>
            <input
              name="firstname"
              type="text"
              // value={formData.firstname}
              onChange={handleInputChange}
              placeholder="Firstname"
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100"
              required
            />
          </div>

          <div>
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
            <label htmlFor="tel" className="block text-color-b font-medium">
              เบอร์โทรศัพท์
            </label>
            <input
              name="tel"
              type="tel"
              onChange={handleInputChange}
              placeholder="Enter Your Phone"
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100"
              required
            />
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
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-color-b font-medium"
            >
              รหัสผ่านใหม่ที่ต้องการ
            </label>
            <input
              name="password"
              type="password"
              // value={formData.password}
              // onChange={handleInputChange}
              placeholder="New Password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$"
              title="Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)."
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100"
            />
            <input
              name="confirmPassword"
              type="password"
              // value={formData.confirmPassword}
              // onChange={handleInputChange}
              placeholder="Confirm New Password"
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-color-b text-white font-medium px-6 py-2 rounded-large hover:bg-color-holdber"
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

export default Forget;

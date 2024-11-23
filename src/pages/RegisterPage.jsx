import React from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";

import {
  IoMailOutline,
  IoCallOutline,
  IoPersonOutline,
  IoLockClosedOutline,
} from "react-icons/io5";

function RegisterPage() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);
  const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const NotificationPopup = ({ type, message, onClose }) => {
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

  const addCustomer = () => {
    if (
      !firstname ||
      !lastname ||
      !username ||
      !phone ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setPopupMessage("กรุณากรอกข้อมูลให้ครบถ้วน");
      setIsErrorPopupVisible(true); // แสดง Popup ความผิดพลาด
      return;
    }

    if (password !== confirmPassword) {
      setPopupMessage("รหัสผ่านไม่ตรงกัน");
      setIsErrorPopupVisible(true);
      return;
    }
    
    Axios.post("http://localhost:3001/register", {
      firstname,
      lastname,
      username,
      phone,
      email,
      password,
    })
      .then((response) => {
        if (response.status === 200) {
          setPopupMessage(response.data); // ใช้ข้อความที่มาจาก Backend
          setIsSuccessPopupVisible(true);
        } else {
          setPopupMessage("เกิดข้อผิดพลาดในการสมัครสมาชิก");
          setIsErrorPopupVisible(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error.response?.data || error.message);
        setPopupMessage(error.response?.data || "เกิดข้อผิดพลาด");
        setIsErrorPopupVisible(true);
      });
  };

  const handleLogin = () => {
    navigate("/"); // Navigate to the login page
  };

  return (
    <div className="bg-color-bg flex h-screen justify-center items-center">
      {isErrorPopupVisible && (
        <NotificationPopup
          type="error"
          message={popupMessage}
          onClose={() => setIsErrorPopupVisible(false)}
        />
      )}
      {isSuccessPopupVisible && (
        <NotificationPopup
          type="success"
          message={popupMessage}
          onClose={() => {
            setIsSuccessPopupVisible(false);
            navigate("/"); // ย้ายหน้าไปยัง "/" หลังปิด Popup
          }}
        />
      )}
      <div className="w-1/3 bg-gradient-to-t from-color-b to-color-md h-4/6 rounded-l-large"></div>

      <div className="w-1/3 bg-white flex items-center justify-center h-4/6 rounded-r-large">
        <div className="w-full max-w-md p-8">
          <form>
            {/* กล่องข้อความ Firstname และ Lastname */}
            <div className="mb-3">
              <div className="flex gap-3">
                <div className="flex items-center border rounded-large w-1/2 overflow-hidden">
                  <IoPersonOutline className="text-gray-500 mx-4" />
                  <input
                    className="w-full py-3 px-3 text-gray-700 focus:outline-none"
                    id="Firstname"
                    type="text"
                    placeholder="Firstname"
                    onChange={(event) => setFirstname(event.target.value)}
                  />
                </div>
                <div className="flex items-center border rounded-large w-1/2 overflow-hidden">
                  <IoPersonOutline className="text-gray-500 mx-4" />
                  <input
                    className="w-full py-3 px-3 text-gray-700 focus:outline-none"
                    id="Lastname"
                    type="text"
                    placeholder="Lastname"
                    onChange={(event) => setLastname(event.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* กล่องข้อความ Username */}
            <div className="mb-3">
              <div className="flex items-center border rounded-large shadow-sm overflow-hidden">
                <IoPersonOutline className="text-gray-500 mx-4" />
                <input
                  className="w-full py-3 px-3 text-gray-700 focus:outline-none"
                  id="username"
                  type="text"
                  placeholder="Username"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
            </div>

            {/* กล่องข้อความ Phone */}
            <div className="mb-3">
              <div className="flex items-center border rounded-large shadow-sm overflow-hidden">
                <IoCallOutline className="text-gray-500 mx-4" />
                <input
                  className="w-full py-3 px-3 text-gray-700 focus:outline-none"
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
            </div>

            {/* กล่องข้อความ Email */}
            <div className="mb-3">
              <div className="flex items-center border rounded-large shadow-sm overflow-hidden">
                <IoMailOutline className="text-gray-500 mx-4" />
                <input
                  className="w-full py-3 px-3 text-gray-700 focus:outline-none"
                  id="email"
                  type="email"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>

            {/* กล่องข้อความ Password */}
            <div className="mb-3">
              <div className="flex items-center border rounded-large shadow-sm overflow-hidden">
                <IoLockClosedOutline className="text-gray-500 mx-4" />
                <input
                  className="w-full py-3 px-3 text-gray-700 focus:outline-none"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>

            {/* กล่องข้อความ Confirm Password */}
            <div className="mb-3">
              <div className="flex items-center border rounded-large shadow-sm overflow-hidden">
                <IoLockClosedOutline className="text-gray-500 mx-4" />
                <input
                  className="w-full py-3 px-3 text-gray-700 focus:outline-none"
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>
            </div>

            {/* ปุ่ม Register */}
            <div className="flex justify-end mt-3">
              <button
                className="bg-color-b hover:bg-color-md text-white py-2 px-4 rounded-large focus:outline-none"
                onClick={addCustomer}
                type="button"
              >
                Register
              </button>
            </div>

            {/* ข้อความ หรือ */}
            <div className="flex flex-col items-center mt-3">
              <span>- - - - - - - - - - - - หรือ - - - - - - - - - - - -</span>

              {/* ปุ่ม Login */}
              <div className="flex justify-center mt-3">
                <button
                  className="bg-color-b hover:bg-color-md text-white py-2 px-4 rounded-large focus:outline-none"
                  onClick={handleLogin}
                  type="button"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

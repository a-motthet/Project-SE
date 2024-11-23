import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline, IoLockClosedOutline } from "react-icons/io5";
import mypic from "../images/1.jpg";

function LoginPage() {
  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);
  const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();

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

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });

      if (response.data.success) {
        const token = response.data.token;
        localStorage.setItem("token", token); // เก็บ JWT
        setPopupMessage("เข้าสู่ระบบสำเร็จ!");
        setIsSuccessPopupVisible(true); // แสดง Popup ความสำเร็จ
      } else {
        setPopupMessage(
          response.data.message || "รหัสผ่านหรือชื่อผู้ใช้ผิดพลาด"
        );
        setIsErrorPopupVisible(true); // แสดง Popup ข้อผิดพลาด
      }
    } catch (error) {
      console.error("Error during login:", error);
      setPopupMessage("เกิดข้อผิดพลาด โปรดลองอีกครั้ง");
      setIsErrorPopupVisible(true); // แสดง Popup ข้อผิดพลาด
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="bg-color-bg flex h-screen justify-center items-center px-4">
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
            navigate("/Home"); // ย้ายหน้าไปยัง "/Home" หลังปิด Popup
          }}
        />
      )}
      <div className="w-1/3 bg-gradient-to-t from-color-b to-color-md h-4/6 rounded-l-large"></div>

      <div className="w-1/3 bg-white flex items-center justify-center h-4/6 rounded-r-large">
        <div className="w-full p-6 sm:p-8">
          <div className="flex justify-center mb-7">
            <img
              src={mypic}
              alt="Profile"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
            />
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <div className="flex items-center border border-gray-300 rounded-large shadow-sm bg-white">
                <IoPersonOutline className="text-gray-500 mx-4 text-xl sm:text-2xl" />
                <input
                  className="w-full py-3 px-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-color-md focus:border-color-md rounded-large"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="flex items-center border border-gray-300 rounded-large shadow-sm bg-white">
                <IoLockClosedOutline className="text-gray-500 mx-4 text-xl sm:text-2xl" />
                <input
                  className="w-full py-3 px-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-color-md focus:border-color-md rounded-large"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <a
                className="font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                ลืมรหัสผ่าน?
              </a>
            </div>
            <div className="flex justify-end mt-3">
              <button
                className="bg-color-b hover:bg-color-md text-white font-bold py-2 px-4 rounded-large focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div className="flex flex-col items-center mt-3">
              <span>
                - - - - - - - - - - - - - หรือ - - - - - - - - - - - - - -
              </span>
              <div className="flex justify-center mt-3">
                <button
                  className="bg-color-b hover:bg-color-md text-white font-bold py-2 px-4 rounded-large focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

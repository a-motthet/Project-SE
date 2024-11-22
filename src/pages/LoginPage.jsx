import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline, IoLockClosedOutline } from "react-icons/io5";
import mypic from "../images/1.jpg";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // สำหรับแสดงข้อความผิดพลาด
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });

      if (response.data.success) {
        alert("Login successful!"); // แจ้งเตือนเมื่อเข้าสู่ระบบสำเร็จ
        navigate("/Home"); // ย้ายหน้าไปที่ "/Home"
      } else {
        setErrorMessage(response.data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="bg-pupul-bg flex h-screen justify-center items-center px-4">
      <div className="w-1/3 bg-gradient-to-t from-puple-b to-puple-md h-4/6 rounded-l-lg"></div>

      <div className="w-1/3 bg-white flex items-center justify-center h-4/6 rounded-r-lg">
        <div className="w-full p-6 sm:p-8">
          <div className="flex justify-center mb-7">
            <img
              src={mypic}
              alt="Profile"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
            />
          </div>
          <form>
            <div className="mb-3">
              <div className="flex items-center border rounded shadow-sm font-bold">
                <IoPersonOutline className="text-gray-500 mx-4 text-xl sm:text-2xl" />
                <input
                  className="w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} // เก็บค่าที่ผู้ใช้กรอก
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="flex items-center border rounded shadow-sm font-bold">
                <IoLockClosedOutline className="text-gray-500 mx-4 text-xl sm:text-2xl" />
                <input
                  className="w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // เก็บค่าที่ผู้ใช้กรอก
                />
              </div>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm mb-3">{errorMessage}</p>
            )}
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
                className="bg-puple-b hover:bg-puple-md text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div className="flex flex-col items-center mt-3">
              <a>- - - - - - - - - - - - - หรือ - - - - - - - - - - - - - -</a>
              <div className="flex justify-center mt-3">
                <button
                  className="bg-puple-b hover:bg-puple-md text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

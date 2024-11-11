import React from "react";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline, IoLockClosedOutline } from "react-icons/io5";
import mypic from "../images/1.jpg";

function LoginPage() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = () => {
    navigate("/"); // Navigate to the login page
  };

  const handleRegister = () => {
    navigate("/register"); // Navigate to the login page
  };
  return (
    <div className="bg-pupul-bg flex h-screen justify-center items-center">
      <div className="w-1/3 bg-gradient-to-t from-puple-b to-puple-md h-4/6 rounded-l-lg"></div>

      <div className="w-1/3 bg-white flex items-center justify-center h-4/6 rounded-r-lg">
        <div className="w-full max-w-md p-8">
          <div className="flex justify-center mb-7">
            <img
              src={mypic}
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover"
            />
          </div>
          <form>
            <div className="mb-3">
              <div className="flex items-center border rounded shadow-sm font-bold">
                <IoPersonOutline className="text-gray-500 mx-4 size-6" />
                <input
                  className="w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="flex items-center border rounded shadow-sm font-bold">
                <IoLockClosedOutline className="text-gray-500 mx-4 size-6" />
                <input
                  className="w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="flex justify-end">
              <a
                className="font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                {" "}
                ลืมรหัสผ่าน?{" "}
              </a>
            </div>
            <div class="flex justify-end mt-3">
              <button
                className="bg-puple-b hover:bg-puple-md text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div class="flex flex-col items-center mt-3">
              <a>- - - - - - - - - - - - - หรือ - - - - - - - - - - - - - -</a>
              <div class="flex justify-center mt-3">
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

import React from "react";
import { useNavigate } from "react-router-dom";

import {
  IoMailOutline,
  IoCallOutline,
  IoPersonOutline,
  IoLockClosedOutline,
} from "react-icons/io5";
import mypic from "../images/1.jpg";

function RegisterPage() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = () => {
    navigate("/login"); // Navigate to the login page
  };
  return (
    <div className="bg-pupul-bg flex h-screen justify-center items-center">
      <div className="w-1/3 bg-gradient-to-t from-puple-b to-puple-md h-4/6 rounded-l-lg"></div>

      <div className="w-1/3 bg-white flex items-center justify-center h-4/6 rounded-r-lg">
        <div className="w-full max-w-md p-8">
          <form>
            {/* กล่องข้อความ 1 */}
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
            {/* กล่องข้อความ 2 */}
            <div className="mb-3">
              <div className="flex items-center border rounded shadow-sm font-bold">
                <IoCallOutline className="text-gray-500 mx-4 size-6 " />
                <input
                  className="w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                />
              </div>
            </div>
            {/* กล่องข้อความ 3 */}
            <div className="mb-3">
              <div className="flex items-center border rounded shadow-sm font-bold">
                <IoMailOutline className="text-gray-500 mx-4 size-6" />
                <input
                  className="w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            {/* กล่องข้อความ 4 */}
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
            {/* กล่องข้อความ 5 */}
            <div className="mb-3">
              <div className="flex items-center border rounded shadow-sm font-bold">
                <IoLockClosedOutline className="text-gray-500 mx-4 size-6" />
                <input
                  className="w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Confirm"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            {/* ปุ่ม Login สีม่วง */}
            <div class="flex justify-end mt-3">
              <button
                className="bg-puple-b hover:bg-puple-md text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register
              </button>
            </div>
            {/* ข้อความ หรือ */}
            <div class="flex flex-col items-center mt-3">
              <a>- - - - - - - - - - - - - หรือ - - - - - - - - - - - - - -</a>
              {/* ปุ่ม login */}
              <div class="flex justify-center mt-3">
                <button
                  className="bg-puple-b hover:bg-puple-md text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleLogin}
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

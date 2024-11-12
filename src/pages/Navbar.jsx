import React, { useState } from "react";
import mypic from "../images/1.jpg";
import { useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-puple-b p-4 flex items-center justify-between  shadow-md">
      <div className="flex items-center">
        <img
          src={mypic}
          alt="Profile"
          className="ml-20 w-20 h-20 rounded-full mr-5 shadow-xl"
        />
        <a className="text-white text-[30px] font-extrabold ">Animalover</a>
      </div>

      <div className="flex items-center space-x-10 mr-20">
        <button
          onMouseEnter={handleMouseLeave}
          className="text-white text-lg font-medium px-5 py-2 rounded-large hover:bg-puple-holdber hover:shadow-md"
          onClick={() => handleNavigation("/Home")}
        >
          Home
        </button>
        <div className="relative group">
          <button
            onMouseEnter={handleMouseEnter}
            className="text-white text-lg font-medium px-5 py-2 rounded-large hover:bg-puple-holdber hover:shadow-md flex items-center"
          >
            Pet <FaAngleDown className="ml-2" />
          </button>
          <div onMouseLeave={handleMouseLeave}>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <div className="absolute top-0 left-6 w-3 h-3 bg-white transform rotate-45 -mt-1"></div>
                <div className="py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
                  >
                    สัตว์เลี้ยงของฉัน
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
                  >
                    เพิ่มสัตว์เลี้ยง
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
                  >
                    ข้อมูลสุขภาพ
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
                  >
                    คลินิกใกล้เคียง
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-center"
                  >
                    แนะนำโภชนาการ
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <button
          onMouseEnter={handleMouseLeave}
          className="text-white text-lg font-medium px-5 py-2 rounded-large hover:bg-puple-holdber hover:shadow-md"
        >
          Contact Us
        </button>
        <button
          onMouseEnter={handleMouseLeave}
          className="text-white text-lg font-medium px-5 py-2 rounded-large hover:bg-puple-holdber hover:shadow-md"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

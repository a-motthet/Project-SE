import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import mypic from "../images/1.jpg";
import axios from "axios";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpenPet, setDropdownOpenPet] = useState(false);
  const [dropdownOpenUser, setDropdownOpenUser] = useState(false);

  const [username, setUsername] = useState(""); // State สำหรับชื่อผู้ใช้
  const navigate = useNavigate();
  // const user = "Atsadawut";/////////////////////////////

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token"); // ดึง JWT
    if (token) {
      axios
        .get("http://localhost:3001/getUsername", {
          headers: { Authorization: `Bearer ${token}` }, // ส่ง JWT ใน Header
        })
        .then((response) => {
          if (response.data.success) {
            setUsername(response.data.username); // ตั้งค่าชื่อผู้ใช้ใน State
          } else {
            console.error("Failed to fetch username:", response.data.message);
          }
        })
        .catch((error) => {
          console.error("Error fetching username:", error);
        });
    } else {
      console.error("No token found, please log in");
    }
  }, []);

  return (
    <nav className="bg-color-b shadow-md p-4 font-sans">
      {/* Navbar container */}
      <div className="flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <div>
          <div className="flex items-center">
            <img
              src={mypic}
              alt="Profile"
              className="md:ml-20 w-20 h-20 rounded-full mr-5 shadow-xl"
            />
            <a className="text-white text-[30px] font-extrabold md:block hidden ">
              Animalover
            </a>
          </div>
        </div>
        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <button
            onClick={() => handleNavigation("/Home")}
            onMouseEnter={() => {
              setDropdownOpenPet(false);
              setDropdownOpenUser(false);
            }}
            className="text-white text-lg font-medium px-5 py-2 rounded-large hover:bg-color-holdber hover:shadow-md"
          >
            Home
          </button>
          <div
            className="relative group"
            onMouseEnter={() => {
              setDropdownOpenPet(true);
              setDropdownOpenUser(false);
            }}
          >
            <button className="flex items-center text-white text-lg font-medium px-5 py-2 rounded-large hover:bg-color-holdber hover:shadow-md">
              Pet <FaAngleDown className="ml-2" />
            </button>

            {/* Dropdown */}
            {dropdownOpenPet && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg text-center">
                {/* ลูกศรของ Dropdown */}
                <div className="absolute top-[-8px] left-6 w-4 h-4 bg-white rotate-45 "></div>

                <a
                  href="/Mypet"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:rounded-t-lg"
                >
                  สัตว์เลี้ยงของฉัน
                </a>
                <a
                  href="/Addpet"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  เพิ่มสัตว์เลี้ยง
                </a>
                <a
                  href="/HomeHealth"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  ข้อมูลสุขภาพ
                </a>
                <a
                  href="/ClinicNear"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  คลินิกใกล้เคียง
                </a>
                <a
                  href="/Pet_benefit"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:rounded-b-lg"
                >
                  แนะนำโภชนาการ
                </a>
              </div>
            )}
          </div>

          <button
            onMouseEnter={() => {
              setDropdownOpenPet(false);
              setDropdownOpenUser(false);
            }}
            onClick={() => handleNavigation("/Contact")}
            className="text-white text-lg font-medium px-5 py-2 rounded-large hover:bg-color-holdber hover:shadow-md"
          >
            Contact Us
          </button>
          <div
            className="relative group"
            onMouseEnter={() => {
              setDropdownOpenPet(false);
              setDropdownOpenUser(true);
            }}
          >
            <button className="flex items-center text-white text-lg font-medium px-5 py-2 rounded-large hover:bg-color-holdber hover:shadow-md">
              {username || "Guest"} <FaAngleDown className="ml-2" />
            </button>

            {/* Dropdown */}
            {dropdownOpenUser && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg text-center">
                {/* ลูกศรของ Dropdown */}
                <div className="absolute top-[-8px] right-6 w-4 h-4 bg-white rotate-45 shadow-md"></div>

                <a
                  href="/Edit"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:rounded-t-lg"
                >
                  จัดการบัญชี
                </a>
                <a
                  href="/Logout"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:rounded-b-lg"
                >
                  ออกจากระบบ
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-color-b text-white space-y-4 px-5 py-4">
          <button
            onClick={() => handleNavigation("/Home")}
            className="block text-lg font-medium"
          >
            Home
          </button>
          <div>
            <button
              onClick={() => setDropdownOpenPet(!dropdownOpenPet)}
              className="flex items-center text-lg font-medium"
            >
              Pet <FaAngleDown className="ml-2" />
            </button>
            {dropdownOpenPet && (
              <div className="ml-4 mt-2 space-y-2">
                <a href="/Mypet" className="block hover:text-color-holdber">
                  สัตว์เลี้ยงของฉัน
                </a>
                <a href="/Addpet" className="block hover:text-color-holdber">
                  เพิ่มสัตว์เลี้ยง
                </a>
                <a
                  href="/HomeHealth"
                  className="block hover:text-color-holdber"
                >
                  ข้อมูลสุขภาพ
                </a>
                <a
                  href="/ClinicNear"
                  className="block hover:text-color-holdber"
                >
                  คลินิกใกล้เคียง
                </a>
                <a
                  href="/Pet_benefit"
                  className="block hover:text-color-holdber"
                >
                  แนะนำโภชนาการ
                </a>
              </div>
            )}
          </div>
          <button
            onClick={() => handleNavigation("/Contact")}
            className="block text-lg font-medium"
          >
            Contact Us
          </button>
          <div>
            <button
              onClick={() => setDropdownOpenUser(!dropdownOpenUser)}
              className="flex items-center text-lg font-medium"
            >
              {username || "Guest"} <FaAngleDown className="ml-2" />
            </button>
            {dropdownOpenUser && (
              <div className="ml-4 mt-2 space-y-2">
                <a href="/Edit" className="block hover:text-color-holdber">
                  จัดการบัญชี
                </a>
                <a href="/" className="block hover:text-color-holdber">
                  ออกจากระบบ
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

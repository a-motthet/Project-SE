import React, { useState } from "react";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import mypic from "../images/1.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpenPet, setDropdownOpenPet] = useState(false);
  const [dropdownOpenUser, setDropdownOpenUser] = useState(false);
  const navigate = useNavigate();
  const user = "Atsadawut";

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-puple-b shadow-md p-4">
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
            className="text-white text-lg font-medium px-5 py-2 rounded-large hover:bg-puple-holdber hover:shadow-md"
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
            <button className="flex items-center text-white text-lg font-medium px-5 py-2 rounded-large hover:bg-puple-holdber hover:shadow-md">
              Pet <FaAngleDown className="ml-2" />
            </button>

            {/* Dropdown */}
            {dropdownOpenPet && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg text-center">
                {/* ลูกศรของ Dropdown */}
                <div className="absolute top-[-8px] left-6 w-4 h-4 bg-white rotate-45 shadow-md"></div>

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
                  href="/HealthpetPage"
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
            className="text-white text-lg font-medium px-5 py-2 rounded-large hover:bg-puple-holdber hover:shadow-md"
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
            <button className="flex items-center text-white text-lg font-medium px-5 py-2 rounded-large hover:bg-puple-holdber hover:shadow-md">
              {user} <FaAngleDown className="ml-2" />
            </button>

            {/* Dropdown */}
            {dropdownOpenUser && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg text-center">
                {/* ลูกศรของ Dropdown */}
                <div className="absolute top-[-8px] right-6 w-4 h-4 bg-white rotate-45 shadow-md"></div>

                <a
                  href="/AccountManagement"
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
        <div className="md:hidden bg-puple-b text-white space-y-4 px-5 py-4">
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
                <a href="/Mypet" className="block hover:text-puple-holdber">
                  สัตว์เลี้ยงของฉัน
                </a>
                <a href="/Addpet" className="block hover:text-puple-holdber">
                  เพิ่มสัตว์เลี้ยง
                </a>
                <a
                  href="/HealthpetPage"
                  className="block hover:text-puple-holdber"
                >
                  ข้อมูลสุขภาพ
                </a>
                <a
                  href="/ClinicNear"
                  className="block hover:text-puple-holdber"
                >
                  คลินิกใกล้เคียง
                </a>
                <a
                  href="/Pet_benefit"
                  className="block hover:text-puple-holdber"
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
              {user} <FaAngleDown className="ml-2" />
            </button>
            {dropdownOpenUser && (
              <div className="ml-4 mt-2 space-y-2">
                <a href="/Edit" className="block hover:text-puple-holdber">
                  จัดการบัญชี
                </a>
                <a href="/" className="block hover:text-puple-holdber">
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

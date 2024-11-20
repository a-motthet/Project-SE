import React, { useState } from "react";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import mypic from "../images/1.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); // Close menu after navigation
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
            onMouseEnter={() => setDropdownOpen(false)}
            className="text-white text-lg font-medium px-5 py-2 rounded-large hover:bg-puple-holdber hover:shadow-md"
          >
            Home
          </button>
          <div
            className="relative group "
            onMouseEnter={() => setDropdownOpen(true)}
          >
            <button className="flex items-center text-white text-lg font-medium px-5 py-2 rounded-large hover:bg-puple-holdber hover:shadow-md">
              Pet <FaAngleDown className="ml-2" />
            </button>
            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white rounded-lg shadow-lg w-40 z-10">
                <a
                  href="/Mypet"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
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
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  แนะนำโภชนาการ
                </a>
              </div>
            )}
          </div>
          <button
            onMouseEnter={() => setDropdownOpen(false)}
            onClick={() => handleNavigation("/Contact")}
            className="text-white text-lg font-medium px-5 py-2 rounded-large hover:bg-puple-holdber hover:shadow-md"
          >
            Contact Us
          </button>
          <button
            onMouseEnter={() => setDropdownOpen(false)}
            onClick={() => handleNavigation("/Login")}
            className="text-white text-lg font-medium px-5 py-2 rounded-large hover:bg-puple-holdber hover:shadow-md"
          >
            Login
          </button>
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
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center text-lg font-medium"
            >
              Pet <FaAngleDown className="ml-2" />
            </button>
            {dropdownOpen && (
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
          <button
            onClick={() => handleNavigation("/Login")}
            className="block text-lg font-medium"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

import React from "react";
import mypic from "../images/2.jpg";
import Navbar from "../components/Navbar";
import { IoBookmark } from "react-icons/io5";
import { FaDog, FaList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login"); // Navigate to the login page
  };

  // ฟังก์ชันสำหรับการนำทางไปยังหน้าที่ต้องการ
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <>
      <div className="App">
        <Navbar />
        {/* Other content */}
      </div>

      <main className="container mx-auto py-12 px-4 md:px-0">
        <div className="bg-[#6373B7] p-9 rounded-lg shadow-md flex items-center gap-4">
          <img
            src={mypic}
            alt="Welcome"
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">
              ยินดีต้อนรับสู่ Animalover
            </h2>
            <p className="text-white">
              แพลตฟอร์มการดูแลสุขภาพสัตว์เลี้ยงครบวงจร
            </p>
            <p className="text-white mt-2">
              เจ้าของสัตว์เลี้ยงสามารถค้นหาข้อมูลเกี่ยวกับการดูแลสุขภาพสัตว์เลี้ยง
              เช่น การเลือกอาหารที่เหมาะสม การพาไปตรวจสุขภาพ
              และการดูแลสุขภาพแบบองค์รวม
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-bold">รายการแนะนำสำหรับคุณ</h3>
            <IoBookmark className="ml-2 text-2xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 cursor-pointer">
            {/* คลิกที่ div นี้แล้วจะไปหน้า '/mypet' */}
            <div
              className="bg-gray-100 p-4 rounded-lg shadow flex flex-col items-center transition-transform duration-300 hover:scale-105"
              onClick={() => handleNavigation("/mypet")} // ต้องเป็น "/mypet"
            >
              <img
                src={mypic}
                alt="Profile"
                className="w-64 h-64 rounded-full object-cover mb-4"
              />
              <h4 className="font-semibold mb-4">สัตว์เลี้ยงของฉัน</h4>
            </div>
            {/* คลิกที่ div นี้แล้วจะไปหน้า '/add-pet' */}
            <div
              className="bg-gray-100 p-4 rounded-lg shadow flex flex-col items-center transition-transform duration-300 hover:scale-105"
              onClick={() => handleNavigation("/Addpet")}
            >
              <img
                src={mypic}
                alt="Profile"
                className="w-64 h-64 rounded-full object-cover mb-4"
              />
              <h4 className="font-semibold mb-4">เพิ่มสัตว์เลี้ยง</h4>
            </div>
          </div>
        </div>

        <div className="mt-8 cursor-pointer">
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-bold">รายการทั้งหมด</h3>
            <FaList className="ml-2 size-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow flex flex-col items-center transition-transform duration-300 hover:scale-105">
              <img
                src={mypic}
                alt="Profile"
                className="w-64 h-64 rounded-full object-cover mb-4"
              />
              <h4 className="font-semibold mb-3 text-center">
                สัตว์เลี้ยงของฉัน
              </h4>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow flex flex-col items-center transition-transform duration-300 hover:scale-105">
              <img
                src={mypic}
                alt="Profile"
                className="w-64 h-64 rounded-full object-cover mb-4"
              />
              <h4 className="font-semibold mb-3 text-center">
                เพิ่มสัตว์เลี้ยง
              </h4>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow flex flex-col items-center transition-transform duration-300 hover:scale-105">
              <img
                src={mypic}
                alt="Profile"
                className="w-64 h-64 rounded-full object-cover mb-4"
              />
              <h4 className="font-semibold text-center">
                ข้อมูลสุขภาพของสัตว์เลี้ยง
              </h4>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow flex flex-col items-center transition-transform duration-300 hover:scale-105">
              <img
                src={mypic}
                alt="Profile"
                className="w-64 h-64 rounded-full object-cover mb-4"
              />
              <h4 className="font-semibold text-center">
                คลินิกรักษาสัตว์ใกล้เคียง
              </h4>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;

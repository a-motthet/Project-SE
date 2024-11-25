import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // ไลบรารีสำหรับทำ HTTP Request
import mypic from "../images/2.jpg"; // รูปภาพ default

function App() {
  const [pets, setPets] = useState([]); // สร้าง state สำหรับเก็บข้อมูลสัตว์เลี้ยง

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const token = localStorage.getItem("token"); // ดึง token จาก localStorage (กรณีมีการ auth)
        const response = await axios.get("http://localhost:3000/Pet_benefit", {
          headers: {
            Authorization: `Bearer ${token}`, // เพิ่ม token ใน request header
          },
        });
        setPets(response.data); // เก็บข้อมูลสัตว์เลี้ยงใน state
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="bg-color-bg min-h-screen flex flex-col">
      <div className="container mx-auto p-6 flex flex-col items-center">
        <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center mb-8 w-full sm:w-80 md:w-96 lg:w-96 xl:w-1/3">
          <img
            src={mypic}
            alt="cat"
            className="w-40 h-40 rounded-full object-cover shadow-md border-4 border-white mb-4"
          />
          <div className="bg-gray-100 p-3 rounded-md w-full text-center">
            <p className="text-gray-600 text-xl font-semibold font-sans">
              สัตว์เลี้ยงของฉัน
            </p>
          </div>
        </div>

        {/* Grid สำหรับแสดงรายการสัตว์เลี้ยง */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 bg-white rounded-lg shadow-lg">
          {pets.map((val, key) => (
            <Link to={`/Detailpet/${val.pet_id}`} key={val.pet_id}>
              <div className="group relative content-center items-center max-w-xs w-[300px] h-[300px] mx-auto rounded-full overflow-hidden shadow-md transition-all duration-500 ease-in-out transform hover:scale-105">
                <img
                  src={val.pet_photo || mypic} // ใช้รูปภาพจาก database หรือรูป default
                  alt={`${val.pet_name}`}
                  className=" object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                  <span className="text-white text-xl font-semibold font-sans">
                    {val.pet_name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
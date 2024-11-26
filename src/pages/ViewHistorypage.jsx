import React, { useState, useEffect } from "react";
import mypic from "../images/2.jpg";
import { useNavigate } from "react-router-dom";
import { Vaccine } from "../constants";
import { useParams } from "react-router-dom";
import axios from "axios";


function ViewHistorypage() {
  const navigate = useNavigate();
  const { id } = useParams(); // ดึง id จาก URL ของหน้าปัจจุบัน
  const [thispet, setThispet] = useState([]);
  const [vaccine, setVaccine] = useState([]);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const token = localStorage.getItem("token"); // ดึง Token
        const response = await axios.get(`http://localhost:3001/pets/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setThispet(response.data); // เก็บข้อมูลสัตว์เลี้ยงใน State
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching pets:", err);
      }
    };

    fetchPet();
  }, []);

  useEffect(() => {
    const fetchVaccine = async () => {
      try {
        const token = localStorage.getItem("token"); // ดึง Token
        const response = await axios.get(
          `http://localhost:3001/vaccines/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setVaccine(response.data); // เก็บข้อมูลสัตว์เลี้ยงใน State
      } catch (err) {
        console.error("Error fetching pets:", err);
      }
    };

    fetchVaccine();
  }, []);

  const formatter = new Intl.DateTimeFormat("th-TH", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  function calculatePetAge(birthDateString) {
    // แปลงวันเกิดจากสตริงเป็น Date object
    const birthDate = new Date(birthDateString);
    const currentDate = new Date(); // วันที่ปัจจุบัน

    // คำนวณอายุ
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    const dayDifference = currentDate.getDate() - birthDate.getDate();

    // ปรับอายุหากเดือนหรือวันยังไม่ถึงวันเกิดในปีนี้
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    // แปลงวันเกิดเป็นฟอร์แมตที่อ่านง่าย
    const formattedBirthDate = formatter.format(birthDate);

    return {
      age,
      formattedBirthDate,
    };
  }

  if (thispet.length === 0) {
    return <p className="text-center">กำลังโหลดข้อมูลสัตว์เลี้ยง...</p>;
  }

  const petInfo = calculatePetAge(thispet[0].pet_birthdate);

  return (
    <div className="min-h-screen flex items-center justify-center py-8 font-sans">
      <div className="bg-white rounded-large shadow-inner">
        <p className="pl-8 pt-8 text-color-b text-3xl font-bold">{thispet[0].pet_name}</p>
        <div className="grid grid-cols-4 items-center">
          <div className="col-span-3">
            <div className="grid grid-cols-2 mb-2">
              <div className="ml-8 text-color-b text-xl">
                ชนิดสัตว์เลี้ยง: {thispet[0].pet_breed}
              </div>
              <div className="text-color-b text-xl">เพศของสัตว์: {thispet[0].pet_gender}</div>
            </div>
            <div className="grid grid-cols-2 mb-2">
              <div className="ml-8 text-color-b text-xl">
                อายุของสัตว์เลี้ยง: {petInfo.age} ปี
              </div>
              <div className="text-color-b text-xl">
                น้ำหนักของสัตว์เลี้ยง: {thispet[0].pet_weight} กิโลกรัม
              </div>
            </div>
            {/* <div className="grid grid-cols-1 mb-2">
              <div className="ml-8 text-color-b text-xl">
                สายพันธ์สัตว์เลี้ยง: {petA}
              </div>
            </div> */}
            <div className="grid grid-cols-1 mb-2">
              <div className="ml-8 text-color-b text-xl">
                โรคประจำตัว : {thispet[0].pet_disease}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pr-8">
          <img
              src={thispet[0].pet_photo}
              alt={`${thispet[0].pet_photo} picture`}
              className="w-48 object-cover rounded-full border border-gray-300"
            />
          </div>
        </div>
        <div>
          <div className="p-8 flex flex-col text-color-b text-3xl font-bold">
            ประวัติการได้รับวัคซีน:
          </div>
            <div className="px-4 grid mb-2 gap-2 mb-20 text-color-b">
              <div>
                  <div className="grid grid-cols-5 ">
                    <h1 className="font-bold mt-8 justify-self-start ml-8">
                      ลำดับ
                    </h1>
                    <h1 className="font-bold col-span-2 mt-8 justify-self-center">
                      ชื่อวัคซีน
                    </h1>
                    <h1 className="font-bold mt-8 justify-self-center">
                      วันที่ได้รับ
                    </h1>
                    <h1 className="font-bold mt-8 justify-self-center">
                      วันหมดอายุ
                    </h1>
                  </div>
                </div> 
            <div className="px-4 grid mb-2 gap-2 mb-20 text-color-b">
              {vaccine.map((val, index) => (
                <div key={val.vaccine_id}>
                  <div className="grid grid-cols-5 ">
                    <h1 className="font-bold mt-8 justify-self-start ml-8">
                      {index + 1}
                    </h1>
                    <h1 className="font-bold col-span-2 mt-8 justify-self-center">
                      {val.vaccine_name}
                    </h1>
                    <h1 className="font-bold mt-8 justify-self-center">
                      {calculatePetAge(val.vaccine_date).formattedBirthDate}
                    </h1>
                    <h1 className="font-bold mt-8 justify-self-center">
                      {calculatePetAge(val.vaccine_exp).formattedBirthDate}
                    </h1>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-center my-8">
                <button
                  className="w-auto bg-color-b text-white text-xl py-4 px-4 rounded-large hover:bg-color-holdber transition"
                  onClick={() => navigate(`/HealthpetPage/${id}`)} // ใช้ id ที่ดึงจาก URL
                >
                  ย้อนกลับ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewHistorypage;

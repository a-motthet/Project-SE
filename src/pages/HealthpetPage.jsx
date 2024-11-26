import React, { useState, useEffect } from "react";
import mypic from "../images/2.jpg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function HealthPetPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [thispet, setThispet] = useState([]);
  const [vaccine, setVaccine] = useState([]);
  const [history, setHistory] = useState([]);

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
          `http://localhost:3001/vaccine_Home/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setVaccine(response.data); // เก็บข้อมูลสัตว์เลี้ยงใน State
      } catch (err) {
        console.error("Error fetching vaccine:", err);
      }
    };

    fetchVaccine();
  }, []);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token"); // ดึง Token
        const response = await axios.get(
          `http://localhost:3001/history_Home/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setHistory(response.data); // เก็บข้อมูลสัตว์เลี้ยงใน State
      } catch (err) {
        console.error("Error fetching history:", err);
      }
    };

    fetchHistory();
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

  // if (!pet) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center font-sans">
  //       <p className="text-red-500 text-xl">
  //         ไม่พบข้อมูลสัตว์เลี้ยงที่คุณต้องการ
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen flex items-center justify-center font-sans">
      <div className="bg-white rounded-large shadow-inner w-11/12 lg:w-3/4 xl:w-2/3">
        <p className="pl-8 pt-8 text-color-b text-3xl font-bold">
          {thispet[0].pet_name}
        </p>
        <div className="grid grid-cols-4 items-center">
          <div className="col-span-3">
            <div className="grid grid-cols-2 mb-2">
              <div className="ml-8 text-color-b text-xl">
                ชนิดสัตว์เลี้ยง: {thispet[0].pet_breed}
              </div>
              <div className="text-color-b text-xl">
                เพศของสัตว์: {thispet[0].pet_gender}
              </div>
            </div>
            <div className="grid grid-cols-2 mb-2">
              <div className="ml-8 text-color-b text-xl">
                อายุของสัตว์เลี้ยง: {petInfo.age} ปี
              </div>
              <div className="text-color-b text-xl">
                น้ำหนักของสัตว์เลี้ยง: {thispet[0].pet_weight} กิโลกรัม
              </div>
            </div>
            <div className="grid grid-cols-1 mb-2">
              <div className="ml-8 text-color-b text-xl">
                โรคประจำตัว: {thispet[0].pet_disease}
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
          <div className="mx-8">
            <div className="w-full h-auto p-4 border-2 border-gray-300 bg-black bg-opacity-5 rounded-large text-color-b text-2xl content-center">
              {vaccine.length > 0 ? (
                vaccine[0].vaccine_name
              ) : (
                <p className="text-gray-500">ไม่มีประวัติการฉีดวัคซีน</p>
              )}
            </div>
            <div
              className="text-end underline text-color-b hover:text-blue-600/100 cursor-pointer"
              onClick={() => navigate(`/ViewHistorypage/${id}`)}
            >
              ดูเพิ่มเติม
            </div>
            <p className="text-center text-red-500 text-xl">
              หมายเหตุ: (ทุก 1-3 ปี ขึ้นอยู่กับชนิดวัคซีนและกฎหมาย)
            </p>
          </div>
        </div>
        <div>
          <div className="p-8 flex flex-col text-color-b text-3xl font-bold">
            ประวัติการตรวจสุขภาพ:
          </div>
          <div className="mx-8 mb-4">
            <div className="text-center w-full h-auto p-4 border-2 border-gray-300 bg-black bg-opacity-5 rounded-large text-color-b text-2xl">
              {history.length > 0 ? (
                calculatePetAge(history[0].health_date).formattedBirthDate
              ) : (
                <p className="text-gray-500">ไม่มีประวัติการตรวจสุขภาพ</p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 gap-4">
            <button
              className="w-auto bg-color-b text-white text-xl py-4 px-4 rounded-large hover:bg-color-holdber transition"
              onClick={() => navigate(`/Historypethealt/${id}`)}
            >
              เพิ่มข้อมูลสุขภาพ
            </button>
            <button
              className="w-auto bg-color-b text-white text-xl py-4 px-4 rounded-large hover:bg-color-holdber transition"
              onClick={() => navigate(`/HistorypetVaccine/${id}`)}
            >
              เพิ่มข้อมูลวัคซีน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthPetPage;

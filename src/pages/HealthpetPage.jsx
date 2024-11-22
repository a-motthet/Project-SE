import React from "react";
import mypic from "../images/2.jpg";
import { useNavigate, useState } from "react-router-dom";
import { useParams } from "react-router-dom";

function HealthPetPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  // สร้าง data มาเก็บ เเบบตัวอย่าง ต้องใช้ database
  const petData = {
    1: {
      name: "สมหมาย",
      type: "แมว",
      sex: "ผู้",
      age: "2 ปี",
      breed: "xxxx",
      condition: "xxxx",
      weight: "4 Kg.",
      vaccine: "วัคซีนป้องกันโรคพิษสุนัขบ้า",
      healthDate: "10-11-2023",
    },
    2: {
      name: "สมหมาย",
      type: "แมว",
      sex: "ผู้",
      age: "2 ปี",
      breed: "xxxx",
      condition: "xxxx",
      weight: "4 Kg.",
      vaccine: "วัคซีนป้องกันโรคพิษสุนัขบ้า",
      healthDate: "10-11-2023",
    },
    3: {
      name: "สมหมาย",
      type: "แมว",
      sex: "ผู้",
      age: "2 ปี",
      breed: "xxxx",
      condition: "xxxx",
      weight: "4 Kg.",
      vaccine: "วัคซีนป้องกันโรคพิษสุนัขบ้า",
      healthDate: "10-11-2023",
    },
    4: {
      name: "มะลิ",
      type: "สุนัข",
      sex: "เมีย",
      age: "5 ปี",
      breed: "xxxx",
      condition: "xxxx",
      weight: "2.5 Kg.",
      vaccine: "วัคซีนไข้หัดสุนัข",
      healthDate: "15-10-2023",
    },
    5: {
      name: "มะลิ",
      type: "สุนัข",
      sex: "เมีย",
      age: "5 ปี",
      breed: "xxxx",
      condition: "xxxx",
      weight: "2.5 Kg.",
      vaccine: "วัคซีนไข้หัดสุนัข",
      healthDate: "15-10-2023",
    },
  };

  const pet = petData[id];

  if (!pet) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans">
        <p className="text-red-500 text-xl">
          ไม่พบข้อมูลสัตว์เลี้ยงที่คุณต้องการ
        </p>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center font-sans">
      <div className="bg-white rounded-large shadow-inner w-11/12 lg:w-3/4 xl:w-2/3">
        <p className="pl-8 pt-8 text-color-b text-3xl font-bold">{pet.name}</p>
        <div className="grid grid-cols-4 items-center">
          <div className="col-span-3">
            <div className="grid grid-cols-2 mb-2">
              <div className="ml-8 text-color-b text-xl">
                ชนิดสัตว์เลี้ยง: {pet.type}
              </div>
              <div className="text-color-b text-xl">เพศของสัตว์: {pet.sex}</div>
            </div>
            <div className="grid grid-cols-2 mb-2">
              <div className="ml-8 text-color-b text-xl">
                อายุของสัตว์เลี้ยง: {pet.age}
              </div>
              <div className="text-color-b text-xl">
                น้ำหนักของสัตว์เลี้ยง: {pet.weight}
              </div>
            </div>
            <div className="grid grid-cols-1 mb-2">
              <div className="ml-8 text-color-b text-xl">
                สายพันธุ์สัตว์เลี้ยง: {pet.breed}
              </div>
            </div>
            <div className="grid grid-cols-1 mb-2">
              <div className="ml-8 text-color-b text-xl">
                โรคประจำตัว: {pet.condition}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pr-8">
            <img
              src={mypic}
              alt={`${pet.name} picture`}
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
              {pet.vaccine}
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
              {pet.healthDate}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              className="w-auto bg-color-b text-white text-xl py-4 px-4 rounded-large hover:bg-color-holdber transition"
              onClick={() => navigate("/HistorypetVaccine")}
            >
              เพิ่มข้อมูลสุขภาพ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthPetPage;

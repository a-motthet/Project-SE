import React from "react";
import mypic from "../images/2.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { Vaccine } from "../constants";

function ViewHistorypage() {
  const navigate = useNavigate();
  const { id } = useParams(); // ดึง id จาก URL ของหน้าปัจจุบัน
  console.log(id);

  const petName = "สมหมาย";
  const petType = "แมว";
  const petSex = "ผู้";
  const petAge = "19";
  const petA = "xxxx";
  const petB = "xxxx";
  const petWeight = "20 Kg.";

  

  return (
    <div className="min-h-screen flex items-center justify-center py-8 font-sans">
      <div className="bg-white rounded-large shadow-inner">
        <p className="pl-8 pt-8 text-puple-b text-3xl font-bold">{petName}</p>
        <div className="grid grid-cols-4 items-center">
          <div className="col-span-3">
            <div className="grid grid-cols-2 mb-2">
              <div className="ml-8 text-puple-b text-xl">
                ชนิดสัตว์เลี้ยง: {petType}
              </div>
              <div className="text-puple-b text-xl">เพศของสัตว์: {petSex}</div>
            </div>
            <div className="grid grid-cols-2 mb-2">
              <div className="ml-8 text-puple-b text-xl">
                อายุของสัตว์เลี้ยง: {petAge}
              </div>
              <div className="text-puple-b text-xl">
                น้ำหนักของสัตว์เลี้ยง: {petWeight}
              </div>
            </div>
            <div className="grid grid-cols-1 mb-2">
              <div className="ml-8 text-puple-b text-xl">
                สายพันธ์สัตว์เลี้ยง: {petA}
              </div>
            </div>
            <div className="grid grid-cols-1 mb-2">
              <div className="ml-8 text-puple-b text-xl">
                โรคประจำตัว : {petB}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pr-8">
            <img
              src={mypic}
              alt={`${petName} picture`}
              className="w-48 object-cover rounded-full border border-gray-300"
            />
          </div>
        </div>
        <div>
          <div className="p-8 flex flex-col text-puple-b text-3xl font-bold">
            ประวัติการได้รับวัคซีน:
          </div>
          <div className="">
            <div className="px-4 grid mb-2 gap-2 mb-20 text-puple-b">
              {Vaccine.map((item) => (
                <div key={item.No}>
                  <div className="grid grid-cols-5 ">
                    <h1 className="font-bold mt-8 justify-self-start ml-8">
                      {item.No}
                    </h1>
                    <h1 className="font-bold col-span-2 mt-8 justify-self-center">
                      {item.name}
                    </h1>
                    <h1 className="font-bold mt-8 justify-self-center">
                      {item.received}
                    </h1>
                    <h1 className="font-bold mt-8 justify-self-center">
                      {item.Expiration}
                    </h1>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-center my-8">
                <button
                  className="w-auto bg-puple-b text-white text-xl py-4 px-4 rounded-large hover:bg-puple-holdber transition"
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

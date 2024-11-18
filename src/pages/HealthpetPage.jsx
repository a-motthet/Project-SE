import React from "react";
import mypic from "../images/2.jpg";
import { useNavigate } from "react-router-dom";

function HealthPetPage() {
  const navigate = useNavigate();

  const petName = "สมหมาย";
  const petType = "แมว";
  const petSex = "ผู้";
  const petAge = "19";
  const petA = "XXXX";
  const petB = "XXXX";
  const petWeight = "20 Kg.";
  const petVaccine = "วัคซีนป้องกันโรคพิษสุนัขบ้า";
  const petHealthDate = "XX-XX-XXXX";

  return (
    <div className="mr-[320px] ml-[320px] my-5 h-[700px] bg-white rounded-large shadow-inner">
      <p className="p-8 text-puple-b text-3xl font-bold">{petName}</p>
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
        <div className="mx-8">
          <div className="w-full h-auto p-4 border-2 border-gray-300 bg-black bg-opacity-5 rounded-large text-puple-b text-2xl content-center">
            {petVaccine}
          </div>
          <div
            className="text-end underline text-puple-b hover:text-blue-600/100 cursor-pointer"
            onClick={() => navigate("/HistorypetVaccine")}
          >
            ดูเพิ่มเติม
          </div>
          <p className="text-center text-red-500 text-xl">
            หมายเหตุ : (ทุก 1-3 ปี ขึ้นอยู่กับชนิดวัคซีนและกฎหมาย)
          </p>
        </div>
      </div>
      <div>
        <div className="p-8 flex flex-col text-puple-b text-3xl font-bold">
          ประวัติการตรวจสุขภาพ:
        </div>
        <div className="mx-8">
          <div className="text-center w-full h-auto p-4 border-2 border-gray-300 bg-black bg-opacity-5 rounded-large text-puple-b text-2xl">
            {petHealthDate}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthPetPage;

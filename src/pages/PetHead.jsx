import React from "react";
import mypic from "../images/2.jpg";

const PetDetails = () => {
  return (
    <div className="flex flex-cols item-center">
      <div className="flex-grow text-left mt-2">
        <h1 className="text-xl font-extrabold text-color-b">สมหมาย :</h1>
        <div className="text-md text-color-b font-bold text-lg mt-1">
          สัตว์เลี้ยง : แมว&nbsp;&nbsp;&nbsp;&nbsp;เพศ : เมีย
        </div>
        <div className="text-md text-color-b  font-bold text-lg mt-1">
          อายุสัตว์ : 7&nbsp;&nbsp;&nbsp;&nbsp;สายพันธุ์ : xxxx
        </div>
        <div className="text-md text-color-b font-bold text-lg mt-1">
          น้ำหนัก : 20 g
        </div>
      </div>
      <div className="w-52 h-52 rounded-lg bg-gray-200 flex-shrink-0 ml-4 shadow">
        <img
          src={mypic}
          alt="สัตว์เลี้ยง"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default PetDetails;

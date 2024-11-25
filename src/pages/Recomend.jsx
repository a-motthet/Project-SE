import React, { useState } from "react";
import mypic1 from "../images/4.jpg";
import mypic2 from "../images/3.jpg";
import mypic3 from "../images/6.jpg";
import mypic4 from "../images/8.jpg";
import mypic5 from "../images/7.jpg";
import { useNavigate } from "react-router-dom";

function Recomend() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const RecommendedItem = ({ title, path, imgSrc }) => (
    <div
      className="container flex flex-col items-center bg-gray-100 rounded-large p-4 mx-auto max-w-72 hover:scale-110 hover:delay-100"
      onClick={() => handleNavigation(path)}
    >
      <div>
        <img
          src={imgSrc}
          alt="Profile"
          className="w-32 h-32 flex object-cover items-center justify-self-center content-center"
        />
        <h4 className="font-semibold mb-4 mt-4 justify-self-center font-sans">
          {title}
        </h4>
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-white min-screen flex flex-col rounded-large">
        <div className="grid grid-cols-3 gap-0 md:gap-8 md:p-8">
          <RecommendedItem
            title="สัตว์เลี้ยงของฉัน"
            path="/Mypet"
            imgSrc={mypic1}
          />
          <RecommendedItem
            title="เพิ่มสัตว์เลี้ยง"
            path="/Addpet"
            imgSrc={mypic2}
          />
          <RecommendedItem
            title="ข้อมูลสุขภาพ"
            path="/HomeHealth"
            imgSrc={mypic3}
          />
          <RecommendedItem
            title="คลินิกรักษาใกล้เคียง"
            path="/ClinicNear"
            imgSrc={mypic4}
          />
          <RecommendedItem
            title="แนะนำโภชนาการ"
            path="/Head_bene"
            imgSrc={mypic5}
          />
        </div>
      </div>
    </>
  );
}

export default Recomend;

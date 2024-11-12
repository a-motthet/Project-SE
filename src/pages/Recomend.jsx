import React, { useState } from 'react';
import mypic1 from "../images/3.jpg";
import mypic2 from "../images/8.jpg";
import mypic3 from "../images/5.jpg";
import mypic4 from "../images/6.jpg";
import mypic5 from "../images/7.jpg";
import { useNavigate } from "react-router-dom";

function Recomend() {
    const [currentComponent, setCurrentComponent] = useState('home'); 
    const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); 
  };

  const RecommendedItem = ({ title, path,imgSrc }) => (
    <div
      className="bg-gray-100 p-4 rounded-lg shadow flex flex-col items-center transition-transform duration-300 hover:scale-105 mx-auto px-4 gap-2 max-w-xs"
      onClick={() => handleNavigation(path)}
    >
      <img
        src={imgSrc}
        alt="Profile"
        className="w-30 h-30 rounded-full object-cover mb-4"
      />
      <h4 className="font-semibold mb-4">{title}</h4>
    </div>
  );

  return (
    <main>
        <div className="mt-8">
        <div className="flex items-center mb-5 ">
            <h3 className="text-xl font-bold py-2 mx-6 ">รายการทั้งหมด</h3>
            
        </div>
        <div className="grid  md:grid-cols-3 gap-4 cursor-pointer">
            <RecommendedItem title="สัตว์เลี้ยงของฉัน" path="/Mypet" imgSrc={mypic1} />
            <RecommendedItem title="เพิ่มสัตว์เลี้ยง" path="/Addpet" imgSrc={mypic2}/>
            <RecommendedItem title="แนะนำโภชนาการ" path="/pet-benfit"  imgSrc={mypic3}/>
            <RecommendedItem title="ข้อมูลสุขภาพของสัตว์เลี้ยง" path="/pet-health" imgSrc={mypic4}/>
            <RecommendedItem title="คลินิกรักษาสัตว์ใกล้เคียง" path="/pet-clinic" imgSrc={mypic5}/>
        </div>
        </div>
    </main>
  );
}

export default Recomend;

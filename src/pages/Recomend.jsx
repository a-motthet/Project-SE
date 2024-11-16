import React, { useState } from "react";
import mypic1 from "../images/4.jpg";
import mypic2 from "../images/3.jpg";
import mypic3 from "../images/6.jpg";
import mypic4 from "../images/8.jpg";
import mypic5 from "../images/7.jpg";
import { useNavigate } from "react-router-dom";

function Recomend() {
  const [currentComponent, setCurrentComponent] = useState("home");
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const RecommendedItem = ({ title, path, imgSrc }) => (
    <div
      className="bg-gray-100 rounded-lg flex flex-col items-center transition-transform duration-300 hover:scale-105 w-[220px] h-[220px] my-[15px] mx-[100px]"
      onClick={() => handleNavigation(path)}
    >
      <img
        src={imgSrc}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover mb-2 my-[35px]"
      />
      <h4 className="font-semibold mb-4">{title}</h4>
    </div>
  );

  return (
    <>
      <div className="bg-white ml-[320px] mr-[320px] h-[250px] rounded-large">
        <div className="mt-5">
          <div className="grid grid-cols-3 my-5">
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
              path="/pet-insernace"
              imgSrc={mypic3}
            />
          </div>
        </div>
      </div>
      <div className="bg-white ml-[320px] mr-[320px] h-[250px] rounded-large">
        <div className="mt-5">
          <div className="grid grid-cols-3 my-5">
            <RecommendedItem
              title="คลินิกรักษาใกล้เคียง"
              path="/clinicNear"
              imgSrc={mypic4}
            />
            <RecommendedItem
              title="แนะนำโภชนาการ"
              path="/pet-benfit"
              imgSrc={mypic5}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Recomend;

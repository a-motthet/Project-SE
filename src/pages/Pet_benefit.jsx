import React, { useState } from "react";
import PetHead from "./PetHead";
import CircleCard from "./CircleCard";
import mypic from "../images/2.jpg";
import PetCenter from "./PetCenter";
import PetFoodInfo from "./PetFoodInfo";

const PetProfile = () => {
  const [ageGroup, setAgeGroup] = useState('อาหารตามวัย'); // กำหนดค่าเริ่มต้นเป็น 'อาหารตามวัย'

  const handleAgeChange = (newAgeGroup) => {
    setAgeGroup(newAgeGroup); // เมื่อเลือกช่วงอายุ จะอัปเดตค่า state
  };

  return (
    <div className="py-4 flex flex-col items-center">
      <div className="w-11/12 md:w-3/4 lg:w-1/2 space-y-6">
        <div className="rounded-lg p-4 flex items-start space-x-4">
          <PetHead />
        </div>
        
        {/* ส่งค่า ageGroup และ handleAgeChange ไปยัง PetCenter */}
        <PetCenter ageGroup={ageGroup} onAgeChange={handleAgeChange} />
        
        {/* ส่งค่า ageGroup ไปยัง PetFoodInfo */}
        <PetFoodInfo ageGroup={ageGroup} />
      </div>
    </div>
  );
};

export default PetProfile;

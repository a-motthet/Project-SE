import React from 'react';

const PetCenter = ({ ageGroup, onAgeChange }) => {
  const handleAgeChange = (event) => {
    onAgeChange(event.target.value); // ส่งค่าที่เลือกไปยัง PetProfile
  };

  return ( 
      <div className="bg-white p-4 rounded-lg shadow w-[95%] lg:w-[900px] mt-4 mx-auto">
          <div className="flex items-center justify-between">
            {/* แสดงผลข้อความที่เลือก */}
            <h3 className="text-lg text-[#6373B7] font-bold">{ageGroup}</h3>

            {/* Dropdown สำหรับเลือกช่วงอายุ */}
            <select 
              value={ageGroup} 
              onChange={handleAgeChange} 
              className="px-4 py-2 border rounded-lg"
            >
              <option value="อาหารตามวัย">อาหารตามวัย</option>
              <option value="7 ปีขึ้นไป">7 ปีขึ้นไป</option>
              <option value="3-6 ปี">3-6 ปี</option>
              <option value="1-2 ปี">1-2 ปี</option>
              <option value="0-1 ปี">0-1 ปี</option>
            </select>
          </div>
      </div>
  );
};

export default PetCenter;

import React from "react";

const PetFoodInfo = ({ ageGroup }) => {
  let foodInfo;

  // เชื่อมโยงข้อมูลอาหารตามช่วงอายุ
  if (ageGroup === '7 ปีขึ้นไป') {
    foodInfo = (
      <>
        <p className="text-lg mt-2">
          ลักษณะอาหาร : ควรให้ความสำคัญกับสูตรโภชนาการที่เหมาะสมกับวัยของแมวอาหารแมวสำเร็จรูปสูตรสุขภาพ (cat food) ที่มีสัดส่วนโปรตีน วิตามิน และแร่ธาตุที่ครบถ้วน โดยควรเลือกชนิดที่มีคุณภาพดีและมีความสดใหม่ เช่น อาหารกระป๋องหรืออาหารในถุงบรรจุ
        </p>
        <p className="text-lg mt-4">
          การให้อาหารแห้งและอาหารเปียกสลับกัน จะช่วยกระตุ้นน้ำลายและการดื่มน้ำของแมว ซึ่งเป็นเรื่องสำคัญเนื่องจากแมวสูงวัยมักจะดื่มน้ำน้อยลง ควรแบ่งมื้ออาหารเป็น 2-3 มื้อต่อวัน เนื่องจากแมวสูงอายุจะมีความต้องการอาหารที่ลดลง แต่ต้องได้รับอย่างสม่ำเสมอ
        </p>
      </>
    );
  } else if (ageGroup === '3-6 ปี') {
    foodInfo = (
      <>
        <p className="text-lg mt-2">
          ลักษณะอาหาร : เลือกอาหารที่มีโปรตีนสูงและมีไขมันปานกลาง เพื่อสนับสนุนพลังงานและการเจริญเติบโตของแมวในช่วงวัยนี้
        </p>
        <p className="text-lg mt-4">
          ควรให้อาหารเป็นมื้อเล็กๆ หลายๆ มื้อ และให้การออกกำลังกายที่เหมาะสมเพื่อรักษาน้ำหนักตัว
        </p>
      </>
    );
  } else if (ageGroup === '1-2 ปี') {
    foodInfo = (
      <>
        <p className="text-lg mt-2">
          ลักษณะอาหาร : อาหารที่มีโปรตีนและไขมันสูงเพื่อสนับสนุนการเจริญเติบโตและพลังงานของแมวในวัยหนุ่มสาว
        </p>
        <p className="text-lg mt-4">
          ควรให้อาหารที่มีความหลากหลายและให้การออกกำลังกายที่เพียงพอเพื่อการพัฒนาอย่างเต็มที่
        </p>
      </>
    );
  } else if (ageGroup === '0-1 ปี') {
    foodInfo = (
      <>
        <p className="text-lg mt-2">
          ลักษณะอาหาร : ควรเลือกอาหารสูตรสำหรับลูกแมวที่มีโปรตีนสูงและแร่ธาตุที่เหมาะสมกับการเจริญเติบโต
        </p>
        <p className="text-lg mt-4">
          แนะนำให้อาหารลูกแมวเป็นมื้อเล็กๆ หลายๆ มื้อและให้การดูแลสุขภาพที่ดีตั้งแต่เริ่มต้น
        </p>
      </>
    );
  } else {
    foodInfo = (
      <>
        <p className="text-lg mt-2">
          โปรดเลือกช่วงอายุเพื่อดูข้อมูลเกี่ยวกับอาหารของแมว
        </p>
      </>
    );
  }

  return (
    <div className="bg-white p-5 rounded-lg shadow w-[95%] lg:w-[900px] mt-4 mx-auto">
      <div className="text-[#6373B7]">
        {foodInfo}
      </div>
    </div>
  );
};

export default PetFoodInfo;

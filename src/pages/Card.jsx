import React from 'react';
import mypic from "../images/2.jpg";

const Card = () => {
  return (
    <div className="md:px-0 ml-0"> 
        <div className="bg-[#6373B7] p-9 shadow-md flex items-center gap-4 flex-row-reverse border-b-2 rounded-b-lg text-left">
          <img
            src={mypic}
            alt="Welcome"
            className="w-40 h-40 rounded-full object-cover"
          />
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">
              ยินดีต้อนรับสู่ Animalover แพลตฟอร์มการดูแลสุขภาพสัตว์เลี้ยงครบวงจร
            </h2>
            <p className="text-white mt-2 whitespace-pre-line">
            ที่ Animalover เราเข้าใจถึงความสำคัญของการดูแลสัตว์เลี้ยงที่คุณรัก
            ไม่ว่าจะเป็นสุนัข แมว หรือสัตว์เลี้ยงชนิดอื่นๆ
            เราจึงสร้างแพลตฟอร์มที่ออกแบบมาเพื่อช่วยให้
            เจ้าของสัตว์เลี้ยงสามารถติดตามและดูแลสุขภาพของสัตว์เลี้ยงได้อย่างง่ายดาย
            </p>
          </div>
        </div>
    </div>
  )
}

export default Card;

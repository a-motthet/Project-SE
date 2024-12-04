import React from "react";
import mypic from "../images/2.jpg";

const Welcome = () => {
  return (
    <>
      <div className="flex bg-color-b rounded-b-large">
        <div className="md:ml-[320px] my-10 ml-auto">
          <p className="justify-items-start text-white text-[30px] my-10 font-bold font-sans">
            ยินดีต้อนรับสู่ Animalover <br />
            แพลตฟอร์มการดูแลสุขภาพสัตว์เลี้ยงครบวงจร
          </p>
          <p className="justify-items-start text-white text-[20px] font-sans">
            ที่ Animalover เราเข้าใจถึงความสำคัญของการดูแลสัตว์เลี้ยงที่คุณรัก
            <br />
            ไม่ว่าจะเป็นสุนัข แมว หรือสัตว์เลี้ยงชนิดอื่นๆ
            เราจึงสร้างแพลตฟอร์มที่ออกแบบมาเพื่อช่วยให้ <br />
            เจ้าของสัตว์เลี้ยงสามารถติดตามและดูแลสุขภาพของสัตว์เลี้ยงได้อย่างง่ายดาย
          </p>
        </div>
        <img src={mypic} className="ml-48 w-72 h-72 my-10" />
      </div>
    </>
  );
};

export default Welcome;

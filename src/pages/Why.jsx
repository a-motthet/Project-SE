import React from "react";
import mypic2 from "../images/cat-sleep.png";
import mypic3 from "../images/exploration.png";
import mypic4 from "../images/contact-us.png";
import mypic5 from "../images/care.png";

function WHY() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center mx-auto md:mx-[320px] space-y-8 bg-color-box text-black rounded-lg shadow-lg p-4 font-sans relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 opacity-20 blur-3xl"></div>

      <p className="text-lg text-white text-center max-w-3xl font-semibold animate-fade-in">
        เราพัฒนาบริการเพื่อตอบโจทย์เจ้าของสัตว์เลี้ยง
        ช่วยคุณดูแลสัตว์เลี้ยงได้อย่างมีประสิทธิภาพและสะดวกมากยิ่งขึ้น
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Box 1 */}
        <div className="relative bg-white p-8 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out transform flex flex-col items-center text-center border border-purple-300 hover:shadow-purple-500/50 group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-transparent to-purple-500 opacity-10 rounded-lg blur-lg group-hover:blur-xl"></div>
          <img
            src={mypic2}
            alt="Convenience Icon"
            className="mb-4 w-24 h-24 rounded-full border-4 border-purple-300 animate-bounce group-hover:animate-pulse"
          />
          <h2 className="text-purple-700 font-bold text-xl mb-2 group-hover:text-purple-900">
            ความสะดวกสบายสำหรับคุณ
          </h2>
          <p className="text-gray-700 mb-4">
            ผู้ใช้สามารถสร้างและจัดการโปรไฟล์สัตว์เลี้ยงได้ด้วยตนเองตลอดเวลา
            <br />
            ระบบติดตามสุขภาพและโภชนาการช่วยให้ผู้ใช้ดูแลสัตว์เลี้ยงได้ง่ายขึ้น
          </p>
          <ul className="text-gray-600 text-sm list-disc list-inside group-hover:text-gray-900">
            <li>สร้างโปรไฟล์สัตว์เลี้ยงแบบละเอียด</li>
            <li>แจ้งเตือนสุขภาพที่สำคัญ</li>
            <li>เครื่องมือติดตามโภชนาการที่ใช้งานง่าย</li>
          </ul>
        </div>

        {/* Box 2 */}
        <div className="relative bg-white p-8 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out transform flex flex-col items-center text-center border border-purple-300 hover:shadow-purple-500/50 group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-transparent to-purple-500 opacity-10 rounded-lg blur-lg group-hover:blur-xl"></div>
          <img
            src={mypic3}
            alt="Data Icon"
            className="mb-4 w-24 h-24 rounded-full border-4 border-purple-300 animate-bounce group-hover:animate-pulse"
          />
          <h2 className="text-purple-700 font-bold text-xl mb-2 group-hover:text-purple-900">
            ความครอบคลุมของข้อมูล
          </h2>
          <p className="text-gray-700 mb-4">
            มีข้อมูลพื้นฐานเกี่ยวกับการดูแลสัตว์เลี้ยงที่ครบถ้วนทั้งการให้คำแนะนำเกี่ยวกับโภชนาการ
            และสุขภาพ
          </p>
          <ul className="text-gray-600 text-sm list-disc list-inside group-hover:text-gray-900">
            <li>คู่มือการเลี้ยงสัตว์เลี้ยง</li>
            <li>ข้อมูลสายพันธุ์และพฤติกรรม</li>
            <li>แนะนำอาหารที่เหมาะสม</li>
          </ul>
        </div>

        {/* Box 3 */}
        <div className="relative bg-white p-8 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out transform flex flex-col items-center text-center border border-purple-300 hover:shadow-purple-500/50 group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-transparent to-purple-500 opacity-10 rounded-lg blur-lg group-hover:blur-xl"></div>
          <img
            src={mypic4}
            alt="Service Icon"
            className="mb-4 w-24 h-24 rounded-full border-4 border-purple-300 animate-bounce group-hover:animate-pulse"
          />
          <h2 className="text-purple-700 font-bold text-xl mb-2 group-hover:text-purple-900">
            การเข้าถึงบริการที่เกี่ยวข้อง
          </h2>
          <p className="text-gray-700 mb-4">
            สามารถค้นหาคลินิคได้โดยตรง
            <br />
            แสดงข้อมูลและรีวิวของคลินิกสัตวแพทย์และร้านค้าต่างๆ
          </p>
          <ul className="text-gray-600 text-sm list-disc list-inside group-hover:text-gray-900">
            <li>เเนะนำคลินิกสัตวแพทย์</li>
            <li>อ่านรีวิวและคะแนนจากผู้ใช้งาน</li>
          </ul>
        </div>

        {/* Box 4 */}
        <div className="relative bg-white p-8 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out transform flex flex-col items-center text-center border border-purple-300 hover:shadow-purple-500/50 group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-transparent to-purple-500 opacity-10 rounded-lg blur-lg group-hover:blur-xl"></div>
          <img
            src={mypic5}
            alt="Community Icon"
            className="mb-4 w-24 h-24 rounded-full border-4 border-purple-300 animate-bounce group-hover:animate-pulse"
          />
          <h2 className="text-purple-700 font-bold text-xl mb-2 group-hover:text-purple-900">
            ชุมชนของคนรักสัตว์
          </h2>
          <p className="text-gray-700 mb-4">
            สร้างสังคมออนไลน์สำหรับเจ้าของสัตว์เลี้ยง
            <br />
            แชร์เคล็ดลับการดูแลและเรื่องราวน่ารักเกี่ยวกับสัตว์เลี้ยง
          </p>
          <ul className="text-gray-600 text-sm list-disc list-inside group-hover:text-gray-900">
            <li>ฟอรั่มสำหรับเจ้าของสัตว์เลี้ยง</li>
            <li>แชร์รูปภาพและเคล็ดลับ</li>
          </ul>
        </div>
      </div>

      {/* Closing Message */}
      <div className="text-center text-gray-800 bg-purple-200 p-6 rounded-lg max-w-3xl shadow-lg animate-fade-in">
        <p className="text-lg font-semibold">
          ดังนั้นเราจะช่วยให้คุณสามารถดูแลเอาใจใส่สัตว์เลี้ยงได้อย่างมีประสิทธิภาพ
          ทั้งในด้านสุขภาพ โภชนาการและการเข้าถึงบริการที่จำเป็น
        </p>
      </div>
    </div>
  );
}

export default WHY;

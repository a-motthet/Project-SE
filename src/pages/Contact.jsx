import React, { useState, useEffect } from "react";
import { FaPhone, FaClock, FaBuilding, FaLine } from "react-icons/fa";
import mypic from "../images/2.jpg";
import qrCode from "../images/qrcode.png";

const ContactSection = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    setIsPopupVisible(true); 
  }, []);

  return (
    <div className="flex items-center justify-center bg-[#EBE4F2] font-sans p-4 m-8">
      <div className="flex flex-col lg:flex-row items-start bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full gap-6">
        <div className="lg:w-1/2 px-6 text-justify">
          <h1 className="text-gray-800 text-xl mb-6 leading-relaxed">
            หากคุณต้องการสอบถามข้อมูลเพิ่มเติมเกี่ยวกับผลิตภัณฑ์หรือต้องการความช่วยเหลือเกี่ยวกับเว็บไซต์ กรุณาติดต่อ
          </h1>
          <ul className="text-gray-600 space-y-4">
            <li className="flex items-start">
              <FaBuilding className="text-gray-500 mr-3 mt-1" />
              <span className="leading-relaxed whitespace-normal">
                <strong>บริษัท:</strong> จูเเนนเซอร์วิส จำกัด
              </span>
            </li>
            <li className="flex items-start">
              <FaPhone className="text-gray-500 mr-3 mt-1" />
              <span className="leading-relaxed">
                <strong>เบอร์โทร:</strong> 02-xxx-xxxx, 09x-xxx-xxxx
              </span>
            </li>
            <li className="flex items-start">
              <FaClock className="text-gray-500 mr-3 mt-1" />
              <span className="leading-relaxed whitespace-normal">
                <strong>เวลาทำการ:</strong> จันทร์ - วันศุกร์ เวลา 8.30 - 17.00 น.
              </span>
            </li>
            <li className="flex items-start">
              <FaLine className="text-green-500 mr-3 mt-1" />
              <span className="leading-relaxed whitespace-normal">
                <strong>LINE:</strong> @Animalover
              </span>
            </li>
          </ul>
        </div>

        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src={mypic}
            alt="Contact"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>

      {/* QR Code Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center relative">
            <button
              onClick={() => setIsPopupVisible(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ปิด
            </button>
            <h2 className="text-red-500 font-bold mb-4 text-lg leading-relaxed">
              เพื่อความสะดวกรวดเร็ว กรุณาแอดไลน์เพื่อติดต่อสอบถาม <br />เจ้าเเนน เจ้าจู
            </h2>
            <img src={qrCode} alt="LINE QR Code" className="mx-auto max-w-xs" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;

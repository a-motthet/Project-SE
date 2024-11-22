import React, { useState } from "react";

export default function VaccinationForm() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsPopupVisible(true);
  };

  const NotificationPopup = ({ onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25">
      <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center">
        <h2 className="text-color-b text-lg font-bold mb-2">แจ้งเตือน</h2>
        <p className="text-color-b mb-4">เพิ่มข้อมูลสำเร็จ</p>
        <button
          onClick={onClose}
          className="bg-color-b text-white px-4 py-2 rounded-md hover:bg-color-holdber "
        >
          ยืนยัน
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center font-sans">
      <div className="bg-white shadow-md rounded-large p-8 w-full max-w-screen-lg">
        <h2 className="text-color-b text-3xl font-bold mb-4 ">
          ประวัติการฉีดวัคซีน :
        </h2>
        <form onSubmit={handleFormSubmit}>
          {/* วัคซีน */}
          <div className="mb-4">
            <label
              className="block text-color-b text-2xl mb-2"
              htmlFor="vaccine"
            >
              วัคซีน
            </label>
            <input
              type="text"
              id="vaccine"
              className="w-full px-3 py-4 border rounded-large text-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-color-b focus:border-transparent"
              placeholder="โปรดระบุชื่อวัคซีน"
            />
          </div>
          <div className="grid grid-cols-2 gap-32 mb-2 ">
            {/* วันที่ฉีดวัคซีน */}
            <div className="mb-4">
              <label
                className="block text-color-b text-2xl mb-2"
                htmlFor="vaccineDate"
              >
                วันที่ที่ฉีดวัคซีน
              </label>
              <input
                type="date"
                id="vaccineDate"
                className="w-full px-3 py-4 border rounded-large text-xl text-color-box shadow-sm focus:outline-none focus:ring-2 focus:ring-color-b focus:border-transparent"
              />
            </div>

            {/* วันหมดอายุ */}
            <div className="mb-4">
              <label
                className="block text-color-b text-2xl mb-2"
                htmlFor="expiryDate"
              >
                วันหมดอายุ
              </label>
              <input
                type="date"
                id="expiryDate"
                className="w-full px-3 py-4 border rounded-large text-xl text-color-box shadow-sm focus:outline-none focus:ring-2 focus:ring-color-b focus:border-transparent"
              />
            </div>
          </div>
          <h2 className="text-color-b text-3xl font-bold mb-4 ">
            ประวัติการตรวจสุขภาพ :
          </h2>

          {/* วันที่ตรวจสุขภาพ */}
          <div className="mb-4">
            <label
              className="block text-color-b text-2xl mb-2"
              htmlFor="checkupDate"
            >
              วันที่ตรวจสุขภาพ:
            </label>
            <input
              type="date"
              id="checkupDate"
              className="w-auto px-3 py-4 border rounded-large text-xl text-color-box shadow-sm focus:outline-none focus:ring-2 focus:ring-color-box focus:border-transparent"
            />
          </div>

          {/* ข้อมูลเพิ่มเติม */}
          <div className="mb-4">
            <label
              className="block text-color-b text-2xl mb-2"
              htmlFor="additionalInfo"
            >
              ข้อมูลเพิ่มเติม:
            </label>
            <textarea
              id="additionalInfo"
              rows="4"
              className="w-full px-3 py-4 border rounded-large shadow-sm focus:outline-none focus:ring-2 focus:ring-color-box focus:border-transparent"
              placeholder="ใส่ข้อมูลเพิ่มเติม..."
            ></textarea>
          </div>

          {/* ปุ่มบันทึกข้อมูล */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-auto bg-color-b text-white text-xl py-4 px-4 rounded-large hover:bg-color-holdber transition"
            >
              บันทึกข้อมูล
            </button>
          </div>
        </form>
      </div>

      {/* แสดง NotificationPopup */}
      {isPopupVisible && (
        <NotificationPopup onClose={() => setIsPopupVisible(false)} />
      )}
    </div>
  );
}

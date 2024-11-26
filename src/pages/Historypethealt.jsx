import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function HealtPetform() {
  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const { id } = useParams();
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsPopupVisible(true);
  };

  const NotificationPopup = ({ onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 font-sans">
      <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center">
        <h2 className="text-color-b text-lg font-bold mb-2">แจ้งเตือน</h2>
        <p className="text-color-b mb-4">เพิ่มข้อมูลสำเร็จ</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-color-b text-white px-4 py-2 rounded-md hover:bg-color-holdber "
        >
          ยืนยัน
        </button>
      </div>
    </div>
  );

  const NotificationPopup_error = ({ type, message, onClose }) => {
    const isError = type === "error";
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25">
        <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center">
          <h2
            className={`text-lg mb-2 ${
              isError ? "text-red-400" : "text-green-400"
            }`}
          >
            {isError ? "แจ้งเตือนข้อผิดพลาด" : "แจ้งเตือนความสำเร็จ"}
          </h2>
          <p className={`mb-4 ${isError ? "text-red-400" : "text-green-400"}`}>
            {message}
          </p>
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-large text-white ${
              isError
                ? "bg-red-400 hover:bg-red-200"
                : "bg-green-400 hover:bg-green-200"
            }`}
          >
            ยืนยัน
          </button>
        </div>
      </div>
    );
  };

  const addhistory = () => {
    const token = localStorage.getItem("token");
  
    if (!date) {
      setPopupMessage("กรุณากรอกข้อมูลให้ครบถ้วน");
      setIsErrorPopupVisible(true);
      return;
    }
  
    axios
      .post(
        `http://localhost:3001/addHistory/${id}`,
        {
          date: date,
          note: note,
        }, // ส่งเป็น JSON
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // ใช้ JSON
          },
        }
      )
      .then(() => {
        console.log("เพิ่มประวัติการตรวจสุขภาพสำเร็จ");
        setPopupMessage("เพิ่มประวัติการตรวจสุขภาพสำเร็จ");
        setIsPopupVisible(true); // แสดง Popup สำเร็จ
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาด: ", error);
        setPopupMessage("ไม่สามารถเพิ่มประวัติการตรวจสุขภาพได้ กรุณาตรวจสอบข้อมูลอีกครั้ง");
        setIsErrorPopupVisible(true);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans">
      {isErrorPopupVisible && (
        <NotificationPopup_error
          type="error"
          message={popupMessage}
          onClose={() => setIsErrorPopupVisible(false)}
        />
      )}
      {/* แสดง NotificationPopup */}
      {isPopupVisible && (
        <NotificationPopup onClose={() => setIsPopupVisible(false)} />
      )}
      <div className="bg-white shadow-md rounded-large p-8 w-full max-w-screen-lg">
        <form>
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
              onChange={(e) => setDate(e.target.value)}
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
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>

          {/* ปุ่มบันทึกข้อมูล */}
          <div className="flex items-center justify-center">
            <button
              onClick={(e) => {
                e.preventDefault(); // หยุดการ reload หน้า
                addhistory();
              }}
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

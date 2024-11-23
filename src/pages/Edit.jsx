import React, { useState } from "react";

function Edit() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const NotificationPopup = ({ onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25">
      <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center">
        <h2 className="text-color-b text-lg font-bold mb-2">แจ้งเตือน</h2>
        <p className="text-color-b mb-4">เพิ่มข้อมูลสำเร็จ</p>
        <button
          onClick={onClose}
          className="bg-color-b text-white px-4 py-2 rounded-md hover:bg-color-holdber"
        >
          ยืนยัน
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100 font-sans">
      <div className="bg-white shadow-lg rounded-lg w-[90%] max-w-[600px] p-8">
        {/* Title */}
        <h1 className="text-center text-xl font-bold text-color-b mb-8">
          จัดการโปรไฟล์
        </h1>

        {/* Form */}
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setIsPopupVisible(true);
          }}
        >
          {/* ชื่อ-นามสกุล */}
          <div>
            <label
              htmlFor="firstname"
              className="block text-color-b font-medium font-sans"
            >
              ชื่อ-นามสกุล
            </label>
            <input
              id="Fullname"
              type="text"
              placeholder="Fullname"
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-color-b focus:border-transparent"
              required
            />
          </div>

          {/* เบอร์โทรศัพท์ */}
          <div>
            <label
              htmlFor="phone"
              className="block text-color-b font-medium font-sans"
            >
              เบอร์โทรศัพท์
            </label>
            <div className="relative">
              <input
                id="phone"
                type="text"
                placeholder="Phone"
                className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-color-b focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* อีเมล */}
          <div>
            <label htmlFor="email" className="block text-color-b font-medium">
              อีเมล
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-color-b focus:border-transparent"
              required
            />
          </div>

          {/* รหัสผ่าน */}
          <div>
            <label
              htmlFor="password"
              className="block text-color-b font-medium"
            >
              รหัสผ่าน
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-color-b focus:border-transparent"
              required
            />
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full mt-2 px-4 py-2 border rounded-large bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-color-b focus:border-transparent"
              required
            />
          </div>

          {/* ปุ่มแก้ไข */}
          <div className="text-center justify-self-center">
            <button
              type="submit"
              className="bg-color-b text-white font-medium px-6 py-2 rounded-large hover:bg-color-holdber flex items-center justify-center space-x-2"
            >
              <span>แก้ไข</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.131 19.582a4.5 4.5 0 01-1.697 1.09l-3.508 1.253 1.253-3.508a4.5 4.5 0 011.09-1.697L16.862 3.487z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      {isPopupVisible && (
        <NotificationPopup onClose={() => setIsPopupVisible(false)} />
      )}
    </div>
  );
}

export default Edit;

import React, { useState,useEffect} from 'react';
import mypic from '../images/2.jpg';

const NotificationPopup = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25">
    <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center">
      <h2 className="text-[#6373B7] text-lg font-bold mb-2">📢 แจ้งเตือน</h2>
      <p className="text-[#6373B7] mb-4">เพิ่มสัตว์เลี้ยงของท่านเสร็จสิ้น</p>
      <button
        onClick={onClose}
        className="bg-[#6373B7] text-white px-4 py-2 rounded-md"
      >
        ยืนยัน
      </button>
    </div>
  </div>
);

const Addpet = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [petName, setPetName] = useState('สมหมาย');
    const [petType, setPetType] = useState('แมว');
    const [petSex, setPetSex] = useState('ชาย');
    const [petAge, setPetAge] = useState('2 ปี');
    const [petWeight, setPetWeight] = useState('200 กิโลกรัม');
    const [birthdate, setBirthdate] = useState('xx-xx-xxxx');
    const [note, setNote] = useState('น้องสมหมายชอบน่ารักของ มารี่');
    const [editPetType, setEditPetType] = useState(petType);
    const [showWeightInput, setShowWeightInput] = useState(false);
    const [birthdateOption, setBirthdateOption] = useState('exact');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [ageYears, setAgeYears] = useState('');
    const [ageMonths, setAgeMonths] = useState('');
    const [profilePic, setProfilePic] = useState(mypic);
    

  const calculateAge = (birthdate) => {
    const birth = new Date(birthdate);
    const today = new Date();
  
    let ageYears = today.getFullYear() - birth.getFullYear();
    let ageMonths = today.getMonth() - birth.getMonth();
  
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }
  
    return { ageYears, ageMonths };
  };

  const toggleEditMode = () => {
    if (isEditing) {
      setPetType(editPetType);
      setPetWeight(petWeight);
    }
    setShowNotification(true); // แสดงการแจ้งเตือนทุกครั้ง
    setIsEditing(!isEditing);
  };
  

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (birthdateOption === 'exact' && selectedDay && selectedMonth && selectedYear) {
      const formattedBirthdate = new Date(selectedYear, selectedMonth - 1, selectedDay);
      setBirthdate(formattedBirthdate.toLocaleDateString('th-TH')); // เปลี่ยนให้แสดงวันที่ในรูปแบบไทย
      const { ageYears, ageMonths } = calculateAge(formattedBirthdate);
      setPetAge(`${ageYears} ปี ${ageMonths} เดือน`);
    }
  }, [selectedDay, selectedMonth, selectedYear, birthdateOption]);
  
  useEffect(() => {
    if (birthdateOption === 'approximate' && ageYears && ageMonths) {
      setPetAge(`${ageYears} ปี ${ageMonths} เดือน`);
    }
  }, [ageYears, ageMonths, birthdateOption]);

  return (
    <div className="bg-[#EBE4F2]  flex flex-col items-center">
      <div className="container mx-auto p-8 flex flex-col items-center">
        <div className="p-6 bg-white rounded-lg shadow-xl flex flex-col lg:flex-row items-center w-full sm:w-3/5 lg:w-3/5">
          <div className="lg:w-2/3 w-full lg:pr-8">
            <h2 className="text-[#6373B7] text-xl font-bold mb-4 font-sans">เพิ่มสัตว์เลี้ยงของท่าน</h2>
            <div className="w-full mb-4">
              <label className="block text-[#6373B7] mb-1 font-sans">ชื่อสัตว์เลี้ยง:</label>
              <input
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-md"
              />
            </div>
            <div className="w-full mb-4">
              <label className="block text-[#6373B7] mb-1 font-sans">สัตว์เลี้ยง:</label>
              <div className="flex space-x-6">
                {["หมา", "แมว",].map((type) => (
                  <button
                    key={type}
                    onClick={() => setEditPetType(type)}
                    className={`px-4 py-2 rounded-md ${
                      editPetType === type ? "bg-[#6373B7] text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full mb-4">
                  <label className="block text-[#6373B7] mb-1 font-sans">เพศ:</label>
                  <div className="flex space-x-6">
                    {["ชาย", "หญิง"].map((sex) => (
                      <button
                        key={sex}
                        onClick={() => setPetSex(sex)}
                        className={`px-4 py-2 rounded-md ${petSex === sex ? "bg-[#6373B7] text-white" : "bg-gray-200 text-gray-700"}`}
                      >
                        {sex}
                      </button>
                    ))}
                  </div>
                </div>
            <div className="w-full mb-4">
              <label className="block text-[#6373B7] mb-1 font-sans">น้ำหนักของสัตว์เลี้ยง:</label>
              {showWeightInput ? (
                <input
                  type="text"
                  value={petWeight}
                  onChange={(e) => setPetWeight(e.target.value)}
                  className="w-full p-3 border-2 border-gray-300 rounded-md"
                />
              ) : (
                <button
                  onClick={() => setShowWeightInput(true)}
                  className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
                >
                  กรอกน้ำหนัก
                </button>
              )}
            </div>
            <div className="w-full mb-4">
              <p className="block text-[#6373B7] mb-1 font-sans">อายุของสัตว์เลี้ยง:</p>
              <p className="block text-[#6373B7] mb-1 font-sans">หากคุณไม่ทราบวันเดือนปีเกิด กรุณาเลือกอายุโดยประมาณ ในช่อง 'อายุโดยประมาณ'</p>
            </div>

            <div className="w-full mb-4">
      <label className="block text-[#6373B7] mb-1 font-sans">วันเกิดของสัตว์เลี้ยง:</label>
      <div className="mb-2">
        <label className="mr-4 text-[#6373B7] font-sans">
          <input 
            type="radio" 
            name="birthdateOption" 
            value="approximate" 
            checked={birthdateOption === 'approximate'}
            onChange={() => setBirthdateOption('approximate')} 
            className="mr-2 "
          />
          อายุโดยประมาณ
        </label>
        <label className="text-[#6373B7] font-sans">
          <input 
            type="radio" 
            name="birthdateOption" 
            value="exact" 
            checked={birthdateOption === 'exact'}
            onChange={() => setBirthdateOption('exact')} 
            className="mr-2"
          />
          อายุที่แน่ชัด
        </label>
      </div>

      {birthdateOption === 'exact' ? (
        <div className="flex space-x-2">
          {/* Dropdown สำหรับวัน */}
          <select 
            value={selectedDay} 
            onChange={(e) => setSelectedDay(e.target.value)} 
            className="w-1/3 p-3 border-2 border-gray-300 rounded-md"
          >
            <option value="">วัน</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          {/* Dropdown สำหรับเดือน */}
          <select 
            value={selectedMonth} 
            onChange={(e) => setSelectedMonth(e.target.value)} 
            className="w-1/3 p-3 border-2 border-gray-300 rounded-md"
          >
                <option value="">เดือน</option>
                {[
                  "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", 
                  "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", 
                  "พฤศจิกายน", "ธันวาคม"
                ].map((month, index) => (
                  <option key={index + 1} value={index + 1}>
                    {month}
                  </option>
                ))}
              </select>

                {/* Dropdown สำหรับปี */}
                <select 
                  value={selectedYear} 
                  onChange={(e) => setSelectedYear(e.target.value)} 
                  className="w-1/3 p-3 border-2 border-gray-300 rounded-md"
                >
                  <option value="">ปี</option>
                  {Array.from({ length: 50 }, (_, i) => (
                    <option key={i} value={new Date().getFullYear() - i}>
                      {new Date().getFullYear() - i}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
                  <div className="flex space-x-2">
                    <input 
                      type="number" 
                      placeholder="ปี" 
                      value={ageYears} 
                      onChange={(e) => setAgeYears(e.target.value)} 
                      className="w-1/3 p-3 border-2 border-gray-300 rounded-md"
                      min="0"
                    />
                    <input 
                      type="number" 
                      placeholder="เดือน" 
                      value={ageMonths} 
                      onChange={(e) => setAgeMonths(e.target.value)} 
                      className="w-1/3 p-3 border-2 border-gray-300 rounded-md"
                      min="0" 
                      max="11"
                    />
                  </div>
                )}
              </div>
              <div className="w-full mb-4">
                  <label className="block text-[#6373B7] mb-1 font-sans">หมายเหตุ:</label>
                  <textarea 
                    value={note} 
                    onChange={(e) => setNote(e.target.value)} 
                    className="w-full p-3 border-2 border-gray-300 rounded-md"
                  />
                </div>
            <button
              onClick={toggleEditMode}
              className="w-full bg-[#6373B7] text-white p-3 rounded-md mt-4 px-12 font-sans"
            >
              เพิ่มสัตว์เลี้ยงของท่าน
            </button>
          </div>

          <div className="lg:w-1/3 w-full lg:pr-8 flex flex-col items-center lg:order-last order-first">
            <div className="relative w-50 h-50 rounded-full flex items-center justify-center mb-10">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
              <label className="absolute bottom-0 right-0 bg-white p-2 px-3 rounded-full shadow-md cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 flex items-center justify-center text-[#6373B7] font-semibold text-sm">
                Upload
                <input
                  type="file"
                  onChange={handleProfilePicChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      {showNotification && (
        <NotificationPopup onClose={() => setShowNotification(false)} />
      )}
    </div>
  );
};

export default Addpet;

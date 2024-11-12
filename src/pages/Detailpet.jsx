import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import mypic from '../images/2.jpg';
import { IoTrash } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";

const Detailpet = () => {
  const { id } = useParams(); 

  const [petName, setPetName] = useState('เเมว');
  const [PetSex, setPetSex] = useState('ชาย');
  const [petAge, setPetAge] = useState('2 ปี');
  const [petBreed, setPetBreed] = useState('แมวไทย');
  const [petWeight, setPetWeight] = useState('5 กก.');
  const [petNotes, setPetNotes] = useState('ขี้เล่น');
  const [isEditing, setIsEditing] = useState(false); 

  // For Delete Confirmation
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletePetName, setDeletePetName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'petName') setPetName(value);
    if (name === 'petSex') setPetSex(value);
    if (name === 'petAge') setPetAge(value);
    if (name === 'petBreed') setPetBreed(value);
    if (name === 'petWeight') setPetWeight(value);
    if (name === 'petNotes') setPetNotes(value);
  };

  const toggleEditMode = () => {
    if (isEditing) {
      // When editing is finished, show success message
      alert('แก้ไขสัตว์เลี้ยงเสร็จสิ้น');
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    if (deletePetName === petName) {
      // If the pet name matches, proceed with deletion
      alert('สัตว์เลี้ยงถูกลบเรียบร้อยแล้ว');
      // Insert deletion logic here (e.g., API call)
    } else {
      alert('ชื่อสัตว์เลี้ยงไม่ตรง กรุณาระบุชื่อให้ถูกต้อง');
    }
  };

  return (
    <div className="bg-[#EBE4F2] min-h-screen flex flex-col">
      <div className="container mx-auto p-6 flex flex-col items-center">
        <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row items-center mb-8 w-full sm:w-4/5 lg:w-3/4 xl:w-2/3">
          <img 
            src={mypic} 
            alt={`pet ${id}`} 
            className="w-48 h-48 rounded-full object-cover shadow-md border-4 border-white mb-4 lg:mb-0 lg:mr-6" 
          />
          
          <div className="flex flex-col justify-between w-full text-left lg:w-2/3">
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-gray-600 text-xl font-semibold mb-2">สัตว์เลี้ยงของฉัน - ID: {id}</p>
              <h2 className="text-gray-700 text-lg font-bold mb-4">รายละเอียด</h2>

              {/* Show form or data */}
              {isEditing ? (
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">ชื่อ:</label>
                    <input 
                      type="text" 
                      name="petName" 
                      value={petName} 
                      onChange={handleChange} 
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">เพศ:</label>
                    <input 
                      type="text" 
                      name="petSex" 
                      value={PetSex} 
                      onChange={handleChange} 
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">อายุ:</label>
                    <input 
                      type="text" 
                      name="petAge" 
                      value={petAge} 
                      onChange={handleChange} 
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">สายพันธุ์:</label>
                    <input 
                      type="text" 
                      name="petBreed" 
                      value={petBreed} 
                      onChange={handleChange} 
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">น้ำหนัก:</label>
                    <input 
                      type="text" 
                      name="petWeight" 
                      value={petWeight} 
                      onChange={handleChange} 
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">หมายเหตุ:</label>
                    <textarea 
                      name="petNotes" 
                      value={petNotes} 
                      onChange={handleChange} 
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-gray-600 mb-2">ชื่อ: {petName}</p>
                  <p className="text-gray-600 mb-2">เพศ: {PetSex}</p>
                  <p className="text-gray-600 mb-2">อายุ: {petAge}</p>
                  <p className="text-gray-600 mb-2">สายพันธุ์: {petBreed}</p>
                  <p className="text-gray-600 mb-2">น้ำหนัก: {petWeight}</p>
                  <p className="text-gray-600">หมายเหตุ: {petNotes}</p>
                </div>
              )}
            </div>

            {/* Buttons for Edit and Delete */}
            <div className="flex space-x-4 mt-4 justify-center">
              <button 
                className="bg-[#6373B7] text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 flex items-center"
                onClick={toggleEditMode}
              >
                <HiOutlinePencilAlt className="w-6 h-6" />
                {isEditing ? 'ยืนยันการแก้ไข' : 'แก้ไข'}
              </button>

              {/* Trigger delete confirmation */}
              <button 
                className="bg-[#6373B7] text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 flex items-center"
                onClick={() => setIsDeleting(true)}
              >
                <IoTrash className="w-6 h-6" />
                ลบ
              </button>
            </div>

            {/* Delete Confirmation Modal */}
            {isDeleting && (
              <div className="mt-4 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 text-lg font-semibold">หากลบสัตว์เลี้ยงของท่านแล้วจะไม่สามารถกู้ข้อมูลกลับมาคืนได้</p>
                <p className="text-gray-600 mb-4">โปรดทำการนี้ด้วยความระมัดระวัง</p>
                <label className="block text-gray-600 mb-2">กรุณาระบุชื่อสัตว์เลี้ยงของท่าน:</label>
                <input 
                  type="text" 
                  value={deletePetName} 
                  onChange={(e) => setDeletePetName(e.target.value)} 
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <div className="flex space-x-4 mt-4 justify-center">
                  <button 
                    className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-800"
                    onClick={handleDelete}
                  >
                    ยืนยันการลบ
                  </button>
                  <button 
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800"
                    onClick={() => setIsDeleting(false)}
                  >
                    ยกเลิก
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpet;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import mypic from '../images/2.jpg';
import { IoTrash } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";

const Detailpet = () => {
  const { id } = useParams(); 

  const [petName, setPetName] = useState('เเมว');
  const [petType, setPetType] = useState('แมว');
  const [petSex, setPetSex] = useState('ชาย');
  const [petAge, setPetAge] = useState('2 ปี');
  const [petBreed, setPetBreed] = useState('แมวไทย');
  const [petWeight, setPetWeight] = useState('5 กก.');
  const [petNotes, setPetNotes] = useState('ขี้เล่น');
  const [birthdate, setBirthdate] = useState({ day: '', month: '', year: '' });
  const [isEditing, setIsEditing] = useState(false); 
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletePetName, setDeletePetName] = useState('');
  const [editPetName, setEditPetName] = useState(petName);
  const [editPetType, setEditPetType] = useState(petType);
  const [editPetSex, setEditPetSex] = useState(petSex);
  const [editPetAge, setEditPetAge] = useState(petAge);
  const [editPetBreed, setEditPetBreed] = useState(petBreed);
  const [editPetWeight, setEditPetWeight] = useState(petWeight);
  const [editPetNotes, setEditPetNotes] = useState(petNotes);
  const [editBirthdate, setEditBirthdate] = useState(birthdate);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    if (name === 'petName') setEditPetName(value);
    if (name === 'petType') setEditPetType(value);
    if (name === 'petSex') setEditPetSex(value);
    if (name === 'petAge') setEditPetAge(value);
    if (name === 'petBreed') setEditPetBreed(value);
    if (name === 'petWeight') setEditPetWeight(value);
    if (name === 'petNotes') setEditPetNotes(value);
    if (name === 'birthdateDay') setEditBirthdate(prev => ({ ...prev, day: value }));
    if (name === 'birthdateMonth') setEditBirthdate(prev => ({ ...prev, month: value }));
    if (name === 'birthdateYear') setEditBirthdate(prev => ({ ...prev, year: value }));
  };

    const handleDelete = () => {
      if (deletePetName === petName) {
        alert('สัตว์เลี้ยงถูกลบเรียบร้อยแล้ว');
      } else {
        alert('ชื่อสัตว์เลี้ยงไม่ตรง กรุณาระบุชื่อให้ถูกต้อง');
      }
    };

  const toggleEditMode = () => {
    if (isEditing) {
      setPetName(editPetName);
      setPetType(editPetType);
      setPetSex(editPetSex);
      setPetAge(editPetAge);
      setPetBreed(editPetBreed);
      setPetWeight(editPetWeight);
      setPetNotes(editPetNotes);
      setBirthdate(editBirthdate);
      alert('แก้ไขสัตว์เลี้ยงเสร็จสิ้น');
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col">
      <div className="container mx-auto p-8 flex flex-col items-center">
        <div className="p-6 bg-white rounded-lg shadow-xl flex flex-col lg:flex-row items-center mb-8 w-full sm:w-4/5 lg:w-3/4 xl:w-2/3">
          <img 
            src={mypic} 
            alt={`pet ${id}`} 
            className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white mb-4 lg:mb-0 lg:mr-6" 
          />
          
          <div className="flex flex-col justify-between w-full text-left lg:w-2/3">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 text-xl font-semibold mb-2">สัตว์เลี้ยงของฉัน - ID: {id}</p>
              <h2 className="text-gray-800 text-lg font-bold mb-4">
                {isEditing ? 'แก้ไขรายละเอียดสัตว์เลี้ยง' : 'รายละเอียด'}
              </h2>

              {isEditing ? (
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">ชื่อ:</label>
                    <input 
                      type="text" 
                      name="petName" 
                      value={editPetName} 
                      onChange={handleEditChange} 
                      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">ประเภท:</label>
                    <select 
                      name="petType" 
                      value={editPetType} 
                      onChange={handleEditChange} 
                      className="w-full p-3 border-2 border-gray-300 rounded-md"
                    >
                      <option value="แมว">แมว</option>
                      <option value="หมา">หมา</option>
                      <option value="อื่นๆ">อื่นๆ</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">เพศ:</label>
                    <select 
                      name="petSex" 
                      value={editPetSex} 
                      onChange={handleEditChange} 
                      className="w-full p-3 border-2 border-gray-300 rounded-md"
                    >
                      <option value="ชาย">ชาย</option>
                      <option value="หญิง">หญิง</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">วันเกิด:</label>
                    <div className="flex space-x-2">
                      <input 
                        type="text" 
                        name="birthdateDay" 
                        placeholder="วัน"
                        value={editBirthdate.day}
                        onChange={handleEditChange}
                        className="w-1/3 p-3 border-2 border-gray-300 rounded-md"
                      />
                      <input 
                        type="text" 
                        name="birthdateMonth" 
                        placeholder="เดือน"
                        value={editBirthdate.month}
                        onChange={handleEditChange}
                        className="w-1/3 p-3 border-2 border-gray-300 rounded-md"
                      />
                      <input 
                        type="text" 
                        name="birthdateYear" 
                        placeholder="ปี"
                        value={editBirthdate.year}
                        onChange={handleEditChange}
                        className="w-1/3 p-3 border-2 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">อายุ:</label>
                    <input 
                      type="text" 
                      name="petAge" 
                      value={editPetAge} 
                      onChange={handleEditChange} 
                      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">สายพันธุ์:</label>
                    <input 
                      type="text" 
                      name="petBreed" 
                      value={editPetBreed} 
                      onChange={handleEditChange} 
                      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">น้ำหนัก:</label>
                    <input 
                      type="text" 
                      name="petWeight" 
                      value={editPetWeight} 
                      onChange={handleEditChange} 
                      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">หมายเหตุ:</label>
                    <textarea 
                      name="petNotes" 
                      value={editPetNotes} 
                      onChange={handleEditChange} 
                      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <p>ชื่อ: {petName}</p>
                  <p>ประเภท: {petType}</p>
                  <p>เพศ: {petSex}</p>
                  <p>วันเกิด: {birthdate.day}/{birthdate.month}/{birthdate.year}</p>
                  <p>อายุ: {petAge}</p>
                  <p>สายพันธุ์: {petBreed}</p>
                  <p>น้ำหนัก: {petWeight}</p>
                  <p>หมายเหตุ: {petNotes}</p>
                </div>
              )}

              <div className="mt-4 flex">
                <button 
                  onClick={toggleEditMode} 
                  className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
                >
                  <HiOutlinePencilAlt className="mr-2" /> {isEditing ? 'บันทึก' : 'แก้ไข'}
                </button>
                <button 
                  onClick={() => setIsDeleting(true)} 
                  className="flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  <IoTrash className="mr-2" /> ลบสัตว์เลี้ยง
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpet;

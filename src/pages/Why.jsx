import React from 'react';
import mypic from '../images/2.jpg';

function App() {
  return (
    <div className="bg-[#EBE4F2] p-8 rounded-xl shadow-lg ">
      <div className="bg-white text-black font-extrabold rounded-t-xl px-8 py-6 text-center text-4xl shadow-md">
        Why Animalover?
      </div>
      <div className="bg-[#6373B7] text-white rounded-b-xl shadow-inner p-6">
        {/* Container for images and text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left Side: Multiple Images */}
          <div className="flex flex-wrap justify-center gap-4">
            <img src={mypic} alt="Image 1" className="w-32 h-32 object-cover rounded-lg shadow-lg" />
            <img src={mypic} alt="Image 2" className="w-32 h-32 object-cover rounded-lg shadow-lg" />
            <img src={mypic} alt="Image 3" className="w-32 h-32 object-cover rounded-lg shadow-lg" />
          </div>
          {/* Right Side: Text */}
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed">
              “ทำไมลูกค้าต้องเข้าร้านเรา” เป็นคำถามที่หากคนทำร้านอาหารหาคำตอบได้ตั้งแต่ก่อนเริ่มทำ ความสำเร็จจะไม่หนี้ไปไหน หรือแม้แต่ระหว่างดำเนินกิจการ ตั้งคำนี้เป็นประจำๆ และหาคำตอบให้ได้ ร้านอาหารของท่านก็จะไปในทางเจริญ ไม่ไปในทางเสื่อม เพราะเราจะมีการปรับปรุง พัฒนาร้านไม่หยุดนิ่ง
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
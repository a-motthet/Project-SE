import React from 'react';
import { Link } from 'react-router-dom'; 
import mypic from '../images/2.jpg';

function App() {
  return (
    <div className="bg-[#EBE4F2] min-h-screen flex flex-col">
      <div className="container mx-auto p-6 flex flex-col items-center">
        
        
        <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center mb-8 w-full sm:w-80 md:w-96 lg:w-96 xl:w-1/3">
          <img src={mypic} alt="cat" className="w-40 h-40 rounded-full object-cover shadow-md border-4 border-white mb-4" />
          <div className="bg-gray-100 p-3 rounded-md w-full text-center">
            <p className="text-gray-600 text-xl font-semibold">สัตว์เลี้ยงของฉัน</p>
          </div>
        </div>
        
        
        <div className="w-full grid grid-cols-3 gap-3 p-4 bg-white rounded-lg shadow-lg">
          {[1, 2, 3, 4, 5].map((item) => (
            <Link to={`/Detailpet/${item}`} key={item}>
              <div className="group relative w-full h-48 max-w-xs mx-auto rounded-lg overflow-hidden shadow-md transition-all duration-500 ease-in-out transform hover:scale-105">
                <img 
                  src={mypic} 
                  alt={`pet ${item}`} 
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                  <span className="text-white text-xl font-semibold">ดูรายละเอียด</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

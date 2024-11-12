import React from 'react';
import mypic from '../images/2.jpg';

function Ex() {
  return (
    <div className="flex flex-col min-h-screen bg-[#e9e1f1]">

    
      <header className="mt-8 p-4">
        <h1 className="text-3xl font-bold text-center text-[#6373B7] mb-5">ประสบการณ์จากครอบครัว Animlover</h1>
      </header>

  
      <main className="flex-grow flex justify-center items-center p-4">
        <div className="flex gap-6 justify-center flex-wrap">
          
          
          <div className="flex items-start w-80 h-96 bg-white rounded-lg shadow-lg cursor-pointer p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src={mypic}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="ml-4">
              <h2 className="text-xl font-medium text-[#6373B7]">Tha</h2>
              <p className="text-gray-500">❤️❤️❤️❤️</p>
            </div>
          </div>
          
          
          <div className="flex items-start w-80 h-96 bg-white rounded-lg shadow-lg cursor-pointer p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src={mypic}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="ml-4">
              <h2 className="text-xl font-medium text-[#6373B7]">NanS</h2>
              <p className="text-gray-500">❤️❤️❤️❤️</p>
            </div>
          </div>
          
          
          <div className="flex items-start w-80 h-96 bg-white rounded-lg shadow-lg cursor-pointer p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src={mypic}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="ml-4">
              <h2 className="text-xl font-medium text-[#6373B7]">JuJuu</h2>
              <p className="text-gray-500">❤️❤️❤️❤️</p>
            </div>
          </div>

          
          <div className="flex items-start w-80 h-96 bg-white rounded-lg shadow-lg cursor-pointer p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src={mypic}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="ml-4">
              <h2 className="text-xl font-medium text-[#6373B7]">gew</h2>
              <p className="text-gray-500">❤️❤️❤️❤️</p>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#6373B7] py-6 text-white text-center">
        <p className="text-sm">© 2023 Animalover. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Ex;
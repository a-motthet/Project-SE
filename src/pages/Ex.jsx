import React from "react";
import mypic from "../images/2.jpg";

function Ex() {
  return (
    <>
      <div className="bg-white h-[800px]">
        <header className="mt-8 p-8">
          <h1 className="text-[30px] my-10 font-bold font-sans text-center text-puple-b">
            ประสบการณ์จากครอบครัว Animalover
          </h1>
        </header>

        <main className="flex-grow flex justify-center items-center p-4">
          <div className="flex gap-6 justify-center flex-wrap">
            <div className="flex items-start w-80 h-96 bg-pupul-bg rounded-lg shadow-lg cursor-pointer p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={mypic}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-xl font-medium text-puple-b">Tha</h2>
                <p className="text-gray-500">❤️❤️❤️❤️</p>
              </div>
            </div>

            <div className="flex items-start w-80 h-96 bg-pupul-bg rounded-lg shadow-lg cursor-pointer p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={mypic}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-xl font-medium text-puple-b">NanS</h2>
                <p className="text-gray-500">❤️❤️❤️❤️</p>
              </div>
            </div>

            <div className="flex items-start w-80 h-96 bg-pupul-bg rounded-lg shadow-lg cursor-pointer p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={mypic}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-xl font-medium text-puple-b">JuJuu</h2>
                <p className="text-gray-500">❤️❤️❤️❤️</p>
              </div>
            </div>

            <div className="flex items-start w-80 h-96 bg-pupul-bg rounded-lg shadow-lg cursor-pointer p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={mypic}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-xl font-medium text-puple-b">gew</h2>
                <p className="text-gray-500">❤️❤️❤️❤️</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Ex;

import React from "react";

const CircleCard = ({ image, text }) => {
  return (
    <div className="bg-white p-2 rounded-lg shadow w-32  flex flex-col items-center justify-center">
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <img
          src={image}
          alt="ภาพประกอบ"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center text-sm text-color-b mt-2">{text}</div>
    </div>
  );
};

export default CircleCard;

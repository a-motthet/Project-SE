import React from "react";
import PetHead from "./PetHead";
import CircleCard from "./CircleCard";
import mypic from "../images/2.jpg";
import PetCenter from "./PetCenter";
import PetFoodInfo from "./PetFoodInfo";

const PetProfile = () => {
  return (
    <div className="py-4 flex flex-col items-center">
      <div className="w-11/12 md:w-3/4 lg:w-1/2 space-y-6">
        <div className=" rounded-lg  p-4 flex items-start space-x-4 ">
          <CircleCard image={mypic} text="แนะนำโภชนาการ" />
          <PetHead />
        </div>
        <PetCenter />
        <PetFoodInfo />
      </div>
    </div>
  );
};

export default PetProfile;

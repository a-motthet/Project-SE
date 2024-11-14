import React from "react";
import Welcome from "./Welcome";
import Recomend from "./Recomend";
import Why from "./Why";
import Ex from "./Ex";
import ActiveSlider from "../components/ActiveSlider";

function Home() {
  return (
    <div>
      <main className="flex-grow">
        <div className="mb-8">
          <Welcome />
        </div>
        <div>
          <h4 className="ml-[320px] text-[24px] font-bold font-sans">
            รายการทั้งหมด
          </h4>
          <Recomend />
        </div>
        <div>
          <h4 className="text-center text-[45px] font-bold font-sans my-8  font-chela ">
            WHY ANIMALOVER ?
          </h4>
          <Why />
        </div>
        <div className="mt-8">
          <ActiveSlider />
        </div>
      </main>
    </div>
  );
}

export default Home;

import React from "react";
import mypic from "../images/2.jpg";

const PetProfile = () => {
  return (
    <>
      <div className="m-10 flex items-center justify-center font-sans">
        <div className="bg-white rounded-large shadow-inner w-11/12 lg:w-3/4 xl:w-2/3">
          <div className="py-4 flex flex-col items-center font-sans">
            <div className="w-11/12 md:w-3/4 lg:w-1/2 space-y-6">
              <div className="flex flex-cols item-center">
                <div className="flex-grow text-left mt-2">
                  <h1 className="text-xl font-extrabold text-color-b">
                    สมหมาย :
                  </h1>
                  <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="text-md text-color-b font-bold md:text-lg mt-1">
                      สัตว์เลี้ยง : แมว
                    </div>
                    <div className="text-md text-color-b font-bold md:text-lg mt-1">
                      เพศ : เมีย
                    </div>
                    <div className="text-md text-color-b  font-bold md:text-lg mt-1">
                      อายุสัตว์ : 7
                    </div>
                    <div className="text-md text-color-b  font-bold md:text-lg mt-1">
                      สายพันธุ์ : xxxx
                    </div>
                    <div className="text-md text-color-b font-bold md:text-lg mt-1">
                      น้ำหนัก : 20 g
                    </div>
                  </div>
                </div>
                <div className="w-52 h-52 rounded-lg bg-gray-200 flex-shrink-0 ml-4 shadow">
                  <img
                    src={mypic}
                    alt="สัตว์เลี้ยง"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg text-color-b font-bold">อาหารตามวัย</h3>
                <div className="border-2 p-4 text-color-b font-bold rounded-large">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus facere velit temporibus exercitationem harum
                  consectetur voluptatem voluptates laborum aliquam, est,
                  maiores qui eaque nisi, fugiat neque officia natus tempore
                  adipisci!
                </div>
              </div>
              <div>
                <h3 className="text-lg text-color-b font-bold">
                  อาหารที่ควรหลีกเลี่ยง
                </h3>
                <div className="border-2 p-4 text-color-b font-bold rounded-large">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid atque corporis reprehenderit voluptatum, cum ad
                  adipisci! Recusandae repellat, sapiente repellendus nisi
                  tenetur deleniti nam maiores voluptatum nemo pariatur? Nemo,
                  aliquam?
                </div>
              </div>
              <div>
                <h3 className="text-lg text-color-b font-bold">
                  อาหารที่แนะนำ
                </h3>
                <div className="border-2 p-4 text-color-b font-bold rounded-large">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid atque corporis reprehenderit voluptatum, cum ad
                  adipisci! Recusandae repellat, sapiente repellendus nisi
                  tenetur deleniti nam maiores voluptatum nemo pariatur? Nemo,
                  aliquam?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetProfile;

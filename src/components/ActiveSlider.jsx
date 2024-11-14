import { Swiper, SwiperSlide } from "swiper/react";

import mypic from "../images/2.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { ServiceData } from "../constants";

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[900px] bg-white">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-puple-b px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer rounded-large">
              <div className="absolute inset-0 bg-cover bg-center bg-pupul-bg" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <div className="relative flex gap-5">
                  <img
                    src={mypic}
                    className="justify-items-start w-[110px] rounded-full my-1 cover"
                  />
                  <h1 className="ml-1 text-xl lg:text-2xl font-bold mt-8">
                    {item.title}{" "}
                  </h1>
                </div>
                <p className="lg:text-[19px]">{item.content} </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;

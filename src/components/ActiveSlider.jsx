import { Swiper, SwiperSlide } from "swiper/react";
import mypic from "../images/2.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../constants";
import { useState } from "react";

const ActiveSlider = () => {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (e, serviceTitle) => {
    e.preventDefault();
    const name = e.target.name.value;
    const comment = e.target.comment.value;

    if (name && comment) {
      const newReview = { name, comment, serviceTitle };
      setReviews([...reviews, newReview]);

      // Clear input fields
      e.target.name.value = "";
      e.target.comment.value = "";
    }
  };

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
              <div className="relative">
                <div className="grid grid-cols-2 justify-center">
                  <img
                    src={mypic}
                    className="justify-self-center w-[110px] rounded-full my-1 cover"
                  />
                  <h1 className="justify-self-center ml-1 text-xl md:text-auto hidden sm:block text-xl font-bold mt-8 ">
                    {item.title}
                  </h1>
                </div>
                <p className="text-[19px] md:text-[30px] ">{item.content}</p>
              </div>

              {/* Review Form */}
              <form
                className="mt-4"
                onSubmit={(e) => handleReviewSubmit(e, item.title)}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                />
                <textarea
                  name="comment"
                  placeholder="Your Review"
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  rows="4"
                />
                <button
                  type="submit"
                  className="w-full p-2 bg-blue-500 text-white rounded"
                >
                  Submit Review
                </button>
              </form>

              {/* Display Reviews */}
              <div className="mt-4">
                {reviews
                  .filter((review) => review.serviceTitle === item.title)
                  .map((review, index) => (
                    <div key={index} className="mt-2 border-t pt-2">
                      <strong>{review.name}</strong>
                      <p>{review.comment}</p>
                    </div>
                  ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;

import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/Images/joybox inbox-min.png",
  "/Images/joybox type-min.png",
  "/Images/joybox settings-min.png",
  "/Images/joybox profile-min.png",
  "/Images/joybox signin-min.png",
];

function Slideshow() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      navigation={true}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className=" h-96 w-full self-center"
    >
      {images.map((img, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center">
              <img
                src={img}
                alt={img}
                className="block h-full w-full object-cover object-center"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slideshow;

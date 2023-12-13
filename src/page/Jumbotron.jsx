import React from "react";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/foo3.jpg";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/autoplay";


const Jumbotron = () => {
  return (
    <div className="relative mt-10">
      <Swiper
        spaceBetween={50}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="w-full">
            <img src={food1} alt="" className="w-full lg:h-[500px]" />
          </div>
          <div className="absolute bottom-10 z-10 max-w-md w-full left-[10%]">
            <h1 className="text-3xl lg:text-5xl font-semibold font-[Roboto Slab] text-white ">
              Cinnamon Loaded Itaian Tart
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img src={food2} alt="" className="w-full lg:h-[500px]" />
          </div>
          <div className="absolute bottom-10 z-10 max-w-md w-full left-[10%]">
            <h1 className="text-3xl lg:text-5xl font-semibold font-[Roboto Slab] text-white ">
              Strawberry Cream Pudding
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img src={food3} alt="" className="w-full lg:h-[500px]" />
          </div>
          <div className="absolute bottom-10 z-10 max-w-md w-full left-[10%]">
            <h1 className="text-3xl lg:text-5xl font-semibold font-[Roboto Slab] text-white ">
              Bakso Istimewa Sederhana
            </h1>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Jumbotron;

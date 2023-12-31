// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/shaluone.jpg",
        },
        {
          title: "title",
          path: "/shalutwo.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/shaluthree.jpg",
        },
        {
          title: "title",
          path: "/shalufour.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/shalufive.jpg",
        },
        {
          title: "title",
          path: "/shaluseven.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/shalusix.jpg",
        },
        ,
      ],
    },
  ],
};

//icons
import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

//import required modules
import { Pagination } from "swiper";

//import swiper style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group border-red-500">
                      {/* images */}
                      <Image
                        src={image.path}
                        width={500}
                        height={500}
                        alt=""
                        className="object-cover self-center"
                      />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-300"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-x-10 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title port 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title port 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300  delay-150">
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

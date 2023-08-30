import Image from "next/image";

//icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/image.jpeg",
  },
  {
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/image.jpeg",
  },
  {
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/image.jpeg",
  },
  {
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/image.jpeg",
  },
  {
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/image.jpeg",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";

//import required modules
import { FreeMode, Pagination } from "swiper";

//import swiper style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      FreeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65, 47 , 123 , 0.15) items-center object-cover justify-center h-max rounded-lg px-6 flex sm:flex-col gap-x-6  sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169 , 0.15)] bg-white transition-all duration-300">
              <Image
                src={item.image}
                alt=""
                width={300}
                height={200}
                className="object-cover"
              />
              {/* icon */}
              {/* title & des */}
              {/* <div className="mb-8"> */}
              {/* <p className="max-w-[350px] leading-normal"> */}
              {/* {item.description} */}
              {/* </p> */}
              {/* // </div> */}
              {/* arrow */}
              {/* // <div className="text-3xl"> */}
              {/* // <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" /> */}
              {/* // </div> */}{" "}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;

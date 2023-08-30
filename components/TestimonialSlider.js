// testimonial data
const testimonialData = [
  {
    image: "/shrrey.jpg",
    name: "Sherry",
    position: "Ladli",
    message:
      "Waise to Bolna ni chahti hu lekin bol deti hu Happy Birthday 2 U . and kbhi kbhi bhot pyr kia hai mujhe lekin preshan bhi bht kia hai 🤣 ",
  },
  {
    image: "/kalu.jpg",
    name: "Kalu",
    position: "Kalu",
    message: "Wish you very happy birthday mai kalu yaad hai hum ya bhul gaye.",
  },
  {
    image: "/neha.jpg",
    name: "Neha",
    position: "Friend",
    message:
      "Wish you very happy birthday to you . and waise to hamri dosti graduation se start hui thi and ab kfi achi ho gyi so keep going like that",
  },
  {
    image: "/shradha.jpg",
    name: "Shradha",
    position: "Friend",
    message:
      "Wish you very happy birthday to you and your are the good friend wish you very happy return of the day",
  },
  {
    image: "/rajat.jpg",
    name: "Rajat",
    position: "Guru cum Bhai",
    message:
      "Wish you very happy birthday  behan tum jiyo hazro saal.. saal ke din ho 50k",
  },
  {
    image: "/roli.jpg",
    name: "Roli",
    position: "Sis cum BF",
    message: "Wish you very happy birthday behan................",
  },
  {
    image: "/vaish.jpg",
    name: "Vaishnavi",
    position: "choti behan",
    message:
      "Wish you very happy birthday didi you are my favourite di and many happy return of the days",
  },
  {
    image: "/shweta.jpg",
    name: "Shweta",
    position: "Sis cum BF",
    message:
      "Wish you very happy birthday didi you are my favourite di and many happy return of the days",
  },
  {
    image: "/sobia.jpg",
    name: "Sobia",
    position: "BoyFriend",
    message:
      "Wish you very happy birthday Shalu  beta  and many happy return of the days",
  },
];

//icons
import { FaQuoteLeft } from "react-icons/fa";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

//import required modules
import { Navigation, Pagination } from "swiper";

//import swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-10 gap-y-5 h-full px-16">
              {/* avatar , name , position */}
              <div className="w-full  max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div
                  className="flex flex-col justify-center text-center
                "
                >
                  {/* avatar */}
                  <div className="mb-2 mx-auto   ">
                    <Image
                      src={person.image}
                      width={50}
                      height={50}
                      alt="profile image"
                      className="rounded-full"
                    />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase text-accent font-bold">
                    " {person.position} "
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className="bg-pink-500/10 flex-1 flex flex-col justify-center before:w-[1px] xl:before::bg-white/20 xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center pb-60 p-2 md:text-left ">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;

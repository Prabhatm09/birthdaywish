import React, { useState } from "react";

//icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import { SiFramer, SiAdobexd, SiAdobephotoshop } from "react-icons/si";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          {
            id: 1115,
            icon: <FaHtml5 />,
          },
          {
            id: 1116,
            icon: <FaCss3 />,
          },
          {
            id: 1117,
            icon: <FaJs />,
          },
          {
            id: 1118,
            icon: <FaReact />,
          },
          {
            id: 1119,
            icon: <SiFramer />,
          },
          {
            id: 11120,
            icon: <FaWordpress />,
          },
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          {
            id: 11121,
            icon: <FaFigma />,
          },
          {
            id: 11122,
            icon: <SiAdobexd />,
          },
          {
            id: 11123,
            icon: <SiAdobephotoshop />,
          },
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const Age = () => {
  const [index, setIndex] = useState(0);
  return (
    <div
      className="h-full bg-primary/30 py-32  items-center xl:text-left "
      key={index}
    >
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            From Birth to <span className="text-accent">Now</span> year
            completed..
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          ></motion.p>
          {/* counter */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 gap-x-14 ">
              {/* expnce */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={24} duration={10} />
                  yr
                </div>
                <div className="text-sd uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Growing old now..
                </div>
              </div>
            </div>
            <div className="mb-auto px-20">
              <video width="220" height="100" controls>
                <source src={"/movie.mp4"} type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Age;

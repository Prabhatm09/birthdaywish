/* eslint-disable */
//icons
import {} from "react-icons/rx";

//components
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Wishes <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" bg-[url('/bg-quote.jpg')] bg-cover bg-center p-20 text-blue-700/80 mb-4 max-w-[400px] mx-auto lg:mx-0 font-bold text-lg"
            >
              Wish you very happy birthday to U 🎂 and always stay happy.I wish
              you got high position in your career and live your life as u want
              to live.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          ></motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;

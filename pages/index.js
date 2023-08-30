//next image
import Image from "next/image";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";

//framer motion
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

//variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full  bg-gradient-to-r from-primary/10 via-black/30">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto ">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 font-bold"
          >
            Wish You 😊 Birthday <br /> Dear,{" "}
            <span className="text-pink-600 font-[10px]">
              <Typewriter
                options={{
                  strings: [
                    "【S】【H】【A】【L】【I】【N】【I】",
                    "【S】【H】【A】【L】【U】",
                    "【A】【L】【L】【U】",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </motion.h1>
          {/*subtitles*/}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0  mb-10 xl:mb-16"
          >
            Janamdin Mubarak ho may god bless you and help to get what u want in
            ur life
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden  xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right  xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <div>
          <ParticlesContainer />
        </div>
        {/* avatar */}
      </div>
    </div>
  );
};

export default Home;

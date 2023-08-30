// components
import TestimonialSlider from "../../components/TestimonialSlider";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 pb-[800px] text-center">
      <div className="container mx-auto pb-10 h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          Other's <span className="text-accent">Wishes</span>
        </motion.h2>
      </div>
      {/* slider */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <TestimonialSlider />
      </motion.div>
    </div>
  );
};

export default Testimonials;

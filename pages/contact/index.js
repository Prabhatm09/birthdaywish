/* eslint-disable */
// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import Image from "next/image";

const Contact = () => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    try {
      axios
        .post(`/api/hello`, {
          name: name,
        })
        .then((response) => {
          console.log(response);
          toast.success("Thank you for the response");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-30 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Do you wanna go{" "}
            <span className=" text-accent flex items-center justify-center">
              Coffee.{" "}
              <Image src={"/coffee.png"} alt="" width={50} height={50} />
            </span>{" "}
            with me If Yes Drop <span className="text-accent">" YES "</span>{" "}
            with a sweet message
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* group */}
            <form className=" gap-x-6 w-full">
              <input
                type="text"
                value={name}
                placeholder="write a sweet message for me"
                className="w-full h-[252px] rounded-lg pl-6 capitalize textarea"
                onChange={(event) => setName(event.target.value)}
              />
              <button
                type="button"
                onClick={() => {
                  handleSubmit();
                }}
                className="btn rounded-full border border-white max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group-[]:"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300">
                  Send{" "}
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300  absolute text-[22px]" />
              </button>
            </form>
          </motion.form>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Contact;

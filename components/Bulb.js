//image
import Image from "next/image";

const Bulb = () => {
  return (
    <div
      className="absolute  animate-pulse  mix-blend-color-dodge rotate-11
-left-[256px]
      top-[55px]
    duration-75
    z-10
    w-[800px]
    xl:w-[260px]"
    >
      <Image
        src={"/ballon-removebg-preview.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;

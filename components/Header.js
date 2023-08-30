//next image
import Image from "next/image";

//next link
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row justify-between items-center gap-y-6  py-8">
          {/* logo */}
          <Link href={"/"}>
            {/* <h1>
              【H】【A】【P】【P】【Y】 【B】【I】【R】【T】【H】【D】【A】【Y】
            </h1> */}
            {/* <Image
              src={"/banner.png"}
              width={100}
              height={8}
              alt=""
              priority={true}
            /> */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

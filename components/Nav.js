// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "age", path: "/age", icon: <HiUser /> },
  { name: "wish", path: "/wish", icon: <HiRectangleGroup /> },
  { name: "pics", path: "/pics", icon: <HiViewColumns /> },
  {
    name: "otherswishes",
    path: "/otherswishes",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

//next Link
import Link from "next/link";

//next router
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max top-0  mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen ">
      {/*inner*/}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-10 h-[80px]  xl:h-max py-8 bg-white/10 backdrop-blue-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname
              } relative flex items-center group hover:animate-bounce transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center  p-[6px] rounded-[20px]"></div>
                <div className="text-[80px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                {/* triangle */}
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute top-9  -right-4 "></div>
              </div>
              {link.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;

import React from "react";
import heroimg from "../images/heroImg.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className=" min-h-[60rem] md:min-h-[40rem] h-screen   w-full bg-gradient-to-b from-black via-black to-gray-800  "
    >
      <div className="mx-auto max-w-screen-lg flex flex-col items-center justify-center sm:min-h-full  px-4 md:flex-row  ">
        <div className="flex flex-col justify-center h-full  mt-40  md:mt-0  ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            nobis. ipsum dolor sit amet consectetur adipisicing elit. Earum
            fugit similique tenetur! Lorem ipsum dolor sit, amet consectetur
            adipisicing.
          </p>

          <div className="">
            <Link to="portfolio" smooth duration={500} className="group text-white bg-gradient-to-r w-fit px-6 py-3 my-2 flex items-center rounded-md from-cyan-500 to-blue-500 cursor-pointer ">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <IoIosArrowForward size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="">
          <img
            src={heroimg}
            className="rounded-xl mt-20 sm:mt-10 md:mt-0 mx-auto  w-2/3 md:w-full"
            alt="myPicture"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

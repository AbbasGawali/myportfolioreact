import React from "react";
import html from "../images/technologies/html.png";
import css from "../images/technologies/css.png";
import reactimg from "../images/technologies/react.png";
import github from "../images/technologies/github.png";
import js from "../images/technologies/js.png";
import mongodb from "../images/technologies/mongodb.png";
import tailwind from "../images/technologies/tailwind.png";
import nodejs from "../images/technologies/nodejs.png";

const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JS",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactimg,
      title: "REACT",
      style: "shadow-[#00d8ff]",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-[#06b6d4]",
    },
    {
      id: 6,
      src: nodejs,
      title: "Node Js",
      style: "shadow-[#8cc84b]",
    },
    {
      id: 7,
      src: mongodb,
      title: "Mongo Db",
      style: "shadow-[#4d9346]",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-[#4b4a4a]",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full
       md
       
       "
      //  md:h-screen
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} className="w-20 mx-auto" alt="" />
              <p className="mt-4 cursor-default">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

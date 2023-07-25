import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full 
      md
      bg-gradient-to-b from-gray-800 to-black text-white "

      // md:h-screen
    >
      <div className="max-w-screen-lg  lg:py-40 p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          MERN, which stands for MongoDB, Express.js, React, and Node.js, is the
          playground where my creativity and expertise intertwine. With
          proficiency in these core technologies, I effortlessly bring ideas to
          life, crafting dynamic and responsive web applications that captivate
          users.
        </p>
        <br />
        <p className="text-xl ">
          My love for MERN development goes beyond the typical 9-to-5 routine;
          it's a constant source of inspiration and motivation. Whether I'm
          refining database structures in MongoDB or optimizing server
          performance with Express.js, the joy of coding remains an ever-present
          companion.
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react"; 
import firebase from "../images/portfolioassets/firebase.png";

const Portfolio = () => {
  const portfoliolinks = [
    {
      id: 1,
      src: firebase,
    },
    {
      id: 2,
      src: firebase,
    },
    {
      id: 3,
      src: firebase,
    },
    {
      id: 4,
      src: firebase,
    },
    {
      id: 5,
      src: firebase,
    },
    {
      id: 6,
      src: firebase,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full 
      md 
      "
      // md:h-screen
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out Some of my work right Here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfoliolinks.map((item) => (
            <div
              key={item.id}
              className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105"
            >
              <img src={item.src} alt="" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-0 py-0 sm:px-6 sm:py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-0 py-0 sm:px-6 sm:py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
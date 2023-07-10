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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
          laudantium commodi architecto ipsum, minus alias labore magnam, ea
          dignissimos nesciunt ullam error fuga ratione. Voluptates quam unde
          quidem mollitia amet ipsum quisquam nobis labore. Maiores, ea? Eveniet
          enim, voluptates debitis fugiat quisquam commodi a aliquam, quos
          eligendi ipsa cumque tempora.
        </p>
        <br />
        <p className="text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quam
          temporibus veniam! Enim officiis repellat repudiandae sapiente autem
          quibusdam in iusto a excepturi. Quas magnam cumque, labore, aliquam
          natus porro omnis blanditiis totam, saepe eveniet delectus corporis?
          Ipsa natus, adipisci, deleniti cum at architecto veritatis vitae dolor
          officia itaque iste.
        </p>
      </div>
    </div>
  );
};

export default About;

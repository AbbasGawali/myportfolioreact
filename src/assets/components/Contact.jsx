import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full
         h-full 
         md:
      bg-gradient-to-b from-black to-gray-800 p-4 text-white"
      //   md:h-screen
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-y-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/43b1c703-5c41-4729-91a1-a33025c45da1"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              type="text"
              required
              min={3}
              name="name"
              id=""
              placeholder="Enter your name"
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md text-white my-4 focus:outline-none"
              type="text"
              name="name"
              required
              min={3}
              id=""
              placeholder="Enter your email"
            />

            <textarea
              name="message"
              required
              placeholder="Enter your message"
              id=""
              className="p-2  bg-transparent border-2 rounded-md text-white focus:outline-none"
              rows="10"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

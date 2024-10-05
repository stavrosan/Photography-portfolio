import React from "react";
import { IoMdSend } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div
        data-aos="fade-zoom-out"
        className="container max-w-screen-lg py-8 mt-12"
      >
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-3xl md:text-5xl font-light mb-4 font-primary mt-10">
            Contact
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-2 sm:mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  for="name"
                  className="leading-7 text-base text-primary font-semibold font-secondary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded border border-gray-600 text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  for="email"
                  className="leading-7 text-base text-primary font-semibold font-secondary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded border border-gray-600 text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="message"
                  className="leading-7 text-base text-primary font-semibold font-secondary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full rounded border border-gray-600 h-32 text-base  text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            {/* Button section*/}
            <div className="p-2 w-full">
              <div className="relative">
                <div className="flex justify-center items-center group">
                  <button className="bg-primary h-[40px] w-[80px] text-white px-3 py-2">
                    Send
                  </button>
                  <IoMdSend
                    className="inline-block p-2 text-base h-[40px] w-[40px]
                bg-cyan-300 group-hover:bg-cyan-600 text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

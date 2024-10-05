import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbArrowsDiagonal } from "react-icons/tb";
import { TbArrowsDiagonalMinimize2 } from "react-icons/tb";
import { BiSolidRightArrowSquare } from "react-icons/bi";
import { BiSolidLeftArrowSquare } from "react-icons/bi";
import { TbXboxXFilled } from "react-icons/tb";
import { IoReturnUpBack } from "react-icons/io5";

const images = [
  "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/12/06/18/27/cheese-1887233_640.jpg",
  "https://cdn.pixabay.com/photo/2016/11/29/12/15/berries-1869421_640.jpg",
  "https://cdn.pixabay.com/photo/2015/01/30/10/35/glass-jar-617387_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/04/20/17/00/pastry-731823_640.jpg",
  "https://cdn.pixabay.com/photo/2017/06/14/15/18/cherries-2402450_640.jpg",
  "https://cdn.pixabay.com/photo/2020/02/29/15/20/cake-4890393_1280.jpg",
];

const Food = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const toggleFullscreen = () => {
    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="mx-6 py-14 lg:mt-14 items-start justify-start">
      <h1 className="text-start text-3xl md:text-5xl font-light mb-3 md:mt-16 font-secondary ml-6">
        Food
      </h1>
      <p className="text-start text-lg md:text-xl font-light mb-10 font-secondary ml-6">
      The art of cuisine, presented through vibrant, detailed photography that highlights 
      the textures and colors of expertly crafted dishes.
      </p>
      <div className="space-y-4">
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="columns-1 md:columns-2 lg:columns-2 lg:rows-2 space-y-6 gap-10 mb-10"
        >
          {images.map((image, index) => (
            // {`relative overflow-hidden ${gridClasses[index % gridClasses.length]}`}
            <div
              key={index}
              className="relative overflow-hidden break-inside-avoid"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto object-cover hover:scale-110
            transform transition-transform duration-300 ease-in-out cursor-pointer"
                onClick={() => openModal(index)}
              />
            </div>
          ))}
        </div>
        {/* Button */}
        <div className="flex justify-center items-center group m-10">
          <button className="bg-primary h-[40px] text-white px-3 py-2">
            <Link
              to={"/portfolio"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Go back
            </Link>
          </button>
          <IoReturnUpBack
            className="inline-block p-2 text-base h-[40px] w-[40px]
                bg-orange-500 group-hover:bg-orange-700 text-white"
          />
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <TbXboxXFilled className="size-8" />
          </button>

          <div className="relative">
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className={`${isFullscreen ? "object-cover lg:w-full lg:h-screen" : "h-auto max-h-[90vh] max-w-[90vw] object-cover"}`}
            />
            <button
              onClick={prevImage}
              className="fixed left-0 top-1/2 transform -translate-y-1/2 text-black px-4 py-2"
            >
              <BiSolidLeftArrowSquare className="size-12 fill-white" />
            </button>
            <button
              onClick={nextImage}
              className="fixed right-0 top-1/2 transform -translate-y-1/2 px-4 py-2"
            >
              <BiSolidRightArrowSquare className="size-12 fill-white" />
            </button>
            <button
              onClick={toggleFullscreen}
              className="fixed top-4 left-4 text-black text-xl bg-white p-2 rounded"
            >
              {isFullscreen ? (
                <TbArrowsDiagonalMinimize2 className="size-12" />
              ) : (
                <TbArrowsDiagonal className="size-12" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Food;

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const portfolioData = [
  {
    img: "https://cdn.pixabay.com/photo/2024/07/15/21/46/daylily-8897976_640.jpg",
    category: "Nature",
    link: "/portfolio/nature",
  },
  {
    img: "https://cdn.pixabay.com/photo/2020/01/20/21/25/art-4781460_1280.jpg",
    category: "Gallery",
    link: "/portfolio/gallery",
  },
  {
    img: "https://cdn.pixabay.com/photo/2018/08/29/19/01/fig-3640553_640.jpg",
    category: "Food",
    link: "/portfolio/food",
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/08/01/20/52/people-2567915_640.jpg",
    category: "People",
    link: "/portfolio/people",
  },
];

const Portfolio = () => {
  return (
    <div className="lg:mx-10 sm:mx-6 mx-4 py-14">
      <div className="h-full flex flex-col items-start justify-start md:mt-8">
        {/*<div className='flex w-full justify-center'>

        //Links 
         <ul className='flex-row items-center justify-between md:flex gap-8 font-semibold font-secondary text-[18px] lg:text-[24px]'>
          <li className='p-2'><Link to={'/portfolio/gallery'}>All</Link></li>
          <li className='p-2'>People</li>
          <li className='p-2'>Nature</li>
          <li className='p-2'>All</li>
          <li className='p-2'>People</li>
        </ul>

        </div> */}

        {/* Display images */}
        <div
          data-aos="fade-zoom-out"
          className="columns-1 md:columns-2 lg:columns-2 lg:gap-8 lg:space-y-12 sm:space-y-6 sm:gap-5 gap-4 space-y-4"
        >
          {portfolioData.map((item, index) => (
            <div
              key={index}
              className="relative text-neutral-300 hover:text-white"
            >
              <Link
                to={item.link}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img
                  src={item.img}
                  alt={`Portfolio Image ${index + 1}`}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                {/* category name */}
                <div className="absolute bottom-[0px] bg-black w-full">
                  <p className="font-light font-secondary text-2xl sm:text-2xl lg:text-3xl px-4 py-2">
                    {item.category} <FaArrowRightLong />
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

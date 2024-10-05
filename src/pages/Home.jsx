import React from "react";
import { Link } from "react-router-dom";
import { MdMonochromePhotos } from "react-icons/md";
import Carousel from "../components/Carousel";

const portfolioData = [
  {
    img: "https://cdn.pixabay.com/photo/2023/01/27/01/40/brothers-7747561_640.jpg",
    link: "/portfolio/people",
    category: "People",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    img: "https://cdn.pixabay.com/photo/2020/08/03/15/53/castle-5460374_640.jpg",
    link: "/portfolio/gallery",
    category: "Gallery 2",
    gridClass: "md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-1",
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg",
    link: "/portfolio/nature",
    category: "Nature 3",
    gridClass: "md:col-span-3 md:row-span-2 md:col-start-1 md:row-start-3",
  },
  {
    img: "https://cdn.pixabay.com/photo/2020/12/23/03/14/men-5853759_640.jpg",
    link: "/portfolio/people",
    category: "People 4",
    gridClass: "md:col-span-2 md:row-span-2 md:col-start-4 md:row-start-4",
  },
  {
    img: "https://cdn.pixabay.com/photo/2023/09/29/14/58/road-8284023_640.jpg",
    link: "/portfolio/nature",
    category: "Nature 5",
    gridClass: "md:col-span-2 md:row-span-2 md:row-start-5",
  },
  {
    img: "https://cdn.pixabay.com/photo/2023/05/31/11/15/fish-8031138_640.jpg",
    link: "/portfolio/food",
    category: "Food 6",
    gridClass: "md:col-span-3 md:row-span-3 md:col-start-3 md:row-start-6",
  },
  {
    img: "https://cdn.pixabay.com/photo/2021/09/13/08/18/blue-flower-6620619_640.jpg",
    link: "/portfolio/nature",
    category: "Nature 7",
    gridClass: "md:col-span-2 md:row-span-2 md:row-start-9",
  },
  {
    img: "https://cdn.pixabay.com/photo/2021/02/08/07/51/fishermen-5994018_1280.jpg",
    link: "/portfolio/people",
    category: "people 8",
    gridClass: "md:col-span-2 md:row-span-2 md:col-start-4 md:row-start-9",
  },
  {
    img: "https://cdn.pixabay.com/photo/2023/09/17/11/58/tomatoes-8258398_640.jpg",
    link: "/portfolio/food",
    category: "Food 9",
    gridClass: "md:col-span-2 md:row-span-3 md:col-start-3 md:row-start-10",
  },
  { 
    img: "https://cdn.pixabay.com/photo/2017/10/29/07/38/poster-2899095_640.jpg", 
    link: "/portfolio/gallery",
    category: "Gallery 10",
    gridClass: "md:col-span-3 md:row-span-3 md:col-start-2 md:row-start-11",
  },
];

const Home = () => {
  return (
    <>
      {/* <div className="flex justify-center items-center h-lvh bg-fixed bg-parallax bg-cover">
    <div className='w-full pt-20 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10
    lg:absolute flex flex-col justify-center items-center lg:items-start'>
      <h1 data-aos="fade-down" data-aos-delay="300" className='text-5xl sm:text-6xl lg:text-8xl 
                font-medium font-primary text-primary mt-16'>Photographer <br /> & film maker</h1>
      <p data-aos="fade-down" data-aos-delay="500" className='text-[26px] lg:text-[36px] 
                font-bold font-secondary mb-4 lg:mb-12'>Vienna, Austria</p>
    </div>
    </div> 
    <div className='flex justify-end max-h-96 lg:max-h-screen'>
      <div data-aos="flip-down"
           data-aos-duration='1000' className='relative lg:-right-40 overflow-hidden'>
        <img src={downby} alt="image cover" />
      </div>
    </div> */}

      <div className="lg:mx-16 sm:mx-6 mx-2 lg:py-2 py-4 mt-28 mb-10">
        {/* Display images */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="grid grid-cols-1 md:grid-cols-5 grid-rows-13 gap-4 space-y-4"
        >
          {portfolioData.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden ${item.gridClass}`}
            >
              <Link
                to={item.link}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img
                  src={item.img}
                  alt={`Portfolio Image ${index + 1}`}
                  className="w-full h-auto object-cover opacity-100 transition duration-300 ease-in-out hover:opacity-80"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-parallax bg-fixed pt-1">
        <Carousel />
      </div>
      {/* Button section  */}
      <div className="flex justify-center items-center group m-10">
        <button className="bg-primary h-[40px] text-white px-3 py-2">
          <Link
            to={"/portfolio"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            View all work
          </Link>
        </button>
        <MdMonochromePhotos
          className="inline-block p-2 text-base h-[40px] w-[40px]
                bg-red-400 group-hover:bg-red-700 text-white"
        />
      </div>
    </>
  );
};

export default Home;

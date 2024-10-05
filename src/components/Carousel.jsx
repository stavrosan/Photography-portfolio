import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imgsPortfolio = [
  {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2017/01/17/14/41/pixabay-1987080_640.png",
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2020/11/01/04/17/youtube-5702828_1280.png",
  },
  {
    id: 3,
    img: "https://cdn.pixabay.com/photo/2022/08/24/18/48/logo-7408535_1280.png",
  },
  {
    id:4,
    img: "https://cdn.pixabay.com/photo/2022/08/24/00/48/soon-7406677_640.png"
  }
];

const Carousel = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "50px",
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <>
      <div className="py-0 m-0 md:py-4 md:m-16 mt-10">
        <div
          className="text-center md:mb-12 max-w-[700px]
        mx-auto"
        >
          <h1 className="text-white text-3xl md:text-5xl font-light font-primary m-1 p-1">
            Our clients
          </h1>
        </div>
        <div>
          {/* Images carousel */}
          <div className="w-full lg:h-[350px] h-[200px]">
            <Slider {...settings}>
              {imgsPortfolio.map(({ id, img }) => {
                return (
                  <div
                    className="relative w-full lg:h-[350px] h-[200px] px-1"
                    key={id}
                  >
                    <img
                      className="w-full h-full object-contain block p-4"
                      src={img}
                      alt=""
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;

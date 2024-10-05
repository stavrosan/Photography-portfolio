import React from "react";

const About = () => {
  return (
    <div className="container max-w-screen-lg py-14">
      <div className="mt-4 lg:mt-12">
        <div className="md:grid md:grid-cols-2 sm:py-10 gap-12">
          <div className="mt-4 md:mt-0 text-left flex h-full justify-start py-4 md:py-0">
            <div
              data-aos="fade-down"
              data-aos-delay="300"
              className="my-auto mx-6"
            >
              <h2 className="text-3xl md:text-5xl font-light mb-4 font-primary">
                About us
              </h2>
              <p className="text-base lg:text-lg font-secondary">
              Welcome to <span className="text-rose-800">Bridge Studio</span>, where art and photography 
              converge to create lasting impressions. We are passionate about capturing beauty in every form, 
              whether it's through the lens or on canvas. Our portfolio reflects our dedication to showcasing diverse subjects,
              with a focus on visual storytelling that transcends the ordinary.
              </p>
            </div>
          </div>
          <img
            data-aos="fade-out"
            data-aos-delay="300"
            className="mx-auto rounded-3xl py-8 md:py-0"
            src="https://cdn.pixabay.com/photo/2016/11/29/06/04/adult-1867699_640.jpg"
            alt="image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

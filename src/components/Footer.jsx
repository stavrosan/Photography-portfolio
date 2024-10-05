import React from "react";
import logo from "./../assets/images/logo.png";
import { Link } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div
        className="w-full p-[20px] lg:px-[100px]
    h-100px lg:h-[120px] items-center py-4 mb-20"
      >
        <div className="flex w-full items-center justify-evenly">
          {/* Logo */}
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              className="w-[60px] md:w-[100px] object-cover rounded-full shadow-lg"
            />
          </Link>
          <div className="flex items-center justify-between text-2xl text-slate-700 font-semibold cursor-pointer">
            {/* Nav links */}
            <ul className="flex-row md:flex gap-x-14 text-slate-700 font-semibold font-secondary text-[18px] lg:text-[24px]">
              <li className="font-bold p-2 text-[20px] lg:text-[28px]">
                <a href="" target="_blank">
                  <BsLinkedin />
                </a>
              </li>
              <li className="font-bold p-2 text-[20px] lg:text-[28px]">
                <a href="http://" target="_blank">
                  <GrInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    <div className="flex justify-end m-1">
        <p className="flex items-center space-x-1 md:text-lg text-sm">
          <FaRegCopyright />
          <span>2024. Made by Stavros Anagnostakis </span>
        </p>
    </div>
    </>
  );
};

export default Footer;

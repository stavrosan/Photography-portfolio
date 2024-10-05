import React, { useState } from "react";
import logo from "./../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";

const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className="w-full p-[20px] lg:px-[100px] z-30
    h-100px lg:h-[120px] items-center py-4"
      >
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              className="w-[80px] md:w-[120px] object-cover rounded-full shadow-lg"
            />
          </Link>

          {/* Menu icon */}
          <div className="flex items-center justify-between text-2xl text-slate-700 font-semibold cursor-pointer md:hidden">
            <FaBarsStaggered onClick={toggleMenu} />
          </div>

          {/* Nav links */}
          <ul className="hidden flex-row md:flex gap-x-14 text-slate-700 font-semibold font-navbarlinks text-[18px] lg:text-[24px]">
            <li className="hover:text-rose-800 p-2">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline underline-offset-8 decoration-rose-800"
                    : "hover:text-rose-800"
                }
              >
                Overview
              </NavLink>
            </li>
            <li className="hover:text-rose-800 p-2">
              <NavLink
                to={"/portfolio"}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline underline-offset-8 decoration-rose-800"
                    : "hover:text-rose-800"
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li className="hover:text-rose-800 p-2">
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline underline-offset-8 decoration-rose-800"
                    : "hover:text-rose-800"
                }
              >
                About
              </NavLink>
            </li>
            <li className="hover:text-rose-800 p-2">
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline underline-offset-8 decoration-rose-800"
                    : "hover:text-rose-800"
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="font-bold p-2 text-[20px] lg:text-[30px]">
              <a href="" target="_blank">
                <BsLinkedin />
              </a>
            </li>
            <li className="font-bold p-2 text-[20px] lg:text-[30px]">
              <a href="" target="_blank">
                <GrInstagram />
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile links */}
        <ul
          className={`bg-gray-100 rounded font-navbarlinks text-[20px] lg:text-[30px] transition-all duration-700 ease-in-out flex flex-col items-center font-semibold md:hidden 
          ${isMenuOpen ? "fixed h-screen max-h-screen w-full left-0 top-0 opacity-100 z-30" : "fixed left-0 top-0 w-[60%] max-h-0 overflow-hidden opacity-0"}`}
        >
          <div className="self-end p-4 cursor-pointer text-3xl">
            <RiCloseLargeLine onClick={() => setisMenuOpen(false)} />
          </div>
          <li className="py-6 duration-1000">
            <NavLink to={"/"} onClick={() => setisMenuOpen(false)}>
              Overview
            </NavLink>
          </li>
          <li className="py-6 duration-1000">
            <NavLink to={"/portfolio"} onClick={() => setisMenuOpen(false)}>
              Portfolio
            </NavLink>
          </li>
          <li className="py-6 duration-1000">
            <NavLink to={"/about"} onClick={() => setisMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li className="py-6 duration-1000">
            <NavLink to={"/contact"} onClick={() => setisMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
          <li className="py-6 duration-1000">
            <a href="" target="_blank">
              <BsLinkedin />
            </a>
          </li>
          <li className="py-6 duration-1000">
            <a href="" target="_blank">
              <GrInstagram />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

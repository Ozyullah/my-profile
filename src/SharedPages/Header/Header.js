
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiPlus,
  FiFileText,
  FiBookOpen,
} from "react-icons/fi";
import { PiWhatsappLogoBold } from "react-icons/pi";
import logoImg from "../../assets/images/cover.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaBlog } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  //  Radial buttons configuration
  const buttons = [
    { label: "About", to: "/about", icon: <FcAbout size={22}/>, angle: 200 },
    { label: "Projects", to: "/projects", icon: <FiBookOpen size={22} />, angle: 230 },
    { label: "Resume", to: "/resume", icon: <FiFileText size={22} />, angle: 310 },
    { label: "Blog", to: "/blog", icon: <FaBlog size={22} />, angle: 340 },
  ];

  return (
    <header className="z-50 top-0">
      {/*  Desktop Navbar (Top) */}
      <div className="hidden lg:block shadow-xl mt-4">
        <div className="navbar bg-base-100 w-10/12 mx-auto rounded-full px-6">
          <div className="navbar-start">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              {/* <img src={logoImg} alt="logo" className="w-40" /> */}
              <p className="text-sky-500">OLYULLAH</p>
            </Link>
          </div>

          <div className="navbar-center">
            <ul className="menu menu-horizontal px-1">
              <li><Link to="/">Home</Link></li>
              <li><a href="#aboutme">About</a></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li tabIndex={0}>
                <details>
                  <summary>Blogs</summary>
                  <ul className="p-2">
                    <li><Link to="/blog">Submenu 1</Link></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*  Mobile Bottom Navbar */}
      <AnimatePresence>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="fixed z-50 bottom-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg rounded-full flex justify-between items-center px-10 py-4 md:hidden"
        >
          {/* Home */}
          <Link
            to="/"
            className={`text-gray-600 hover:text-sky-500 transition ${
              location.pathname === "/" && "text-sky-500"
            }`}
          >
            <FiHome size={24} />
          </Link>

          {/* Floating Add Button */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsOpen(!isOpen)}
              className="bg-sky-500 text-white rounded-full p-4 shadow-lg border border-sky-300 relative z-50"
            >
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <FiPlus size={28} />
              </motion.div>
            </motion.button>
          </div>

          {/* Profile */}
          <a
            href="https://wa.me/message/7R25KORMHHIDD1"
            _target="blank"
            rel="noreferrer"
            className={`text-gray-600 hover:text-sky-500 transition ${
              location.pathname === "https://wa.me/message/7R25KORMHHIDD1" && "text-sky-500"
            }`}
          >
            <PiWhatsappLogoBold className="text-green-600" size={24} />
          </a>
        </motion.div>
      </AnimatePresence>

      {/*  Overlay + Animated Radial Buttons */}
      <AnimatePresence>
  {isOpen && (
    <>
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
      />

      {/* Floating radial menu */}
      <div className="fixed bottom-[90px] left-1/2 -translate-x-1/2 z-40">
        {buttons.map((btn, i) => {
          const distance = 110;
          const x = distance * Math.cos((btn.angle * Math.PI) / 180);
          const y = distance * Math.sin((btn.angle * Math.PI) / 180);
          const isActive = location.pathname === btn.to;

          return (
            <motion.button
              key={i}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
              animate={{ x, y, opacity: 1, scale: 1 }}
              exit={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
              transition={{
                delay: i * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 18,
              }}
              className="absolute"
            >
              <Link
                to={btn.to}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-center w-14 h-14 tooltip tooltip-info rounded-full shadow-xl border border-white/20 transition-all duration-300 ${
                  isActive
                    ? "bg-sky-500 text-white"
                    : "bg-white text-sky-600 hover:bg-green-100"
                }`}
                data-tip={btn.label}
              >
                <span className="text-2xl">{btn.icon}</span>
              </Link>
            </motion.button>
          );
        })}
      </div>
    </>
  )}
</AnimatePresence>

    </header>
  );
};

export default Header;















// import React from 'react';
// import { Link } from 'react-router-dom';
// import logoImg from '../../assets/images/cover.png';
// import './Header.css'

// const Header = () => {
//     return (
//         <div>
//             <div className="setUpPosition shadow-xl w-9/12 mx-auto">
//                 <div className="navbar bg-base-100 w-9/12 rounded-full">
//                     <div className="navbar-start">
//                         <div className="dropdown">
//                             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                             </label>
//                             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                                 <li><Link to={'/'}>Home</Link></li>
//                                 <li><Link to={'/about'}>About</Link></li>
//                                 <li><Link to={'/projects'}>Projects</Link></li>
//                                 <li>
//                                     <a>Blogs</a>
//                                     <ul className="p-2">
//                                         <li><Link to={'/blog'}>Submenu 1</Link></li>
//                                         <li><a>Submenu 2</a></li>
//                                     </ul>
//                                 </li>
//                                 <li><Link to={'/resume'}>Resume</Link></li>

//                             </ul>
//                         </div>
//                         <Link to={"/"} className="btn btn-ghost normal-case text-xl"><img src={logoImg} alt="" className=" w-44" /></Link>
//                     </div>
//                     <div className="navbar-center hidden lg:flex">
//                         <ul className="menu menu-horizontal px-1">
//                             <li><Link to={'/'}>Home</Link></li>
//                             <li><Link to={'/about'}>About</Link></li>
//                             <li><Link to={'/projects'}>Projects</Link></li>
//                             <li tabIndex={0}>
//                                 <details>
//                                     <summary>Blogs</summary>
//                                     <ul className="p-2">
//                                         <li><Link to={'/blog'}>Submenu 1</Link></li>
//                                         <li><a>Submenu 2</a></li>
//                                     </ul>
//                                 </details>
//                             </li>
//                             <li><Link to={'/resume'}>Resume</Link></li>

//                         </ul>
//                     </div>
//                     {/* <div className="navbar-end">
//                         <div className=" dropdown dropdown-end">
//                             <button className="btn btn-ghost btn-circle">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
//                             </button>
//                             <div className=" form-control mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box">
//                                 <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
//                             </div>
//                         </div>
                        
//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;
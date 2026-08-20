import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImTwitter } from "react-icons/im";
import { IoIosMailOpen } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../../assets/images/OLYULLAH.png";
import "./Slider.css";

const socialIcons = [
  { icon: <TiSocialLinkedinCircular className="text-blue-600 text-3xl" />, link: "https://www.linkedin.com/in/md-olyullah-7b1b20160?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { icon: <MdOutlineFacebook className="text-sky-500 text-3xl" />, link: "https://www.facebook.com/share/18SXYznGMN/" },
  { icon: <IoLogoWhatsapp className="text-green-500 text-3xl" />, link: "https://wa.me/message/7R25KORMHHIDD1" },
  // { icon: <ImTwitter className="text-sky-400 text-2xl" />, link: "#" },
  { icon: <IoIosMailOpen className="text-red-500 text-3xl" />, link: "#" },
];

const Slider = () => {
  return (
    <section className="relative text-white flex flex-col lg:flex-row items-center justify-center overflow-hidden px-6">

      {/* ==== Left Side: Image + Vertical Social Icons ==== */}
      <div className="grid">
<div className="mb-6 text-center lg:text-left pt-5">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
    <span className="bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
      <TypeAnimation
        sequence={[
          "Welcome to my Portfolio",
          2000,
          "Explore My Creative World",
          2000,
        ]}
        speed={50}
        repeat={Infinity}
      />
    </span>
  </h1>
</div>


        <div className="relative z-10 flex items-center justify-center mb-10 lg:mb-0">
        

        {/* Sidebar Icons */}
        <div className="flex flex-col gap-6 mr-10">
          {[
            { icon: <FaFacebookF />, color: "hover:text-blue-500", link: "https://www.facebook.com/share/18SXYznGMN/" },
            { icon: <FaInstagram />, color: "hover:text-pink-500", link: "#"},
            { icon: <FaLinkedinIn />, color: "hover:text-sky-500", link: "https://www.linkedin.com/in/md-olyullah-7b1b20160?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
            { icon: <FaTwitter />, color: "hover:text-cyan-400", link: "#" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              whileHover={{ scale: 1.2, x: 4 }}
              className={`text-gray-300 text-2xl z-10 transition-all duration-300 ${item.color}`}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
           {/* ==== Background Abstract Tall Shapes ==== */}
      <div className="absolute w-[400px] h-[700px] bg-orange-500 rounded-[200px] blur-2xl opacity-40 rotate-[30deg] top-[-100px] right-[150px] mix-blend-multiply"></div>
      <div className="absolute w-[350px] h-[650px] bg-blue-600 rounded-[180px] blur-2xl opacity-40 rotate-[-25deg] bottom-[-100px] left-[150px] mix-blend-multiply"></div>
      <div className="absolute w-[280px] h-[600px] bg-gray-700 rounded-[150px] blur-2xl opacity-30 rotate-[10deg] bottom-[0px] right-[100px] mix-blend-multiply"></div>
          <img
            src={image}
            alt="Model"
            className="w-[280px] sm:w-[360px] md:w-[460px] lg:w-[520px] object-cover drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </div>
      </div>
      

      {/* ==== Right Side: Developer Info ==== */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-lg text-center lg:text-left ml-10"
      >
        <div className="mb-4 text-black">

          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold  pb-8" style={{fontFamily:"Traditional Arabic"}}>
           السلام عليكم ورحمة الله وبركاته
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
           Hi👋, I'm <span>OLYULLAH</span>
          </h2>
        </div>
        <TypeAnimation
          sequence={[
            "I'm a Freelance Videographer",
            1500,
          ]}
          speed={40}
          repeat={Infinity}
          className="text-sky-400 font-semibold text-lg sm:text-xl mb-4"
        />

        {/* <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
          I build clean, responsive, functional websites that help businesses grow.
        </p> */}

        {/* --- Social Icons --- */}
        <div className="flex justify-center lg:justify-start gap-4 mb-6">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
          {/* --- Contact Button --- */}
        <Link to="/projects" className="flex items-center font-semibold gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-sky-400 to-orange-400 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
                    >
                      View my Work 
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <BsFillArrowRightCircleFill className="text-2xl" />
                      </motion.span>
        </Link>
        <Link to="/resume">
          <button className="flex items-center font-semibold justify-center gap-2 bg-transparent border-2 border-sky-500 text-sky-400 px-6 py-3 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300">
            View my Resume <BsFillArrowRightCircleFill className="text-2xl" />
          </button>
        </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Slider;








// import React, { useEffect } from 'react';
// import image from '../../assets/images/habibullahwobg.png';
// import salam from '../../assets/images/salam.png';
// import { TypeAnimation } from 'react-type-animation';
// import { BsFillArrowRightCircleFill } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import { TiSocialLinkedinCircular } from 'react-icons/ti';
// import { MdOutlineFacebook } from 'react-icons/md';
// import { IoLogoWhatsapp } from 'react-icons/io';
// import { ImTwitter } from 'react-icons/im';
// import { IoIosMailOpen } from 'react-icons/io';
// import './Slider.css';

// const socialIcons = [
//   { icon: <TiSocialLinkedinCircular className="text-blue-600 text-3xl" />, link: "#" },
//   { icon: <MdOutlineFacebook className="text-sky-500 text-3xl" />, link: "#" },
//   { icon: <IoLogoWhatsapp className="text-green-500 text-3xl" />, link: "#" },
//   { icon: <ImTwitter className="text-sky-400 text-3xl" />, link: "#" },
//   { icon: <IoIosMailOpen className="text-red-500 text-3xl" />, link: "#" },
// ];

// const Slider = () => {
//   useEffect(() => {
//     // 🎉 Generate confetti burst
//     const colors = ["#FF4D6D", "#4DD2FF", "#FFD54D", "#7B4DFF", "#4DFF7B"];
//     const container = document.querySelector(".slider-body");
//     for (let i = 0; i < 40; i++) {
//       const confetti = document.createElement("span");
//       confetti.className = "confetti-piece";
//       confetti.style.left = Math.random() * 100 + "vw";
//       confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//       confetti.style.width = 8 + Math.random() * 8 + "px";
//       confetti.style.height = 10 + Math.random() * 10 + "px";
//       confetti.style.animationDuration = 3 + Math.random() * 3 + "s";
//       confetti.style.animationDelay = Math.random() * 2 + "s";
//       container.appendChild(confetti);

//       // Auto remove after animation
//       setTimeout(() => confetti.remove(), 6000);
//     }
//   }, []);

//   return (
//     <div className="slider-body relative w-full overflow-hidden">
//       {/* 🎉 Background Confetti Lights */}
//       <div className="lighting-bg">
//         {[...Array(12)].map((_, i) => <span key={i} className="light"></span>)}
//       </div>

//       {/* Salam Top Right */}
//       <div className="flex justify-end p-4 relative z-10">
//         <img src={salam} alt="Salam" className="w-12 md:w-16" />
//       </div>

//       {/* Main Hero Section */}
//       <div className="hero py-8 md:py-16">
//         <div className="hero-content flex-col lg:flex-row gap-10 lg:gap-20 relative z-10">

//           {/* Profile + Orbiting Socials */}
//           <div className="relative flex justify-center lg:justify-end w-full lg:w-1/2">
//             <div className="relative">
//               {/* Glowing Ring */}
//               <div className="absolute inset-0 rounded-full border-4 border-sky-300 animate-pulse blur-md"></div>
//               <img
//                 src={image}
//                 alt="Profile"
//                 className="w-52 sm:w-64 md:w-80 lg:w-96 rounded-full border-4 border-sky-200 shadow-xl relative z-10"
//               />

//               {/* Orbiting Social Icons */}
//               {socialIcons.map((item, index) => (
//                 <a
//                   href={item.link}
//                   key={index}
//                   className={`floating-bubble bubble-${index}`}
//                 >
//                   {item.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Text Section */}
//           <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 md:px-6">
//             <div className="text-sky-600 text-lg md:text-xl font-semibold mb-4">
//               <TypeAnimation
//                 sequence={[
//                   `I'm Front-End Web Developer`, 1500,
//                   `I'm Full-Stack Web Developer (MERN)`, 1500,
//                   `I'm React Developer`, 1500
//                 ]}
//                 speed={40}
//                 repeat={Infinity}
//               />
//             </div>

//             <p className="font-serif text-sm sm:text-base md:text-lg mb-6 leading-relaxed text-justify">
//               Motivated and detail-oriented Junior Web Developer
//               with a strong foundation in front-end and back-end
//               technologies. Passionate about building responsive,
//               user-friendly web applications and interested to
//               contribute to a dynamic development team while
//               continuously enhancing technical expertise.
//             </p>

//             <Link to={'/contact'}>
//               <button className="btn btn-info btn-outline rounded-full flex items-center gap-2 w-fit">
//                 Contact me <BsFillArrowRightCircleFill className="text-2xl" />
//               </button>
//             </Link>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;





// import React from 'react'; 
// import image from '../../assets/images/habibullahwobg.png';
// import salam from '../../assets/images/salam.png';
// import { TypeAnimation } from 'react-type-animation';
// import { BsFillArrowRightCircleFill } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import { TiSocialLinkedinCircular } from 'react-icons/ti';
// import { MdOutlineFacebook } from 'react-icons/md';
// import { IoLogoWhatsapp } from 'react-icons/io';
// import { ImTwitter } from 'react-icons/im';
// import { IoIosMailOpen } from 'react-icons/io';
// import './Slider.css';

// const socialIcons = [
//     { icon: <TiSocialLinkedinCircular className="text-blue-600" />, link: "#" },
//     { icon: <MdOutlineFacebook className="text-sky-400" />, link: "#" },
//     { icon: <IoLogoWhatsapp className="text-green-400" />, link: "#" },
//     { icon: <ImTwitter className="text-sky-500" />, link: "#" },
//     { icon: <IoIosMailOpen className="text-red-500" />, link: "#" },
// ];

// const Slider = () => {
//     return (
//         <div className='slider-body '>
//             <div className='flex justify-end p-4'>
//                 <img src={salam} alt="Salam" className='w-16' />
//             </div>

//             <div className="hero bg-base-100 shadow-lg ">
//                 <div className="hero-content flex-col lg:flex-row-reverse">

//                     {/* Image with orbiting/floating social bubbles */}
//                     <div className='w-1/2 flex justify-end relative'>
//                         <img 
//                             src={image} 
//                             alt='Profile' 
//                             className="w-96 rounded-full" 
//                         />
                        
                        
//  {/* Optional glowing blur */}
//                         <div className='blur-sector'></div>
//                         <div className='blur-sector'></div>
//                         {socialIcons.map((item, index) => (
//                             <a 
//                                 href={item.link} 
//                                 key={index} 
//                                 className={`floating-bubble bubble-${index}`}
//                             >
//                                 {item.icon}
//                             </a>
//                         ))}
                        
//                     </div>

//                     <div>
                       
//                     </div>

//                     {/* Text and animation */}
//                     <div className='w-1/2 flex flex-col justify-center p-5'>
//                         <div className='text-sky-600 mb-4'>
//                             <TypeAnimation
//                                 sequence={[
//                                     `I'm Front-End Web Developer`, 1000,
//                                     `I'm Full-Stack Web Developer (MERN)`, 1000,
//                                     `I'm React Developer`, 1000
//                                 ]}
//                                 speed={10}
//                                 repeat={Infinity}
//                             />
//                         </div>
                        

//                         <p className='font-serif mb-5'>
//                             As a computer science & engineering student, my career goal is to apply my knowledge and skills 
//                             to develop innovative solutions that solve real-world problems. I aim to contribute to the field 
//                             of technology by designing and implementing software applications that enhance efficiency, security 
//                             and user experience. My goal is to continuously learn and adapt to emerging technologies while 
//                             collaborating with diverse teams to create impactful and sustainable solutions in the ever-evolving 
//                             world of computer science.
//                         </p>

//                         <Link to={'/contact'}>
//                             <button className="btn btn-info btn-outline rounded-full flex items-center gap-2">
//                                 Contact me <BsFillArrowRightCircleFill className='text-2xl' />
//                             </button>
//                         </Link>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Slider;






// // import React from 'react';
// // import image from '../../assets/images/habibullahwobg.png';
// // import imgObject from '../../assets/images/profileBg.png';
// // import { TypeAnimation } from 'react-type-animation';
// // import { BsFillArrowRightCircleFill, VscPreview } from 'react-icons/bs';
// // import salam from '../../assets/images/salam.png';
// // import './Slider.css';
// // import { Link } from 'react-router-dom';
// // import { TiSocialLinkedinCircular } from 'react-icons/ti';
// // import { MdOutlineFacebook } from 'react-icons/md';
// // import { IoLogoWhatsapp } from 'react-icons/io';
// // import { ImTwitter } from 'react-icons/im';
// // import { IoIosMailOpen } from 'react-icons/io';
// // // import bganimation from '../../assets/images/stars animated.mp4';
// // // import sliderAnimation from '../../assets/images/day animation.mp4';

// // const Slider = () => {
// //     return (
// //         <div className='slider-body'>
// //             <div >

// //                 {/* <div className=' sm:hidden layerOver'></div> */}
// //                 {/* <video className='bgSlide' src={sliderAnimation} autoPlay loop muted></video> */}
// //             </div>
// //             <div>
// //                 <div className='flex justify-end'>
// //                     <img src={salam} alt="" className='w-16 ' />
// //                 </div>
// //                 <div className="hero bg-base-100 shadow-lg">

// //                     <div className="hero-content flex-col lg:flex-row-reverse">


// //                         <div className=' w-1/2 ml-10 md:flex lg:flex  md:justify-center lg:justify-center image-des'>

// //                             {/* <img className=' w-52 -z-10 top-72' src={imgObject} alt="" /> */}

// //                             <img src={image} alt='' className=" w-96 left-36 border-x-4 border-orange-300" style={{ borderRadius: '50%', }} />

// //                             <div id='blur-position' className='blur-sector'>
// //                             </div>

// //                             <div id='blur-position2' className='blur-sector'></div>
// //                         </div>
// //                         <div className='w-1/2 flex'>
// //                             <div className='p-5'>
// //                                 <a href="" className=''><TiSocialLinkedinCircular className='mb-2 text-sky-400' /></a>
// //                                 <a href="" className=''><MdOutlineFacebook className='mb-2 text-sky-400' /></a>

// //                                 <a href=""><IoLogoWhatsapp className='mb-2 text-green-400' /></a>

// //                                 <a href=""><ImTwitter className='mb-2 text-sky-400' /></a>

// //                                 <a href=""><IoIosMailOpen /></a>
// //                             </div>
// //                             <div>
// //                                 <div className=' text-sky-600'>
// //                                     <TypeAnimation
// //                                         sequence={[
// //                                             // Same substring at the start will only be typed once, initially
// //                                             `I'm front-end web Developer`,
// //                                             1000,
// //                                             `I'm Full-Stack web Developer (MERN)`,
// //                                             1000,
// //                                             `I'm React developer`,
// //                                             1000,
// //                                         ]}
// //                                         speed={10}
// //                                         style={{ fontSize: '', color: '' }}
// //                                         repeat={Infinity}
// //                                     />
// //                                 </div>

// //                                 <div>
// //                                     <p className=' font-serif'>As a computer science & engineering student, my career goal is to apply my knowledge and skills to develop innovative solutions that solve real-world problems. I aim to contribute to the field of technology by designing and implementing software applications that enhance efficiency, security and user experience. My goal is to continuously learn and adapt to emerging technologies while collaborating with diverse teams to create impactful and sustainable solutions in the ever-evolving world of computer science.</p>
// //                                 </div>
// //                                 <Link to={'/contact'}><button className="btn btn-info btn-outline rounded-full mt-5">Contact me <BsFillArrowRightCircleFill className='text-2xl' /></button></Link>
// //                             </div>

// //                         </div>

// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Slider;
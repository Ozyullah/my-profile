
import React from "react";
import { motion } from "framer-motion";
import developmentIcon from "../../assets/images/development.png";
import design from "../../assets/images/designer.png";
import res from "../../assets/images/responcive.png";
import maintainence from "../../assets/images/website-Maintenance.png";
import Marquee from "react-fast-marquee";

const services = [
  {
    title: "Web Design",
    img: design,
    desc: "Creative and functional designs that align aesthetics with usability — ensuring a seamless user experience.",
  },
  {
    title: "Web Application",
    img: developmentIcon,
    desc: "Modern, scalable, and high-performance web apps tailored to your business logic and growth goals.",
  },
  {
    title: "Responsive Design",
    img: res,
    desc: "Ensuring your website looks flawless and performs perfectly on any device or screen size.",
  },
  {
    title: "Maintenance & Support",
    img: maintainence,
    desc: "Ongoing website care, updates, and optimizations to keep your digital presence running smoothly.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 10 },
  },
};

const Services = () => {
  return (
    <section className="relative w-10/12 mx-auto py-20 px-6 lg:px-20 bg-gradient-to-b from-white via-gray-50 to-sky-50 overflow-hidden">
      {/* Background gradient blob for extra depth */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-200 opacity-30 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-200 opacity-30 blur-3xl rounded-full -z-10"></div>

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative"
      >
        <h2 className="text-4xl font-bold text-gray-800 inline-block relative">
          💼 My <span className="text-sky-500">Services</span>
          <span className="absolute left-1/2 -bottom-3 w-24 h-1 rounded-full bg-gradient-to-r from-sky-400 to-orange-400 transform -translate-x-1/2"></span>
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          Premium solutions built to elevate your online presence
        </p>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="relative group bg-white rounded-2xl shadow-lg p-8 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl overflow-hidden"
          >
            {/* Glowing border animation */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-sky-400 transition-all duration-500"></div>

            {/* Floating icon */}
            <div className="flex justify-center mb-6">
              <motion.img
                src={service.img}
                alt={service.title}
                className="w-20 h-20 object-contain"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 text-center mb-3 group-hover:text-sky-600 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              {service.desc}
            </p>

            {/* Gradient overlay hover effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-sky-100/50 via-transparent to-transparent transition-opacity duration-500 rounded-2xl"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Marquee */}
      <div className="mt-16">
        <Marquee
          className="text-sky-600 font-semibold text-lg tracking-wide"
          gradient={false}
          speed={60}
        >
          I deliver modern, responsive, and high-performing digital experiences •
          Web Design • Web Application • Responsive Design • Maintenance •
        </Marquee>
      </div>
    </section>
  );
};

export default Services;












// import React from 'react';
// // import {LiaConnectdevelop} from 'react-icons/lia';
// import developmentIcon from '../../assets/images/development.png';
// import design from '../../assets/images/designer.png';
// import res from '../../assets/images/responcive.png';
// // import { TypeAnimation } from 'react-type-animation';
// import Marquee from 'react-fast-marquee';
// import maintainence from '../../assets/images/website-Maintenance.png';
// import './Services.css';

// const Services = () => {
//     return (
//         <div className=' p-10'>
//             <h2 className='text-2xl text-center font-serif'>Services</h2>

//             <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
//                 <div className="">
//                     <img src={design} alt='' className=' w-20 flex justify-center top-[-50%]'></img>
//                     <div className='card card-border bg-base-500 shadow-xl'>
//                         <div className="card-body">
//                             <h2 className="card-title">Web Design</h2>
//                             <p className='p-text'>I provide professional and innovative website design and development services to help businesses and achieve their digital gools.</p>

//                         </div>

//                         <span className="top s-design"></span>
//                         <span className="right s-design"></span>
//                         <span className="bottom s-design"></span>
//                         <span className="left s-design"></span>
//                     </div>
//                 </div>


//                 <div className="card card-border bg-base-100 shadow-xl">
//                     {/* <h1><LiaConnectdevelop className='text-5xl w-10 ml-5'/></h1> */}
//                     <img src={developmentIcon} alt='' className=' w-20'></img>
//                     <div className="card-body">
//                         <h2 className="card-title">Web Application</h2>
//                         <p className='p-text'>I'm a detail-oriented web developer, passionate about creating engaging applications that drive business success.</p>

//                     </div>

//                     <span className="top s-design"></span>
//                     <span className="right s-design"></span>
//                     <span className="bottom s-design"></span>
//                     <span className="left s-design"></span>
//                 </div>


//                 <div className="card card-border bg-base-100 shadow-xl">
//                     <img src={res} alt='' className=' w-20'></img>
//                     <div className="card-body">
//                         <h2 className="card-title">Responsive Design</h2>
//                         <p className='p-text'>As a skilled web developer. I craft visually engaging and user-friendly websites through responsive design techniques</p>

//                     </div>

//                     <span className="top s-design"></span>
//                     <span className="right s-design"></span>
//                     <span className="bottom s-design"></span>
//                     <span className="left s-design"></span>
//                 </div>



//                 <div className="card card-border bg-base-100 shadow-xl">
//                     <img src={maintainence} alt='' className=' w-20'></img>
//                     <div className="card-body">
//                         <h2 className="card-title text-2px">Website Maintenance and Support</h2>
//                         <p className='p-text'>As a dedicated WebSite Maintenance and Support professional, I excel in providing assistance and ensuring seamless online experiences for clients</p>

//                     </div>

//                     <span className="top s-design"></span>
//                     <span className="right s-design"></span>
//                     <span className="bottom s-design"></span>
//                     <span className="left s-design"></span>
//                 </div>
//             </div>
//             <div className=''>
//                 <Marquee className='-z-10 text-sky-400 select-none'>I will try my best services.</Marquee>
//             </div>
//         </div>
//     );
// };

// export default Services;
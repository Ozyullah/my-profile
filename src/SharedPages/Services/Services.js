
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
    desc: "Professional and innovative designs that transform ideas into visually engaging websites tailored to your brand.",
  },
  {
    title: "Web Application",
    img: developmentIcon,
    desc: "Building scalable, secure, and high-performing web apps that boost business efficiency and engagement.",
  },
  {
    title: "Responsive Design",
    img: res,
    desc: "Crafting mobile-first, fully responsive websites that deliver seamless experiences on all devices.",
  },
  {
    title: "Maintenance & Support",
    img: maintainence,
    desc: "Providing reliable website updates, fixes, and performance monitoring for smooth operations.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 12 },
  },
};

const Services = () => {
  return (
    <section className="py-16 w-10/12 mx-auto lg:px-20 bg-white relative">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800">
          My <span className="text-sky-500">Services</span>
          <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-gradient-to-r from-sky-400 to-orange-400 transform -translate-x-1/2"></span>
        </h2>
        <p className="text-gray-500 mt-2 text-lg">
          Solutions designed to grow your business online
        </p>
      </motion.div>

      {/* Services Grid */}
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
            className="group bg-white rounded-2xl shadow-lg p-6 
                       transition-all duration-300 transform
                       hover:-translate-y-3 hover:shadow-2xl 
                       hover:rotate-x-3 hover:rotate-y-3"
            style={{
              perspective: "1000px",
            }}
          >
            <div className="flex justify-center">
              <img
                src={service.img}
                alt={service.title}
                className="w-20 mb-6 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Marquee */}
      <div className="mt-12">
        <Marquee
          className="text-sky-600 font-medium text-lg tracking-wide"
          gradient={false}
          speed={60}
        >
          I will always give my best service • Web Design • Development •
          Responsive Design • Maintenance •
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
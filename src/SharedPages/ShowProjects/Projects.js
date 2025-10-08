
import React, { useEffect, useState } from 'react';
import zait1 from '../../assets/images/zaitsc.png';
import zait2 from '../../assets/images/zaithome2.png';
import zait3 from '../../assets/images/zaitfilter.png';
import zait4 from '../../assets/images/zaidash.png';
import falrex1 from '../../assets/images/falrex.png';
import usedProduct1 from '../../assets/images/used product.png';
import usedProduct2 from '../../assets/images/usedDescr.png'; 
import travelImg1 from '../../assets/images/travel web.png';
import travelImg2 from '../../assets/images/UiUxLogo.png';
import studyImg1 from '../../assets/images/learnhome.png';
import studyImg2 from '../../assets/images/learncategory.png';

import './Projects.css';

const projectsData = [
  {
    title: "Publication Platform Website",
    description: "Zaitoon publication website create for publication profile and sells books. User can be see all books and details. Products filter system with multiple option. User can be order any book with proper details. Admin can manage all orders, add products.Admin can add product categories , Marquee setup , add offer , updated products. Super admin can make other users to admin and all access control system. ",
    owner: "Zaitoon publication",
    date: "06/07/2025",
    specification: "Publication with E-commerce Website, Admin Panel, User Authentication, Product Management, Order Management, Responsive Design",
    tech: "Reactjs, MongoDB, Expressjs, PrimReact, Framer Motion.",
    liveDemo: "https://zaitoonpublication.com/",
    images: [
      { ident: "Home page", img: zait1 },
      { ident: "Home page in Category", img: zait2 },
      { ident: "Products filter system", img: zait3 },
      { ident: "Overall platform performance show", img: zait4 }
    ],
  },
  {
    title: "Real-time Ecommerce platform",
    description: "Falrex is a E-commers website. it's for b2b, b2c drop shiping adjusted feature. drop seller can be share product any platform then viw from dashboard overall sells and He/she point. Virtual trial system. AI based product search system. User can create shop and sell products. User can be Report any product with proper details. Dashboard for user and admin. Dashboard for user only show orders and payment system. Admin can manage all orders, products, users and analysis Report product then Notify seller. Super admin can make other users admin. Admin can add product categories and seller verify system.",
    tech: "Nextjs,TailwindCss, MongoDB, Nodejs, Framer Motion, AI (Computer Vision).",
    owner: "Falrex Ltd",
    date: "05/02/2026 (aprox)",
    specification: "E-commerce Website, Drop shipping, Admin Panel, User Authentication, Product Management, Order Management, Responsive Design, AI Integration",
    liveDemo: "https://falrex.com/",
    images: [
      { ident: "Home Page", img: falrex1 },
      { ident: "This image3", img: usedProduct2 }
    ],
  },
  {
    title: "Ecommerce Website",
    description: "Buy and sell used laptops and other products. User can be Report any product with proper details. Dashboard for user and admin. Dashboard for user only show orders and payment system. Admin can manage all orders, products, users and analysis Report product then Notify seller. Super admin can make other users admin. Admin can add product categories and seller verify system.",
    liveDemo: "https://used-productes.web.app/",
    owner: "Falrex Ltd",
    date: "05/02/2026 (aprox)",
     tech: "Reactjs, tailwindCss, MongoDB, nodejs.",
    specification: "Used product sell E-commerce Website, User Authentication, Seller verification, Product Management, Order Management, Responsive Design, Admin Panel,",
    images: [
      { ident: "Home Page", img: usedProduct1 },
      { ident: "This is too much", img: usedProduct2 }
    ],
  },
  {
    title: "Traveling Website",
    description: "This project was my learning project. Discover travel destinations and services. Explore popular places, book tours, and find travel packages to make your next trip unforgettable.",
    liveDemo: "https://travel-services-e7ebe.firebaseapp.com/",
    tech: "Reactjs, Bootstrap, Firebase, Free Api call.",
    images: [
      { ident: "Travel 1", img: travelImg1 },
      { ident: "Travel 2", img: travelImg2 }
    ],
  },
  {
    title: "Study Website",
    description: "This project my learnign project. Access tutorials and learning resources. Explore various subjects and enhance your knowledge with structured courses and materials. then learn and grow. get premium access.",
    liveDemo: "https://study-platform-67075.firebaseapp.com/",
    images: [
      { ident: "Study 1", img: studyImg1 },
      { ident: "Study 2", img: studyImg2 }
    ],
  },
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project, index = 0) => {
    setCurrentImages(project.images);
    setCurrentIndex(index);
    setCurrentProject(project);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="mt-11 mb-5 w-10/12 mx-auto" id="projects">
      <h2 className="text-4xl text-center font-serif mb-10 relative">
       🚀 My Projects
        <span className="absolute left-1/2 -bottom-2 w-20 z-10 h-1 bg-gradient-to-r from-sky-400 to-orange-400 transform -translate-x-1/2"></span>
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className="group card bg-base-100 shadow-lg overflow-hidden rounded-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div
              className="relative cursor-pointer overflow-hidden"
              onClick={() => openModal(project)}
            >
              <img
                src={project.images[0].img}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition-opacity duration-300 ">
                <button className="outline p-2 rounded-2xl hover:bg-sky-500">View More</button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description.slice(0, 100)}.....</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {(project.tech || "")
                  .split(',')
                  .filter(tech => tech.trim() !== "")
                  .map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && currentProject && (
        <div
          className="fixed inset-0 overflow-auto  bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="relative bg-white overflow-auto rounded-xl h-[90%] shadow-xl p-5 max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-sky-600 rounded-full px-2 py-1 text-white text-2xl font-bold"
            >
              &times;
            </button>

            {/* Main Image with caption */}
            <div className="flex flex-col items-center justify-center">
              <img
                src={currentImages[currentIndex].img}
                alt={currentProject.title}
                className="max-h-[50vh] mx-4 rounded-lg transition-transform duration-300"
              />
              <p className="mt-2 text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                {currentImages[currentIndex].ident}
              </p>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center mt-4 gap-3 overflow-x-auto">
              {currentImages.map((imge, idx) => (
                <img
                  key={idx}
                  src={imge.img}
                  alt={`Thumbnail ${idx}`}
                  className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                    idx === currentIndex ? 'border-sky-500' : 'border-transparent'
                  } hover:opacity-80 transition-opacity duration-200`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>

            {/* Live Demo Link */}
            <div className="mx-20 mt-6">
              <h1 className="text-xl font-bold mb-2">{currentProject.title}</h1>
              <div className='bg-sky-200 inline-block px-3 py-1 rounded-lg mb-2 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
                {currentProject.owner && <p className="mb-1"><span className="font-semibold">Client:</span> {currentProject.owner}</p>}
                {currentProject.tech && <p className="mb-1"><span className="font-semibold">Project Type:</span> {currentProject.title}</p>}
                {currentProject.date && <p className="mb-1"><span className="font-semibold">Completed:</span> {currentProject.date}</p>}
                <hr />
              </div>
              <p>{currentProject.description}</p>
              {/* {currentProject.specification && <p className="mb-1"><span className="font-semibold">Specification:</span> {currentProject.specification}</p>} */}

              <div className=" gap-2 mt-1">
                <p className='text-xl font-semibold pt-5 pb-5'>What included: </p>
                {(currentProject.specification || "")
                  .split(',')
                  .filter(spec => spec.trim() !== "")
                  .map((spec, index) => (
                    <span
                      key={index}
                      className="btn btn-outline grid grid-cols-1 gap-5 text-md text-start  font-semibold px-2.5 py-0.5 rounded-2xl"
                    >
                     ✅ {spec.trim()}
                    </span>
                  ))}
              </div>
              <div className=" grid grid-cols-4 gap-2 mt-1 pt-10 pb-5">
                <h1>Tech Used: </h1>
                {(currentProject.tech || "")
                  .split(',')
                  .filter(tech => tech.trim() !== "")
                  .map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 btn btn-outline text-xs font-semibold px-2.5 py-0.5 rounded-2xl"
                    >
                     {tech.trim()}
                    </span>
                  ))}
              </div>
              <div className='w-full grid flex justify-center mt-4 p-10 border border-dotted border-2 border-sky-300 rounded-xl'>
                <a
                href={currentProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-center gap-2 px-5 py-2 rounded-2xl btn btn-outline bg-gradient-to-r from-sky-400 to-orange-400 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
              >
                Live Demo
              </a>
              <p className='flex-col'>Click to here for Live view</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

import React, { useEffect, useState } from 'react';
import zait1 from '../../assets/images/zaitsc.png';
import falrex1 from '../../assets/images/falrex.png';
import usedProduct1 from '../../assets/images/used product.png';
import usedProduct2 from '../../assets/images/used product.png'; 
import travelImg1 from '../../assets/images/travel web.png';
import travelImg2 from '../../assets/images/UiUxLogo.png';
import studyImg1 from '../../assets/images/best-laptop-medium.jpg';
import studyImg2 from '../../assets/images/profileBg.png';
import './Projects.css';

const projectsData = [
  {
    title: "Publication Platform Website",
    description: "Zaitoon publication website create for publication profile and sells books...",
    tech: "Reactjs, MongoDB, Expressjs, PrimReact, Framer Motion.",
    liveDemo: "https://zaitoonpublication.com/",
    images: [
      { ident: "This image1", img: zait1 },
      { ident: "This image2", img: usedProduct2 }
    ],
  },
  {
    title: "Real-time Ecommerce platform",
    description: "Falrex is a E-commers website. it's for b2b, b2c drop shiping adjusted feature.",
    tech: "Nextjs, MongoDB, Nodejs, Framer Motion.",
    liveDemo: "https://falrex.com/",
    images: [
      { ident: "This image4", img: falrex1 },
      { ident: "This image3", img: usedProduct2 }
    ],
  },
  {
    title: "Ecommerce Website",
    description: "Buy and sell used laptops and other products...",
    liveDemo: "https://used-productes.web.app/",
    images: [
      { ident: "This image3", img: usedProduct1 },
      { ident: "This is too much", img: usedProduct2 }
    ],
  },
  {
    title: "Traveling Website",
    description: "Discover travel destinations and services...",
    liveDemo: "https://travel-services-e7ebe.firebaseapp.com/",
    images: [
      { ident: "Travel 1", img: travelImg1 },
      { ident: "Travel 2", img: travelImg2 }
    ],
  },
  {
    title: "Study Website",
    description: "Access tutorials and learning resources...",
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
    <div className="p-11 w-10/12 mx-auto" id="projects">
      <h2 className="text-4xl text-center font-serif mb-10 relative">
        My Projects
        <span className="absolute left-1/2 -bottom-2 w-20 z-10 h-1 bg-gradient-to-r from-sky-400 to-orange-400 transform -translate-x-1/2"></span>
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
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
              <p className="text-gray-600 mt-2">{project.description}</p>
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
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-xl shadow-xl p-5 max-w-3xl w-full"
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
              <p className="mt-2 text-sm text-gray-600">
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
            <div className="mx-20 mt-6 text-center">
              <h1 className="text-xl font-bold mb-2">{currentProject.title}</h1>
              <a
                href={currentProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition-colors duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
import React, { useRef } from "react";
import bgImage from "../../assets/images/sliderImage.jpg";
import javalogo from "../../assets/images/javalogo.png";
import mernLogo from "../../assets/images/mernStack.png";
import uiuxlogo from "../../assets/images/UiUxLogo.png";
import pyth from "../../assets/images/python.png";
import ml from "../../assets/images/ml.png";
import ProgressBar from "@ramonak/react-progress-bar";
import "./MySkills.css";

const SkillCard = ({ logo, title, skills, glowColor }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 20).toFixed(2);
    const rotateY = (-(x - centerX) / 20).toFixed(2);

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.setProperty("--glow-x", `${x}px`);
    card.style.setProperty("--glow-y", `${y}px`);
    card.style.setProperty("--glow-color", glowColor);
  };

  const resetTilt = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      className="flip-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      ref={cardRef}
      data-aos="zoom-in"
    >
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front">
          <img src={logo} alt={title} className="skill-logo" />
          <h3 className="skill-title">{title}</h3>
          {/* <p className="text-sm opacity-70 mt-2">Hover to view details</p> */}
        </div>

        {/* Back */}
        <div className="flip-card-back">
          <h3 className="skill-title mb-4">{title}</h3>
          <div className="space-y-4 w-full">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1 opacity-80">
                  <span>{skill.name}</span>
                  <span className="font-semibold">{skill.level}%</span>
                </div>
                <ProgressBar
                  completed={skill.level}
                  height="12px"
                  borderRadius="10px"
                  baseBgColor="rgba(0,0,0,0.1)"
                  bgColor={`linear-gradient(90deg, ${glowColor}, #00c6ff)`}
                  customLabel=" "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MySkills = () => {
  const skillsData = [
    {
      logo: mernLogo,
      title: "Full Stack Development",
      glowColor: "#00c6ff",
      skills: [{ name: "MERN Stack", level: 95 }],
    },
    {
      logo: javalogo,
      title: "Java",
      glowColor: "#f97316",
      skills: [
        { name: "Java Language", level: 50 },
        { name: "OOP Concepts", level: 80 },
      ],
    },
    {
      logo: uiuxlogo,
      title: "UI / UX Design",
      glowColor: "#ec4899",
      skills: [{ name: "Design Skills", level: 40 }],
    },
    {
      logo: pyth,
      title: "Python",
      glowColor: "#38bdf8",
      skills: [{ name: "Python", level: 85 }],
    },
    {
      logo: ml,
      title: "Machine Learning",
      glowColor: "#a78bfa",
      skills: [{ name: "ML Concepts", level: 50 }],
    }
  ];

  return (
    <section
      id="skills"
      className="skills-section py-20 w-10/12 mx-auto text-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="mb-14 relative">
        <h2 className="text-4xl font-extrabold uppercase tracking-widest mb-2 dark:text-gray-600 text-gray-900">
          My <span className="text-sky-500">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-orange-400 mx-auto rounded-full"></div>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
          A blend of development and design expertise
        </p>
      </div>

      <div className=" p-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {skillsData.map((data, i) => (
          <SkillCard key={i} {...data} />
        ))}
      </div>
    </section>
  );
};

export default MySkills;




// import React, { useRef } from "react";
// import bgImage from "../../assets/images/sliderImage.jpg";
// import javalogo from "../../assets/images/javalogo.png";
// import mernLogo from "../../assets/images/mernStack.png";
// import uiuxlogo from "../../assets/images/UiUxLogo.png";
// import pyth from "../../assets/images/python.png";
// import ml from "../../assets/images/ml.png";
// import ProgressBar from "@ramonak/react-progress-bar";
// import "./MySkills.css";

// const SkillCard = ({ logo, title, skills }) => {
//   const cardRef = useRef(null);

//   const handleMouseMove = (e) => {
//     const card = cardRef.current;
//     if (!card) return;
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left - rect.width / 2;
//     const y = e.clientY - rect.top - rect.height / 2;
//     const rotateX = (-y / 15).toFixed(2);
//     const rotateY = (x / 15).toFixed(2);
//     card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
//   };

//   const resetTilt = () => {
//     const card = cardRef.current;
//     if (card) card.style.transform = "rotateY(0deg) rotateX(0deg)";
//   };

//   return (
//     <div
//       className="flip-card"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={resetTilt}
//       ref={cardRef}
//       data-aos="zoom-in"
//     >
//       <div className="flip-card-inner">
//         {/* Front Side */}
//         <div className="flip-card-front">
//           <img src={logo} alt={title} className="skill-logo" />
//           <h3 className="skill-title">{title}</h3>
//           <p className="text-sm text-gray-300 mt-2">Hover to view skills</p>
//         </div>

//         {/* Back Side */}
//         <div className="flip-card-back">
//           <h3 className="skill-title mb-4">{title}</h3>
//           <div className="space-y-4 w-full">
//             {skills.map((skill, i) => (
//               <div key={i}>
//                 <div className="flex justify-between text-sm mb-1">
//                   <span>{skill.name}</span>
//                   <span className="text-sky-400 font-semibold">
//                     {skill.level}%
//                   </span>
//                 </div>
//                 <ProgressBar
//                   completed={skill.level}
//                   height="14px"
//                   borderRadius="10px"
//                   baseBgColor="rgba(255,255,255,0.15)"
//                   bgColor="linear-gradient(90deg,#00c6ff,#ff9a00)"
//                   customLabel=" "
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MySkills = () => {
//   const skillsData = [
//     {
//       logo: mernLogo,
//       title: "Full Stack Development",
//       skills: [{ name: "MERN Stack", level: 95 }],
//     },
//     {
//       logo: javalogo,
//       title: "Java",
//       skills: [
//         { name: "Java Language", level: 70 },
//         { name: "OOP Concepts", level: 80 },
//       ],
//     },
//     {
//       logo: uiuxlogo,
//       title: "UI / UX Design",
//       skills: [{ name: "Design Skills", level: 60 }],
//     },
//     {
//       logo: pyth,
//       title: "Python",
//       skills: [{ name: "Python", level: 85 }],
//     },
//     {
//       logo: ml,
//       title: "Machine Learning",
//       skills: [{ name: "ML Concepts", level: 75 }],
//     },
//   ];

//   return (
//     <section
//       id="skills"
//       className="py-20 w-10/12 mx-auto text-center"
//       style={{
//         backgroundImage: `linear-gradient(to bottom, rgba(10,10,15,0.9), rgba(10,10,15,0.9)), url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       {/* Section Header */}
//       <div className="mb-14 relative">
//         <h2 className="text-4xl font-extrabold text-white uppercase tracking-widest mb-2">
//           My <span className="text-sky-400">Skills</span>
//         </h2>
//         <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-orange-400 mx-auto rounded-full"></div>
//         <p className="text-gray-300 mt-3 text-sm">
//           A blend of development and design expertise
//         </p>
//       </div>

//       {/* Skills Grid */}
//       <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {skillsData.map((data, i) => (
//           <SkillCard key={i} {...data} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default MySkills;

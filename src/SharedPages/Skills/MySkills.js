import React, { useEffect, useState } from "react";
import bgImage from "../../assets/images/sliderImage.jpg";
import javalogo from "../../assets/images/javalogo.png";
import mernLogo from "../../assets/images/mernStack.png";
import uiuxlogo from "../../assets/images/UiUxLogo.png";
import pyth from "../../assets/images/python.png";
import ProgressBar from "@ramonak/react-progress-bar";
import "./MySkills.css";

const SkillCard = ({ logo, title, skills }) => {
  const [progressValues, setProgressValues] = useState(skills.map(() => 0));

  // Animate counter
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValues((prev) =>
        prev.map((val, i) =>
          val < skills[i].level ? val + 1 : skills[i].level
        )
      );
    }, 15);

    return () => clearInterval(interval);
  }, [skills]);

  return (
    <div className="skill-card" data-aos="fade-up">
      <div className="icon-wrap">
        <img src={logo} alt={title} className="icon-img" />
      </div>
      <h3 className="skill-title">{title}</h3>

      <div className="space-y-6 w-full">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-1">
              <span className="skill-label">{skill.name}</span>
              <span className="skill-percent">{progressValues[i]}%</span>
            </div>
            <ProgressBar
              completed={progressValues[i]}
              height="16px"
              animateOnRender
              baseBgColor="rgba(255,255,255,0.15)"
              labelAlignment="outside"
              borderRadius="12px"
              transitionDuration="0.6s"
              customLabel=" "
              bgColor="transparent"
              className="relative overflow-hidden rounded-lg"
              barContainerClassName="rounded-lg overflow-hidden"
              completedClassName="gradient-bar"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MySkills = () => {
  const skillsData = [
    {
      logo: mernLogo,
      title: "Full Stack Development",
      skills: [{ name: "MERN Stack", level: 95 }],
    },
    {
      logo: javalogo,
      title: "Java",
      skills: [
        { name: "Java Language", level: 50 },
        { name: "OOP Concepts", level: 80 },
      ],
    },
    {
      logo: uiuxlogo,
      title: "UI / UX Design",
      skills: [{ name: "Design Skills", level: 20 }],
    },
    {
      logo: pyth,
      title: "Python",
      skills: [{ name: "Core Python", level: 80 }],
    },
  ];

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(10,10,15,0.9), rgba(10,10,15,0.9)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-20 w-10/12 mx-auto"
      id="skills"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="section-title">
          My <span className="highlight">Skills</span>

          <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-gradient-to-r from-sky-400 to-orange-400 transform -translate-x-1/2"></span>
        </h2>
        <p className="section-subtitle">
          A blend of development and design expertise
        </p>
      </div>

      {/* Grid */}
      <div className="skills-grid">
        {skillsData.map((skillSet, idx) => (
          <SkillCard key={idx} {...skillSet} />
        ))}
      </div>
    </section>
  );
};

export default MySkills;

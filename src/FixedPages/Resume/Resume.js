import React from 'react';
import './Resume.css';
import { ImLocation2 } from 'react-icons/im';
import { CgPhone } from 'react-icons/cg';
import { ImMail4 } from 'react-icons/im';
import { TbWorld } from 'react-icons/tb';
import { FcDownload } from 'react-icons/fc';
import profileImg from '../../assets/images/owazy.jpg';
import topEffect from '../../assets/images/top-effect.png';
import patternImg from '../../assets/images/beautiful-pattern.png';
import resumePDF from '../../assets/images/habibullahResume.pdf';

const Resume = () => {
  return (
    <div className='resume-container p-10 px-14'>
      {/* Download button */}
      <div className='flex justify-end mb-6'>
        <a href={resumePDF} download="Md_Habibullah_Resume.pdf" className='download-btn flex items-center gap-2'>
          <FcDownload size={24} /> Download Resume
        </a>
      </div>

      <div className='flex flex-col md:flex-row gap-8'>
        {/* Left Panel */}
        <div className='left-panel bg-sky-100 w-full md:w-1/3 pb-5 rounded-lg p-4'>
          <div className='flex justify-center pt-6'>
            <img src={profileImg} alt="Profile" className='border-design border-4 border-sky-200 w-48' />
          </div>

          {/* About */}
          <section className='mt-6'>
            <h2 className='section-title'>About Me</h2>
            <p>
              Motivated and detail-oriented Junior Web Developer pursuing B.Sc in Computer Science & Engineering
              at Daffodil International University. Specialized in Full-Stack Web Development and committed to
              completing projects efficiently.
            </p>
          </section>

          {/* Contact */}
          <section className='mt-6'>
            <h2 className='section-title'>Contact</h2>
            <ul className='contact-list'>
              <li><CgPhone /> +88016-09111813</li>
              <li><ImMail4 /> md.habibullah7520@gmail.com</li>
              <li><TbWorld /> <a href="http://localhost:3000" target="_blank" rel="noreferrer">Portfolio</a></li>
              <li><ImLocation2 /> Mirpur, Dhaka, Bangladesh</li>
            </ul>
          </section>

          {/* Skills */}
          <section className='mt-6'>
            <h2 className='section-title'>Skills</h2>
            <ul className='skill-list'>
              <li>Frontend: HTML5, CSS3, JS (ES6+), React.js, Next.js, JWT, TanstackQuery</li>
              <li>Backend: Node.js, Express.js, MySQL</li>
              <li>Database: MongoDB, Firebase</li>
              <li>Tools & Others: Git, VS Code, REST APIs, Figma</li>
              <li>Soft Skills: Teamwork, Adaptability, Communication</li>
            </ul>
          </section>
        </div>

        {/* Right Panel */}
        <div className='right-panel w-full md:w-2/3 pb-5 relative'>
          <img src={topEffect} alt="" className='absolute top-0 right-0 w-64 opacity-30' />

          {/* Header */}
          <header className='mb-6'>
            <h1 className='text-4xl font-bold text-cyan-800'>Md. Habibullah</h1>
            <h3 className='text-xl text-cyan-900'>Junior Full-Stack Developer</h3>
          </header>

          {/* Education */}
          <section className='mb-6'>
            <h2 className='section-title'>Education</h2>
            <ul>
              <li>
                <strong>Daffodil International University, Dhaka</strong> (2021 – Present)<br />
                B.Sc in Computer Science and Engineering
              </li>
              <li className='mt-2'>
                <strong>Jhalokathi NS Kamil Madrasah</strong> (2018 – 2020)<br />
                HSC, GPA 4.95
              </li>
            </ul>
          </section>

          {/* Experience */}
          <section className='mb-6'>
            <h2 className='section-title'>Experience</h2>
            <ul>
              <li>
                <strong>Data Visionary Contest (2025)</strong> – Built “Data Pulse 2.0” using Next.js, AntDesign, TypeScript, JWT
              </li>
              <li>
                <strong>Crack Dataset Contest (2024)</strong> – Developed “Data Pulse 1.0”
              </li>
              <li>
                <strong>Web Developer (MERN)</strong> – Created publication and e-commerce platforms using React.js, Node.js, Express, MongoDB
              </li>
            </ul>
          </section>

          {/* Projects */}
          <section className='mb-6'>
            <h2 className='section-title'>Projects</h2>
            <ul>
              <li>
                <strong>Zaitoon Publication</strong> – Publication & book selling platform (React.js, Node.js, MongoDB)<br />
                🔗 <a href="https://zaitoonpublication.com" target="_blank" rel="noreferrer">zaitoonpublication.com</a>
              </li>
              <li className='mt-2'>
                <strong>Falrex</strong> – E-commerce B2B & B2C platform (Next.js, AntDesign, MongoDB)<br />
                🔗 <a href="https://falrex.com" target="_blank" rel="noreferrer">falrex.com</a>
              </li>
            </ul>
          </section>

          {/* Certificates & Personal */}
          <section className='mb-6'>
            <h2 className='section-title'>Certificates & Personal Details</h2>
            <p>Organizer – Intra University Crack Dataset Contest (2024)</p>
            <p>Date of Birth: 07/05/2000 | Marital Status: Single | Nationality: Bangladeshi | Religion: Islam | Blood Group: B+</p>
            <p>Permanent Address: Betagi, Barguna, Barishal</p>
            <p>Hobbies: Reading books, Learning new skills, Exploring new places</p>
          </section>

          {/* Reference */}
          <section className='mb-6'>
            <h2 className='section-title'>Reference</h2>
            <p>Md. Sadekur Rahman – Assistant Professor, CSE Department, Daffodil International University</p>
            <p>📧 sadekur.cse@daffodilvarsity.edu.bd | 📞 +88-01676379698</p>
          </section>

          <img src={patternImg} alt="" className='w-32 absolute bottom-0 right-0 opacity-20' />
        </div>
      </div>
    </div>
  );
};

export default Resume;

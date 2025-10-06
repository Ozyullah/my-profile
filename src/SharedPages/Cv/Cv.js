import React from "react";
import CvFile from "../../assets/images/habibullahCv.pdf"; // place the PDF inside /src/assets
import { IoIosMailOpen } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Cv = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg text-gray-800 leading-relaxed">
      {/* Header */}
      <div className="text-center border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold">Md. Habibullah</h1>
        <p className="text-sm text-gray-600">
          Motivated and detail-oriented Junior Web Developer
        </p>
        <p className="text-gray-700 mt-2 flex justify-center gap-4">
          <span className="flex "><IoIosMailOpen className="text-sky-500 text-xl mr-1" /> md.habibullah7520@gmail.com</span> | <span className="flex"><FaPhoneAlt className="text-sky-500 text-xl mr-1" /> +8801609-111813</span>
        </p>

        <div className="flex justify-center gap-4 mt-3">
          <a
            href="https://my-profile-55a9d.firebaseapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Portfolio
          </a>
          <a
            href="https://github.com/HabibullahOzy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            GitHub
          </a>
        </div>

        {/* Download CV Button */}
        <div className="mt-5">
          <a
            href={CvFile}
            download="Habibullah_CV.pdf"
            className="px-5 py-2 bg-sky-600 text-white rounded-lg shadow hover:bg-sky-700 transition"
          >
            ⬇️ Download CV
          </a>
        </div>
      </div>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Education</h2>
        <p>
          <strong>Daffodil International University, Dhaka</strong> <br />
          B.Sc in Computer Science and Engineering (2021 – present)
        </p>
        <p className="mt-2">
          <strong>Jhalokathi NS Kamil Madrasah</strong> <br />
          HSC (2019 – 2020)
        </p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Experience</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Data Visionary Contest (2025)</strong> – National Data
            Analytics Competition organized by NLP and ML Research Lab. Team
            built “Data Pulse 2.0” using Next.js, AntDesign, TypeScript, JWT.
          </li>
          <li>
            <strong>Crack Dataset Contest (2024)</strong> – Intra-University
            dataset contest, developed “Data Pulse 1.0”.
          </li>
          <li>
            <strong>Web Developer (MERN)</strong> – Created publication and
            e-commerce platforms with React.js, Node.js, Express, MongoDB.
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Skills</h2>
        <p>
          <strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React.js,
          Next.js, JWT, TanstackQuery, Hook-form, Framer-motion
        </p>
        <p>
          <strong>Backend:</strong> Node.js, Express.js, MySQL (entry-level)
        </p>
        <p>
          <strong>Database:</strong> MongoDB, Firebase
        </p>
        <p>
          <strong>Tools & Others:</strong> Git/GitHub, VS Code, REST APIs, Figma
        </p>
        <p>
          <strong>Soft Skills:</strong> Teamwork, Adaptability, Communication
        </p>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Projects</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Zaitoon Publication:</strong> Publication profile & book
            selling platform using React.js, Node.js, Express.js, MongoDB. <br />
            🔗{" "}
            <a
              href="https://zaitoonpublication.com/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              zaitoonpublication.com
            </a>
          </li>
          <li>
            <strong>Falrex:</strong> E-commerce B2B & B2C dropshipping platform.
            Built with Next.js, AntDesign, MongoDB, Express.js, Node.js. <br />
            🔗{" "}
            <a
              href="https://falrex.com/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              falrex.com
            </a>
          </li>
        </ul>
      </section>

      {/* Certificates */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Certificates</h2>
        <p>Organizer – Intra University Crack Dataset Contest (2024)</p>
      </section>

      {/* Personal Info */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">
          Personal Details
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Date of Birth: 07/05/2000</li>
          <li>Marital Status: Single</li>
          <li>Nationality: Bangladeshi</li>
          <li>Religion: Islam</li>
          <li>Blood Group: B+</li>
          <li>Permanent Address: Betagi, Barguna, Barishal</li>
        </ul>
      </section>

      {/* Hobbies */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Hobbies</h2>
        <p>Reading books, Achieving new skills, Exploring new places</p>
      </section>

      {/* Reference */}
      <section>
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Reference</h2>
        <p>
          Md. Sadekur Rahman <br />
          Assistant Professor, CSE Department, Daffodil International University{" "}
          <br />
           <p className="text-gray-700 mt-2 flex gap-4">
          <span className="flex "><IoIosMailOpen className="text-sky-500 text-xl mr-1" /> sadekur.cse@daffodilvarsity.edu.bd</span> | <span className="flex"><FaPhoneAlt className="text-sky-500 text-xl mr-1" /> +88-01676379698</span>
        </p> 
        </p>
      </section>
    </div>
  );
};

export default Cv;

// import React from 'react';
// import selfImage from '../../assets/images/habib.jpg'
// import image from '../../assets/images/habibullah.jpg';
// import { RxResume } from 'react-icons/rx';
// import { Link } from 'react-router-dom';

// const AboutMe = () => {
//     return (
//         <div className=" bg-base-100 shadow-xl grid pb-10">
//             <h2 className=' text-center text-2xl p-10 font-serif'>About Me</h2>
//             <div className=' lg:justify-center lg:flex sm:grid md:grid'>


// <div className=' w-1/2 ml-10 md:flex lg:flex  md:justify-center lg:justify-center image-des'>

//                             {/* <img className=' w-52 -z-10 top-72' src={imgObject} alt="" /> */}

//                             <img src={image} alt='' className=" w-96 left-36 border-x-4 border-orange-300" style={{ borderRadius: '50%', }} />

//                             <div id='blur-position' className='blur-sector'>
//                             </div>

//                             <div id='blur-position2' className='blur-sector'></div>
//                         </div>


//                 {/* <div className='lg:w-1/2 flex justify-center items-center'>
//                     <figure className='w-52'><img src={selfImage} alt="" className=' w-48 rounded-full border border-solid border-sky-500' /></figure>
//                 </div> */}

//                 <div className="lg:w-1/2 card-body">

//                     <div className='lg:flex lg:justify-between sm:grid ' style={{ fontFamily: "'EB Garamond', serif" }}>
//                         <div>
//                             <p className='mb-2'><span className='text-sky-400'>Name:</span> Md.Habibullah</p>
//                             <p className='mb-2'><span className='text-sky-400'>BirthDate:</span> 07th May 2000</p>
//                             <p className='mb-2'><span className='text-sky-400'>Present Address:</span> Mirpur,Bangladesh</p>
//                             <p className='mb-2'><span className='text-sky-400'>Language:</span> Bangla, English</p>
//                         </div>
//                         <div>
//                             <p className='mb-2'><span className='text-sky-400'>Nationality:</span> Bangladeshi</p>
//                             <p className='mb-2'><span className='text-sky-400'>Relagion:</span> Islam</p>
//                             {/* <p className='mb-2'><span className='text-sky-400'>Job Availbility:</span> Part-time</p> */}
//                             <p className='mb-2'><span className='text-sky-400'>Email:</span> md.habibullah7520@gmail.com</p>
//                             <p className='mb-2'><span className='text-sky-400'>phone:</span> +8801609-111813, +8801736-591805</p>
//                             <p></p>
//                         </div>
//                     </div>
//                     <div className="card-actions justify-end">
//                         <Link to={'/habibcv'} className="btn-info btn-outline flex gap-2 rounded-full p-2">Watch my CV <RxResume /> <hr /></Link>
//                     </div>
//                 </div>
//             </div>
            
//         </div>
//     );
// };

// export default AboutMe;



import React from 'react';
import { motion } from 'framer-motion';
import selfImage from '../../assets/images/habib.jpg';
import image from '../../assets/images/habibullah.jpg';
import { RxResume } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <section id='aboutme' className="relative w-10/12 mx-auto bg-gradient-to-r from-white via-gray-50 to-white shadow-xl py-12 px-6">
      <h2 className="text-center text-4xl font-bold font-serif mb-10 text-gray-800 relative">
        About Me
        <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-gradient-to-r from-sky-400 to-orange-400 transform -translate-x-1/2"></span>
      </h2>
      <p className='text-center text-gray-600 mb-10 px-4 md:px-20 lg:px-40 w-[50%] mx-auto'>
        Motivated and detail-oriented Junior Web Developer with a strong
          foundation in front-end and back-end technologies. Passionate
          about building responsive, user-friendly web applications and
          eager to contribute to a dynamic development team.</p>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Profile Image with Effects */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <img
              src={image}
              alt="Habibullah"
              className="w-72 h-72 object-cover rounded-full border-4 border-orange-400 shadow-lg group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400 to-sky-400 opacity-20 blur-2xl group-hover:opacity-40 transition duration-500"></div>
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-lg bg-white/50 shadow-md p-6 rounded-2xl"
        >
          <div className="grid sm:grid-cols-2 gap-6 text-gray-700 font-serif">
            <div>
              <p><span className="font-semibold text-sky-500">Name:</span> Md.Habibullah</p>
              <p><span className="font-semibold text-sky-500">Birth Date:</span> 07th May 2000</p>
              <p><span className="font-semibold text-sky-500">Address:</span> Mirpur, Bangladesh</p>
              <p><span className="font-semibold text-sky-500">Language:</span> Bangla, English</p>
            </div>
            <div>
              <p><span className="font-semibold text-sky-500">Nationality:</span> Bangladeshi</p>
              <p><span className="font-semibold text-sky-500">Religion:</span> Islam</p>
              <p><span className="font-semibold text-sky-500">Email:</span> md.habibullah7520@gmail.com</p>
              <p><span className="font-semibold text-sky-500">Phone:</span> +8801609-111813, +8801736-591805</p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6 flex justify-end">
            <Link
              to="/habibcv"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-sky-400 to-orange-400 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
            >
              Watch my CV 
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <RxResume size={22} />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
import React from 'react';
import bgImage from '../../assets/images/sliderImage.jpg';
import javalogo from '../../assets/images/javalogo.png'
// import { CProgress } from '@coreui/react';
// import { Progress } from 'flowbite-react';
import ProgressBar from '@ramonak/react-progress-bar';
import mernLogo from '../../assets/images/mernStack.png';
import uiuxlogo from '../../assets/images/UiUxLogo.png';
import pyth from '../../assets/images/python.png';
import './MySkills.css';

const MySkills = () => {
    const color ="black"
    return (
        <div style={{ backgroundImage:`linear-gradient(to bottom, rgba(54, 46, 46, 0.527),rgba(54, 46, 46, 0.527)), url(${bgImage})`, 
        backgroundSize:"45%", backgroundAttachment:"fixed", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover"}}
        >

            <h2 className=" text-3xl font-semibold text-center text-white p-5">My Skills</h2>


            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 p-8'>
                <div className="card glass">
                    <figure><img src={mernLogo} alt="car!" className=' w-32' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Full Stack Development(MERN)</h2>
                        <ProgressBar
                            completed={95}
                            labelColor="white"
                            height='15px'
                            bgColor='DodgerBlue'
                        />

                    </div>
                </div>



                <div className="card glass">
                    <figure><img src={javalogo} alt="car!" className=' w-32' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">JAVA</h2>
                        <div>
                            <h3 className='text-white'>Java Language</h3>
                            <ProgressBar
                            completed={50}
                            labelColor="white"
                            height='15px'
                            bgColor='DodgerBlue'
                        />
                        </div>
                        <div>
                            <h2 className='text-white'>OOP Concepts</h2>
                            <ProgressBar
                            completed={80}
                            labelColor="white"
                            height='15px'
                            bgColor='DodgerBlue'
                        />
                        </div>

                    </div>
                </div>




                <div className="card glass">
                    <figure><img src={uiuxlogo} alt="car!" className=' w-32' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white text-center">UI/UX</h2>
                        <ProgressBar
                            completed={20}
                            labelColor="white"
                            height='15px'
                            bgColor='DodgerBlue'
                        />

                    </div>
                </div>


                <div className="card glass">
                    <figure><img src={pyth} alt="car!" className=' w-32' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Python</h2>
                        <ProgressBar
                            completed={80}
                            labelColor="white"
                            height='15px'
                            bgColor='DodgerBlue'
                        />

                    </div>
                </div>



            </div>
        </div>
    );
};

export default MySkills;
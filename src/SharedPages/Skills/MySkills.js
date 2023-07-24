import React from 'react';
import bgImage from '../../assets/images/sliderImage.jpg';
import javalogo from '../../assets/images/javalogo.png'
// import { CProgress } from '@coreui/react';
// import { Progress } from 'flowbite-react';
import ProgressBar from '@ramonak/react-progress-bar';
import mernLogo from '../../assets/images/mernStack.png';
import uiuxlogo from '../../assets/images/UiUxLogo.png';
import pyth from '../../assets/images/python.png';

const MySkills = () => {
    return (
        <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize:"45%" }}>

            <h2 className=" text-3xl font-semibold text-center text-white p-10 glass">My Skills</h2>


            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 p-10'>
                <div className="card glass hover:hidden">
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



                <div className="card glass hover:hidden">
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




                <div className="card glass hover:hidden">
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


                <div className="card glass hover:hidden">
                    <figure><img src={pyth} alt="car!" className=' w-32' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Python</h2>
                        <ProgressBar
                            completed={1}
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
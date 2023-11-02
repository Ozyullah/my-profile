import React from 'react';
import image from '../../assets/images/habib.jpg';
import { TypeAnimation } from 'react-type-animation';
import { BsFillArrowRightCircleFill, VscPreview } from 'react-icons/bs';
import salam from '../../assets/images/salam.png';
import './Slider.css';
import { Link } from 'react-router-dom';
// import bganimation from '../../assets/images/stars animated.mp4';
// import sliderAnimation from '../../assets/images/day animation.mp4';

const Slider = () => {
    return (
        <div className='slider-body'>
            <div >
                {/* <div className=' sm:hidden layerOver'></div> */}
                {/* <video className='bgSlide' src={sliderAnimation} autoPlay loop muted></video> */}
            </div>
            <div>
                <div className='flex justify-end'>
                <img src={salam} alt="" className='w-16 ' />
                </div>
                <div className="hero bg-base-100 shadow-lg">

                    <div className="hero-content flex-col lg:flex-row-reverse">
                        {/* <div className=''>
                            
                        </div> */}

                        <div className=' w-1/2 ml-10 md:flex lg:flex  md:justify-center lg:justify-end'>

                            <img src={image} alt='' className=" w-52 shadow-2xl border-spacing-5 border-orange-300" style={{ borderRadius: '40%' }} />
                        </div>
                        <div className='grid w-1/2'>
                            <div className=' text-sky-600'>
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed once, initially
                                        `I'm front-end web Developer`,
                                        1000,
                                        `I'm Full-Stack web Developer (MERN)`,
                                        1000,
                                        `I'm React developer`,
                                        1000,
                                    ]}
                                    speed={10}
                                    style={{ fontSize: '', color: '' }}
                                    repeat={Infinity}
                                />
                            </div>

                            <div>
                                <p className=' font-serif'>As a computer science & engineering student, my career goal is to apply my knowledge and skills to develop innovative solutions that solve real-world problems. I aim to contribute to the field of technology by designing and implementing software applications that enhance efficiency, security and user experience. My goal is to continuously learn and adapt to emerging technologies while collaborating with diverse teams to create impactful and sustainable solutions in the ever-evolving world of computer science.</p>
                            </div>
                            <Link to={'/contact'}><button className="btn btn-info btn-outline w-40 mt-5">Contact me <BsFillArrowRightCircleFill className='text-2xl' /></button></Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
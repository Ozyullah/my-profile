import React from 'react';
import image from '../../assets/images/profile pic.png';
import imgObject from '../../assets/images/profileBg.png';
import { TypeAnimation } from 'react-type-animation';
import { BsFillArrowRightCircleFill, VscPreview } from 'react-icons/bs';
import salam from '../../assets/images/salam.png';
import './Slider.css';
import { Link } from 'react-router-dom';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { MdOutlineFacebook } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { ImTwitter } from 'react-icons/im';
import { IoIosMailOpen } from 'react-icons/io';
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


                        <div className=' w-1/2 ml-10 md:flex lg:flex  md:justify-center lg:justify-center image-des'>

                            {/* <img className=' w-52 -z-10 top-72' src={imgObject} alt="" /> */}

                            <img src={image} alt='' className=" w-52 left-36 border-spacing-5 border-orange-300" style={{ borderRadius: '40%', }} />

                            <div id='blur-position' className='blur-sector'>
                            </div>

                            <div id='blur-position2' className='blur-sector'></div>
                        </div>
                        <div className='w-1/2 flex'>
                            <div className='p-5'>
                                <a href="" className=''><TiSocialLinkedinCircular  className='mb-2 text-sky-400'/></a>
                                <a href="" className=''><MdOutlineFacebook className='mb-2 text-sky-400'/></a>

                                <a href=""><IoLogoWhatsapp className='mb-2 text-green-400'/></a>

                                <a href=""><ImTwitter className='mb-2 text-sky-400'/></a>

                                <a href=""><IoIosMailOpen/></a>
                            </div>
                            <div>
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
                                <Link to={'/contact'}><button className="btn btn-info btn-outline rounded-full mt-5">Contact me <BsFillArrowRightCircleFill className='text-2xl' /></button></Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
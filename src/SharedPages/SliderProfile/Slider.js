import React from 'react';
import image from '../../assets/images/habib.jpg';
import { TypeAnimation } from 'react-type-animation';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import salam from '../../assets/images/salam.png';
import './Slider.css';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div>
            <div>
            <img src={salam} alt="" className=' w-16'/>
            </div>
            <div className="hero bg-base-100 shadow-lg">
                
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=' w-1/2 ml-10 rounded-s-full flex justify-end' >
                    <img src={image} alt='' className=" w-96 rounded-lg shadow-2xl border-spacing-5 border-orange-300" style={{borderRadius:'40% 40% 0 0'}} />
                    </div>
                    <div className='grid w-1/2'>
                        <div>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    `I am Developer`,
                                    1000,
                                    'I am designer',
                                    1000,
                                    'I am business mentor',
                                    1000,
                                    'I am UI/UX designer',
                                    1000,
                                ]}
                                speed={50}
                                style={{ fontSize: '3em',color: 'blue'}}
                                repeat={Infinity}
                            />
                        </div>

                        <div>
                            <p className=' font-bold text-4xl'>hey i am devoloper i can build a website and i wait for your contact and you must be sure for your project</p>
                        </div>
                        <Link to={'/contact'}><button className="btn btn-info btn-outline w-40 mt-5">Contact me <BsFillArrowRightCircleFill className='text-2xl'/></button></Link>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Slider;
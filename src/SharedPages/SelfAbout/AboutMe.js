import React from 'react';
import selfImage from '../../assets/images/ozy.jpg'
import { RxResume } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl grid pb-10">
            <h2 className=' text-center p-10 border border-x-8 border-x-sky-400'>About Me</h2>
            <div className=' lg:justify-center lg:flex sm:grid md:grid'>
                
                <div className='flex justify-center items-center w-1/2'>
                <div className=' border border-solid border-sky-500'>
                <figure><img src={selfImage} alt="" className=' w-36'/></figure>
                </div>
                </div>
                <div className="w-1/2 card-body ">

                    <div className='flex justify-between sm:grid sm:grid-flow-col' style={{fontFamily:"'EB Garamond', serif"}}>
                        <div>
                            <p className='mb-2'><span className='text-sky-400'>Name:</span> Md.Habibullah</p>
                            <p className='mb-2'><span className='text-sky-400'>BirthDate:</span> 07th May 2000</p>
                            <p className='mb-2'><span className='text-sky-400'>Address:</span> Mirpur,Bangladesh</p>
                            <p className='mb-2'><span className='text-sky-400'>Language:</span> Bangla, English</p>
                        </div>
                        <div>
                            <p className='mb-2'><span className='text-sky-400'>Nationality:</span> Bangladeshi</p>
                            <p className='mb-2'><span className='text-sky-400'>Job Availbility:</span> Part-time</p>
                            <p className='mb-2'><span className='text-sky-400'>Email:</span> md.habibullah7520@gmail.com</p>
                            <p className='mb-2'><span className='text-sky-400'>phone:</span> +8801609111813</p>
                            <p></p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link className="btn-info btn-outline flex gap-2 rounded-lg p-2">Watch my CV <RxResume/> <hr/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
import React from 'react';
import usedProduct from '.././../assets/images/used product.png';
import travelImg from '../../assets/images/travel web.png';
import studyImg from '../../assets/images/tutorial web.png';
import { Link } from 'react-router-dom';
import './Projects.css'



const Projects = () => {

    // const projectComponent={

    // }

    return (
        <div className='p-11'>
            <h2 className='text-center'>My Projects</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-5 p-5'>


                    {/* 1st card */}

                    <div className=" -z-10 section-hover card bg-base-100 shadow-xl image-full">
                        <figure><img src={usedProduct} alt="" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title">Ecomerse web site</h2>
                            <p className='section-hidden'>This website is for buying and selling used laptops and other products. Here a seller can add his product and advertise any product if needed. If there is a problem with any product , the buyer can report it, which the admin can take action on.</p>
                            <div className="card-actions justify-end">
                                <a href='https://used-productes.web.app/' className="text-sky-400">Live Demo <hr className=''/></a>
                            </div>
                        </div>
                    </div>


                    {/* 2nd card */}

                    <div className="-z-10 section-hover card bg-base-100 shadow-xl image-full">
                        <figure><img src={travelImg} alt="" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title">Traveling website</h2>
                            <p className='section-hidden'>This website is traveling website and it can use for supoose if you want to go any place. you can know related information with this website.</p>
                            <div className="card-actions justify-end">
                                <a href='https://travel-services-e7ebe.firebaseapp.com/' className="text-sky-400">Live Demo <hr className=''/></a>
                            </div>
                        </div>
                    </div>


                        {/* 3rd card */}

                    <div className="-z-10 section-hover card bg-base-100 shadow-xl image-full">
                        <figure><img src={studyImg} alt="" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title">Study website</h2>
                            <p className='section-hidden'>This website is traveling website and it can use for supoose if you want to go any place. you can know related information with this website.</p>
                            <div className="card-actions justify-end">
                                <a href='https://study-platform-67075.firebaseapp.com/' className="text-sky-400">Live Demo <hr className=''/></a>
                            </div>
                        </div>
                    </div>


                <div className=''>
                    <img src={usedProduct} alt='' className=' rounded-lg'></img>
                </div>
            </div>
        </div>
    );
};

export default Projects;
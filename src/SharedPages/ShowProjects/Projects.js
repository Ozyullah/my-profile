import React from 'react';
import usedProduct from '.././../assets/images/best-laptop-medium.jpg';
import travelImg from '../../assets/images/traveling.jpg';
import studyImg from '../../assets/images/studyimage.png';
import { Link } from 'react-router-dom';
import './Projects.css'



const Projects = () => {
    return (
        <div className='p-11'>
            <h2 className='text-center'>My Projects</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-5 p-5'>
                <div className='section-hover hover:shadow-lg'>
                    <div>
                        <Link to={"https://used-productes.firebaseapp.com/"}><img src={usedProduct} alt='' className='rounded-lg'></img></Link>

                    </div>
                    <div className='section-hidden hover:glass'>
                            <h3 className=' text-center'>
                                Ecomerse web site
                            </h3>
                            <p className=''>This website is for buying and selling used laptops and other products. Here a seller can add his product and advertise any product if needed. If there is a problem with any product , the buyer can report it, which the admin can take action on.</p>
                        </div>


                </div>


                <div className='section-hover hover:shadow-lg'>
                    <Link to={"https://travel-services-e7ebe.firebaseapp.com/"}><img src={travelImg} alt='' className='rounded-lg'></img></Link>

                    <div className='section-hidden hover:glass'>
                        <h3 className=' text-center'>Traveling website</h3>
                        <p>This website is traveling website and it can use for supoose if you want to go any place. you can know related information with this website.</p>
                    </div>
                </div>


                <div className='section-hover hover:shadow-lg'>
                    <Link to={"https://study-platform-67075.firebaseapp.com/"}><img src={studyImg} alt='' className='rounded-lg'></img></Link>

                    <div className='section-hidden hover:glass'>
                        <h3 className=' text-center'>Study website</h3>
                        <p>This website is traveling website and it can use for supoose if you want to go any place. you can know related information with this website.</p>
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
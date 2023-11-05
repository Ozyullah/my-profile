import React from 'react';
// import {LiaConnectdevelop} from 'react-icons/lia';
import developmentIcon from '../../assets/images/development.png';
import design from '../../assets/images/designer.png';
import res from '../../assets/images/responcive.png';
// import { TypeAnimation } from 'react-type-animation';
import Marquee from 'react-fast-marquee';
import maintainence from '../../assets/images/website-Maintenance.png';
import './Services.css';

const Services = () => {
    return (
        <div className=' p-10'>
            <h2 className='text-2xl text-center font-serif'>Services</h2>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                <div className="card card-border bg-base-500 shadow-xl">
                    <img src={design} alt='' className=' w-36'></img>
                    <div className="card-body">
                        <h2 className="card-title">Web Design</h2>
                        <p className='p-text'>I provide professional and innovative website design and development services to help businesses and achieve their digital gools.</p>

                    </div>

                    <span className="top s-design"></span>
                    <span className="right s-design"></span>
                    <span className="bottom s-design"></span>
                    <span className="left s-design"></span>
                </div>


                <div className="card card-border bg-base-100 shadow-xl">
                    {/* <h1><LiaConnectdevelop className='text-5xl w-10 ml-5'/></h1> */}
                    <img src={developmentIcon} alt='' className=' w-36'></img>
                    <div className="card-body">
                        <h2 className="card-title">Web Application</h2>
                        <p className='p-text'>I'm a detail-oriented web developer, passionate about creating engaging applications that drive business success.</p>

                    </div>

                    <span className="top s-design"></span>
                    <span className="right s-design"></span>
                    <span className="bottom s-design"></span>
                    <span className="left s-design"></span>
                </div>


                <div className="card card-border bg-base-100 shadow-xl">
                    <img src={res} alt='' className=' w-40'></img>
                    <div className="card-body">
                        <h2 className="card-title">Responsive Design</h2>
                        <p className='p-text'>As a skilled web developer. I craft visually engaging and user-friendly websites through responsive design techniques</p>

                    </div>

                    <span className="top s-design"></span>
                    <span className="right s-design"></span>
                    <span className="bottom s-design"></span>
                    <span className="left s-design"></span>
                </div>



                <div className="card card-border bg-base-100 shadow-xl">
                    <img src={maintainence} alt='' className=' w-40'></img>
                    <div className="card-body">
                        <h2 className="card-title text-2px">Website Maintenance and Support</h2>
                        <p className='p-text'>As a dedicated WebSite Maintenance and Support professional, I excel in providing assistance and ensuring seamless online experiences for clients</p>

                    </div>

                    <span className="top s-design"></span>
                    <span className="right s-design"></span>
                    <span className="bottom s-design"></span>
                    <span className="left s-design"></span>
                </div>
            </div>
            <div className=''>
                <Marquee className='-z-10 text-sky-400 select-none'>I will try my best services.</Marquee>
            </div>
        </div>
    );
};

export default Services;
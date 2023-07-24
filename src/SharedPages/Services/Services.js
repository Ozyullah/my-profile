import React from 'react';
// import {LiaConnectdevelop} from 'react-icons/lia';
import developmentIcon from '../../assets/images/development.png';
import design from '../../assets/images/designer.png';
import res from '../../assets/images/responcive.png';
import { TypeAnimation } from 'react-type-animation';

const Services = () => {
    return (
        <div className=' p-14'>
            <h2 className='text-2xl text-center p-10'>Services</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                <div className="card bg-base-500 shadow-xl">
                    <img src={design} alt='' className=' w-36'></img>
                    <div className="card-body">
                        <h2 className="card-title">Web Design</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>


                <div className="card bg-base-100 shadow-xl">
                    {/* <h1><LiaConnectdevelop className='text-5xl w-10 ml-5'/></h1> */}
                    <img src={developmentIcon} alt='' className=' w-40'></img>
                    <div className="card-body">
                        <h2 className="card-title">Web Application</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>


                <div className="card bg-base-100 shadow-xl">
                <img src={res} alt='' className=' w-40'></img>
                    <div className="card-body">
                        <h2 className="card-title">Responsive Design</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>



                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>
            </div>
            <div>
                            <TypeAnimation
                                sequence={[
                                    `I will try my best services`,
                                    1000,
                                    `I will try my best services`,
                                    1000,
                                    `I will try my best services`,
                                    1000,
                                    `I will try my best services`,
                                    1000,
                                    `I will try my best services`,
                                    1000,
                                    `I will try my best services`,
                                    1000,
                                    
                                ]}
                                speed={5}
                                style={{ fontSize: '10px',color: 'blue',display:'flex'}}
                                repeat={Infinity}
                            />
                        </div>
        </div>
    );
};

export default Services;
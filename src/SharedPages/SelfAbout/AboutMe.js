import React from 'react';
import selfImage from '../../assets/images/ozy.jpg'

const AboutMe = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl grid pb-10">
            <h2 className=' text-center p-10 border border-x-8 border-x-sky-400'>About Me</h2>
            <div className='flex sm:grid-cols-1'>
                
                <div className='flex justify-start w-1/2'>
                <figure><img src={selfImage} alt="" className=' w-96 pl-10 rounded-3xl'/></figure>
                </div>
                <div className="card-body flex justify-center">

                    <h2 className="card-title">Welcome to Habibullah <br/> I`m a Web Developer</h2>

                    <p>Click the button to watch on Jetflix app.al
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch my CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
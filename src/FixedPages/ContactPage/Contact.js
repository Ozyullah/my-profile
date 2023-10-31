import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMailOpen } from 'react-icons/io';

const Contact = () => {
    return (
        <div className='p-10'>
            <h2 className=' text-center pb-3 font-serif'>Contact me</h2>

            <div>
                <div className=' flex justify-center justify-evenly'>
                    <h3 className='flex gap-2'><IoIosMailOpen className='text-sky-500' /> md.habibullah7520@gmail.com</h3>

                    <h3 className='flex gap-2'><FaPhoneAlt className='text-sky-500'/> +8801609111813</h3>
                </div>
            </div>
            <div className='grid justify-center gap-5 pt-10'>
                <div className='flex space-x-5'>
                    <input type="email" placeholder="Enter your email address" className="input input-bordered w-full max-w-xs" required />
                    <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs" required />
                </div>

                <textarea placeholder="Write your massege" className="textarea textarea-bordered text-sm textarea-lg w-full max-w-xs" ></textarea>
                <button className='btn btn-info btn-outline'>Send</button>
            </div>
        </div>
    );
};

export default Contact;
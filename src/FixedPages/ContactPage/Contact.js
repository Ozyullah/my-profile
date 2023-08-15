import React from 'react';

const Contact = () => {
    return (
        <div className=' bg-sky-100'>
            <h1 className=' text-center p-10 font-serif font-semibold text-cyan-500'>Contact with Habibullah</h1>
            <div className='grid justify-center gap-5'>
            <input type="email" placeholder="Enter your email address" className="input input-bordered w-full max-w-xs" required/>
            <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs" required/>
            <input type="text" placeholder="Enter your Phone number" className="input input-bordered w-full max-w-xs" />

            <textarea placeholder="Write your Massage" className="textarea textarea-bordered text-sm textarea-lg w-full max-w-xs" ></textarea>
            <button className='btn btn-info btn-outline'>Send Massage</button>
            </div>
        </div>
    );
};

export default Contact;
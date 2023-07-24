import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className=' text-center p-10'>Contact with Habibullah</h1>
            <div className='grid justify-center gap-5'>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

            <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
            <button className='btn btn-primary btn-outline'>Submite</button>
            </div>
        </div>
    );
};

export default Contact;
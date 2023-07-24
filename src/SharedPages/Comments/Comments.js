import React from 'react';

const Comments = () => {
    return (
        <div className='p-10'>
            <h2 className=' text-center pb-3 font-serif'>Observation</h2>
            <div className='grid justify-center gap-5'>
                <div className='flex space-x-5'>
                    <input type="email" placeholder="Enter your email address" className="input input-bordered w-full max-w-xs" required />
                    <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs" required />
                </div>

                <textarea placeholder="Write your Text" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                <button className='btn btn-info btn-outline'>Submite</button>
            </div>
        </div>
    );
};

export default Comments;
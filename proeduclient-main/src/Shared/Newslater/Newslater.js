import React from 'react';
import './Newslater.css'

const Newsletter = () => {
    return (
        <div className='newslater bg-info'>
            <div className='text-center'>
                <label htmlFor="email"><p>Subscribe to our newsletter</p></label> <br />
                <input className='py-2' type="email" name="email" id="email" placeholder='Enter your email address'/>
                <button className=' ms-2 px-4 py-2 rounded-2 border border-0 '>Subscribe</button>
            </div>
            <div className='newslater-sub bg-info'>

            </div>
        </div>
    );
};

export default Newsletter;